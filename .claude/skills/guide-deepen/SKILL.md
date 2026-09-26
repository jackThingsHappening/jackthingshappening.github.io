---
name: guide-deepen
description: Structural overhaul of a guide — longer intro, interlink audit, filter audit, longer closing, FAQ, and a Facebook post draft. Runs independently of the refresh-guides maintenance pipeline.
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

You are running a structural overhaul of a ThingsHappening interactive guide. This skill focuses on depth and SEO improvements. It does not add new list items (that is `guide-update`'s job) and does not run a full fact-check (that is `guide-validate`'s job).

## Step 0 — Load context

Get today's date: `date +%m/%d/%Y`

Read `.claude/guide-sources.json`. Find the entry whose `slug` matches `$ARGUMENTS`.

Extract:
- `slug`
- `path` — the guide file
- `title` — used for context
- `topic` — used for research

Read the full guide file at `path`.

Also read all other entries in `guide-sources.json` to build an interlink map: `slug → title` for every guide that is not the current one.

---

## Step 1 — Lengthen the intro

**Goal:** Expand the intro section to 200-300 words across 4-6 `<div>` blocks. The current intro is typically 2-3 very short divs.

**What to write:**
- What this guide covers and how it is organized
- What makes Chattanooga's scene for this topic worth knowing about
- How the filters help (name 1-2 specific filters and what they help you find)
- The feedback / contact invite (keep this — it is usually the last intro div)

**What NOT to write:**
- Marketing language or superlatives
- Anything that belongs in a list item description
- Redundant info already in the `seoDescription` frontmatter

**Voice rules — STE:**
- 20 words or fewer per sentence
- Active voice only
- No filler phrases
- No em dashes
- Concrete and local, not promotional

**HTML:**
The intro block is wrapped in `<div class="max-w-6xl mx-auto px-3">`. Each paragraph is a `<div class="pb-5">` or `<div class="pb-5 pt-2">` (first one). Keep that structure. Never leave an open tag without a matching close. Count opens and closes before writing.

Before writing, read the intro blocks from 2 other guides in `src/pages/chattanooga/guides/` as style anchors. Pick guides that have been recently updated (check `lastUpdated` frontmatter). Use their tone and sentence structure as a reference — not their content.

Find the existing intro block in the guide. Replace it in place using Edit.

---

## Step 2 — Interlink audit

**Goal:** Add 2-4 internal links to other guides where the content is genuinely relevant. Bias toward adding more links, not fewer.

**Where to look:**
1. **Intro prose** — are there natural spots to reference a related guide?
2. **Place-description boxes** (`data-place="..."` divs) — each one has a `<div class="flex flex-wrap gap-4 mt-4">` for links. Add links where missing or where a related guide fits.
3. **Closing prose** — can a nearby guide be referenced naturally?
4. **pageItems descriptions** — some already have `_self` links. Add 1-2 more if a description mentions something covered in another guide.

**Rules:**
- Only link to guides that are genuinely relevant to the item or section
- Use the guide's title as the link text — keep it plain, no marketing framing
- Internal links use `target: "_self"` in pageItems, or plain `href="/chattanooga/guides/{slug}"` in body prose
- Do not add more than 2 links per place-description box
- Do not link the same guide twice in the same section

Available guides (from `guide-sources.json`): use the slug-to-title map you built in Step 0.

Make each edit in place using Edit. Do not batch all interlink changes into one Edit call if they touch different sections of the file — use separate Edit calls per location to stay precise.

---

## Step 3 — Filter audit

**Goal:** Ensure the filter UI reflects the data, and add 1-2 new filters where there is a clear gap.

### Part A — Orphan tag check

Extract all unique tag values from the `pageItems` array in frontmatter. Compare them against the filter buttons in `<section id="guide-filters">`. A tag is an orphan if:
- It appears on 3 or more items, AND
- No filter button exists for it in the HTML

For each orphan tag, add a filter button in the most relevant existing category. Follow the exact button HTML pattern used by surrounding buttons:

```html
<a href="/chattanooga/guides/{slug}?tags={tag}" class="clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline" style="background-color: #1a4d2e;" data-tag="{tag}">{Label}</a>
```

Use a plain, readable label (e.g. tag `pet-friendly` → label `Pet friendly`). Insert the button inside the matching category's `<div class="flex flex-wrap gap-3">`. Use Edit, one insertion per category touched.

### Part B — New tag candidates

Read all pageItem descriptions. Look for attributes that appear across multiple items but are not tagged at all. Good candidates: `outdoor-seating`, `pet-friendly`, `reservations-required`, `free`, `byob`, `cash-only`, `kid-friendly`.

For each candidate:
1. Count how many items likely qualify based on their description
2. Only proceed if 3 or more items qualify
3. For each qualifying item, confirm the attribute is mentioned in the description or is verifiable from the item's linked website (use WebFetch if needed — do not guess)
4. If confirmed: add the tag to each qualifying item AND add a filter button (Part A rules apply)

**Cap:** Add at most 2 new tag categories per run. Quality over coverage.

**Tag update method:** Use a python3 Bash script to add tags to the frontmatter `pageItems` array. Do not use repeated Edit calls for bulk tag changes — that doubles tool calls on large guides. The script should:
- Read the file
- Find each `pageItem` entry that needs the new tag (match by `title`)
- Append the tag to its `tags` list
- Write the file back

Verify the output looks correct before writing. Never remove existing tags.

### Part C — Dead button check

Check if any filter buttons in the HTML reference a tag that appears on zero items. If so, remove that button. Use Edit.

---

## Step 4 — Lengthen the closing

**Goal:** Replace the short closing paragraph with a 100-150 word block that gives a local context hook or practical tip.

The closing block is typically:
```html
<div class="pb-12 max-w-6xl mx-auto px-3">
  <div class="pb-3">Short sentence. Short sentence.</div>
</div>
```

**What to write:**
- A practical note relevant to the topic (e.g. for coffee: what to do if you want beans to take home; for outdoors: what to do if you want a guided experience)
- A note on how the guide is maintained (updated regularly, send feedback)
- Can include one internal link to a related guide if it fits naturally

**Voice:** Same STE rules as Step 1. No em dashes.

Replace the closing block in place using Edit.

---

## Step 5 — Add or update FAQ

**Goal:** Add a FAQ section with 4-6 Q&A pairs. If a FAQ already exists in the guide, review it and update stale answers or add a missing question.

**Research:**
Use WebSearch to find common questions people ask about the guide's topic in Chattanooga. Look for:
- "best [topic] in Chattanooga"
- "where to [topic] in Chattanooga"
- "[topic] Chattanooga TN"

Pick 4-6 questions a visitor or new resident would actually ask. Write direct, specific answers based on what is in the guide.

**Blocked domains — never fetch or cite:**
- `noogatoday.com` / `6amcity.com`
- `visitchattanooga.com`

**FAQ HTML structure:**

```html
<section class="max-w-6xl mx-auto px-3 pt-10 pb-10">
  <h2 class="text-4xl mb-6" style="font-family: 'Libre Baskerville', serif;">FAQ<span class="color-pink ml-1"><b>.</b></span></h2>

  <div class="mb-6">
    <h3 class="text-2xl mb-2">{Question}</h3>
    <p class="text-xl">{Answer — 2-4 sentences, STE voice, concrete and specific.}</p>
  </div>

  {repeat for each Q&A pair}
</section>
```

**FAQ JSON-LD:**

Add a `<script type="application/ld+json">` block immediately before the FAQ section with FAQPage schema:

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

**Where to insert:** Between the closing `</div>` of the closing block (Step 4) and the `<section class="pt-10 pb-10">` Other Guides section.

Check if a FAQ section already exists. If it does, update it rather than adding a duplicate.

---

## Step 6 — Humanize the new prose

Apply the site voice rules to everything written in Steps 1, 4, and 5:

1. Concrete over emotional
2. Specifics over superlatives
3. Write for a local, not a brochure
4. No urgency bait
5. No em dashes
6. STE: 20 words or fewer per sentence, active voice, no filler phrases

Do not touch existing pageItem descriptions or existing prose you did not write in this run.

---

## Step 7 — Update lastUpdated

Update the `lastUpdated` frontmatter field to today's date in MM/DD/YYYY format.

---

## Step 8 — Draft a Facebook post

Write a Facebook post promoting this guide. Follow the fb-post style rules:

- 15-50 words
- No emojis, no hashtags, no em dashes
- Write like a local, not a marketer
- Include the guide URL: `https://thingshappening.com/chattanooga/guides/{slug}`
- Lead with a specific item, a filter, or a use case from the guide — not a generic "check out our guide" opener

Output the draft post to the terminal. Tell the user to run `/fb-post guide {slug}` to schedule it.

---

## Step 9 — Report

Print a summary:
- Intro: word count before and after
- Interlinks added: location and target guide
- Filters: orphan tags surfaced, new tags added, dead buttons removed
- Closing: word count before and after
- FAQ: questions added or updated
- lastUpdated: new value
- Facebook post draft: printed inline
