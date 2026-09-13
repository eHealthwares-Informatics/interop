"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FHIRBridgeService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHIRBridgeService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const fhir_validator_service_1 = require("./fhir-validator.service");
const https = __importStar(require("https"));
let FHIRBridgeService = FHIRBridgeService_1 = class FHIRBridgeService {
    constructor(validator) {
        this.validator = validator;
        this.logger = new common_1.Logger(FHIRBridgeService_1.name);
        this.httpClient = axios_1.default.create({
            timeout: 10000,
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            headers: {
                'Content-Type': 'application/fhir+json',
                'Accept': 'application/fhir+json',
            },
        });
    }
    async sendResource(baseUrl, resource, config) {
        try {
            const resourceType = resource.resourceType;
            const url = `${baseUrl}/${resourceType}`;
            const headers = {};
            if (config?.httpConfig?.authentication === 'basic') {
                const username = process.env.OPENELIS_USERNAME || 'admin';
                const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
                const auth = Buffer.from(`${username}:${password}`).toString('base64');
                headers['Authorization'] = `Basic ${auth}`;
            }
            else if (config?.httpConfig?.authentication === 'bearer' && config.httpConfig.authToken) {
                headers['Authorization'] = `Bearer ${config.httpConfig.authToken}`;
            }
            this.logger.log(`Sending FHIR ${resourceType} to ${url}`);
            const validation = this.validator.validateResource(resource);
            if (!validation.valid) {
                throw new Error(`Invalid FHIR resource: ${validation.errors.join(', ')}`);
            }
            const response = await this.httpClient.post(url, resource, { headers });
            this.logger.log(`Successfully sent FHIR resource: ${response.status}`);
            return response.data;
        }
        catch (error) {
            this.logger.error(`Error sending FHIR resource: ${error.message}`);
            throw error;
        }
    }
    async getResource(baseUrl, resourceType, id, config) {
        try {
            const url = `${baseUrl}/${resourceType}/${id}`;
            const headers = {};
            if (config?.httpConfig?.authentication === 'basic') {
                const username = process.env.OPENELIS_USERNAME || 'admin';
                const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
                const auth = Buffer.from(`${username}:${password}`).toString('base64');
                headers['Authorization'] = `Basic ${auth}`;
            }
            this.logger.log(`Getting FHIR resource from ${url}`);
            const response = await this.httpClient.get(url, { headers });
            return response.data;
        }
        catch (error) {
            this.logger.error(`Error getting FHIR resource: ${error.message}`);
            throw error;
        }
    }
    async pingEndpoint(baseUrl, config) {
        try {
            const headers = {};
            if (config?.httpConfig?.authentication === 'basic') {
                const username = process.env.OPENELIS_USERNAME || 'admin';
                const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
                const auth = Buffer.from(`${username}:${password}`).toString('base64');
                headers['Authorization'] = `Basic ${auth}`;
            }
            const response = await this.httpClient.get(`${baseUrl}/metadata`, { headers });
            return response.status === 200;
        }
        catch (error) {
            this.logger.error(`Ping failed: ${error.message}`);
            return false;
        }
    }
    async echoResource(baseUrl, resource, config) {
        try {
            this.logger.log(`Echoing FHIR resource to ${baseUrl}`);
            const headers = {};
            if (config?.httpConfig?.authentication === 'basic') {
                const username = process.env.OPENELIS_USERNAME || 'admin';
                const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
                const auth = Buffer.from(`${username}:${password}`).toString('base64');
                headers['Authorization'] = `Basic ${auth}`;
            }
            const response = await this.httpClient.post(`${baseUrl}/$echo`, resource, { headers });
            return response.data;
        }
        catch (error) {
            this.logger.error(`Echo failed: ${error.message}`);
            throw error;
        }
    }
    async searchResources(baseUrl, resourceType, params, config) {
        try {
            const queryString = new URLSearchParams(params).toString();
            const url = `${baseUrl}/${resourceType}?${queryString}`;
            const headers = {};
            if (config?.httpConfig?.authentication === 'basic') {
                const username = process.env.OPENELIS_USERNAME || 'admin';
                const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
                const auth = Buffer.from(`${username}:${password}`).toString('base64');
                headers['Authorization'] = `Basic ${auth}`;
            }
            this.logger.log(`Searching FHIR resources: ${url}`);
            const response = await this.httpClient.get(url, { headers });
            return response.data;
        }
        catch (error) {
            this.logger.error(`Search failed: ${error.message}`);
            throw error;
        }
    }
};
exports.FHIRBridgeService = FHIRBridgeService;
exports.FHIRBridgeService = FHIRBridgeService = FHIRBridgeService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fhir_validator_service_1.FHIRValidatorService])
], FHIRBridgeService);
//# sourceMappingURL=fhir-bridge.service.js.map