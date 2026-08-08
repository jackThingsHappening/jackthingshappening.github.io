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
  "title": "Barkley Cove",
  "published": false,
  "pubDate": "2026-06-26",
  "time": "6:00pm",
  "entranceCost": "See website",
  "seoDescription": "Modern folk band Barkley Cove at The Woodshop on June 26, blending folk, rock, country, and bluegrass. Separate ticket required for the 8pm Bluegrass.",
  "venue": "The Woodshop Listening Room",
  "address": "5500 Saint Elmo Avenue, Chattanooga, TN 37409",
  "iconPath": "/images/icons-new/music.png",
  "eventLink": "https://thewoodshoplisteningroom.com/shows",
  "tags": [{
    "type": "place",
    "tag": "woodshop"
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
    children: "Barkley Cove plays a mix of folk, rock, country, and bluegrass — the kind of band that fits the Woodshop room well. Note: separate ticket required if you’re staying for the 8pm Forever Bluegrass. Doors at 5pm, show at 6pm."
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
const url = "/chattanooga/events/woodshop/woodshop-barkley-cove";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/woodshop/woodshop-barkley-cove.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/woodshop/woodshop-barkley-cove.mdx";
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
