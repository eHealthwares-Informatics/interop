import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';
import { StandardMapping } from '../../../common/models';

@Schema({ timestamps: true, collection: 'standard_mappings' })
export class StandardMappingSchema {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String })
  sourceProtocol: string;

  @Prop({ type: String })
  targetProtocol: string;

  @Prop({ type: String })
  sourceMessageType: string;

  @Prop({ type: String })
  targetMessageType: string;

  @Prop({ type: [Object] })
  mappingSteps: any[];

  @Prop({ type: Object })
  globalLookups?: Record<string, any>;

  @Prop({ type: String })
  version: string;

  @Prop({ type: Boolean, default: true })
  active: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

export type StandardMappingDocument = StandardMappingSchema;
export const StandardMappingSchemas = SchemaFactory.createForClass(StandardMappingSchema);
StandardMappingSchemas.index({ name: 1, version: 1 }, { unique: true });