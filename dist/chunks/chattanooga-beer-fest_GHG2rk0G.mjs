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
  "title": "Chattanooga Beer Fest",
  "published": true,
  "eventDates": ["2026-05-23"],
  "time": "12:00pm - 3:00pm",
  "entranceCost": "$48 advance / $55 door",
  "seoDescription": "Chattanooga Beer Fest at First Horizon Pavilion on May 23 — 31 breweries, unlimited samples, collector glass, and live music. Capped at 1,300 people and sold out every year since 2021.",
  "venue": "First Horizon Pavilion",
  "address": "1801 Reggie White Blvd., Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/beer.png",
  "eventLink": "https://www.chattanoogabeerfest.com",
  "tags": [{
    "type": "genre",
    "tag": "festivals"
  }, {
    "type": "genre",
    "tag": "food"
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
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "31 breweries, mostly from Tennessee, Georgia, Alabama, and North Carolina, alongside nationals like Dogfish Head, Lagunitas, Sam Adams, and Sierra Nevada. Unlimited samples, collector tasting glass, three food trucks (Wei To Go, The Bistro, Windy City Eats), and live reggae rock from Fresh Mind. Capped at 1,300. It has sold out every year from 2021 through 2025."
    }), "\n", createVNode(_components.p, {
      children: "$48 advance, $55 at the door if any remain, $20 designated driver. Buy only through chattanoogabeerfest.com. 21+ only."
    })]
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

const url = "/chattanooga/events/festivals/chattanooga-beer-fest";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/chattanooga-beer-fest.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/chattanooga-beer-fest.mdx";
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
