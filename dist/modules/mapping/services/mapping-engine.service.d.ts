import { Model } from 'mongoose';
import { StandardMappingSchema } from '../../core/schemas';
import { StandardMapping, MappingResult, MappingContext, MappingEngine } from '../../../common/models';
export declare class MappingEngineService implements MappingEngine {
    private mappingModel;
    private readonly logger;
    constructor(mappingModel: Model<StandardMappingSchema>);
    createMapping(mapping: Omit<StandardMapping, 'id' | 'createdAt' | 'updatedAt'>): Promise<StandardMapping>;
    getMapping(id: string): Promise<StandardMapping | null>;
    updateMapping(id: string, updates: Partial<StandardMapping>): Promise<StandardMapping>;
    listMappings(filters?: {
        sourceProtocol?: string;
        targetProtocol?: string;
        active?: boolean;
    }): Promise<StandardMapping[]>;
    mapMessage(message: any, mapping: StandardMapping, context?: MappingContext): Promise<MappingResult>;
    private executeStep;
    private applySimpleTransformation;
    private applyComplexTransformation;
    private evaluateCondition;
    private evaluateExpression;
    private renderTemplate;
    private stringifyTemplateValue;
}
//# sourceMappingURL=mapping-engine.service.d.ts.map