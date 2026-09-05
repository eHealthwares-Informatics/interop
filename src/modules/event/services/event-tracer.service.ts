import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageEventSchema, EventStreamSchema } from '../../core/schemas';
import {
  MessageEvent,
  EventStream,
  EventTracer,
  MessageEventAuditEntry,
  EventMetadata,
} from '../../../common/models';
import { EventType, MessageStatus } from '../../../common/enums';

@Injectable()
export class EventTracerService implements EventTracer {
  private readonly logger = new Logger(EventTracerService.name);
  private activeTraces = new Map<string, EventStream>();

  constructor(
    @InjectModel(MessageEventSchema.name)
    private eventModel: Model<MessageEventSchema>,
    @InjectModel(EventStreamSchema.name)
    private eventStreamModel: Model<EventStreamSchema>,
  ) {}

  startTrace(messageId: string, correlationId: string): void {
    const trace: EventStream = {
      messageId,
      events: [],
      status: MessageStatus.RECEIVED,
      startTime: new Date(),
      errorCount: 0,
    };
    this.activeTraces.set(messageId, trace);
    this.logger.log(`Trace started for message: ${messageId}`);
  }

  async recordEvent(event: MessageEvent): Promise<void> {
    try {
      await new this.eventModel({
        ...event,
        correlationId: event.correlationId || event.metadata?.correlationId || '',
      }).save();

      const trace = this.activeTraces.get(event.messageId);
      if (trace) {
        trace.events.push(event);
        trace.status = event.status;
        if (event.errorMessage) {
          trace.errorCount++;
        }
      }

      this.logger.debug(
        `Event recorded: ${event.eventType} for message ${event.messageId}`,
      );
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      this.logger.error(`Failed to record event: ${err.message}`);
    }
  }

  async getEventStream(messageId: string): Promise<EventStream | null> {
    const entity = await this.eventStreamModel.findOne({ messageId }).exec();

    if (entity) {
      return {
        messageId: entity.messageId,
        events: entity.events || [],
        status: entity.status as MessageStatus,
        startTime: entity.startTime,
        endTime: entity.endTime,
        totalDuration: entity.totalDuration,
        errorCount: entity.errorCount,
      };
    }

    return null;
  }

  async listRecentTraces(limit: number = 20): Promise<EventStream[]> {
    const entities = await this.eventStreamModel
      .find()
      .sort({ startTime: -1 })
      .limit(limit)
      .exec();

    return entities.map((entity) => ({
      messageId: entity.messageId,
      events: entity.events || [],
      status: entity.status as MessageStatus,
      startTime: entity.startTime,
      endTime: entity.endTime,
      totalDuration: entity.totalDuration,
      errorCount: entity.errorCount,
    }));
  }

  async getAuditTrail(messageId: string): Promise<MessageEventAuditEntry | null> {
    const events = await this.eventModel
      .find({ messageId })
      .sort({ sequenceNumber: 1 })
      .exec();

    if (events.length === 0) {
      return null;
    }

    const firstEvent = events[0];
    const lastEvent = events[events.length - 1];

    return {
      id: messageId,
      messageId,
      events: events as unknown as MessageEvent[],
      sourceAE: firstEvent.sourceAE,
      targetAE: firstEvent.targetAE || '',
      messageType: 'UNKNOWN',
      status: lastEvent.status as MessageStatus,
      priority: '',
      createdAt: firstEvent.createdAt!,
      updatedAt: lastEvent.createdAt!,
      retainedUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    };
  }

  async completeTrace(
    messageId: string,
    finalStatus: MessageStatus,
  ): Promise<EventStream> {
    const trace = this.activeTraces.get(messageId);
    if (!trace) {
      throw new Error(`No active trace for message: ${messageId}`);
    }

    const now = new Date();
    trace.status = finalStatus;
    trace.endTime = now;
    trace.totalDuration =
      now.getTime() - trace.startTime.getTime();

    const entity = new this.eventStreamModel({
      messageId,
      events: trace.events,
      status: finalStatus,
      startTime: trace.startTime,
      endTime: trace.endTime,
      totalDuration: trace.totalDuration,
      errorCount: trace.errorCount,
    });

    await entity.save();
    this.activeTraces.delete(messageId);

    this.logger.log(
      `Trace completed for message ${messageId} - Duration: ${trace.totalDuration}ms`,
    );

    return trace;
  }

  createEventMetadata(
    correlationId: string,
    traceId: string,
    spanId: string,
    customData?: Record<string, any>,
  ): EventMetadata {
    return {
      correlationId,
      traceId,
      spanId,
      customMetadata: customData,
      userAgent: process.env.USER_AGENT || 'unknown',
      sourceIP: process.env.SOURCE_IP || 'localhost',
    };
  }

  async purgeOldTraces(retentionDays: number = 90): Promise<number> {
    const cutoffDate = new Date(
      Date.now() - retentionDays * 24 * 60 * 60 * 1000,
    );

    const result = await this.eventModel.deleteMany({
      createdAt: { $lt: cutoffDate },
    });

    this.logger.log(
      `Purged ${result.deletedCount} old events (before ${cutoffDate})`,
    );
    return result.deletedCount || 0;
  }
}