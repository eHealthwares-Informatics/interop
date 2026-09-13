import { Schema as MongooseSchema, Types } from 'mongoose';
export declare class StandardMappingSchema {
    _id: Types.ObjectId;
    name: string;
    description?: string;
    sourceProtocol: string;
    targetProtocol: string;
    sourceMessageType: string;
    targetMessageType: string;
    mappingSteps: any[];
    globalLookups?: Record<string, any>;
    version: string;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export type StandardMappingDocument = StandardMappingSchema;
export declare const StandardMappingSchemas: MongooseSchema<StandardMappingSchema, import("mongoose").Model<StandardMappingSchema, any, any, any, any, any, StandardMappingSchema>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    name?: import("mongoose").SchemaDefinitionProperty<string, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    description?: import("mongoose").SchemaDefinitionProperty<string, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    sourceProtocol?: import("mongoose").SchemaDefinitionProperty<string, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    targetProtocol?: import("mongoose").SchemaDefinitionProperty<string, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    sourceMessageType?: import("mongoose").SchemaDefinitionProperty<string, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    targetMessageType?: import("mongoose").SchemaDefinitionProperty<string, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    mappingSteps?: import("mongoose").SchemaDefinitionProperty<any[], StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    globalLookups?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    version?: import("mongoose").SchemaDefinitionProperty<string, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    active?: import("mongoose").SchemaDefinitionProperty<boolean, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, StandardMappingSchema, import("mongoose").Document<unknown, {}, StandardMappingSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<StandardMappingSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
}, StandardMappingSchema>;
//# sourceMappingURL=standard-mapping.schema.d.ts.map