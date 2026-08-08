import { c as createComponent, r as renderTemplate, h as renderScript, d as createAstro, i as addAttribute, a as renderComponent, b as renderHead, m as maybeRenderHead } from './astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-ZNKSGEB8SC"><\/script> ', ""])), renderScript($$result, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Head/GoogleAnalytics.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Head/GoogleAnalytics.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$1 = createAstro("https://thingshappening.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, ogImage: ogImageProp } = Astro2.props;
  const siteUrl = "https://thingshappening.com";
  const permalink = `${siteUrl}${Astro2.url.pathname}`;
  const ogImage = ogImageProp || `${siteUrl}/images/social.png`;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", ' <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2976969447542443" crossorigin="anonymous"><\/script> <meta charset="utf-8"> <meta name="viewport" content="width=device-width"> <link rel="sitemap" href="/sitemap.xml"> <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;300;200;500;600&display=swap" rel="stylesheet"> <meta name="description"', '> <meta property="og:type" content="website"> <meta property="og:url"', '> <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:image"', '> <meta property="twitter:card" content="summary_large_image"> <meta property="twitter:url"', '> <meta property="twitter:title"', '> <meta property="twitter:description"', '> <meta property="twitter:image"', '> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-tomorrow.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.css"> <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@900&family=Poppins:ital,wght@0,400;0,600;1,400;1,700&display=swap" rel="stylesheet"> <title>', "</title>"])), renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, {}), addAttribute(description, "content"), addAttribute(permalink, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(permalink, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), title);
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Head/BaseHead.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<head>", '</head> <nav class="bg-white" data-astro-cid-dmqpwcec> <div class="w-full px-4 md:px-8 lg:px-16 py-3 flex items-center justify-between h-16" data-astro-cid-dmqpwcec> <a href="/" class="flex items-center" data-astro-cid-dmqpwcec> <img src="/images/logo.png" class="w-[12rem]" id="th-logo" data-astro-cid-dmqpwcec> <!-- <img src="/images/text-washed2.png" class="h-10 mr-1"> --> <!-- <div id="nav-logo" class="leading-loose font-semi text-xl"><span id="nav-logo-things">Things</span> <span id="nav-logo-happening" class="text-customGreen1">Happening</span></div> --> </a> <div class="flex" data-astro-cid-dmqpwcec> <a href="/search" class="mr-4 mt-1 items-center justify-center" data-astro-cid-dmqpwcec> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-dmqpwcec> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-dmqpwcec></path> </svg> </a> <a target="_blank" href="https://www.facebook.com/people/ThingsHappening-Chattanooga/61559147467507/?sk=about&section=follow" class="mr-4" data-astro-cid-dmqpwcec><img src="/images/icons/facebook.png" style="width: 1.9em; height: 1.9em" alt="facebook" data-astro-cid-dmqpwcec></a> <span onclick="openNav()" class="mr-4 mt-1" data-astro-cid-dmqpwcec><img src="/images/icons/hamburger.png" style="width: 1.5em; height: 1.5em; cursor: pointer" alt="facebook" data-astro-cid-dmqpwcec></span> </div> </div> <div class="w-full border-b-2 border-black squiggle" data-astro-cid-dmqpwcec></div> <div id="sideNavPopOut" class="sidenav" data-astro-cid-dmqpwcec> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()" data-astro-cid-dmqpwcec>&times;</a> <a href="/about" target="_blank" data-astro-cid-dmqpwcec>About</a> <a href="https://docs.google.com/forms/d/e/1FAIpQLScDxnabIckLTSnNJ-vhTjHCr-frnexmdPYHrLTHpphkjIGCqw/viewform" target="_blank" data-astro-cid-dmqpwcec>Submit an Event</a> <a href="/contact" data-astro-cid-dmqpwcec>Contact</a> <a href="/privacy-policy" target="_blank" data-astro-cid-dmqpwcec>Privacy Policy</a> <a href="/terms-and-conditions" data-astro-cid-dmqpwcec>Terms and Conditions</a> </div> <script>\n    function openNav() {\n      document.getElementById("sideNavPopOut").style.width = "250px";\n    }\n\n    function closeNav() {\n      document.getElementById("sideNavPopOut").style.width = "0";\n    }\n\n    (function () {\n      var el = document.getElementById("nav-logo");\n      if (!el) return;\n      el.addEventListener("mouseenter", function () { el.classList.add("logo-hovered"); });\n      el.addEventListener("mouseleave", function () { el.classList.remove("logo-hovered"); });\n    })();\n  <\/script> </nav>'])), renderHead());
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://thingshappening.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { dotGrid = false } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<footer", '> <div data-test="footer-text">&copy;<script type="text/javascript"> document.write(new Date().getFullYear()); <\/script> thingshappening</div> <a href="/about">About</a> <a href="/contact">Contact</a> <a href="/privacy-policy">Privacy Policy</a> <a href="/terms-and-conditions">Terms and Conditions</a> <!-- <Social /> --> </footer> <!-- Prism JS --> <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"><\/script> -->'])), maybeRenderHead(), addAttribute(`py-6 lg:py-12 flex flex-col px-4 md:px-8 lg:px-16${dotGrid ? " dot-grid-bg" : ""}`, "class"));
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Footer/Footer.astro", void 0);

export { $$BaseHead as $, $$Nav as a, $$Footer as b };
