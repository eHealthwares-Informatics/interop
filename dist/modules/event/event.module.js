"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const hl7_module_1 = require("../hl7/hl7.module");
const fhir_module_1 = require("../fhir/fhir.module");
const ae_module_1 = require("../ae/ae.module");
const routing_module_1 = require("../routing/routing.module");
const mapping_module_1 = require("../mapping/mapping.module");
const services_1 = require("./services");
const mock_receiver_service_1 = require("./services/mock-receiver.service");
const controllers_1 = require("./controllers");
const schemas_1 = require("../core/schemas");
const validation_module_1 = require("../validation/validation.module");
let EventModule = class EventModule {
};
exports.EventModule = EventModule;
exports.EventModule = EventModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: schemas_1.MessageEventSchema.name, schema: schemas_1.MessageEventSchemas },
                { name: schemas_1.EventStreamSchema.name, schema: schemas_1.EventStreamSchemas },
                { name: schemas_1.ApplicationEntity.name, schema: schemas_1.ApplicationEntitySchema },
                { name: schemas_1.RoutingTableSchema.name, schema: schemas_1.RoutingTableSchemas },
                { name: schemas_1.StandardMappingSchema.name, schema: schemas_1.StandardMappingSchemas },
                { name: schemas_1.ValidationRuleSchema.name, schema: schemas_1.ValidationRuleSchemas },
            ]),
            ae_module_1.AEModule,
            routing_module_1.RoutingModule,
            mapping_module_1.MappingModule,
            hl7_module_1.HL7Module,
            fhir_module_1.FHIRModule,
            validation_module_1.ValidationModule,
        ],
        controllers: [controllers_1.MessageFlowController],
        providers: [services_1.EventTracerService, services_1.MessageFlowService, mock_receiver_service_1.MockReceiverService],
        exports: [services_1.EventTracerService, services_1.MessageFlowService, mock_receiver_service_1.MockReceiverService],
    })
], EventModule);
//# sourceMappingURL=event.module.js.map