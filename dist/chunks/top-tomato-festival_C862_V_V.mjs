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
  "title": "Chattanooga Market — Top Tomato Festival",
  "published": false,
  "pubDate": "2026-06-07",
  "time": "11:00am - 4:00pm",
  "entranceCost": "Free",
  "seoDescription": "The Chattanooga Market's Top Tomato Festival at First Horizon Pavilion on June 7 — celebrating summer tomatoes with a Bloody Mary sampling event, local vendors, and fresh produce.",
  "venue": "First Horizon Pavilion",
  "address": "1826 Reggie White Blvd, Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/cocktail.png",
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
    children: "The Chattanooga Market’s annual tomato celebration takes over First Horizon Pavilion on June 7. The headliner is a Bloody Mary sampling event, featuring bold, spicy, and tangy variations from local makers. All the usual market vendors, fresh produce, and food are there too. Free, 11am–4pm."
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
const url = "/chattanooga/events/first-horizon/top-tomato-festival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/first-horizon/top-tomato-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/first-horizon/top-tomato-festival.mdx";
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
