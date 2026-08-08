import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from './astro/server_CzqnycT_.mjs';
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
  "title": "Fish & Sips",
  "published": false,
  "pubDate": "2026-07-18",
  "time": "6:30 PM",
  "entranceCost": "$70 members / $85 non-members",
  "seoDescription": "Fish & Sips is the Tennessee Aquarium's annual 21+ after-hours event with beer and cider samples from local breweries, live music, food vendors, and full access to both aquarium buildings.",
  "venue": "Tennessee Aquarium",
  "address": "1 Broad St, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/expo.png",
  "eventLink": "https://www.tnaqua.org/events",
  "tags": [{
    "type": "place",
    "tag": "acquarium"
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
    children: "After hours at the Tennessee Aquarium, Fish & Sips gives you a leisurely walkthrough of both River Journey and Ocean Journey with ten 4-oz samples from local and regional breweries, live music on the outdoor pavilion, and food bites included. The ticket covers admission to both buildings, branded merchandise, and complimentary non-alcoholic drinks at check-in. Members pay $70, non-members $85, designated drivers $60."
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
const url = "/chattanooga/events/acquarium/fish-and-sips";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/fish-and-sips.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/fish-and-sips.mdx";
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
