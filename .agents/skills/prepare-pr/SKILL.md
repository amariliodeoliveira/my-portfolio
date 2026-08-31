---
name: prepare-pr
description: Prepare, open, update, monitor, or merge a focused pull request for this repository. Use for pull-request delivery, CI follow-up, review feedback, conflicts, or merge readiness.
---

# Prepare pull request

1. Read `.agents/references/git-guidelines.md` and the applicable testing guidance.
2. Inspect branch ancestry, upstream, status, commits, and the complete base-to-head diff. A normal PR targets `main`; infer a different base only for a declared dependency.
3. Confirm the branch was created from an updated base and contains one objective. Rebase or merge the updated base only when needed, preserving unrelated work.
4. Run proportional local checks and report any missing or platform-specific validation accurately.
5. Draft an English Conventional Commit-style title and a concise body covering motivation, behavior, verification, and material risks.
6. Obtain explicit confirmation before opening the PR unless the user already asked to open that specific PR.
7. After each push, monitor mergeability, checks, security alerts, and review comments through completion. Resolve verified findings within scope.
8. Before merging, report the final state and obtain separate explicit confirmation.
9. After merge, verify `main`, deployment signals when relevant, and clean up only the merged feature branches.
