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
  "title": "Art After Dark",
  "published": true,
  "pubDate": "2026-08-08",
  "entranceCost": "See event page for details",
  "seoDescription": "Art After Dark brings an evening art experience to the Hunter Museum on August 8.",
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
    children: "The Hunter opens after hours on August 8. Wander the galleries with the lights low and the river out the windows below the bluff. It is a different museum at night, quieter and looser than the daytime crowd. Check the museum site for the run of show and any tickets."
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
const url = "/chattanooga/events/hunter-museum/art-after-dark";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/hunter-museum/art-after-dark.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/hunter-museum/art-after-dark.mdx";
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
