---
name: guide-update
description: Review the accumulated research list and apply worthwhile additions and optimizations to a guide
argument-hint: <guide-slug>
---

You are running Step 2 of the guide update pipeline for the ThingsHappening Astro site.

## Goal
Compare the accumulated research against the current guide, add items worth including, and optimize 7 existing content items.

## Step 1 — Load context

Read `.claude/guide-sources.json`. Find the entry for `$ARGUMENTS`.

Read:
- The full research file at `.claude/guide-updates/$ARGUMENTS/` (read ALL dated entries, not just the latest — this is the accumulating list)
- The full guide at the `path` field

## Step 2 — Identify gaps

Compare the research list against the guide's existing content items. For each research finding, decide:
- **Already covered** — skip
- **Worth adding** — flag it

Criteria for "worth adding":
- It's a real, verifiable place or experience
- It fits the guide's existing tone and scope
- It adds genuine value a reader would appreciate
- It's not a duplicate of something already there under a different name

Add **up to 3 new items** per run. Quality over quantity.

## Step 3 — Add new content items

For each item being added, insert it as a new numbered content block in the appropriate section of the guide. Follow the exact HTML structure used by existing items:

```html
<div class="pb-10">
  <div class="text-3xl pb-2">
    <span class="color-pink mr-2"><b>N.</b></span>
    Place or Experience Name
  </div>
  <div>
    2-3 sentence description in the guide's casual, local voice. Include a link if there's a reliable website. Concrete details over marketing language.
  </div>
</div>
```

Update the numbering of subsequent items if inserting mid-section.

Update the `lastUpdated` frontmatter field to today's date in MM/DD/YYYY format. This must happen even if only existing items were optimized — any run that touches the guide should update this field.

## Step 4 — Review 7 existing content items

Pick 7 existing content items from the guide (prioritize ones that haven't been recently updated or that reference dates/prices/URLs that may be stale). For each:
- Verify the business still exists (use WebFetch on their website or a search)
- Check for outdated facts (old hours, closed locations, dead links, stale prices)
- Tighten the description if it's vague or wordy
- Update any dead links

Make edits in place. Do not rewrite healthy content — only fix what's actually wrong or improvable.

## Step 5 — Report

Print:
- Items added (name + section)
- Items reviewed, with any changes made
- Items skipped and why
