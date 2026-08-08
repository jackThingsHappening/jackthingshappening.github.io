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
  "title": "Craft Corner: DIY Beaded Plant Stakes",
  "published": true,
  "pubDate": "2026-08-10",
  "time": "4:00pm",
  "seoDescription": "Craft Corner at Oddstory Brewing on August 10 at 4pm — make DIY beaded plant stakes over a pint. Free.",
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
    children: "Oddstory’s Craft Corner sets up on August 10 at 4pm, this round making beaded plant stakes for your pots at home. Bead a while, sip a pint, and walk out with something to stick in the dirt. Free to join on Campbell St."
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
const url = "/chattanooga/events/oddstory/craft-corner-diy-beaded-plant-stakes";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/oddstory/craft-corner-diy-beaded-plant-stakes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/oddstory/craft-corner-diy-beaded-plant-stakes.mdx";
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
