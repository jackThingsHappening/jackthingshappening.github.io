# Things Happening — Claude Notes

## MDX HTML Rules

MDX is strict about HTML tag matching. Every edit that touches HTML in an MDX file must leave all tags balanced.

- When removing a block (e.g. a `<div class="pb-5">...</div>`), always remove both the opening AND closing tag together
- When adding new HTML, count opens and closes before writing
- Never remove just the inner content of a div and leave the shell — either keep the whole block or delete the whole block
- After any edit to an MDX file that touches HTML structure, mentally trace the open/close nesting before saving

Failure to do this causes MDX parse errors that break the entire page and require manual fixing.

## Research — Blocked Domains

These sites are competitors. Never fetch or cite them in research:

- `noogatoday.com` / `6amcity.com` (redirects there)
- `visitchattanooga.com`

When using WebSearch, always pass these as `blocked_domains`. If a search result only has sources from these domains, search again with different terms or note that no independent source was found.

## Writing Style — Simplified Technical English

All content written for this site must follow Simplified Technical English (STE) principles:

- Short sentences — 20 words or fewer
- Active voice only
- One idea per sentence
- One word, one meaning — do not use the same word to mean two different things
- No noun stacks (e.g. "event registration confirmation page" → "the page that confirms your registration")
- Simple, common words — if a simpler word exists, use it
- No filler phrases ("in order to", "it is important to note that", "please be aware")

This applies to guide copy, event descriptions, editorials, and any prose written into MDX files.

## Token Efficiency

When processing multiple MDX files in a batch, do not use Read+Edit per file — that doubles tool calls and burns tokens fast. Use a single Bash script with python3 to read and write all files in one pass. Reserve Read+Edit for single-file runs where precision matters.
