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
  "title": "The Pink Bride Show",
  "published": true,
  "pubDate": "2026-09-06",
  "entranceCost": "Free (general admission)",
  "seoDescription": "The Pink Bride Show returns to the Chattanooga Convention Center on September 6, 2026, connecting engaged couples with local wedding vendors.",
  "venue": "Chattanooga Convention Center",
  "address": "1 Carter Plaza, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/events.png",
  "eventLink": "https://www.chattanoogaconventioncenter.org/chattanooga-events",
  "tags": [{
    "type": "place",
    "tag": "convention-center"
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
    children: "Photographers, caterers, florists, venues, and every other vendor you need for a wedding, all in one room at the Convention Center on September 6 from noon to 4pm. General admission is free. VIP bundle available at checkout if you want the extras. Find the vendor lineup at thepinkbride.com."
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
const url = "/chattanooga/events/convention-center/the-pink-bride-show";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/convention-center/the-pink-bride-show.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/convention-center/the-pink-bride-show.mdx";
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
