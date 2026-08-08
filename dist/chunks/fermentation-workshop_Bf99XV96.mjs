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
  "title": "Intro to Lacto-Fermentation Workshop",
  "venue": "Bird Fork Farm",
  "iconPath": "/images/icons-new/barn.png",
  "address": "Dunlap, TN (address provided after registration)",
  "pubDate": "2024-06-09",
  "eventLink": "https://birdforkfarm.square.site/events",
  "tags": ["bird-fork-farm", "farm"],
  "entranceCost": "$75",
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
      children: "Join the fun at Bird Fork Farm for a hands-on lacto-fermentation workshop and discover how to harness the natural magic of fermentation in your kitchen. Perfect for beginners, this workshop is a great way to explore the art of creating flavorful, nutritious foods."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Learn the fundamentals of lacto-fermentation, its historical roots, and its role in food preservation."
      }), "\n", createVNode(_components.li, {
        children: "Prepare your own jars of fermented vegetables using farm-fresh ingredients."
      }), "\n", createVNode(_components.li, {
        children: "Explore key ingredients like organic vegetables, quality salts, and non-chlorinated water."
      }), "\n", createVNode(_components.li, {
        children: "Master the art of creating the perfect brine for vibrant flavors and textures."
      }), "\n", createVNode(_components.li, {
        children: "Learn common fermentation issues and practical solutions for successful results."
      }), "\n", createVNode(_components.li, {
        children: "Sample previously prepared fermented foods and discover unique flavors and textures."
      }), "\n", createVNode(_components.li, {
        children: "Share experiences, ask questions, and connect with fellow fermentation enthusiasts."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Learn about the probiotic-rich nature of fermented foods and their impact on gut health."
    }), "\n", createVNode(_components.p, {
      children: "Add depth and complexity to your culinary creations."
    }), "\n", createVNode(_components.p, {
      children: "Leave with your own jar of fermenting vegetables and confidence to continue at home."
    }), "\n", createVNode(_components.p, {
      children: "Herbal teas will be provided, and the apothecary will be open for shopping."
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

const url = "src/pages-events/bird-fork-farm/2025/fermentation-workshop.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/fermentation-workshop.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/fermentation-workshop.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
