import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../../chunks/astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Card } from '../../chunks/Card_DhwshMRr.mjs';
import { $ as $$BaseHead, a as $$Nav, b as $$Footer } from '../../chunks/Footer_DZF0fV6j.mjs';
import { $ as $$GuidesEditorialsNav } from '../../chunks/GuidesEditorialsNav_BJ6lfx2V.mjs';
import { $ as $$ExploreHeader } from '../../chunks/ExploreHeader_CmfTQ7pZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://thingshappening.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const tag = "editorial";
  let allEditorials = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./camp-jordan-entertainment-and-dining.mdx": () => import('../../chunks/camp-jordan-entertainment-and-dining_D2Pp_W6_.mjs').then(n => n._),"./guild-hardy-trail-lookout-mountain.mdx": () => import('../../chunks/guild-hardy-trail-lookout-mountain_BBloLDvQ.mjs').then(n => n._),"./jackie-mitchell-chattanooga-baseball-history.mdx": () => import('../../chunks/jackie-mitchell-chattanooga-baseball-history_D3oopoDq.mjs').then(n => n._),"./shoreline-hike-at-booker-t-washington-state-park.mdx": () => import('../../chunks/shoreline-hike-at-booker-t-washington-state-park_BTFWOQ6c.mjs').then(n => n._),"./utc-mocs-2025-nit-champions-where-are-they-now.mdx": () => import('../../chunks/utc-mocs-2025-nit-champions-where-are-they-now_Bsr_Wjkz.mjs').then(n => n._)}), () => "./*.mdx")).filter(
    (post) => post.frontmatter.published !== false
  );
  const title = "Chattanooga Editorials | Things Happening";
  const seoDescription = "Field notes and first-hand observations from exploring Chattanooga and the surrounding area.";
  let allPosts = allEditorials.map((p) => {
    return Object.assign({}, p.frontmatter, { url: p.url });
  });
  allPosts.sort((a, b) => {
    const dateA = new Date(a.lastUpdated || a.originalDate).getTime();
    const dateB = new Date(b.lastUpdated || b.originalDate).getTime();
    return dateB - dateA;
  });
  return renderTemplate`<html> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": seoDescription })}<meta charset="utf-8">${renderHead()}</head> <body class="text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main> <article class="w-full px-4 md:px-8 lg:px-16 mt-8"> ${renderComponent($$result, "ExploreHeader", $$ExploreHeader, {}, { "default": ($$result2) => renderTemplate`
Explore <span class="text-customGreen1">Chattanooga</span> through second hand experience<span class="text-customGreen1">.</span> ` })} ${renderComponent($$result, "GuidesEditorialsNav", $$GuidesEditorialsNav, { "active": "editorials" })} <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 py-8" data-test="articles-section"> ${allPosts.map((p) => renderTemplate`<div class="col-span-1"> ${renderComponent($$result, "Card", $$Card, { "post": p, "highlighted": tag })} </div>`)} </section> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/editorials/index.astro", void 0);

const $$file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/editorials/index.astro";
const $$url = "/chattanooga/editorials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
