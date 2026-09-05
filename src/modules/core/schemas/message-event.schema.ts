import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';

@Schema({ timestamps: true, collection: 'message_events' })
export class MessageEventSchema {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ type: String })
  eventType: string;

  @Prop({ type: String })
  messageId: string;

  @Prop({ type: String })
  correlationId: string;

  @Prop({ type: Date })
  timestamp: Date;

  @Prop({ type: Number })
  sequenceNumber: number;

  @Prop({ type: String })
  sourceAE: string;

  @Prop({ type: String })
  targetAE?: string;

  @Prop({ type: String })
  status: string;

  @Prop({ type: Object })
  metadata: any;

  @Prop({ type: Object })
  snapshot: any;

  @Prop({ type: Number })
  duration?: number;

  @Prop({ type: String })
  errorMessage?: string;

  @Prop({ type: String })
  stackTrace?: string;

  createdAt?: Date;
}

export type MessageEventDocument = MessageEventSchema;
export const MessageEventSchemas = SchemaFactory.createForClass(MessageEventSchema);
MessageEventSchemas.index({ messageId: 1, timestamp: 1 });
MessageEventSchemas.index({ correlationId: 1 });
MessageEventSchemas.index({ sourceAE: 1 });