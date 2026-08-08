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
  "title": "Steve Gonsalves Live: A Life with Ghosts",
  "published": true,
  "pubDate": "2026-09-10",
  "entranceCost": "See website",
  "seoDescription": "Ghost Hunters veteran Steve Gonsalves brings his live show A Life with Ghosts to the Chattanooga Convention Center on September 10.",
  "venue": "Chattanooga Convention Center",
  "address": "1 Carter Plaza, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/events.png",
  "eventLink": "https://www.chattanoogaconventioncenter.org/chattanooga-events",
  "tags": [{
    "type": "place",
    "tag": "convention-center"
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
    children: "Steve Gonsalves from Ghost Hunters brings his live show to the Chattanooga Convention Center on September 10. He shares stories from years of paranormal investigation — cases, evidence, and what it’s actually like to do that work for a living. Check the convention center site for tickets."
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
const url = "/chattanooga/events/convention-center/steve-gonsalves-live-a-life-with-ghosts";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/convention-center/steve-gonsalves-live-a-life-with-ghosts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/convention-center/steve-gonsalves-live-a-life-with-ghosts.mdx";
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
