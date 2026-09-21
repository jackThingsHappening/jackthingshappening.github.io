# GEO & AI Search Readiness Audit — thingshappening.com

Audited: 2026-09-20
Pages sampled: robots.txt, llms.txt, /chattanooga/, /chattanooga/guides/live-music/, /about/

---

## GEO Readiness Score: 44 / 100

| Dimension | Weight | Raw Score | Weighted |
|---|---|---|---|
| Citability | 25% | 38 | 9.5 |
| Structural Readability | 20% | 52 | 10.4 |
| Multi-Modal Content | 15% | 40 | 6.0 |
| Authority & Brand Signals | 20% | 28 | 5.6 |
| Technical Accessibility | 20% | 62 | 12.4 |
| **Total** | | | **43.9** |

---

## AI Crawler Access

robots.txt content:

```
User-agent: *
Allow: /

Sitemap: https://thingshappening.com/sitemap-index.xml
```

| Crawler | Status | Notes |
|---|---|---|
| GPTBot | ALLOWED (implicit) | No explicit entry; wildcard Allow: / applies |
| OAI-SearchBot | ALLOWED (implicit) | Same |
| ClaudeBot | ALLOWED (implicit) | Same |
| PerplexityBot | ALLOWED (implicit) | Same |
| CCBot | ALLOWED (implicit) | No training-only blocks in place |
| anthropic-ai | ALLOWED (implicit) | No training-only blocks in place |

**[LOW] All crawlers are allowed.** The wildcard rule lets everything through. This is correct for AI search visibility. No action required unless you want to block training crawlers (CCBot, anthropic-ai) separately.

**[LOW] No crawler-specific Allow directives.** Explicit named rules for GPTBot and ClaudeBot are a minor trust signal for some AI systems. Consider adding them.

---

## llms.txt Status

**Present at https://thingshappening.com/llms.txt** — HTTP 200, valid plain text.

Content summary:
- Site description: present and accurate
- Key page links: 4 listed (Events, Guides, Editorials, About)
- Coverage description: present
- Usage/licensing statement: present ("Content may be referenced and quoted for informational purposes")
- Contact: present (jack@thingshappening.com)

**[MEDIUM] No RSL 1.0 or explicit license declaration.** The usage line is informal. Adding a machine-readable license reference (e.g. `License: https://reference.sitepoint.com/rsl/1.0`) strengthens the signal for AI systems that check for explicit permissions.

**[MEDIUM] No guide-level deep links in llms.txt.** Only top-level category URLs are listed. Individual guide URLs (e.g. the live music guide, coffee guide, breweries guide) are not exposed. AI systems that parse llms.txt for crawl prioritization will not know these exist unless they follow the guides index. Add a `## Guides` section with direct guide URLs.

**[LOW] No `updated` or `as-of` timestamp in llms.txt.** AI systems cannot determine content freshness from the file alone.

---

## Passage-Level Citability

Analyzed: /chattanooga/guides/live-music/

**Total guide word count:** 2,334 words across 4 main sections.

### Section word counts

| Section | Words | In ideal range (134-167)? |
|---|---|---|
| Intro / history | 255 | No — too long |
| Local Bars | 602 | No — too long |
| Recurring Events | 463 | No — too long |
| Larger Venues | 463 | No — too long |
| Festivals | 430 | No — too long |
| Outro | 111 | No — too short |

**[HIGH] No passage is in the 134-167 word ideal range for AI citation.** Sections run 430-600 words. AI models prefer extractable, self-contained blocks. Long sections reduce citation probability because the model cannot isolate a clean answer block.

**[HIGH] Venue entries are too short to cite independently.** Individual venue descriptions (JJ's Bohemia: 50 words, Dragon's Roast: 56 words) fall below the threshold where an AI model can produce a cited answer. The Woodshop entry at 87 words is closer but still short. Each entry needs 134+ words to be independently citable.

**[HIGH] No direct answers in the first 40-60 words of any section.** Every section opens with scene-setting prose ("Do you think free weekend outdoor concerts in the summer sound like a good time?") rather than a direct, extractable answer. AI models scan the first sentence of a section to decide if it answers a query. An opener like "Chattanooga has four free outdoor concert series running May through October" is more likely to be cited than a rhetorical question.

**[MEDIUM] Zero question-based H2/H3 headings across the entire guide.** All 8 headings are declarative labels ("Local Bars.", "Recurring Music Events."). Headings phrased as questions ("Where can I hear live music in Chattanooga?") match the natural language queries AI systems process and increase passage relevance scores.

**[MEDIUM] Summary tables are present** (venue tables, festival tables) but they are not wrapped in self-contained answer blocks. A table without a direct introductory sentence is harder for AI to cite cleanly.

**[LOW] Publication date is present** (2026-07-26 detected via metadata). This is a positive freshness signal.

**[LOW] Good outbound citation links.** The guide links to 20+ external venue and event websites. This signals that content is grounded in real entities, which correlates with AI citation trust.

---

## Authority & Brand Signals

| Signal | Status | Notes |
|---|---|---|
| Wikipedia entity for site | Not found | thingshappening.com has no Wikipedia article |
| Wikipedia entity for "Things Happening" | Not found | No Wikipedia mention detected |
| Reddit presence | Unknown | Not verified in this audit |
| YouTube mentions | Unknown | Not verified in this audit |
| Author byline on guide pages | Missing | No meta author tag, no visible byline in guide HTML |
| Author entity (Jack Byrum) | About page only | Mentioned on /about/ but no JSON-LD Person schema |
| Author LinkedIn or Wikipedia | Unknown | Not verified in this audit |
| Domain backlinks / DR | Unknown | Not measured in this audit |

**[HIGH] No author byline on guide pages.** The live music guide has no `<meta name="author">`, no visible byline, and no JSON-LD `author` field. AI models use author attribution as a trust signal. The pen name "Jack Byrum" exists on the About page but is not connected to individual guides.

**[HIGH] No Person schema for the author.** Adding JSON-LD with `@type: Person` on the About page and linking it to guide pages via `author` in Article schema would establish Jack Byrum as a named entity for AI systems.

**[MEDIUM] No Wikipedia article for the site or its author.** Wikipedia entity presence is a strong AI citation correlator. A site covering Chattanooga local events is unlikely to qualify for a standalone article, but contributing to existing Chattanooga-related Wikipedia articles (music venues, festivals) as a cited source would build the signal.

**[MEDIUM] No structured About/Organization schema.** The About page has no JSON-LD at all. An `Organization` block with name, url, and founding date establishes the site as a known entity.

**[LOW] Facebook presence is referenced** in the live music guide (Facebook link in guide external links). This is a weak positive signal but Facebook correlates less than YouTube or Reddit for AI citations.

---

## Technical Accessibility for AI Crawlers

**[PASS] Server-side rendered (SSR).** Both sampled pages returned `is_spa: false`. Full HTML content is available to crawlers without JavaScript execution. This is the highest-impact technical GEO factor and the site passes.

**[PASS] Sitemap present.** `https://thingshappening.com/sitemap-index.xml` is referenced in robots.txt and returns a valid XML sitemap index pointing to `sitemap-0.xml`.

**[PASS] Canonical tags present** on all sampled pages.

**[PASS] Fast static hosting.** Pages are served from GitHub Pages via Fastly CDN with cache hits. Response times are low. AI crawlers do not penalize slow sites the same way Googlebot does, but fast delivery reduces crawl abandonment.

**[FAIL] Zero JSON-LD on the events homepage (/chattanooga/).** No structured data of any kind. Events are rendered as HTML text with no `Event` schema, no `name`, `startDate`, `location`, or `url` properties. AI systems that parse structured data for knowledge graph enrichment get nothing from this page.

**[FAIL] Only BreadcrumbList schema on guide pages.** The live music guide has one valid JSON-LD block: a BreadcrumbList. There is no `Article`, `FAQPage`, or `ItemList` schema. This means AI systems cannot confirm the content type, authorship, or date through structured data alone.

**[FAIL] No Event schema on any event listings.** This is the highest-impact missing schema for a local events site. Without `Event` schema, events cannot appear in Google's event rich results and are much less likely to surface in AI Overviews for "things to do in Chattanooga this weekend" queries.

---

## Event Page AI Overview Likelihood

Query class: "things to do in Chattanooga" / "live music Chattanooga this weekend"

**Current likelihood: Low.**

Factors working against surfacing in AI Overviews:
- No Event schema on any event listing
- Events homepage extracted text is 403 words total, mostly navigation chrome
- Trafilatura (boilerplate stripping) returns almost nothing useful from /chattanooga/ — only one event description survived extraction
- No question-answering structure on the events page
- No FAQ or "What's happening in Chattanooga" direct answer block
- No author attribution on guide content

Factors working in favor:
- SSR delivery — crawlers can read the page
- Daily update cadence (strong freshness signal)
- Accurate meta description: "Find things to do in Chattanooga, TN. Browse upcoming events, live music, outdoor adventures, local guides, and more — updated daily."
- Guide content is substantive (2,300+ words on live music alone)
- Specific named entities: Bessie Smith, IBMA, Nightfall, Tivoli Theatre, The Signal — all indexable

---

## Platform-Specific Scores

| Platform | Score | Key Blocker |
|---|---|---|
| Google AI Overviews | 32 / 100 | No Event schema, no Article schema, no author entity |
| ChatGPT (Browse/Search) | 38 / 100 | No llms.txt deep links, no author, sections too long for clean citation |
| Perplexity | 45 / 100 | SSR pass + structured guides help; passage length hurts |
| Bing Copilot | 35 / 100 | No structured data; event pages return near-zero extractable text |

---

## Top 5 Highest-Impact Changes

### 1. Add Event schema to every event listing [CRITICAL] [Effort: Medium]

Every event on /chattanooga/ should have JSON-LD with `@type: Event`, `name`, `startDate`, `endDate`, `location` (with `@type: Place`), `url`, and `offers`. This is the single change most likely to drive AI Overview appearances for "things to do in Chattanooga" queries. It also unlocks Google's event rich results in standard search.

### 2. Add Article + author schema to all guide pages [HIGH] [Effort: Low-Medium]

Each guide page needs a JSON-LD block with `@type: Article`, `author` (linking to a `Person` entity for Jack Byrum), `datePublished`, `dateModified`, and `publisher`. This tells every AI system that the guide is a named, attributed piece of content — the minimum bar for AI citation trust.

### 3. Restructure guide sections to 134-167 words with direct openers [HIGH] [Effort: High]

Rewrite each venue entry and section intro so the first sentence directly answers "what is this place / event?" in plain language. Target 134-167 words per venue entry. This is the passage-length sweet spot for AI citation. Example rewrite for JJ's Bohemia: open with "JJ's Bohemia is a dive bar on [street] that has hosted live music in Chattanooga since 2006. It seats [X] and books [genres] on [days]..." before adding color.

### 4. Add question-based H2/H3 headings to guide pages [MEDIUM] [Effort: Low]

Convert section labels into question headings. "Local Bars." becomes "Where can I hear live music at a Chattanooga bar?". "Recurring Music Events." becomes "What free outdoor concerts happen in Chattanooga?". These match natural language queries and lift relevance scoring for AI passage retrieval.

### 5. Expand llms.txt with individual guide URLs [MEDIUM] [Effort: Low]

Add a `## Guides` section to llms.txt listing each guide's direct URL. Also add a `## Events` pointer with a note that the events page is updated daily. Consider adding a `License:` line referencing RSL 1.0 or Creative Commons. This takes 15 minutes and directly improves how AI crawlers prioritize the site's content.

---

## Secondary Recommendations

- Add `Organization` JSON-LD on the About page (name, url, foundingDate, contactPoint)
- Add `Person` JSON-LD on the About page for Jack Byrum (name, url, sameAs pointing to any social profiles)
- Add explicit named crawler rules to robots.txt for GPTBot, ClaudeBot, PerplexityBot
- Increase the extractable text density of /chattanooga/ — the events index page returns only 403 words of usable text after boilerplate stripping; a short "What's happening in Chattanooga" lede paragraph above the event list would dramatically improve this
- Create a dedicated FAQ section on the live music guide answering: "Is live music free in Chattanooga?", "What are the best music venues in Chattanooga?", "When is Nightfall in Chattanooga?" — wrap each in `FAQPage` schema
