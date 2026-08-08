import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from './astro/server_CzqnycT_.mjs';
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
  "title": "Chattanooga Lookouts Conservation Night",
  "published": false,
  "pubDate": "2026-06-12",
  "time": "7:00 PM",
  "entranceCost": "Varies",
  "seoDescription": "The Tennessee Aquarium teams up with the Chattanooga Lookouts for Conservation Night at Erlanger Park — Double-A baseball with an aquatic conservation theme and fireworks after the game.",
  "venue": "Tennessee Aquarium",
  "address": "1 Broad St, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/expo.png",
  "eventLink": "https://www.tnaqua.org/events",
  "tags": [{
    "type": "place",
    "tag": "acquarium"
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
    children: "The Tennessee Aquarium partners with the Chattanooga Lookouts for Conservation Night on June 12 — a game against the Rocket City Trash Pandas at Erlanger Park with an aquatic conservation theme running through the evening. Fireworks follow the final out. Grab tickets through the Lookouts’ box office."
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
const url = "/chattanooga/events/acquarium/chattanooga-lookouts-conservation-night";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/chattanooga-lookouts-conservation-night.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/chattanooga-lookouts-conservation-night.mdx";
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
