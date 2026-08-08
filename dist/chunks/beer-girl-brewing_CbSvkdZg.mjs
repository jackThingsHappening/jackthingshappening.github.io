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
  "title": "Beer Girl Brewing at Mash and Hops",
  "published": false,
  "pubDate": "2026-08-09",
  "entranceCost": "See website",
  "seoDescription": "Beer Girl Brewing event at Mash and Hops Craft Beers in Cleveland, TN.",
  "venue": "Mash and Hops Craft Beers",
  "address": "168 First Street NE, Cleveland, TN 37311",
  "iconPath": "/images/icons-new/beer.png",
  "eventLink": "https://www.mashandhops.com/when-is-the-next-party",
  "tags": [{
    "type": "place",
    "tag": "mash-and-hops"
  }, {
    "type": "genre",
    "tag": "food-drink"
  }, {
    "type": "city",
    "tag": "cleveland-tn"
  }],
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
    children: "Beer Girl Brewing stops in at Mash and Hops for an evening event. Check their site for timing and details."
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
const url = "/chattanooga/events/city/cleveland/mash-and-hops/beer-girl-brewing";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/mash-and-hops/beer-girl-brewing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/mash-and-hops/beer-girl-brewing.mdx";
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
