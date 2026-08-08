---
name: onboard-vendor
description: Take the first pending vendor, build its event-source config, pull initial events, and move it to active
---

You are onboarding one new event vendor for the ThingsHappening Chattanooga site.

## Step 1 — Find the vendor to onboard

Read `.claude/vendor-sources.json`. Find the first entry with `status: "pending"`. If none exist, print "No pending vendors." and stop.

## Step 2 — Check robots.txt

Derive the robots.txt URL from the vendor's `url`. Fetch it with WebFetch. If crawling is disallowed for the events path, mark the vendor's status as `"blocked"` in vendor-sources.json, write it back, and stop.

## Step 3 — Fetch the events page

Use WebFetch on the vendor's `url`. Read the content to understand:
- What kinds of events do they run?
- Are events one-off (individual shows with their own titles and dates) or recurring series (trivia every Thursday, market every Saturday)?
- What is the venue's address?
- What is a reliable link to their events page?

## Step 4 — Determine vendor type and build config

**If events are one-off calendar events** (each show has a unique title), use type `calendar`:

```json
{
  "name": "Full Venue Name",
  "type": "calendar",
  "url": "https://events-page-url",
  "outputDir": "src/pages/chattanooga/events/{slug}",
  "slugPrefix": "",
  "defaultFrontmatter": {
    "venue": "Full Venue Name",
    "address": "Street address, Chattanooga, TN ZIP",
    "iconPath": "/images/icons-new/{icon}.png",
    "eventLink": "https://events-page-url",
    "tags": [
      { "type": "place", "tag": "{slug}" },
      { "type": "genre", "tag": "{descriptive-tag}" }
    ],
    "layout": "../../../../layouts/BlogPostLayout.astro"
  },
  "frequency_days": 7,
  "last_checked": "2026-01-01"
}
```

**If events are a recurring series** (same event on a pattern), use type `recurring`:

```json
{
  "name": "Full Venue Name",
  "type": "recurring",
  "url": "https://events-page-url",
  "events": [
    {
      "outputPath": "src/pages/chattanooga/events/{slug}/{event-series-slug}.mdx",
      "matchHint": "Description of how to identify this series on the page"
    }
  ],
  "frequency_days": 14,
  "last_checked": "2026-01-01"
}
```

**Icon selection** — pick the closest match from `/images/icons-new/`:
- music.png → music venues, concert halls
- beer.png → breweries, bars
- dish-plate.png → restaurants
- museum.png → museums, galleries
- theater.png → theaters, comedy, live shows
- sport.png → sports venues
- pine-tree.png or mountains.png → outdoor venues, parks
- barn.png → farms
- calendar.png → convention centers, multi-purpose venues
- market.png → markets

**Tags** — always two: first a `place` tag using the vendor's slug, then one `genre` tag describing the type of content (music, live-events, food-drink, museum, theater, sports, comedy, outdoors, farm, market)

Write the config to `.claude/event-sources/{slug}.json`.

## Step 5 — Pull initial events

Run the skill: `/new-events {slug}`

This fetches the venue's events page and creates MDX files with `published: true`.

## Step 6 — Humanize event copy

Run the skill: `/humanize src/pages/chattanooga/events/{slug}/ event output:source`

This rewrites the body text of all newly created event files to match the site's voice before they go live.

## Step 7 — Update vendor-sources.json

Read `.claude/vendor-sources.json`. Find the vendor entry by slug. Change `status` from `"pending"` to `"active"`. Write the file back.

## Step 8 — Commit

```bash
git add .claude/event-sources/{slug}.json .claude/vendor-sources.json src/pages/chattanooga/events/{slug}/
git commit -m "feat: onboard {vendor name} — initial events"
```

## Step 9 — Report

Print:
- Vendor name and type
- Config written to
- Number of event files created
- Any issues encountered
