"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMongo = startMongo;
exports.stopMongo = stopMongo;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
let replset;
async function startMongo() {
    replset = await mongodb_memory_server_1.MongoMemoryReplSet.create({
        binary: {
            version: '6.0.6',
            downloadDir: './mongo-binaries',
        },
        replSet: {
            count: 1,
            storageEngine: 'wiredTiger',
        },
    });
    const uri = replset.getUri();
    await mongoose_1.default.connect(uri);
    return uri;
}
async function stopMongo() {
    await mongoose_1.default.connection.dropDatabase();
    await mongoose_1.default.connection.close();
    if (replset) {
        await replset.stop();
    }
}
//# sourceMappingURL=test-mongo.helper.js.map