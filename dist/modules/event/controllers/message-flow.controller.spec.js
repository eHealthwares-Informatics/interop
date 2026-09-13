"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const mongoose_1 = require("@nestjs/mongoose");
const message_flow_controller_1 = require("./message-flow.controller");
const message_flow_service_1 = require("../services/message-flow.service");
const application_entity_schema_1 = require("../../core/schemas/application-entity.schema");
const routing_table_schema_1 = require("../../core/schemas/routing-table.schema");
const standard_mapping_schema_1 = require("../../core/schemas/standard-mapping.schema");
const validation_rule_schema_1 = require("../../core/schemas/validation-rule.schema");
const mockQuery = {
    exec: jest.fn().mockResolvedValue([]),
    sort: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
};
const mockModel = {
    find: jest.fn().mockReturnValue(mockQuery),
    findById: jest.fn().mockReturnValue(mockQuery),
    findOne: jest.fn().mockReturnValue(mockQuery),
    countDocuments: jest.fn().mockResolvedValue(0),
    create: jest.fn(),
    insertMany: jest.fn(),
};
describe('MessageFlowController', () => {
    let controller;
    const flowServiceMock = {
        processHealthstackOrder: jest.fn(),
        processHealthstackPatient: jest.fn(),
        processHealthstackOrderFhir: jest.fn(),
        processHealthstackOrderModel: jest.fn().mockResolvedValue({
            messageId: 'msg-1',
            targetAE: 'openelis',
        }),
        processMessage: jest.fn(),
        listRecentTraces: jest.fn().mockResolvedValue([]),
        getAuditForMessage: jest.fn().mockResolvedValue(null),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [message_flow_controller_1.MessageFlowController],
            providers: [
                { provide: message_flow_service_1.MessageFlowService, useValue: flowServiceMock },
                { provide: (0, mongoose_1.getModelToken)(application_entity_schema_1.ApplicationEntity.name), useValue: mockModel },
                { provide: (0, mongoose_1.getModelToken)(routing_table_schema_1.RoutingTableSchema.name), useValue: mockModel },
                { provide: (0, mongoose_1.getModelToken)(standard_mapping_schema_1.StandardMappingSchema.name), useValue: mockModel },
                { provide: (0, mongoose_1.getModelToken)(validation_rule_schema_1.ValidationRuleSchema.name), useValue: mockModel },
            ],
        }).compile();
        controller = module.get(message_flow_controller_1.MessageFlowController);
    });
    it('processOrderModel should call flow service and return success', async () => {
        const result = await controller.processOrderModel({
            orderModel: { test: true },
            targetAE: 'openelis',
        });
        expect(flowServiceMock.processHealthstackOrderModel).toHaveBeenCalledWith({
            test: true,
            targetAE: 'openelis',
        });
        expect(result).toEqual({
            success: true,
            result: {
                messageId: 'msg-1',
                targetAE: 'openelis',
            },
        });
    });
    it('getTopology should return application entities, routing tables, mappings, and validations', async () => {
        const result = await controller.getTopology();
        expect(mockModel.find).toHaveBeenCalled();
        expect(result).toEqual({
            applicationEntities: [],
            routingTables: [],
            mappings: [],
            validationRules: [],
        });
    });
});
//# sourceMappingURL=message-flow.controller.spec.js.map