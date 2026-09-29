---
name: backlink-outreach
description: Research a target website, find natural link placement pages, draft a $150 paid backlink pitch, and log everything to the outreach files
argument-hint: <target website URL>
---

You are researching a website for a paid backlink opportunity on behalf of ThingsHappening.com — a Chattanooga, TN events and guides site.

## Step 1 — Load the sources log

Read `.claude/backlink-sources.md`. Check if the target domain is already listed. If it is, stop and report the existing status to the user.

## Step 2 — Find contact info

Fetch the target site's homepage and contact page. Look for:
- A direct email address
- A contact form URL
- Social media links that could substitute for direct contact

Record whatever you find — or note that none exists.

Fetch these URLs in parallel:
- `https://<domain>/`
- `https://<domain>/contact`
- `https://<domain>/contact/`
- `https://<domain>/about`

## Step 3 — Find natural link placement pages

Fetch the sitemap to get a full page list:
- `https://<domain>/sitemap.xml`
- `https://<domain>/post-sitemap.xml` (if sitemap index)

From the page list, identify candidates where a link to ThingsHappening.com would fit without feeling forced. Strong candidates:
- Weekend guides or day trip content near Chattanooga / North Georgia / Tennessee
- Events or festival roundups for the region
- "Things to do" or activity guides near the GA/TN border
- Pages mentioning Lookout Mountain, Cloudland Canyon, or other cross-border landmarks

Fetch 3-5 candidate pages. For each, find the specific sentence or section where a link would fit and quote the surrounding text.

Pick the top 3 placements. For each, note:
- Page URL
- Section name or heading
- Exact suggested anchor text
- One sentence describing why it fits

## Step 4 — Draft the pitch email

Write a short, direct pitch. Follow these rules:
- STE writing style: sentences under 20 words, active voice, no filler phrases
- No em dashes
- Name the specific pages and placements so they don't have to do any work
- Offer $150 for one link on one of the three pages
- Offer payment via PayPal or Venmo once the link is live
- Sign as Jack Byrum, jack.t.burum@gmail.com

If the site only has a contact form (no email), note that at the top of the draft so the user knows to paste it into the form.

## Step 5 — Log the run

**Update `.claude/backlink-sources.md`**

Append a row to the table:

```
| 2026-MM-DD | domain.com | Contact Form / email@example.com / None | Yes | https://domain.com/contact/ |
```

Columns: Date | Domain | Contact method | Email drafted (Yes/No) | Contact URL

**Append to `.claude/backlink-email-log.md`**

Add a new entry at the bottom:

```markdown
## domain.com — 2026-MM-DD

**Contact:** contact form at https://domain.com/contact/

**Placement pages:**
1. URL — section — anchor text
2. URL — section — anchor text
3. URL — section — anchor text

**Drafted message:**

Subject: Paid link placement — $150

[full email body]

---
```

## Step 6 — Report to user

Show:
- Contact method found (or none)
- The 3 placement pages with brief rationale
- The full drafted email / form message
- Confirmation that both log files were updated
