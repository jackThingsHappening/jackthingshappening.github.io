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
  "title": "The Banshees",
  "published": true,
  "pubDate": "2026-08-08",
  "time": "7:00pm",
  "entranceCost": "See website",
  "seoDescription": "Chattanooga indie rock band The Banshees at The Woodshop on August 8. Formed in 2023, known for original songwriting and high-energy sets.",
  "venue": "The Woodshop Listening Room",
  "address": "5500 Saint Elmo Avenue, Chattanooga, TN 37409",
  "iconPath": "/images/icons-new/music.png",
  "eventLink": "https://thewoodshoplisteningroom.com/shows",
  "tags": [{
    "type": "place",
    "tag": "woodshop"
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
    children: "The Banshees are a Chattanooga indie rock band that came together in 2023, built on original songwriting and loud, energetic live shows. A hometown act in a small room. Doors at 6pm, show at 7pm."
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
const url = "/chattanooga/events/woodshop/woodshop-the-banshees";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/woodshop/woodshop-the-banshees.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/woodshop/woodshop-the-banshees.mdx";
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
