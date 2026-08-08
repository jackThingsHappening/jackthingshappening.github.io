import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from './astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://thingshappening.com");
const $$GuidesEditorialsNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GuidesEditorialsNav;
  const { active } = Astro2.props;
  const linkClass = (tab) => active === tab ? "text-customGreen1 font-semibold border-b-2 border-black pb-1" : "text-gray-600 hover:text-customGreen1 pb-1 border-b-2 border-transparent hover:border-black transition-colors";
  return renderTemplate`${maybeRenderHead()}<nav class="flex gap-5 pt-10 text-2xl md:text-[1.7rem]" aria-label="Guides and editorials"> <a href="/chattanooga"${addAttribute(linkClass("all"), "class")}>All</a> <a href="/chattanooga/guides/tag/interactive"${addAttribute(linkClass("interactive"), "class")}>Interactive</a> <a href="/chattanooga/guides/tag/longform"${addAttribute(linkClass("guides"), "class")}> <span class="md:hidden">Longform</span> <span class="hidden md:inline">Longform Guides</span> </a> </nav>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/GuidesEditorialsNav.astro", void 0);

export { $$GuidesEditorialsNav as $ };
