import { Model } from 'mongoose';
import { RoutingTableSchema } from '../../core/schemas';
import { RoutingTable, RoutingRule, RouteEvaluationContext, RouteEvaluationResult } from '../../../common/models';
export declare class RoutingEngineService {
    private routingModel;
    private readonly logger;
    private routingCache;
    constructor(routingModel: Model<RoutingTableSchema>);
    createRoutingTable(name: string, description?: string): Promise<RoutingTable>;
    getRoutingTable(id: string): Promise<RoutingTable | null>;
    getRoutingTableByName(name: string): Promise<RoutingTable | null>;
    addRoute(tableId: string, route: Omit<RoutingRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<RoutingRule>;
    evaluateRoute(tableId: string, context: RouteEvaluationContext): Promise<RouteEvaluationResult>;
    private evaluateConditions;
    private evaluateCondition;
    private getFieldValue;
}
//# sourceMappingURL=routing-engine.service.d.ts.map