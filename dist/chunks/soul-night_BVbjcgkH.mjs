import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "title": "Soul Night with Joel Forlines",
  "venue": "The Woodshop Listening Room",
  "address": "5500 Saint Elmo Avenue, Chattanooga, TN 37409",
  "iconPath": "/images/icons-new/music.png",
  "time": "6:00pm",
  "eventLink": "https://thewoodshoplisteningroom.com/shows",
  "tags": [{
    "type": "genre",
    "tag": "soul"
  }],
  "entranceCost": "$10 Cover",
  "eventDates": ["2025-05-15", "2025-05-22", "2025-05-29", "2025-06-05", "2025-06-12", "2025-06-19", "2025-06-26", "2025-07-03", "2025-07-10", "2025-07-17", "2025-07-24", "2025-07-31", "2025-08-07", "2025-08-14", "2025-08-21", "2025-08-28", "2025-09-04", "2025-09-11", "2025-09-18", "2025-09-25"]
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
      children: "Joel Forlines brings the groove every Thursday—come feel the rhythm and let your soul unwind."
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

const url = "src/pages-events/woodshop-listening-room/soul-night.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodshop-listening-room/soul-night.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodshop-listening-room/soul-night.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
