# Local SEO Audit — thingshappening.com
Audited: 2026-09-20

---

## Site Classification

**Business type:** Not a traditional local business. This is a media/directory site.
It has no physical address and serves no customers at a location.
It targets local search intent exclusively (Chattanooga, TN).
The correct framing is a **local media publisher**, not a LocalBusiness.

**Industry vertical:** Local events and guides directory.
Closest schema type: `NewsMediaOrganization` or `WebSite` + `Organization`.
Not `LocalBusiness` — there is no physical location and no service delivery.

---

## Local SEO Score

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| GBP Signals | 25% | 5/100 | 1.25 |
| Reviews & Reputation | 20% | 0/100 | 0 |
| Local On-Page SEO | 20% | 52/100 | 10.4 |
| NAP Consistency & Citations | 15% | 18/100 | 2.7 |
| Local Schema Markup | 10% | 28/100 | 2.8 |
| Local Link & Authority Signals | 10% | 20/100 | 2.0 |

**Overall Local SEO Score: 19 / 100**

Note: This score reflects the site's readiness to rank for "things to do in Chattanooga" local organic and AI Overview queries — not a traditional local pack audit. A media/directory site does not qualify for the local 3-pack. Scoring reflects local organic relevance signals only.

---

## NAP Consistency Audit

This site is a publisher, not a business with a storefront. There is no street address.
The relevant "NAP" equivalent is: name, city/state, and contact email.

| Source | Name | City/State | Contact |
|---|---|---|---|
| Homepage title tag | Things Happening | not stated | not stated |
| Homepage JSON-LD (Organization) | Things Happening | not stated | jack@thingshappening.com |
| Homepage meta description | Things Happening | Chattanooga, TN | not stated |
| About page meta description | Things Happening | Chattanooga, TN | jack@thingshappening.com |
| About page body | Things Happening | Chattanooga, TN | jack@thingshappening.com |
| Footer (all pages) | thingshappening (no "Things") | not stated | not stated |

**Discrepancy [MEDIUM]:** The footer displays `thingshappening` (lowercase, no space) rather than `Things Happening`. This creates a minor entity name inconsistency across pages.

**Discrepancy [LOW]:** The homepage title tag says "Things Happening — Local Events & Guides for Your City" with no city name. The Chattanooga city page correctly includes "Chattanooga, TN" in the title. This is by design for a multi-city expansion model, but it dilutes city-level entity signals on the root domain.

**Discrepancy [MEDIUM]:** The Organization schema on the homepage has no `areaServed`, `addressLocality`, or city-level signal. Google cannot confirm geographic focus from schema alone.

---

## GBP Signals

| Signal | Status |
|---|---|
| Google Maps embed on any page | Not found |
| GBP place reference or Place ID | Not found |
| Review widget (Google, Yelp) | Not found |
| GBP posts indicator | Not found |
| Directions link | Not found |
| Business hours (site-wide) | Not found |

**[CRITICAL]** No Google Business Profile signals detected anywhere on the site.

A local media/directory publisher can and should claim a GBP listing under the category "Local News & Information" or "Internet Company." Without a GBP listing, the site has no presence in Knowledge Panels, has no review surface, and sends no geographic trust signals to Google.

The Facebook page link in the nav (`ThingsHappening-Chattanooga`) is the only social proof of geographic presence. This is insufficient for local entity trust.

---

## Review Health

| Metric | Status |
|---|---|
| aggregateRating in schema | Not present |
| Visible star rating | Not present |
| Review count | Not present |
| Review widget (third-party) | Not present |
| GBP review surface | No GBP exists |

**[HIGH]** No review signals on any page. The site has no mechanism for visitors to rate or review it. For a directory site, this matters less for the 3-pack but does matter for AI Overview trust signals. Sites cited in AI Overviews for "things to do" queries tend to have established authority markers — third-party mentions, review aggregates, or editorial citations.

---

## Local On-Page SEO

### Homepage (/)

- Title: "Things Happening — Local Events & Guides for Your City" — no city name [MEDIUM]
- Meta description: "Find things to do in Chattanooga, TN — events, live music, outdoor adventures, guides, and more. Updated daily." — good city signal [PASS]
- H1: "An easier way to find things happening in your city." — generic, no city name [MEDIUM]
- Neighborhood signals in body copy: Downtown, North Shore, Southside, Lookout Mountain — [PASS]
- Maps embed: None [HIGH]
- Internal links: Links to /chattanooga/, /chattanooga/guides/, /chattanooga/events/nearby/, /chattanooga/events/tags/ [PASS]

### Chattanooga City Page (/chattanooga/)

- Title: "Chattanooga Events & Things To Do | Things Happening" — [PASS]
- Meta description: "Find things to do in Chattanooga, TN. Browse upcoming events, live music, outdoor adventures, local guides, and more — updated daily." [PASS]
- H1: "Explore Chattanooga, TN with our Guides." — [PASS]
- JSON-LD: Zero schema blocks detected on this page [CRITICAL]
- Neighborhood signals: The page renders dynamically with event cards but no static neighborhood-level headings
- No City schema (schema.org/City) linking Chattanooga as the subject [HIGH]

### Venues Index (/chattanooga/venues/)

- Title: "Event Venues in Chattanooga, TN" [PASS]
- Meta description: "Browse event venues in Chattanooga and the surrounding region..." [PASS]
- H1: "Event Venues" — short, passable [PASS]
- Venue count: 24 Chattanooga venues + 17 nearby town venues = 41 total [PASS]
- Address data visible for most venues [PASS]
- JSON-LD: Zero schema blocks on the index page [HIGH]
- No venue ItemList schema or BreadcrumbList [MEDIUM]
- Canonical tag issue: raw HTML has two canonical tags — one with trailing slash (`/venues/`) and one without (`/venues`). This is a technical bug. [HIGH]

### Venue Detail Page (/chattanooga/venues/woodshop)

- Title: "The Woodshop Listening Room — Upcoming Events" [PASS]
- Meta description: "Upcoming events at The Woodshop Listening Room in Chattanooga, TN." [PASS]
- JSON-LD type: `MusicVenue` — correct [PASS]
- address.streetAddress present: yes [PASS]
- address.addressLocality: MISSING — only streetAddress is populated, no city/state split [MEDIUM]
- address.addressRegion: MISSING [MEDIUM]
- address.postalCode: MISSING [MEDIUM]
- geo (latitude/longitude): MISSING [HIGH]
- telephone: MISSING [MEDIUM]
- openingHoursSpecification: MISSING [MEDIUM]
- aggregateRating: MISSING [LOW]
- No Event schema on venue pages despite listing multiple upcoming events [CRITICAL]

### Guides Index (/chattanooga/guides/)

- Title: "Chattanooga Guides" — short [LOW]
- Meta description: "In-depth guides to exploring Chattanooga – from outdoor adventures to hidden gems." [PASS]
- H1: "Longform and Interactive Guides to Chattanooga." [PASS]
- Guide count: At least 8 guides visible (breweries, outdoors, sports, Cloudland Canyon, performing arts, etc.) [PASS]
- JSON-LD: Zero schema blocks [HIGH]
- No Article or ItemList schema on guide index [MEDIUM]

### About Page (/about)

- Title: "About Things Happening" — no city [LOW]
- Author name visible: "Jack Byrum" [PASS]
- Contact email visible: jack@thingshappening.com [PASS]
- No Person schema for author [LOW]
- No Organization schema with city signal [HIGH]

---

## Local Schema Validation

### Homepage

```json
{
  "@type": ["WebSite", "Organization"],
  "name": "Things Happening",
  "description": "Local events and guides for Chattanooga, TN.",
  "logo": present,
  "contactPoint": { "email": "jack@thingshappening.com" }
}
```

**Missing from Organization:** `areaServed`, `foundingLocation`, `address`, `sameAs` (Wikipedia/Wikidata for Chattanooga)
**Missing from WebSite:** `potentialAction` (SearchAction for sitelinks search box)

### Chattanooga City Page

**[CRITICAL]** No JSON-LD schema block found. This is the primary landing page for the site's target queries. It has zero structured data.

Recommended additions:
- `City` schema with `sameAs` to Wikidata (wd:Q79578)
- `CollectionPage` or `WebPage` with `about` pointing to Chattanooga City entity
- `Event` schema for each listed event (name, startDate, endDate, location with `Place` or `PostalAddress`, eventStatus, url)

### Venue Index Page

Zero schema. Recommended: `ItemList` with `ListItem` entries for each venue linking to individual venue pages.

### Venue Detail Pages

`MusicVenue` type is correct. But the address object is malformed:

```json
// CURRENT — incomplete
"address": {
  "@type": "PostalAddress",
  "streetAddress": "5500 Saint Elmo Avenue, Chattanooga, TN 37409",
  "addressCountry": "US"
}

// REQUIRED — complete
"address": {
  "@type": "PostalAddress",
  "streetAddress": "5500 Saint Elmo Avenue",
  "addressLocality": "Chattanooga",
  "addressRegion": "TN",
  "postalCode": "37409",
  "addressCountry": "US"
}
```

All venue pages are missing `geo` (latitude/longitude at 5+ decimal precision). This is a high-impact gap for entity disambiguation and maps integration.

**[CRITICAL]** No `Event` schema on any event listing. The site lists hundreds of upcoming events. Each event should have `Event` schema with at minimum: `name`, `startDate`, `location` (Place with address), `url`, `eventStatus`. This is the single largest schema gap.

---

## Citation Presence (Tier 1 Directories)

| Directory | Status | Notes |
|---|---|---|
| Yelp | Not verified | Yelp 403'd the check. Media/directory sites rarely have Yelp listings. |
| BBB | Unlikely | BBB is for service businesses, not media publishers. |
| Google Business Profile | Not found | No GBP detected. Critical gap. |
| Facebook | Present | ThingsHappening-Chattanooga page linked from nav. |
| AllEvents.in | Unknown | Major event aggregator — worth claiming. |
| Eventbrite organizer | Unknown | Could create an organizer page to drive traffic. |
| Wikipedia / Wikidata | Not present | No `sameAs` to Chattanooga Wikidata entity. |

**Note for a media/directory site:** Traditional citation sources (Yelp, BBB, Angi) are irrelevant. Relevant citation channels are:
1. Local news mentions (Chattanooga Times Free Press, local blogs)
2. Event aggregator profiles (AllEvents.in, Bandsintown, etc.)
3. Tourism board mentions (Hamilton County Tourism, etc.)
4. Wikipedia/Wikidata `sameAs` links in schema
5. Local Facebook groups sharing site links

---

## Location Page Quality

The site has a well-structured venue directory at `/chattanooga/venues/`. Assessment:

| Check | Status |
|---|---|
| Unique content per venue page | Yes — each has a description + live event list |
| Doorway page test | Pass — pages have genuine utility and unique content |
| Venue address on page | Yes — rendered in text and (partially) in schema |
| Internal linking from city page to venues | Present — venue cards link to detail pages |
| Internal linking from venues to city page | Indirect — nav links back to root |
| BreadcrumbList schema | Missing |
| ItemList schema on index | Missing |

**[MEDIUM]** Some venue address entries are incomplete or informal:
- "Sequatchie Cove Farm" listed as "Dunlap, TN (approx. 45 minutes from Chattanooga)" — not a proper address
- "Lula Lake Land Trust" listed as "Lookout Mountain, GA" — no street address
- "Rossville, GA" and "Ringgold, GA 30736" — city/state only for some nearby venues

These incomplete addresses prevent schema from being validated by Google's Rich Results Test.

**[MEDIUM]** No neighborhood-level pages exist. The homepage copy mentions Downtown, North Shore, Southside, and Lookout Mountain. Pages at `/chattanooga/neighborhoods/downtown/` (or equivalent) would capture high-intent navigational queries like "things to do in North Shore Chattanooga."

---

## AI Overview / "Things to Do" Query Readiness

For the query "things to do in Chattanooga," AI Overviews pull from pages that:
1. Are established editorial resources with named authorship
2. Have structured data (Event schema, Article schema)
3. Are cited from other local sources
4. Cover specific activities with concrete details

| Factor | Status |
|---|---|
| Named author with bio | Jack Byrum mentioned on About page — [PASS] |
| Author Person schema | Missing [MEDIUM] |
| Event schema on event pages | Missing [CRITICAL] |
| Guide content depth | 8+ longform guides — [PASS] |
| Article/NewsArticle schema on guides | Not verified — likely missing |
| Outbound links to authoritative sources | Present on venue pages (venue URLs in schema) |
| Inbound links from local sources | Unknown — requires backlink tool |
| "Updated daily" freshness signal | Mentioned in meta descriptions — [PASS] |
| sameAs to Chattanooga Wikidata entity | Missing [HIGH] |

The site has good content foundations for AI Overview inclusion. The primary blocker is the absence of Event schema — AI systems use structured event data to surface "what's happening" queries. Without it, Google cannot confidently parse and cite individual events from the site.

---

## Top 10 Prioritized Actions

### Critical

**1. Add Event schema to all event listings.**
Every event page and every event card on the city page should emit `Event` JSON-LD with: `name`, `startDate`, `endDate` (or `duration`), `location` (Place with full PostalAddress), `url`, `eventStatus` (`EventScheduled`), `organizer` (optional). This is the highest-impact single change for AI Overview and local organic visibility.

**2. Claim a Google Business Profile.**
Category: "Local News & Information" or closest available. Add the site name, URL, city, and a description. This creates a Knowledge Panel anchor, a review surface, and a geographic entity signal. Without a GBP, the site is invisible in Google's local entity graph.

**3. Add JSON-LD to the Chattanooga city page.**
At minimum: a `WebPage` with `about` pointing to a Chattanooga `City` entity using `sameAs: "https://www.wikidata.org/wiki/Q79578"`. This connects the page to the Chattanooga geographic entity in Google's Knowledge Graph.

### High

**4. Fix venue schema address structure.**
Split the combined `streetAddress` string into proper PostalAddress fields: `streetAddress`, `addressLocality`, `addressRegion`, `postalCode`. Add `geo` with latitude and longitude at 5+ decimal precision for each venue. Target the top 10 venues by event volume first (Woodshop, Chattanooga Brewing, Oddstory, etc.).

**5. Add `geo` coordinates to all venue pages.**
Zero venue pages currently have geo coordinates. This prevents map-based entity resolution. Use 5+ decimal place precision per schema.org requirements.

**6. Fix the duplicate canonical tag on /chattanooga/venues/.**
The page emits two canonical tags — one with a trailing slash and one without. This is a technical crawl error. Keep only the trailing-slash version to match the declared canonical across the rest of the site.

**7. Add `sameAs` to the Organization schema linking to a Wikidata or Wikipedia entity for Chattanooga, TN.**
This directly supports AI visibility (3 of top 5 AI visibility factors are citation-related per Whitespark 2026). Add: `"areaServed": { "@type": "City", "name": "Chattanooga", "sameAs": "https://www.wikidata.org/wiki/Q79578" }`.

### Medium

**8. Add `ItemList` schema to the venues index page.**
Wrap each venue card in a `ListItem` with `position` and `url`. This makes the index page eligible for rich result treatment and signals a structured directory to crawlers.

**9. Add neighborhood-level pages.**
Create pages at `/chattanooga/neighborhoods/` for Downtown, North Shore, Southside, and Lookout Mountain. Each page should list events and venues in that area. These capture navigational queries with high local intent and strengthen geographic topical authority.

**10. Update the homepage H1 and title tag to include "Chattanooga."**
The homepage H1 says "your city" with no geographic anchor. For a single-city site currently focused on Chattanooga, the H1 and title tag should include the city name. The multi-city expansion framing is fine for the site's long-term vision, but it costs local relevance signals today.

### Low

- Add `Person` schema for Jack Byrum on the About page (schema: `Person` with `jobTitle`, `worksFor`, `url`).
- Add `BreadcrumbList` to venue detail pages.
- Complete missing venue addresses for Sequatchie Cove Farm, Lula Lake Land Trust, and similar venues without street-level data.
- Add a `potentialAction` (SearchAction) to the WebSite schema to enable Google Sitelinks Search Box.

---

## Limitations Disclaimer

The following could not be assessed without paid tools:

- **Live local pack rankings** for "things to do in Chattanooga" and related queries (requires DataForSEO or similar)
- **Backlink profile** and local citation velocity (requires Ahrefs, Moz, or Semrush)
- **GBP listing data** — whether a GBP exists in Google's index that is not surfaced on the site itself
- **Yelp listing status** — Yelp returned a 403; a manual check at yelp.com/biz is needed
- **AI Overview inclusion** — whether the site currently appears in any Chattanooga-related AI Overviews (requires manual SERP inspection for multiple queries)
- **Index coverage** — how many pages are indexed by Google (requires Google Search Console)
- **Review velocity** — no review surface exists, so velocity cannot be assessed
- **Proximity factor** — accounts for 55.2% of local pack ranking variance (Search Atlas ML study). Not applicable here as this is not a brick-and-mortar business.
