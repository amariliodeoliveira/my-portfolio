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
