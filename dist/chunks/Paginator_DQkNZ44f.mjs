import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from './astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://thingshappening.com");
const $$Paginator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex space-x-8 justify-center text-xl font-bold"> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="mr-8" data-test="paginator-prev"> <span class="">&larr;</span> Prev
</a>`} ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} data-test="paginator-next">
Next<span class="">&rarr;</span> </a>`} </section>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Paginator.astro", void 0);

export { $$Paginator as $ };
