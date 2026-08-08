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
  "title": "Sunday Studio",
  "published": true,
  "pubDate": "2026-08-09",
  "entranceCost": "See event page for details",
  "seoDescription": "Sunday Studio is a hands-on art workshop at the Hunter Museum on August 9.",
  "venue": "Hunter Museum of American Art",
  "address": "10 Bluff View Ave, Chattanooga, TN 37403",
  "iconPath": "/images/icons-new/museum.png",
  "eventLink": "https://www.huntermuseum.org/events",
  "tags": [{
    "type": "place",
    "tag": "hunter-museum"
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
    children: "Sunday Studio sets you loose with real materials on August 9. Make something with your own hands, then walk the galleries with paint still on your fingers. Kids and grownups both get a table. Drop in when it suits you and follow the project wherever it goes."
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
const url = "/chattanooga/events/hunter-museum/sunday-studio";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/hunter-museum/sunday-studio.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/hunter-museum/sunday-studio.mdx";
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
