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
  "title": "Giveback Night with La Paz",
  "published": true,
  "pubDate": "2026-08-20",
  "time": "5:00pm",
  "seoDescription": "Giveback Night at Oddstory Brewing with La Paz on August 20 at 5pm. A pint supports a good cause in Chattanooga.",
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
    children: "Oddstory teams up with La Paz for a Giveback Night on August 20 starting at 5pm. Grab a beer and a bite knowing a share heads back to the community work La Paz does around town. Easy way to do a little good on Campbell St."
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
const url = "/chattanooga/events/oddstory/giveback-night-with-la-paz";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/oddstory/giveback-night-with-la-paz.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/oddstory/giveback-night-with-la-paz.mdx";
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
