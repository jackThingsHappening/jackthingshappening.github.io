import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
import { $ as $$BlogPostLayout } from './BlogPostLayout_Bqj5Bb28.mjs';
import 'html-escaper';
import 'clsx';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$BlogPostLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "title": "Trivia with Barry",
  "published": true,
  "venue": "Chattanooga Brewing Co.",
  "address": "730 Chestnut St., Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/beer.png",
  "time": "7:00pm",
  "eventLink": "https://www.chattabrew.com/calendar",
  "tags": [{
    "type": "place",
    "tag": "chattanooga-brewing"
  }, {
    "type": "genre",
    "tag": "food-drink"
  }],
  "entranceCost": "Free",
  "seoDescription": "Free trivia night with Barry every Wednesday at 7pm at Chattanooga Brewing Co., with beer specials and half-price wings.",
  "eventDates": ["2026-08-05", "2026-08-12", "2026-08-19", "2026-08-26", "2026-09-02", "2026-09-09", "2026-09-16", "2026-09-23", "2026-09-30", "2026-10-07", "2026-10-14", "2026-10-21"],
  "layout": "../../../../layouts/BlogPostLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "Wednesday nights belong to Barry at Chattanooga Brewing on Chestnut St. Trivia runs 7 to 9pm and points carry over week to week, so a steady crew builds a real edge. Beer specials and half price wings keep the table happy, and the top scorers walk out with prizes. Free to play."
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
const url = "/chattanooga/events/chattanooga-brewing/trivia-with-barry";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/chattanooga-brewing/trivia-with-barry.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/chattanooga-brewing/trivia-with-barry.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
