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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageFlowController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const message_flow_service_1 = require("../services/message-flow.service");
const application_entity_schema_1 = require("../../core/schemas/application-entity.schema");
const routing_table_schema_1 = require("../../core/schemas/routing-table.schema");
const standard_mapping_schema_1 = require("../../core/schemas/standard-mapping.schema");
const validation_rule_schema_1 = require("../../core/schemas/validation-rule.schema");
let MessageFlowController = class MessageFlowController {
    constructor(flowService, aeModel, routingModel, mappingModel, validationModel) {
        this.flowService = flowService;
        this.aeModel = aeModel;
        this.routingModel = routingModel;
        this.mappingModel = mappingModel;
        this.validationModel = validationModel;
    }
    async processOrder(body) {
        const payload = body.targetAE
            ? `${body.hl7Message}\rZRT|${body.targetAE}`
            : body.hl7Message;
        const result = await this.flowService.processHealthstackOrder(payload);
        return { success: true, result };
    }
    async processOrderFhir(body) {
        const result = await this.flowService.processHealthstackOrderFhir({
            ...body.resource,
            ...(body.targetAE ? { targetAE: body.targetAE } : {}),
        });
        return { success: true, result };
    }
    async processPatient(body) {
        const payload = body.hl7Message ?? body.resource;
        const result = await this.flowService.processHealthstackPatient(payload);
        return { success: true, result };
    }
    async processOrderModel(body) {
        const result = await this.flowService.processHealthstackOrderModel({
            ...body.orderModel,
            ...(body.targetAE ? { targetAE: body.targetAE } : {}),
        });
        return { success: true, result };
    }
    async processMessage(body) {
        const result = await this.flowService.processMessage({
            sourceAE: body.sourceAE,
            targetAE: body.targetAE,
            messageType: body.messageType,
            protocol: body.protocol,
            payload: body.payload,
        });
        return { success: true, result };
    }
    async getTopology() {
        const applicationEntities = await this.aeModel.find().exec();
        const routingTables = await this.routingModel.find().exec();
        const mappings = await this.mappingModel.find().exec();
        const validationRules = await this.validationModel.find().exec();
        return { applicationEntities, routingTables, mappings, validationRules };
    }
    async listTraces(limit = '20') {
        return this.flowService.listRecentTraces(Number(limit));
    }
    async getAudit(messageId) {
        return this.flowService.getAuditForMessage(messageId);
    }
};
exports.MessageFlowController = MessageFlowController;
__decorate([
    (0, common_1.Post)('healthstack/order'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageFlowController.prototype, "processOrder", null);
__decorate([
    (0, common_1.Post)('healthstack/order-fhir'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageFlowController.prototype, "processOrderFhir", null);
__decorate([
    (0, common_1.Post)('healthstack/patient'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageFlowController.prototype, "processPatient", null);
__decorate([
    (0, common_1.Post)('healthstack/order-model'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageFlowController.prototype, "processOrderModel", null);
__decorate([
    (0, common_1.Post)('messages'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageFlowController.prototype, "processMessage", null);
__decorate([
    (0, common_1.Get)('topology'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageFlowController.prototype, "getTopology", null);
__decorate([
    (0, common_1.Get)('traces'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageFlowController.prototype, "listTraces", null);
__decorate([
    (0, common_1.Get)('audit/:messageId'),
    __param(0, (0, common_1.Param)('messageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageFlowController.prototype, "getAudit", null);
exports.MessageFlowController = MessageFlowController = __decorate([
    (0, common_1.Controller)('v1/flow'),
    __param(1, (0, mongoose_1.InjectModel)(application_entity_schema_1.ApplicationEntity.name)),
    __param(2, (0, mongoose_1.InjectModel)(routing_table_schema_1.RoutingTableSchema.name)),
    __param(3, (0, mongoose_1.InjectModel)(standard_mapping_schema_1.StandardMappingSchema.name)),
    __param(4, (0, mongoose_1.InjectModel)(validation_rule_schema_1.ValidationRuleSchema.name)),
    __metadata("design:paramtypes", [message_flow_service_1.MessageFlowService,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], MessageFlowController);
//# sourceMappingURL=message-flow.controller.js.map