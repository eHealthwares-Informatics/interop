import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeederService } from './seeder.service';
import {
  ApplicationEntity,
  ApplicationEntitySchema,
  RoutingTableSchema,
  RoutingTableSchemas,
  StandardMappingSchema,
  StandardMappingSchemas,
  ValidationRuleSchema,
  ValidationRuleSchemas,
} from '../modules/core/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ApplicationEntity.name, schema: ApplicationEntitySchema },
      { name: RoutingTableSchema.name, schema: RoutingTableSchemas },
      { name: StandardMappingSchema.name, schema: StandardMappingSchemas },
      { name: ValidationRuleSchema.name, schema: ValidationRuleSchemas },
    ]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class CommonModule {}