---
name: expand-website-content
description: Expand content depth on key page templates — intros, FAQs, metadata — to improve rankings. Targets tag pages, pagination, homepage, city index, my-favorites, and about.
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
  - WebSearch
---

You are expanding content depth across key page templates on ThingsHappening. More content depth improves rankings. The targets are fixed — do not skip any.

Voice rules apply to all prose you write:
- 20 words or fewer per sentence
- Active voice only
- No filler phrases
- No em dashes
- Concrete and local, not promotional

---

## Step 1 — Tag pages (`src/pages-tag-event/[tag].astro`)

**Goal:** Replace the generic placeholder title, description, and empty intro with tag-aware content.

The current file has:
- `title = 'thingshappening'` — wrong
- `seoDescription = 'An easier way to find things happening'` — wrong
- No intro prose — only a MailerLite embed above the card grid

**What to do:**

Add a `TAG_META` map near the top of the frontmatter block (after imports, before `getStaticPaths`). The map provides a title suffix, SEO description, and intro paragraph for each genre tag. Use this shape:

```ts
const TAG_META: Record<string, { titleSuffix: string; seoDescription: string; intro: string }> = {
  outdoors: {
    titleSuffix: 'Outdoor Events in Chattanooga, TN',
    seoDescription: 'Hikes, paddling, parks, and outdoor events in Chattanooga, TN. Updated daily.',
    intro: 'Chattanooga sits inside the Tennessee River Gorge and borders a national forest. Outdoor events here range from guided trail runs to river cleanups to night paddles. This page lists upcoming outdoor events. It updates daily.',
  },
  music: {
    titleSuffix: 'Live Music in Chattanooga, TN',
    seoDescription: 'Concerts, shows, and live music nights in Chattanooga, TN. Updated daily.',
    intro: 'Chattanooga has live music most nights of the week. Venues range from seated listening rooms to outdoor stages. This page lists upcoming shows across the city. It updates daily.',
  },
  comedy: {
    titleSuffix: 'Comedy Shows in Chattanooga, TN',
    seoDescription: 'Stand-up, improv, and comedy nights in Chattanooga, TN. Updated daily.',
    intro: 'Comedy Catch has hosted national touring acts for decades. Improv Chattanooga runs weekly shows downtown. This page lists upcoming comedy events. It updates daily.',
  },
  'food-drink': {
    titleSuffix: 'Food and Drink Events in Chattanooga, TN',
    seoDescription: 'Tastings, dinners, pop-ups, and drink events in Chattanooga, TN. Updated daily.',
    intro: 'Chattanooga has a growing food scene centered on the Southside and the North Shore. This page lists food and drink events including tastings, pop-ups, and dinners. It updates daily.',
  },
  theater: {
    titleSuffix: 'Theater and Stage Shows in Chattanooga, TN',
    seoDescription: 'Local theater productions and stage performances in Chattanooga, TN. Updated daily.',
    intro: 'Chattanooga Theatre Centre and the Tivoli host productions year-round. This page lists upcoming theater and stage performances. It updates daily.',
  },
  theatre: {
    titleSuffix: 'Theatre and Stage Shows in Chattanooga, TN',
    seoDescription: 'Local theatre productions and stage performances in Chattanooga, TN. Updated daily.',
    intro: 'Chattanooga Theatre Centre and the Tivoli host productions year-round. This page lists upcoming theatre and stage performances. It updates daily.',
  },
  community: {
    titleSuffix: 'Community Events in Chattanooga, TN',
    seoDescription: 'Community gatherings, meetups, and neighborhood events in Chattanooga, TN. Updated daily.',
    intro: 'Chattanooga has an active community event calendar — markets, cleanups, workshops, and neighborhood meetups. This page lists upcoming community events. It updates daily.',
  },
  brewery: {
    titleSuffix: 'Brewery Events in Chattanooga, TN',
    seoDescription: 'Tap takeovers, beer releases, and brewery events in Chattanooga, TN. Updated daily.',
    intro: 'Chattanooga has a cluster of local breweries on the Southside and Northshore. This page lists upcoming events at area breweries. It updates daily.',
  },
  trivia: {
    titleSuffix: 'Trivia Nights in Chattanooga, TN',
    seoDescription: 'Weekly trivia nights at bars and venues across Chattanooga, TN. Updated daily.',
    intro: 'Several bars and restaurants run weekly trivia nights across Chattanooga. Teams are usually 2-6 people. This page lists upcoming trivia nights. It updates daily.',
  },
  sports: {
    titleSuffix: 'Sports Events in Chattanooga, TN',
    seoDescription: 'Games, matches, and sporting events in Chattanooga, TN. Updated daily.',
    intro: 'The Chattanooga Lookouts play at AT&T Field downtown. UTC Mocs games run through the fall and winter. This page lists upcoming sports events. It updates daily.',
  },
  'live-events': {
    titleSuffix: 'Live Events in Chattanooga, TN',
    seoDescription: 'Upcoming live events and performances in Chattanooga, TN. Updated daily.',
    intro: 'This page lists upcoming live events across Chattanooga. It updates daily.',
  },
};
```

Then replace the `title`, `seoDescription`, and `description` variables with lookups from the map:

```ts
const meta = TAG_META[tag] ?? {
  titleSuffix: `#${tag} Events in Chattanooga, TN`,
  seoDescription: `Upcoming ${tag} events in Chattanooga, TN. Updated daily.`,
  intro: `This page lists upcoming ${tag} events in Chattanooga. It updates daily.`,
};
const title = `${meta.titleSuffix} | Things Happening`;
const seoDescription = meta.seoDescription;
```

In the HTML body, replace the `<HomeHeader>` block with:

```html
<HomeHeader title={`#${tag}`} description={meta.seoDescription} />
<p class="text-xl text-gray-700 max-w-2xl mb-6">{meta.intro}</p>
```

Remove the `description` variable declaration — it is now unused.

---

## Step 2 — Events pagination (`src/pages-events/page/[page].astro`)

**Goal:** Fix the generic title and description. Add a city intro and FAQ on page 1.

**Title and description** — replace inside `<head>`:

```html
<BaseHead
  title={`Upcoming Events in Chattanooga, TN${page.currentPage > 1 ? ` — Page ${page.currentPage}` : ''} | Things Happening`}
  description={`Browse upcoming events in Chattanooga, TN. Live music, outdoor adventures, food, comedy, and more. Page ${page.currentPage} of ${page.lastPage}.`}
/>
```

**Intro block** — below `<SubNav />`, add this conditional block:

```html
{page.currentPage === 1 && (
  <div class="max-w-3xl mt-6 mb-2 text-xl text-gray-700 space-y-3">
    <p>Chattanooga has events most days of the week. Live music runs nearly every night. Outdoor events follow the river and the ridgeline. Comedy, theater, food pop-ups, and community gatherings fill the rest of the calendar.</p>
    <p>This page lists all upcoming events sorted by date. Use the nav above to filter by time window, or visit the <a href="/chattanooga/events/tags" class="underline hover:text-customGreen1">tags page</a> to browse by activity.</p>
  </div>
)}
```

**FAQ section** — after the card grid `<section>` and before `<Paginator>`, add this conditional FAQ block:

```html
{page.currentPage === 1 && (
  <section class="mt-16 max-w-3xl">
    <h2 class="text-3xl font-bold mb-6" style="font-family: 'Libre Baskerville', serif;">FAQ<span class="text-customGreen1">.</span></h2>
    <div class="space-y-6 text-xl text-gray-800">
      <div>
        <h3 class="text-2xl font-semibold mb-1">How often does this page update?</h3>
        <p>The event calendar rebuilds daily. New events are added as vendors publish them.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-1">How do I find events by type?</h3>
        <p>Use the <a href="/chattanooga/events/tags" class="underline hover:text-customGreen1">tags page</a> to browse by genre — music, outdoors, comedy, food, and more.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-1">Can I save events to check later?</h3>
        <p>Yes. Click the star on any event card. Your saved events appear on the <a href="/chattanooga/my-favorites" class="underline hover:text-customGreen1">My Favorites</a> page.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-1">Are there events in nearby towns?</h3>
        <p>Yes. The <a href="/chattanooga/events/nearby" class="underline hover:text-customGreen1">nearby cities</a> page covers events in Cleveland, Ringgold, Ooltewah, and other towns close to Chattanooga.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-1">Is Things Happening free?</h3>
        <p>Yes. No login, no subscription, no paywall.</p>
      </div>
    </div>
  </section>
)}
```

Also add the FAQPage schema inside `<head>`, gated on `page.currentPage === 1`:

```html
{page.currentPage === 1 && (
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How often does this page update?", "acceptedAnswer": { "@type": "Answer", "text": "The event calendar rebuilds daily. New events are added as vendors publish them." } },
      { "@type": "Question", "name": "How do I find events by type?", "acceptedAnswer": { "@type": "Answer", "text": "Use the tags page at thingshappening.com/chattanooga/events/tags to browse by genre — music, outdoors, comedy, food, and more." } },
      { "@type": "Question", "name": "Can I save events to check later?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Click the star on any event card. Saved events appear on the My Favorites page." } },
      { "@type": "Question", "name": "Are there events in nearby towns?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The nearby cities page covers events in Cleveland, Ringgold, Ooltewah, and other towns close to Chattanooga." } },
      { "@type": "Question", "name": "Is Things Happening free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. No login, no subscription, no paywall." } }
    ]
  })} />
)}
```

---

## Step 3 — Homepage (`src/pages/index.astro`)

**Goal:** Add a FAQ section with schema. Expand the city description paragraph.

**Expand the intro paragraph** — the current paragraph starting "Chattanooga has a full calendar..." is 4 sentences. Expand to 6-8 sentences by adding:
- One sentence about neighborhoods (Southside, North Shore, St. Elmo, Downtown)
- One sentence about the river/outdoor scene
- Keep all existing sentences

**FAQ section** — add after the `</section>` closing tag and before `</main>`:

```html
<section class="mt-16 max-w-3xl text-xl text-gray-800">
  <h2 class="font-jakarta font-bold text-3xl mb-6">Common questions<span class="text-customGreen1">.</span></h2>
  <div class="space-y-6">
    <div>
      <h3 class="text-2xl font-semibold mb-1">What cities does Things Happening cover?</h3>
      <p>Things Happening currently covers Chattanooga, TN and nearby towns including Cleveland, Ringgold, and Ooltewah. More cities are coming.</p>
    </div>
    <div>
      <h3 class="text-2xl font-semibold mb-1">How do I find events in Chattanooga?</h3>
      <p>Go to the <a href="/chattanooga" class="underline hover:text-customGreen1">Chattanooga page</a>. You can filter by date window, search by keyword, or use <a href="/chattanooga/events/tags" class="underline hover:text-customGreen1">tags</a> to browse by activity.</p>
    </div>
    <div>
      <h3 class="text-2xl font-semibold mb-1">Is there a cost to use this site?</h3>
      <p>No. Things Happening is free. No login required.</p>
    </div>
    <div>
      <h3 class="text-2xl font-semibold mb-1">How current is the event calendar?</h3>
      <p>The calendar rebuilds daily. Most events are added within a day or two of being announced.</p>
    </div>
    <div>
      <h3 class="text-2xl font-semibold mb-1">Can I suggest an event or venue?</h3>
      <p>Yes. Email <a href="mailto:jack@thingshappening.com" class="underline hover:text-customGreen1">jack@thingshappening.com</a> with the details.</p>
    </div>
  </div>
</section>
```

Add FAQPage JSON-LD inside `<head>` alongside the existing schema (extend the `@graph` array):

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What cities does Things Happening cover?", "acceptedAnswer": { "@type": "Answer", "text": "Things Happening currently covers Chattanooga, TN and nearby towns including Cleveland, Ringgold, and Ooltewah. More cities are coming." } },
    { "@type": "Question", "name": "How do I find events in Chattanooga?", "acceptedAnswer": { "@type": "Answer", "text": "Go to thingshappening.com/chattanooga. Filter by date window, search by keyword, or use tags to browse by activity." } },
    { "@type": "Question", "name": "Is there a cost to use this site?", "acceptedAnswer": { "@type": "Answer", "text": "No. Things Happening is free. No login required." } },
    { "@type": "Question", "name": "How current is the event calendar?", "acceptedAnswer": { "@type": "Answer", "text": "The calendar rebuilds daily. Most events are added within a day or two of being announced." } },
    { "@type": "Question", "name": "Can I suggest an event or venue?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Email jack@thingshappening.com with the details." } }
  ]
}
```

---

## Step 4 — Chattanooga city index (`src/pages/chattanooga/index.astro`)

**Goal:** Add a FAQ section at the bottom of the page, above `<Footer />`.

Add this after the last `</article>` and before `<Paginator>`:

```html
<section class="w-full px-4 md:px-8 lg:px-16 mt-16 pb-12">
  <div class="max-w-3xl">
    <h2 class="font-jakarta font-bold text-3xl mb-6">Common questions<span class="text-customGreen1">.</span></h2>
    <div class="space-y-6 text-xl text-gray-800">
      <div>
        <h3 class="text-2xl font-semibold mb-1">What neighborhoods does this cover?</h3>
        <p>This site covers events and spots across Chattanooga — Downtown, North Shore, Southside, St. Elmo, East Brainerd, Red Bank, and surrounding areas.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-1">How do I find outdoor things to do?</h3>
        <p>Browse the <a href="/chattanooga/events/tag/outdoors" class="underline hover:text-customGreen1">outdoors tag</a> for upcoming events, or read the <a href="/chattanooga/guides/tag/outdoors" class="underline hover:text-customGreen1">outdoors guides</a> for trails, parks, and water access points.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-1">Where can I find live music this weekend?</h3>
        <p>Check the <a href="/chattanooga/events/this-weekend" class="underline hover:text-customGreen1">this weekend</a> filter and use the <a href="/chattanooga/events/tag/music" class="underline hover:text-customGreen1">music tag</a> to narrow it down.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-1">Are guides free to download?</h3>
        <p>Yes. PDF versions of guides are free. No email required.</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold mb-1">How often does the event calendar update?</h3>
        <p>The calendar rebuilds every day. Check back often — events get added as they are announced.</p>
      </div>
    </div>
  </div>
</section>
```

Add FAQPage schema to the existing `@graph` array in the `<head>` JSON-LD block.

---

## Step 5 — My Favorites (`src/pages/chattanooga/my-favorites.astro`)

**Goal:** Add a static intro above the dynamic content. This page is client-side only — the visible content cannot be crawled. A static intro gives search engines something to index.

Replace the current `<p class="text-xl mt-2 opacity-80">` subtitle with:

```html
<p class="text-xl mt-2 opacity-80">Your saved events and guide items, stored in your browser.</p>
<div class="text-lg text-gray-700 mt-4 max-w-2xl space-y-2">
  <p>Star any event or guide item to save it here. Your favorites stay saved between visits. Nothing is stored on a server — it all lives in your browser's local storage.</p>
  <p>To save an event, click the star icon on any event card. To save a guide item, click the star on any item inside an <a href="/chattanooga/guides/tag/interactive" class="underline hover:text-customGreen1">interactive guide</a>.</p>
</div>
```

---

## Step 6 — About page (`src/pages/about.mdx`)

**Goal:** Expand each section from 1-2 sentences to 3-4. Add a FAQ section at the end.

For each `<h2>` section, read the current text and expand it — add 1-2 sentences that give a concrete example or practical detail. Keep the same heading structure.

Then add this FAQ section before the contact line:

```html
<h2 class="font-jakarta font-bold text-3xl mt-4 mb-2">FAQ<span class="text-customGreen1">.</span></h2>

<h3 class="text-2xl mt-4 mb-1">How do I get my event listed?</h3>
<span class="block pb-3">Email <a href="mailto:jack@thingshappening.com">jack@thingshappening.com</a> with the event name, venue, date, time, and a link. We review and add qualifying events within a day or two.</span>

<h3 class="text-2xl mt-4 mb-1">What kinds of events do you cover?</h3>
<span class="block pb-3">Live music, outdoor events, theater, comedy, food and drink events, markets, community gatherings, and sports. We do not cover private events or paid promotions.</span>

<h3 class="text-2xl mt-4 mb-1">Do you cover events outside Chattanooga?</h3>
<span class="block pb-3">Yes. The <a href="/chattanooga/events/nearby">nearby cities page</a> covers towns within about an hour of Chattanooga — Cleveland, Ringgold, Ooltewah, and others.</span>

<h3 class="text-2xl mt-4 mb-1">How is this site funded?</h3>
<span class="block pb-3">Things Happening is self-funded. There are no ads. It is a small independent project built and run by one person.</span>
```

---

## Step 7 — Verify and commit

Run `npx astro check` or check for obvious syntax errors in changed files.

Stage and commit:

```bash
git add src/pages/index.astro src/pages/about.mdx src/pages/chattanooga/index.astro src/pages/chattanooga/my-favorites.astro src/pages-tag-event/[tag].astro src/pages-events/page/[page].astro
git commit -m "feat: expand content depth on key page templates for SEO"
git push origin main
```
