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
  "title": "The New Quintet w/ Brother and the Hayes",
  "published": true,
  "pubDate": "2026-08-28",
  "time": "7:00pm",
  "entranceCost": "See website",
  "seoDescription": "The New Quintet plays Songbirds on August 28 with Brother and the Hayes opening.",
  "venue": "Songbirds",
  "address": "206 W Main Street, Chattanooga, TN",
  "iconPath": "/images/icons-new/music.png",
  "eventLink": "https://venue.songbirds.org/concert-schedule/",
  "tags": [{
    "type": "place",
    "tag": "songbirds"
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
    children: "The New Quintet at Songbirds with Brother and the Hayes opening. Jazz and soul on a Friday — the kind of night that doesn’t need a big crowd to feel full. Songbirds is a good room for it."
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
const url = "/chattanooga/events/songbirds/the-new-quintet-w-brother-and-the-hayes";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/songbirds/the-new-quintet-w-brother-and-the-hayes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/songbirds/the-new-quintet-w-brother-and-the-hayes.mdx";
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
