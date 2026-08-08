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
  "title": "Flip Trade Show",
  "published": true,
  "pubDate": "2026-08-15",
  "entranceCost": "",
  "seoDescription": "The Flip Trade Show comes to the Chattanooga Convention Center on August 15, 2026 — 100+ vendor tables of sports cards, Pokémon, TCGs, comics, Funko Pops, and collectibles.",
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
    children: "Over 100 vendor tables of sports cards, Pokémon, Magic: The Gathering, comics, Funko Pops, video games, coins, and memorabilia spread across the Convention Center on August 15. Doors open at 11am. Bring a box if you’re selling, bring a list if you’re hunting. Check thefliptradeshow.com for vendor registration and admission details."
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
const url = "/chattanooga/events/convention-center/flip-trade-show";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/convention-center/flip-trade-show.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/convention-center/flip-trade-show.mdx";
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
