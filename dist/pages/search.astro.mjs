import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderScript, a as renderComponent, b as renderHead } from '../chunks/astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseHead, a as $$Nav, b as $$Footer } from '../chunks/Footer_DZF0fV6j.mjs';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://thingshappening.com");
const $$HomeHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomeHeader;
  const { title, description, city } = Astro2.props;
  const rawTag = title?.startsWith("#") ? title.slice(1) : title;
  const displayTag = rawTag ? rawTag.charAt(0).toUpperCase() + rawTag.slice(1) : "";
  return renderTemplate`${maybeRenderHead()}<header class="flex flex-col content py-8" data-astro-cid-a3ibsjcm> <h2 data-test="header-description" class="font-jakarta font-normal text-5xl pt-4" data-astro-cid-a3ibsjcm> <span class="text-customGreen1" data-astro-cid-a3ibsjcm>Chattanooga</span> Guides to <span class="text-customGreen1" data-astro-cid-a3ibsjcm>${displayTag}</span><span class="text-customGreen1" data-astro-cid-a3ibsjcm>.</span> </h2> </header>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/HomeHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SearchInput = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js" integrity="sha512-4xUl/d6D6THrAnXAwGajXkoWaeMNwEKK4iNfq5DotEbLPAfk6FSxSP3ydNxqDgCw1c/0Z1Jg6L8h2j+++9BZmg==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script> ', '<section class="max-w-3xl mx-auto px-3"> <div class="searchBoxContainer"> <input type="text" id="searchBox" class="searchBox w-full px-2 py-1" placeholder="Search..." data-test="search-input" autocomplete="off"> </div> <div id="searchResults" class="searchResults lg:pl-8"></div> ', " <script client:load>\n    document.getElementById('searchBox').focus();\n  <\/script> </section>"])), maybeRenderHead(), renderScript($$result, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/SearchInput.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/SearchInput.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  let pageTitle = "Search";
  let pageDescription = "Search all events";
  let seoTitle = "Search | thingshappening";
  let seoDescription = "";
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": seoTitle, "description": seoDescription })}${renderHead()}</head> <body class="text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="py-12 lg:pt-20"> <article class="max-w-6xl mx-auto px-3" content> ${renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": pageTitle, "description": pageDescription })} ${renderComponent($$result, "SearchInput", $$SearchInput, {})} </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/search.astro", void 0);

const $$file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
