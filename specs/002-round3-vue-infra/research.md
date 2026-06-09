# Research: Round 3 Vue Infrastructure Commons

## Config and Architecture Presets

Personal Stack has three equivalent dependency-cruiser configs across Vue services. The reusable rules are circular import prevention, feature component/view direction, API access through service layers, store isolation from generated clients, cross-feature barrel boundaries, generated-client isolation, and shared-component feature isolation.

Personal Stack Vite/Vitest/Playwright/TS configs are compact Vue app defaults. Website adds useful variants: hashed asset naming, manual chunk hooks, tsconfig path plugin support, test setup files, CSS-enabled tests, richer coverage reporters, Playwright webServer, browser/device projects, and dev-server host controls. The extraction should expose factory options for these differences instead of choosing one app's exact config.

Decision: create plain TypeScript factories. Vite/Vitest factories may import the existing `@vitejs/plugin-vue` dev dependency; Playwright and dependency-cruiser helpers return structural objects and do not import packages that are not installed in this repo.

## Generated API Runtime

Website's generated runtime handles Vite env base URL resolution, credentials, bearer token, CSRF bootstrap before unsafe requests, and validation error normalization. Personal Stack wrappers show the same need through configurable auth and CSRF cookie/header behavior.

Decision: add fetch-oriented helpers that generated clients can consume regardless of generator. Provide `resolveApiBaseUrl`, `createCsrfBootstrapper`, `createApiFetch`, `normalizeProblemDetail`, and `createHeyApiRuntimeConfig`. The hey-api helper returns structural options and does not import `@hey-api/openapi-ts`.

## Nginx SPA Template

Personal Stack and Website converge on Vite asset caching: immutable hashed assets, mutable entry document, gzip, and browser fallback. Website adds `/healthz`, `gzip_static`, and unprivileged port behavior.

Decision: render deterministic nginx text from options, plus `createPrivilegedSpaNginxConfig` and `createUnprivilegedSpaNginxConfig` convenience variants.
