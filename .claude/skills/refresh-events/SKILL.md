---
name: refresh-events
description: Check all vendors for due event refreshes and push updates to GitHub
---

You are running the ThingsHappening scheduled event refresh.

## Step 1 — Get today's date

Run `date +%Y-%m-%d` via Bash to get today's date.

## Step 2 — Find due vendors

Read every file in `.claude/event-sources/`. For each `.json` file:
- Parse `frequency_days` and `last_checked`
- Skip if `"active": false`
- Compute days since `last_checked`
- If `days_since >= frequency_days`, this vendor is due

The slug is the filename without `.json` (e.g. `songbirds.json` → `songbirds`).

## Step 3 — Refresh each due vendor

For each due vendor, invoke the `/new-events` skill using the slug as the argument.

After each successful run, update only the `last_checked` field in that vendor's `.json` file to today's date. Do not change any other fields.

## Step 4 — Commit and push

After all vendors are processed, tally the results:
- For each vendor refreshed, count new MDX files created (calendar type) or date changes made (recurring type)
- Build a summary string like: `songbirds +3, woodshop +1, chattanooga-market updated`

Check for staged changes with `git status --porcelain`. If nothing changed, skip the commit and report that.

If there are changes, commit with a descriptive message:

```bash
git add .
git commit -m "chore: event refresh 2026-07-25 — songbirds +3, woodshop +1"
git push origin main
```

Replace the date and summary with the actual date and actual results from this run.

## Report

Print a summary:
- Which vendors were refreshed
- Which were skipped (not yet due, with days_since/frequency_days shown)
- Any errors
