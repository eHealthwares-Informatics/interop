import { Schema as MongooseSchema, Types } from 'mongoose';
export declare class ValidationRuleSchema {
    _id: Types.ObjectId;
    name: string;
    description?: string;
    sourceAE?: string;
    messageType?: string;
    enabled: boolean;
    conditions: any[];
    action: any;
    failureResponse: any;
    createdAt?: Date;
    updatedAt?: Date;
}
export type ValidationRuleDocument = ValidationRuleSchema;
export declare const ValidationRuleSchemas: MongooseSchema<ValidationRuleSchema, import("mongoose").Model<ValidationRuleSchema, any, any, any, any, any, ValidationRuleSchema>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    name?: import("mongoose").SchemaDefinitionProperty<string, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    description?: import("mongoose").SchemaDefinitionProperty<string, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    sourceAE?: import("mongoose").SchemaDefinitionProperty<string, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    messageType?: import("mongoose").SchemaDefinitionProperty<string, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    enabled?: import("mongoose").SchemaDefinitionProperty<boolean, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    conditions?: import("mongoose").SchemaDefinitionProperty<any[], ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    action?: import("mongoose").SchemaDefinitionProperty<any, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    failureResponse?: import("mongoose").SchemaDefinitionProperty<any, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, ValidationRuleSchema, import("mongoose").Document<unknown, {}, ValidationRuleSchema, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ValidationRuleSchema & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
}, ValidationRuleSchema>;
//# sourceMappingURL=validation-rule.schema.d.ts.map