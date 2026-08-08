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
  "title": "Printmaking Bootcamp",
  "venue": "Townsend Atelier",
  "address": "The Arts Building. 301 East 11th, Chattanooga, TN",
  "iconPath": "/images/icons-new/art.png",
  "eventDates": ["2024-07-15"],
  "eventLink": "https://townsendatelier.com/product/printmaking-bootcamp-for-adults/",
  "tags": ["art", "craft", "townsend-atelier"],
  "time": "10am - 3pm",
  "entranceCost": "$550",
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
    children: [createVNode(_components.p, {
      children: "Carrie Pendergrass welcomes students of all levels to immerse themselves in a 5-day printmaking bootcamp at Townsend Atelier. Learn various printmaking techniques, both with and without a press, including botanical printing, collagraphy, linoleum relief, cyanotype, and more. From idea generation to plate-making and ink application, you’ll experience the entire process. Perfect for beginners and experienced artists. All materials are included, except for specialty print paper, available at Townsend’s art store."
    }), "\n", createVNode(_components.p, {
      children: "(Optional supplies: pens, pencils, scissors, sketchbook, metal ruler. A list of potential found items will be sent after registration.)"
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

const url = "src/pages-events/townsend-atelier/printmaking-bootcamp.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/printmaking-bootcamp.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/printmaking-bootcamp.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
