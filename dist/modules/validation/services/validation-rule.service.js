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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationRuleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("../../core/schemas");
const path_util_1 = require("../../../common/utils/path.util");
const coding_concept_client_service_1 = require("./coding-concept-client.service");
let ValidationRuleService = class ValidationRuleService {
    constructor(validationModel, codingConceptClient) {
        this.validationModel = validationModel;
        this.codingConceptClient = codingConceptClient;
    }
    async create(payload) {
        const entity = new this.validationModel(payload);
        const saved = await entity.save();
        return saved;
    }
    async list() {
        const rules = await this.validationModel.find().sort({ name: 1 }).exec();
        return rules;
    }
    async get(id) {
        const rule = await this.validationModel.findById(id).exec();
        return rule;
    }
    async update(id, updates) {
        await this.validationModel.findByIdAndUpdate(id, { $set: updates }).exec();
        return this.get(id);
    }
    async delete(id) {
        await this.validationModel.findByIdAndDelete(id).exec();
    }
    async evaluateRouteValidations(route, canonicalMessage) {
        if (!route.validationConfig?.enabled ||
            route.validationConfig?.useCodingServer === false ||
            !route.validationIds?.length) {
            return [];
        }
        const rules = await this.validationModel.find({
            _id: { $in: route.validationIds },
        }).exec();
        const orderedRules = route.validationIds
            .map((validationId) => rules.find((rule) => rule._id.toString() === validationId))
            .filter(Boolean);
        const results = [];
        for (const rule of orderedRules) {
            if (!rule.enabled) {
                continue;
            }
            if (rule.sourceAE && rule.sourceAE !== canonicalMessage?.metadata?.sourceAE) {
                continue;
            }
            if (rule.messageType && rule.messageType !== canonicalMessage?.messageType) {
                continue;
            }
            const conditionsPassed = (rule.conditions || []).every((condition) => this.evaluateCondition(canonicalMessage, condition));
            if (!conditionsPassed) {
                continue;
            }
            const codeValue = (0, path_util_1.getValueByPath)(canonicalMessage, rule.action?.codePath || '');
            const concept = await this.codingConceptClient.searchConcept(rule.action.module, codeValue, route.validationConfig?.metadata ?? rule.action.includeMetadata ?? false, route.validationConfig?.mode ?? rule.action.searchMode ?? 'search');
            if (concept?.skipped) {
                results.push({
                    id: rule._id.toString(),
                    name: rule.name,
                    passed: true,
                    codeValue,
                    module: rule.action.module,
                    metadata: { skipped: true },
                });
                continue;
            }
            if (concept && !concept.skipped) {
                results.push({
                    id: rule._id.toString(),
                    name: rule.name,
                    passed: true,
                    codeValue,
                    module: rule.action.module,
                    metadata: concept.metadata,
                });
                continue;
            }
            const failure = {
                statusCode: rule.failureResponse?.statusCode || 422,
                code: rule.failureResponse?.code || 'VALIDATION_FAILED',
                message: rule.failureResponse?.message ||
                    `Validation failed for rule ${rule.name}`,
            };
            results.push({
                id: rule._id.toString(),
                name: rule.name,
                passed: false,
                codeValue,
                module: rule.action.module,
                failure,
            });
            throw new common_1.UnprocessableEntityException({
                message: failure.message,
                code: failure.code,
                routeId: route.id,
                targetAE: route.targetAE,
                validation: {
                    id: rule._id.toString(),
                    name: rule.name,
                    module: rule.action.module,
                    codeValue,
                },
                results,
            });
        }
        return results;
    }
    evaluateCondition(message, condition) {
        const value = (0, path_util_1.getValueByPath)(message, condition.field);
        const expected = condition.value;
        switch (condition.operator) {
            case 'equals':
                return value === expected;
            case 'contains':
                return Array.isArray(value)
                    ? value.includes(expected)
                    : String(value || '').includes(String(expected || ''));
            case 'in':
                return Array.isArray(expected) && expected.includes(value);
            default:
                return false;
        }
    }
};
exports.ValidationRuleService = ValidationRuleService;
exports.ValidationRuleService = ValidationRuleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.ValidationRuleSchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        coding_concept_client_service_1.CodingConceptClientService])
], ValidationRuleService);
//# sourceMappingURL=validation-rule.service.js.map