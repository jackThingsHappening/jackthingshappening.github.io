# SXO Audit: thingshappening.com
**Date:** 2026-09-20
**Analyst:** Claude SXO Agent (claude-sonnet-4-6)
**Scope:** 5 target keywords, 3 target URLs

---

## PRIMARY FINDING: Page-Type Mismatch — Homepage

**Severity: CRITICAL**

The homepage (thingshappening.com/) acts as a city-selector landing page. It introduces the product and links to /chattanooga/. The SERP for "things to do in Chattanooga" is dominated by listicles, attraction guides, and event calendars — all of which deliver immediate, scannable content. The homepage delivers none. A user who lands on it must click again before they reach anything useful. Google will not reward an extra click when every competitor gives the answer on arrival.

---

## 1. Pages Audited

| URL | Page Type (Actual) | Status |
|---|---|---|
| thingshappening.com/ | Landing Page (city selector) | 200 |
| thingshappening.com/chattanooga/ | Event Calendar (thin) | 200 |
| thingshappening.com/chattanooga/guides/live-music/ | Blog Post / Guide | 200 |

---

## 2. SERP Analysis by Keyword

### Query 1: "things to do in Chattanooga"

**Dominant SERP type:** Listicle / Blog Post (confidence: 90%)

Top results include TripAdvisor attractions list, travel blog roundups (Y Travel Blog, The Traveling Wildflower, Backyard Knoxville), a hotel local guide (The Read House), and Sophisticated Life's 24-hour guide. Every result is a curated list of activities with descriptions. PAA questions cluster around family activities, outdoor options, and free things to do. No event calendar ranks here.

**SERP features observed:** PAA box (family/outdoor/free variants), related searches ("free things to do in Chattanooga", "things to do in Chattanooga with kids", "Chattanooga attractions"), no ads.

**Intent signal:** Awareness stage. User is planning a visit or weekend outing and wants a curated list of the best options.

**Does thingshappening.com match?** No. The homepage is a city selector. /chattanooga/ shows a raw event feed with a 58-word extracted text count. Neither page is a listicle or curated activity guide. The site has no page that targets this keyword with a "best things to do" structure.

**Mismatch severity: CRITICAL**

---

### Query 2: "Chattanooga events this weekend"

**Dominant SERP type:** Event Calendar (confidence: 85%)

Top results are Eventbrite, Chattanooga.gov calendar, Chattanooga Times Free Press events, Chattanooga Pulse calendar, Downtown Chattanooga Alliance events, and the convention center calendar. Every result is a filterable, date-driven event listing.

**SERP features observed:** Eventbrite rich results with event schema, multiple structured event listings, related searches ("Chattanooga events today", "free events Chattanooga this weekend").

**Intent signal:** Decision stage. User wants to act this weekend. They need dates, times, and locations — not editorial copy.

**Does thingshappening.com match?** Partially. /chattanooga/ is an event calendar. The page renders events correctly. However, the page has no Event schema in the structured data output (schema blocks returned empty). Competitors using Event schema get rich results. The site does not. The title "Chattanooga Events & Things To Do" is correct for this query.

**Mismatch severity: HIGH** (page type is right; schema and authority are missing)

---

### Query 3: "live music Chattanooga"

**Dominant SERP type:** Hybrid — Guide + Venue List (confidence: 80%)

Top results include NoogaFinder's best venues list, Bandsintown (event calendar), Choose Chattanooga concert venues blog, chattanoogamusicguide.com (venue directory + live calendar), Yelp music venues, WanderLog venue list, and Dropt Beer's scene overview. Results split between venue listicles and live event calendars. The music guide sites (chattanoogamusicguide.com) appear to be dedicated competitors.

**SERP features observed:** Bandsintown rich results with Event schema, Yelp star ratings, related searches ("live music Chattanooga tonight", "Chattanooga music venues", "Chattanooga bars with live music").

**Intent signal:** Consideration stage. User wants to know where to go for live music, not just that it exists.

**Does thingshappening.com match?** Partially. The live music guide at /chattanooga/guides/live-music/ is a strong guide page — 2,334 words, named venues, recurring events, festivals. But it has only BreadcrumbList schema. No MusicVenue, Event, or LocalBusiness schema is present. The title "A Sheet for Chattanooga Live Music" is weak. It does not contain the phrase "live music Chattanooga" or "Chattanooga live music venues." The H1 matches the title verbatim.

**Mismatch severity: HIGH** (content depth is competitive; title, schema, and keyword framing are not)

---

### Query 4: "Chattanooga guides"

**Dominant SERP type:** Local directory / Activity guide hub (confidence: 70%)

Top results include NoogaFinder (directory with guides), chattanooga.gov activity guides, Good Grit local guide, CHA Guide, and mychattanooga.com. Results are a mix of city-run resource pages and independent local directories. No single format dominates cleanly.

**SERP features observed:** Low ad density, no featured snippet, related searches ("Chattanooga visitor guide", "Chattanooga neighborhood guide", "Chattanooga travel guide").

**Intent signal:** Awareness stage. User is doing pre-trip or local discovery research. They want a directory of guides, not a single guide.

**Does thingshappening.com match?** Unknown — the /chattanooga/guides/ page was not audited directly. Based on the homepage's link list, the site has guides but they are not indexed prominently. The site lacks a dedicated "guides hub" page with enough content to compete against city resource pages.

**Mismatch severity: MEDIUM** (no direct page audit; likely gap based on homepage structure)

---

### Query 5: "events near Chattanooga TN"

**Dominant SERP type:** Event Calendar (confidence: 90%)

Top results are Chattanooga.gov calendar, Chattanooga Pulse, Eventbrite, AllEvents, CHA Guide events, Choose Chattanooga events, and Downtown Chattanooga Alliance. Same pattern as Query 2 — date-driven, filterable event listings dominate.

**SERP features observed:** Eventbrite rich results, related searches ("events in Chattanooga this week", "Chattanooga events calendar", "things happening in Chattanooga today").

**Intent signal:** Decision stage, geo-qualified. User may be from a nearby town (Cleveland, Dalton, Signal Mountain) looking for options in the city.

**Does thingshappening.com match?** The site has a /chattanooga/events/nearby/ page targeting this intent. That page was not rendered in this audit but the link is present on the homepage. No Event schema means it cannot compete for rich results.

**Mismatch severity: HIGH** (page exists but schema absence blocks rich result eligibility)

---

## 3. SERP Consensus Summary

| Keyword | Dominant Type | Site Match | Mismatch Severity |
|---|---|---|---|
| things to do in Chattanooga | Listicle / Blog Post | No | CRITICAL |
| Chattanooga events this weekend | Event Calendar | Partial | HIGH |
| live music Chattanooga | Guide + Venue List | Partial | HIGH |
| Chattanooga guides | Local Directory Hub | Unknown | MEDIUM |
| events near Chattanooga TN | Event Calendar | Partial | HIGH |

---

## 4. User Story Derivation

### Story 1 — The Weekend Planner (Awareness)
As a **Chattanooga resident or visitor planning their weekend**, I want a curated list of the best things to do so I can decide what to prioritize, because I only have one day and do not want to waste it, but I am blocked by the site presenting a city-selector screen instead of immediate activity ideas.

*Source: "things to do in Chattanooga" SERP — 100% listicle results; related search "things to do in Chattanooga this weekend."*

### Story 2 — The Concert-Goer (Consideration)
As a **local who wants to see live music tonight**, I want to know which venues have shows and what time they start, so I can make plans before the evening, but I am blocked by the live music guide listing venues without a live event feed or ticketing links above the fold.

*Source: "live music Chattanooga" SERP — Bandsintown and chattanoogamusicguide.com rank with live event calendars; related search "live music Chattanooga tonight."*

### Story 3 — The Out-of-Town Visitor (Decision)
As a **tourist arriving this weekend from Atlanta or Nashville**, I want to see events with dates, times, and locations in one place, so I can build an itinerary without visiting five different sites, but I am blocked by the /chattanooga/ page showing events with minimal context and no ability to filter by date or neighborhood.

*Source: "Chattanooga events this weekend" SERP — Eventbrite rich results with date/time/location structured data; related search "free events Chattanooga this weekend."*

### Story 4 — The Nearby-Town Resident (Decision)
As a **resident of Cleveland or Dalton**, I want events specifically near me or within driving distance of Chattanooga, so I can find something worth the drive, but I am blocked because the /nearby/ page is not discoverable from the homepage without prior knowledge of the URL.

*Source: "events near Chattanooga TN" SERP — AllEvents and CHA Guide rank for this query; the query implies a geo-qualified user who is not in downtown Chattanooga.*

### Story 5 — The Music History Researcher (Awareness)
As a **curious reader who wants to learn about Chattanooga's music culture**, I want a guide that connects history, venues, and recurring events in one document, so I can understand the scene before I visit, but I am blocked by the guide title "A Sheet for Chattanooga Live Music" not signaling that this is a comprehensive resource.

*Source: "live music Chattanooga" SERP — chattanoogamusicguide.com and Good Grit local guide rank with heritage framing; PAA questions about Chattanooga music history present.*

---

## 5. Gap Analysis — SXO Gap Scores

### 5a. thingshappening.com/ (Homepage)

**SXO Gap Score: 28/100**

| Dimension | Score | Evidence |
|---|---|---|
| Page Type (0-15) | 2/15 | City selector matches no dominant SERP type for any target keyword |
| Content Depth (0-15) | 1/15 | 948 chars of extracted text; no activities listed, no events, no guides surfaced |
| UX Signals (0-15) | 6/15 | Clean layout, visible nav, single CTA to /chattanooga/ — but forces an extra click before value |
| Schema (0-15) | 4/15 | WebSite + Organization schema present; no Event, ItemList, or LocalBusiness schema |
| Media (0-15) | 3/15 | Logo only; no photos of Chattanooga, no event imagery, no map |
| Authority (0-15) | 8/15 | Domain is clean; no trust signals, no author, no external citations |
| Freshness (0-10) | 4/10 | "Updated daily" in meta description but the homepage content does not reflect this |

---

### 5b. thingshappening.com/chattanooga/

**SXO Gap Score: 41/100**

| Dimension | Score | Evidence |
|---|---|---|
| Page Type (0-15) | 10/15 | Event calendar is the correct type for "events this weekend" — but H1 says "Explore Chattanooga, TN with our Guides" which misframes the page |
| Content Depth (0-15) | 5/15 | 58-word extracted text; event listings exist in the DOM but trafilatura strips them as boilerplate; no editorial context |
| UX Signals (0-15) | 8/15 | Events render; filter/tag navigation mentioned; but no visible date filter, no "this weekend" shortcut, no neighborhood filter visible in audit |
| Schema (0-15) | 0/15 | Zero schema blocks returned; no Event schema on a page full of events is the single largest ranking blocker |
| Media (0-15) | 5/15 | No hero image; event cards may include images (not fully rendered in audit) |
| Authority (0-15) | 7/15 | "Updated daily" is credible; no external links or press mentions |
| Freshness (0-10) | 6/10 | Events are current (audit shows a Sept 21 2026 event rendered); good signal |

---

### 5c. thingshappening.com/chattanooga/guides/live-music/

**SXO Gap Score: 58/100**

| Dimension | Score | Evidence |
|---|---|---|
| Page Type (0-15) | 12/15 | Guide / Blog Post matches the hybrid intent of "live music Chattanooga" — correct type |
| Content Depth (0-15) | 13/15 | 2,334 words; named venues with descriptions, recurring events, festivals with dates; tables present; strong depth |
| UX Signals (0-15) | 8/15 | Well-structured H2s; tables aid scannability; no table of contents; no jump links; no above-fold CTA to events calendar |
| Schema (0-15) | 2/15 | BreadcrumbList only; no Article, MusicVenue, LocalBusiness, or Event schema; festival dates in content but not marked up |
| Media (0-15) | 4/15 | One venue photo referenced (The Woodshop) but no images confirmed in audit render; no venue map; no embedded Bandsintown widget |
| Authority (0-15) | 8/15 | Named author (implied), Bessie Smith history, venue-specific details; no author bio, no dateModified, no external citations |
| Freshness (0-10) | 11/10 — capped at 10 | Publication date 2026-07-26 detected; IBMA 2026 dates included; 3 Sisters Festival Oct 2026 dates included — excellent freshness signals |

---

## 6. Persona Scoring

### Personas Derived from SERP Signals

**P1: The Weekend Planner** — Local or visitor, plans activities 1-3 days out
- Journey stage: Awareness / Consideration
- Key questions: What are the top things to do? What's free? What's good for families?
- SERP evidence: "things to do in Chattanooga" listicle dominance; PAA about free/family options

**P2: The Concert-Goer** — Wants live music tonight or this week
- Journey stage: Decision
- Key questions: Where is live music tonight? What time does it start? Is there a cover charge?
- SERP evidence: Bandsintown and chattanoogamusicguide.com in "live music Chattanooga" SERP; related search "tonight"

**P3: The Out-of-Town Visitor** — Tourist, pre-trip planning
- Journey stage: Consideration / Decision
- Key questions: What events are this weekend? How do I filter by date? What neighborhoods should I visit?
- SERP evidence: "Chattanooga events this weekend" SERP dominated by Eventbrite with date filtering

**P4: The Nearby-Town Resident** — Lives within 45 min, looking for a reason to make the drive
- Journey stage: Decision
- Key questions: Is there anything worth the drive this weekend? Events in specific areas?
- SERP evidence: "events near Chattanooga TN" query with AllEvents and CHA Guide ranking

**P5: The Music Scene Researcher** — Interested in Chattanooga's music culture, longer research session
- Journey stage: Awareness
- Key questions: What is Chattanooga's music history? Which venues are worth visiting? What festivals happen?
- SERP evidence: Good Grit local guide and chattanoogamusicguide.com rank with heritage framing

---

### Persona Score Table — /chattanooga/ (Events Calendar Page)

| Persona | Relevance | Clarity | Trust | Action | Total | Rating |
|---|---|---|---|---|---|---|
| P1 Weekend Planner | 8/25 | 10/25 | 7/25 | 8/25 | 33/100 | Critical Mismatch |
| P2 Concert-Goer | 12/25 | 8/25 | 6/25 | 10/25 | 36/100 | Critical Mismatch |
| P3 Out-of-Town Visitor | 14/25 | 10/25 | 8/25 | 9/25 | 41/100 | Critical Mismatch |
| P4 Nearby-Town Resident | 6/25 | 5/25 | 6/25 | 7/25 | 24/100 | Critical Mismatch |

**Scoring notes:**
- Relevance is low for P1 and P4 because the page is an event feed, not a curated activity guide or a geo-filtered nearby calendar
- Clarity is low across all personas because the H1 says "Explore Chattanooga with our Guides" on what is functionally an event calendar — the framing does not match the content
- Trust is low because there is no Event schema, no event count displayed, no "last updated" signal, no author
- Action is low because there is no date filter ("this weekend"), no neighborhood filter, no visible link to the nearby-towns calendar

---

### Persona Score Table — /chattanooga/guides/live-music/

| Persona | Relevance | Clarity | Trust | Action | Total | Rating |
|---|---|---|---|---|---|---|
| P2 Concert-Goer | 14/25 | 12/25 | 14/25 | 8/25 | 48/100 | Needs Work |
| P5 Music Scene Researcher | 20/25 | 17/25 | 14/25 | 10/25 | 61/100 | Good |

**Scoring notes:**
- P5 scores well because the content depth (history, venues, festivals, recurring events) directly matches the research intent
- P2 scores lower because the Concert-Goer needs dates, times, and links — the guide provides venue names and recurring series but not a live event feed or calendar integration
- Trust is 14 for both: named venues and specific details build credibility, but no author bio, no dateModified in a visible location, and no external citations weaken it
- Action is 8-10 for both: the guide links to venue websites but does not direct the user to the site's own events calendar — there is no "See live music events this week" CTA

---

### Weakest Persona: P4 Nearby-Town Resident (24/100)

**Top issue:** The /nearby/ page exists but is buried. It is not linked from the /chattanooga/ calendar page. It is only referenced in the homepage's feature list. A user searching "events near Chattanooga TN" who lands on /chattanooga/ has no path to the nearby calendar without reading the homepage first.

**Recommended fix:** Add a persistent "Nearby Towns" tab or filter to the /chattanooga/ event calendar. Link it from the page header, not just the homepage. Title the linked page to target "events near Chattanooga TN."

---

### Systemic Issues Across All Personas

1. **Action dimension is universally low (7-10/25).** No page drives the user to a next step that matches their journey stage. The live music guide does not link to the events calendar. The events calendar does not link to the guides. The homepage links to /chattanooga/ and nothing else.

2. **Trust dimension is consistently weak (6-14/25).** No page displays Event schema, author credentials, dateModified, review counts, or testimonials. For local event discovery, users rely on trust signals to know the information is current and accurate.

3. **Clarity is impaired by H1/page-type mismatches.** The /chattanooga/ H1 ("Explore Chattanooga, TN with our Guides") describes a guides hub, not an events calendar. Users scanning for "events this weekend" will not recognize the page as the answer they need.

---

## 7. Priority Actions

Ordered by severity and expected search volume impact.

### Action 1 — CRITICAL: Add a "Best Things To Do in Chattanooga" listicle page
**Target keyword:** "things to do in Chattanooga"
**Why:** This keyword has the highest volume and broadest appeal. The SERP is 100% listicle. The site has no page targeting it. This is the largest unserved opportunity.
**Page spec:** 1,500+ words, 15-25 named activities with descriptions, H2 categories (outdoor, music, food, family), photos, internal links to relevant guides. Use Article schema with dateModified.

### Action 2 — CRITICAL: Add Event schema to /chattanooga/ calendar
**Target keyword:** "Chattanooga events this weekend"
**Why:** Every competitor with rich results uses Event schema. The site has zero event schema despite being an events calendar. This is the single largest ranking blocker for transactional event queries.
**Schema spec:** Add Event (name, startDate, endDate, location with Place, url) for each event card. Use ItemList to wrap the collection.

### Action 3 — HIGH: Rewrite title and H1 for /chattanooga/
**Current title:** "Chattanooga Events & Things To Do | Things Happening"
**Current H1:** "An easier way to find things happening in Chattanooga" / "Explore Chattanooga, TN with our Guides"
**Problem:** H1 describes the product (a guide tool), not the content (events). This misframes the page for users and crawlers.
**Recommended H1:** "Chattanooga Events — What's Happening This Week"
**Recommended title:** "Chattanooga Events This Week & Weekend | Things Happening"

### Action 4 — HIGH: Add "this weekend" and neighborhood filters to /chattanooga/
**Target keyword:** "Chattanooga events this weekend"
**Why:** Eventbrite ranks because it lets users filter by date. The site cannot compete on this query without a visible date shortcut. A simple "This Weekend" quick-filter tab above the event list would directly address P3's primary need.

### Action 5 — HIGH: Fix live music guide title and add Article + LocalBusiness schema
**Current title:** "A Sheet for Chattanooga Live Music"
**Problem:** Title does not contain target keyword. "A Sheet" signals worksheet/template, not a venue guide.
**Recommended title:** "Chattanooga Live Music: Best Venues, Bars, and Festivals (2026)"
**Schema to add:** Article (headline, author, datePublished, dateModified), LocalBusiness or MusicVenue for each named venue.

### Action 6 — HIGH: Add a "See events this week" CTA to the live music guide
**Why:** P2 (Concert-Goer) lands on the guide but has no path to actual event listings. The guide builds intent but does not convert it. A sticky or in-content CTA — "Catch live music this week — see the events calendar" — would connect the guide to the calendar.

### Action 7 — MEDIUM: Surface the /nearby/ calendar in the /chattanooga/ page
**Target keyword:** "events near Chattanooga TN"
**Why:** P4 (Nearby-Town Resident) scores 24/100 — the lowest of all personas. The page exists but is invisible to users who do not read the homepage. Add a tab or section to /chattanooga/ that links to /chattanooga/events/nearby/ with the label "Nearby Towns."

---

## 8. Cross-Skill Recommendations

- **Event schema is absent sitewide.** Use `/seo schema` to generate Event and ItemList schema for the events calendar.
- **The live music guide has thin authority signals.** Use `/seo content` to add author bio, dateModified, and external citation recommendations.
- **Local intent is strong across all five SERP queries.** Use `/seo local` to evaluate Google Business Profile presence and NAP consistency.
- **The "things to do in Chattanooga" listicle page does not exist.** Use `/seo page` for a full page-level audit once the page is created.

---

## 9. Limitations

- The /chattanooga/guides/ hub page was not directly rendered or audited. Findings for the "Chattanooga guides" keyword are inferred.
- The /chattanooga/events/nearby/ page was not rendered. Findings for P4 are based on link presence and URL structure only.
- SERP features (PAA text, related search phrases, AI Overview content) were inferred from search result summaries, not live SERP screenshots. PAA question text is estimated, not verbatim.
- Event card rendering on /chattanooga/ was truncated in the audit. Actual visible event count and filter state on load could not be verified.
- Competitor authority metrics (Domain Rating, backlink counts) were not assessed. Competitive difficulty estimates are based on SERP composition only.
- Mobile rendering was not tested. UX scores reflect desktop analysis.

---

*Generate a PDF report? Use `/seo google report`.*
