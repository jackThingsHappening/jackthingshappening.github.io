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
  "title": "CRIMEWAVE: A Darkwave Party",
  "pubDate": "2026-05-02",
  "published": false,
  "time": "9:00pm",
  "entranceCost": "$15 advance / $20 door",
  "seoDescription": "CRIMEWAVE darkwave party at Barrelhouse Ballroom on May 2. Doors at 8pm, 18+.",
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
    children: "A night of darkwave and industrial at Barrelhouse Ballroom. Doors open at 8pm, music starts at 9. The shenanigans are expected and encouraged, so dress accordingly. $15 advance, $20 at the door. A recurring party that has built a real crowd. 18+."
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
const url = "/chattanooga/events/barrelhouse-ballroom/crimewave-a-darkwave-party";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/barrelhouse-ballroom/crimewave-a-darkwave-party.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/barrelhouse-ballroom/crimewave-a-darkwave-party.mdx";
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
