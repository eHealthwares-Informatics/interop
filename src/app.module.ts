import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ModulesModule } from './modules';
import { CommonModule } from './common';
import { AppController } from './app.controller';

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
    ModulesModule,
    CommonModule,
  ],
  controllers: [AppController],
})
export class AppModule {}