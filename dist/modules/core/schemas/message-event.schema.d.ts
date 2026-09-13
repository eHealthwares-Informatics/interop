import { Schema as MongooseSchema, Types } from 'mongoose';
export declare class MessageEventSchema {
    _id: Types.ObjectId;
    eventType: string;
    messageId: string;
    correlationId: string;
    timestamp: Date;
    sequenceNumber: number;
    sourceAE: string;
    targetAE?: string;
    status: string;
    metadata: any;
    snapshot: any;
    duration?: number;
    errorMessage?: string;
    stackTrace?: string;
    createdAt?: Date;
}
export type MessageEventDocument = MessageEventSchema;
export declare const MessageEventSchemas: MongooseSchema<MessageEventSchema, import("mongoose").Model<MessageEventSchema, any, any, any, any, any, MessageEventSchema>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    eventType?: import("mongoose").SchemaDefinitionProperty<string, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    messageId?: import("mongoose").SchemaDefinitionProperty<string, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    correlationId?: import("mongoose").SchemaDefinitionProperty<string, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    timestamp?: import("mongoose").SchemaDefinitionProperty<Date, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    sequenceNumber?: import("mongoose").SchemaDefinitionProperty<number, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    sourceAE?: import("mongoose").SchemaDefinitionProperty<string, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    targetAE?: import("mongoose").SchemaDefinitionProperty<string, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    status?: import("mongoose").SchemaDefinitionProperty<string, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    metadata?: import("mongoose").SchemaDefinitionProperty<any, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    snapshot?: import("mongoose").SchemaDefinitionProperty<any, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    duration?: import("mongoose").SchemaDefinitionProperty<number, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    errorMessage?: import("mongoose").SchemaDefinitionProperty<string, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    stackTrace?: import("mongoose").SchemaDefinitionProperty<string, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, MessageEventSchema, import("mongoose").Document<unknown, {}, MessageEventSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<MessageEventSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
}, MessageEventSchema>;
//# sourceMappingURL=message-event.schema.d.ts.map