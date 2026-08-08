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
  "title": "Hutton & Smith Thursday Trivia",
  "venue": "Hutton & Smith Brewing Co.",
  "address": "431 E Main St, Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/trivia.png",
  "time": "7:00pm",
  "eventLink": "https://huttonandsmithbrewing.com/about-us/services/",
  "tags": [{
    "type": "place",
    "tag": "hutton-smith"
  }, {
    "type": "genre",
    "tag": "trivia"
  }, {
    "type": "genre",
    "tag": "brewery"
  }],
  "entranceCost": "Free",
  "seoDescription": "Free trivia every Thursday at 7pm at Hutton & Smith Brewing Co. on the Southside. Dogs welcome, 21+.",
  "eventDates": ["2026-07-30", "2026-08-06", "2026-08-13", "2026-08-20", "2026-08-27", "2026-09-03", "2026-09-10", "2026-09-17", "2026-09-24", "2026-10-01", "2026-10-08", "2026-10-15"],
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
    children: "Free trivia every Thursday night at 7pm at Hutton and Smith Brewing on the Southside. Bring a crew, grab a pint, and see what you know. Questions run across categories, not just sports. Dogs welcome. 21+."
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
const url = "/chattanooga/events/hutton-smith/thursday-trivia";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/hutton-smith/thursday-trivia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/hutton-smith/thursday-trivia.mdx";
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
