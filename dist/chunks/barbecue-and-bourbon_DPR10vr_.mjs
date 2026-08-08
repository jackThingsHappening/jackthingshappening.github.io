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
  "title": "Barbecue & Bourbon Dinner",
  "published": true,
  "pubDate": "2026-09-17",
  "time": "6:00pm",
  "entranceCost": "$225",
  "seoDescription": "Farm-to-table four-course dinner at Happy Valley Farms in Rossville, GA with pitmaster Chris Prieto, bourbon cocktails, and live music.",
  "venue": "Happy Valley Farms",
  "address": "Rossville, GA (minutes from Chattanooga)",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://www.happyvalleyfarms.com/events",
  "tags": [{
    "type": "place",
    "tag": "happy-valley-farms"
  }, {
    "type": "genre",
    "tag": "farm"
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
    children: "Four courses with award-winning pitmaster Chris Prieto — smoked brisket, farm-sourced sides, specialty bourbon cocktails, and live music against the sunflower fields. Happy Valley is just over the Georgia line, about 15 minutes from downtown Chattanooga. $225 per person, ticketed."
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
const url = "/chattanooga/events/happy-valley-farms/barbecue-and-bourbon";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/happy-valley-farms/barbecue-and-bourbon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/happy-valley-farms/barbecue-and-bourbon.mdx";
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
