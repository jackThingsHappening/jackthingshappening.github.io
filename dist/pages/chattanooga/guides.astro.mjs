import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../../chunks/astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseHead, a as $$Nav, b as $$Footer } from '../../chunks/Footer_DZF0fV6j.mjs';
import { $ as $$Card } from '../../chunks/Card_DhwshMRr.mjs';
import { $ as $$GuidesEditorialsNav } from '../../chunks/GuidesEditorialsNav_BJ6lfx2V.mjs';
import { $ as $$ExploreHeader } from '../../chunks/ExploreHeader_CmfTQ7pZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://thingshappening.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Chattanooga Guides";
  const seoDescription = "In-depth guides to exploring Chattanooga \u2013 from outdoor adventures to hidden gems.";
  const allGuides = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./breweries-and-wineries.mdx": () => import('../../chunks/breweries-and-wineries_TQf4kUs1.mjs').then(n => n._),"./cloudland-canyon.mdx": () => import('../../chunks/cloudland-canyon_CVNbeFUp.mjs').then(n => n._),"./coffeeshops.mdx": () => import('../../chunks/coffeeshops_BL27oO6V.mjs').then(n => n._),"./confections.mdx": () => import('../../chunks/confections_Dm1grkJ3.mjs').then(n => n._),"./exhibits.mdx": () => import('../../chunks/exhibits_BXNMIiDY.mjs').then(n => n._),"./live-music.mdx": () => import('../../chunks/live-music_DFIXs58H.mjs').then(n => n._),"./live-sports.mdx": () => import('../../chunks/live-sports_BjIIIWY4.mjs').then(n => n._),"./outdoors.mdx": () => import('../../chunks/outdoors_QoBVdGHL.mjs').then(n => n._),"./performance-arts.mdx": () => import('../../chunks/performance-arts_Ch9g-mwJ.mjs').then(n => n._),"./restaurants-with-a-view.mdx": () => import('../../chunks/restaurants-with-a-view_CEyzmwX5.mjs').then(n => n._),"./tours.mdx": () => import('../../chunks/tours_Y3OQRCh4.mjs').then(n => n._),"./weekend-hosting-chattanooga-choo-choo-edition.mdx": () => import('../../chunks/weekend-hosting-chattanooga-choo-choo-edition_UOJDObsb.mjs').then(n => n._)}), () => "./*.mdx")).filter(
    (post) => post.frontmatter.published !== false
  );
  const sortedGuides = allGuides.map((p) => ({ ...p.frontmatter, url: p.url })).sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
  const guidesPage = sortedGuides.slice(0, 12);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": seoDescription })}${renderHead()}</head> <body class="text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main> <article class="w-full px-4 md:px-8 lg:px-16 mt-8"> ${renderComponent($$result, "ExploreHeader", $$ExploreHeader, {}, { "default": ($$result2) => renderTemplate`
Longform and Interactive Guides to <span class="text-customGreen1">Chattanooga</span><span class="text-customGreen1">.</span> ` })} ${renderComponent($$result, "GuidesEditorialsNav", $$GuidesEditorialsNav, { "active": "guides" })} <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 py-8"> ${guidesPage.map((guide) => renderTemplate`<div class="col-span-1"> ${renderComponent($$result, "Card", $$Card, { "post": guide })} </div>`)} </section> ${sortedGuides.length > 12 && renderTemplate`<div class="text-center mt-4"> <a href="/chattanooga/guides/page/2" class="underline text-blue-600 font-semibold">View more guides →</a> </div>`} </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/index.astro", void 0);

const $$file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/index.astro";
const $$url = "/chattanooga/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
