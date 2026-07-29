---
name: find-and-onboard
description: Daily run — discover new Chattanooga event vendors and onboard one pending vendor
---

You are running the ThingsHappening daily vendor pipeline.

## Step 1 — Find new vendors

Run `/find-vendors`

This searches for up to 3 new Chattanooga event venues and adds them to `.claude/vendor-sources.json` with status `pending`.

## Step 2 — Onboard one pending vendor

Run `/onboard-vendor`

This picks the first pending vendor, builds its event-source config, pulls initial events (published: true), commits, and marks it active in vendor-sources.json.

If there are no pending vendors, this step is skipped.

## Step 3 — Push to GitHub

```bash
git push origin main
```

## Report

Print a summary:
- Vendors discovered this run (from find-vendors)
- Vendor onboarded this run (from onboard-vendor), or "none pending"
- Total active vendors now tracked
