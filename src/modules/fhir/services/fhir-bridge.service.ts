import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { FHIRValidatorService } from './fhir-validator.service';
import { ProtocolConfig } from '../../../common/models';
import * as https from 'https';

@Injectable()
export class FHIRBridgeService {
  private readonly logger = new Logger(FHIRBridgeService.name);
  private httpClient: AxiosInstance;

  constructor(private readonly validator: FHIRValidatorService) {
    this.httpClient = axios.create({
      timeout: 10000,
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      headers: {
        'Content-Type': 'application/fhir+json',
        'Accept': 'application/fhir+json',
      },
    });
  }

  async sendResource(baseUrl: string, resource: any, config?: ProtocolConfig): Promise<any> {
    try {
      const resourceType = resource.resourceType;
      const url = `${baseUrl}/${resourceType}`;

      const headers: Record<string, string> = {};
      if (config?.httpConfig?.authentication === 'basic') {
        const username = process.env.OPENELIS_USERNAME || 'admin';
        const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
        const auth = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${auth}`;
      } else if (config?.httpConfig?.authentication === 'bearer' && config.httpConfig.authToken) {
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
    } catch (error) {
      this.logger.error(`Error sending FHIR resource: ${error.message}`);
      throw error;
    }
  }

  async getResource(baseUrl: string, resourceType: string, id: string, config?: ProtocolConfig): Promise<any> {
    try {
      const url = `${baseUrl}/${resourceType}/${id}`;

      const headers: Record<string, string> = {};
      if (config?.httpConfig?.authentication === 'basic') {
        const username = process.env.OPENELIS_USERNAME || 'admin';
        const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
        const auth = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${auth}`;
      }

      this.logger.log(`Getting FHIR resource from ${url}`);
      const response = await this.httpClient.get(url, { headers });
      return response.data;
    } catch (error) {
      this.logger.error(`Error getting FHIR resource: ${error.message}`);
      throw error;
    }
  }

  async pingEndpoint(baseUrl: string, config?: ProtocolConfig): Promise<boolean> {
    try {
      const headers: Record<string, string> = {};
      if (config?.httpConfig?.authentication === 'basic') {
        const username = process.env.OPENELIS_USERNAME || 'admin';
        const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
        const auth = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${auth}`;
      }
      const response = await this.httpClient.get(`${baseUrl}/metadata`, { headers });
      return response.status === 200;
    } catch (error) {
      this.logger.error(`Ping failed: ${error.message}`);
      return false;
    }
  }

  async echoResource(baseUrl: string, resource: any, config?: ProtocolConfig): Promise<any> {
    try {
      this.logger.log(`Echoing FHIR resource to ${baseUrl}`);

      const headers: Record<string, string> = {};
      if (config?.httpConfig?.authentication === 'basic') {
        const username = process.env.OPENELIS_USERNAME || 'admin';
        const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
        const auth = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${auth}`;
      }

      const response = await this.httpClient.post(`${baseUrl}/$echo`, resource, { headers });
      return response.data;
    } catch (error) {
      this.logger.error(`Echo failed: ${error.message}`);
      throw error;
    }
  }

  async searchResources(baseUrl: string, resourceType: string, params: Record<string, string>, config?: ProtocolConfig): Promise<any> {
    try {
      const queryString = new URLSearchParams(params).toString();
      const url = `${baseUrl}/${resourceType}?${queryString}`;

      const headers: Record<string, string> = {};
      if (config?.httpConfig?.authentication === 'basic') {
        const username = process.env.OPENELIS_USERNAME || 'admin';
        const password = process.env.OPENELIS_PASSWORD || 'adminADMIN!';
        const auth = Buffer.from(`${username}:${password}`).toString('base64');
        headers['Authorization'] = `Basic ${auth}`;
      }

      this.logger.log(`Searching FHIR resources: ${url}`);
      const response = await this.httpClient.get(url, { headers });
      return response.data;
    } catch (error) {
      this.logger.error(`Search failed: ${error.message}`);
      throw error;
    }
  }
}
