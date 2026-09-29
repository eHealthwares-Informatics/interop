import { Schema as MongooseSchema, Types } from 'mongoose';
export declare class EventStreamSchema {
    _id: Types.ObjectId;
    messageId: string;
    events: any[];
    status: string;
    startTime: Date;
    endTime?: Date;
    totalDuration?: number;
    errorCount: number;
    createdAt?: Date;
}
export type EventStreamDocument = EventStreamSchema;
export declare const EventStreamSchemas: MongooseSchema<EventStreamSchema, import("mongoose").Model<EventStreamSchema, any, any, any, any, any, EventStreamSchema>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    messageId?: import("mongoose").SchemaDefinitionProperty<string, EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    events?: import("mongoose").SchemaDefinitionProperty<any[], EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    status?: import("mongoose").SchemaDefinitionProperty<string, EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    startTime?: import("mongoose").SchemaDefinitionProperty<Date, EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    endTime?: import("mongoose").SchemaDefinitionProperty<Date, EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    totalDuration?: import("mongoose").SchemaDefinitionProperty<number, EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    errorCount?: import("mongoose").SchemaDefinitionProperty<number, EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, EventStreamSchema, import("mongoose").Document<unknown, {}, EventStreamSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<EventStreamSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
}, EventStreamSchema>;
//# sourceMappingURL=event-stream.schema.d.ts.map