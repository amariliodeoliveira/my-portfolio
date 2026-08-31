# Engineering guidelines

## Principles

- Keep components, functions, and configuration focused on one responsibility.
- Extract repeated logic only after the shared shape is clear; avoid speculative abstractions.
- Prefer composition over branching and duplication.
- Keep dependencies flowing from routes and UI toward configuration, data, and library modules—not back toward UI.
- Preserve existing architecture unless the requested change provides a concrete reason to alter it.

## React and Next.js

- Use Server Components by default. Add `"use client"` only for state, effects, event handlers, or browser APIs.
- Keep route metadata and structured data derived from shared configuration.
- Reuse layout primitives such as `RoutePage` before duplicating page shells.
- Use `next/image`, `next/link`, and framework metadata APIs where applicable.
- Consult the installed Next.js documentation before relying on remembered APIs.

## AEO and generated discovery files

- `src/config/aeo.ts`, `src/config/site.ts`, and shared profile/project data are authoritative.
- Generate public discovery artifacts through `scripts/postbuild.mjs`; do not edit generated content as the primary fix.
- Keep canonical URLs environment-aware and avoid hard-coded deployment domains outside the URL resolver.
- When shared content changes, regenerate artifacts and verify them with `npm run test:aeo`.

## Styling

- Prefer Tailwind utilities and existing DaisyUI patterns.
- Use theme tokens rather than hard-coded colors when a token exists.
- Avoid arbitrary values when the spacing and typography scales express the design.
- Keep changes local to the feature instead of performing unrelated visual sweeps.

## Quality

- Inspect generated changes and diffs; passing TypeScript alone is not behavioral evidence.
- Keep deterministic commands and important invariants in version control.
- Never commit secrets, local logs, build caches, or editor-specific debris.
