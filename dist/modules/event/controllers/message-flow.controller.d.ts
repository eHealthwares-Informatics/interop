import { Model } from 'mongoose';
import { MessageFlowService } from '../services/message-flow.service';
import { ApplicationEntity } from '../../core/schemas/application-entity.schema';
import { RoutingTableSchema } from '../../core/schemas/routing-table.schema';
import { StandardMappingSchema } from '../../core/schemas/standard-mapping.schema';
import { ValidationRuleSchema } from '../../core/schemas/validation-rule.schema';
export declare class MessageFlowController {
    private readonly flowService;
    private readonly aeModel;
    private readonly routingModel;
    private readonly mappingModel;
    private readonly validationModel;
    constructor(flowService: MessageFlowService, aeModel: Model<ApplicationEntity>, routingModel: Model<RoutingTableSchema>, mappingModel: Model<StandardMappingSchema>, validationModel: Model<ValidationRuleSchema>);
    processOrder(body: {
        hl7Message: string;
        targetAE?: string;
    }): Promise<{
        success: boolean;
        result: import("../services").ProcessMessageResult;
    }>;
    processOrderFhir(body: {
        resource: Record<string, unknown>;
        targetAE?: string;
    }): Promise<{
        success: boolean;
        result: import("../services").ProcessMessageResult;
    }>;
    processPatient(body: {
        hl7Message?: string;
        resource?: Record<string, unknown>;
    }): Promise<{
        success: boolean;
        result: import("../services").ProcessMessageResult;
    }>;
    processOrderModel(body: {
        orderModel: Record<string, unknown>;
        targetAE?: string;
    }): Promise<{
        success: boolean;
        result: import("../services").ProcessMessageResult;
    }>;
    processMessage(body: {
        sourceAE: string;
        targetAE: string;
        messageType?: string;
        protocol?: string;
        payload: unknown;
    }): Promise<{
        success: boolean;
        result: import("../services").ProcessMessageResult;
    }>;
    getTopology(): Promise<{
        applicationEntities: (import("mongoose").Document<unknown, {}, ApplicationEntity, {}, import("mongoose").DefaultSchemaOptions> & ApplicationEntity & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[];
        routingTables: (import("mongoose").Document<unknown, {}, RoutingTableSchema, {}, import("mongoose").DefaultSchemaOptions> & RoutingTableSchema & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[];
        mappings: (import("mongoose").Document<unknown, {}, StandardMappingSchema, {}, import("mongoose").DefaultSchemaOptions> & StandardMappingSchema & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[];
        validationRules: (import("mongoose").Document<unknown, {}, ValidationRuleSchema, {}, import("mongoose").DefaultSchemaOptions> & ValidationRuleSchema & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    listTraces(limit?: string): Promise<import("../../../common").EventStream[]>;
    getAudit(messageId: string): Promise<import("../../../common").MessageEventAuditEntry>;
}
//# sourceMappingURL=message-flow.controller.d.ts.map