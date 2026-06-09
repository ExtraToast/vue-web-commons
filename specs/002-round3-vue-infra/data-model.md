# Data Model: Round 3 Vue Infrastructure Commons

## VueAppConfigOptions

- `rootDir`: Project root used for aliases.
- `srcDir`: Source directory for the `@` alias.
- `plugins`: Additional Vite/Vitest plugins.
- `server`: Port, host, proxy, HMR, watch, and allowed-host settings.
- `build`: Module preload, target, chunk warning limit, hashed asset names, and manual chunks.
- `test`: Environment, setup files, include/exclude globs, CSS, mock reset behavior, coverage, and dependency inlining.
- `playwright`: Test directory, base URL, projects, reporter, retries, worker count, webServer, timeout, and trace settings.
- `ts`: Compiler options, includes, excludes, and path aliases.

## FeatureSlicedDependencyCruiserOptions

- `featuresPath`: Feature root prefix.
- `sharedPath`: Shared root prefix.
- `serviceAdapterPaths`: Paths allowed to import generated clients.
- `generatedClientPaths`: One or more generated-client prefixes.
- `tsConfigFileName`: TypeScript config consumed by dependency-cruiser.
- `ruleSeverity`: Rule severity for generated forbidden rules.

## ApiRuntimeOptions

- `baseUrl`: Explicit base URL.
- `env`: Environment record used for base URL lookup.
- `envKeys`: Ordered env key candidates.
- `origin`: Browser origin fallback.
- `defaultPath`: Path appended to origin when no explicit/env base URL is set.
- `credentials`: Request credentials policy.
- `bearerToken`: Static or async token source.
- `csrf`: CSRF bootstrap and header configuration.
- `fetchImpl`: Fetch implementation.

## CsrfBootstrapOptions

- `bootstrapPath`: Endpoint used to obtain a token.
- `headerName`: Header used on unsafe requests.
- `tokenPath`: Response body property path containing the token.
- `readToken`: Existing token source.
- `writeToken`: Callback for storing a new token.
- `cacheBootstrap`: Whether concurrent bootstraps share one in-flight request.

## SpaNginxOptions

- `listenPort`: Server listen port.
- `serverName`: Server name.
- `root`: Static root.
- `assetPrefix`: Vite asset prefix.
- `assetMaxAgeSeconds`: Cache age for content-hashed assets.
- `staticMaxAgeSeconds`: Cache age for stable static files.
- `indexPath`: SPA entry document.
- `fallbackPath`: Browser routing fallback.
- `healthz`: Optional health endpoint.
- `gzip`: Gzip behavior.
- `staticExtensions`: Extensions treated as mutable static files.
