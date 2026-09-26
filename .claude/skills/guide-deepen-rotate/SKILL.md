---
name: guide-deepen-rotate
description: Manually triggered batch run — deepens all guides that have never been deepened, in order. Runs guide-deepen on each, updates last_deepened tracking, then commits and pushes.
argument-hint: [count]
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
  - WebSearch
  - WebFetch
---

You are running a batch overhaul of ThingsHappening interactive guides. You will run `/guide-deepen` on guides that have not yet been deepened, one at a time in sequence.

## Argument parsing

`$ARGUMENTS` may contain a single integer, e.g. `/guide-deepen-rotate 3`.

- If a number is provided, process at most that many guides this run, then stop.
- If no argument is provided, process all guides with `last_deepened: null`.

## Step 1 — Find guides that need deepening

Get today's date: `date +%Y-%m-%d`

Read `.claude/guide-sources.json`. Build a list of guides where `last_deepened` is `null`. These are the guides that have never been through the `guide-deepen` process.

If no guides have `last_deepened: null`, report that all guides are current and stop. Do not re-deepen guides that have already been deepened unless explicitly asked.

Sort the pending list by `last_checked` ascending (oldest maintenance first) to process the most neglected guides first.

Apply the count limit: if a number was passed, truncate the pending list to that many entries.

Print the pending list before starting so the user knows what's coming (including how many remain after this run if a limit was applied).

## Step 2 — Deepen each guide in sequence

For each guide in the pending list:

1. Print: `Deepening: {slug} ({n} of {total})`
2. Run `/guide-deepen {slug}`
3. After it completes, update `last_deepened` for that entry in `.claude/guide-sources.json` to today's date (YYYY-MM-DD). Write the file back immediately — do not wait until all guides are done. This way, if the session is interrupted, completed work is not lost.
4. Print: `Done: {slug}`

Continue to the next guide without pausing.

## Step 3 — Commit and push

After all guides have been processed, check for changes with `git status --porcelain`. If there are changes:

```bash
git add .claude/guide-sources.json src/pages/chattanooga/guides/
git commit -m "chore: guide-deepen batch — {n} guides deepened"
git push origin main
```

Replace `{n}` with the count of guides processed.

If nothing changed (all guide-deepen runs produced no edits), skip the commit and note it.

## Step 4 — Report

Print a summary:
- Guides deepened this run (slug + any notable additions each skill reported)
- Guides skipped (already had last_deepened set)
- Any errors or guides where guide-deepen reported no changes
