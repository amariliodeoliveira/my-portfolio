# Testing guidelines

## Test layers

- Use Vitest for unit and integration tests, including the AEO configuration and artifact-generation suite under `tests/`.
- Use React Testing Library with `user-event` for components and hooks. Test behavior, semantics, accessible names, keyboard interaction, and meaningful conditional states.
- Use Playwright for complete routes, real-browser behavior, responsive layout, and generated public endpoints.

## Expectations

- Test observable behavior and meaningful invariants, not implementation details or incidental Tailwind classes.
- Cover happy paths plus realistic boundaries and malformed input where relevant.
- A bug fix should include a regression test when the failure can be reproduced deterministically.
- Keep filesystem tests inside a dedicated temporary directory and clean it in `finally`.
- Avoid dynamic regular expressions made from URLs or hostnames when exact string checks are sufficient.

## Proportional verification

- AEO or shared-content changes: `npm run test:aeo` and regenerate artifacts.
- Components, hooks, or shared logic: `npm test`; use `npm run test:watch` while iterating when useful.
- TypeScript/application changes: `npm run type-check` and `npm run lint`.
- Route, rendering, interaction, or responsive changes: `npm run test:e2e`.
- Broad, dependency, configuration, or release-like changes: `npm run check`, `npm run test:coverage`, `npm run test:e2e`, and `npm run build` when build is not already exercised by E2E.
- Report local platform-only failures accurately; do not hide them or rewrite unrelated files to silence them.
