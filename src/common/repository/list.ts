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

export async function executeListQuery<T>(
  model: any,
  baseFilter: Record<string, any>,
  query: ListQuery,
): Promise<ListResult<T>> {
  const page = Math.max(Number(query.page || 1), 1);
  const limit = Math.min(Math.max(Number(query.limit || 20), 1), 100);

  const mongoFilter = { ...baseFilter };
  applyFilters(mongoFilter, query.filters || {});

  const [data, total] = await Promise.all([
    model.find(mongoFilter).skip((page - 1) * limit).limit(limit).exec(),
    model.countDocuments(mongoFilter),
  ]);

  const totalPages = Math.ceil(total / limit);
  const pagination = { page, limit, total, totalPages };

  return {
    data: data as T[],
    pagination,
    meta: pagination,
  };
}

export function applyFilters(
  mongoFilter: Record<string, any>,
  filters: Record<string, any>,
): void {
  Object.entries(filters).forEach(([field, raw]) => {
    if (!raw) return;

    const parsed = parseFilter(raw);
    applyFilter(mongoFilter, field, parsed);
  });
}

function parseFilter(raw: string): ParsedFilter {
  const [type, value, valueTo] = raw.split('|');
  return { type, value, valueTo };
}

export function applyFilter(
  mongoFilter: Record<string, any>,
  field: string,
  filter: ParsedFilter,
): void {
  const { type, value, valueTo } = filter;

  switch (type) {
    case 'EQUALS':
      mongoFilter[field] = value;
      break;

    case 'NOT_EQUALS':
      mongoFilter[field] = { $ne: value };
      break;

    case 'CONTAINS':
    case 'FUZZY_MATCH':
      mongoFilter[field] = { $regex: String(value), $options: 'i' };
      break;

    case 'GREATER_THAN':
      mongoFilter[field] = { $gt: coerce(value) };
      break;

    case 'GREATER_THAN_OR_EQUAL':
      mongoFilter[field] = { $gte: coerce(value) };
      break;

    case 'LESS_THAN':
      mongoFilter[field] = { $lt: coerce(value) };
      break;

    case 'LESS_THAN_OR_EQUAL':
      mongoFilter[field] = { $lte: coerce(value) };
      break;

    case 'BETWEEN':
      mongoFilter[field] = { $gte: coerce(value), $lte: coerce(valueTo) };
      break;

    case 'MISSING':
      mongoFilter[field] = { $exists: false };
      break;
  }
}

function coerce(value: any): any {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (!isNaN(Number(value))) return Number(value);
  return value;
}