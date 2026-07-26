---
name: guide-validate
description: Verify legitimacy of new and changed guide content, then humanize the prose
argument-hint: <guide-slug>
---

You are running Step 3 of the guide update pipeline for the ThingsHappening Astro site.

## Goal
Verify every new or recently changed content item in the guide, then apply a humanize pass to ensure the prose matches the site's voice.

## Step 1 — Load the guide

Read `.claude/guide-sources.json`. Find the entry for `$ARGUMENTS`.

Read the guide at `path`. Identify any content items that were added or modified in this run (they will be new or have recently changed text compared to what you'd expect from the existing style).

## Step 2 — Multi-step legitimacy check

For each new or changed item, run this chain:

**2a. Existence check**
WebFetch the business/place website or search for it. Confirm:
- It still exists and is operating
- The name is correct
- The address (if stated) is accurate

**2b. Fact check**
Verify any specific claims made in the description:
- Hours, prices, or admission costs
- URLs and links resolve correctly
- Any historical or factual statements

**2c. Relevance check**
Confirm it genuinely fits the guide's topic and city. If something doesn't check out, remove it and note why.

**Blocked domains — never fetch or cite:**
- `noogatoday.com` / `6amcity.com`
- `visitchattanooga.com`

## Step 3 — Fix any issues found

- Correct wrong facts in place
- Remove items that couldn't be verified as real and operating
- Update dead links to working alternatives or remove them
- If an item is removed, renumber subsequent items in its section

## Step 4 — Humanize pass

Read the site's voice guidelines: prose should be concrete, local, and direct. No marketing fluff. Short sentences. Specific details over general claims.

Apply this to:
- Any new content items added in this run
- Any descriptions that were rewritten during fact-checking
- Leave existing, healthy content untouched

Reference other guide files for voice consistency if needed.

## Step 5 — Report

Print:
- Items verified (name + outcome)
- Items corrected (what changed)
- Items removed (name + reason)
- Humanize changes applied
