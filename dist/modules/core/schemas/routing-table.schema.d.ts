import { Schema as MongooseSchema, Types } from 'mongoose';
export declare class RoutingTableSchema {
    _id: Types.ObjectId;
    name: string;
    description?: string;
    routes: any[];
    defaultRoute?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export type RoutingTableDocument = RoutingTableSchema;
export declare const RoutingTableSchemas: MongooseSchema<RoutingTableSchema, import("mongoose").Model<RoutingTableSchema, any, any, any, any, any, RoutingTableSchema>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RoutingTableSchema, import("mongoose").Document<unknown, {}, RoutingTableSchema, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<RoutingTableSchema & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, RoutingTableSchema, import("mongoose").Document<unknown, {}, RoutingTableSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoutingTableSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    name?: import("mongoose").SchemaDefinitionProperty<string, RoutingTableSchema, import("mongoose").Document<unknown, {}, RoutingTableSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoutingTableSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    description?: import("mongoose").SchemaDefinitionProperty<string, RoutingTableSchema, import("mongoose").Document<unknown, {}, RoutingTableSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoutingTableSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    routes?: import("mongoose").SchemaDefinitionProperty<any[], RoutingTableSchema, import("mongoose").Document<unknown, {}, RoutingTableSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoutingTableSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    defaultRoute?: import("mongoose").SchemaDefinitionProperty<string, RoutingTableSchema, import("mongoose").Document<unknown, {}, RoutingTableSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoutingTableSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, RoutingTableSchema, import("mongoose").Document<unknown, {}, RoutingTableSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoutingTableSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, RoutingTableSchema, import("mongoose").Document<unknown, {}, RoutingTableSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<RoutingTableSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
}, RoutingTableSchema>;
//# sourceMappingURL=routing-table.schema.d.ts.map