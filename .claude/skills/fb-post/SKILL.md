---
name: fb-post
description: Draft and schedule a Facebook post to the ThingsHappening - Chattanooga page. Picks from a variety of post types, drafts copy, waits for approval, then schedules via the Graph API.
argument-hint: [optional post type or content hint]
---

You are drafting and scheduling a Facebook post for the ThingsHappening - Chattanooga page.

## Step 1 — Check the log and pick a post type

Read `.claude/fb-post-log.md` to see what's already been scheduled. Use it to:
- Avoid repeating a post type used recently
- Avoid promoting a guide already used
- Check cadence — don't schedule too close to an existing post

If `$ARGUMENTS` is provided, use it to select a post type and/or content angle.

If no arguments, pick a post type below. Rotate through types for variety.

### Post types

**Events** — look in `src/pages/chattanooga/events/`. Only use events where `published: true` (not commented out). Pick 2-3 events with different vibes to cover multiple audiences.

**Feature callout** — highlight a site feature that makes the platform useful. Show what it does, not just that it exists. Features: tag browse page, nearby cities, search, save to calendar, filter by dates, longform guides, guide PDFs, filter by region, filter by place, this week view, this weekend view.

**Guide** — look in `src/pages/chattanooga/guides/`. Pick the most compelling guide for a concrete, specific post. Read the MDX to find a specific item worth calling out.

**Engagement** — ask the audience something real: what did you recently hear about that we should cover? What are your plans coming up? Did you go to an event we should be listing? These invite a reply, not just likes.

---

## Step 2 — Draft the post

### Style rules

- 15-50 words total
- No emojis
- No hashtags
- No em dashes
- Prefer ellipses, colons, and semicolons over hyphens — even if technically incorrect
- Write like a local, not a marketer
- Include a thingshappening.com URL when there's a relevant page to link to

### Starter patterns — riff on these, don't copy them verbatim

**Events:**
- This week around Chattanooga we've got a flurry of fun free events
- Heading into the weekend let's find yo some things to do
- If you can't find something to do you're not checking ThingsHappening.com here's what's going on around town
- Feeling like you need a change of scenery? We might be able to help with our nearby town events
- Don't go chasing waterfalls.. without checking the last bacteria reports. Here's what's happening in Chattanooga
- Love it, like it, gotta have it, rank these 3 upcoming Chattanooga events
- How do you find something new going on in 3 simple steps: open laptop, visiting Thingshappening.com, drive to a thing happening - here are a few ideas to get you started
- Let's plan your weekend. Do you like shows? festivals/markets? Music? Sports? Bigfoot expeditions? We're here to help
- Don't sweat or fret we're back so you don't forget what's going on in Chattanooga, here's a peak into the weekend
- Old Macdonald had a farm. A few other folks did too and they sometimes have events /chattanooga/events/tag/farm
- There are 8 festival events listed on things happening right now, maybe there's one you want to save to your calendar? /chattanooga/events/tag/festivals

**Feature callouts:**
- Feature spotlight: Interactive guides make for quick filtering of points of interest around a category of Things to Do. Try it out on our Chattanooga outdoors guide
- Website tour: Try out our This Week events view for a snapshot of goings ons. While your there, email a friend of the best thing you find
- ICYMI: thingshappening.com now has integrations with Google and Apple calendars, try it out and let us know how it's working for you. We can adjust as needed

**Guides:**
- Step 1) Open the Breweries and Wineries guide. Step 2) Filter on tours-tastings. 3) Drive to Cartecay Vineyards
- On your next Signal Mountain adventure fuel up with Mayfly Coffee. We located this in our coffeeshops interactive guide by filtering by Neighborhood
- Interesting in attending your first theater performance in Chattanooga? We built a guide to get you going, check out Performing Arts
- You know there's good live music in Chattanooga. You might not know how much good live music there is in Chattanooga. Our events and guide fill you in on what you might be missing
- We have 19 exhibits in our interactive guide. Two of them are free. If that's something you might be interested in /chattanooga/guides/exhibits?tags=free
- Outdoor adventures are kind of our thing. If you're overwhelmed on options try drilling down on Activity, Location, and more then find it in our map

**Engagement:**
- Ask one real question. Keep the rest of the post short — leave room for people to respond.

---

## Step 3 — Propose a schedule

Default: next Saturday or Sunday, 9:00am to 2:00pm CT. Vary the exact time — don't default to 10:00am every time. Use naturally varied times like 9:15am, 10:45am, 11:30am, 12:15pm, 1:00pm, 1:45pm.

Type-specific timing:
- Engagement posts: Tuesday-Thursday midday (higher comment engagement)
- Event posts: Thursday-Saturday morning (people planning their weekend)
- Feature/guide posts: any weekday morning is fine

State the proposed date and time clearly.

---

## Step 4 — Present for approval

Show the user:
1. Post type chosen
2. Drafted post copy
3. What it links to (if anything)
4. Proposed schedule date/time

Wait for the user to approve, edit, or deny.

- If approved: proceed to Step 5
- If edited: incorporate edits, confirm, then proceed to Step 5
- If denied: stop

---

## Step 5 — Schedule via Facebook Graph API

Use credentials from env vars:
- `FB_PAGE_ID` — the page to post to
- `FB_PAGE_ACCESS_TOKEN` — long-lived page access token

Convert the approved date/time (CT = UTC-5 during DST March-November, UTC-6 in winter) to a Unix timestamp.

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
| 2026-MM-DD HH:mmam/pm CT | post-type | Subject | Content Referenced |
```
