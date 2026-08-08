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
  "title": "Jammin' At The Barnyard",
  "published": true,
  "pubDate": "2026-08-15",
  "time": "6:00pm",
  "entranceCost": "$35",
  "seoDescription": "Live music, farm-fresh food, and a summer evening at Quail Run Farm in Chattanooga.",
  "venue": "Quail Run Farm",
  "address": "1345 Birmingham Hwy, Chattanooga, TN 37419",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://quailrunfarmtn.com",
  "tags": [{
    "type": "place",
    "tag": "quail-run-farm"
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
    children: "Live music on the farm with a food truck serving Quail Run’s own beef and pork. BYOB, bring a blanket or chairs. A real farm property about 15 minutes from downtown — check their site for availability as it tends to sell out."
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
const url = "/chattanooga/events/quail-run-farm/jammin-at-the-barnyard";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/quail-run-farm/jammin-at-the-barnyard.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/quail-run-farm/jammin-at-the-barnyard.mdx";
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
