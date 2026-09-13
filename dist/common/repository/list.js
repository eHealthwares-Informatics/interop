"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeListQuery = executeListQuery;
exports.applyFilters = applyFilters;
exports.applyFilter = applyFilter;
async function executeListQuery(model, baseFilter, query) {
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
        data: data,
        pagination,
        meta: pagination,
    };
}
function applyFilters(mongoFilter, filters) {
    Object.entries(filters).forEach(([field, raw]) => {
        if (!raw)
            return;
        const parsed = parseFilter(raw);
        applyFilter(mongoFilter, field, parsed);
    });
}
function parseFilter(raw) {
    const [type, value, valueTo] = raw.split('|');
    return { type, value, valueTo };
}
function applyFilter(mongoFilter, field, filter) {
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
function coerce(value) {
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    if (!isNaN(Number(value)))
        return Number(value);
    return value;
}
//# sourceMappingURL=list.js.map