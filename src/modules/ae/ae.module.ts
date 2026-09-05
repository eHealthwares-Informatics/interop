import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AEController } from './controllers';
import { AERegistryService } from './services';
import { ApplicationEntity, ApplicationEntitySchema } from '../core/schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: ApplicationEntity.name, schema: ApplicationEntitySchema }])],
  controllers: [AEController],
  providers: [AERegistryService],
  exports: [AERegistryService],
})
export class AEModule {}