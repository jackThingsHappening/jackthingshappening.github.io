# SEO Audit Log

## 2026-09-15

Scanned 489 published event MDX files under `src/pages/chattanooga/events/`.

### Check 1 — Missing seoDescription
- None missing: ✓ (0 of 489 files)

### Check 2 — Thin seoDescriptions
- Rewritten: 12 files (all were under 60 characters, now 100–150 chars, specific + active voice):
  - `the-signal-cigarettes-at-sunset.mdx`
  - `songbirds/blake-worthington-string-band.mdx`
  - `songbirds/hotel-burgundy.mdx`
  - `songbirds/plvnet-w-hour-late.mdx`
  - `songbirds/eric-johanson.mdx`
  - `songbirds/belles.mdx`
  - `songbirds/womb.mdx`
  - `barrelhouse-ballroom/pynk-beard.mdx`
  - `barrelhouse-ballroom/drivin-n-cryin.mdx`
  - `barrelhouse-ballroom/dizgo.mdx`
  - `barrelhouse-ballroom/night-moves.mdx`
  - `barrelhouse-ballroom/lucero.mdx`

### Check 3 — Thin body content (<30 words) — needs human review
- Needs review: 47 files (no auto-fix; prose quality is a human call):
  - `the-signal-zoso.mdx` — 29 words
  - `songbirds/blake-worthington-string-band.mdx` — 28 words
  - `songbirds/nectar-collector-w-speakeasy.mdx` — 24 words
  - `songbirds/belles.mdx` — 26 words
  - `songbirds/jack-tatum-w-luke-simmons-and-the-lovestruck.mdx` — 29 words
  - `woodshop/woodshop-jonathan-peyton.mdx` — 22 words
  - `woodshop/woodshop-mid-america.mdx` — 27 words
  - `woodshop/woodshop-goldpine.mdx` — 21 words
  - `woodshop/woodshop-taylor-hollingsworth.mdx` — 27 words
  - `woodshop/woodshop-2nd-annual-bilbo-s-birthday-bash-day-2.mdx` — 28 words
  - `woodshop/woodshop-mama-s-broke.mdx` — 24 words
  - `woodshop/woodshop-burnside-exploration-2.mdx` — 26 words
  - `woodshop/woodshop-cinema-stereo.mdx` — 29 words
  - `woodshop/woodshop-the-landon-fitzpatrick-band.mdx` — 27 words
  - `woodshop/woodshop-the-encore-sessions.mdx` — 27 words
  - `woodshop/woodshop-local-nomad.mdx` — 29 words
  - `barrelhouse-ballroom/a-town-hall-show.mdx` — 29 words
  - `barrelhouse-ballroom/pynk-beard.mdx` — 26 words
  - `barrelhouse-ballroom/the-jeremy-mccomb-honky-tonk-circus-tour.mdx` — 28 words
  - `barrelhouse-ballroom/club-slayyy.mdx` — 28 words
  - `barrelhouse-ballroom/sam-holt-band-remembering-mikey.mdx` — 27 words
  - `barrelhouse-ballroom/boot-scootin-boogie-nights.mdx` — 27 words
  - `barrelhouse-ballroom/creed-fisher-with-kc-johns.mdx` — 27 words
  - `barrelhouse-ballroom/dizgo.mdx` — 24 words
  - `barrelhouse-ballroom/work-it.mdx` — 24 words
  - `barrelhouse-ballroom/brenn-amateur-at-best-tour.mdx` — 22 words
  - `barrelhouse-ballroom/grateful-cinco-luchador-throwdown.mdx` — 27 words
  - `barrelhouse-ballroom/locals-only-edm-edition.mdx` — 24 words
  - `barrelhouse-ballroom/sicard-hollow-with-omcat.mdx` — 26 words
  - `city/chickamauga-ga/walker-rocks/kensington-rodeo.mdx` — 29 words
  - `city/chickamauga-ga/walker-rocks/kz106-family-reunion.mdx` — 29 words
  - `city/chickamauga-ga/walker-rocks/chickamauga-birthday-celebration.mdx` — 25 words
  - `city/collegedale-tn/southern-adventist-university/honor-choir-festival-concert.mdx` — 27 words
  - `city/collegedale-tn/southern-adventist-university/general-recital-4.mdx` — 28 words
  - `city/collegedale-tn/southern-adventist-university/general-recital-3.mdx` — 28 words
  - `city/collegedale-tn/southern-adventist-university/general-recital-2.mdx` — 28 words
  - `city/collegedale-tn/southern-adventist-university/horn-ensemble-concert.mdx` — 24 words
  - `city/collegedale-tn/southern-adventist-university/presidents-honors-concert.mdx` — 25 words
  - `city/collegedale-tn/southern-adventist-university/general-recital-1.mdx` — 28 words
  - `city/collegedale-tn/southern-adventist-university/wind-symphony.mdx` — 14 words
  - `city/jasper-tn/jasper-main-street/downtown-throwdown.mdx` — 26 words
  - `city/cleveland/mash-and-hops/beer-girl-brewing.mdx` — 20 words
  - `city/cleveland/mainstreet-cleveland/cruise-in-october.mdx` — 26 words
  - `city/ooltewah-tn/cambridge-square/cambridge-square-live-band.mdx` — 25 words
  - `city/ooltewah-tn/cambridge-square/cambridge-square-jazz-band-concert.mdx` — 18 words
  - `city/ooltewah-tn/cambridge-square/cambridge-square-autumn-harvest-market.mdx` — 19 words
  - `crabtree-farms/sourdough-bagels.mdx` — 29 words

### Check 4 — Internal link coverage
- All 11 required tags covered in `GUIDE_MAP` (BlogPost.astro): ✓
- Uncovered genre tags in use (no auto-fix — needs a guide first):
  - `community` — e.g. `city/chickamauga-ga/walker-rocks/enchanted-pumpkin-patch-rock-city.mdx`
  - `festivals` — e.g. `festivals/mainx24.mdx`
  - `trivia` — e.g. `woodshop/tuesday-trivia.mdx`, `oddstory/pub-trivia.mdx`

### Check 5 — Event schema
- Status: present, all required fields confirmed. `BlogPostLayout.astro` has the JSON-LD `Event` block (gated on `venue`; `startDate`/`endDate` gated on `pubDate`, `offers` gated on `eventLink`). Present fields: `name`, `description`, `startDate`, `eventStatus`, `eventAttendanceMode`, `location`, `url`, `offers`. No changes needed.

### Check 6 — Broken eventLinks
- Sampled 20 random published files. All returned HTTP 200.
- None broken: ✓
