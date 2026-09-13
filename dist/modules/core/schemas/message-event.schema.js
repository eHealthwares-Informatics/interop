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
exports.MessageEventSchemas = exports.MessageEventSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MessageEventSchema = class MessageEventSchema {
};
exports.MessageEventSchema = MessageEventSchema;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, auto: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], MessageEventSchema.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], MessageEventSchema.prototype, "eventType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], MessageEventSchema.prototype, "messageId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], MessageEventSchema.prototype, "correlationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], MessageEventSchema.prototype, "timestamp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], MessageEventSchema.prototype, "sequenceNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], MessageEventSchema.prototype, "sourceAE", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], MessageEventSchema.prototype, "targetAE", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], MessageEventSchema.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], MessageEventSchema.prototype, "metadata", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], MessageEventSchema.prototype, "snapshot", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], MessageEventSchema.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], MessageEventSchema.prototype, "errorMessage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], MessageEventSchema.prototype, "stackTrace", void 0);
exports.MessageEventSchema = MessageEventSchema = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'message_events' })
], MessageEventSchema);
exports.MessageEventSchemas = mongoose_1.SchemaFactory.createForClass(MessageEventSchema);
exports.MessageEventSchemas.index({ messageId: 1, timestamp: 1 });
exports.MessageEventSchemas.index({ correlationId: 1 });
exports.MessageEventSchemas.index({ sourceAE: 1 });
//# sourceMappingURL=message-event.schema.js.map