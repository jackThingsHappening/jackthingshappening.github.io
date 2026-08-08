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
  "title": "Chattanooga Market — Midsummer Solstice",
  "pubDate": "2026-06-14",
  "time": "11:00am - 4:00pm",
  "entranceCost": "Free",
  "seoDescription": "The Chattanooga Market's Midsummer Solstice edition at First Horizon Pavilion on June 14. Local vendors, fresh produce, food, and live music celebrating the height of summer.",
  "venue": "First Horizon Pavilion",
  "address": "1826 Reggie White Blvd, Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/market.png",
  "eventLink": "https://chattanoogamarket.com/",
  "tags": [{
    "type": "place",
    "tag": "chattanooga-market"
  }, {
    "type": "place",
    "tag": "first-horizon"
  }],
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
    children: "The Chattanooga Market marks midsummer at First Horizon Pavilion on June 14, with local vendors, fresh produce, food, and live music dressed up for the occasion. Free, 11am–4pm."
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
const url = "/chattanooga/events/first-horizon/midsummer-solstice-market";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/first-horizon/midsummer-solstice-market.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/first-horizon/midsummer-solstice-market.mdx";
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
