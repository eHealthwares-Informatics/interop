import {
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ValidationRuleSchema } from '../../core/schemas';
import {
  RoutingRule,
  ValidationExecutionResult,
  ValidationRule,
} from '../../../common/models';
import { getValueByPath } from '../../../common/utils/path.util';
import { CodingConceptClientService } from './coding-concept-client.service';

@Injectable()
export class ValidationRuleService {
  constructor(
    @InjectModel(ValidationRuleSchema.name)
    private readonly validationModel: Model<ValidationRuleSchema>,
    private readonly codingConceptClient: CodingConceptClientService,
  ) {}

  async create(
    payload: Omit<ValidationRule, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<ValidationRule> {
    const entity = new this.validationModel(payload);
    const saved = await entity.save();
    return saved as unknown as ValidationRule;
  }

  async list(): Promise<ValidationRule[]> {
    const rules = await this.validationModel.find().sort({ name: 1 }).exec();
    return rules as unknown as ValidationRule[];
  }

  async get(id: string): Promise<ValidationRule | null> {
    const rule = await this.validationModel.findById(id).exec();
    return rule as ValidationRule | null;
  }

  async update(
    id: string,
    updates: Partial<ValidationRule>,
  ): Promise<ValidationRule | null> {
    await this.validationModel.findByIdAndUpdate(id, { $set: updates }).exec();
    return this.get(id);
  }

  async delete(id: string): Promise<void> {
    await this.validationModel.findByIdAndDelete(id).exec();
  }

  async evaluateRouteValidations(
    route: RoutingRule,
    canonicalMessage: Record<string, any>,
  ): Promise<ValidationExecutionResult[]> {
    if (
      !route.validationConfig?.enabled ||
      route.validationConfig?.useCodingServer === false ||
      !route.validationIds?.length
    ) {
      return [];
    }

    const rules = await this.validationModel.find({
      _id: { $in: route.validationIds },
    }).exec();
    const orderedRules = route.validationIds
      .map((validationId) =>
        rules.find((rule) => rule._id.toString() === validationId),
      )
      .filter(Boolean) as ValidationRuleSchema[];

    const results: ValidationExecutionResult[] = [];

    for (const rule of orderedRules) {
      if (!rule.enabled) {
        continue;
      }

      if (rule.sourceAE && rule.sourceAE !== canonicalMessage?.metadata?.sourceAE) {
        continue;
      }

      if (rule.messageType && rule.messageType !== canonicalMessage?.messageType) {
        continue;
      }

      const conditionsPassed = (rule.conditions || []).every((condition) =>
        this.evaluateCondition(canonicalMessage, condition),
      );
      if (!conditionsPassed) {
        continue;
      }

      const codeValue = getValueByPath(canonicalMessage, rule.action?.codePath || '');
      const concept = await this.codingConceptClient.searchConcept(
        rule.action.module,
        codeValue, 
        route.validationConfig?.metadata ?? rule.action.includeMetadata ?? false,
        route.validationConfig?.mode ?? rule.action.searchMode ?? 'search',
      );

      if (concept?.skipped) { 
        results.push({
          id: rule._id.toString(),
          name: rule.name,
          passed: true,
          codeValue,
          module: rule.action.module,
          metadata: { skipped: true },
        });
        continue;
      }

      if (concept && !concept.skipped) {
        results.push({
          id: rule._id.toString(),
          name: rule.name,
          passed: true,
          codeValue,
          module: rule.action.module,
          metadata: concept.metadata,
        });
        continue;
      }

      const failure = {
        statusCode: rule.failureResponse?.statusCode || 422,
        code: rule.failureResponse?.code || 'VALIDATION_FAILED',
        message:
          rule.failureResponse?.message ||
          `Validation failed for rule ${rule.name}`,
      };

      results.push({
        id: rule._id.toString(),
        name: rule.name,
        passed: false,
        codeValue,
        module: rule.action.module,
        failure,
      });

      throw new UnprocessableEntityException({
        message: failure.message,
        code: failure.code,
        routeId: route.id,
        targetAE: route.targetAE,
        validation: {
          id: rule._id.toString(),
          name: rule.name,
          module: rule.action.module,
          codeValue,
        },
        results,
      });
    }

    return results;
  }

  private evaluateCondition(message: any, condition: any): boolean {
    const value = getValueByPath(message, condition.field);
    const expected = condition.value;

    switch (condition.operator) {
      case 'equals':
        return value === expected;
      case 'contains':
        return Array.isArray(value)
          ? value.includes(expected)
          : String(value || '').includes(String(expected || ''));
      case 'in':
        return Array.isArray(expected) && expected.includes(value);
      default:
        return false;
    }
  }
}