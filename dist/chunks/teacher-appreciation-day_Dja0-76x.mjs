import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from './astro/server_CzqnycT_.mjs';
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
  "title": "Teacher Appreciation Day",
  "published": true,
  "pubDate": "2026-08-02",
  "entranceCost": "See event link",
  "seoDescription": "Teacher Appreciation Day at the Tennessee Aquarium is a special day recognizing educators, with registration available through the Aquarium's events page.",
  "venue": "Tennessee Aquarium",
  "address": "1 Broad St, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/expo.png",
  "eventLink": "https://www.tnaqua.org/events",
  "tags": [{
    "type": "place",
    "tag": "acquarium"
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
    children: "Teacher Appreciation Day is the Tennessee Aquarium’s way of thanking educators, with a day set aside just for teachers heading into the new school year. Registration runs through a form on the Aquarium’s events page, so check there for the details and to reserve your spot before it fills up."
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
const url = "/chattanooga/events/acquarium/teacher-appreciation-day";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/teacher-appreciation-day.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/acquarium/teacher-appreciation-day.mdx";
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
