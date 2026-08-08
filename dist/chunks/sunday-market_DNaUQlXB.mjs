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
  "title": "Farmers on First Sunday Market",
  "venue": "First Street Square",
  "address": "220 1st Street NE, Cleveland, TN 37311",
  "iconPath": "/images/icons-new/market.png",
  "eventLink": "https://farmersonfirst.org/",
  "tags": [{
    "type": "place",
    "tag": "farmers-on-first"
  }, {
    "type": "genre",
    "tag": "community"
  }, {
    "type": "city",
    "tag": "cleveland-tn"
  }],
  "entranceCost": "Free",
  "time": "11:00am–2:00pm",
  "eventDates": ["2026-08-09", "2026-08-16", "2026-08-23", "2026-08-30", "2026-09-06", "2026-09-13", "2026-09-20", "2026-09-27", "2026-10-04", "2026-10-11", "2026-10-18", "2026-10-25"],
  "layout": "../../../../../../layouts/BlogPostLayout.astro"
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
    children: "Farmers on First runs every Sunday from 11am to 2pm in downtown Cleveland’s First Street Square pavilion. Twenty-plus vendors show up weekly with locally grown produce, handmade goods, and food. Free to attend, year-round — moves indoors to the Museum Center at 5ive Points during the coldest winter months."
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
const url = "/chattanooga/events/city/cleveland/farmers-on-first/sunday-market";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/farmers-on-first/sunday-market.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/farmers-on-first/sunday-market.mdx";
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
