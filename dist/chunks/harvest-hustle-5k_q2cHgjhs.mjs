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
  "title": "Harvest Hustle 5K",
  "published": true,
  "pubDate": "2026-09-27",
  "time": "9:00am",
  "entranceCost": "Race registration required",
  "seoDescription": "Off-road 5K through Flat Top Mountain Farm in Soddy-Daisy, TN on September 27.",
  "venue": "Flat Top Mountain Farm",
  "address": "638 Bowman Cemetery Rd, Soddy-Daisy, TN 37379",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://runsignup.com/Race/Info/TN/SoddyDaisy/FlatTopMountainFarmHarvestHustle5K",
  "tags": [{
    "type": "place",
    "tag": "flat-top-mountain-farm"
  }, {
    "type": "genre",
    "tag": "farm"
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
    children: "Off-road 5K through the farm fields at Flat Top Mountain, with the sunflower fields and mountain views as the backdrop. The course runs past grazing horses and alongside the Blue Ridge Mountains in the distance. Register through RunSignUp."
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
const url = "/chattanooga/events/flat-top-mountain-farm/harvest-hustle-5k";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/flat-top-mountain-farm/harvest-hustle-5k.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/flat-top-mountain-farm/harvest-hustle-5k.mdx";
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
