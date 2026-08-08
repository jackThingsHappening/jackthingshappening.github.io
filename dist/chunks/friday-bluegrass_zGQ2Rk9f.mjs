import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "title": "Forever Friday Bluegrass",
  "venue": "The Woodshop Listening Room",
  "address": "5500 Saint Elmo Avenue, Chattanooga, TN 37409",
  "iconPath": "/images/icons-new/music.png",
  "time": "8:00pm",
  "eventLink": "https://thewoodshoplisteningroom.com/shows",
  "tags": [{
    "type": "genre",
    "tag": "music"
  }],
  "entranceCost": "$5 Cover",
  "eventDates": ["2025-05-16", "2025-05-23", "2025-05-30", "2025-06-06", "2025-06-13", "2025-06-20", "2025-06-27", "2025-07-04", "2025-07-11", "2025-07-18", "2025-07-25", "2025-08-01", "2025-08-08", "2025-08-15", "2025-08-22", "2025-08-29", "2025-09-05", "2025-09-12", "2025-09-19", "2025-09-26"]
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
      children: "Kick off your weekend with toe-tapping, high-energy bluegrass from top regional pickers."
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

const url = "src/pages-events/woodshop-listening-room/friday-bluegrass.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodshop-listening-room/friday-bluegrass.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodshop-listening-room/friday-bluegrass.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
