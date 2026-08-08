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
  "title": "Kawaii Rave",
  "published": true,
  "pubDate": "2026-08-28",
  "time": "9:00pm",
  "entranceCost": "Tickets required",
  "seoDescription": "A cosplay and anime-themed remix rave lands at The Signal on August 28 (18+).",
  "venue": "The Signal",
  "address": "21 Choo Choo Ave, Chattanooga, TN 37402",
  "iconPath": "/images/icons/music.svg",
  "eventLink": "https://www.thesignaltn.com/tickets/",
  "tags": [{
    "type": "place",
    "tag": "the-signal"
  }, {
    "type": "genre",
    "tag": "music"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro"
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
    children: "The Signal goes full anime on August 28 for Kawaii Rave, a cosplay-friendly remix party built for the anime crowd. Dancing starts at 9pm. Costumes encouraged, 18 and up."
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
const url = "/chattanooga/events/the-signal-kawaii-rave";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/the-signal-kawaii-rave.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/the-signal-kawaii-rave.mdx";
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
