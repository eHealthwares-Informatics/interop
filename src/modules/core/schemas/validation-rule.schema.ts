import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';

@Schema({ timestamps: true, collection: 'validation_rules' })
export class ValidationRuleSchema {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String })
  sourceAE?: string;

  @Prop({ type: String })
  messageType?: string;

  @Prop({ type: Boolean, default: true })
  enabled: boolean;

  @Prop({ type: [Object] })
  conditions: any[];

  @Prop({ type: Object })
  action: any;

  @Prop({ type: Object })
  failureResponse: any;

  createdAt?: Date;
  updatedAt?: Date;
}

export type ValidationRuleDocument = ValidationRuleSchema;
export const ValidationRuleSchemas = SchemaFactory.createForClass(ValidationRuleSchema);
ValidationRuleSchemas.index({ name: 1 }, { unique: true });