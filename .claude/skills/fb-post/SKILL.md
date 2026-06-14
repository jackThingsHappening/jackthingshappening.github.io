---
name: fb-post
description: Draft and schedule a Facebook post to the ThingsHappening - Chattanooga page. Picks from a variety of post types, drafts copy, waits for approval, then schedules via the Graph API.
argument-hint: [optional post type or content hint]
---

You are drafting and scheduling a Facebook post for the ThingsHappening - Chattanooga page.

## Step 1 — Check the log and pick a post type

First, read `.claude/fb-post-log.md` to see what's already been scheduled. Use it to:
- Avoid repeating a post type that was used recently
- Avoid promoting a guide that's already been used
- Check cadence — don't schedule too close to an existing post

If `$ARGUMENTS` is provided, use it to select a post type and/or content angle.

If no arguments, pick a post type from the list below. Rotate through types for variety — don't default to guide promotions every time.

### Post types

**1. Guide promotion**
Promote one of the longform or interactive guides. Read 3-4 guide MDX files from `src/pages/chattanooga/guides/` and pick the most compelling for a Facebook post. Prioritize visual/experiential topics (restaurants, outdoors, breweries, live music). Include the full guide URL.

**2. Feature callout**
Highlight a site feature that makes the platform useful — search, tag filtering, date picker, etc. Show the audience what the tool does, not just that it exists. Link to the relevant guide or homepage.

**3. How-to / tutorial**
Explain how to get the most out of a specific feature:
- Interactive guides have a scroll-to-filter and image intro by area
- Longform guides have an index so they're less intimidating to browse
- The outdoors guide breaks adventures down by location with photos
Frame it as "here's how to actually use this" rather than a feature announcement.

**4. Content spotlight**
Zoom in on a single item inside a guide — one restaurant, one trail, one brewery, one venue. Make the item itself interesting, mention it lives in the guide, include the guide URL.

**5. Platform update**
Share a real change or improvement to the site:
- Search optimized
- Bug fixed (e.g. tag links showing back dates)
- Redesign element (new icons, streamlined search, logo update)
Be specific about what changed and why it matters to the reader.

**6. New vendor / event coverage**
Announce a recently added event source or vendor. Name the vendor, what kind of events they run, where to find them on the site.

**7. Expanded coverage**
Announce that an existing vendor now has more events listed. Name the vendor, what's new.

**8. Roadmap / what's coming**
Share what's being built or planned next. Be honest and specific — "working on X" beats vague hype.

**9. Current focus**
A short personal note on what's being worked on right now. Builds trust and keeps the audience in the loop on the project's momentum.

**10. Shoutout**
Acknowledge someone who encouraged the project — a specific person or community. Keep it genuine, not performative.

**11. Audience question**
Ask the audience something real:
- What did you recently hear about that we should have covered?
- What are your plans coming up — anything you're looking forward to?
- Did you go to an event recently that we should be listing?
These should invite a reply, not just likes.

**12. Event preview / get ahead of something**
Flag an upcoming major event at a venue like the Convention Center, First Horizon, or a festival that isn't a recurring weekly thing. Frame it as a heads-up for people who want to plan ahead. Include the event date and where to find more info.

---

## Step 2 — Draft the post

Write a Facebook post suited to the chosen post type. General rules for all types:

- **Hook line** — one sentence that earns the scroll-stop. Specific beats generic.
- **Body** — 2-3 sentences max. Concrete details beat adjectives.
- **URL** — include only when there's a relevant page to link to (guides, homepage, event page)
- No emojis
- No hashtags
- No em dashes anywhere in the post copy
- No hyphens for structure (no bullet-style dashes)
- No "check out our guide" or other self-referential filler
- Write like a local, not a marketer
- Under 150 words total

For audience question posts, the hook IS the question. Keep the body short and leave space for people to respond.

---

## Step 3 — Propose a schedule

Default: next Saturday or Sunday, anywhere from 9:00am to 2:00pm CT. Vary the exact time — don't default to 10:00am every time. Pick naturally varied times like 9:15am, 10:45am, 11:30am, 12:15pm, 1:00pm, 1:45pm, etc. Posts should not look like they were scheduled by a bot.

Use judgment for type-specific timing:
- Audience questions: Tuesday–Thursday midday (higher comment engagement)
- Event previews: as far ahead as useful, typically 1–2 weeks before the event
- Feature/platform updates: any weekday morning is fine, vary the time similarly

State the proposed date and time clearly.

---

## Step 4 — Present for approval

Show the user:
1. The post type chosen
2. The drafted post copy
3. What it links to (if anything)
4. The proposed schedule date/time

Wait for the user to **approve**, **edit**, or **deny**.

- If approved: proceed to Step 5
- If edited: incorporate edits, confirm, then proceed to Step 5
- If denied: stop

---

## Step 5 — Schedule via Facebook Graph API

Use the credentials from env vars:
- `FB_PAGE_ID` — the page to post to
- `FB_PAGE_ACCESS_TOKEN` — long-lived page access token

Convert the approved date/time (CT = UTC-6 in summer / DST active June–November, UTC-5 in winter) to a Unix timestamp.

Facebook's scheduling window is 10 minutes to 30 days from now. In practice, stay within 28 days to avoid edge-case rejections — anything beyond that risks an "invalid scheduled publish time" error.

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

On success, append a row to `.claude/fb-post-log.md` in this format:

```
| 2026-MM-DD HH:mmam/pm CT | post-type | Subject | Content Referenced |
```
