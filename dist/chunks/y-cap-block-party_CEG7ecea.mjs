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
  "title": "Y-Cap Block Party",
  "published": false,
  "pubDate": "2026-05-16",
  "time": "12:00pm",
  "venue": "Oddstory Brewing Co.",
  "address": "1503 Campbell St, Chattanooga, TN 37409",
  "iconPath": "/images/icons-new/music.png",
  "eventLink": "https://www.oddstorybrewing.co/central-events",
  "tags": [{
    "type": "place",
    "tag": "oddstory"
  }, {
    "type": "genre",
    "tag": "food-drink"
  }, {
    "type": "genre",
    "tag": "brewery"
  }],
  "entranceCost": "Free",
  "seoDescription": "Y-Cap Block Party at Oddstory Brewing Co. on May 16 starting at noon. Free community event in Chattanooga.",
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
    children: "A community block party hosted at Oddstory on Campbell St in partnership with Y-Cap. Kicks off at noon on May 16. Free to attend, no ticket needed. Good chance to see what the neighborhood has going on in one afternoon."
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
const url = "/chattanooga/events/oddstory/y-cap-block-party";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/oddstory/y-cap-block-party.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/oddstory/y-cap-block-party.mdx";
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
