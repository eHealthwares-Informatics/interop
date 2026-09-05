import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';

@Schema({ timestamps: true, collection: 'event_streams' })
export class EventStreamSchema {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ type: String })
  messageId: string;

  @Prop({ type: [Object] })
  events: any[];

  @Prop({ type: String })
  status: string;

  @Prop({ type: Date })
  startTime: Date;

  @Prop({ type: Date })
  endTime?: Date;

  @Prop({ type: Number })
  totalDuration?: number;

  @Prop({ type: Number, default: 0 })
  errorCount: number;

  createdAt?: Date;
}

export type EventStreamDocument = EventStreamSchema;
export const EventStreamSchemas = SchemaFactory.createForClass(EventStreamSchema);
EventStreamSchemas.index({ messageId: 1 });