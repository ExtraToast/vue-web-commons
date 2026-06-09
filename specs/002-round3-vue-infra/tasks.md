# Tasks: Round 3 Vue Infrastructure Commons

**Input**: Design documents from `/specs/002-round3-vue-infra/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/package-subpaths.md

## Phase 1: Setup

- [x] T001 Create `specs/002-round3-vue-infra/` spec-kit documents.
- [x] T002 Identify validation commands: `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, `npm run package:check`, `npm run fixture:check`.

## Phase 2: Config and Architecture Presets

- [x] T003 [US1] Add Vue Vite/Vitest/Playwright/TS config factories under `src/config/`.
- [x] T004 [US1] Add feature-sliced dependency-cruiser preset under `src/config/`.
- [x] T005 [US1] Add config preset tests in `src/__tests__/configPreset.test.ts`.

## Phase 3: Generated API Runtime

- [x] T006 [US2] Add generated API runtime helpers under `src/api-runtime/`.
- [x] T007 [US2] Add API runtime tests in `src/__tests__/apiRuntime.test.ts`.

## Phase 4: SPA Nginx Template

- [x] T008 [US3] Add SPA nginx template helpers under `src/nginx/`.
- [x] T009 [US3] Add nginx template tests in `src/__tests__/nginxSpa.test.ts`.

## Phase 5: Package and Documentation

- [x] T010 Add package subpath exports and multi-entry build output in `package.json` and `vite.config.ts`.
- [x] T011 Update package fixture paths and `test/consumer-fixture.ts`.
- [x] T012 Update `README.md` and `scripts/check-package.mjs`.

## Phase 6: Verification

- [x] T013 Run local typecheck.
- [x] T014 Run local lint.
- [x] T015 Run local tests with coverage.
- [x] T016 Run local build, package check, and fixture check.

## Dependencies

- T003 and T004 must precede T005.
- T006 must precede T007.
- T008 must precede T009.
- T010 through T012 depend on the implementation entry points.
- Verification runs after all implementation and docs changes.
