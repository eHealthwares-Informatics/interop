"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AERegistryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AERegistryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("../../core/schemas");
const enums_1 = require("../../../common/enums");
const list_1 = require("../../../common/repository/list");
let AERegistryService = AERegistryService_1 = class AERegistryService {
    constructor(aeModel) {
        this.aeModel = aeModel;
        this.logger = new common_1.Logger(AERegistryService_1.name);
    }
    async registerAE(aeContract) {
        const ae = new this.aeModel(aeContract);
        const saved = await ae.save();
        this.logger.log(`AE registered: ${saved._id} (${saved.name})`);
        return saved;
    }
    async getAE(id) {
        const doc = await this.aeModel.findOne({ _id: id, deletedAt: null });
        return doc;
    }
    async getAEByName(name) {
        return this.aeModel.findOne({ name, deletedAt: null });
    }
    async listAEs(query) {
        const baseFilter = { deletedAt: null };
        const result = await (0, list_1.executeListQuery)(this.aeModel, baseFilter, query);
        return result;
    }
    async updateAE(id, updates) {
        const doc = await this.aeModel.findByIdAndUpdate(id, { $set: updates }, { new: true });
        this.logger.log(`AE updated: ${id}`);
        return doc;
    }
    async deactivateAE(id) {
        await this.aeModel.findByIdAndUpdate(id, { $set: { status: enums_1.AEStatus.INACTIVE } });
        this.logger.log(`AE deactivated: ${id}`);
    }
    async deleteAE(id) {
        await this.aeModel.findByIdAndUpdate(id, { $set: { deletedAt: new Date() } });
        this.logger.log(`AE deleted: ${id}`);
    }
    async getAEsByProtocol(protocol, direction) {
        const capField = direction === 'inbound' ? 'inboundCapabilities' : 'outboundCapabilities';
        const docs = await this.aeModel.find({
            [capField]: protocol,
            status: enums_1.AEStatus.ACTIVE,
            deletedAt: null,
        }).exec();
        return docs;
    }
    async validateAEAccess(aeId, protocol, direction) {
        const ae = await this.getAE(aeId);
        if (!ae || ae.status !== enums_1.AEStatus.ACTIVE) {
            return false;
        }
        if (direction === 'inbound') {
            return ae.inboundCapabilities.includes(protocol);
        }
        else {
            return ae.outboundCapabilities.includes(protocol);
        }
    }
    async testAEConnectivity(aeId) {
        const ae = await this.getAE(aeId);
        if (!ae) {
            return {
                success: false,
                message: 'AE not found',
                timestamp: new Date(),
            };
        }
        if (ae.status !== enums_1.AEStatus.ACTIVE) {
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
    async getAEStatistics() {
        const total = await this.aeModel.countDocuments({ deletedAt: null });
        const active = await this.aeModel.countDocuments({ status: enums_1.AEStatus.ACTIVE, deletedAt: null });
        const inactive = await this.aeModel.countDocuments({ status: enums_1.AEStatus.INACTIVE, deletedAt: null });
        return {
            totalAEs: total,
            activeAEs: active,
            inactiveAEs: inactive,
            byProtocol: {},
            byStatus: {
                [enums_1.AEStatus.ACTIVE]: active,
                [enums_1.AEStatus.INACTIVE]: inactive,
            },
        };
    }
};
exports.AERegistryService = AERegistryService;
exports.AERegistryService = AERegistryService = AERegistryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.ApplicationEntity.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AERegistryService);
//# sourceMappingURL=ae-registry.service.js.map