import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MappingController } from './controllers';
import { MappingEngineService } from './services';
import { StandardMappingSchema, StandardMappingSchemas } from '../core/schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: StandardMappingSchema.name, schema: StandardMappingSchemas }])],
  controllers: [MappingController],
  providers: [MappingEngineService],
  exports: [MappingEngineService],
})
export class MappingModule {}