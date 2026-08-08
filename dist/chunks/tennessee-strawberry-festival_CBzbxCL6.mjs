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
  "title": "Tennessee Strawberry Festival",
  "eventDates": ["2026-05-04", "2026-05-05", "2026-05-06", "2026-05-07", "2026-05-08", "2026-05-09"],
  "time": "Varies by day",
  "entranceCost": "See website",
  "seoDescription": "The 79th annual Tennessee Strawberry Festival runs May 4-9, 2026 in historic downtown Dayton, TN. A week of parade, pageants, carnival, baking contest, live music, and fresh strawberries — a small-town tradition over 75 years running.",
  "venue": "Downtown Dayton",
  "address": "Dayton, TN 37321",
  "iconPath": "/images/icons-new/dish-plate.png",
  "eventLink": "https://tnstrawberryfestival.com",
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
      children: "Dayton, TN has been doing this for 79 years. A full week in downtown built around fresh strawberries: grand parade, pageants, carnival rides in Washington Park, art show, baking contest, cruise-in, and food vendors. The Kentucky Headhunters headline Saturday night."
    }), "\n", createVNode(_components.p, {
      children: "About 45 minutes north of Chattanooga. The week runs Monday May 4 through Saturday May 9. Saturday is the big day, starting with a pancake breakfast at 7:30am and the Strawberry Chase 5K at 8am before the headliner closes it out."
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

const url = "/chattanooga/events/festivals/tennessee-strawberry-festival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/tennessee-strawberry-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/tennessee-strawberry-festival.mdx";
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
