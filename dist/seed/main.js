"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const seed_module_1 = require("./seed.module");
const seed_service_1 = require("./seed.service");
async function bootstrap() {
    const logger = new common_1.Logger('SeedBootstrap');
    const app = await core_1.NestFactory.createApplicationContext(seed_module_1.SeedModule, {
        logger: ['error', 'warn', 'log'],
    });
    try {
        await app.get(seed_service_1.SeedService).run();
        logger.log('Seed completed successfully.');
        await app.close();
        process.exit(0);
    }
    catch (error) {
        logger.error('Seed failed.', error instanceof Error ? error.stack : String(error));
        await app.close();
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map