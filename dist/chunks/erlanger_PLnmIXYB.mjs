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
  "title": "Market at Erlanger Medical Mall",
  "venue": "Erlanger Medical Mall",
  "address": "975 East 3rd Street, Chattanooga, TN 37403",
  "iconPath": "/images/icons-new/market.png",
  "time": "10:30am - 1:30pm",
  "eventLink": "https://chattanoogamarket.com/calendar/",
  "tags": [{
    "type": "place",
    "tag": "chattanooga-market"
  }, {
    "type": "genre",
    "tag": "market"
  }],
  "entranceCost": "Free",
  "seoDescription": "The Chattanooga Market at Erlanger Medical Mall every Wednesday, 10:30am–1:30pm in Lobby A. Fresh produce, local art, and live music. Free admission.",
  "eventDates": ["2026-07-29", "2026-08-05", "2026-08-12", "2026-08-19", "2026-08-26", "2026-09-02", "2026-09-09", "2026-09-16", "2026-09-23", "2026-09-30", "2026-10-07", "2026-10-14", "2026-10-21", "2026-10-28", "2026-11-04", "2026-11-11", "2026-11-18", "2026-11-25", "2026-12-02", "2026-12-09"],
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
    children: "The Chattanooga Market runs at Erlanger Medical Mall every Wednesday from 10:30am to 1:30pm. Find it in Lobby A. Fresh produce, local art, and live music in a hospital atrium. Free to browse, no ticket needed."
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
const url = "/chattanooga/events/chattanooga-market/erlanger";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/chattanooga-market/erlanger.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/chattanooga-market/erlanger.mdx";
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
