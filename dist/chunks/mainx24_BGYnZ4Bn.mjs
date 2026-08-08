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
  "title": "MAINx24",
  "eventDates": ["2026-12-05"],
  "time": "All day",
  "entranceCost": "Free",
  "seoDescription": "MAINx24 is a 24-hour street festival on the Chattanooga Southside every first Saturday of December. 120+ events including the parade, Chili Cook-Off, Adult Big Wheel Races, and concerts on Main Street.",
  "venue": "Southside / Main Street",
  "address": "Main Street, Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/community.png",
  "eventLink": "https://www.mainx24.com",
  "tags": [{
    "type": "genre",
    "tag": "festivals"
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
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Main Street on the Southside goes car-free for 24 hours every first Saturday of December. What started as a handful of events has grown to 120+: parade (voted best in Chattanooga), Chili Cook-Off, Adult Big Wheel Races, concerts, arts, and general shenanigans spread across the neighborhood."
    }), "\n", createVNode(_components.p, {
      children: "Free. December 5, 2026."
    })]
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

const url = "/chattanooga/events/festivals/mainx24";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/mainx24.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/mainx24.mdx";
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
