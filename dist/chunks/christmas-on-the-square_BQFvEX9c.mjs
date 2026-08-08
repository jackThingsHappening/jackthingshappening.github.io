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
  "title": "Christmas on the Square",
  "published": true,
  "pubDate": "2026-11-21",
  "time": "12:00pm",
  "entranceCost": "Free",
  "seoDescription": "Holiday shopping, handmade gifts, and the community tree lighting at 6pm in downtown Cleveland, TN.",
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
    children: "Downtown Cleveland kicks off the holiday season with local vendors selling handmade goods, art, and gifts. Santa shows up in the afternoon and the community tree lights at 6pm. Free and outdoors on the square."
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
const url = "/chattanooga/events/city/cleveland/mainstreet-cleveland/christmas-on-the-square";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/mainstreet-cleveland/christmas-on-the-square.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/mainstreet-cleveland/christmas-on-the-square.mdx";
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
