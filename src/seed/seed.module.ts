import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
import { SeedService } from './seed.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI', 'mongodb://localhost:27017'),
        dbName: configService.get<string>('MONGODB_NAME', 'interoperability'),
      }),
    }),
    MongooseModule.forFeature([
      { name: ApplicationEntity.name, schema: ApplicationEntitySchema },
      { name: RoutingTableSchema.name, schema: RoutingTableSchemas },
      { name: StandardMappingSchema.name, schema: StandardMappingSchemas },
      { name: ValidationRuleSchema.name, schema: ValidationRuleSchemas },
    ]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
