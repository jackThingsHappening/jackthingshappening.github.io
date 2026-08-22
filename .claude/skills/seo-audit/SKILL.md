---
name: seo-audit
description: Monthly SEO sweep — finds and fixes what it can, logs what it can't
---

You are running a monthly SEO audit and fix pass on the ThingsHappening Chattanooga site. Fix auto-fixable issues in place. Log anything that requires human judgment.

The log file is `.claude/skills/seo-audit/audit-log.md`. Append a new entry each run. Create the file if it doesn't exist.

---

## Check 1 — Missing seoDescription

Find all published event MDX files under `src/pages/chattanooga/events/` that do not contain `seoDescription:`.

For each missing one:
- Read the file — extract `title`, `venue`, `time`, `pubDate`, and body text
- Write a seoDescription using this pattern: one specific sentence, 100–150 characters, active voice, no filler. Include venue and event type.
- Insert it after the `pubDate:` line in the frontmatter using single quotes: `seoDescription: 'Your description here.'`

Log: count fixed, filenames.

---

## Check 2 — Thin seoDescriptions

Find published event MDX files where `seoDescription` is present but under 60 characters or is clearly generic (e.g. just the title repeated, or "An event at [venue]").

For each thin one:
- Rewrite the seoDescription using the body content and frontmatter fields
- Keep it 100–150 characters, specific, active voice

Log: count rewritten, filenames.

---

## Check 3 — Thin body content

Find published event MDX files where the body content (everything after the closing `---`) is under 30 words.

Do NOT auto-fix — prose quality requires human judgment.

Log: filenames and current word count. Note "needs human review."

---

## Check 4 — Internal link coverage

Check `src/components/BlogPost.astro` for the `GUIDE_MAP` constant. Verify these genre tags are covered:
`music`, `live-events`, `comedy`, `theatre`, `sports`, `outdoors`, `farm`, `museum`, `brewery`, `food-drink`, `food`

Then scan event MDX files for genre tags NOT in the map. List any uncovered tags.

Do NOT auto-fix — new guide mappings require a guide to exist first.

Log: uncovered tags and example files that use them.

---

## Check 5 — Event schema coverage

Verify `src/layouts/BlogPostLayout.astro` contains a JSON-LD `Event` schema block gated on `eventLink && pubDate && venue`.

If missing entirely — add it. (See existing implementation from 2026-08-22 commit.)

If present — confirm the required fields are there: `name`, `description`, `startDate`, `eventStatus`, `eventAttendanceMode`, `location`, `url`, `offers`.

Log: pass or fail, what was fixed if anything.

---

## Check 6 — Broken eventLink fields

Sample 20 random published event MDX files. For each, check if the `eventLink` URL returns a non-200 response.

Flag any that 404 or timeout — do not auto-fix, as the replacement URL requires research.

Log: broken links found (filename + URL).

---

## Commit and push

Stage and commit all changes made during this run:

```bash
git add src/pages/chattanooga/events/ src/components/BlogPost.astro src/layouts/BlogPostLayout.astro .claude/skills/seo-audit/audit-log.md
git commit -m "chore: seo audit {YYYY-MM-DD} — {summary of fixes}"
git push origin main
```

If no files changed, still commit the log update:

```bash
git add .claude/skills/seo-audit/audit-log.md
git commit -m "chore: seo audit {YYYY-MM-DD} — no fixes needed"
git push origin main
```

---

## Log format

Append to `.claude/skills/seo-audit/audit-log.md`:

```
## YYYY-MM-DD

### Check 1 — Missing seoDescription
- Fixed: N files — [list filenames]
- None missing: ✓

### Check 2 — Thin seoDescriptions
- Rewritten: N files — [list filenames]
- None thin: ✓

### Check 3 — Thin body content
- Needs review: [filename — N words], ...
- None thin: ✓

### Check 4 — Internal link coverage
- Uncovered tags: [tag — example file], ...
- All tags covered: ✓

### Check 5 — Event schema
- Status: present / fixed / missing fields corrected

### Check 6 — Broken eventLinks
- Broken: [filename — URL], ...
- None broken: ✓
```
