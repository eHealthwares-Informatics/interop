import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';
import { AEStatus, ProtocolType } from '../../../common/enums';
import { MappingReference } from '../../../common/models';

@Schema({ timestamps: true, collection: 'application_entities' })
export class ApplicationEntity {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String })
  facilityCode?: string;

  @Prop({ type: String })
  facilityId?: string;

  @Prop({ type: String })
  facilityName?: string;

  @Prop({ type: String })
  customId?: string;

  @Prop({ type: Object })
  facilityIdentifier?: Record<string, any>;

  @Prop({ type: Object })
  facility?: Record<string, any>;

  @Prop({ type: String })
  organizationId?: string;

  @Prop({ type: String, enum: Object.values(AEStatus), default: AEStatus.ACTIVE })
  status: AEStatus;

  @Prop({ type: Boolean, default: false })
  online: boolean;

  @Prop([String])
  inboundCapabilities: ProtocolType[];

  @Prop([String])
  outboundCapabilities: ProtocolType[];

  @Prop({ type: [Object] })
  inboundConfig: any[];

  @Prop({ type: [Object] })
  outboundConfig: any[];

  @Prop({ type: Object })
  mappings: MappingReference;

  @Prop({ type: Object })
  securitySettings: any;

  @Prop({ type: Object })
  attributes?: Record<string, any>;

  @Prop({ type: Date, default: null })
  deletedAt?: Date;

  createdAt?: Date;
  updatedAt?: Date;
}

export type ApplicationEntityDocument = ApplicationEntity;
export const ApplicationEntitySchema = SchemaFactory.createForClass(ApplicationEntity);
ApplicationEntitySchema.index({ facilityCode: 1, name: 1 }, { unique: true });