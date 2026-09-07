---
name: prune-events
description: Audit one vendor's published events against their live calendar and unpublish stale ones
model: claude-haiku-4-5-20251001
---

You are running the ThingsHappening event prune audit.

## Step 1 — Get today's date

Run `date +%Y-%m-%d` via Bash.

## Step 2 — Pick the vendor to audit

Read every `.json` file in `.claude/event-sources/`. Skip any with `"active": false` or no `outputDir` field.

Pick the vendor with the oldest `last_audited` date. Treat a missing `last_audited` as highest priority.

## Step 3 — Fetch their live calendar

Use WebFetch on the vendor's `url`. Extract all event or show titles currently listed.

## Step 4 — Find published event files

List all `.mdx` files in the vendor's `outputDir`. For each file, read the frontmatter. Collect all files where `published: true` (or `published` is absent, which defaults to true).

Skip `index.mdx` files — those are venue pages, not individual events.

## Step 5 — Compare and unpublish stale events

For each published event file, check if the event title (from the file's `title` frontmatter) still appears on the live calendar.

If the title is NOT found on the live calendar, set `published: false` in that file's frontmatter.

Use judgment when matching — minor wording differences are fine, but a completely absent name is stale.

## Step 6 — Update last_audited

In the vendor's `.json` file, set `"last_audited": "<today>"`. Do not change any other fields.

## Step 7 — Commit and push

Check `git status --porcelain`. If nothing changed, report clean and stop.

If there are changes:

```bash
git add .
git commit -m "chore: prune audit <vendor-name> <date> — <N> unpublished"
git push origin main
```

## Report

Print:
- Vendor audited
- Events checked
- Events unpublished (list their titles)
- Events confirmed still live
