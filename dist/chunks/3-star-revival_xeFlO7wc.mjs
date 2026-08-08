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
  "title": "3 Star Revival",
  "published": true,
  "pubDate": "2026-08-22",
  "time": "9:00pm",
  "entranceCost": "$10",
  "seoDescription": "3 Star Revival brings Tennessee funk and groove to WanderLinger Brewing on August 22 at 9pm. $10 cover in Chattanooga's Southside.",
  "venue": "WanderLinger Brewing Company",
  "address": "55 Station Street, Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/beer.png",
  "eventLink": "https://www.wanderlinger.com/events-1",
  "tags": [{
    "type": "place",
    "tag": "wanderlinger"
  }, {
    "type": "genre",
    "tag": "music"
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
    children: "3 Star Revival takes the WanderLinger stage on August 22 at 9pm with their brand of Tennessee funk and groove. The band leans hard on improvisation, so no two sets sound the same. Settle in with a beer and let the groove ride. $10 gets you in the door on Station Street."
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
const url = "/chattanooga/events/wanderlinger/3-star-revival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/wanderlinger/3-star-revival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/wanderlinger/3-star-revival.mdx";
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
