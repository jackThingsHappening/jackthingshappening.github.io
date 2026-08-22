---
name: find-vendors
description: Search for new event vendors in Chattanooga and nearby regional towns and queue them for onboarding
---

You are finding new event venues and vendors to add to the ThingsHappening site. The site covers Chattanooga, TN and the surrounding region.

## Categories in scope
Music venues, food and drink (breweries, bars, restaurants with events), museums, live shows and theaters, sports venues, comedy, outdoors/parks, farms and agritourism.

## Regional scope

The site covers Chattanooga and these nearby cities and towns:

- Cleveland, TN (`cleveland-tn`)
- Ringgold, GA (`ringgold-ga`)
- Collegedale, TN (`collegedale-tn`)
- Ooltewah, TN (`ooltewah-tn`)
- Chickamauga, GA (`chickamauga-ga`)
- Lookout Mountain, GA (`lookout-mountain-ga`)
- Jasper, TN (`jasper-tn`)
- South Pittsburg, TN (`south-pittsburg-tn`)
- Guild, TN (`guild-tn`)
- Whitwell, TN (`whitwell-tn`)

Each run searches Chattanooga plus **one nearby city** (rotate through the list — pick whichever has been searched least recently based on existing vendors in the file).

## Step 1 — Load known vendors

Read two files and combine into one known set:

1. `.claude/known-vendors.md` — static list of all active and legacy vendors. Extract every slug and name from the table.
2. `.claude/vendor-sources.json` — extract all slugs and names. All statuses (`active`, `pending`, `blocked`) count as known.

Also note which nearby cities already have vendors in `.claude/vendor-sources.json` (by `city` field). Pick the nearby city with the fewest existing entries as the regional focus for this run.

A candidate matches if its generated slug OR its name fuzzy-matches any entry in this combined set. Skip it.

## Step 2 — Search for new venues

Run WebSearch queries across the categories. Use blocked_domains: ["noogatoday.com", "6amcity.com", "visitchattanooga.com"] on every search.

Run 2 Chattanooga searches and 2 searches for the selected nearby city. Rotate through categories — don't need to run all:

**Chattanooga searches (pick 2):**
- "Chattanooga live music venues events"
- "Chattanooga brewery events schedule"
- "Chattanooga theater comedy shows"
- "Chattanooga sports stadium arena events"
- "Chattanooga museum events programs"
- "Chattanooga outdoor events parks concerts"
- "Chattanooga farm events agritourism"
- "Chattanooga restaurants weekly events trivia"

**Nearby city searches (pick 2, substitute the selected city name):**
- "{City} events venues"
- "{City} live music bars"
- "{City} brewery farm festival"
- "{City} community events calendar"

For each result, look for venues that host **regular, recurring events** (weekly shows, recurring series, seasonal programming) — not one-off private events.

## Step 3 — Evaluate candidates

For each candidate venue found, check:
- Is the slug or name already in the known vendors list? → skip
- Does the venue have a public events calendar or schedule page? → keep
- Is it in Chattanooga or one of the regional cities listed above? → keep
- Would a local or regional resident find this useful? → keep

Discard: national chain event listings, ticketing aggregators (Eventbrite, Ticketmaster pages), venues that only host private parties, venues with no public events page.

## Step 4 — Add up to 3 new vendors

For each qualifying new vendor (max 3 this run):

Generate a slug: lowercase name, spaces and special characters replaced with hyphens.

For Chattanooga vendors, omit the `city` field. For regional vendors, include it using the slug from the regional scope list above.

Append to `.claude/vendor-sources.json`:
```json
{
  "name": "Full Venue Name",
  "slug": "venue-slug",
  "url": "https://their-events-page-url",
  "category": "music|food-drink|museum|theater|sports|comedy|outdoors|farm|community",
  "city": "cleveland-tn",
  "status": "pending",
  "notes": "One sentence about what kind of events they run"
}
```

Omit `city` for Chattanooga vendors. Write the full updated array back to `.claude/vendor-sources.json`.

## Step 5 — Report

Print:
- Nearby city searched this run
- Vendors added (name, city, category, URL)
- Vendors considered but skipped (name, reason)
- Total pending vendors now in queue
