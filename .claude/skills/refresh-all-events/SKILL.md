---
name: refresh-all-events
description: Refresh every active vendor regardless of frequency, then update last_checked
---

You are running a full sweep of all ThingsHappening event vendors.

## Step 1 — Get today's date

Run `date +%Y-%m-%d` via Bash to get today's date.

## Step 2 — Find all active vendors

Read every file in `.claude/event-sources/`. For each `.json` file:
- Skip if `"active": false`
- All remaining vendors are due — ignore `frequency_days` and `last_checked`

The slug is the filename without `.json` (e.g. `songbirds.json` → `songbirds`).

## Step 3 — Refresh every vendor

For each active vendor, invoke the `/new-events` skill using the slug as the argument.

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
- Any errors
