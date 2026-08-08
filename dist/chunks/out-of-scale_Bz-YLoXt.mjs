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
  "title": "Out of Scale",
  "published": false,
  "pubDate": "2026-08-01",
  "time": "11:00 AM - 2:00 PM",
  "entranceCost": "Members only",
  "seoDescription": "Out of Scale is a members-only day at the Creative Discovery Museum where kids play with perspective and size through hands-on activities.",
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
    children: "Size stops making sense at Out of Scale, the Creative Discovery Museum’s play day on August 1. From 11am to 2pm, kids mess around with perspective through hands on activities scattered across the museum, sorting out how big and small stack up. It’s members only, so bring your card and let the little buckaroos lose track of what’s actually to scale."
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
const url = "/chattanooga/events/creative-discovery-museum/out-of-scale";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/creative-discovery-museum/out-of-scale.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/creative-discovery-museum/out-of-scale.mdx";
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
