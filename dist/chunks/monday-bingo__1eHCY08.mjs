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
  "title": "Oddstory Monday BINGO",
  "venue": "Oddstory Brewing Co.",
  "address": "1503 Campbell St, Chattanooga, TN 37409",
  "iconPath": "/images/icons-new/music.png",
  "time": "6:30pm",
  "eventLink": "https://www.oddstorybrewing.co/central-events",
  "tags": [{
    "type": "place",
    "tag": "oddstory"
  }, {
    "type": "genre",
    "tag": "trivia"
  }, {
    "type": "genre",
    "tag": "brewery"
  }],
  "entranceCost": "Free",
  "seoDescription": "Free BINGO every Monday at 6:30pm at Oddstory Brewing Co. A great way to kick off the week.",
  "eventDates": ["2026-08-03", "2026-08-10", "2026-08-17", "2026-08-24", "2026-08-31", "2026-09-07", "2026-09-14", "2026-09-21", "2026-09-28", "2026-10-05", "2026-10-12", "2026-10-19"],
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
    children: "BINGO every Monday at 6:30pm at Oddstory Brewing on Campbell St. Cold beer, free to play, and a crowd that takes the numbers surprisingly seriously. Good way to ease into the week without too much lollygagging."
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
const url = "/chattanooga/events/oddstory/monday-bingo";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/oddstory/monday-bingo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/oddstory/monday-bingo.mdx";
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
