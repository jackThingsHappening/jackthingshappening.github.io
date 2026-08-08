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
  "title": "Live Music at The Diving Mouse",
  "venue": "The Diving Mouse",
  "address": "201 Keith Street Suite 31, Cleveland, TN 37311",
  "iconPath": "/images/icons-new/music.png",
  "eventLink": "https://thedivingmouse.com/",
  "tags": [{
    "type": "place",
    "tag": "the-diving-mouse"
  }, {
    "type": "genre",
    "tag": "music"
  }, {
    "type": "city",
    "tag": "cleveland-tn"
  }],
  "entranceCost": "Free",
  "time": "4:30pm",
  "eventDates": ["2026-08-14", "2026-08-15", "2026-08-21", "2026-08-22", "2026-08-28", "2026-08-29", "2026-09-04", "2026-09-05", "2026-09-11", "2026-09-12", "2026-09-18", "2026-09-19", "2026-09-25", "2026-09-26", "2026-10-02", "2026-10-03", "2026-10-09", "2026-10-10", "2026-10-16", "2026-10-17", "2026-10-23", "2026-10-24", "2026-10-30", "2026-10-31"],
  "layout": "../../../../../../layouts/BlogPostLayout.astro"
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
    children: "Live music every Friday and Saturday at The Diving Mouse starting at 4:30pm. Local and regional acts on a real stage, with a full bar and covered patio out back."
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
const url = "/chattanooga/events/city/cleveland/the-diving-mouse/live-music";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/the-diving-mouse/live-music.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/the-diving-mouse/live-music.mdx";
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
