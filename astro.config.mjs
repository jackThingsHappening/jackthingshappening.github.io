import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import fs from 'fs';
import path from 'path';

function parseDateStr(str) {
  if (!str) return null;
  const s = str.trim().replace(/['"]/g, '');
  const mdy = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (mdy) return new Date(`${mdy[3]}-${mdy[1].padStart(2,'0')}-${mdy[2].padStart(2,'0')}`);
  const iso = s.match(/^(\d{4}-\d{2}-\d{2})/);
  if (iso) return new Date(iso[1]);
  return null;
}

function buildLastmodMap() {
  const map = new Map();
  const dirs = ['src/pages', 'src/pages-events'];
  const base = new URL('.', import.meta.url).pathname;

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      if (!entry.name.endsWith('.mdx')) continue;
      const content = fs.readFileSync(full, 'utf-8');
      const lastUpdated = content.match(/lastUpdated:\s*["']?([^"'\n]+)["']?/)?.[1];
      const pubDate = content.match(/pubDate:\s*["']?([^"'\n]+)["']?/)?.[1];
      const date = parseDateStr(lastUpdated) ?? parseDateStr(pubDate);
      if (!date || isNaN(date)) continue;
      const rel = full
        .replace(path.join(base, 'src/pages'), '')
        .replace(path.join(base, 'src/pages-events'), '/chattanooga/events')
        .replace(/\/index\.mdx$/, '')
        .replace(/\.mdx$/, '');
      map.set(rel, date.toISOString().split('T')[0]);
    }
  }

  dirs.forEach(d => walk(path.join(base, d)));
  return map;
}

const lastmodMap = buildLastmodMap();

export default defineConfig({
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        // For event pages, extract date from URL as fallback
        const eventDate = pathname.match(/\/(\d{4}-\d{2}-\d{2})$/)?.[1];
        const lastmod = lastmodMap.get(pathname) ?? eventDate ?? null;
        if (lastmod) item.lastmod = lastmod;
        return item;
      }
    })
  ],
  site: "https://thingshappening.com",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    trailingSlash: "never"
  }
});
