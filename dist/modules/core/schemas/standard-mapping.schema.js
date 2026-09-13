"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardMappingSchemas = exports.StandardMappingSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let StandardMappingSchema = class StandardMappingSchema {
};
exports.StandardMappingSchema = StandardMappingSchema;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, auto: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], StandardMappingSchema.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], StandardMappingSchema.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], StandardMappingSchema.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], StandardMappingSchema.prototype, "sourceProtocol", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], StandardMappingSchema.prototype, "targetProtocol", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], StandardMappingSchema.prototype, "sourceMessageType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], StandardMappingSchema.prototype, "targetMessageType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Object] }),
    __metadata("design:type", Array)
], StandardMappingSchema.prototype, "mappingSteps", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], StandardMappingSchema.prototype, "globalLookups", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], StandardMappingSchema.prototype, "version", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], StandardMappingSchema.prototype, "active", void 0);
exports.StandardMappingSchema = StandardMappingSchema = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'standard_mappings' })
], StandardMappingSchema);
exports.StandardMappingSchemas = mongoose_1.SchemaFactory.createForClass(StandardMappingSchema);
exports.StandardMappingSchemas.index({ name: 1, version: 1 }, { unique: true });
//# sourceMappingURL=standard-mapping.schema.js.map