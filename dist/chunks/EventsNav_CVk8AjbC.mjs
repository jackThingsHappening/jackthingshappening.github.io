import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, h as renderScript, a as renderComponent } from './astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro("https://thingshappening.com");
const $$CalendarPicker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CalendarPicker;
  const { active } = Astro2.props;
  const isActive = active === "date";
  return renderTemplate`${maybeRenderHead()}<div class="relative flex items-center gap-2"> <button type="button" id="cal-btn"${addAttribute(`flex items-center pb-1 border-b-2 transition-colors ${isActive ? "border-logoDarkGreen" : "border-transparent hover:border-logoDarkGreen"}`, "class")} aria-label="Pick a date to filter events"> <img src="/images/icons-new/calendar.png" alt="" class="w-6 h-6 md:w-9 md:h-9" aria-hidden="true"> </button> ${isActive && renderTemplate`<a href="/chattanooga#events" class="text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none pb-1" aria-label="Clear date filter">×</a>`} <input type="date" id="cal-date-input" class="absolute opacity-0 pointer-events-none w-px h-px" tabindex="-1" aria-hidden="true"> </div> ${renderScript($$result, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/CalendarPicker.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/CalendarPicker.astro", void 0);

const $$Astro = createAstro("https://thingshappening.com");
const $$EventsNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EventsNav;
  const { active } = Astro2.props;
  const linkClass = (tab) => active === tab ? "text-customGreen1 font-medium border-b-2 border-logoDarkGreen pb-1" : "text-gray-600 hover:text-customGreen1 pb-1 border-b-2 border-transparent hover:border-logoDarkGreen transition-colors";
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-wrap gap-x-3 gap-y-2 pt-16 text-xl md:gap-x-5 md:text-[1.7rem]" aria-label="Event filters"> ${renderComponent($$result, "CalendarPicker", $$CalendarPicker, { "active": active })} <a href="/chattanooga#events"${addAttribute(linkClass("all"), "class")}>All Events</a> <a href="/chattanooga/events/this-weekend"${addAttribute(linkClass("this-weekend"), "class")}>This Weekend</a> <a href="/chattanooga/events/this-week"${addAttribute(linkClass("this-week"), "class")}>This Week</a> <!-- <a href="/chattanooga/events/this-month" class={linkClass('this-month')}>This Month</a> --> <a href="/chattanooga/events/tags"${addAttribute(linkClass("tags"), "class")}>Browse Tags</a> <a href="/chattanooga/events/nearby"${addAttribute(linkClass("nearby"), "class")}>Nearby Cities</a> </nav>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/EventsNav.astro", void 0);

export { $$EventsNav as $ };
