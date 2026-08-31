---
name: review-changes
description: Review a local diff, commit range, or branch for correctness, regressions, security, missing tests, and repository-convention violations. Use for code review, a second pass, or pre-delivery risk assessment.
---

# Review changes

1. Determine the target; default to staged plus unstaged changes against `HEAD`.
2. Read `.agents/references/engineering-guidelines.md` and add design, testing, or Git guidance according to the changed files.
3. Infer the intended behavior from the request and diff without using intent to excuse incorrect behavior.
4. Check correctness, edge cases, security, accessibility, data loss, error states, generated files, naming, and whether tests prove their claims.
5. Verify every candidate finding against the actual code and discard speculation.
6. Report findings first, ordered by severity, with `file:line`, impact, and a concrete remedy. Then mention open questions and residual testing risk.
7. Do not edit for a review-only request. When review is part of implementation, fix validated findings before delivery.
