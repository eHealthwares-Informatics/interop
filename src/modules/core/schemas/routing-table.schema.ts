import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';
import { RoutingTable } from '../../../common/models';

@Schema({ timestamps: true, collection: 'routing_tables' })
export class RoutingTableSchema {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: [Object] })
  routes: any[];

  @Prop({ type: String })
  defaultRoute?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export type RoutingTableDocument = RoutingTableSchema;
export const RoutingTableSchemas = SchemaFactory.createForClass(RoutingTableSchema);
RoutingTableSchemas.index({ name: 1 }, { unique: true });