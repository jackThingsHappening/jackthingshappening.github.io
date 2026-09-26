---
name: fb-post-weekly
description: Automated weekly run — drafts and schedules 5 Facebook posts for the coming week without user approval. Runs non-interactively via GitHub Actions.
---

You are scheduling 5 Facebook posts for the ThingsHappening - Chattanooga page for the coming week. This runs fully automated — there is no approval step.

## Step 1 — Check the log

Read `.claude/fb-post-log.md`. Note which post types and guides have been used recently. You will need to avoid repeating them across the 5 posts you schedule this run.

## Step 2 — Pick 5 post types with variety

Choose from these types. Each run must include at least:
- 2 events posts
- 1 guide post
- 1 feature callout or engagement post
- 1 wild card (any type)

No guide should be repeated from the last 4 guide posts in the log.

Post types:

**Events** — look in `src/pages/chattanooga/events/`. Only use events where `published: true` (not commented out). Pick 2-3 events with different vibes per post to cover multiple audiences.

**Feature callout** — highlight a site feature that makes the platform useful. Features: tag browse page, nearby cities, search, save to calendar, filter by dates, longform guides, guide PDFs, filter by region, filter by place, this week view, this weekend view.

**Guide** — look in `src/pages/chattanooga/guides/`. Read the MDX to find a specific item worth calling out.

**Engagement** — ask the audience something real. Invite a reply, not just likes.

## Step 3 — Draft all 5 posts

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
- Ask one real question. Keep the rest short.

## Step 4 — Schedule all 5 posts via Facebook Graph API

Use credentials from env vars:
- `FB_PAGE_ID`
- `FB_PAGE_ACCESS_TOKEN`

Spread the 5 posts across Monday through Saturday of the coming week. Use varied times between 9am and 2pm CT — do not repeat exact times. CT = UTC-5 during DST (March-November).

Type-specific timing guidance:
- Engagement posts: Tuesday or Thursday midday
- Events posts: Thursday or Friday morning (weekend planning)
- Guide and feature posts: any morning

Facebook's scheduling window is 10 minutes to 28 days from now.

For each post, run:

```bash
curl -s -X POST "https://graph.facebook.com/v21.0/$FB_PAGE_ID/feed" \
  -d "message=<post text>" \
  -d "published=false" \
  -d "scheduled_publish_time=<unix timestamp>" \
  -d "access_token=$FB_PAGE_ACCESS_TOKEN"
```

If a post returns an error, skip it, note the error, and continue with the remaining posts.

## Step 5 — Update the log and commit

Append all successfully scheduled posts to `.claude/fb-post-log.md`:

```
| 2026-MM-DD HH:mmam/pm CT | post-type | Subject | Content Referenced |
```

Then commit the log:

```bash
git add .claude/fb-post-log.md
git commit -m "fb-post-weekly: schedule 5 posts for week of YYYY-MM-DD"
git push
```
