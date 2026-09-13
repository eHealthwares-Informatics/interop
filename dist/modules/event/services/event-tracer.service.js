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
var EventTracerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTracerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("../../core/schemas");
const enums_1 = require("../../../common/enums");
let EventTracerService = EventTracerService_1 = class EventTracerService {
    constructor(eventModel, eventStreamModel) {
        this.eventModel = eventModel;
        this.eventStreamModel = eventStreamModel;
        this.logger = new common_1.Logger(EventTracerService_1.name);
        this.activeTraces = new Map();
    }
    startTrace(messageId, correlationId) {
        const trace = {
            messageId,
            events: [],
            status: enums_1.MessageStatus.RECEIVED,
            startTime: new Date(),
            errorCount: 0,
        };
        this.activeTraces.set(messageId, trace);
        this.logger.log(`Trace started for message: ${messageId}`);
    }
    async recordEvent(event) {
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
            this.logger.debug(`Event recorded: ${event.eventType} for message ${event.messageId}`);
        }
        catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            this.logger.error(`Failed to record event: ${err.message}`);
        }
    }
    async getEventStream(messageId) {
        const entity = await this.eventStreamModel.findOne({ messageId }).exec();
        if (entity) {
            return {
                messageId: entity.messageId,
                events: entity.events || [],
                status: entity.status,
                startTime: entity.startTime,
                endTime: entity.endTime,
                totalDuration: entity.totalDuration,
                errorCount: entity.errorCount,
            };
        }
        return null;
    }
    async listRecentTraces(limit = 20) {
        const entities = await this.eventStreamModel
            .find()
            .sort({ startTime: -1 })
            .limit(limit)
            .exec();
        return entities.map((entity) => ({
            messageId: entity.messageId,
            events: entity.events || [],
            status: entity.status,
            startTime: entity.startTime,
            endTime: entity.endTime,
            totalDuration: entity.totalDuration,
            errorCount: entity.errorCount,
        }));
    }
    async getAuditTrail(messageId) {
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
            events: events,
            sourceAE: firstEvent.sourceAE,
            targetAE: firstEvent.targetAE || '',
            messageType: 'UNKNOWN',
            status: lastEvent.status,
            priority: '',
            createdAt: firstEvent.createdAt,
            updatedAt: lastEvent.createdAt,
            retainedUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        };
    }
    async completeTrace(messageId, finalStatus) {
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
        this.logger.log(`Trace completed for message ${messageId} - Duration: ${trace.totalDuration}ms`);
        return trace;
    }
    createEventMetadata(correlationId, traceId, spanId, customData) {
        return {
            correlationId,
            traceId,
            spanId,
            customMetadata: customData,
            userAgent: process.env.USER_AGENT || 'unknown',
            sourceIP: process.env.SOURCE_IP || 'localhost',
        };
    }
    async purgeOldTraces(retentionDays = 90) {
        const cutoffDate = new Date(Date.now() - retentionDays * 24 * 60 * 60 * 1000);
        const result = await this.eventModel.deleteMany({
            createdAt: { $lt: cutoffDate },
        });
        this.logger.log(`Purged ${result.deletedCount} old events (before ${cutoffDate})`);
        return result.deletedCount || 0;
    }
};
exports.EventTracerService = EventTracerService;
exports.EventTracerService = EventTracerService = EventTracerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.MessageEventSchema.name)),
    __param(1, (0, mongoose_1.InjectModel)(schemas_1.EventStreamSchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], EventTracerService);
//# sourceMappingURL=event-tracer.service.js.map