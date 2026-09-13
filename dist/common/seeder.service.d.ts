import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApplicationEntity } from '../modules/core/schemas/application-entity.schema';
import { RoutingTableSchema } from '../modules/core/schemas/routing-table.schema';
import { StandardMappingSchema } from '../modules/core/schemas/standard-mapping.schema';
import { ValidationRuleSchema } from '../modules/core/schemas/validation-rule.schema';
export declare class SeederService implements OnModuleInit {
    private readonly aeModel;
    private readonly routingModel;
    private readonly mappingModel;
    private readonly validationModel;
    constructor(aeModel: Model<ApplicationEntity>, routingModel: Model<RoutingTableSchema>, mappingModel: Model<StandardMappingSchema>, validationModel: Model<ValidationRuleSchema>);
    onModuleInit(): Promise<void>;
    private seedAEs;
    private seedMappings;
    private seedValidations;
    private seedRouting;
}
//# sourceMappingURL=seeder.service.d.ts.map