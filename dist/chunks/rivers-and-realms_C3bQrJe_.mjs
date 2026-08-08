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
  "title": "Rivers & Realms",
  "pubDate": "2026-08-21",
  "entranceCost": "See event link",
  "seoDescription": "Rivers & Realms is the Tennessee Aquarium's 18+ fantasy-themed evening in the River Journey building — live bards, local food and drinks, and the aquarium's fish as your backdrop.",
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
    children: "Rivers & Realms is the Tennessee Aquarium’s 18+ fantasy-themed night inside the River Journey building — live bards, local food, drinks, and whatever character you choose to show up as. Tickets aren’t on sale yet, so check the Aquarium’s events page to catch them when they drop. It’s shaping up to be one of the more creative late-summer events in Chattanooga."
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
const url = "/chattanooga/events/acquarium/rivers-and-realms";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/rivers-and-realms.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/rivers-and-realms.mdx";
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
