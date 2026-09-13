import { Model } from 'mongoose';
import { ApplicationEntity } from '../../core/schemas';
import { ApplicationEntityContract, AECreatePayload, AEUpdatePayload } from '../../../common/models';
import { ProtocolType } from '../../../common/enums';
import { ListResult } from '../../../common/repository/list';
export declare class AERegistryService {
    private aeModel;
    private readonly logger;
    constructor(aeModel: Model<ApplicationEntity>);
    registerAE(aeContract: AECreatePayload): Promise<ApplicationEntityContract>;
    getAE(id: string): Promise<ApplicationEntityContract | null>;
    getAEByName(name: string): Promise<ApplicationEntityContract | null>;
    listAEs(query: {
        page?: number;
        limit?: number;
        filters: Record<string, any>;
    }): Promise<ListResult<ApplicationEntityContract>>;
    updateAE(id: string, updates: AEUpdatePayload): Promise<ApplicationEntityContract>;
    deactivateAE(id: string): Promise<void>;
    deleteAE(id: string): Promise<void>;
    getAEsByProtocol(protocol: ProtocolType, direction: 'inbound' | 'outbound'): Promise<ApplicationEntityContract[]>;
    validateAEAccess(aeId: string, protocol: ProtocolType, direction: 'inbound' | 'outbound'): Promise<boolean>;
    testAEConnectivity(aeId: string): Promise<{
        success: boolean;
        message: string;
        timestamp: Date;
    }>;
    getAEStatistics(): Promise<{
        totalAEs: number;
        activeAEs: number;
        inactiveAEs: number;
        byProtocol: Record<string, number>;
        byStatus: Record<string, number>;
    }>;
}
//# sourceMappingURL=ae-registry.service.d.ts.map