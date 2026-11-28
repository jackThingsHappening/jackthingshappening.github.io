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

From the vendor list, extract the unique city slugs by parsing `outputDir`. Map each slug to a display name:

- `chickamauga-ga` → "Chickamauga GA"
- `jasper-tn` → "Jasper TN"
- `cleveland-tn` → "Cleveland TN"
- `guild-tn` → "Guild TN"

For unknown slugs, derive the display name from the slug (replace hyphens with spaces, uppercase state abbreviation).

## Step 3 — City-wide event search

For each unique nearby city, run a broad web search to find events from venues not yet tracked as vendors. This step runs for every city regardless of which vendors exist.

### 3a. Build the search queries

For each city (use its display name, e.g. "Chickamauga GA"), run WebSearch with these queries. Run all queries for a city before moving to the next. Always pass `blocked_domains: ["noogatoday.com", "6amcity.com", "visitchattanooga.com"]`.

- `"Chickamauga GA" upcoming events 2026`
- `"Chickamauga GA" community events festivals`
- `"Chickamauga GA" live music concerts`
- `"Chickamauga GA" holiday events parades`
- `"Chickamauga GA" bars restaurants events`
- `"Chickamauga GA" parks recreation sports children`
- `"Chickamauga GA" comedy theatre arts`

Repeat for each city, substituting the display name.

### 3b. Collect events from search results

From the search results, extract individual upcoming events. For each event:

- Must have a future date (today or later)
- Must have a title and at least a rough date
- Must be in the correct city

Discard duplicates — if the same event appears in multiple search results, keep it once.

### 3c. Check for existing coverage

For each event, slugify the title (lowercase, spaces and special characters become hyphens). Check whether any file with that slug already exists anywhere under `src/pages/chattanooga/events/city/{city-slug}/`. If a close match exists, skip it.

Also skip any event whose venue is already a known vendor in that city (e.g., skip a Jasper Main Street event if `jasper-main-street` is an active vendor — the vendor refresh in Step 4 handles those).

### 3d. Attempt vendor onboarding for new sources

Before writing individual event files, check whether the source venue looks like a trackable vendor — a business or organization that regularly posts events at a stable URL.

A venue is a good vendor candidate if:
- It has its own website with a dedicated events or calendar page
- It posts more than one upcoming event
- It is a business, organization, or city program (not just a one-off ticketing page)

For each venue that qualifies:

1. Check `.claude/event-sources/` for an existing config file with a matching name or URL. If one exists, skip onboarding — the vendor is already tracked.
2. Build a new vendor config file at `.claude/event-sources/{vendor-slug}.json`. Use the slug format: lowercase name, spaces become hyphens (e.g. `cleveland-parks-rec.json`).

Determine the type:
- Use `"calendar"` if the venue posts one-off named events with individual titles and dates.
- Use `"recurring"` if the venue runs the same events on a weekly or monthly schedule.
- Use `"mixed"` if both apply.

Use this config template for a calendar vendor:

```json
{
  "name": "{Venue Display Name}",
  "type": "calendar",
  "url": "{events page URL}",
  "outputDir": "src/pages/chattanooga/events/city/{city-slug}/{vendor-slug}",
  "slugPrefix": "",
  "defaultFrontmatter": {
    "venue": "{Venue Name}",
    "address": "{address if known}",
    "iconPath": "/images/icons-new/community.png",
    "eventLink": "{events page URL}",
    "tags": [
      { "type": "place", "tag": "{vendor-slug}" },
      { "type": "genre", "tag": "{best-fit: community | food-drink | music | arts | sports | holiday | family}" },
      { "type": "city", "tag": "{city-slug}" }
    ],
    "layout": "../../../../../../layouts/BlogPostLayout.astro"
  },
  "frequency_days": 14,
  "last_checked": "{today YYYY-MM-DD}"
}
```

For a recurring vendor, add an `events` array instead of `outputDir`/`slugPrefix`/`defaultFrontmatter`. Model it on existing recurring configs in `.claude/event-sources/`.

3. After creating the config, invoke the `/new-events` skill with the new vendor slug to pull in the initial events. This handles writing the MDX files — do not write them manually in Step 3e.

4. If the venue does not qualify as a vendor (a one-off event, a ticketing page with no home venue, or a Facebook event with no website), skip onboarding and fall through to Step 3e.

### 3e. Write one-off event files for non-vendor events

For events whose source venue was not onboarded as a vendor, create a new MDX file at:

```
src/pages/chattanooga/events/city/{city-slug}/{slugified-title}.mdx
```

Use this frontmatter template:

```mdx
---
title: "{event title}"
published: true
pubDate: "{YYYY-MM-DD}"
time: "{time, or omit field if unknown}"
entranceCost: "{cost, or Free if none listed}"
seoDescription: "{1-2 sentence description}"
venue: "{venue name}"
address: "{address if known, or city name}"
iconPath: "/images/icons-new/community.png"
eventLink: "{source URL}"
tags:
  - type: "city"
    tag: "{city-slug}"
  - type: "genre"
    tag: "{best-fit tag: community | food-drink | music | arts | sports | holiday | family}"
layout: "../../../../../layouts/BlogPostLayout.astro"
---
```

**Layout path note:** Files written directly into `src/pages/chattanooga/events/city/{city-slug}/` use 5 `../` segments to reach `src/`. Files written into a vendor subdirectory one level deeper use 6 `../` segments, as defined in the vendor config.

Body copy must be at least 60 words. Cover:

- What the event is and what makes it worth attending
- Specific details: who is performing, what is on offer, what the vibe is like
- Key logistics: cost, parking, age limits, doors vs. show time
- One useful detail a first-timer would want to know

Write like you are recommending the event to a friend. Specific beats generic.

### Writing rules for body copy

- No em-dashes (`—` or `--`)
- No parenthetical asides — use a separate sentence
- No hedging phrases ("it's worth noting", "essentially", "arguably")
- No filler openers ("Join us", "Don't miss", "Get ready for")
- Short sentences — 20 words or fewer
- Active voice only

## Step 4 — Refresh every vendor

For each active nearby-city vendor found in Step 2, invoke the `/new-events` skill using the slug as the argument.

After each successful run, update only the `last_checked` field in that vendor's `.json` file to today's date. Do not change any other fields.

## Step 5 — Commit and push

After all cities and vendors are processed, tally the results:
- Count new MDX files created in city-wide search (Step 3)
- Count new MDX files created or dates updated per vendor (Step 4)
- Build a summary string like: `city-search +3, chilimauga +2, jasper-main-street +1`

Check for staged changes with `git status --porcelain`. If nothing changed, skip the commit and report that.

If there are changes, commit with a descriptive message:

```bash
git add .
git commit -m "chore: nearby-city event refresh 2026-07-25 — city-search +3, chilimauga +2, jasper-main-street +1"
git push origin main
```

Replace the date and summary with the actual date and actual results from this run.

## Report

Print a summary:
- Which cities were searched and how many new events were found
- Which vendors were refreshed and new events added per vendor
- Any errors or cities where no events were found
