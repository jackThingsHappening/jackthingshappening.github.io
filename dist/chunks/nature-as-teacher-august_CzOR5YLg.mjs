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
  "title": "Nature as Teacher: A Mindfulness Practice",
  "venue": "Crabtree Farms",
  "address": "1000 E 30th St, Chattanooga, TN 37407",
  "pubDate": "2026-08-09",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://crabtreefarms.org/ourevents/list/",
  "tags": [{
    "type": "place",
    "tag": "crabtree-farms"
  }, {
    "type": "genre",
    "tag": "farm"
  }],
  "entranceCost": "Free",
  "time": "10:00am",
  "layout": "../../../../layouts/BlogPostLayout.astro",
  "published": true
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
    children: "A monthly gather at the farm for meditation rooted in the natural world. An hour outside, quiet, with a guide — easier to commit to than a studio class and more grounding than most."
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
const url = "/chattanooga/events/crabtree-farms/nature-as-teacher-august";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/crabtree-farms/nature-as-teacher-august.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/crabtree-farms/nature-as-teacher-august.mdx";
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
