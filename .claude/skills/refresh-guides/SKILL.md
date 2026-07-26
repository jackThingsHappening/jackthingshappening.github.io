---
name: refresh-guides
description: Pick the least-recently-updated guide and run the full research → update → validate pipeline, then push to GitHub
---

You are running the ThingsHappening scheduled guide refresh.

## Step 1 — Sync new guides into guide-sources.json

Get today's date with Bash: `date +%Y-%m-%d`

Read `.claude/guide-sources.json`. Also list all `.mdx` files in `src/pages/chattanooga/guides/` (excluding `index.astro` and tag directories).

For any guide file NOT already in `guide-sources.json` (matched by path), add a new entry:
- `slug`: filename without `.mdx`
- `path`: `src/pages/chattanooga/guides/{filename}`
- `title`: read from the file's `title` frontmatter field
- `topic`: infer from the title and slug — be specific, include "in Chattanooga, TN"
- `frequency_days`: 30
- `last_checked`: "2026-01-01" (so it gets picked up soon)

Write the updated array back to `.claude/guide-sources.json`.

## Step 2 — Find the due guide

Find the entry with the oldest `last_checked` date. That is the guide to process this run.

## Step 3 — Run the pipeline

Execute each skill in sequence, passing the guide's `slug` as the argument:

1. `/guide-research {slug}` — research the topic and append findings to the accumulating list
2. `/guide-update {slug}` — review the research, add up to 3 new items, optimize 7 existing items
3. `/guide-validate {slug}` — verify new/changed content, humanize

## Step 4 — Update last_checked

After the pipeline completes successfully, update the `last_checked` field in `.claude/guide-sources.json` for this guide to today's date (YYYY-MM-DD). Do not change any other fields.

## Step 5 — Commit and push

Check for changes with `git status --porcelain`. If there are changes:

```bash
git add .claude/guide-sources.json .claude/guide-updates/ src/pages/chattanooga/guides/
git commit -m "chore: guide refresh 2026-07-25 — {slug} updated"
git push origin main
```

Replace the date and slug with the actual values.

Only commit if there are staged changes. If nothing changed, skip the commit and report that.

## Report

Print a summary:
- Which guide was processed
- What was added, changed, or removed
- Any items that couldn't be verified
