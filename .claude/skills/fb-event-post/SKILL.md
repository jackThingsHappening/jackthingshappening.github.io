---
name: fb-event-post
description: Draft and schedule a Facebook post promoting an upcoming Chattanooga event from the site's event MDX files.
argument-hint: [optional event slug or venue name to target a specific event]
---

You are drafting and scheduling a Facebook post promoting an upcoming event listed on ThingsHappening.

## Step 1 — Find eligible events

Read `.claude/fb-post-log.md` to see which events have already been promoted. An event is already promoted if it appears in the log with type `event-post`.

Then scan `src/pages/chattanooga/events/` for MDX files where `pubDate` is between today and 30 days from now (inclusive). Parse the frontmatter to get: `title`, `pubDate`, `time`, `venue`, `entranceCost`, `eventLink`, and the MDX slug (filename without `.mdx`).

If `$ARGUMENTS` is provided and matches a venue name or slug, filter to events matching that hint.

Exclude any events that already appear in the log.

If no eligible events exist in the window, report that and stop.

## Step 2 — Pick the event

From the eligible events, pick the one most worth promoting. Prefer:
- Events at named venues with strong local identity (Songbirds, The Signal, Walker Theatre, Tennessee Aquarium, etc.) over generic listings
- Events within 7–14 days (enough lead time to be useful, close enough to feel urgent)
- Events with a body paragraph that has texture — specific details, not just date and time

Read the full MDX file for the chosen event to get the body paragraph.

## Step 3 — Draft the post

Use the body paragraph as your anchor. The body text is already in the right voice — start from it, not from scratch.

Rules:
- **Hook line** — one sentence that earns the scroll-stop. Pull the most interesting detail from the body text.
- **Body** — 1–2 sentences. Use the body paragraph's language and details; trim or reorder as needed for Facebook pacing.
- **URL** — include the event page: `https://thingshappening.com/chattanooga/events/[slug]`
- No emojis
- No hashtags
- No em dashes anywhere in the post copy
- No hyphens for structure (no bullet-style dashes)
- No "check it out" or other filler
- Write like a local, not a marketer
- Under 120 words total

## Step 4 — Propose a schedule

Calculate the ideal post date:
- If the event is 8+ days away: post 5–7 days before the event date
- If the event is 4–7 days away: post 1–3 days before
- If the event is within 3 days: post as soon as possible (next available morning slot)

Time: anywhere from 9:00am to 1:00pm CT. Vary the exact time — pick naturally uneven times like 9:10am, 10:35am, 11:20am, 12:45pm. Do not default to round hours.

State the proposed date and time clearly.

## Step 5 — Present for approval

Show the user:
1. The event chosen (title, venue, date)
2. The drafted post copy
3. The event page URL
4. The proposed schedule date/time

Wait for the user to **approve**, **edit**, or **deny**.

- If approved: proceed to Step 6
- If edited: incorporate edits, confirm, then proceed to Step 6
- If denied: stop

## Step 6 — Schedule via Facebook Graph API

Use the credentials from env vars:
- `FB_PAGE_ID` — the page to post to
- `FB_PAGE_ACCESS_TOKEN` — long-lived page access token

Convert the approved date/time (CT = UTC-6 in summer / DST active June–November, UTC-5 in winter) to a Unix timestamp.

Facebook's scheduling window is 10 minutes to 30 days from now. Stay within 28 days to avoid edge-case rejections.

Run:

```bash
curl -X POST "https://graph.facebook.com/v21.0/$FB_PAGE_ID/feed" \
  -d "message=<post text>" \
  -d "published=false" \
  -d "scheduled_publish_time=<unix timestamp>" \
  -d "access_token=$FB_PAGE_ACCESS_TOKEN"
```

A successful response returns a post ID. Report it to the user and confirm the scheduled date/time.

If the API returns an error, report it clearly and do not retry without user input.

On success, append a row to `.claude/fb-post-log.md`:

```
| 2026-MM-DD HH:mmam/pm CT | event-post | [Event Title] | [slug] |
```
