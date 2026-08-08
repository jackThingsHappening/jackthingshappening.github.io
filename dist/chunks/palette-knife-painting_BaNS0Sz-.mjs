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
  "title": "Palette Knife Painting & Techniques",
  "venue": "Townsend Atelier",
  "address": "The Arts Building. 301 East 11th, Chattanooga, TN",
  "iconPath": "/images/icons-new/art.png",
  "eventDates": ["2024-08-05"],
  "eventLink": "https://townsendatelier.com/product/palette-knife-painting-techniques-with-mia-bergeron/",
  "tags": ["art", "craft", "townsend-atelier"],
  "time": "5:30pm - 8:30pm",
  "entranceCost": "$400",
  "layout": "../../layouts/BlogPostLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["August 5, 12, 19, 26 @ Townsend Atelier", createVNode(_components.br, {}), "\nInstructor: Mia Bergeron"]
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Back by popular demand, this fun class is a great way to explore layering oils, using different tools (we will be using a big range of tools—not just a palette knife), working with color and values, and exploring edges. Students will be working from both still life and photo references to create layered images. We will explore the different challenges imposed by working from life versus photography, best techniques for layering a painting to create visual texture, and how to use values to help find color. Mia will demonstrate at the beginning of class, and any questions that may come up will be addressed throughout the workshop. Some knowledge of oil painting is recommended."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Visit the event link for the materials list."
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

const url = "src/pages-events/townsend-atelier/palette-knife-painting.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/palette-knife-painting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/palette-knife-painting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
