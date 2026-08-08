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
  "title": "Sourdough Workshop: Foccacia",
  "venue": "Bird Fork Farm",
  "address": "Dunlap, TN (address provided after registration)",
  "iconPath": "/images/icons-new/barn.png",
  "pubDate": "2024-06-01",
  "eventLink": "https://birdforkfarm.square.site/events",
  "tags": ["bird-fork-farm", "farm", "food"],
  "entranceCost": "$65",
  "time": "12:00 PM - 3:00 PM CDTT",
  "layout": "../../../layouts/BlogPostLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Join Cultured Crumb Co. at Bird Fork Farm for a comprehensive sourdough workshop. Learn the ancient traditions of sourdough bread-making, from maintaining a starter to baking your own focaccia at home."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Receive a sourdough starter, jar, bowl, and all baking ingredients."
      }), "\n", createVNode(_components.li, {
        children: "Learn how to feed and maintain your sourdough starter."
      }), "\n", createVNode(_components.li, {
        children: "Mix, fold, and ferment focaccia dough during class, then bake it at home."
      }), "\n", createVNode(_components.li, {
        children: "Discover the advantages of long fermentation with wild yeast and using unprocessed, nutrient-dense grains."
      }), "\n", createVNode(_components.li, {
        children: "Sample various sourdough breads and treats for inspiration in your future bread-making."
      }), "\n", createVNode(_components.li, {
        children: "Designed to simplify the process and build confidence for beginners."
      }), "\n", createVNode(_components.li, {
        children: "Outdoors (typically 10°F cooler than in Chatt)\nWear appropriate clothing and bring sunscreen, bug protection, a water bottle, and a notebook.\nSnacks are optional."
      }), "\n", createVNode(_components.li, {
        children: "The apothecary will be open for shopping."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Leave the workshop with your own sourdough starter, equipment, and focaccia dough, ready to embark on your sourdough journey at home!"
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

const url = "src/pages-events/bird-fork-farm/2025/sourdough-workshop.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/sourdough-workshop.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/sourdough-workshop.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
