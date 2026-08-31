# Testing guidelines

## Current test layers

- Use Node's test runner for the existing pure AEO configuration and artifact-generation suite under `tests/`.
- Use Playwright for routes, browser behavior, accessibility-facing semantics, responsive behavior, and generated public endpoints.
- Vitest and Testing Library are planned as a separate migration. Once adopted, use them for React components, hooks, and shared logic, and avoid retaining two general-purpose unit-test runners without a clear boundary.

## Expectations

- Test observable behavior and meaningful invariants, not implementation details or incidental Tailwind classes.
- Cover happy paths plus realistic boundaries and malformed input where relevant.
- A bug fix should include a regression test when the failure can be reproduced deterministically.
- Keep filesystem tests inside a dedicated temporary directory and clean it in `finally`.
- Avoid dynamic regular expressions made from URLs or hostnames when exact string checks are sufficient.

## Proportional verification

- AEO or shared-content changes: `npm run test:aeo` and regenerate artifacts.
- TypeScript/application changes: `npm run type-check` and `npm run lint`.
- Route, rendering, interaction, or responsive changes: `npm run test:e2e`.
- Broad, dependency, configuration, or release-like changes: `npm run check`, `npm run test:e2e`, and `npm run build` when build is not already exercised by E2E.
- Report local platform-only failures accurately; do not hide them or rewrite unrelated files to silence them.
