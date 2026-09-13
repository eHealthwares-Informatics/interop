import { Model } from 'mongoose';
import { ValidationRuleSchema } from '../../core/schemas';
import { ContextEnrichmentResolveInput, ContextEnrichmentResult, ValidationRule } from '../../../common/models';
import { CodingConceptClientService } from './coding-concept-client.service';
export declare class ContextEnrichmentService {
    private readonly enrichmentModel;
    private readonly codingConceptClient;
    constructor(enrichmentModel: Model<ValidationRuleSchema>, codingConceptClient: CodingConceptClientService);
    create(payload: Omit<ValidationRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<ValidationRule>;
    list(): Promise<ValidationRule[]>;
    get(id: string): Promise<ValidationRule | null>;
    update(id: string, updates: Partial<ValidationRule>): Promise<ValidationRule | null>;
    delete(id: string): Promise<void>;
    resolve(input: ContextEnrichmentResolveInput): Promise<ContextEnrichmentResult>;
    private buildBaseContext;
    private buildFormulationContext;
    private mergeTerminologyContext;
    private resolveEnrichmentIds;
    private evaluateCondition;
}
//# sourceMappingURL=context-enrichment.service.d.ts.map