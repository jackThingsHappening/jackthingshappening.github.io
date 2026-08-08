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
  "title": "Rooted Night Market",
  "venue": "Take Root Studio",
  "address": "3575 Adkisson Dr NW Suite 1010, Cleveland, TN 37312",
  "iconPath": "/images/icons-new/market.png",
  "eventLink": "https://takeroot.studio/rooted-night-market",
  "tags": [{
    "type": "place",
    "tag": "take-root-studio"
  }, {
    "type": "genre",
    "tag": "community"
  }, {
    "type": "city",
    "tag": "cleveland-tn"
  }],
  "entranceCost": "Free",
  "time": "6:00pm–9:00pm",
  "eventDates": ["2026-09-05", "2026-10-03", "2026-11-07"],
  "eventDatesDetails": [{
    "date": "2026-09-05",
    "topDetails": {
      "title": "Fall Harvest",
      "text": "The September market celebrates the season with local artisans, wellness vendors, and food under the evening sky."
    }
  }, {
    "date": "2026-10-03",
    "topDetails": {
      "title": "Cabinet of Curiosities",
      "text": "The October market brings an eclectic, mysterious theme — expect unique makers and one-of-a-kind finds."
    }
  }, {
    "date": "2026-11-07",
    "topDetails": {
      "title": "Sweater Weather",
      "text": "The November market leans cozy — handmade goods, warm drinks, and a slower pace as the season winds down."
    }
  }],
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
    children: "Rooted Night Market is a free monthly outdoor market hosted by Take Root Studio in Cleveland on the first Saturday of each month. Local artisans, wellness vendors, and food come together from 6–9pm. Each month has its own theme. Free to attend, family-friendly."
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
const url = "/chattanooga/events/city/cleveland/take-root-studio/rooted-night-market";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/take-root-studio/rooted-night-market.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/city/cleveland/take-root-studio/rooted-night-market.mdx";
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
