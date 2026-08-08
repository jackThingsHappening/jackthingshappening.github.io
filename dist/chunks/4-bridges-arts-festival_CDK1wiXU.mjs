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
  "title": "4 Bridges Arts Festival",
  "eventDates": ["2026-04-18", "2026-04-19"],
  "time": "10:00am",
  "entranceCost": "$6 (under 18 free)",
  "seoDescription": "The 4 Bridges Arts Festival brings 140+ juried artists and $15,000+ in cash awards to First Horizon Pavilion in Chattanooga. One of the top 30 fine art festivals in the country.",
  "venue": "First Horizon Pavilion",
  "address": "1801 Reggie White Blvd., Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/art.png",
  "eventLink": "https://www.avarts.org/about-4baf1",
  "tags": [{
    "type": "genre",
    "tag": "festivals"
  }, {
    "type": "genre",
    "tag": "art"
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
      children: "140+ juried artists fill First Horizon Pavilion on the Southside every spring. The 2026 edition awarded $15,000+ in cash prizes, judged by Elizabeth Ruffner, Lauren Nye of the Hunter Museum, and Raquel Mullins of Wavelength Space. The festival ranks in the top 30 fine art shows in the country."
    }), "\n", createVNode(_components.p, {
      children: "Saturday runs 10am–6pm, Sunday 10am–5pm. $6 at the gate, students and under 18 free. A ticketed Preview Party with wine and hors d’oeuvres runs Friday evening. The festival also includes an Emerging Artist program for local artists within 45 miles of Chattanooga."
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

const url = "/chattanooga/events/festivals/4-bridges-arts-festival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/4-bridges-arts-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/4-bridges-arts-festival.mdx";
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
