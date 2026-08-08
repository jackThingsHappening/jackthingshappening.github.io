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
  "title": "National IPA Day",
  "published": true,
  "pubDate": "2026-08-06",
  "time": "11:00am - 8:30pm",
  "entranceCost": "Free",
  "seoDescription": "Celebrate National IPA Day at The Tap House in downtown Chattanooga on August 6 with a lineup of craft brews.",
  "venue": "The Tap House",
  "address": "122 Broad St, Chattanooga, TN 37402",
  "iconPath": "/images/icons/music.svg",
  "eventLink": "https://taphousechatt.com/chattanooga-chattanooga-the-tap-house-events",
  "tags": [{
    "type": "genre",
    "tag": "food-drink"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro"
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
    children: "The Tap House is marking National IPA Day on August 6 the only way that makes sense: grab a beer with them. Post up downtown on Broad Street from 11am to 8:30pm and work your way through their craft lineup. No cover, just hops."
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
const url = "/chattanooga/events/tap-house-national-ipa-day";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/tap-house-national-ipa-day.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/tap-house-national-ipa-day.mdx";
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
