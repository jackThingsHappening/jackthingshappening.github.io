import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, j as renderSlot } from './astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://thingshappening.com");
const $$ExploreHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExploreHeader;
  const {
    subheading,
    headingClass = "font-jakarta font-semibold text-5xl md:text-6xl leading-[1.2]",
    subheadingClass = "text-gray-600 text-xl3 mt-3 mb-6"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="pt-8"> <h1${addAttribute(headingClass, "class")}> ${renderSlot($$result, $$slots["default"])} </h1> ${subheading && renderTemplate`<p${addAttribute(subheadingClass, "class")}>${subheading}</p>`} </header>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/ExploreHeader.astro", void 0);

export { $$ExploreHeader as $ };
