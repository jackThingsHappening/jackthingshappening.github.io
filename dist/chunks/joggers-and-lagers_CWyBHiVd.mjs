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
  "title": "Joggers & Lagers",
  "published": true,
  "venue": "Chattanooga Brewing Co.",
  "address": "730 Chestnut St., Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/beer.png",
  "time": "6:00pm",
  "eventLink": "https://www.chattabrew.com/calendar",
  "tags": [{
    "type": "place",
    "tag": "chattanooga-brewing"
  }, {
    "type": "genre",
    "tag": "food-drink"
  }],
  "entranceCost": "Free",
  "seoDescription": "Free 5K run every Tuesday at 6pm from Chattanooga Brewing Co., with extended happy hour discounts for runners.",
  "eventDates": ["2026-08-04", "2026-08-11", "2026-08-18", "2026-08-25", "2026-09-01", "2026-09-08", "2026-09-15", "2026-09-22", "2026-09-29", "2026-10-06", "2026-10-13", "2026-10-20"],
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
    children: "Lace up for a free 5K that steps off from Chattanooga Brewing every Tuesday at 6pm. Run it hard or walk it easy, then collect the reward: a dollar off pints and half price apps for everyone who shows. Joggers and Lagers is beer earned, then beer enjoyed."
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
const url = "/chattanooga/events/chattanooga-brewing/joggers-and-lagers";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/chattanooga-brewing/joggers-and-lagers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/chattanooga-brewing/joggers-and-lagers.mdx";
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
