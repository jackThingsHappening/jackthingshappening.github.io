---
name: longform-to-interactive
description: Convert a longform guide into an interactive guide with pageItems, filters, place-description boxes, FAQ, and updated frontmatter.
argument-hint: <guide-slug>
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
  - WebSearch
  - WebFetch
---

You are converting a ThingsHappening longform guide into an interactive guide. The result must match the structure of existing interactive guides (e.g. `exhibits.mdx`, `breweries-and-wineries.mdx`).

## Step 0 — Load context

Get today's date: `date +%m/%d/%Y`

Read `.claude/guide-sources.json`. Find the entry whose `slug` matches `$ARGUMENTS`.

Extract: `slug`, `path`, `title`, `topic`

Read the full guide file at `path`.

Confirm the guide has `tag: "longform"` in its frontmatter tags. If it already has `tag: "interactive"`, print "Guide is already interactive." and stop.

Also read two existing interactive guides as structural anchors:
- `src/pages/chattanooga/guides/exhibits.mdx`
- `src/pages/chattanooga/guides/breweries-and-wineries.mdx`

---

## Step 1 — Extract items

Scan the longform guide body for every named venue, place, event, or attraction. These are the candidates for `pageItems`.

For each item, collect:
- **title** — the name as it appears in the guide (clean it up: remove numbering like "1.", fix odd capitalization)
- **address** — if mentioned in the guide body, note it; otherwise leave blank and you will infer it in Step 2
- **website** — from any existing `<a href>` links in the guide body for that item
- **description** — from the existing prose description in the guide body
- **category** — your read on what kind of place it is (venue, event, bar, festival, etc.)

If the guide has honorable-mention items listed in a paragraph without full descriptions, include them but mark them as needing a description written from scratch.

Print the full candidate list to the terminal before continuing.

---

## Step 2 — Build pageItems array

For each item from Step 1, build a structured `pageItem` object.

**title** — the clean name from Step 1

**description** — rewrite the existing prose in STE voice:
- 3–6 sentences, 20 words or fewer each
- Include: address if known, what makes it distinct, one practical detail (hours constraint, booking note, age policy, price, etc.)
- No marketing language, no em dashes, no filler phrases
- If an item had no description in the original (honorable mentions), write one using WebSearch or WebFetch on the venue's website. Use blocked domains rules (never fetch noogatoday.com, 6amcity.com, visitchattanooga.com)

**order** — sequential integer starting at 1, ordered to match the original guide's section order

**tags** — assign from the tag vocabulary below. Every item must have at least one type tag and one location tag.

**links** — array of link objects. Always include a Google Maps link. Include the website link if known.
- Google Maps format: `{text: "Google Maps", link: "https://www.google.com/maps/search/?api=1&query={URL-encoded name and address}", target: "_blank"}`
- Website format: `{text: "Website", link: "{url}", target: "_blank"}`

### Tag vocabulary

Derive tag categories from the content. Use what fits — do not force categories that don't apply.

**Common type tags** (use as a starting point, add others that fit this guide's content):
- `free` — no admission cost
- `kids` — good for families with children
- `outdoor` — primarily outdoors
- `indoor` — primarily indoors
- `seasonal` — only runs part of the year

**Location tags** — use neighborhood or area names that are meaningful for this guide. Examples from other guides:
- `downtown`, `northside`, `southside`, `north-chattanooga`, `east-chattanooga`, `lookout-mountain`, `near-georgia`, `day-trip`
- For events: `riverfront`, `ooltewah`, `east-ridge`

**Add guide-specific type tags** that reflect the content (e.g. for live music: `bars`, `festivals`, `recurring-events`, `larger-venues`, `bluegrass`, `jazz`).

---

## Step 3 — Determine filter categories

Review all tags assigned in Step 2. Group them into 2–4 filter categories that make sense for the guide topic. Examples from other guides:

- exhibits: Type / Format / Location
- breweries: Style / Location
- coffeeshops: Vibe / Location

Pick category names that match how a reader would think about filtering this content. Each category should have 3–6 filter buttons. Only create a filter button for a tag if at least 3 items carry that tag.

Print the proposed filter categories and their buttons before continuing.

---

## Step 4 — Determine place-description boxes

Place-description boxes appear when a filter is active. They give 3–5 sentence context about that filter category, plus 1–2 internal links to related guides.

Pick the 2–4 most important filter tags — the ones a reader is most likely to click. Write a place-description box for each.

Each box follows this structure:
```html
<div class="place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg" data-place="{tag}">
  <h2 class="text-3xl mb-2" style="font-family: 'Libre Baskerville', serif;">{Heading}<span class="color-pink ml-1"><b>.</b></span></h2>
  <p class="text-xl">{3–5 sentences, STE voice. Concrete context about this filter category in Chattanooga.}</p>
  <div class="flex flex-wrap gap-4 mt-4">
    <a href="/chattanooga/guides/{related-slug}" class="page-item-link text-logoDarkGreen underline">{Link text}</a>
  </div>
</div>
```

Read `guide-sources.json` to find relevant related guides. Only link to guides that are genuinely relevant.

---

## Step 5 — Write the intro prose

Write 4–6 short paragraphs for the intro block.

**What to cover:**
- What this guide covers, the count of items, and how they are organized
- One specific, verifiable local fact — a number, a name, a distinctive local detail that couldn't be written about any city
- 1–2 notable things the filters surface (name the filter and what it finds)
- The feedback invite: `If there is a [type] worth adding, <a href="mailto:jack@thingshappening.com">send an email</a>. Details change. Confirm before you go.`

**Voice rules:**
- STE: 20 words or fewer per sentence, active voice, no filler phrases, no em dashes
- Concrete and local, not promotional
- Do not restate the seoDescription

**HTML structure:**
```html
<div class="max-w-6xl mx-auto px-3">
  <div class="pb-5 pt-2">{First paragraph}</div>
  <div class="pb-5">{Subsequent paragraphs}</div>
  ...
</div>
```

---

## Step 6 — Write the FAQ

Write 4–6 Q&A pairs. Apply the same research and quality filter from the guide-deepen skill:

1. List candidate questions where the answer is covered in the guide but not prominently featured.
2. Use WebSearch to confirm real search demand. Query: `{question topic} Chattanooga`. Keep questions with both guide coverage AND search signal.
3. Skip generic questions (hours, price, location) that any venue would answer the same way.
4. Prefer questions where the answer is non-obvious.

**FAQ HTML:**
```html
<section class="max-w-6xl mx-auto px-3 pt-10 pb-10">
  <h2 class="text-4xl mb-6" style="font-family: 'Libre Baskerville', serif;">FAQ<span class="color-pink ml-1"><b>.</b></span></h2>
  <div class="mb-6">
    <h3 class="text-2xl mb-2">{Question}</h3>
    <p class="text-xl">{Answer — 2–4 sentences, STE voice, concrete and specific.}</p>
  </div>
  {repeat}
</section>
```

**FAQ JSON-LD** — add immediately before the FAQ section:
```html
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{Question text}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{Answer text}"
      }
    }
  ]
})} />
```

Blocked domains: never fetch or cite `noogatoday.com`, `6amcity.com`, `visitchattanooga.com`.

---

## Step 7 — Write the closing prose

Write a 2–4 sentence closing block that answers: "What do I do now that isn't covered in the main sections?"

Cover logistics or planning context not already stated elsewhere: how to combine spots in a single day, booking lead time, travel between areas, what else pairs well with this guide.

Include one internal link to a related guide if it fits naturally.

```html
<div class="pb-12 max-w-6xl mx-auto px-3">
  <div class="pb-3">{Sentence. Sentence.}</div>
  <div class="pb-3">{Sentence. Sentence. <a href="...">Link text</a>.}</div>
</div>
```

---

## Step 8 — Assemble the new MDX file

Assemble the complete file in this order:

### Frontmatter

Take the existing frontmatter and make these changes:
- Add `published: true`
- Add `geoCoverage` — a quoted string listing the geographic area covered. Example: `"Chattanooga, TN and nearby (East Ridge, Ooltewah, North Georgia)"`
- Remove `seoTitle` if present (interactive guides use `title` only)
- Remove any commented-out lines (lines starting with `#` inside the frontmatter)
- Change the `tags` array: replace `{type: "guide", tag: "longform"}` with `{type: "guide", tag: "interactive"}`. Keep any other existing guide tags.
- Add `pageItems: [...]` — the full array from Step 2
- Add `itemTemplate: {title: "", order: {N+1}, description: "", links: [{text: "More Information", link: ""}], tags: []}` where N is the count of items

### Imports

```js
import OptimizedImage from '../../../components/OptimizedImage.astro';
import PageItemsFromFrontmatter from '../../../components/PageItemsFromFrontmatter.astro';
```

Remove any import for PDF download (the longform PDF download link block) — interactive guides do not have this.

### JSON-LD ItemList schema

```html
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "{Guide title}",
  "description": "{seoDescription value}",
  "numberOfItems": (frontmatter.pageItems || []).length,
  "url": "https://thingshappening.com/chattanooga/guides/{slug}",
  "itemListElement": (frontmatter.pageItems || []).map(item => ({
    "@type": "ListItem",
    "position": item.order,
    "item": {
      "@type": "LocalBusiness",
      "name": item.title,
      "url": (item.links || []).find(l => l.text === "Website")?.link || (item.links || [])[0]?.link || ""
    }
  }))
})} />
```

Adjust `"@type"` inside `item` to match the content:
- Venues/bars → `"LocalBusiness"`
- Museums/exhibits → `"Museum"`
- Events/festivals → `"Event"`
- Mixed content → `"Thing"`

### Body order

1. Intro prose block (Step 5)
2. `{/* TODO: Add embedded Google Maps iframe here */}` comment — skip the map block; note it for the user to add manually
3. Filter section (`<section id="guide-filters" ...>`) built from Step 3
4. Place-description container (`<div id="place-descriptions-container" ...>`) with boxes from Step 4
5. PageItemsFromFrontmatter:
   ```html
   <section class="text-xl">
     <div>
       <PageItemsFromFrontmatter pageItems={frontmatter.pageItems} showClearFilters={true} />
     </div>
   </section>
   ```
6. Closing prose (Step 7)
7. FAQ JSON-LD + FAQ section (Step 6)
8. Other Guides section — reuse the existing Other Guides block from the longform guide unchanged. If none exists, omit it.
9. Back link:
   ```html
   <p class="mt-8 pt-6 border-t border-gray-200 text-lg">
     <a href="/chattanooga/guides/things-to-do" class="underline hover:text-customGreen1">&larr; All things to do in Chattanooga</a>
   </p>
   ```

**HTML tag balance check:** Before writing, trace every open tag and confirm it has a matching close. MDX is strict — an unbalanced tag breaks the entire page.

Write the assembled file using Write, overwriting the existing guide file at `path`.

---

## Step 9 — Update guide-sources.json

Update the guide's `title` field in `guide-sources.json` to reflect the interactive format. Example: `"A Sheet for Chattanooga Live Music"` → `"An Interactive Guide to Chattanooga Live Music"`. Use judgment — if the existing title already fits an interactive guide, leave it.

Set `last_deepened` to today's date in `YYYY-MM-DD` format.

Write the updated JSON back using Write.

---

## Step 10 — Report

Print a summary:
- Items extracted: count and titles
- Tags used: list of all unique tags and how many items each covers
- Filter categories and buttons built
- Place-description boxes written: which tags got boxes
- FAQ: questions written
- File written: path
- guide-sources.json: fields updated
- Next step: remind the user to add an embedded Google Maps iframe to the guide
