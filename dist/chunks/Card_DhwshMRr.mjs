import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderScript, i as addAttribute, a as renderComponent } from './astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import dayjs from 'dayjs';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://thingshappening.com");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { images } = Astro2.props;
  const normalizedImages = images.map((img) => {
    if (typeof img === "string") {
      return { src: img, position: "top" };
    }
    return { src: img.src, position: img.position || "top" };
  });
  const positionClasses = {
    top: "object-top",
    upper: "object-[50%_25%]",
    center: "object-center",
    lower: "object-[50%_75%]",
    bottom: "object-bottom"
  };
  return renderTemplate`${maybeRenderHead()}<div class="carousel-container relative w-full overflow-hidden rounded-t-xl py-4" data-astro-cid-wfe7xcno> <!-- Images Track --> <div class="carousel-track flex gap-3 transition-transform duration-150 ease-out" data-astro-cid-wfe7xcno> ${normalizedImages.map((img, index) => renderTemplate`<div class="carousel-slide flex-shrink-0"${addAttribute(index, "data-index")} data-astro-cid-wfe7xcno> <img${addAttribute(img.src, "src")}${addAttribute(`Slide ${index + 1}`, "alt")}${addAttribute(`w-full aspect-[3/2] object-cover rounded-lg ${positionClasses[img.position]}`, "class")} loading="eager" data-astro-cid-wfe7xcno> </div>`)} </div> <!-- Navigation Controls --> <div class="carousel-controls flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100" data-astro-cid-wfe7xcno> <!-- Arrow Navigation (Left Side) --> <div class="flex items-center gap-2" data-astro-cid-wfe7xcno> <button class="carousel-prev w-9 h-9 flex items-center justify-center rounded-full bg-white border-2 border-logoDarkGreen hover:bg-gray-100 transition-all duration-150 shadow-sm" aria-label="Previous image" data-astro-cid-wfe7xcno> <svg class="w-4 h-4 text-customGreen1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wfe7xcno> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-wfe7xcno></path> </svg> </button> <button class="carousel-next w-9 h-9 flex items-center justify-center rounded-full bg-white border-2 border-logoDarkGreen hover:bg-gray-100 transition-all duration-150 shadow-sm" aria-label="Next image" data-astro-cid-wfe7xcno> <svg class="w-4 h-4 text-customGreen1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wfe7xcno> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-wfe7xcno></path> </svg> </button> </div> <!-- Dot Navigation (Right Side) --> <div class="carousel-dots flex items-center gap-3" data-astro-cid-wfe7xcno> ${images.map((_, index) => renderTemplate`<button${addAttribute(`carousel-dot w-4 h-4 rounded-full border-2 transition-all duration-150 ${index === 0 ? "bg-customGreen1 border-logoDarkGreen" : "bg-white border-gray-400 hover:border-gray-600"}`, "class")}${addAttribute(index, "data-index")}${addAttribute(`Go to slide ${index + 1}`, "aria-label")} data-astro-cid-wfe7xcno></button>`)} </div> </div> </div> ${renderScript($$result, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Carousel.astro", void 0);

const $$Astro = createAstro("https://thingshappening.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  let { post, highlighted, images } = Astro2.props;
  const iconPath = post.iconPath ? post.iconPath.startsWith("/") || post.iconPath.startsWith("http") ? post.iconPath : post.iconPath.includes("images/") ? "/" + post.iconPath.replace(/^.*images\//, "images/") : post.iconPath : void 0;
  const carouselImages = images?.length ? images : post.images?.length ? post.images : [];
  const singleImage = carouselImages.length === 1 ? typeof carouselImages[0] === "string" ? { src: carouselImages[0], position: "center" } : { src: carouselImages[0].src, position: carouselImages[0].position || "center" } : null;
  const positionClasses = {
    top: "object-top",
    upper: "object-[50%_25%]",
    center: "object-center",
    lower: "object-[50%_75%]",
    bottom: "object-bottom"
  };
  const pubDate = post.pubDate || post.lastUpdated;
  const pubDateLocal = typeof pubDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(pubDate) ? pubDate + "T00:00:00" : pubDate;
  const date = new Date(pubDateLocal);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  let eventDateDetails;
  if (post.eventDatesDetails) {
    const slugFromUrl = post.url?.split("/").pop();
    const slugify = (title) => (title ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    eventDateDetails = post.eventDatesDetails.find(
      (dateObj) => dateObj.date === post.pubDate && slugify(dateObj.eventTitle) === slugFromUrl
    );
  }
  eventDateDetails && eventDateDetails.eventTitle ? eventDateDetails.eventTitle : dayjs(pubDateLocal).format("MM-DD-YYYY");
  return renderTemplate`${maybeRenderHead()}<div class="bg-white border-[1.5px] border-black hover:border-customGreen1 transition-all duration-75 ease-in-out h-full block shadow-lg hover:shadow-2xl rounded-xl overflow-hidden" data-test="article-card" data-astro-cid-dohjnao5> <!-- Title & Date Section --> <a${addAttribute(post.url, "href")} class="block" data-astro-cid-dohjnao5> <div class="pt-6 pb-3 px-4" data-astro-cid-dohjnao5> <h2 class="text-[1.8rem] leading-tight" style="" data-astro-cid-dohjnao5> ${post.title}${eventDateDetails?.eventTitle ? `: ${eventDateDetails.eventTitle}` : ""} </h2> ${(post.pubDate || post.lastUpdated) && renderTemplate`<p class="text-lg text-gray-600 mt-2 flex items-center gap-2" data-astro-cid-dohjnao5> ${`${dayOfWeek}`} ${dayjs(pubDateLocal).format("MM-DD-YYYY")} ${iconPath ? renderTemplate`<img class="w-8 h-8 inline-icon"${addAttribute(iconPath, "src")} alt="icon" data-astro-cid-dohjnao5>` : ""} </p>`} ${post.time && renderTemplate`<p class="text-lg text-gray-600" data-astro-cid-dohjnao5>${post.time}</p>`} </div> </a> <!-- Images Section: single image when one, carousel when multiple --> ${singleImage && renderTemplate`<div class="w-full overflow-hidden rounded-t-xl py-4 px-4" data-astro-cid-dohjnao5> <img${addAttribute(singleImage.src, "src")} alt=""${addAttribute(`w-full aspect-[3/2] object-cover rounded-lg ${positionClasses[singleImage.position] || positionClasses.center}`, "class")} loading="eager" data-astro-cid-dohjnao5> </div>`} ${carouselImages.length > 1 && renderTemplate`${renderComponent($$result, "Carousel", $$Carousel, { "images": carouselImages, "data-astro-cid-dohjnao5": true })}`} <!-- Overview Section --> ${(post.seoDescription || post.topDetails?.text) && renderTemplate`<a${addAttribute(post.url, "href")} class="block" data-astro-cid-dohjnao5> <p class="px-4 mt-6 mb-1 text-lg text-gray-600 line-clamp-2" data-astro-cid-dohjnao5>${post.seoDescription || post.topDetails?.text}<span class="text-2xl" data-astro-cid-dohjnao5>...</span></p> </a>`} <!-- Full Description Accordion --> ${(post.seoDescription || post.topDetails?.text) && renderTemplate`<details class="group px-4 mt-3" data-astro-cid-dohjnao5> <summary class="cursor-pointer list-none flex items-center gap-1 text-lg text-customGreen1 select-none w-fit py-1 hover:underline hover:opacity-80" data-astro-cid-dohjnao5> <svg class="w-4 h-4 transition-transform duration-150 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-astro-cid-dohjnao5> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-dohjnao5></path> </svg> <span class="group-open:hidden" data-astro-cid-dohjnao5>Full description</span> <span class="hidden group-open:inline" data-astro-cid-dohjnao5>Less</span> </summary> <a${addAttribute(post.url, "href")} class="block" data-astro-cid-dohjnao5> <p class="mt-2 mb-2 text-xl text-gray-600" data-astro-cid-dohjnao5>${post.seoDescription || post.topDetails?.text}</p> </a> </details>`} <!-- More Details Accordion (events only) --> ${(post.venue || post.entranceCost || post.address || post.eventLink) && renderTemplate`<details class="group px-4 pb-3" data-astro-cid-dohjnao5> <summary class="cursor-pointer list-none flex items-center gap-1 text-lg text-customGreen1 select-none w-fit py-1 hover:underline hover:opacity-80" data-astro-cid-dohjnao5> <svg class="w-4 h-4 transition-transform duration-150 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-astro-cid-dohjnao5> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" data-astro-cid-dohjnao5></path> </svg> <span class="group-open:hidden" data-astro-cid-dohjnao5>More details</span> <span class="hidden group-open:inline" data-astro-cid-dohjnao5>Less</span> </summary> <div class="mt-2 space-y-1 text-base text-gray-600 pl-1" data-astro-cid-dohjnao5> ${post.venue && renderTemplate`<p data-astro-cid-dohjnao5>${post.venue}</p>`} ${post.address && renderTemplate`<p data-astro-cid-dohjnao5>${post.address}</p>`} ${post.entranceCost && renderTemplate`<p data-astro-cid-dohjnao5>Cost: ${post.entranceCost}</p>`} ${post.eventLink && renderTemplate`<a${addAttribute(post.eventLink, "href")} target="_blank" rel="noopener noreferrer" class="text-customGreen1 underline block" data-astro-cid-dohjnao5>Event info &rarr;</a>`} </div> </details>`} <!-- Tags Section --> <div class="flex items-center px-4 pb-5 pt-1 text-base" data-astro-cid-dohjnao5> ${post.tags && renderTemplate`<div data-astro-cid-dohjnao5> ${Array.isArray(post.tags) ? post.tags.map((t) => {
    const highlight = t == highlighted ? "font-semibold" : "";
    const tagHref = t.type === "guide" ? `/chattanooga/guides/tag/${t.tag}` : `/chattanooga/events/tag/${t.tag}`;
    return renderTemplate`<a${addAttribute(tagHref, "href")}${addAttribute(`${highlight} transition-all duration-75 h-fit inline pr-2`, "class")} data-astro-cid-dohjnao5><span class="text-customGreen1" data-astro-cid-dohjnao5>#</span>${`${t.tag}`}</a>`;
  }) : renderTemplate`<span data-astro-cid-dohjnao5>Tags are not an array.</span>`} </div>`} </div> </div> `;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Card.astro", void 0);

export { $$Card as $ };
