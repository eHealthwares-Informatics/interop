type ListQuery = {
    page?: number;
    limit?: number;
    filters?: Record<string, any>;
};
export type ListResult<T> = {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
    meta: any;
};
type ParsedFilter = {
    type: string;
    value: any;
    valueTo?: any;
};
export declare function executeListQuery<T>(model: any, baseFilter: Record<string, any>, query: ListQuery): Promise<ListResult<T>>;
export declare function applyFilters(mongoFilter: Record<string, any>, filters: Record<string, any>): void;
export declare function applyFilter(mongoFilter: Record<string, any>, field: string, filter: ParsedFilter): void;
export {};
//# sourceMappingURL=list.d.ts.map