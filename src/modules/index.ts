import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AEModule } from './ae/ae.module';
import { RoutingModule } from './routing/routing.module';
import { MappingModule } from './mapping/mapping.module';
import { EventModule } from './event/event.module';
import { HL7Module } from './hl7/hl7.module';
import { FHIRModule } from './fhir/fhir.module';
import { CoreModule } from './core/core.module';
import { ValidationModule } from './validation/validation.module';
import {
  ApplicationEntity,
  ApplicationEntitySchema,
  RoutingTableSchema,
  RoutingTableSchemas,
  StandardMappingSchema,
  StandardMappingSchemas,
  MessageEventSchema,
  MessageEventSchemas,
  EventStreamSchema,
  EventStreamSchemas,
  ValidationRuleSchema,
  ValidationRuleSchemas,
} from './core/schemas';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ApplicationEntity.name, schema: ApplicationEntitySchema },
      { name: RoutingTableSchema.name, schema: RoutingTableSchemas },
      { name: StandardMappingSchema.name, schema: StandardMappingSchemas },
      { name: MessageEventSchema.name, schema: MessageEventSchemas },
      { name: EventStreamSchema.name, schema: EventStreamSchemas },
      { name: ValidationRuleSchema.name, schema: ValidationRuleSchemas },
    ]),
    AEModule,
    RoutingModule,
    MappingModule,
    EventModule,
    HL7Module,
    FHIRModule,
    CoreModule,
    ValidationModule,
    HealthModule,
  ],
  exports: [AEModule, RoutingModule, MappingModule, EventModule, HL7Module, FHIRModule, CoreModule, ValidationModule, HealthModule],
})
export class ModulesModule {}