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
  "title": "Build a Cumberland Foot Stool",
  "published": true,
  "pubDate": "2026-09-19",
  "time": "9:00am",
  "entranceCost": "See website",
  "seoDescription": "Full-day chair-making workshop at Sequatchie Cove Farm — build a 3-leg wooden footstool using mostly hand tools.",
  "venue": "Sequatchie Cove Farm",
  "address": "Sequatchie, TN (approx. 40 min from Chattanooga)",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://www.sequatchiecovefarm.com/events",
  "tags": [{
    "type": "place",
    "tag": "sequatchie-cove-farm"
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
    children: "Spend the day with Tyler Rogers learning basic chair-making technique. You’ll build a 3-legged Cumberland footstool using mostly hand tools and leave with it. No experience needed. Sequatchie Cove runs these workshops year-round — this is one of the better ones for learning a durable skill."
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
const url = "/chattanooga/events/sequatchie-cove-farm/build-a-footstool";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/sequatchie-cove-farm/build-a-footstool.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/sequatchie-cove-farm/build-a-footstool.mdx";
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
