import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderScript, i as addAttribute, a as renderComponent } from './astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                          */

const $$Astro$1 = createAstro("https://thingshappening.com");
const $$PageItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageItems;
  function normalizePhoto(photo, fallbackAlt) {
    if (typeof photo === "string") {
      return { src: photo, alt: fallbackAlt };
    }
    return photo;
  }
  const { items, showClearFilters = false } = Astro2.props;
  const sortedItems = items.sort((a, b) => a.number - b.number);
  const activeTagsParam = Astro2.url.searchParams.get("tags") || null;
  const activeTags = activeTagsParam ? activeTagsParam.split(",").filter((t) => t.trim()) : [];
  const filteredItems = activeTags.length > 0 ? sortedItems.filter((item) => activeTags.every((tag) => item.tags.includes(tag))) : sortedItems;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-6xl mx-auto px-3 mb-1" data-astro-cid-f4kzor7w> ${showClearFilters && renderTemplate`<div class="mb-4 mt-4" data-astro-cid-f4kzor7w> <a${addAttribute(currentPath, "href")} id="page-items-clear-filters"${addAttribute(`px-5 py-2 text-white rounded-full text-sm transition-colors cursor-pointer inline-block ${activeTags.length > 0 ? "" : "hidden"}`, "class")} style="background-color: #1a4d2e;" data-astro-cid-f4kzor7w>
Clear filters
</a> </div>`} ${filteredItems.map((item) => renderTemplate`<section class="page-item text-xl pb-7"${addAttribute(item.tags.join(","), "data-tags")} data-astro-cid-f4kzor7w> <div data-astro-cid-f4kzor7w> ${item.photoOptions && item.photoOptions.photos && item.photoOptions.photos.length > 0 && item.photoOptions.appearance === "before" && renderTemplate`<div class="pb-5" data-astro-cid-f4kzor7w> <div class="flex flex-wrap gap-4" data-astro-cid-f4kzor7w> ${item.photoOptions.photos.map((photo) => {
    const p = normalizePhoto(photo, item.title);
    return renderTemplate`<img${addAttribute(p.src, "src")}${addAttribute(p.alt, "alt")} class="rounded-xl w-full max-w-md h-auto object-cover" loading="lazy" data-astro-cid-f4kzor7w>`;
  })} </div> </div>`} <h2 class="text-3xl mb-2" style="font-family: 'Libre Baskerville', serif;" data-astro-cid-f4kzor7w> <span class="font-normal mr-2" data-astro-cid-f4kzor7w><span class="text-logoDarkGreen" data-astro-cid-f4kzor7w>${item.number}</span><span class="text-logoLightGreen ml-0.5" style="font-size: 2.1rem;" data-astro-cid-f4kzor7w>.</span></span> ${item.title} <span class="color-pink ml-1" data-astro-cid-f4kzor7w><b data-astro-cid-f4kzor7w>.</b></span> </h2> <div class="pb-5" data-astro-cid-f4kzor7w> ${item.description} </div> ${item.links && item.links.length > 0 && renderTemplate`<div class="pb-5" data-astro-cid-f4kzor7w> <div class="flex flex-wrap gap-4" data-astro-cid-f4kzor7w> ${item.links.map((link) => renderTemplate`<a${addAttribute(link.link, "href")}${addAttribute(link.target || "_blank", "target")}${addAttribute(link.target === "_blank" ? "noopener noreferrer" : void 0, "rel")} class="page-item-link text-logoDarkGreen underline" data-astro-cid-f4kzor7w> ${link.text} </a>`)} </div> </div>`} ${item.photoOptions && item.photoOptions.photos && item.photoOptions.photos.length > 0 && item.photoOptions.appearance === "inline" && renderTemplate`<div class="pb-5" data-astro-cid-f4kzor7w> <div class="flex flex-wrap gap-4" data-astro-cid-f4kzor7w> ${item.photoOptions.photos.map((photo) => {
    const p = normalizePhoto(photo, item.title);
    return renderTemplate`<img${addAttribute(p.src, "src")}${addAttribute(p.alt, "alt")} class="rounded-xl w-full max-w-md h-auto object-cover" loading="lazy" data-astro-cid-f4kzor7w>`;
  })} </div> </div>`} <div class="pb-5" data-astro-cid-f4kzor7w> <div class="flex flex-wrap gap-2" data-astro-cid-f4kzor7w> ${item.tags.map((tag) => {
    const isActive = activeTags.includes(tag);
    let tagUrl;
    if (isActive) {
      const newTags = activeTags.filter((t) => t !== tag);
      tagUrl = newTags.length > 0 ? `${currentPath}?tags=${newTags.join(",")}` : currentPath;
    } else {
      const newTags = [...activeTags, tag];
      tagUrl = `${currentPath}?tags=${newTags.join(",")}`;
    }
    return renderTemplate`<a${addAttribute(tagUrl, "href")} class="page-item-tag px-5 py-2 text-white rounded-full text-sm cursor-pointer transition-colors font-normal no-underline"${addAttribute(`background-color: ${isActive ? "#3CB371" : "#1a4d2e"};`, "style")}${addAttribute(tag, "data-tag")} data-astro-cid-f4kzor7w>
#${tag} </a>`;
  })} </div> </div> ${item.photoOptions && item.photoOptions.photos && item.photoOptions.photos.length > 0 && (item.photoOptions.appearance === "after" || !item.photoOptions.appearance) && renderTemplate`<div class="pb-5" data-astro-cid-f4kzor7w> <div class="flex flex-wrap gap-4" data-astro-cid-f4kzor7w> ${item.photoOptions.photos.map((photo) => {
    const p = normalizePhoto(photo, item.title);
    return renderTemplate`<img${addAttribute(p.src, "src")}${addAttribute(p.alt, "alt")} class="rounded-xl w-full max-w-md h-auto object-cover" loading="lazy" data-astro-cid-f4kzor7w>`;
  })} </div> </div>`} </div> </section>`)} </div> ${renderScript($$result, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/PageItems.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/PageItems.astro", void 0);

const $$Astro = createAstro("https://thingshappening.com");
const $$PageItemsFromFrontmatter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageItemsFromFrontmatter;
  const { pageItems, showClearFilters = false } = Astro2.props;
  if (!pageItems || pageItems.length === 0) {
    return null;
  }
  const mappedPageItems = pageItems.map((item) => ({
    title: item.title,
    description: item.description,
    number: item.order,
    tags: item.tags,
    photoOptions: item.photoOptions,
    links: item.links
  }));
  return renderTemplate`${maybeRenderHead()}<div id="items-sentinel"></div> ${renderComponent($$result, "PageItems", $$PageItems, { "items": mappedPageItems, "showClearFilters": showClearFilters })} <button id="back-to-filters-btn" aria-label="Back to filters" style="display:none; position:fixed; bottom:1.5rem; left:1.5rem; width:1.9rem; height:1.9rem; border-radius:9999px; background-color:#3CB371; border:none; cursor:pointer; z-index:50; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.18);"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="18 15 12 9 6 15"></polyline> </svg> </button> ${renderScript($$result, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/PageItemsFromFrontmatter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/PageItemsFromFrontmatter.astro", void 0);

export { $$PageItemsFromFrontmatter as $ };
