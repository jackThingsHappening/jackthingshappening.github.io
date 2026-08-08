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
  "title": "Sensory Night",
  "published": true,
  "pubDate": "2026-08-13",
  "time": "5:30 PM - 8:00 PM",
  "entranceCost": "Free (members only)",
  "seoDescription": "Sensory Night at the Creative Discovery Museum on August 13 is a low-sensory evening for members from 5:30 to 8pm.",
  "venue": "Creative Discovery Museum",
  "address": "321 Chestnut St, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/museum.png",
  "eventLink": "https://www.cdmfun.org/events",
  "tags": [{
    "type": "place",
    "tag": "creative-discovery-museum"
  }, {
    "type": "genre",
    "tag": "museum"
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
    children: "Sensory Night dials things down at the Creative Discovery Museum on August 13, from 5:30 to 8pm. Lower lights and softer sound make the museum easier to take in for kids who need a calmer setting. Members only, so bring your card and take the exhibits at your own pace."
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
const url = "/chattanooga/events/creative-discovery-museum/sensory-night";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/creative-discovery-museum/sensory-night.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/creative-discovery-museum/sensory-night.mdx";
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
