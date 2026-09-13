import { Model } from 'mongoose';
import { MessageEventSchema, EventStreamSchema } from '../../core/schemas';
import { MessageEvent, EventStream, EventTracer, MessageEventAuditEntry, EventMetadata } from '../../../common/models';
import { MessageStatus } from '../../../common/enums';
export declare class EventTracerService implements EventTracer {
    private eventModel;
    private eventStreamModel;
    private readonly logger;
    private activeTraces;
    constructor(eventModel: Model<MessageEventSchema>, eventStreamModel: Model<EventStreamSchema>);
    startTrace(messageId: string, correlationId: string): void;
    recordEvent(event: MessageEvent): Promise<void>;
    getEventStream(messageId: string): Promise<EventStream | null>;
    listRecentTraces(limit?: number): Promise<EventStream[]>;
    getAuditTrail(messageId: string): Promise<MessageEventAuditEntry | null>;
    completeTrace(messageId: string, finalStatus: MessageStatus): Promise<EventStream>;
    createEventMetadata(correlationId: string, traceId: string, spanId: string, customData?: Record<string, any>): EventMetadata;
    purgeOldTraces(retentionDays?: number): Promise<number>;
}
//# sourceMappingURL=event-tracer.service.d.ts.map