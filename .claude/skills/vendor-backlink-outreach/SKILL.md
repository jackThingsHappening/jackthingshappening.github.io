---
name: vendor-backlink-outreach
description: Pick a vendor already on ThingsHappening.com, find a natural link placement on their site, and draft an outreach email offering a free newsletter mention + featured event post in exchange for a link back
argument-hint: [optional vendor slug]
---

You are drafting a backlink outreach email on behalf of ThingsHappening.com — a Chattanooga, TN events and guides site.

The pitch: the vendor links to their events page on ThingsHappening.com. In return, they get:
1. A free featured event post on the ThingsHappening.com homepage
2. A mention in the ThingsHappening newsletter (500+ opens per issue)

The newsletter is currently paused while the site builds its foundation. Frame it as an upcoming re-launch benefit — they get in early.

## Step 0 — Pick a vendor

If the user provided a vendor slug as an argument, use that vendor.

If no slug was provided:
1. Read `.claude/vendor-sources.json`.
2. Read `.claude/vendor-backlink-log.md` (create it if it does not exist — see log format below).
3. Find the first active vendor whose slug does NOT appear in the log.
4. Use that vendor.
5. Tell the user which vendor you selected before proceeding.

If all active vendors are already in the log, report that and stop.

## Step 1 — Build the link target URL

The vendor's events page on ThingsHappening.com follows this pattern:

```
https://thingshappening.com/chattanooga/events/[vendor-slug]/
```

Use the `slug` field from vendor-sources.json. This is the URL you want the vendor to link to.

## Step 2 — Find contact info

Fetch these pages in parallel:
- `https://[vendor-domain]/`
- `https://[vendor-domain]/contact`
- `https://[vendor-domain]/contact/`
- `https://[vendor-domain]/about`
- `https://[vendor-domain]/about-us`

Look for:
- A direct email address
- A contact form URL
- The name of an owner, marketing contact, or events manager

Record what you find. Note if none exists.

## Step 3 — Find a natural link placement

Fetch the vendor's sitemap if available:
- `https://[vendor-domain]/sitemap.xml`

From the sitemap or homepage navigation, identify 1-3 pages where a link to their ThingsHappening.com events page would fit naturally. Strong candidates:
- An "events" or "calendar" page
- A "visit us" or "plan your visit" page
- A footer section listing their social and web presence
- An "about" page with links to where they're featured online

Fetch each candidate page. For each, find the specific section where the link would fit and quote the surrounding text.

Pick the top placement. Note:
- Page URL
- Section name or heading
- Suggested anchor text (e.g. "See upcoming events on ThingsHappening.com")
- One sentence on why it fits

## Step 4 — Draft the pitch email

Write a short, direct email. Rules:
- STE writing style: sentences under 20 words, active voice, no filler phrases
- No em dashes
- Mention the specific page where the link would go — don't make them think
- Name both benefits clearly: free featured post on the site + newsletter mention (500+ opens)
- Frame the newsletter mention as an upcoming re-launch benefit — they lock it in now
- Keep the total email under 150 words
- Sign as Jack Byrum, jack@thingshappening.com

If the site only has a contact form, note that at the top so the user knows to paste it manually.

Example structure (adapt, do not copy verbatim):

---
Subject: Your events on ThingsHappening.com

Hi [Name or "there"],

We already list your events at [ThingsHappening URL]. A lot of Chattanooga locals use the site to find things to do.

I wanted to reach out about adding a link from your site back to your events page. In exchange, we'll give you a free featured post on our homepage and a mention in our newsletter when it re-launches (500+ opens last run).

The link would fit well on [specific page] under [specific section].

Let me know if you're interested.

Jack Byrum
jack@thingshappening.com
---

## Step 5 — Log the run

**Create `.claude/vendor-backlink-log.md` if it does not exist**, with this header:

```markdown
# Vendor Backlink Outreach Log

| Date | Vendor | Slug | Contact Method | Email Drafted | Contact URL |
|------|--------|------|----------------|---------------|-------------|
```

**Append a row** for this vendor:

```
| 2026-MM-DD | Vendor Name | vendor-slug | email@example.com / Contact Form / None | Yes | https://vendor.com/contact/ |
```

**Append a full entry** at the bottom of the file:

```markdown
## [Vendor Name] — 2026-MM-DD

**ThingsHappening URL:** https://thingshappening.com/chattanooga/events/[slug]/

**Contact:** email@example.com / contact form at https://vendor.com/contact/

**Placement:** [page URL] — [section] — "[anchor text]"

**Drafted message:**

Subject: [subject line]

[full email body]

---
```

## Step 6 — Report to user

Show:
- Vendor selected and their ThingsHappening URL
- Contact method found (or none)
- The placement page with rationale
- The full drafted email
- Confirmation that the log was updated
