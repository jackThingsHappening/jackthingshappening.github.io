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
  "title": "American Team Championship",
  "published": false,
  "pubDate": "2026-06-26",
  "entranceCost": "",
  "seoDescription": "The American Team Championship — North America's original Warhammer 40k team event — comes to the Chattanooga Convention Center June 26–28, 2026.",
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
    children: "Sixteen years running in Chattanooga, the American Team Championship fills the Convention Center with 8-player Warhammer 40k teams for three days (June 26–28). Star Wars: Shatterpoint, Marvel Crisis Protocol, Kill Team, and modeling workshops round out the weekend into a full miniatures gaming convention. Check whatc.org or the convention center’s calendar for registration and schedule details."
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
const url = "/chattanooga/events/convention-center/american-team-championship";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/convention-center/american-team-championship.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/convention-center/american-team-championship.mdx";
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
