import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ValidationRuleSchema, ValidationRuleSchemas } from '../core/schemas';
import { ValidationController } from './controllers';
import {
  CodingConceptClientService,
  ContextEnrichmentService,
  ValidationRuleService,
} from './services';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: ValidationRuleSchema.name, schema: ValidationRuleSchemas }]),
  ],
  controllers: [ValidationController],
  providers: [
    CodingConceptClientService,
    ContextEnrichmentService,
    ValidationRuleService,
  ],
  exports: [
    CodingConceptClientService,
    ContextEnrichmentService,
    ValidationRuleService,
  ],
})
export class ValidationModule {}