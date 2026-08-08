---
name: humanize
description: Rewrite prose in MDX content files to match the site's voice — concrete, local, direct. Works on events, interactive guides, and editorials.
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Bash(git diff --name-only *)
  - Bash(git status *)
  - Bash(find *)
---

# /humanize — Rewrite content to match site voice

Arguments passed: `$ARGUMENTS`

## Purpose

Rewrite the prose portions of MDX content files to match the consistent voice of this site. Frontmatter structure, MDX components, script tags, and interactive filter markup are never touched — only human-readable text.

---

## Argument parsing

Parse `$ARGUMENTS` (space-separated tokens):

**Source (pick one, in priority order):**
- A path ending in `.mdx` → single file
- A directory path or glob → all matching `.mdx` files
- No file arg → fall back to git-modified `.mdx` files (`git diff --name-only` + untracked)

**Content type (optional):**
- `event` | `guide` | `editorial` → use this type for all files processed
- Omitted → auto-detect per file (see Detection below)

**Output mode (optional):**
- `output:terminal` → print rewritten content to terminal, do not write files
- `output:source` → write rewrites back to the source files
- Omitted → default to `output:terminal`

---

## Content type detection

If content type is not passed as an argument, detect it from the file:

- **event** — frontmatter contains `pubDate` and `venue`
- **guide** — frontmatter contains `pageItems`
- **editorial** — frontmatter contains `readTime` but no `pageItems`
- If ambiguous, use file path: `events/` → event, `guides/` → guide, `editorials/` → editorial

---

## What to rewrite per content type

### Event
Rewrite only the body text (everything after the closing `---` of frontmatter). This is typically 1–3 sentences. Do not touch any frontmatter fields.

### Guide (interactive)
Rewrite the `description` value for each entry in the `pageItems` frontmatter array. Also rewrite any prose paragraphs in the body (intro text, `<div>` text blocks). Do not touch titles, tags, links, or filter markup.

### Editorial
Rewrite all prose paragraphs in the body. Do not touch the frontmatter, script tags, import statements, or JSX component usage.

---

## Voice rules

Apply all of the following when rewriting:

1. **Concrete over emotional.** Use observational, specific language — not how something is supposed to make you feel. Describe what something is or does. "You'll be dazzled" → describe the actual thing.

2. **Specifics over superlatives.** "One of the best" and "incredible" carry no information. Name the detail that earns the claim. "Best pizza in Chattanooga" → "wood-fired, done in 90 seconds."

3. **Write for a local, not a brochure.** Drop orientation framing ("nestled in the heart of...", "a gem of the city"). Get to the point like you're texting a friend who lives here.

4. **No urgency bait.** Cut "don't miss this," "you won't want to skip," "a must-see." If the thing is worth going to, the description earns that — the warning doesn't.

5. **Don't open with a label.** Never start with "[Name] is a [type of thing]." Lead with the texture of the night, not a definition. "A night of darkwave at Barrelhouse" beats "CRIMEWAVE is a recurring darkwave night."

6. **Simplified Technical English (STE).** Apply all STE rules when rewriting prose:
   - 20 words or fewer per sentence
   - Active voice only
   - One idea per sentence
   - One word, one meaning — do not use the same word to mean two different things
   - No noun stacks (e.g. "event registration confirmation page" → "the page that confirms your registration")
   - Simple, common words — if a simpler word exists, use it
   - No filler phrases ("in order to", "it is important to note that", "please be aware")
   - If a sentence needs a second comma, split it into two sentences

7. **Use fun words when they fit naturally.** Don't force it — but when the context genuinely calls for it, reach for words like: hodgepodge, smorgasbord, medley, mishmash, gumbo, rummage, ragbag, discombobulate, dilly dally, shenanigans, flabbergasted, tomfoolery, bamboozled, bodacious, buckaroo, skedaddle, canoodle, doohickey, diabolical, fiddlesticks, groovy, gambit, gnarly, hooligan, imbecile, lollygagging, malarkey, maverick, nefarious, requiem. One well placed word is better than none; one forced word kills the sentence.

6. **Match length to type.** Event bodies: minimum 35 words, 1–4 sentences. Guide `description` entries: 1–4 sentences. Editorial paragraphs: natural prose length, but tighter than the original where possible.

---

## Anti-patterns to strip

When you encounter these, rewrite without them:

- Emotional adjectives: *dazzling, breathtaking, vibrant, stunning, incredible, amazing, charming, magical, unforgettable, perfect*
- Brochure framing: *nestled in, tucked away, heart of the city, gem of, a true X, one of the city's finest*
- Urgency bait: *don't miss, you won't want to skip, must-see, must-try, be sure to*
- Empty intensifiers: *truly, really, absolutely, definitely, so much*
- Passive enthusiasm: *is a great place to, is perfect for, is ideal for* (replace with a specific claim)
- Hyphens in prose: never use hyphens to join words (all-ages, wood-fired, drive-thru, etc.) — write them as two words or one word instead
- Em dashes as clause connectors: never use — to connect clauses. Replace with a comma or split into two sentences.
- Em dashes in pageItems: never use — anywhere in a pageItem title or description (e.g. "Mean Mug Coffeehouse — North Shore" is wrong). Use a comma, parentheses, or rewrite to eliminate the separator entirely.
- Overly formal combinations: *pairs well with* → use "works well with" or rewrite as a direct suggestion

---

## What NOT to change

- Frontmatter field names or values (except `pageItems[].description` in guides, and `lastUpdated` in guides — see below)
- MDX import statements
- `<script>` blocks and JSON-LD
- JSX component tags and their props
- Filter/tag markup, links, anchor tags
- Titles, slugs, tags, dates, addresses, costs

---

## Process

**Guide lastUpdated:** When any edits are made to a guide file, update the `lastUpdated` frontmatter field to today's date in MM/DD/YYYY format.

**Token efficiency — do not use Read+Edit per file.** When processing multiple files, use a single Bash script with python3 to write body text directly. Read+Edit doubles tool calls (one read, one edit per file) and burns tokens fast on large batches. Reserve Read+Edit only for single-file runs where precision matters.

For each file:
1. Extract body text and frontmatter via Bash (e.g. `awk` or `python3`) — do not use the Read tool for batch runs
2. Detect content type from frontmatter fields or file path
3. Rewrite the rewritable regions applying the voice rules
4. Write back via a single Bash python3 script for the whole batch, or output to terminal

---

## Report

After processing all files, print a summary:
- Files processed and content type detected
- Sections rewritten per file
- Any files skipped (undetectable type, no prose found, already clean)
