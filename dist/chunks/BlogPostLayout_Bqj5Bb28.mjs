import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, h as renderScript, j as renderSlot, a as renderComponent, b as renderHead } from './astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as $$Footer, a as $$Nav, $ as $$BaseHead } from './Footer_DZF0fV6j.mjs';
import { $ as $$EmailSignup } from './EmailSignup_DJIq-Ky7.mjs';
import dayjs from 'dayjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://thingshappening.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  let {
    address,
    author,
    readTime,
    matchedDetails,
    eventDatesDetails,
    eventDates,
    eventLink,
    entranceCost,
    lastUpdated,
    originalDate,
    title,
    time,
    pubDate,
    tags,
    ticketsLink,
    venue,
    venueDetails,
    hero,
    youtube,
    // Additional optional metadata
    seoDescription,
    featured,
    geoCoverage,
    neighborhoods,
    seasonality,
    accessibilityNotes,
    parking,
    kidFriendly,
    petFriendly,
    bestFor,
    sources,
    pageItems,
    seriesLabel,
    pathname,
    hideSignup
  } = Astro2.props;
  const displaySeriesLabel = seriesLabel ?? (pathname?.includes("/editorials/") ? "A Things Happening Chattanooga Editorial" : pathname?.includes("/events/") ? "Things Happening In Chattanooga" : "The Chattanooga Guides Series");
  const displayDates = eventDates?.length ? eventDates : eventDatesDetails?.map((d) => d.date) ?? [];
  const date = new Date(pubDate);
  let eventDateDetails;
  if (matchedDetails) {
    eventDateDetails = matchedDetails;
  } else if (eventDatesDetails) {
    eventDateDetails = eventDatesDetails.find((dateObj) => dateObj.date == pubDate);
  }
  console.log(matchedDetails);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  eventDateDetails && eventDateDetails.eventTitle ? eventDateDetails.eventTitle : dayjs(pubDate).format("MM-DD-YYYY");
  entranceCost = eventDateDetails && eventDateDetails.entranceCost ? eventDateDetails.entranceCost : entranceCost;
  time = eventDateDetails && eventDateDetails.time ? eventDateDetails.time : time;
  venue = eventDateDetails && eventDateDetails.venue ? eventDateDetails.venue : venue;
  address = eventDateDetails && eventDateDetails.address ? eventDateDetails.address : address;
  ticketsLink = eventDateDetails && eventDateDetails.ticketsLink ? eventDateDetails.ticketsLink : ticketsLink;
  eventLink = eventDateDetails && eventDateDetails.eventLink ? eventDateDetails.eventLink : eventLink;
  const hasMetadata = !!(pubDate || time || venue || address || entranceCost || author || readTime || lastUpdated || originalDate || geoCoverage || neighborhoods && neighborhoods.length || seasonality || parking || accessibilityNotes || kidFriendly !== void 0 || petFriendly !== void 0 || bestFor && bestFor.length || eventLink || ticketsLink || tags && tags.length > 0 || sources && sources.length || displayDates.length > 0);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`header-styles pt-14 pb-14 lg:flex-wrap md:flex-wrap sm:flex-nowrap text-xl ${!hasMetadata && !displaySeriesLabel ? "mb-0" : "mb-10"}`, "class")} data-astro-cid-xj2uyz6m> <header class="max-w-5xl content max-w-5xl mx-auto px-3 text-3xl tracking-wide" data-astro-cid-xj2uyz6m> ${displaySeriesLabel ? renderTemplate`<h2 class="text-xl font-semibold tracking-widest" data-astro-cid-xj2uyz6m> ${displaySeriesLabel} </h2>` : null} <h1 class="break-words mb-0" style="font-family: 'Libre Baskerville', serif; font-size: clamp(2.75rem, 5vw, 4.5rem);" data-astro-cid-xj2uyz6m>${title}${eventDateDetails?.eventTitle ? `: ${eventDateDetails.eventTitle}` : ""}</h1> </header> ${hasMetadata && renderTemplate`<div class="max-w-5xl content max-w-5xl mx-auto px-3 text-lg" data-astro-cid-xj2uyz6m> <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-1" data-astro-cid-xj2uyz6m> ${pubDate ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>When:</span> ${pubDate} ${`(${dayOfWeek})`}</div>` : ""} ${time ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Time:</span> ${time}</div>` : ""} ${venue ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Venue:</span> ${venue}</div>` : ""} ${venueDetails ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Venue Details:</span> ${venueDetails}</div>` : ""} ${address ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Address:</span> ${address}</div>` : ""} ${entranceCost ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Entrance Fee:</span> ${entranceCost}</div>` : ""} ${author ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Original Author:</span> <a href="/about" data-astro-cid-xj2uyz6m>${author}</a></div>` : ""} ${readTime ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Read time:</span> ${readTime}</div>` : ""} ${lastUpdated ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Last updated:</span> ${lastUpdated}</div>` : ""} ${originalDate ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Published on:</span> ${originalDate}</div>` : ""} ${geoCoverage ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Geo coverage:</span> ${geoCoverage}</div>` : ""} ${neighborhoods && neighborhoods.length ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Neighborhoods:</span> ${neighborhoods.join(", ")}</div>` : ""} ${seasonality ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Seasonality:</span> ${seasonality}</div>` : ""} ${parking ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Parking:</span> ${parking}</div>` : ""} ${accessibilityNotes ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Accessibility:</span> ${accessibilityNotes}</div>` : ""} ${kidFriendly !== void 0 ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Kid friendly:</span> ${kidFriendly ? "Yes" : "No"}</div>` : ""} ${petFriendly !== void 0 ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Pet friendly:</span> ${petFriendly ? "Yes" : "No"}</div>` : ""} ${bestFor && bestFor.length ? renderTemplate`<div data-astro-cid-xj2uyz6m><span class="font-semibold" data-astro-cid-xj2uyz6m>Best for:</span> ${bestFor.join(", ")}</div>` : ""} </div> <div class="mt-2" data-astro-cid-xj2uyz6m> ${eventLink ? renderTemplate`<a target="_blank" class="mr-3 underline-pink"${addAttribute(eventLink, "href")} data-astro-cid-xj2uyz6m>Event Website</a>` : ""} ${() => {
    if (ticketsLink && ticketsLink.includes("http")) {
      return renderTemplate`<a target="_blank" class="mr-1 underline-pink"${addAttribute(ticketsLink, "href")} data-astro-cid-xj2uyz6m>Tickets Link</a>`;
    } else if (ticketsLink) {
      return renderTemplate`<div data-astro-cid-xj2uyz6m><b data-astro-cid-xj2uyz6m>Tickets Link:</b> ${ticketsLink}</div>`;
    } else ;
  }} </div> ${(pathname?.includes("/events/") || pathname?.includes("/guides/")) && renderTemplate`<div class="mt-3" data-astro-cid-xj2uyz6m> <button id="copy-link-btn" class="inline-flex items-center gap-1.5 text-sm text-white hover:text-customGreen1 transition-colors cursor-pointer border border-gray-300 hover:border-customGreen1 rounded-full px-5 py-2" data-astro-cid-xj2uyz6m> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xj2uyz6m><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" data-astro-cid-xj2uyz6m></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" data-astro-cid-xj2uyz6m></path></svg> <span id="copy-link-label" data-astro-cid-xj2uyz6m>Copy link</span> </button> </div>`} <div class="mt-2" data-astro-cid-xj2uyz6m> ${tags && tags.length > 0 && renderTemplate`<div data-astro-cid-xj2uyz6m> ${tags.map((tag) => {
    const tagHref = tag.type === "guide" ? `/chattanooga/guides/tag/${tag.tag}` : `/tag/${tag.type}/${tag.tag}`;
    return renderTemplate`<a class="mr-3 no-underline text-warmGreen"${addAttribute(tagHref, "href")} data-astro-cid-xj2uyz6m><span class="text-white" data-astro-cid-xj2uyz6m>#</span>${tag.tag}</a>`;
  })} </div>`} </div> ${sources && sources.length ? renderTemplate`<div class="mt-2" data-astro-cid-xj2uyz6m> <div data-astro-cid-xj2uyz6m><b data-astro-cid-xj2uyz6m>Sources:</b> ${sources.join(", ")}</div> </div>` : ""} ${displayDates.length > 0 && renderTemplate`<div class="mt-4" data-astro-cid-xj2uyz6m> <span class="font-semibold" data-astro-cid-xj2uyz6m>Upcoming Dates:</span> ${eventDatesDetails ? renderTemplate`<ul class="mt-2 flex flex-wrap gap-2 list-none p-0 m-0" data-astro-cid-xj2uyz6m> ${displayDates.map((d) => {
    const detail = eventDatesDetails.find((ed) => ed.date === d);
    let href = `?date=${d}`;
    if (detail?.eventTitle && pathname) {
      const slug = detail.eventTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const parts = pathname.split("/").filter(Boolean);
      const dateIdx = parts.findIndex((p) => /^\d{4}-\d{2}-\d{2}$/.test(p));
      const baseParts = dateIdx !== -1 ? parts.slice(0, dateIdx) : parts;
      const basePath = "/" + baseParts.join("/");
      href = `${basePath}/${d}/${slug}`;
    }
    return renderTemplate`<li data-astro-cid-xj2uyz6m> <a${addAttribute(href, "href")}${addAttribute(d, "data-date")} class="date-pill" data-astro-cid-xj2uyz6m> ${dayjs(d).format("ddd MMM D")} </a> </li>`;
  })} </ul>` : renderTemplate`<p class="mt-1 text-gray-300" data-astro-cid-xj2uyz6m> ${displayDates.map((d, i) => renderTemplate`<span data-astro-cid-xj2uyz6m>${dayjs(d).format("ddd MMM D")}${i < displayDates.length - 1 ? " \xB7 " : ""}</span>`)} </p>`} </div>`} </div>`} </div> ${renderScript($$result, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/BlogPost.astro?astro&type=script&index=0&lang.ts")} ${!hideSignup && !pathname?.includes("/events/") && renderTemplate`<div class="max-w-5xl mx-auto px-3 mt-8 mb-4" data-astro-cid-xj2uyz6m> <p class="text-logoDarkGreen-600 text-2xl mb-3" data-astro-cid-xj2uyz6m>Get our local guides and events updates.</p> ${renderComponent($$result, "EmailSignup", $$EmailSignup, { "data-astro-cid-xj2uyz6m": true })} </div>`} <article${addAttribute(`max-w-5xl mx-auto px-3 text-xl tracking-wide ${!hasMetadata && !displaySeriesLabel ? "pt-10" : ""}`, "class")} data-astro-cid-xj2uyz6m> <!-- Image --> ${hero && renderTemplate`<img class="rounded-xl mx-auto" style="min-width: 80%;" loading="lazy"${addAttribute(hero, "src")}${addAttribute(title, "alt")} data-astro-cid-xj2uyz6m>`} <!-- YouTube Video --> ${youtube && renderTemplate`<div class="embed-responsive aspect-ratio-16/9 mt-6 lg:mt-12" data-astro-cid-xj2uyz6m> <iframe width="700" height="500" class="embed-responsive-item"${addAttribute(`https://www.youtube.com/embed/${youtube}`, "src")} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen data-astro-cid-xj2uyz6m></iframe> </div>`} <div data-astro-cid-xj2uyz6m> ${eventDateDetails && eventDateDetails.topDetails && renderTemplate`<div data-astro-cid-xj2uyz6m> ${eventDateDetails.topDetails.title && renderTemplate`<h2 class="text-2xl font-semibold	pt-12" data-astro-cid-xj2uyz6m>${eventDateDetails.topDetails.title}</h2>`} <div style="white-space: pre-wrap;" data-astro-cid-xj2uyz6m>${eventDateDetails.topDetails.text}</div> </div>`} </div> <!-- Content --> <section class="max-w-6xl mx-auto content font-body" data-astro-cid-xj2uyz6m> ${renderSlot($$result, $$slots["default"])} </section> <div data-astro-cid-xj2uyz6m> ${eventDateDetails && eventDateDetails.bottomDetails && renderTemplate`<div data-astro-cid-xj2uyz6m> <h2 class="text-2xl font-semibold	" data-astro-cid-xj2uyz6m>${eventDateDetails.bottomDetails.title}</h2> <div data-astro-cid-xj2uyz6m>${eventDateDetails.bottomDetails.text}</div> </div>`} </div> ${!hideSignup && pathname?.includes("/events/") && renderTemplate`<div class="mt-12 pt-8 border-t border-gray-200" data-astro-cid-xj2uyz6m> <p class="text-logoDarkGreen-600 text-2xl mb-3" data-astro-cid-xj2uyz6m>Get our local guides and events updates.</p> ${renderComponent($$result, "EmailSignup", $$EmailSignup, { "data-astro-cid-xj2uyz6m": true })} </div>`} </article> `;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/BlogPost.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://thingshappening.com");
const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { content } = Astro2.props;
  let {
    address,
    author,
    eventLink,
    readTime,
    originalDate,
    matchedDetails,
    eventDatesDetails,
    eventDates,
    entranceCost,
    lastUpdated,
    ticketsLink,
    tags,
    title,
    time,
    description,
    pubDate,
    venue,
    venueDetails,
    hero,
    youtube,
    // Additional optional metadata
    seoDescription,
    featured,
    geoCoverage,
    neighborhoods,
    seasonality,
    accessibilityNotes,
    parking,
    kidFriendly,
    petFriendly,
    bestFor,
    sources,
    pageItems,
    hideSignup,
    ogImage
  } = content;
  console.log(content);
  console.log("above");
  title = title ? title : "";
  return renderTemplate(_a || (_a = __template(["<html", "> <head>", '<link rel="canonical"', `><script>
      if (window.location.search.includes('tags=') || window.location.search.includes('date=')) {
        var meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex, follow';
        document.head.appendChild(meta);
      }
    <\/script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600&family=Raleway:wght@300;400;600&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">`, "</head> <body> ", ' <main class="overflow-hidden"> ', " </main> ", " </body></html>"])), addAttribute(content.lang || "en", "lang"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": seoDescription || description, "ogImage": ogImage ? `https://thingshappening.com${ogImage}` : void 0 }), addAttribute(`https://thingshappening.com${Astro2.url.pathname}`, "href"), renderHead(), renderComponent($$result, "Nav", $$Nav, {}), renderComponent($$result, "BlogPost", $$BlogPost, { "tags": tags, "author": author, "readTime": readTime, "matchedDetails": matchedDetails, "originalDate": originalDate, "lastUpdated": lastUpdated, "eventDatesDetails": eventDatesDetails, "eventDates": eventDates, "address": address, "eventLink": eventLink, "entranceCost": entranceCost, "ticketsLink": ticketsLink, "title": title, "venue": venue, "venueDetails": venueDetails, "time": time, "hero": hero, "pubDate": pubDate, "youtube": youtube, "seoDescription": seoDescription, "featured": featured, "geoCoverage": geoCoverage, "neighborhoods": neighborhoods, "seasonality": seasonality, "accessibilityNotes": accessibilityNotes, "parking": parking, "kidFriendly": kidFriendly, "petFriendly": petFriendly, "bestFor": bestFor, "sources": sources, "pageItems": pageItems, "seriesLabel": content.seriesLabel, "pathname": Astro2.url.pathname, "hideSignup": hideSignup }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/layouts/BlogPostLayout.astro", void 0);

export { $$BlogPostLayout as $ };
