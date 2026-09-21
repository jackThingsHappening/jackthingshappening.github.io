# Content Quality Audit — thingshappening.com
Audited: 2026-09-20
Pages sampled: 6 live + 62 event MDX source files + 13 guide MDX source files
Auditor: Content Quality skill (Sept 2025 QRG)

---

## Overall Score: 47 / 100

The guides tier is solid. The event tier, which is 82% of the site, is structurally thin and lacks E-E-A-T attribution at the page level. The site has a real human behind it with genuine local knowledge, but that identity is not surfaced on the pages where it would do the most work.

---

## E-E-A-T Breakdown

| Factor | Score | Weight | Weighted |
|--------|-------|--------|---------|
| Experience | 52 / 100 | 20% | 10.4 |
| Expertise | 44 / 100 | 25% | 11.0 |
| Authoritativeness | 28 / 100 | 25% | 7.0 |
| Trustworthiness | 62 / 100 | 30% | 18.6 |
| **Composite** | | | **47.0** |

### Experience — 52/100 [MEDIUM]

Positive signals: The live music guide contains genuine first-hand research. Venue descriptions show personal knowledge (Woodshop as "intimate neighborhood bar", Sluggo's downstairs lounge specifics, Buds Rock bands on Friday/Saturday). The about page confirms "Jack Byrum, a local to Chattanooga since 2020." The festivals section in the live music guide includes current-year specifics (3 Sisters 2026 lineup, Moon River status update) showing active maintenance.

Gaps: No first-person signals appear on event pages. The ~400-word event page body copies read factual but anonymous. There is no "I attended" or "we recommend" framing anywhere in event listings. The editorials section exists but renders empty in the static build (the `articles-section` grid is blank), which eliminates what should be the primary first-hand experience showcase.

### Expertise — 44/100 [MEDIUM]

Positive signals: Guide content demonstrates topical depth. The live music guide covers history (Bessie Smith, Glenn Miller), venue taxonomy (bars, recurring events, larger venues, festivals), and practical navigation details. Word counts across guides range from 981 to 3,973 words — all above the 1,500-word blog post floor. The interactive/filterable guide format shows local knowledge applied to UX.

Gaps: No author byline appears on any guide or event page. The `author` frontmatter field is absent in all 13 guide MDX files. A quality rater cannot identify who wrote the guides without navigating to /about. The guides index title is "Chattanooga Guides" with no site-brand suffix — a missed expertise-signal opportunity in the SERP.

### Authoritativeness — 28/100 [HIGH]

This is the weakest E-E-A-T dimension.

- No `Person` or `Organization` schema on the about page or guides
- No author schema (`author` JSON-LD) on any guide page
- No byline linked to an author profile
- No external citations linking to the site
- No press mentions, directory listings, or third-party references found in the pages sampled
- Facebook presence exists but is not linked from guide or event pages (only in the top nav)
- The about page meta description names "Jack Byrum" but there is no corresponding structured data for Google to index this identity

Authority for a local publisher is typically built through community recognition and named editorial voice. The site has the editorial voice in the guides but it is not attributed to a citable person.

### Trustworthiness — 62/100 [LOW-MEDIUM]

Positive signals:
- Privacy policy and terms pages exist and are linked from footer and nav
- Contact page and email (`jack@thingshappening.com`) are present
- HTTPS enforced (Strict-Transport-Security header confirmed)
- Event schema uses `eventStatus: EventScheduled` and correct `Offer` with price/currency
- About page transparently discloses AI usage in content production
- "Submit an Event" form exists — signals community input channel

Gaps:
- No `Organization` schema on the about or homepage
- About page has zero structured data despite naming the publisher and operator
- The 404 page has an empty `<meta name="description">` tag
- The Songbirds venue URL (`/chattanooga/events/songbirds/`) returns a 404, indicating a broken venue-level index page that was once live or is in the sitemap incorrectly
- The editorials index renders no articles (empty `articles-section` grid) — a page that appears to exist but delivers no content is a trust signal problem

---

## Thin Content Analysis [HIGH]

### Event Pages — Critical

Source data: 62 event MDX files analyzed.

| Metric | Value |
|--------|-------|
| Total event pages | 62 |
| Average body word count | 48 words |
| Minimum body word count | 29 words |
| Maximum body word count | 72 words |
| Pages under 50 words | 31 (50%) |
| Pages over 100 words | 0 (0%) |

Every event page on the site falls below 100 words of body copy. For reference, the product page minimum floor for comprehensive coverage is 300+ words; event pages function like product pages.

The body copy quality is not the problem — the sampled event MDX files show specific, non-generic writing (artist genre details, crowd expectations, door times, age restrictions). The problem is volume. 48 words cannot achieve topical coverage for a named event at a specific venue.

The seoDescription (used as the meta description) and the body copy are distinct, which is good. They do not duplicate each other. But the body copy alone would not pass a thin content assessment if Google evaluates each page individually.

Recommended floor: 120-150 words per event page. That is achievable within the current MDX workflow.

### Guide Pages — Pass

All 13 guide pages exceed the 1,500-word blog post floor. The range is 981–3,973 words. The one page below the floor (Exhibits guide at 981 words) is an interactive index page where the content is primarily structured data, not prose — this is defensible.

### Editorials Index — Critical

The editorials index at `/chattanooga/editorials/` renders with an empty article grid. The `articles-section` section contains no items. This is either a build issue or the section has no published content. Either way, a navigable page with no content is a quality signal problem.

---

## Duplicate / Templated Content Patterns [MEDIUM]

Event pages use a consistent template structure (frontmatter fields: title, pubDate, time, entranceCost, seoDescription, venue, address, eventLink, tags). This is appropriate for a programmatic events site.

No body copy duplication was found across the sample. Each event page has unique prose. The seoDescription and body copy serve different purposes and do not repeat each other verbatim. This is the right approach.

Risk area: The 405 event pages in the `/events/` directory are indexed by search engines. If Google applies a thin-content penalty at the site level rather than the page level, the volume of sub-100-word pages could suppress the guides tier, which is the strongest content on the site. The two content tiers are on the same domain and cannot be separated.

No templated duplication was found in the guide pages. Each guide has a distinct structure and unique content.

---

## Readability Assessment [LOW-MEDIUM]

### Live Music Guide (sample)
The guide prose is clear and direct. Sentences are short. Venue descriptions are specific and useful. The "By Topic" section structure (Local Bars, Recurring Events, Larger Venues, Festivals) is logical and easy to scan. The structured table at the end of each section adds scannable summary value.

Issues found:
- Title "A Sheet for Chattanooga Live Music" is unusual phrasing. A quality rater reading the SERP snippet may not immediately parse what "sheet" means in this context. The OG title repeats this. A clearer title would improve CTR and topical clarity.
- The H1 matches the title tag exactly. This is fine but there is no sub-headline or intro paragraph date-stamp to orient the reader on freshness.
- "Published on: 02/04/2025 / Last updated: 07/26/2026" appears in the page HTML but only in a small metadata element. It is not prominent enough for a quality rater doing a quick scan.

### Event Pages (sample)
Body copy is readable and specific. Voice is consistent across pages. No run-on sentences detected. Age restrictions, door times, and ticket links are present in the frontmatter and rendered as structured data fields. No readability problems at the sentence level.

### Guides Index
Title tag is "Chattanooga Guides" — no brand suffix, no descriptive modifiers. The meta description "In-depth guides to exploring Chattanooga – from outdoor adventures to hidden gems." is functional but generic. "Hidden gems" is an overused phrase in local content.

---

## Title Tag and Meta Description Quality

| Page | Title Tag | Meta Description | Issues |
|------|-----------|-----------------|--------|
| Homepage | Chattanooga Events & Things To Do \| Things Happening | Find things to do in Chattanooga, TN. Browse upcoming events... | Acceptable. Title has keyword and brand. |
| Guides Index | Chattanooga Guides | In-depth guides to exploring Chattanooga... | [MEDIUM] Title too short, no brand suffix |
| Live Music Guide | A Sheet for Chattanooga Live Music | The live music guide to Chattanooga. Explore local bars... | [LOW] Unusual title phrasing; meta desc is clearer than title |
| Barking Legs Event | Beneath These Stones: Voices from Pleasant Garden Cemetery | Original poetic monologues bring the stories... | Acceptable. Specific and descriptive. |
| Editorials Index | Chattanooga Editorials \| Things Happening | Field notes and first-hand observations... | [LOW] Meta desc good but page renders empty |
| About | About Things Happening | Things Happening is a local events... run by Jack Byrum | Good. Names the operator — trust signal. |

The Songbirds venue index (`/chattanooga/events/songbirds/`) returns a 404. If this URL is in the sitemap, it should be removed or redirected to a working venue page.

---

## AI Citation Readiness Score: 38 / 100 [HIGH]

AI citation readiness measures how well the site can be quoted by large language models and AI search features (e.g., Google AI Overviews, Perplexity, ChatGPT Browse).

### What works
- Event pages have `Event` schema with `startDate`, `endDate`, `location` (with `PostalAddress`), and `Offer` — these are machine-readable and quotable
- Breadcrumb schema is present on event and guide pages
- The live music guide contains quotable named facts (Bessie Smith hometown, Glenn Miller gold record details, specific festival dates and lineups)
- The about page meta description names the publisher and operator — citable in an AI source attribution

### What blocks citation
- No `Person` schema for Jack Byrum — AI systems cannot confidently attribute content to a named author without this
- No `Organization` schema for Things Happening — reduces entity recognition
- No `Article` or `NewsArticle` schema on guide pages — LLMs prefer structured article metadata when pulling citations
- No `datePublished` / `dateModified` in guide page JSON-LD — freshness signals are in the HTML but not in machine-readable form
- The live music guide title ("A Sheet for...") is unusual enough that an AI system may not map it to the expected query intent
- Editorials section is empty — the editorial voice that would produce the most citation-worthy first-person content is not published

---

## AI-Generated Content Quality Assessment (Sept 2025 QRG) [LOW]

The about page discloses: "Some content is drafted or refined with AI assistance before publishing."

Assessment of sampled content:
- Event page body copies show specificity (named performers, exact times, age limits, crowd context) that suggests human review and local knowledge. No generic filler detected.
- Live music guide contains first-hand knowledge signals that are difficult to generate without local awareness (Woodshop atmosphere, Sluggo's downstairs lounge, Buds East Ridge location).
- Festival section contains a 2026-specific Moon River update ("Moon River At Sea," cruise from Miami) that is a fresh, specific fact unlikely to be AI-generated without a live source.
- No repetitive sentence structure patterns detected across guide pages.

The AI content disclosure is a positive trust signal. The content quality does not show markers of unreviewed AI generation. This dimension does not flag as a risk.

---

## Structured Data Summary

| Page | Schema Types Present | Gaps |
|------|---------------------|------|
| Homepage | None | No WebSite, SiteLinksSearchBox, or Organization schema |
| Guides Index | None | No ItemList or CollectionPage schema |
| Live Music Guide | BreadcrumbList | No Article, author, datePublished |
| Barking Legs Event | Event, Offer, Place, PostalAddress, BreadcrumbList | No performer, image is generic social.png not event-specific |
| Editorials Index | None | No CollectionPage schema |
| About Page | None | No Organization or Person schema |

The Event schema on the Barking Legs page is well-formed. The `Offer` block has `price: "0"` with `priceCurrency: "USD"` — correct for a free event. The `endDate` is set to date-only format (`2026-10-18`) while `startDate` has a time component — Google prefers both in ISO 8601 datetime format.

One issue: the event `image` field points to the generic `/images/social.png` rather than an event-specific image. Google's Event schema documentation recommends an event-specific image with a minimum ratio of 3:2.

---

## Priority Recommendations

### P1 — Critical (address within 30 days)

1. **Add author byline to all guide pages.** The author field is absent in all 13 guide MDX frontmatter files. Add `author: "Jack Byrum"` and render it visibly with a link to /about. Add `Person` schema to /about.

2. **Add Organization schema to the homepage and about page.** Include `name`, `url`, `sameAs` (Facebook), and `email`. This is the single highest-impact structured data gap.

3. **Fix or remove the editorials index.** The page at `/chattanooga/editorials/` renders no content. Either publish editorials or remove the page from navigation and the sitemap. An empty content section is a direct quality signal problem.

4. **Fix or redirect the Songbirds venue 404.** The URL `/chattanooga/events/songbirds/` returns 404. If this is in the sitemap, remove it. If the venue index was intentional, restore it or redirect to the events search filtered by venue.

### P2 — High (address within 60 days)

5. **Increase event page body copy floor to 120 words.** Every event page is under 75 words. The current copy is specific and non-generic, so the editorial quality is there — it just needs more of it. Add 1-2 sentences of venue context and 1 sentence of "why this event" framing to each new event. Apply retroactively to the highest-traffic event pages first.

6. **Add Article schema to guide pages.** Include `headline`, `author` (linked to Person entity), `datePublished`, `dateModified`, and `publisher`. This fixes the AI citation gap and surfaces freshness signals to Google.

7. **Fix guides index title tag.** Change "Chattanooga Guides" to "Chattanooga Guides: Local Events & Exploration | Things Happening" or similar. The current title has no brand suffix and is too short to signal topical authority.

8. **Add `Article` schema `dateModified` from the existing "Last updated" display date.** The live music guide shows "Last updated: 07/26/2026" in HTML but this is not in any machine-readable field. Move it to JSON-LD.

### P3 — Medium (address within 90 days)

9. **Fix event schema `endDate` format.** Standardize `endDate` to include time in ISO 8601 format (`2026-10-18T16:30:00`) rather than date-only, to match the `startDate` field format.

10. **Replace generic social.png with event-specific images in Event schema.** Use the venue image or event poster where available. The generic fallback reduces visual richness in Google Event search results.

11. **Clarify the live music guide title.** "A Sheet for Chattanooga Live Music" is creative but obscures the topic in SERP previews. Consider "Chattanooga Live Music Guide: Venues, Bars & Festivals" as the title tag while keeping the creative title as the H1.

12. **Publish at least 3 editorials.** The editorials section meta description ("Field notes and first-hand observations") is the strongest E-E-A-T copy on the site. Publishing even short first-hand pieces would significantly lift the Experience and Authoritativeness scores.
