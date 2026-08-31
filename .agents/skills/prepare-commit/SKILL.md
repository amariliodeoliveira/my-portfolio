---
name: prepare-commit
description: Inspect and organize repository changes into focused Conventional Commits, then commit or push when requested. Use for commit preparation, commit messages, staging, splitting changes, or delivery of completed work.
---

# Prepare commit

1. Read `.agents/references/git-guidelines.md`.
2. Inspect branch, status, staged and unstaged diffs, and untracked files. Identify pre-existing user work before staging.
3. Group only task-owned changes into focused commits; use patch staging when concerns share a file.
4. Review the staged diff for secrets, generated debris, unrelated changes, and accidental destructive edits.
5. Run checks proportional to the change using `.agents/references/testing-guidelines.md`.
6. Use an English Conventional Commit subject and let the pre-commit hook run.
7. Push only when requested or when delivery is clearly part of the task, following the branch policy. Never push directly to `main` without explicit instruction.
8. After a push, monitor CI and report the remote commit plus any remaining local changes.
