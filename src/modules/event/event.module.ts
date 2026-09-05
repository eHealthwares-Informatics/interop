import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HL7Module } from '../hl7/hl7.module';
import { FHIRModule } from '../fhir/fhir.module';
import { AEModule } from '../ae/ae.module';
import { RoutingModule } from '../routing/routing.module';
import { MappingModule } from '../mapping/mapping.module';
import { EventTracerService, MessageFlowService } from './services';
import { MockReceiverService } from './services/mock-receiver.service';
import { MessageFlowController } from './controllers';
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
} from '../core/schemas';
import { ValidationModule } from '../validation/validation.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MessageEventSchema.name, schema: MessageEventSchemas },
      { name: EventStreamSchema.name, schema: EventStreamSchemas },
      { name: ApplicationEntity.name, schema: ApplicationEntitySchema },
      { name: RoutingTableSchema.name, schema: RoutingTableSchemas },
      { name: StandardMappingSchema.name, schema: StandardMappingSchemas },
      { name: ValidationRuleSchema.name, schema: ValidationRuleSchemas },
    ]),
    AEModule,
    RoutingModule,
    MappingModule,
    HL7Module,
    FHIRModule,
    ValidationModule,
  ],
  controllers: [MessageFlowController],
  providers: [EventTracerService, MessageFlowService, MockReceiverService],
  exports: [EventTracerService, MessageFlowService, MockReceiverService],
})
export class EventModule {}