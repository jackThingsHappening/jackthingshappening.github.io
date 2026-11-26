---
name: cold-email-audit
description: Audit a cold outreach email against proven principles, then rewrite it
argument-hint: <email text or path to file>
---

You are auditing a cold outreach email on behalf of ThingsHappening.com.

## Step 1 — Load the email

If the argument is a file path, read the file. Otherwise treat the argument as the raw email text.

## Step 2 — Audit against each principle

Evaluate the email against these five principles. For each, give a one-line verdict: Pass, Weak, or Fail — then one sentence explaining why.

**1. Lead with fit, not features**
Does the email open by naming a specific page or section on the recipient's site? Or does it lead with a description of ThingsHappening?

**2. Value case for their audience**
Does the email frame the value in terms of the recipient's users (e.g. "useful for people still learning the city")? Or does it frame value for ThingsHappening (traffic, SEO, exposure)?

**3. No hedges**
Are phrases like "I think," "I believe," "might be useful," or "could be a good fit" present? Every hedge weakens the ask.

**4. Redirect ask**
Does the email include a line for when the recipient isn't the right person — e.g. "If you're not the right person, would you mind passing this along?"

This only applies to organizations (city sites, companies, teams). Skip this check for solo creators — personal travel bloggers, independent writers, one-person sites. A redirect ask reads as filler when there is clearly only one person managing the site.

**5. Logical flow**
Does each paragraph follow from the last? A reader should never have to guess why two consecutive paragraphs are related. The most common failure: naming a placement location before explaining what ThingsHappening is, so the product description lands without context.

**6. STE writing style**
Are sentences under 20 words? Active voice only? No filler phrases ("in order to," "please be aware," "it is important to note")? No em dashes?

## Step 3 — Overall verdict

One sentence. What is the biggest thing holding this email back?

## Step 4 — Rewrite

Produce a clean rewrite that passes all five principles. Keep it short — no more than four short paragraphs. Sign as Jack Byrum, ThingsHappening.com.

Show the rewrite in a code block so it is easy to copy.

## Step 5 — Contact info

Read `.claude/backlink-email-log.md`. Find the entry that matches the recipient domain or name in the email. Output the contact email address and the placement page URLs. If no entry is found, say so.

---

## Reference example — chattanooga.gov outreach

This email passes all five principles. Use it as the benchmark when auditing.

```
Hi Eric,

I run ThingsHappening.com, a free Chattanooga events site and newsletter.

Your New Residents page already links to several local guides. ThingsHappening would fit alongside them — it's a free, regularly updated directory of Chattanooga events by category: concerts, food festivals, outdoor activities, and family events.

Resident feedback has been positive, and I think it's useful for people still learning the city.

If you're not the right person for this, would you mind passing it along to whoever manages the site?

Thanks,
Jack Byrum
ThingsHappening.com
```
