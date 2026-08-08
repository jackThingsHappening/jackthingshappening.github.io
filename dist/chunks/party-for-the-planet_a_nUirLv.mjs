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
  "title": "Party for the Planet",
  "published": false,
  "pubDate": "2026-05-31",
  "entranceCost": "Free with admission",
  "seoDescription": "The Tennessee Aquarium's Party for the Planet celebrates conservation and wildlife with family-friendly programming alongside Chattanooga's most fascinating aquatic creatures.",
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
    children: "The Tennessee Aquarium’s annual conservation celebration brings family-friendly activities and programming centered on wildlife and the ecosystems the Aquarium works to protect. It’s included with regular admission, so no extra ticket needed. A solid day to bring the kids downtown and make a full afternoon of it."
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
const url = "/chattanooga/events/acquarium/party-for-the-planet";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/party-for-the-planet.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/party-for-the-planet.mdx";
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
