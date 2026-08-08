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
  "title": "The Brook & The Bluff",
  "published": true,
  "pubDate": "2026-10-05",
  "time": "8:00pm",
  "entranceCost": "Tickets required",
  "seoDescription": "Four-part-harmony rock band The Brook & The Bluff returns to The Signal on October 5.",
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
    children: "Harmony-rich rockers The Brook & The Bluff plug back into their high-voltage roots at The Signal on October 5. Music at 8pm."
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
const url = "/chattanooga/events/the-signal-the-brook-and-the-bluff";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/the-signal-the-brook-and-the-bluff.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/the-signal-the-brook-and-the-bluff.mdx";
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
