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
  "title": "Appalachian Floor Brooms",
  "published": true,
  "pubDate": "2026-09-26",
  "time": "9:00am",
  "entranceCost": "See website",
  "seoDescription": "Half-day broom-making workshop at Sequatchie Cove Farm — bind local broomcorn into a hand-carved heirloom broom.",
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
    children: "Learn to make an Appalachian floor broom with Ali Davenport — local broomcorn, hand-carved handles, bound the traditional way. Timed for the fall equinox. Half-day, you leave with a broom that’ll outlast anything from a hardware store."
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
const url = "/chattanooga/events/sequatchie-cove-farm/appalachian-floor-brooms";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/sequatchie-cove-farm/appalachian-floor-brooms.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/sequatchie-cove-farm/appalachian-floor-brooms.mdx";
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
