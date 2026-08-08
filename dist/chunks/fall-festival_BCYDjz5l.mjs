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
  "title": "Fall Festival at Flat Top Mountain Farm",
  "published": true,
  "pubDate": "2026-10-03",
  "time": "10:00am",
  "entranceCost": "$12",
  "seoDescription": "Fall festival weekends at Flat Top Mountain Farm in Soddy-Daisy, TN — pumpkin patch, hayrides, corn maze, and mountain views.",
  "venue": "Flat Top Mountain Farm",
  "address": "638 Bowman Cemetery Rd, Soddy-Daisy, TN 37379",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://www.flattopmountainfarm.com",
  "tags": [{
    "type": "place",
    "tag": "flat-top-mountain-farm"
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
    children: "Flat Top runs fall weekends through September and October — pumpkin patch, hayrides with views out to the Smoky Mountains, a corn maze, flower fields, food trucks, and local vendors. $12 admission. About 20 minutes north of Chattanooga in Soddy-Daisy."
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
const url = "/chattanooga/events/flat-top-mountain-farm/fall-festival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/flat-top-mountain-farm/fall-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/flat-top-mountain-farm/fall-festival.mdx";
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
