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
  "title": "Pink Houses: The Ultimate John Mellencamp Tribute Band",
  "published": true,
  "pubDate": "2026-08-07",
  "time": "8:00pm",
  "entranceCost": "$20 advance / $25 door",
  "seoDescription": "Pink Houses, the John Mellencamp tribute band, plays Barrelhouse Ballroom on August 7.",
  "venue": "Barrelhouse Ballroom",
  "address": "1501 Long St, Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/music.png",
  "eventLink": "https://www.barrelhouseballroom.com/shows",
  "tags": [{
    "type": "place",
    "tag": "barrelhouse-ballroom"
  }, {
    "type": "genre",
    "tag": "music"
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
    children: "Pink Houses brings the John Mellencamp catalog to Barrelhouse Ballroom — Hurts So Good, Jack & Diane, the whole run. Tribute acts live or die on catalog selection and execution. This one does both. $20 advance, 18+."
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
const url = "/chattanooga/events/barrelhouse-ballroom/pink-houses-the-ultimate-john-mellencamp-tribute-band";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/barrelhouse-ballroom/pink-houses-the-ultimate-john-mellencamp-tribute-band.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/barrelhouse-ballroom/pink-houses-the-ultimate-john-mellencamp-tribute-band.mdx";
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
