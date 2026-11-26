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

**HARD RULE: No em dashes anywhere in the post copy. Not " — ", not "–". Use a comma, period, or rewrite the sentence instead. Violating this is a draft failure.**

Rules:
- **Hook line** — one sentence that earns the scroll-stop. Pull the most interesting detail from the body text.
- **Body** — 1–2 sentences. Use the body paragraph's language and details; trim or reorder as needed for Facebook pacing.
- **URL** — do NOT put the event URL in the post body. Facebook suppresses link posts. Add it as the first comment after posting (see Step 7).
- No emojis
- No hashtags
- No em dashes (see hard rule above)
- No hyphens for structure (no bullet-style dashes)
- No "check it out" or other filler
- Write like a local, not a marketer
- Under 120 words total

## Step 4 — Judge review

Spawn an Agent with only this prompt — no other context, no site background:

```
Score this Facebook post on three criteria. Use a 1–5 scale.
Return scores and one concrete fix per weak score (3 or higher).

Criteria:
- AI-generated feel: 1 = sounds human, 5 = sounds robotic
- Hook strength: 1 = stops the scroll, 5 = no reason to read on
- Usefulness: 1 = actionable and specific, 5 = vague and forgettable
- Originality: 1 = angle feels fresh or unexpected, 5 = generic or forgettable content type

Copy: <full draft copy>

Respond only with scores and fixes. No preamble.
```

If any score is 3 or higher, revise the draft before moving on.
Apply only the fixes the judge flagged. Do not rewrite the whole post.
Hold both the original draft and the revised draft — you will show both in Step 6.

If all scores are 2 or lower, skip revision and proceed with the original draft.

---

## Step 5 — Propose a schedule

Calculate the ideal post date:
- If the event is 8+ days away: post 5–7 days before the event date
- If the event is 4–7 days away: post 1–3 days before
- If the event is within 3 days: post as soon as possible (next available morning slot)

Time: anywhere from 9:00am to 1:00pm CT. Vary the exact time — pick naturally uneven times like 9:10am, 10:35am, 11:20am, 12:45pm. Do not default to round hours.

State the proposed date and time clearly.

## Step 6 — Present for approval

Show the user:
1. The event chosen (title, venue, date)
2. If a revision was made in Step 4: show the judge's scores, the original draft, and the revised draft. If no revision: show only the final draft.
3. The event page URL
4. The proposed schedule date/time

Wait for the user to **approve**, **edit**, or **deny**.

- If approved: proceed to Step 7
- If edited: incorporate edits, confirm, then proceed to Step 7
- If denied: stop

## Step 7 — Schedule via Facebook Graph API

Use the credentials from env vars:
- `FB_PAGE_ID` — the page to post to
- `FB_PAGE_ACCESS_TOKEN` — long-lived page access token

Convert the approved date/time (CT = UTC-5 during DST / March–November, UTC-6 in winter) to a Unix timestamp.

Facebook's scheduling window is 10 minutes to 30 days from now. Stay within 28 days to avoid edge-case rejections.

Run:

```bash
curl -X POST "https://graph.facebook.com/v21.0/$FB_PAGE_ID/feed" \
  -d "message=<post text>" \
  -d "published=false" \
  -d "scheduled_publish_time=<unix timestamp>" \
  -d "access_token=$FB_PAGE_ACCESS_TOKEN"
```

A successful response returns a post ID. Immediately add the event URL as the first comment:

```bash
curl -X POST "https://graph.facebook.com/v21.0/<post-id>/comments" \
  -d "message=https://thingshappening.com/chattanooga/events/[slug]?utm_source=facebook&utm_medium=social" \
  -d "access_token=$FB_PAGE_ACCESS_TOKEN"
```

Report the post ID and confirmed date/time to the user.

If the API returns an error, report it clearly and do not retry without user input.

On success, append a row to `.claude/fb-post-log.md`:

```
| 2026-MM-DD HH:mmam/pm CT | event-post | [Event Title] | [slug] |
```
