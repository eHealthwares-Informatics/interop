import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageFlowService } from '../services/message-flow.service';
import { ApplicationEntity } from '../../core/schemas/application-entity.schema';
import { RoutingTableSchema } from '../../core/schemas/routing-table.schema';
import { StandardMappingSchema } from '../../core/schemas/standard-mapping.schema';
import { ValidationRuleSchema } from '../../core/schemas/validation-rule.schema';

@Controller('v1/flow')
export class MessageFlowController {
  constructor(
    private readonly flowService: MessageFlowService,
    @InjectModel(ApplicationEntity.name)
    private readonly aeModel: Model<ApplicationEntity>,
    @InjectModel(RoutingTableSchema.name)
    private readonly routingModel: Model<RoutingTableSchema>,
    @InjectModel(StandardMappingSchema.name)
    private readonly mappingModel: Model<StandardMappingSchema>,
    @InjectModel(ValidationRuleSchema.name)
    private readonly validationModel: Model<ValidationRuleSchema>,
  ) {}

  @Post('healthstack/order')
  async processOrder(@Body() body: { hl7Message: string; targetAE?: string }) {
    const payload = body.targetAE
      ? `${body.hl7Message}\rZRT|${body.targetAE}`
      : body.hl7Message;
    const result = await this.flowService.processHealthstackOrder(payload);
    return { success: true, result };
  }

  @Post('healthstack/order-fhir')
  async processOrderFhir(
    @Body() body: { resource: Record<string, unknown>; targetAE?: string },
  ) {
    const result = await this.flowService.processHealthstackOrderFhir(
      {
        ...(body.resource as Record<string, any>),
        ...(body.targetAE ? { targetAE: body.targetAE } : {}),
      },
    );
    return { success: true, result };
  }

  @Post('healthstack/patient')
  async processPatient(
    @Body() body: { hl7Message?: string; resource?: Record<string, unknown> },
  ) {
    const payload = body.hl7Message ?? body.resource;
    const result = await this.flowService.processHealthstackPatient(
      payload as string | Record<string, any>,
    );
    return { success: true, result };
  }

  @Post('healthstack/order-model')
  async processOrderModel(
    @Body() body: { orderModel: Record<string, unknown>; targetAE?: string },
  ) {
    const result = await this.flowService.processHealthstackOrderModel(
      {
        ...(body.orderModel as Record<string, any>),
        ...(body.targetAE ? { targetAE: body.targetAE } : {}),
      },
    );
    return { success: true, result };
  }

  @Post('messages')
  async processMessage(
    @Body()
    body: {
      sourceAE: string;
      targetAE: string;
      messageType?: string;
      protocol?: string;
      payload: unknown;
    },
  ) {
    const result = await this.flowService.processMessage({
      sourceAE: body.sourceAE,
      targetAE: body.targetAE,
      messageType: body.messageType as any,
      protocol: body.protocol as any,
      payload: body.payload,
    });
    return { success: true, result };
  }

  @Get('topology')
  async getTopology() {
    const applicationEntities = await this.aeModel.find().exec();
    const routingTables = await this.routingModel.find().exec();
    const mappings = await this.mappingModel.find().exec();
    const validationRules = await this.validationModel.find().exec();
    return { applicationEntities, routingTables, mappings, validationRules };
  }

  @Get('traces')
  async listTraces(@Query('limit') limit = '20') {
    return this.flowService.listRecentTraces(Number(limit));
  }

  @Get('audit/:messageId')
  async getAudit(@Param('messageId') messageId: string) {
    return this.flowService.getAuditForMessage(messageId);
  }
}