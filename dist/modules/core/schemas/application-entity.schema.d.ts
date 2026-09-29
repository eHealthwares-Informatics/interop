import { Schema as MongooseSchema, Types } from 'mongoose';
import { AEStatus, ProtocolType } from '../../../common/enums';
import { MappingReference } from '../../../common/models';
export declare class ApplicationEntity {
    _id: Types.ObjectId;
    name: string;
    description?: string;
    facilityCode?: string;
    facilityId?: string;
    facilityName?: string;
    customId?: string;
    facilityIdentifier?: Record<string, any>;
    facility?: Record<string, any>;
    organizationId?: string;
    status: AEStatus;
    online: boolean;
    inboundCapabilities: ProtocolType[];
    outboundCapabilities: ProtocolType[];
    inboundConfig: any[];
    outboundConfig: any[];
    mappings: MappingReference;
    securitySettings: any;
    attributes?: Record<string, any>;
    deletedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
export type ApplicationEntityDocument = ApplicationEntity;
export declare const ApplicationEntitySchema: MongooseSchema<ApplicationEntity, import("mongoose").Model<ApplicationEntity, any, any, any, any, any, ApplicationEntity>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    name?: import("mongoose").SchemaDefinitionProperty<string, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    description?: import("mongoose").SchemaDefinitionProperty<string, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    facilityCode?: import("mongoose").SchemaDefinitionProperty<string, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    facilityId?: import("mongoose").SchemaDefinitionProperty<string, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    facilityName?: import("mongoose").SchemaDefinitionProperty<string, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    customId?: import("mongoose").SchemaDefinitionProperty<string, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    facilityIdentifier?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    facility?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    organizationId?: import("mongoose").SchemaDefinitionProperty<string, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    status?: import("mongoose").SchemaDefinitionProperty<AEStatus, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    online?: import("mongoose").SchemaDefinitionProperty<boolean, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    inboundCapabilities?: import("mongoose").SchemaDefinitionProperty<ProtocolType[], ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    outboundCapabilities?: import("mongoose").SchemaDefinitionProperty<ProtocolType[], ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    inboundConfig?: import("mongoose").SchemaDefinitionProperty<any[], ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    outboundConfig?: import("mongoose").SchemaDefinitionProperty<any[], ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    mappings?: import("mongoose").SchemaDefinitionProperty<MappingReference, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    securitySettings?: import("mongoose").SchemaDefinitionProperty<any, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    attributes?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    deletedAt?: import("mongoose").SchemaDefinitionProperty<Date, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, ApplicationEntity, import("mongoose").Document<unknown, {}, ApplicationEntity, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<ApplicationEntity & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
}, ApplicationEntity>;
//# sourceMappingURL=application-entity.schema.d.ts.map