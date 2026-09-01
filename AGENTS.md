<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This project can use a Next.js version newer than the model's training data. Before changing framework behavior, read the relevant guide under `node_modules/next/dist/docs/` and heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project working agreements

- Before changing application code, read `.agents/references/engineering-guidelines.md`.
- For UI, styling, layout, accessibility, or UX copy, also read `.agents/references/design-guidelines.md`.
- For tests, read `.agents/references/testing-guidelines.md`.
- For branches, commits, pushes, pull requests, or cleanup, read `.agents/references/git-guidelines.md`.
- Use repository skills under `.agents/skills/` when their descriptions match the task.
- Keep work scoped and preserve unrelated local changes.
- Treat `src/data/profile.ts` and the configuration under `src/config/` as shared sources of truth. Do not hand-maintain generated AEO files when the generator can produce them.
- Respect Husky and lint-staged. Add checks in proportion to risk and monitor GitHub Actions after every push.

## Qlty workflow

- Keep the Qlty CLI available on `PATH` when possible. If it is unavailable, report that validation gap instead of claiming Qlty checks passed.
- Before committing, run `qlty fmt` on changed files and review every resulting edit.
- Before finishing, run `qlty check --fix --level=low` and `qlty smells`; fix relevant issues introduced by the change and review all automatic fixes.
- Run the project's normal validation commands too. `npm run lint` is the authoritative ESLint check, including Tailwind CSS rules.
- Do not enable the Qlty ESLint plugin without first confirming that Qlty Cloud can resolve Tailwind CSS from its isolated runner. It is intentionally disabled because ESLint already runs after `npm ci` in the required CI `check` job.
- After every push, monitor both GitHub Actions and Qlty Cloud until all checks reach their final state. A preliminary green status is not sufficient.
