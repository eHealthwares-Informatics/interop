import { Model } from 'mongoose';
import { ValidationRuleSchema } from '../../core/schemas';
import { RoutingRule, ValidationExecutionResult, ValidationRule } from '../../../common/models';
import { CodingConceptClientService } from './coding-concept-client.service';
export declare class ValidationRuleService {
    private readonly validationModel;
    private readonly codingConceptClient;
    constructor(validationModel: Model<ValidationRuleSchema>, codingConceptClient: CodingConceptClientService);
    create(payload: Omit<ValidationRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<ValidationRule>;
    list(): Promise<ValidationRule[]>;
    get(id: string): Promise<ValidationRule | null>;
    update(id: string, updates: Partial<ValidationRule>): Promise<ValidationRule | null>;
    delete(id: string): Promise<void>;
    evaluateRouteValidations(route: RoutingRule, canonicalMessage: Record<string, any>): Promise<ValidationExecutionResult[]>;
    private evaluateCondition;
}
//# sourceMappingURL=validation-rule.service.d.ts.map