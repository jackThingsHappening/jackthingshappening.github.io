import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "title": "Woodshop Trivia",
  "venue": "The Woodshop Listening Room",
  "address": "5500 Saint Elmo Avenue, Chattanooga, TN 37409",
  "iconPath": "/images/icons-new/trivia.png",
  "time": "8:00pm",
  "eventLink": "https://thewoodshoplisteningroom.com/shows",
  "tags": [{
    "type": "genre",
    "tag": "trivia"
  }],
  "entranceCost": "Free",
  "eventDates": ["2025-05-14", "2025-05-21", "2025-05-28", "2025-06-04", "2025-06-11", "2025-06-18", "2025-06-25", "2025-07-02", "2025-07-09", "2025-07-16", "2025-07-23", "2025-07-30", "2025-08-06", "2025-08-13", "2025-08-20", "2025-08-27", "2025-09-03", "2025-09-10", "2025-09-17", "2025-09-24"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    meta: "meta",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.p, {
      children: "Bring your brainy crew and test your knowledge each Wednesday night—great vibes and bragging rights await."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/pages-events/woodshop-listening-room/wednesday-trivia.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodshop-listening-room/wednesday-trivia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodshop-listening-room/wednesday-trivia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
