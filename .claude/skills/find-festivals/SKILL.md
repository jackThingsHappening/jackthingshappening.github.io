---
name: find-festivals
description: Monthly sweep for upcoming Chattanooga-area festivals, large annual events, and one-time happenings — searches by activity type, not just the word "festival"
---

You are finding upcoming large events, festivals, and annual happenings in the Chattanooga region to add to the ThingsHappening site. These are events that happen once a year (or once ever) rather than weekly recurring events. Run this monthly, looking 60–90 days ahead.

## What qualifies

Any significant public event that:
- Has a defined date or date range in the next 60–90 days
- Is open to the public
- Takes place in Chattanooga or the surrounding region (Cleveland TN, Ringgold GA, Collegedale TN, Ooltewah TN, Chickamauga GA, Lookout Mountain GA, Jasper TN, South Pittsburg TN, Guild TN, Whitwell TN)
- Has its own website or a dedicated events page

Do NOT require the word "festival" — many qualifying events are competitions, races, shows, tours, or multi-day happenings with no "festival" in the name.

## Step 1 — Load known events

Read two sources to build a known set:

1. `.claude/vendor-sources.json` — extract all slugs and names (all statuses count as known)
2. `src/pages/chattanooga/events/festivals/` — list all MDX filenames, extract slugs from filenames

A candidate matches if its generated slug OR its name fuzzy-matches anything in this combined set. Skip it.

## Step 2 — Search by activity type

Run 4–5 searches. Use blocked_domains: ["noogatoday.com", "6amcity.com", "visitchattanooga.com"] on every search.

Search by activity category, not by the word "festival." Rotate through these — pick categories least likely to already be covered:

**Water & action sports**
- "Chattanooga wakeboarding wakesurfing event 2026"
- "Chattanooga water sports competition Tennessee River"
- "Chattanooga river games action sports"

**Cycling, running & endurance**
- "Chattanooga triathlon cycling race 2026"
- "Chattanooga running race 5k marathon 2026"

**Motorsports & air**
- "Chattanooga car show motorsport event 2026"
- "Chattanooga airshow aviation event"

**Music & arts**
- "Chattanooga outdoor concert series summer 2026"
- "Chattanooga arts craft fair 2026"
- "Chattanooga film festival 2026"

**Food & drink**
- "Chattanooga food drink event week 2026"
- "Chattanooga beer wine cocktail event 2026"

**Cultural & community**
- "Chattanooga cultural heritage event 2026"
- "Chattanooga street fair block party 2026"

**Neighborhood events**
- "Chattanooga neighborhood stroll event 2026"
- "Chattanooga St Elmo North Shore Southside Frazier Ave neighborhood event"
- "Chattanooga neighborhood association community event 2026"

  Existing neighborhood/community orgs on the platform (use as a model for what to look for):
  - MainStreet Cleveland — downtown org running cruise-ins, festivals, farmers market
  - Nothin' Like Ringgold — city event hub with recurring and seasonal community events
  - Walker Rocks — Walker County GA community events org
  - Jasper Main Street — downtown org running seasonal festivals and block events
  - Rabbit Valley Farmers Market — weekly market with seasonal special events
  - The Commons Collegedale — community venue with seasonal markets and festivals

  Look for similar orgs in Chattanooga neighborhoods: St. Elmo, North Shore, Southside, Frazier Ave, Highland Park, East Ridge, Red Bank, Signal Mountain.

**Regional (nearby cities)**
- "Cleveland TN festival event 2026"
- "Ringgold Chickamauga Georgia event 2026"

## Step 3 — Evaluate candidates

For each candidate found, check:
- Is it in the known set? → skip
- Does it have a public website or dedicated page? → keep
- Is the date within the next 60–90 days? → keep
- Is it open to the public? → keep
- Would a Chattanooga-area resident want to attend? → keep

Neighborhood events are an exception: a public Facebook event page or neighborhood association announcement is sufficient — many strolls and block parties have no dedicated website. Use the Facebook event URL or the org's Facebook page as the `url`.

Discard: private events, ticketing aggregator pages (Eventbrite listings without an organizer site), events more than 90 days out (check back next month), events outside the region.

## Step 4 — Add qualifying events to vendor-sources.json

For each qualifying event (no cap — add all you find):

Generate a slug: lowercase name, spaces and special characters replaced with hyphens.

For Chattanooga events, omit `city`. For regional events, include it.

```json
{
  "name": "Event Name",
  "slug": "event-slug",
  "url": "https://event-website.com",
  "category": "festival",
  "city": "cleveland-tn",
  "status": "pending",
  "notes": "One sentence: what it is, when, where, and how often it recurs (annual, biennial, one-time)."
}
```

Write the full updated array back to `.claude/vendor-sources.json`.

## Step 5 — Update the search log

Append an entry to `.claude/skills/find-festivals/search-log.md`. Create the file if it doesn't exist.

Each entry uses this format:

```
## YYYY-MM-DD

**Searches run:** list the queries used this run
**Added:** list events added, or "none"
**Skipped:** list candidates rejected and why

**Suggestions for next run:** (only if nothing was added)
- Specific search queries to try
- Categories or neighborhoods not yet covered
- Orgs or event types worth investigating
```

Do not edit the skill file itself. The log is the place for search learnings.

## Step 6 — Commit and push

If anything was added to `vendor-sources.json` or the search log was updated, commit and push:

```bash
git add .claude/vendor-sources.json .claude/skills/find-festivals/search-log.md
git commit -m "chore: festival sweep {YYYY-MM-DD} — {N} vendors added"
git push origin main
```

If nothing was added to `vendor-sources.json`, still commit the search log update:

```bash
git add .claude/skills/find-festivals/search-log.md
git commit -m "chore: festival sweep {YYYY-MM-DD} — no new vendors found"
git push origin main
```

## Step 7 — Report

Print:
- Events added (name, date, location, URL)
- Events considered but skipped (name, reason)
- Total pending vendors now in queue
