import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutingController } from './controllers';
import { RoutingEngineService } from './services';
import { RoutingTableSchema, RoutingTableSchemas } from '../core/schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: RoutingTableSchema.name, schema: RoutingTableSchemas }])],
  controllers: [RoutingController],
  providers: [RoutingEngineService],
  exports: [RoutingEngineService],
})
export class RoutingModule {}