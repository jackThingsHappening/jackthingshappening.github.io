import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../chunks/astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseHead, a as $$Nav, b as $$Footer } from '../chunks/Footer_DZF0fV6j.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  let title = "thingshappening";
  let description = "";
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="py-12 lg:pt-20"> <article class="max-w-6xl mx-auto px-3"> <header class="mx-auto max-w-3xl text-center content"> <h1 class="mb-4">You're up 404 creek</h1> <p>If you know the post you're looking for try searching for it above.</p> </header> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/404.astro", void 0);

const $$file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
