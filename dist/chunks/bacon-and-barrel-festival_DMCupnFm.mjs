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
  "title": "Chattanooga Bacon & Barrel Festival",
  "eventDates": ["2026-09-26"],
  "time": "5:00pm - 8:00pm",
  "entranceCost": "$55 GA / $95 All-Inclusive",
  "seoDescription": "The Chattanooga Bacon & Barrel Festival brings 20+ local restaurants and 20+ distilleries to First Horizon Pavilion on September 26. Unlimited bacon dishes, whiskey samples, and a vote for the Golden Hog award. 21+ only.",
  "venue": "First Horizon Pavilion",
  "address": "1801 Reggie White Blvd., Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/dish-plate.png",
  "eventLink": "https://www.chattanoogafestivals.com/bacon",
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
      children: "Twenty-plus local restaurants compete for the Golden Hog award. Bulleit, Buffalo Trace, Crown Royal, and 17 more distilleries are pouring samples. General Admission covers 12 whiskey samples and unlimited food. All-Inclusive ($95) is unlimited everything plus commemorative glassware and VIP seating. Live music, 5–8pm."
    }), "\n", createVNode(_components.p, {
      children: "Strictly 21+. Proceeds benefit The Chattanooga Market nonprofit. Tickets through chattanoogafestivals.com/bacon, non-refundable."
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

const url = "/chattanooga/events/festivals/bacon-and-barrel-festival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/bacon-and-barrel-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/bacon-and-barrel-festival.mdx";
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
