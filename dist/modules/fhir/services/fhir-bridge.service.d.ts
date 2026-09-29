import { FHIRValidatorService } from './fhir-validator.service';
import { ProtocolConfig } from '../../../common/models';
export declare class FHIRBridgeService {
    private readonly validator;
    private readonly logger;
    private httpClient;
    constructor(validator: FHIRValidatorService);
    sendResource(baseUrl: string, resource: any, config?: ProtocolConfig): Promise<any>;
    getResource(baseUrl: string, resourceType: string, id: string, config?: ProtocolConfig): Promise<any>;
    pingEndpoint(baseUrl: string, config?: ProtocolConfig): Promise<boolean>;
    echoResource(baseUrl: string, resource: any, config?: ProtocolConfig): Promise<any>;
    searchResources(baseUrl: string, resourceType: string, params: Record<string, string>, config?: ProtocolConfig): Promise<any>;
}
//# sourceMappingURL=fhir-bridge.service.d.ts.map