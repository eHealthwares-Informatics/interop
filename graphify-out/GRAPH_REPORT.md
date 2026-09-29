# Graph Report - interop  (2026-09-23)

## Corpus Check
- 106 files · ~27,128 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 823 nodes · 1679 edges · 60 communities (33 shown, 27 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.61)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- AE Registry
- Canonical Models
- Message Enrichment
- HL7 Parsing & Bootstrap
- Validation Rules
- Mapping Engine
- Event & Status Enums
- Message Routing
- Docker & Services
- NestJS Modules
- Package Dependencies
- FHIR Bridge & Validation
- TypeScript Configuration
- Message Flow Controller
- Database Entities
- Enrichment Providers
- NPM Scripts
- Validation Entity
- Package Metadata
- Jest Configuration
- App Controller
- Database Seeder
- Mapping Entity
- Application Entity
- Dev Dependencies
- DB Setup Script
- Backend CRUD Resource — healthcare-interoperability-switch
- Backend List Endpoint — healthcare-interoperability-switch
- Auth Guard — healthcare-interoperability-switch
- Seeding — healthcare-interoperability-switch
- healthcare-interoperability-switch — Status
- setup-db.sh
- ContextEnrichmentService
- DicomWorklistProvider
- OpenElisAccessionProvider
- PractitionerEnrichmentProvider
- ValidationRuleService
- AE Contract
- Canonical Patient & Order Model
- DCM4CHEE AE
- Event Tracer Service
- FHIR Bridge (HTTP)
- FHIR R4 Module
- Healthstack AE
- HL7 Bridge (TCP/IP)
- HL7 v2 Module
- Message Pipeline Service
- OpenELIS AE
- CORS Enabled API
- Backend Modules (AE, Routing, Mapping, Event, Validation, HL7, FHIR, Health, Core)
- EAV (Entity-Attribute-Value) Implementation
- Graph Visualization (React Flow, Cytoscape)
- NestJS Framework
- Postilion-Inspired Architecture
- Swagger/OpenAPI Documentation
- WebSocket Integration
- Zod Validation

## God Nodes (most connected - your core abstractions)
1. `ProtocolType` - 39 edges
2. `MessageFlowService` - 29 edges
3. `MessageType` - 26 edges
4. `ApplicationEntityContract` - 23 edges
5. `AERegistryService` - 23 edges
6. `MappingEngineService` - 23 edges
7. `EnrichmentContext` - 21 edges
8. `HL7ParserService` - 21 edges
9. `MockReceiverService` - 19 edges
10. `HL7ToCanonicalTransformer` - 19 edges

## Surprising Connections (you probably didn't know these)
- `health-interoperability-switch Docker Service` --conceptually_related_to--> `AE Registry Service`  [INFERRED]
  docker-compose-dev.yml → IMPLEMENTATION_STATUS.md
- `health-interoperability-switch Docker Service` --conceptually_related_to--> `Routing Engine Service`  [INFERRED]
  docker-compose-dev.yml → IMPLEMENTATION_STATUS.md
- `health-interoperability-switch Docker Service` --conceptually_related_to--> `Mapping Engine Service`  [INFERRED]
  docker-compose-dev.yml → IMPLEMENTATION_STATUS.md
- `bootstrap()` --indirect_call--> `AppModule`  [INFERRED]
  src/main.ts → src/app.module.ts
- `RoutingHints` --references--> `ProtocolType`  [EXTRACTED]
  src/common/models/enrichment.model.ts → src/common/enums/protocol-type.enum.ts

## Import Cycles
- 3-file cycle: `src/modules/event/services/index.ts -> src/modules/event/services/message-flow.service.ts -> src/modules/routing/services/routing-engine.service.ts -> src/modules/event/services/index.ts`

## Communities (60 total, 27 thin omitted)

### Community 0 - "AE Registry"
Cohesion: 0.07
Nodes (31): Cron, HttpCode, AEStatus, ProtocolType, AECreatePayload, AEListFilter, AEUpdatePayload, ApplicationEntityContract (+23 more)

### Community 1 - "Canonical Models"
Cohesion: 0.06
Nodes (22): Priority, Address, CanonicalMessage, CanonicalOrder, CanonicalPatient, ContactPoint, HumanName, Identifier (+14 more)

### Community 2 - "Message Enrichment"
Cohesion: 0.06
Nodes (32): AEMappingBinding, ProtocolConfig, buildHl7Message(), buildHl7MshSegment(), buildHttpBaseUrl(), canonicalOrderToFlowOrder(), canonicalPatientToFlowPatient(), describeBinding() (+24 more)

### Community 3 - "HL7 Parsing & Bootstrap"
Cohesion: 0.06
Nodes (11): MockReceiverService, MockReceiverSnapshot, Injectable, HL7BridgeService, Injectable, HL7ParserService, HL7Segment, Injectable (+3 more)

### Community 4 - "Validation Rules"
Cohesion: 0.07
Nodes (19): ContextEnrichmentResult, ValidationExecutionResult, ValidationRule, Body, Controller, Delete, Get, Param (+11 more)

### Community 5 - "Mapping Engine"
Cohesion: 0.09
Nodes (20): MappingContext, MappingEngine, MappingResult, StandardMapping, getValueByPath(), parsePath(), PathToken, setValueByPath() (+12 more)

### Community 6 - "Event & Status Enums"
Cohesion: 0.12
Nodes (13): EventType, MessageStatus, EventMetadata, EventSnapshot, EventStream, EventTracer, MessageEvent, MessageEventAuditEntry (+5 more)

### Community 7 - "Message Routing"
Cohesion: 0.10
Nodes (15): RouteCondition, RouteEvaluationContext, RouteEvaluationResult, RoutingTable, RoutingTableDocument, CanonicalFlowMessage, RoutingController, Body (+7 more)

### Community 8 - "Docker & Services"
Cohesion: 0.40
Nodes (4): health-interoperability-switch Docker Service, AE Registry Service, Mapping Engine Service, Routing Engine Service

### Community 9 - "NestJS Modules"
Cohesion: 0.07
Nodes (51): MappingReference, InjectModel, AEModule, Module, CoreModule, Module, ApplicationEntity, ApplicationEntitySchema (+43 more)

### Community 10 - "Package Dependencies"
Cohesion: 0.08
Nodes (24): dependencies, axios, class-transformer, class-validator, hl7-standard, jest, mongoose, @nestjs/common (+16 more)

### Community 11 - "FHIR Bridge & Validation"
Cohesion: 0.09
Nodes (25): MessageType, RouteStatus, AEFacilityProfile, AEListResponse, AEResponse, EAVAttribute, HDIdentifier, SecuritySettings (+17 more)

### Community 12 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (20): compilerOptions, declaration, declarationMap, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, forceConsistentCasingInFileNames, lib (+12 more)

### Community 13 - "Message Flow Controller"
Cohesion: 0.19
Nodes (7): MessageFlowController, Body, Controller, Get, Param, Post, Query

### Community 14 - "Database Entities"
Cohesion: 0.11
Nodes (18): Advanced Features, API Endpoints, Application Entities, Architecture Highlights, Backend, Backend Implementation, Completed Features ✅, Configuration (+10 more)

### Community 15 - "Enrichment Providers"
Cohesion: 0.09
Nodes (21): Architectural Requirements, Canonical Enrichment, Desired Outcome, Dynamic Mapping Engine, Dynamic Mapping Expression Examples, Dynamic Mapping Requirements, Enrichment Context Model, Enrichment Scope (+13 more)

### Community 16 - "NPM Scripts"
Cohesion: 0.18
Nodes (11): scripts, build, dev, lint, start, start:debug, start:dev, start:prod (+3 more)

### Community 17 - "Validation Entity"
Cohesion: 0.13
Nodes (14): API Endpoints, Application Entities, Architecture, Commands, Database, End-to-End Flow, Environment Variables, Health (+6 more)

### Community 18 - "Package Metadata"
Cohesion: 0.22
Nodes (8): author, description, keywords, license, main, name, type, version

### Community 19 - "Jest Configuration"
Cohesion: 0.22
Nodes (9): jest, collectCoverageFrom, coverageDirectory, moduleFileExtensions, rootDir, testEnvironment, testRegex, transform (+1 more)

### Community 20 - "App Controller"
Cohesion: 0.10
Nodes (15): Catch, AppController, Controller, Get, AppModule, Module, CommonModule, Module (+7 more)

### Community 22 - "Mapping Entity"
Cohesion: 0.14
Nodes (13): Architecture, Auth, Auth, DB, Healthcare Interoperability Switch Agent, Key commands, List endpoints, Modules (+5 more)

### Community 23 - "Application Entity"
Cohesion: 0.17
Nodes (11): 🏗️ Architecture Highlights, 📊 Code Statistics, 📡 Key API Endpoints, 📋 Next Steps (Phase 5+), ✅ Phase 1 - Architecture Definition, ✅ Phase 2 - Backend Core (NestJS), ✅ Phase 3 - Protocol Layer, ✅ Phase 4 - Integration & Flows (+3 more)

### Community 24 - "Dev Dependencies"
Cohesion: 0.33
Nodes (6): devDependencies, mongodb-memory-server, @nestjs/cli, @nestjs/testing, ts-jest, @types/jest

### Community 25 - "DB Setup Script"
Cohesion: 0.18
Nodes (10): Architecture, Healthcare Interoperability Switch - Backend Introduction, Installation, Key Files and Structure, Overview, Potential Fixes, Prerequisites, Running the Application (+2 more)

### Community 27 - "Backend CRUD Resource — healthcare-interoperability-switch"
Cohesion: 0.25
Nodes (7): Backend CRUD Resource — healthcare-interoperability-switch, Inputs, Purpose, Refactor, When not to invoke, When to invoke, Workflow

### Community 28 - "Backend List Endpoint — healthcare-interoperability-switch"
Cohesion: 0.25
Nodes (7): Backend List Endpoint — healthcare-interoperability-switch, Inputs, Purpose, Refactoring consistency, When not to invoke, When to invoke, Workflow

### Community 29 - "Auth Guard — healthcare-interoperability-switch"
Cohesion: 0.29
Nodes (6): Auth Guard — healthcare-interoperability-switch, Purpose, Refactoring, When not to invoke, When to invoke, Workflow

### Community 30 - "Seeding — healthcare-interoperability-switch"
Cohesion: 0.33
Nodes (5): Purpose, Refactoring, Seeding — healthcare-interoperability-switch, When to invoke, Workflow

### Community 31 - "healthcare-interoperability-switch — Status"
Cohesion: 0.33
Nodes (5): Entrypoints, healthcare-interoperability-switch — Status, Modules, Status, What it does

## Knowledge Gaps
- **236 isolated node(s):** `name`, `version`, `description`, `main`, `build` (+231 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **27 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ProtocolType` connect `AE Registry` to `Canonical Models`, `Message Enrichment`, `Validation Rules`, `Mapping Engine`, `NestJS Modules`, `FHIR Bridge & Validation`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Why does `MessageFlowService` connect `Message Enrichment` to `Canonical Models`, `HL7 Parsing & Bootstrap`, `Event & Status Enums`, `Message Routing`, `NestJS Modules`, `Message Flow Controller`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `AERegistryService` connect `AE Registry` to `NestJS Modules`, `Message Enrichment`, `HL7 Parsing & Bootstrap`, `Event & Status Enums`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _236 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `AE Registry` be split into smaller, more focused modules?**
  _Cohesion score 0.06584723441615452 - nodes in this community are weakly interconnected._
- **Should `Canonical Models` be split into smaller, more focused modules?**
  _Cohesion score 0.061507936507936505 - nodes in this community are weakly interconnected._
- **Should `Message Enrichment` be split into smaller, more focused modules?**
  _Cohesion score 0.06286748077792854 - nodes in this community are weakly interconnected._