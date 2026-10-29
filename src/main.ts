import 'reflect-metadata';
import type { LogLevel } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

// Log verbosity from LOG_LEVEL: error | warn | log/info | debug | verbose | silent.
const LOG_LEVELS: Record<string, LogLevel[]> = {
  error: ['error', 'fatal'],
  warn: ['error', 'fatal', 'warn'],
  log: ['error', 'fatal', 'warn', 'log'],
  info: ['error', 'fatal', 'warn', 'log'],
  debug: ['error', 'fatal', 'warn', 'log', 'debug'],
  verbose: ['error', 'fatal', 'warn', 'log', 'debug', 'verbose'],
  silent: [],
};

function resolveLoggerLevels(value?: string): LogLevel[] {
  return LOG_LEVELS[(value ?? 'log').toLowerCase()] ?? LOG_LEVELS.log;
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: resolveLoggerLevels(process.env.LOG_LEVEL) });

  // Enable CORS
  app.enableCors();

  // Set global prefix
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new GlobalExceptionFilter())

  const port = process.env.PORT || 8090;
  await app.listen(port);

  console.log(`Healthcare Interoperability Switch Platform listening on port ${port}`);
}

bootstrap();
