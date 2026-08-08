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
  "title": "3 Sisters Bluegrass Festival",
  "eventDates": ["2026-10-02", "2026-10-03"],
  "time": "TBD",
  "entranceCost": "Free",
  "seoDescription": "The 3 Sisters Bluegrass Festival returns to Ross's Landing in Chattanooga on October 2-3, 2026. Free admission, local and national bluegrass acts on the Tennessee River.",
  "venue": "Ross's Landing",
  "address": "201 Riverfront Parkway, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/music.png",
  "eventLink": "https://www.3sistersbluegrass.com",
  "tags": [{
    "type": "genre",
    "tag": "festivals"
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
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Free bluegrass on the riverfront, two days, rain or shine. Chattanooga Presents books local, regional, and national acts every fall at Ross’s Landing. Rhonda Vincent is confirmed for 2026."
    }), "\n", createVNode(_components.p, {
      children: "Lawn chairs and blankets welcome. No outside food, drink, or coolers. Vendors on site with food, beer, and wine. Leashed dogs OK. Free electric shuttle runs until 11pm. Downtown hotels are a short walk if you’re making a weekend of it."
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

const url = "/chattanooga/events/festivals/3-sisters-bluegrass-festival";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/3-sisters-bluegrass-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/3-sisters-bluegrass-festival.mdx";
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
