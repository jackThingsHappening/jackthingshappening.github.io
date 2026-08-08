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
  "title": "Wine Over Water",
  "eventDates": ["2026-10-10"],
  "time": "7:30pm",
  "entranceCost": "See website",
  "seoDescription": "Wine Over Water returns October 10, 2026 at Renaissance Park in Chattanooga. 30th anniversary of the region's premier wine tasting event — curated pours, food by Whitebird's Chef Amanda Clayton, and live music. 21+ only.",
  "venue": "Renaissance Park",
  "address": "Renaissance Park, Chattanooga, TN 37405",
  "iconPath": "/images/icons-new/cocktail.png",
  "eventLink": "https://www.preservechattanooga.com/wineoverwater",
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
      children: "Thirty years of wine on the Tennessee River. Curated tastings with a commemorative glass, small bites and food pairings by Chef Amanda Clayton of Whitebird, charcuterie, pulled pork, live music from Ben van Winkle and The Figments, and roaming performances by the Chattanooga Circus Collective."
    }), "\n", createVNode(_components.p, {
      children: "The 2026 edition moves from the Walnut Street Bridge to Renaissance Park, between the Walnut Street and Market Street Bridges, while the bridge is under renovation. Same riverfront setting, different footprint. 21+ only, tickets through Eventbrite, nonrefundable but transferable. Presented by Preserve Chattanooga, platinum sponsor Food City."
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

const url = "/chattanooga/events/festivals/wine-over-water";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/wine-over-water.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/wine-over-water.mdx";
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
