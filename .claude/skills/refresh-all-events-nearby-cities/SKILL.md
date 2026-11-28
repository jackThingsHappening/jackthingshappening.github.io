---
name: refresh-all-events-nearby-cities
description: Refresh every active nearby-city vendor, then update last_checked
---

You are running a full sweep of all nearby-city event vendors for ThingsHappening.

Nearby-city vendors cover towns outside Chattanooga proper: Chickamauga GA, Jasper TN, Cleveland TN, Guild TN, and any future additions. Their events appear on the `/chattanooga/events/nearby/` page.

## How to identify nearby-city vendors

The key signal is the `outputDir` field in the vendor config. Nearby-city vendors write events into a path that contains `/city/` — for example:

- `src/pages/chattanooga/events/city/chickamauga-ga/chilimauga`
- `src/pages/chattanooga/events/city/jasper-tn/jasper-main-street`
- `src/pages/chattanooga/events/city/cleveland-tn/mainstreet-cleveland`

Main Chattanooga vendors do not have `/city/` in their `outputDir`. Use this to tell them apart.

## Step 1 — Get today's date

Run `date +%Y-%m-%d` via Bash to get today's date.

## Step 2 — Find active nearby-city vendors

Read every file in `.claude/event-sources/`. For each `.json` file:

- Skip if `"active": false`
- Skip if `outputDir` does not contain `/city/`
- All remaining vendors are due — ignore `frequency_days` and `last_checked`

The slug is the filename without `.json` (e.g. `chilimauga.json` → `chilimauga`).

## Step 3 — Refresh every vendor

For each active nearby-city vendor, invoke the `/new-events` skill using the slug as the argument.

After each successful run, update only the `last_checked` field in that vendor's `.json` file to today's date. Do not change any other fields.

## Step 4 — Commit and push

After all vendors are processed, tally the results:
- For each vendor refreshed, count new MDX files created (calendar type) or date changes made (recurring type)
- Build a summary string like: `chilimauga +2, jasper-main-street +1`

Check for staged changes with `git status --porcelain`. If nothing changed, skip the commit and report that.

If there are changes, commit with a descriptive message:

```bash
git add .
git commit -m "chore: nearby-city event refresh 2026-07-25 — chilimauga +2, jasper-main-street +1"
git push origin main
```

Replace the date and summary with the actual date and actual results from this run.

## Report

Print a summary:
- Which vendors were refreshed
- New events added per vendor
- Any errors
