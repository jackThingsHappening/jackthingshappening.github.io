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
  - Bash(python3 *)
---

# /humanize — Rewrite content to match site voice

Arguments passed: `$ARGUMENTS`

## Purpose

Rewrite the prose portions of MDX content files to match the consistent voice of this site. Only human-readable text is touched — never frontmatter structure, MDX components, script tags, or interactive filter markup.

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

- **event** — frontmatter contains `pubDate` and `venue`
- **guide** — frontmatter contains `pageItems`
- **editorial** — frontmatter contains `readTime` but no `pageItems`
- If ambiguous, use file path: `events/` → event, `guides/` → guide, `editorials/` → editorial

---

## What to rewrite per content type

### Event
Rewrite only the body text (everything after the closing `---` of frontmatter). Do not touch any frontmatter fields.

### Guide (interactive)
Rewrite the `description` value for each entry in the `pageItems` frontmatter array. Also rewrite any prose paragraphs in the body (intro text, `<div>` text blocks). Do not touch titles, tags, links, or filter markup.

### Editorial
Rewrite all prose paragraphs in the body. Do not touch frontmatter, script tags, import statements, or JSX component usage.

---

## Voice rules

1. **Concrete over emotional.** Describe what a thing is or does — not how it is supposed to make you feel. Strip: *dazzling, breathtaking, vibrant, stunning, incredible, amazing, charming, magical, unforgettable, perfect*.

2. **Specifics over superlatives.** "One of the best" and "incredible" carry no information. Name the detail that earns the claim. Strip: *one of the city's finest, a true X, gem of*.

3. **Write for a local, not a brochure.** Get to the point. Strip orientation framing: *nestled in, tucked away, heart of the city*.

4. **No urgency bait.** The description earns the visit — the warning doesn't. Strip: *don't miss, you won't want to skip, must-see, must-try, be sure to*.

5. **Don't open with a label.** Never start with "[Name] is a [type of thing]." Lead with the texture of the night. "A night of darkwave at Barrelhouse" beats "CRIMEWAVE is a recurring darkwave night."

6. **No hyphens joining words in prose.** Write them as two words or one: all ages, wood fired, drive thru. Never: *all-ages, wood-fired, drive-thru*.

7. **No em dashes.** Never use — to connect clauses. Replace with a comma or split into two sentences. In `pageItems` titles and descriptions, eliminate the separator entirely — rewrite to remove the need for it.

8. **No empty intensifiers.** Strip: *truly, really, absolutely, definitely, so much, pairs well with, is a great place to, is perfect for, is ideal for*.

9. **STE (Simplified Technical English).** 20 words or fewer per sentence. Active voice only. One idea per sentence. Simple words. No filler phrases ("in order to", "it is important to note that"). If a sentence needs a second comma, split it.

10. **Vary sentence length.** Mix short punchy sentences with longer ones. Three sentences of the same length in a row reads mechanical.

11. **Fun words when they fit.** When the context genuinely calls for it, reach for: smorgasbord, shenanigans, hodgepodge, gnarly, malarkey. One well placed word beats none. One forced word kills the sentence.

12. **Match length to type.** Events: minimum 35 words, 1–4 sentences. Guide `description` entries: 1–4 sentences. Editorials: natural prose length, tighter than the original where possible.

---

## What NOT to change

- All frontmatter fields except: `pageItems[].description` in guides (rewrite it) and `lastUpdated` in guides (update to today's date in MM/DD/YYYY format when edits are made)
- Titles, slugs, tags, dates, addresses, costs, links

---

## Process

**Token efficiency — do not use Read+Edit per file.** When processing multiple files, use a single Bash script with python3 to write all files in one pass. Reserve Read+Edit for single-file runs only.

For each file:
1. Extract body text and frontmatter via Bash (python3) — do not use the Read tool for batch runs
2. Detect content type from frontmatter fields or file path
3. Rewrite the rewritable regions applying the voice rules
4. Write back via a single Bash python3 script, or output to terminal

---

## Report

After processing all files, print a summary:
- Files processed and content type detected
- Sections rewritten per file
- Any files skipped (undetectable type, no prose found, already clean)
