---
name: onboard-vendor
description: Take the first pending vendor, build its event-source config, pull initial events, and move it to active
---

You are onboarding one new event vendor for the ThingsHappening Chattanooga site.

## Step 1 — Check run limit and find the vendor to onboard

### Run counter

Check `$ARGUMENTS` for a `max N` token (e.g. `max 5`). If found, use N as the limit. Otherwise default to 10.

Read `.claude/onboard-vendor-count.txt` if it exists. Parse it as an integer. If the value is at or above the limit, print "Run limit reached ({limit} vendors). Delete .claude/onboard-vendor-count.txt to reset." and stop.

If the file does not exist, treat the count as 0.

Increment the count by 1 and write it back to `.claude/onboard-vendor-count.txt`.

### Find the vendor

Read `.claude/vendor-sources.json`.

First, look for any entry with `"status": "pending"` and `"priority": "high"`. If more than one exists, pick the one with the earliest `event_date`. If none exist, fall back to the first entry with `"status": "pending"` in array order.

If no pending vendors exist at all, delete `.claude/onboard-vendor-count.txt` and print "No pending vendors." and stop.

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
  "last_checked": "{today}"
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
  "last_checked": "{today}"
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

**Spotlight** — if the vendor-sources.json entry has `"spotlight": true`, add `"spotlight": true` to `defaultFrontmatter` in the calendar config. Omit the field for recurring configs (spotlight applies per-event, not per-series).

Write the config to `.claude/event-sources/{slug}.json`.

## Step 5 — Pull initial events

Run the skill: `/new-events {slug}`

This fetches the venue's events page and creates MDX files with `published: true`.

## Step 6 — Humanize event copy

Run the skill: `/humanize src/pages/chattanooga/events/{slug}/ event output:source`

This rewrites the body text of all newly created event files to match the site's voice before they go live.

## Step 6b — Verify content quality

After humanizing, check each new event file for thin body copy. Any file with fewer than 60 words of body text is underweight. For each underweight file:
1. Use WebSearch to research the act or event
2. Rewrite the body to at least 60 words (4–5 sentences) covering the act's style and any key logistics
3. Write the updated file back

## Step 7 — Update vendor-sources.json

Read `.claude/vendor-sources.json`. Find the vendor entry by slug. Change `status` from `"pending"` to `"active"`. Write the file back.

## Step 8 — Commit

```bash
git add .claude/event-sources/{slug}.json .claude/vendor-sources.json src/pages/chattanooga/events/{slug}/
git commit -m "feat: onboard {vendor name} — initial events"
```

## Step 9 — Schedule a Facebook post

After committing, draft and schedule a post without waiting for approval.

### Draft the copy

**If the vendor has `"spotlight": true`** (festival):
Write a post promoting the specific event. Lead with the most concrete detail from the event MDX body — not the title. Include the direct event page URL: `https://thingshappening.com/chattanooga/events/{slug}/{event-filename}`. Under 80 words. No emojis, no hashtags, no em dashes. Write like a local.

**If the vendor does not have `"spotlight": true`** (regular venue):
Write a post introducing the new venue. Mention what kind of events they run and link to their events page: `https://thingshappening.com/chattanooga/events/{slug}`. Under 80 words. No emojis, no hashtags, no em dashes. Write like a local.

### Pick a schedule time

**Festival**: 5–7 days before `event_date` if 8+ days away; 1–3 days before if 4–7 days away; next morning if within 3 days. Time: 9–1pm CT, naturally uneven (e.g. 10:25am, 11:40am).

**Regular venue**: next Saturday or Sunday, 9–2pm CT, naturally uneven time.

### Post via the Graph API

Use env vars `FB_PAGE_ID` and `FB_PAGE_ACCESS_TOKEN`. Convert the schedule time (CT = UTC-5 Nov–Mar, UTC-6 otherwise) to a Unix timestamp.

```bash
curl -X POST "https://graph.facebook.com/v21.0/$FB_PAGE_ID/feed" \
  -d "message=<post text>" \
  -d "published=false" \
  -d "scheduled_publish_time=<unix timestamp>" \
  -d "access_token=$FB_PAGE_ACCESS_TOKEN"
```

On success, append a row to `.claude/fb-post-log.md`:

```
| 2026-MM-DD HH:mmam/pm CT | new-vendor | {vendor name} | {slug} |
```

If the API returns an error, report it and skip — do not block the rest of the run.

## Writing Rules

Any prose written into MDX files must follow these rules:

- No em-dashes (`—` or `--`)
- No parenthetical asides — use a separate sentence instead
- No hedging phrases ("it's worth noting", "essentially", "arguably", "in many ways")
- No filler openers ("Join us", "Don't miss", "Get ready for")
- Short sentences — 20 words or fewer
- Active voice only

## Step 10 — Report

Print:
- Vendor name and type
- Config written to
- Number of event files created
- Current run count (e.g. "3 of 10 this session")
- Any issues encountered
