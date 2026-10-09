import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SeedModule } from './seed.module';
import { SeedService } from './seed.service';

async function bootstrap() {
  const logger = new Logger('SeedBootstrap');
  const app = await NestFactory.createApplicationContext(SeedModule, {
    logger: ['error', 'warn', 'log'],
  });

  try {
    await app.get(SeedService).run();
    logger.log('Seed completed successfully.');
    await app.close();
    process.exit(0);
  } catch (error) {
    logger.error('Seed failed.', error instanceof Error ? error.stack : String(error));
    await app.close();
    process.exit(1);
  }
}

bootstrap();
