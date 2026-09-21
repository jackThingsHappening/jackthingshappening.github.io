# SEO Audit — thingshappening.com
**Date:** 2026-09-20
**Pages built:** 623 (restored from 211 after bad prune commit)
**Auditors:** 9 parallel subagents (technical, content, schema, sitemap, performance, GEO, local, backlinks, SXO)

---

## SEO Health Score: 38 / 100

| Category | Score | Weight | Weighted |
|----------|-------|--------|---------|
| Technical SEO | 52 | 22% | 11.4 |
| Content Quality | 47 | 23% | 10.8 |
| On-Page SEO | 38 | 20% | 7.6 |
| Schema / Structured Data | 42 | 10% | 4.2 |
| Performance (CWV) | 55 | 10% | 5.5 |
| AI Search Readiness | 44 | 10% | 4.4 |
| Images | 30 | 5% | 1.5 |
| **Total** | | | **45.4** |

**vs. last audit (2026-08-22): +7 points.** Event schema added, noindex fixed on place/city tag pages, 346 events restored. But structural gaps remain.

---

## What Improved Since Last Audit

- Event schema (JSON-LD) now present on all event pages — was the #1 critical gap
- noindex removed from place/city tag pages — venue pages now indexable
- 346 events restored from bad prune commit — site back to 623 pages
- prune-events skill fixed — will no longer delete future/recent events
- Calendar integration added to event pages (Google, Apple, Outlook)

---

## Critical Issues (fix immediately)

### C1 — Homepage is a city-selector, not a content page
**SXO finding.** Every SERP for "things to do in Chattanooga" returns listicles and content. The homepage delivers a city-selector screen with 948 characters of text. Google rewards immediate content delivery. This is a structural mismatch that no amount of optimization will fix without a content page.

**Fix:** Create a "Best Things To Do in Chattanooga" page — 1,500+ words, 15-25 named activities, H2 categories (outdoor, music, food, family), internal links to guides. Target keyword: "things to do in Chattanooga."

### C2 — /chattanooga/ emits zero structured data
**Local finding.** The primary events landing page — the one targeting "Chattanooga events this weekend" — has no JSON-LD at all. Every competitor with rich results uses Event schema.

**Fix:** Add `WebPage` + `ItemList` wrapping event cards on /chattanooga/. Wire Event schema per card.

### C3 — endDate missing time component on Event schema
**Schema finding.** `startDate` is `"2026-10-18T14:30:00"` but `endDate` is `"2026-10-18"`. Google requires both in the same format. This will fail the Rich Results Test and suppress Event rich results.

**Fix:** In BlogPostLayout.astro, ensure `buildEndDate()` returns a full ISO 8601 datetime string, not date-only.

### C4 — Editorials index renders empty
**Content finding.** `/chattanooga/editorials/` is in the nav, has a meta description ("Field notes and first-hand observations"), and has a page shell — but the `articles-section` grid is empty. A navigable page delivering no content is a quality signal problem and a waste of crawl budget.

**Fix:** Either publish at least 3 editorials, or remove the page from nav and sitemap until content exists.

### C5 — No Google Business Profile
**Local finding.** The site has no GBP entity. A media publisher can claim under "Local News & Information." Without it, there is no geographic entity anchor in Google's Knowledge Graph.

**Fix:** Claim GBP at business.google.com, category "Local News & Information," city Chattanooga TN.

### C6 — Prism.js scripts loading without async/defer
**Performance finding.** Four Prism.js scripts are referenced in the live music guide without `async` or `defer`. These are render-blocking and load code for a syntax highlighter that likely serves no purpose on an events/guides site.

**Fix:** Remove the Prism.js script tags entirely (they are commented out in BlogPost.astro but may still appear on some pages). Verify in built HTML.

---

## High Severity Issues (fix within 2 weeks)

### H1 — No author bylines on guide pages
`author` frontmatter field is absent in all 13 guide MDX files. A quality rater cannot identify the author without going to /about. Person schema is also absent.

**Fix:** Add `author: "Jack Byrum"` to all guide MDX files. Render visibly with link to /about. Add Person schema to /about page.

### H2 — Venue PostalAddress schema is malformed
The full address string is stuffed into `streetAddress` with no `addressLocality`, `addressRegion`, or `postalCode`. Google cannot validate these addresses for rich results.

**Fix:** In BlogPostLayout.astro `parsePostalAddress()` — it already parses address components correctly but something is breaking the output. Verify the schema output on a venue page and fix the serialization.

### H3 — /chattanooga/ H1 says "Explore with our Guides"
The H1 on the events calendar page describes a guides product, not an event calendar. This mismatches search intent and confuses Google's page-type classification.

**Fix:** Change H1 to "Chattanooga Events — What's Happening This Week." Change title tag to "Chattanooga Events This Week and Weekend | Things Happening."

### H4 — Tag pages have no schema
Indexable place/city tag pages list multiple events but carry zero structured data. They need BreadcrumbList at minimum; ItemList unlocks Event carousel eligibility.

**Fix:** Add BreadcrumbList + ItemList to `src/pages/chattanooga/events/tag/[tag].astro`.

### H5 — Duplicate canonical on /chattanooga/venues/
The venues index page emits two conflicting canonical tags (`/venues/` and `/venues`). This is a crawl-level bug.

**Fix:** Find and remove the duplicate canonical. One canonical tag per page.

### H6 — Guide sections wrong size for AI citation
**GEO finding.** Guide sections are either too long (600+ words, no clean extraction point) or too short (50-87 words per venue, insufficient context). The 134-167 word per section ideal is not met anywhere. Zero headings use question format — AI retrieval scores question-phrased H2s higher.

**Fix:** Restructure guide venue entries to ~150 words each with a direct declarative opener. Convert section labels to question-based H2s ("Where is the best live music in Chattanooga?").

### H7 — /nearby/ calendar not linked from /chattanooga/
The nearby towns calendar exists but is only accessible from the homepage feature list. Users landing on /chattanooga/ have no visible path to it. Scores 24/100 for nearby-town resident persona.

**Fix:** Add a "Nearby Towns" tab or section link on /chattanooga/.

### H8 — Live music guide title misses target keyword
Title: "A Sheet for Chattanooga Live Music." This does not contain "Chattanooga live music venues" or "live music Chattanooga" and is unusual phrasing in SERP previews.

**Fix:** Title tag: "Chattanooga Live Music Guide: Best Venues, Bars & Festivals (2026)." Keep the creative title as the visible H1 if desired.

### H9 — Organization schema missing sameAs
Facebook page URL not referenced in Organization block. This helps Google confirm entity match.

**Fix:** Add `"sameAs": ["https://www.facebook.com/..."]` to Organization JSON-LD.

### H10 — No "This Weekend" filter on /chattanooga/
Eventbrite ranks for "Chattanooga events this weekend" specifically because users can filter by date immediately. No visible date filter exists on /chattanooga/.

**Fix:** Add a "This Weekend" tab/button above the event list that filters to the current weekend's events.

---

## Medium Issues (fix within 30 days)

- **M1** — No Article schema on guide pages (add headline, author, datePublished, dateModified)
- **M2** — WebSite schema missing SearchAction — `/search` page exists but not wired in (Sitelinks Searchbox)
- **M3** — No `sameAs` to Chattanooga Wikidata entity on Organization/WebPage schema
- **M4** — Event pages average 48 words body copy — floor should be 120 words
- **M5** — llms.txt missing individual guide URLs and machine-readable license
- **M6** — No geo coordinates (lat/lng) on venue pages
- **M7** — Event images all point to generic social.png — event-specific images improve CTR in rich results
- **M8** — Guides index title "Chattanooga Guides" has no brand suffix — too short
- **M9** — Footer shows "thingshappening" (lowercase, no space) — NAP inconsistency vs "Things Happening"
- **M10** — Offer.availability missing on Event schema (add `"availability": "https://schema.org/InStock"`)
- **M11** — No "See live music events this week" CTA on live music guide — breaks user journey from research to calendar

---

## Low Issues

- **L1** — 404 page has empty `<meta name="description">`
- **L2** — Songbirds venue index `/chattanooga/events/songbirds/` returns 404 — remove from sitemap or redirect
- **L3** — About page has zero structured data despite naming publisher and operator
- **L4** — 4 Google Font families loaded — consider subsetting or reducing to 2

---

## What's Working

- Event schema present on all individual event pages
- SSR/static delivery — AI crawlers get full HTML, no JS rendering required
- HTTPS enforced, Strict-Transport-Security header present
- Sitemap index exists and is valid
- AI crawlers allowed (robots.txt wildcard Allow)
- llms.txt present
- Venue pages exist (41 venues) with MusicVenue/LocalBusiness schema subtypes
- Guide content quality is strong — 13 guides, 981-3,973 words each, unique prose
- Event copy is specific and non-generic despite being AI-assisted
- Privacy policy, terms, contact, and about pages exist
- BreadcrumbList on all event and guide pages
- Calendar integration (Google/Apple/Outlook) on all event pages

---

## Priority Action Plan

### Week 1 — Critical fixes
1. Fix endDate time component in Event schema (BlogPostLayout.astro)
2. Add JSON-LD to /chattanooga/ (WebPage + ItemList)
3. Fix duplicate canonical on /chattanooga/venues/
4. Remove Prism.js scripts or add async/defer
5. Fix or remove editorials index page
6. Fix /chattanooga/ H1 and title tag

### Weeks 2-3 — High impact
7. Add author bylines to all 13 guide MDX files + Person schema on /about
8. Fix venue PostalAddress serialization
9. Add BreadcrumbList + ItemList to tag pages
10. Add sameAs (Facebook, Wikidata) to Organization schema
11. Link /nearby/ from /chattanooga/ events page
12. Rename live music guide title tag

### Month 2 — Content & authority
13. Create "Best Things To Do in Chattanooga" listicle page (1,500+ words)
14. Add Article schema to all guide pages
15. Restructure guide sections to ~150 words with question-based H2s
16. Claim Google Business Profile
17. Increase event page body copy floor to 120 words
18. Expand llms.txt with individual guide URLs

### Ongoing
- Event refresh automation (already running)
- Guide refresh automation (already running)
- Backlink outreach (see outreach templates from prior session)
- Re-run this audit after Week 1 fixes to confirm rich result eligibility

---

## Comparison vs Last Audit (2026-08-22)

| Finding | Last Audit | This Audit | Status |
|---------|-----------|-----------|--------|
| Event schema | CRITICAL (absent) | HIGH (present, endDate format issue) | Improved |
| noindex on place/city tags | CRITICAL | RESOLVED | Fixed |
| Page count | 211 | 623 | Fixed |
| prune-events destroying future events | Unknown | RESOLVED | Fixed |
| Internal linking | HIGH | HIGH | No change |
| Venue pages | HIGH | Present (41 venues) | Improved |
| Author bylines | HIGH | HIGH | No change |
| endDate format | New | CRITICAL | New finding |
| Empty editorials | New | CRITICAL | New finding |
| /chattanooga/ zero schema | New | CRITICAL | New finding |
| Duplicate canonical venues/ | New | HIGH | New finding |

