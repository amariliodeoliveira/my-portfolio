# Git guidelines

## Branch policy

- Every new feature, fix, refactor, test migration, CI change, or agent-workflow change starts on a new focused branch created from an updated `main`.
- Before creating it: preserve unrelated local work, fetch with prune, switch to `main`, fast-forward it to `origin/main`, and confirm the worktree state.
- Never place new work on an unrelated feature branch or PR.
- Direct pushes to `main` are not allowed unless the user explicitly requests that exact action.
- Keep stacked PRs exceptional. When a change depends on an unmerged branch, target that branch and state the dependency and merge order.

## Commits

- Use focused Conventional Commits in English: `<type>(optional-scope): imperative description`.
- Stage only task-owned changes. Inspect staged and unstaged diffs before committing.
- Preserve the user's Git identity and never bypass Husky or lint-staged.
- Force pushes, hard resets, history rewrites, and deletion of unmerged branches require explicit confirmation.

## Pull requests

- Use one self-contained objective per PR and keep unrelated migrations, tooling, and product work separate.
- Write an English title and body that explain the problem, approach, resulting behavior, and checks actually run.
- Before opening a PR, report its scope, base, and validation state and obtain explicit confirmation unless the user has already explicitly asked to open that specific PR.
- Monitor checks and review feedback after every push. Do not call delivery complete while CI is pending or reviews request changes.
- Before merging, report mergeability, checks, and review state and obtain explicit confirmation for that merge.

## After merge

- Confirm the merge is present on `origin/main` and that its CI is green.
- Update local `main`, then delete the merged remote and local feature branches.
- Preserve unrelated branches, stashes, untracked files, and local modifications unless the user explicitly asks for a fully clean environment.
