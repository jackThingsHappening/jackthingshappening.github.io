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
  "title": "National Cornbread Festival",
  "eventDates": ["2026-04-25", "2026-04-26"],
  "time": "8:00am",
  "entranceCost": "See website",
  "seoDescription": "The 29th annual National Cornbread Festival in South Pittsburg, TN — 30 miles west of Chattanooga. National cook-off, Cornbread Alley samples, live music, 5K, and a weekend built around Lodge Cast Iron's hometown.",
  "venue": "Downtown South Pittsburg",
  "address": "South Pittsburg, TN 37380",
  "iconPath": "/images/icons-new/dish-plate.png",
  "eventLink": "https://www.nationalcornbread.com",
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
      children: "South Pittsburg is the historic home of Lodge Cast Iron, and every last full weekend of April the town leans into it hard. The National Cornbread Cook-Off, Cornbread Alley where civic groups hand out creative variations, live music, a 5K, and vendor shopping fill two days in town."
    }), "\n", createVNode(_components.p, {
      children: "About 30 miles west of Chattanooga. Saturday 8am–6:30pm, Sunday 8am–5pm. Free parking with shuttle from outer lots. Rain or shine, no pets. Presale tickets through TicketSpice."
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

const url = "/chattanooga/events/festivals/national-cornbread-festival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/national-cornbread-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/national-cornbread-festival.mdx";
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
