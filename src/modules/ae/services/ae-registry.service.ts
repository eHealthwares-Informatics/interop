import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApplicationEntity, ApplicationEntityDocument } from '../../core/schemas';
import {
  ApplicationEntityContract,
  AECreatePayload,
  AEUpdatePayload,
} from '../../../common/models';
import { ProtocolType, AEStatus } from '../../../common/enums';
import { executeListQuery, ListResult } from '../../../common/repository/list';

@Injectable()
export class AERegistryService {
  private readonly logger = new Logger(AERegistryService.name);

  constructor(
    @InjectModel(ApplicationEntity.name)
    private aeModel: Model<ApplicationEntity>,
  ) {}

  async registerAE(aeContract: AECreatePayload): Promise<ApplicationEntityContract> {
    const ae = new this.aeModel(aeContract);
    const saved = await ae.save();
    this.logger.log(`AE registered: ${saved._id} (${saved.name})`);
    return saved as unknown as ApplicationEntityContract;
  }

  async getAE(id: string): Promise<ApplicationEntityContract | null> {
    const doc = await this.aeModel.findOne({ _id: id, deletedAt: null });
    return doc as unknown as ApplicationEntityContract | null;
  }

  async getAEByName(name: string): Promise<ApplicationEntityContract | null> {
    return this.aeModel.findOne({ name, deletedAt: null }) as unknown as ApplicationEntityContract | null;
  }

  async listAEs(query: {
    page?: number;
    limit?: number;
    filters: Record<string, any>;
  }): Promise<ListResult<ApplicationEntityContract>> {
    const baseFilter: Record<string, any> = { deletedAt: null };
    const result = await executeListQuery(this.aeModel, baseFilter, query);
    return result as ListResult<ApplicationEntityContract>;
  }

  async updateAE(
    id: string,
    updates: AEUpdatePayload,
  ): Promise<ApplicationEntityContract> {
    const doc = await this.aeModel.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true },
    );
    this.logger.log(`AE updated: ${id}`);
    return doc as unknown as ApplicationEntityContract;
  }

  async deactivateAE(id: string): Promise<void> {
    await this.aeModel.findByIdAndUpdate(id, { $set: { status: AEStatus.INACTIVE } });
    this.logger.log(`AE deactivated: ${id}`);
  }

  async deleteAE(id: string): Promise<void> {
    await this.aeModel.findByIdAndUpdate(id, { $set: { deletedAt: new Date() } });
    this.logger.log(`AE deleted: ${id}`);
  }

  async getAEsByProtocol(
    protocol: ProtocolType,
    direction: 'inbound' | 'outbound',
  ): Promise<ApplicationEntityContract[]> {
    const capField = direction === 'inbound' ? 'inboundCapabilities' : 'outboundCapabilities';
    const docs = await this.aeModel.find({
      [capField]: protocol,
      status: AEStatus.ACTIVE,
      deletedAt: null,
    }).exec();
    return docs as unknown as ApplicationEntityContract[];
  }

  async validateAEAccess(
    aeId: string,
    protocol: ProtocolType,
    direction: 'inbound' | 'outbound',
  ): Promise<boolean> {
    const ae = await this.getAE(aeId);
    if (!ae || ae.status !== AEStatus.ACTIVE) {
      return false;
    }

    if (direction === 'inbound') {
      return ae.inboundCapabilities.includes(protocol);
    } else {
      return ae.outboundCapabilities.includes(protocol);
    }
  }

  async testAEConnectivity(aeId: string): Promise<{
    success: boolean;
    message: string;
    timestamp: Date;
  }> {
    const ae = await this.getAE(aeId);
    if (!ae) {
      return {
        success: false,
        message: 'AE not found',
        timestamp: new Date(),
      };
    }

    if (ae.status !== AEStatus.ACTIVE) {
      return {
        success: false,
        message: 'AE is not active',
        timestamp: new Date(),
      };
    }

    const hasInbound = ae.inboundConfig?.length > 0;
    const hasOutbound = ae.outboundConfig?.length > 0;

    return {
      success: hasInbound || hasOutbound,
      message: hasInbound || hasOutbound ? 'AE is configured' : 'AE has no configuration',
      timestamp: new Date(),
    };
  }

  async getAEStatistics(): Promise<{
    totalAEs: number;
    activeAEs: number;
    inactiveAEs: number;
    byProtocol: Record<string, number>;
    byStatus: Record<string, number>;
  }> {
    const total = await this.aeModel.countDocuments({ deletedAt: null });
    const active = await this.aeModel.countDocuments({ status: AEStatus.ACTIVE, deletedAt: null });
    const inactive = await this.aeModel.countDocuments({ status: AEStatus.INACTIVE, deletedAt: null });

    return {
      totalAEs: total,
      activeAEs: active,
      inactiveAEs: inactive,
      byProtocol: {},
      byStatus: {
        [AEStatus.ACTIVE]: active,
        [AEStatus.INACTIVE]: inactive,
      },
    };
  }
}