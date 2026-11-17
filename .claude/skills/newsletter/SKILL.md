---
name: newsletter
description: Draft and create a MailerLite newsletter campaign — weekday focus (Monday) or weekend focus (Friday). Day-aware by default; pass "monday" or "friday" to override.
argument-hint: [monday|friday]
---

You are creating a MailerLite newsletter campaign draft for ThingsHappening.com.

## Step 1 — Determine template

Check `$ARGUMENTS` first.

- If `$ARGUMENTS` is "monday" → weekday template
- If `$ARGUMENTS` is "friday" → weekend template
- If no arguments, run this to check today:

```bash
python3 -c "
from datetime import datetime
d = datetime.now().weekday()
print('monday' if d <= 2 else 'friday')
"
```

Monday through Wednesday defaults to the weekday template. Thursday and beyond defaults to the weekend template.

**Weekday template** — events happening Monday through Thursday this week.
**Weekend template** — events happening Friday through Sunday this weekend.

## Step 2 — Check the log

Read `.claude/newsletter-log.md`. Note:
- Which guides were referenced in the last 4 newsletters — do not repeat them
- Subject line patterns used recently — avoid repeating the same opening hook

## Step 3 — Pull events

Scan `src/pages/chattanooga/events/` recursively. Only use events where `published: true` (not commented out).

For weekday template: find 3-4 events with `pubDate` falling Monday through Thursday of the current week.
For weekend template: find 3-4 events with `pubDate` falling Friday through Sunday of the current weekend.

Pick events with different vibes — mix of outdoor, arts, family, food, music. Avoid clustering two events of the same type.

If fewer than 3 qualifying events exist, expand the window by 7 days.

## Step 4 — Pull a guide or feature item

Pick one of:

**Guide item** — open a guide in `src/pages/chattanooga/guides/`. Find one specific, concrete item worth 2-3 sentences. Do not use a guide referenced in the last 4 newsletters.

**Feature callout** — highlight one site feature with a concrete use case:
- Interactive guides with tag filters
- Save to calendar (Google/Apple)
- This Week / This Weekend view
- Filter by region or neighborhood
- Nearby cities events

## Step 5 — Draft the newsletter

### Tone

Write like you are emailing your brother. Casual. Specific. Short takes on each event. Express at least one small opinion ("this one looks fun because...", "worth getting there early", "I'd go Saturday to beat the crowd"). No marketing language. No filler phrases.

No em dashes. Use plain hyphens, ellipses, or colons.

### Subject line

Specific, not generic. Reference a real event name or a concrete hook. Aim for 6-10 words.

Good:
- "Jazz in the park + 3 other things this week"
- "Good weekend if you like being outside"
- "Free concert Friday + a few others"
- "3 things worth leaving the house for"

Bad:
- "What's happening in Chattanooga this week"
- "Your weekend guide is here"
- "Don't miss these events"

### Body structure

```
Hey,

[Opening line — 1 sentence. Sets the vibe for the week or weekend. Not "here's what's happening."]

[Event 1 name] — [1-2 sentences. What it is + a small take.]

[Event 2 name] — [1-2 sentences.]

[Event 3 name] — [1-2 sentences.]

[Event 4 if strong — optional]

---

[Guide or feature item — 2-3 sentences. Specific and concrete.]

See you [Monday / this weekend],
Jack
```

Keep the total under 250 words.

## Step 6 — Persona evaluation

Score the draft on these criteria before continuing:

1. **Tone** — does it sound like writing to a friend, not a newsletter blast?
2. **No marketing language** — no "exciting", "amazing", "don't miss", "thrilled", "we're pleased", "incredible"
3. **Opinion** — does it express at least one small personal take?
4. **Length** — under 250 words?
5. **Subject line** — specific, not generic?

If any criterion fails, rewrite the failing section. Re-evaluate. Max 2 rewrites. If still failing after 2 attempts, note which criteria failed and proceed.

## Step 7 — Build the HTML and create the campaign

Use Python to build the payload and call the API. This avoids shell escaping issues with HTML content.

### Linking rules

Link aggressively back to the site. Every natural anchor point should be a link:

- **Event name** → `https://thingshappening.com/chattanooga/events/[vendor-slug]/[event-slug]`
- **Venue name** (when mentioned in the blurb) → `https://thingshappening.com/chattanooga/events/tag/[venue-slug]`
- **Guide name** → `https://thingshappening.com/chattanooga/guides/[guide-slug]`
- **Genre or tag references** (e.g. "jazz", "outdoor events", "holiday markets") → `https://thingshappening.com/chattanooga/events/tag/[tag-slug]`
- **"See everything"** CTA above the sign-off → links to `https://thingshappening.com/chattanooga/events/`
- Venue slugs come from the `tags` array in the event frontmatter (`type: "place"`)
- Genre slugs come from the `tags` array (`type: "genre"`)

Construct the HTML using this layout:

```python
html = """<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 24px 20px; color: #222; line-height: 1.7;">

<p style="margin: 0 0 20px;">Hey,</p>

<p style="margin: 0 0 16px;">[Opening line]</p>

<p style="margin: 0 0 16px;"><a href="https://thingshappening.com/chattanooga/events/[vendor-slug]/[event-slug]" style="color: #222; font-weight: bold;">[Event name]</a> — [take, with venue name linked to its tag page where natural]</p>

<p style="margin: 0 0 16px;"><a href="https://thingshappening.com/chattanooga/events/[vendor-slug]/[event-slug]" style="color: #222; font-weight: bold;">[Event name]</a> — [take]</p>

<p style="margin: 0 0 16px;"><a href="https://thingshappening.com/chattanooga/events/[vendor-slug]/[event-slug]" style="color: #222; font-weight: bold;">[Event name]</a> — [take]</p>

<hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;">

<p style="margin: 0 0 20px;">[Guide or feature item — guide name linked, any tag references linked]</p>

<p style="margin: 0 0 20px;"><a href="https://thingshappening.com/chattanooga/events/" style="color: #555; font-size: 14px;">See everything happening in Chattanooga</a></p>

<p style="margin: 0 0 20px;">See you [Friday / Monday],<br>Jack</p>

<p style="margin: 0 0 16px;"><a href="https://thingshappening.com" style="color: #666; font-size: 13px;">thingshappening.com</a></p>

<p style="margin: 16px 0 0; font-size: 12px; color: #999;"><a href="{{ unsubscribe_url }}" style="color: #999;">Unsubscribe</a></p>

</body>
</html>"""
```

Then create the campaign:

```python
import os, json, subprocess
from datetime import datetime

today = datetime.now().strftime("%Y-%m-%d")
template = "monday"  # or "friday" — set from Step 1
campaign_name = f"Newsletter - Week of {today}" if template == "monday" else f"Newsletter - Weekend of {today}"
subject = "[subject line from Step 5]"

payload = {
    "name": campaign_name,
    "type": "regular",
    "emails": [{
        "subject": subject,
        "from_name": "Jack",
        "from": "jack@thingshappening.com",
        "reply_to": "jack@thingshappening.com",
        "content": html
    }],
    "groups": ["120101429573584256"]
}

result = subprocess.run([
    "curl", "-s", "-X", "POST",
    "https://connect.mailerlite.com/api/campaigns",
    "-H", "Content-Type: application/json",
    "-H", f"Authorization: Bearer {os.environ['MAILERLITE_API_KEY']}",
    "-d", json.dumps(payload)
], capture_output=True, text=True)

print(result.stdout)
```

A successful response includes a campaign `id` and `status: draft`. Note the ID.

If the API returns an error, report it clearly and stop.

## Step 8 — Update the log and report

Append to `.claude/newsletter-log.md`:

```
| YYYY-MM-DD | monday/friday | [subject line] | [guide slug used, or "feature: X"] |
```

Then report to the user:

- Template used (weekday/weekend)
- Subject line
- Events included (name + date each)
- Guide or feature item used
- Persona evaluation: pass or which criteria flagged
- Campaign created: yes/no
- Review and schedule at: https://dashboard.mailerlite.com/campaigns
