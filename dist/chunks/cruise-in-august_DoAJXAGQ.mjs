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
  "title": "MainStreet Cruise-In — August",
  "published": true,
  "pubDate": "2026-08-22",
  "time": "12:00pm",
  "entranceCost": "Free",
  "seoDescription": "Classic cars line the streets around Courthouse Square on the fourth Saturday of August.",
  "venue": "MainStreet Cleveland",
  "address": "160 Second Street NE, Cleveland, TN 37311",
  "iconPath": "/images/icons-new/market.png",
  "eventLink": "https://msctn.org/?page_id=1938",
  "tags": [{
    "type": "place",
    "tag": "mainstreet-cleveland"
  }, {
    "type": "genre",
    "tag": "community"
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
    children: "Classic cars fill the streets around Courthouse Square from noon to 4pm. Local owners bring everything from restored muscle cars to polished pickup trucks. Walk the block, talk to the owners, grab lunch from a nearby spot."
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
const url = "/chattanooga/events/city/cleveland/mainstreet-cleveland/cruise-in-august";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/mainstreet-cleveland/cruise-in-august.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/mainstreet-cleveland/cruise-in-august.mdx";
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
