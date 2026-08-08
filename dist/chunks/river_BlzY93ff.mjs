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
  "title": "Chattanooga Market - River Market",
  "venue": "Tennessee Aquarium Plaza",
  "address": "1 Broad Street, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/market.png",
  "time": "10:00am - 5:00pm",
  "eventLink": "https://chattanoogamarket.com/calendar/",
  "tags": [{
    "type": "place",
    "tag": "chattanooga-market"
  }, {
    "type": "genre",
    "tag": "market"
  }],
  "entranceCost": "Free",
  "seoDescription": "The Chattanooga Market at Tennessee Aquarium Plaza every Saturday. Fresh produce, local art, live music, and food vendors on the downtown riverfront. Free admission.",
  "eventDates": ["2026-08-01", "2026-08-08", "2026-08-15", "2026-08-22", "2026-08-29", "2026-09-05", "2026-09-12", "2026-09-19", "2026-09-26", "2026-10-03", "2026-10-10", "2026-10-17", "2026-10-24", "2026-10-31"],
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
    children: "The Chattanooga Market sets up at the Tennessee Aquarium Plaza every Saturday from 10am to 5pm. Fresh produce, local vendors, art, and live music on the downtown riverfront. Free admission. It draws a consistent Saturday crowd year round."
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
const url = "/chattanooga/events/chattanooga-market/river";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/chattanooga-market/river.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/chattanooga-market/river.mdx";
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
