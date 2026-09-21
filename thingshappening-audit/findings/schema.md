# Schema / Structured Data Audit — thingshappening.com
Audited: 2026-09-20

---

## Pages Sampled

| URL | HTTP | Schema Blocks Found |
|-----|------|---------------------|
| https://thingshappening.com/ | 200 | WebSite, Organization |
| https://thingshappening.com/chattanooga/events/barking-legs/beneath-these-stones-voices-from-pleasant-garden-cemetery/ | 200 | Event, BreadcrumbList |
| https://thingshappening.com/chattanooga/events/songbirds/ | 404 | none (dead URL) |
| https://thingshappening.com/chattanooga/guides/live-music/ | 200 | BreadcrumbList |
| https://thingshappening.com/chattanooga/events/tag/songbirds/ | 200 | none |

---

## Detection Results

### Homepage — https://thingshappening.com/

One JSON-LD block using `@graph`. Contains:
- `WebSite` with `@id`, `url`, `name`, `description`
- `Organization` with `@id`, `name`, `url`, `logo` (ImageObject), `contactPoint` (ContactPoint)

### Individual Event Page — /barking-legs/beneath-these-stones.../

Two JSON-LD blocks:
- Block 1: `Event` with `name`, `description`, `startDate`, `endDate`, `eventStatus`, `eventAttendanceMode`, `image`, `organizer`, `location` (Place + PostalAddress), `url`, `offers` (Offer)
- Block 2: `BreadcrumbList` with 4 ListItems

### Guide Page — /chattanooga/guides/live-music/

One JSON-LD block:
- `BreadcrumbList` with 4 ListItems

### Tag/Filter Page — /chattanooga/events/tag/songbirds/

No JSON-LD present.

### Venue Listing Page — /chattanooga/events/songbirds/

404. No schema auditable.

---

## Validation Results

### Homepage

| Check | Result |
|-------|--------|
| @context is https://schema.org | PASS |
| @type valid | PASS |
| WebSite: url, name present | PASS |
| Organization: name, url, logo present | PASS |
| No placeholder text | PASS |
| URLs are absolute | PASS |
| sameAs missing on Organization | WARN |
| WebSite missing potentialAction (SearchAction) | WARN |

### Individual Event Page

| Check | Result |
|-------|--------|
| @context is https://schema.org | PASS |
| @type is Event | PASS |
| name present | PASS |
| description present | PASS |
| startDate in ISO 8601 with time | PASS — `2026-10-18T14:30:00` |
| endDate — date only, no time | FAIL — `2026-10-18` (missing time component) |
| startDate and endDate mismatch format | FAIL — startDate has time, endDate does not |
| eventStatus present | PASS |
| eventAttendanceMode present | PASS |
| location with Place + PostalAddress | PASS |
| image is absolute URL | PASS — uses generic social.png, not event-specific |
| offers.price is string "0" | PASS (Google accepts string or number) |
| offers.availability missing | WARN |
| performer missing | WARN |
| BreadcrumbList: all items have name + item | PASS |
| BreadcrumbList: positions sequential | PASS |

### Guide Page — /chattanooga/guides/live-music/

| Check | Result |
|-------|--------|
| BreadcrumbList valid | PASS |
| No page-level WebPage schema | FAIL — missing opportunity |
| No Article / CollectionPage schema | FAIL — missing opportunity |
| lastUpdated not exposed in schema | WARN |

### Tag Page — /chattanooga/events/tag/songbirds/

| Check | Result |
|-------|--------|
| No JSON-LD at all | FAIL — missing BreadcrumbList |
| ItemList for event listings | FAIL — missing opportunity |

---

## Issues by Severity

### CRITICAL

None. The prior gap (no Event schema on event pages) has been resolved.

### HIGH

**H1 — Event endDate missing time component**
`endDate` is `"2026-10-18"` while `startDate` is `"2026-10-18T14:30:00"`. Google requires both to use the same format. When `startDate` includes a time, `endDate` must also include a time. This will fail Google's Rich Results Test. Fix: use `"2026-10-18T16:30:00"` (or whatever the known end time is). If the end time is unknown, use `"2026-10-18T23:59:00"` as a safe fallback, or omit `endDate` entirely — Google treats `endDate` as optional for Event rich results.

**H2 — Tag pages have no schema**
Pages like `/chattanooga/events/tag/songbirds/` list multiple events but carry zero structured data. These pages are indexable (no noindex tag). A `BreadcrumbList` is the minimum fix. An `ItemList` of events is the high-value addition.

### MEDIUM

**M1 — Guide pages carry no content-type schema**
The live-music guide has a `BreadcrumbList` but no `WebPage` or `CollectionPage` schema. Adding a `WebPage` (subtype `CollectionPage`) exposes `name`, `description`, `dateModified`, and `publisher` to Google. This supports Knowledge Graph association and helps AI crawlers understand what type of content the page contains.

**M2 — Event image uses generic social.png**
All events currently emit `"image": "https://thingshappening.com/images/social.png"`. Google recommends images with aspect ratios of 16:9, 4:3, or 1:1 and a minimum of 720px wide. A generic site-wide image satisfies the required field but provides no visual differentiation in rich results. Event-specific images would improve CTR.

**M3 — Organization missing sameAs**
The Organization block on the homepage has no `sameAs` array. Adding links to the Facebook page (and any other profiles) strengthens entity disambiguation.

### LOW

**L1 — WebSite missing SearchAction (Sitelinks Searchbox)**
The `WebSite` block on the homepage does not include a `potentialAction` with a `SearchAction`. The site has a `/search` page. Adding this is straightforward and can trigger a Sitelinks Searchbox in Google results.

**L2 — Offers.availability missing on Event**
`availability` is a recommended property on `Offer`. Without it Google cannot confirm ticket status. Use `https://schema.org/InStock` for free/available events.

**L3 — BreadcrumbList position 4 name on guide page is verbose**
The fourth crumb name is `"A Sheet for Chattanooga Live Music"` which differs from the page `<h1>`. It should match the page title exactly.

---

## Missing Opportunities

### 1. ItemList on Tag and Venue Pages (High Value)

Tag pages (`/events/tag/songbirds/`) and venue pages (`/chattanooga/events/songbirds/`) list multiple events. Google supports an `ItemList` that references individual Event pages. This lets Google show a carousel of events from a single tag or venue page.

### 2. WebPage / CollectionPage on Guide Pages (Medium Value)

Guide pages are curated lists of local venues, bars, and attractions. A `CollectionPage` schema signals this to Google and exposes `dateModified` (maps to the `lastUpdated` frontmatter field), which is relevant for freshness ranking signals.

### 3. LocalBusiness on Venue Pages (Medium Value — when pages exist)

The site links to `/chattanooga/venues/barking-legs` from event pages. If those venue pages exist and are substantive, a `LocalBusiness` (or subtype like `MusicVenue`) with full address, `telephone`, `openingHours`, and `geo` would make them eligible for local pack consideration.

---

## Ready-to-Implement JSON-LD

### Fix H1 — Corrected Event Block (endDate with time)

Replace the current Event block on individual event pages. The only change is `endDate` format.

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Beneath These Stones: Voices from Pleasant Garden Cemetery",
  "description": "Original poetic monologues bring the stories of Pleasant Garden Cemetery to life at Barking Legs Theater on October 18.",
  "startDate": "2026-10-18T14:30:00",
  "endDate": "2026-10-18T16:30:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "image": "https://thingshappening.com/images/social.png",
  "organizer": {
    "@type": "Organization",
    "name": "Things Happening",
    "url": "https://thingshappening.com"
  },
  "location": {
    "@type": "Place",
    "name": "Barking Legs Theater",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1307 Dodds Avenue",
      "addressLocality": "Chattanooga",
      "addressRegion": "TN",
      "postalCode": "37404",
      "addressCountry": "US"
    }
  },
  "url": "https://thingshappening.com/chattanooga/events/barking-legs/beneath-these-stones-voices-from-pleasant-garden-cemetery/",
  "offers": {
    "@type": "Offer",
    "url": "https://www.barkinglegs.org/ourevents",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

Note on `endDate` logic for Astro templates: if `endTime` is not in frontmatter, use a computed fallback of `startDate + 2 hours`. If neither start time nor end time is known, omit `endDate` entirely rather than emitting a date-only value when `startDate` has a time.

### Fix H2 + Missing Opportunity 1 — BreadcrumbList + ItemList on Tag Pages

Add two JSON-LD blocks to tag and venue filter pages. The ItemList block references the individual event page URLs that already have Event schema.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thingshappening.com" },
    { "@type": "ListItem", "position": 2, "name": "Chattanooga", "item": "https://thingshappening.com/chattanooga" },
    { "@type": "ListItem", "position": 3, "name": "Events", "item": "https://thingshappening.com/chattanooga/events" },
    { "@type": "ListItem", "position": 4, "name": "Songbirds", "item": "https://thingshappening.com/chattanooga/events/tag/songbirds/" }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Songbirds Events Near Chattanooga",
  "url": "https://thingshappening.com/chattanooga/events/tag/songbirds/",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://thingshappening.com/chattanooga/events/songbirds/vickie-vaughn/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "url": "https://thingshappening.com/chattanooga/events/songbirds/supernova-oasis-tribute/"
    }
  ]
}
```

Each `url` in `itemListElement` must point to a page that has `Event` schema. The list items do not duplicate the Event data — they only reference the canonical event page URLs.

### Missing Opportunity 2 — CollectionPage on Guide Pages

Add this block to all guide pages (e.g. `/chattanooga/guides/live-music/`). Populate `dateModified` from the `lastUpdated` frontmatter field.

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://thingshappening.com/chattanooga/guides/live-music/#webpage",
  "url": "https://thingshappening.com/chattanooga/guides/live-music/",
  "name": "Live Music Guide — Chattanooga",
  "description": "The live music guide to Chattanooga. Explore local bars, music venues, theaters, festivals, history and more.",
  "dateModified": "2026-09-15",
  "inLanguage": "en-US",
  "isPartOf": {
    "@id": "https://thingshappening.com/#website"
  },
  "publisher": {
    "@id": "https://thingshappening.com/#organization"
  },
  "breadcrumb": {
    "@id": "https://thingshappening.com/chattanooga/guides/live-music/#breadcrumb"
  }
}
```

The `isPartOf` and `publisher` values reference the `@id` values already emitted by the homepage `@graph`. This creates a connected entity graph across pages.

### Fix M3 — Organization sameAs on Homepage

Update the Organization block to add a `sameAs` array:

```json
{
  "@type": "Organization",
  "@id": "https://thingshappening.com/#organization",
  "name": "Things Happening",
  "url": "https://thingshappening.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://thingshappening.com/images/logo.png"
  },
  "sameAs": [
    "https://www.facebook.com/people/ThingsHappening-Chattanooga/61559147467507/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "jack@thingshappening.com",
    "contactType": "customer support"
  }
}
```

### Fix L1 — SearchAction on WebSite (Sitelinks Searchbox)

Update the WebSite block on the homepage:

```json
{
  "@type": "WebSite",
  "@id": "https://thingshappening.com/#website",
  "url": "https://thingshappening.com",
  "name": "Things Happening",
  "description": "Local events and guides for Chattanooga, TN.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://thingshappening.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

Confirm the `/search` page accepts a `q` query parameter before deploying. Adjust the `urlTemplate` if the parameter name differs.

---

## Implementation Priority

| Priority | Item | Effort | Impact |
|----------|------|--------|--------|
| High | H1 — Fix endDate time format on Event schema | Low — template change | Fixes Google validation error |
| High | H2 — Add BreadcrumbList to tag pages | Low — template change | Indexable pages gain breadcrumb rich result |
| High | Missing Opp 1 — ItemList on tag/venue pages | Medium — requires event list in template | Event carousel eligibility |
| Medium | Missing Opp 2 — CollectionPage on guide pages | Low — one new block per guide | Entity graph, freshness signal |
| Medium | M3 — sameAs on Organization | Low — one field | Entity disambiguation |
| Low | L1 — SearchAction on WebSite | Low — one block change | Sitelinks Searchbox eligibility |
| Low | L2 — offers.availability | Low — one field per event | Offer completeness |

---

## Notes on Deprecated / Excluded Types

- FAQPage was not recommended. Google retired FAQ rich results on May 7, 2026.
- HowTo was not recommended. Rich results support was removed September 2023.
- SpecialAnnouncement was not recommended. Deprecated July 31, 2025.
