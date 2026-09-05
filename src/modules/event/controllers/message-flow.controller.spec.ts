import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { MessageFlowController } from './message-flow.controller';
import { MessageFlowService } from '../services/message-flow.service';
import { ApplicationEntity } from '../../core/schemas/application-entity.schema';
import { RoutingTableSchema } from '../../core/schemas/routing-table.schema';
import { StandardMappingSchema } from '../../core/schemas/standard-mapping.schema';
import { ValidationRuleSchema } from '../../core/schemas/validation-rule.schema';

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
  let controller: MessageFlowController;
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
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageFlowController],
      providers: [
        { provide: MessageFlowService, useValue: flowServiceMock },
        { provide: getModelToken(ApplicationEntity.name), useValue: mockModel },
        { provide: getModelToken(RoutingTableSchema.name), useValue: mockModel },
        { provide: getModelToken(StandardMappingSchema.name), useValue: mockModel },
        { provide: getModelToken(ValidationRuleSchema.name), useValue: mockModel },
      ],
    }).compile();

    controller = module.get<MessageFlowController>(MessageFlowController);
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