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
  "title": "Intermediate Watercolor Summer Session",
  "venue": "Townsend Atelier",
  "address": "The Arts Building. 301 East 11th, Chattanooga, TN",
  "iconPath": "/images/icons-new/art.png",
  "eventDates": ["2024-08-05"],
  "eventLink": "https://townsendatelier.com/product/intermediate-advanced-watercolor-spring-session/",
  "tags": ["art", "craft", "townsend-atelier"],
  "time": "1pm - 4pm",
  "entranceCost": "$170",
  "layout": "../../layouts/BlogPostLayout.astro"
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
    children: [createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Every Monday for 4 weeks. Time to kick your paintings up a notch? This intermediate and advanced class is designed for students to work at their own pace. Receive individual instruction and discover your own unique style. Each session will begin with a brief review of one of the fundamentals of painting: using design in a composition, painting atmospheric and linear perspective, mixing colors, relating values, and anything the students would like to cover. See how to manipulate your source material to create the painting you want."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Please bring 2 or 3 paintings you would like to improve to the first class. You may also want to bring photographs to design and paint. I would prefer you bring your own photographs as opposed to those from magazines. Come and enjoy painting in a relaxed environment while you improve your skills and techniques in watercolor!"
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Level: Intermediate to Advanced, with critique"
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Pre-registration required."
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

const url = "src/pages-events/townsend-atelier/intermediate-water-color-summer-session.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/intermediate-water-color-summer-session.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/intermediate-water-color-summer-session.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
