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
  "title": "Watercolor Summer Session",
  "venue": "Townsend Atelier",
  "address": "The Arts Building. 301 East 11th, Chattanooga, TN",
  "iconPath": "/images/icons-new/art.png",
  "eventDates": ["2024-08-05"],
  "eventLink": "https://townsendatelier.com/product/beginning-watercolor-spring-session/",
  "tags": ["art", "craft", "townsend-atelier"],
  "time": "9am - 12pm",
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
    children: [createVNode(_components.p, {
      children: "Every Monday for 4 weeks. Perfect for beginners or those needing a refresher, this watercolor class led by Durinda Cheek at Townsend Atelier covers all the essentials. Durinda will guide participants through understanding the medium and materials, teaching versatile techniques, color mixing, and paint application. With demonstrations and exercises, no prior painting or drawing experience is necessary. Discover the joy of watercolor in a friendly, supportive environment."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Pre-registration required. Masks optional."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Materials can be purchased at Townsend Atelier’s store with a 20% discount (excluding brushes) on the event website."
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

const url = "src/pages-events/townsend-atelier/watercolor-summer-session.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/watercolor-summer-session.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/watercolor-summer-session.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
