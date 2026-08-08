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
  "title": "Chattanooga Motorcar Festival",
  "pubDate": "2026-10-01",
  "time": "TBD",
  "entranceCost": "See website",
  "seoDescription": "The Chattanooga Motorcar Festival takes over the downtown riverfront for a weekend of vintage racing, Concours d'Elegance, and car culture. Debuted 2019, returning Fall 2026.",
  "venue": "Downtown Chattanooga / Riverfront",
  "address": "Chattanooga, TN",
  "iconPath": "/images/icons-new/car.png",
  "eventLink": "https://chattanoogamotorcar.com",
  "tags": [{
    "type": "genre",
    "tag": "festivals"
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
      children: "Vintage racing on track, a Concours d’Elegance drawing entries from across the country, automobile displays, and concerts on the downtown riverfront. The festival debuted in 2019 and ran every fall until a postponement in 2025. The 2024 Best in Show went to a 1935 Swallow Sidecar SS1."
    }), "\n", createVNode(_components.p, {
      children: "Returning Fall 2026. Specific dates haven’t been announced yet. Check chattanoogamotorcar.com for updates."
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

const url = "/chattanooga/events/festivals/chattanooga-motorcar-festival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/chattanooga-motorcar-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/chattanooga-motorcar-festival.mdx";
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
