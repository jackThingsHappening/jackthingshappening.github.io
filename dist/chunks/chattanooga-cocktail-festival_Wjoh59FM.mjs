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
  "title": "Chattanooga Cocktail Festival",
  "published": true,
  "eventDates": ["2026-05-09"],
  "time": "5:00pm - 8:00pm",
  "entranceCost": "See website",
  "seoDescription": "The Chattanooga Cocktail Festival at First Horizon Pavilion on May 9 — a passport for 12 mini cocktails from local distilleries and top bartenders, plus mixology competitions and live entertainment. 21+ only.",
  "venue": "First Horizon Pavilion",
  "address": "1801 Reggie White Blvd., Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/cocktail.png",
  "eventLink": "https://www.chattanoogafestivals.com/scf",
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
      children: "Your ticket is a passport for 12 mini cocktails from local distilleries and bartenders. Ketel One, Bulleit, Empress Gin, tequilas, and more in the mix. Mixology competitions, live entertainment, and food trucks on site. Proceeds benefit the Chattanooga Market nonprofit."
    }), "\n", createVNode(_components.p, {
      children: "Strictly 21+, physical ID required. Presented by Chattanooga Festivals, the same crew behind the Bacon & Barrel event."
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

const url = "/chattanooga/events/festivals/chattanooga-cocktail-festival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/chattanooga-cocktail-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/chattanooga-cocktail-festival.mdx";
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
