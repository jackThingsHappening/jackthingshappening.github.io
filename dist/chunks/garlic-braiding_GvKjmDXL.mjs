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
  "title": "Garlic Braiding Workshop",
  "venue": "Bird Fork Farm",
  "address": "Dunlap, TN (address provided after registration)",
  "iconPath": "/images/icons-new/barn.png",
  "pubDate": "2024-06-22",
  "eventLink": "https://birdforkfarm.square.site/events",
  "tags": ["bird-fork-farm", "farm", "outdoors"],
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
      children: "Join in at the peak of garlic season for a hands-on garlic braiding workshop. Discover the beauty and practicality of this age-old technique while gaining insight into garlic’s health benefits and culinary uses."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Learn Garlic Braiding: Master the long-used technique of braiding soft-neck garlic for winter storage."
      }), "\n", createVNode(_components.li, {
        children: "Hands-On Workshop: Create your own handcrafted garlic braid, woven with flowers of your choice."
      }), "\n", createVNode(_components.li, {
        children: "Practical and Artistic: Hang your garlic braid as a functional work of art or gift it to a loved one."
      }), "\n", createVNode(_components.li, {
        children: "Community Gathering: Enjoy an afternoon of crafting with friends and go home with a new skill."
      }), "\n", createVNode(_components.li, {
        children: "All Materials Supplied: Everything you need will be provided, including garlic, flowers, and braiding materials."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Herbal teas will be available, and the apothecary will be open for shopping."
    }), "\n", createVNode(_components.p, {
      children: "Join in for a fun, educational workshop and leave with a beautiful garlic braid and new skills!"
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

const url = "src/pages-events/bird-fork-farm/2025/garlic-braiding.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/garlic-braiding.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/garlic-braiding.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
