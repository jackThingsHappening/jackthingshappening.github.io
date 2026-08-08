import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../chunks/astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseHead, a as $$Nav, b as $$Footer } from '../chunks/Footer_DZF0fV6j.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Things Happening";
  const seoDescription = "A simpler way to find things happening in your city.";
  return renderTemplate`<html lang="en" class="dot-grid-bg"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": seoDescription })}${renderHead()}</head> <body class="text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="w-full px-4 md:px-8 lg:px-16 pt-8"> <header class="pt-8 max-w-3xl"> <h1 class="font-jakarta font-bold text-5xl md:text-6xl leading-[1.2]">
An easier way to find things happening in <span class="text-customGreen1 shimmer-text">your city</span><span class="text-customGreen1">.</span> </h1> <p class="text-gray-600 text-3xl mt-6">We're starting in Chattanooga, TN.</p> </header> <div class="mt-12 flex flex-col gap-4"> <a href="/chattanooga" class="inline-flex items-center gap-3 border-2 border-black rounded-lg px-6 py-4 text-2xl font-semibold bg-white hover:bg-black hover:text-white transition-colors w-fit"> <span class="text-customGreen1">→</span> Chattanooga, TN
</a> <div class="inline-flex items-center gap-3 border-2 border-gray-300 rounded-lg px-6 py-4 text-2xl font-semibold text-gray-400 w-fit cursor-not-allowed bg-white"> <span>→</span> Knoxville, TN <span class="text-lg font-normal ml-2">coming soon</span> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/index.astro", void 0);

const $$file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
