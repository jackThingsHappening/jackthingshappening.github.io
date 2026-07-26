---
name: guide-research
description: Research a guide topic and append findings to the accumulating update list — runs BEFORE reading the guide to avoid anchoring bias
argument-hint: <guide-slug>
---

You are running Step 1 of the guide update pipeline for the ThingsHappening Astro site.

## Goal
Research what SHOULD be in a guide about this topic — without reading the guide first — then append your top 20 findings to the accumulating research file.

## Step 1 — Load the guide entry

Read `.claude/guide-sources.json`. Find the entry whose `slug` matches `$ARGUMENTS`.

Extract:
- `topic` — the research subject
- `slug` — used for file paths

## Step 2 — Research the topic (do NOT read the guide yet)

Use WebSearch and WebFetch to research: "**$topic**"

Look for:
- Well-known and lesser-known places, venues, or experiences that belong in this guide
- Any notable additions, openings, or changes in the past year
- Facts, history, or context a visitor would want to know
- Points of interest a thorough local guide would be expected to cover

Find your top 20 findings. For each, note:
- Name
- Why it belongs in this guide
- Key facts (address, hours, price, website if available)
- Whether it's likely already covered or potentially missing

**Blocked domains — never fetch or cite:**
- `noogatoday.com` / `6amcity.com`
- `visitchattanooga.com`

## Step 3 — Append to the research file

The research file lives at: `.claude/guide-updates/{slug}/{today_date}_research.md`

Create the directory if it doesn't exist. Append (do not overwrite) using this format:

```markdown
## {today_date}

1. **{Name}** — {why it belongs, key facts}
2. **{Name}** — {why it belongs, key facts}
...
20. **{Name}** — {why it belongs, key facts}
```

If the file doesn't exist yet, create it with a header:
```markdown
# Research: {topic}
```

Then append the dated entry.

## Step 4 — Report

Print:
- Guide slug and topic
- How many findings were added
- Path to the research file
- Any sources that couldn't be verified
