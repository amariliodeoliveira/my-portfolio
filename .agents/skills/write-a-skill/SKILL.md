---
name: write-a-skill
description: Create or improve a focused, reusable Codex skill under `.agents/skills/`. Use when repository knowledge or a repeatable workflow should become a versioned skill.
---

# Write a skill

1. Identify the workflow, realistic triggers, expected outcome, and any external or destructive actions.
2. Read the official `skill-creator` skill completely and follow its structure and validation rules.
3. Place the skill in `.agents/skills/<skill-name>/`, using lowercase hyphen-case matching its frontmatter name.
4. Keep `SKILL.md` concise and procedural. Add `references/`, `scripts/`, or `assets/` only when they provide concrete progressive-disclosure or repeatability value.
5. Write a discriminating description that explains both capability and trigger context.
6. Generate or update `agents/openai.yaml`; its default prompt must explicitly mention `$<skill-name>`.
7. Validate with the official `quick_validate.py` and inspect the result for placeholders, duplicated policy, and overly broad instructions.
