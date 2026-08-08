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
  "title": "High Point Climbing: Student Night",
  "venue": "High Point Climbing",
  "iconPath": "/images/icons-new/sport.png",
  "eventDates": [],
  "address": "207 Broad St, Chattanooga, TN 37402",
  "eventLink": "https://www.facebook.com/events/1476661072843673/1476661246176989/",
  "tags": ["high-point-climbing", "fitness", "kid-friendly"],
  "time": "4pm - close",
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
    children: "Enjoy 40% off day passes for all students after 4pm (college students must show valid ID). It’s free for members and happens on the third Thursday of every month. This is the perfect opportunity to meet new climbing buddies and challenge yourself in a fun and encouraging environment. Climbing is not only great for strength training but also an excellent way to improve your flexibility and focus."
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
const url = "src/pages-events/high-point-climbing/2024/student-night.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/high-point-climbing/2024/student-night.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/high-point-climbing/2024/student-night.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
