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
  "title": "Saleen Club of America Nationals",
  "published": false,
  "pubDate": "2026-07-25",
  "time": "8:00am - 3:00pm",
  "entranceCost": "See website",
  "seoDescription": "The 23rd Annual Saleen Club of America Nationals at First Horizon Pavilion on July 25 — a specialty car show featuring Saleen vehicles from across the country.",
  "venue": "First Horizon Pavilion",
  "address": "1826 Reggie White Blvd, Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/car.png",
  "eventLink": "https://finleystadium.com/venue/first-horizon-pavilion/",
  "tags": [{
    "type": "place",
    "tag": "first-horizon"
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
  return createVNode(_components.p, {
    children: "The 23rd Annual Saleen Club of America Nationals brings specialty Saleen vehicles from around the country to First Horizon Pavilion on July 25. One day to see the full lineup. 8am–3pm."
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
const url = "/chattanooga/events/first-horizon/saleen-club-of-america-nationals";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/first-horizon/saleen-club-of-america-nationals.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/first-horizon/saleen-club-of-america-nationals.mdx";
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
