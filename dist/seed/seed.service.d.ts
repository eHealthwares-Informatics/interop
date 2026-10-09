import { Model } from 'mongoose';
import { ApplicationEntity } from '../modules/core/schemas/application-entity.schema';
import { RoutingTableSchema } from '../modules/core/schemas/routing-table.schema';
import { StandardMappingSchema } from '../modules/core/schemas/standard-mapping.schema';
import { ValidationRuleSchema } from '../modules/core/schemas/validation-rule.schema';
export declare class SeedService {
    private readonly aeModel;
    private readonly routingModel;
    private readonly mappingModel;
    private readonly validationModel;
    private readonly logger;
    constructor(aeModel: Model<ApplicationEntity>, routingModel: Model<RoutingTableSchema>, mappingModel: Model<StandardMappingSchema>, validationModel: Model<ValidationRuleSchema>);
    run(): Promise<void>;
    /**
     * Idempotently upserts documents keyed on the natural unique key(s).
     * Uses `$setOnInsert` so already-present (correct) data is never modified,
     * and ignores duplicate-key (E11000) errors so re-runs never crash.
     */
    private upsert;
    private isDuplicateKeyError;
    private buildApplicationEntities;
    private buildMappingDocuments;
    private buildValidationDocuments;
    private buildRoutingDocuments;
}
//# sourceMappingURL=seed.service.d.ts.map