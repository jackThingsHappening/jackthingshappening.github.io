import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "title": "Jhett Black’s Tuesday Bluesday",
  "venue": "The Woodshop Listening Room",
  "address": "5500 Saint Elmo Avenue, Chattanooga, TN 37409",
  "iconPath": "/images/icons-new/music.png",
  "time": "6:00pm",
  "eventLink": "https://thewoodshoplisteningroom.com/shows",
  "tags": [{
    "type": "genre",
    "tag": "music"
  }],
  "entranceCost": "$10 Cover - Reserve a Table",
  "eventDates": ["2025-05-13", "2025-05-20", "2025-05-27", "2025-06-03", "2025-06-10", "2025-06-17", "2025-06-24", "2025-07-01", "2025-07-08", "2025-07-15", "2025-07-22", "2025-07-29", "2025-08-05", "2025-08-12", "2025-08-19", "2025-08-26", "2025-09-02", "2025-09-09", "2025-09-16", "2025-09-23", "2025-09-30"]
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
      children: "Settle into the groove every Tuesday night with soulful blues by Jhett Black in an intimate listening space."
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

const url = "src/pages-events/woodshop-listening-room/tuesday-bluesday.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodshop-listening-room/tuesday-bluesday.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodshop-listening-room/tuesday-bluesday.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
