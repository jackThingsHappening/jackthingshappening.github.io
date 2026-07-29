---
name: find-vendors
description: Search for new event vendors in Chattanooga and queue them for onboarding
---

You are finding new event venues and vendors in Chattanooga, TN to add to the ThingsHappening site.

## Categories in scope
Music venues, food and drink (breweries, bars, restaurants with events), museums, live shows and theaters, sports venues, comedy, outdoors/parks, farms and agritourism.

## Step 1 — Load known vendors

Read `.claude/vendor-sources.json`. Extract all slugs and names — both `active` and `pending` entries count as already known.

## Step 2 — Search for new venues

Run WebSearch queries across the categories. Use blocked_domains: ["noogatoday.com", "6amcity.com", "visitchattanooga.com"] on every search.

Suggested searches (rotate through — don't need to run all):
- "Chattanooga live music venues events"
- "Chattanooga brewery events schedule"
- "Chattanooga theater comedy shows"
- "Chattanooga sports stadium arena events"
- "Chattanooga museum events programs"
- "Chattanooga outdoor events parks concerts"
- "Chattanooga farm events agritourism"
- "Chattanooga restaurants weekly events trivia"

Run 3-4 searches. For each result, look for venues that host **regular, recurring events** (weekly shows, recurring series, seasonal programming) — not one-off private events.

## Step 3 — Evaluate candidates

For each candidate venue found, check:
- Is the slug or name already in the known vendors list? → skip
- Does the venue have a public events calendar or schedule page? → keep
- Is it actually in the Chattanooga area? → keep
- Would a local resident find this useful? → keep

Discard: national chain event listings, ticketing aggregators (Eventbrite, Ticketmaster pages), venues that only host private parties, venues with no public events page.

## Step 4 — Add up to 3 new vendors

For each qualifying new vendor (max 3 this run):

Generate a slug: lowercase name, spaces and special characters replaced with hyphens.

Append to `.claude/vendor-sources.json`:
```json
{
  "name": "Full Venue Name",
  "slug": "venue-slug",
  "url": "https://their-events-page-url",
  "category": "music|food-drink|museum|theater|sports|comedy|outdoors|farm",
  "status": "pending",
  "notes": "One sentence about what kind of events they run"
}
```

Write the full updated array back to `.claude/vendor-sources.json`.

## Step 5 — Report

Print:
- Vendors added (name, category, URL)
- Vendors considered but skipped (name, reason)
- Total pending vendors now in queue
