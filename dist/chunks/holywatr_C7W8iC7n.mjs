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
  "title": "HOLYWATR",
  "pubDate": "2026-05-09",
  "published": false,
  "time": "8:30pm",
  "entranceCost": "$25 advance / $30 door",
  "seoDescription": "HOLYWATR live at Barrelhouse Ballroom on May 9. Doors at 8pm, 18+.",
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
    children: "HOLYWATR takes the Barrelhouse stage on Saturday night. Doors at 8pm, show at 8:30 on Long St. $25 advance or $30 at the door. The band has been building a following through steady regional touring. 18+."
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
const url = "/chattanooga/events/barrelhouse-ballroom/holywatr";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/barrelhouse-ballroom/holywatr.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/barrelhouse-ballroom/holywatr.mdx";
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
