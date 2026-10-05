---
name: fb-post-with-image
description: Draft and schedule a Facebook post with a photo from the repo. Finds and previews candidate photos, selects the best fit for the content angle, drafts copy, waits for approval, then posts via the Graph API.
argument-hint: [optional content angle or post type hint]
---

You are drafting a Facebook post with a photo for the ThingsHappening - Chattanooga page.

## Step 1 — Check the log

Read `.claude/fb-post-log.md` to see what's already been scheduled. Use it to:
- Avoid repeating a post type used recently
- Avoid promoting a guide or place already used
- Check cadence — don't schedule too close to an existing post

If `$ARGUMENTS` is provided, use it to guide the content angle and/or photo selection.

---

## Step 2 — Find and preview photos

Photos live in two places:

- `public/editorials/` — real local photos taken on location. Prefer these when they fit the content.
- `public/images/chattanooga_guides/` — guide and venue photos organized by category.

Run `find public/editorials public/images/chattanooga_guides -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \)` to list candidates.

Use the Read tool to view photo files visually. Check for:
- Is the photo upright? (Some editorial shots are rotated — skip those)
- Is it visually compelling for Facebook? (Good light, clear subject, not a parking lot)
- Does it match the content angle?

Narrow to 1-3 strong candidates. If multiple photos could work for different angles, show the user the options with a brief description of each and what post direction it suggests. Let the user choose.

If the user has already indicated a content angle, find the photo that best fits it rather than offering alternatives.

---

## Step 3 — Draft the post

Write copy that fits the photo and the content angle.

### Style rules

- 15-50 words total
- No emojis
- No hashtags
- No em dashes
- Prefer ellipses, colons, and semicolons over hyphens — even if technically incorrect
- Write like a local, not a marketer
- Include a thingshappening.com URL when there's a relevant page to link to
- When linking to nearby city events, use the city-specific URL (e.g. `/chattanooga/events/city/ringgold-ga`) not the generic nearby page — first check `src/pages/chattanooga/events/city/` for available city slugs and confirm published events exist there
- When mentioning travel distances, be accurate — don't round up conservatively

### URL patterns

- City events: `thingshappening.com/chattanooga/events/city/{city-slug}`
- Guide: `thingshappening.com/chattanooga/guides/{guide-slug}`
- Guide filtered: `thingshappening.com/chattanooga/guides/{guide-slug}?tags={tag}`
- Outdoors guide filter: `thingshappening.com/chattanooga/guides/outdoor-adventures?tags={tag}`
- Tag page: `thingshappening.com/chattanooga/events/tag/{tag}`
- Nearby page: `thingshappening.com/chattanooga/events/nearby`

---

## Step 4 — Propose a schedule

Default: next Saturday or Sunday, 9:00am to 2:00pm CT. Vary the exact time. Use naturally varied times like 9:15am, 10:45am, 11:30am, 12:15pm, 1:00pm, 1:45pm.

Type-specific timing:
- Engagement posts: Tuesday-Thursday midday
- Event posts: Thursday-Saturday morning
- Feature/guide posts: any weekday morning is fine

If the user asks to post now instead of scheduling, note that and proceed to Step 5 with `published=true`.

---

## Step 5 — Present for approval

Show the user:
1. Photo path and a one-line description of what it shows
2. Drafted post copy
3. What it links to
4. Proposed schedule date/time (or "posting now" if immediate)

Wait for the user to approve, edit, or deny.

- If approved: proceed to Step 6
- If edited: incorporate edits, confirm, then proceed to Step 6
- If denied: stop
- If the user asks to batch multiple posts (different photos, different days): draft all of them, get one approval for the set, then post all in Step 6

---

## Step 6 — Post via Facebook Graph API

Use credentials from env vars:
- `FB_PAGE_ID` — the page to post to
- `FB_PAGE_ACCESS_TOKEN` — long-lived page access token

Always use the `/photos` endpoint — it handles image upload and post creation in one call.

### Immediate post

```bash
curl -s -X POST "https://graph.facebook.com/v21.0/$FB_PAGE_ID/photos" \
  -F "source=@<local/path/to/image.jpg>" \
  -F "message=<post text>" \
  -F "published=true" \
  -F "access_token=$FB_PAGE_ACCESS_TOKEN"
```

### Scheduled post

Convert the approved date/time (CT = UTC-5 during DST March-November, UTC-6 in winter) to a Unix timestamp:

```bash
python3 -c "
from datetime import datetime, timezone, timedelta
ct = timezone(timedelta(hours=-5))
dt = datetime(YYYY, MM, DD, HH, MM, tzinfo=ct)
print(int(dt.timestamp()))
"
```

Facebook's scheduling window is 10 minutes to 30 days from now. Stay within 28 days.

```bash
curl -s -X POST "https://graph.facebook.com/v21.0/$FB_PAGE_ID/photos" \
  -F "source=@<local/path/to/image.jpg>" \
  -F "message=<post text>" \
  -F "published=false" \
  -F "scheduled_publish_time=<unix timestamp>" \
  -F "access_token=$FB_PAGE_ACCESS_TOKEN"
```

A successful response returns an `id`. Report it to the user with the confirmed date/time.

If batching multiple posts, run the API calls in parallel.

If the API returns an error, report it clearly and do not retry without user input.

---

## Step 7 — Update the log

Append a row to `.claude/fb-post-log.md` for each post:

```
| 2026-MM-DD HH:mmam/pm CT (or "live") | post-type | Subject | Content Referenced |
```
