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
  "title": "Herbal Tinctures 101",
  "venue": "Bird Fork Farm",
  "address": "Dunlap, TN (address provided after registration)",
  "iconPath": "/images/icons-new/barn.png",
  "pubDate": "2024-07-28",
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
      children: "Discover the world of herbalism in this hands-on, three-hour herbal tincture workshop at Bird Fork Farm. Gain a solid foundation in herbal remedies, from preparation to sourcing, and leave with your own handcrafted tincture."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Herbal Tincture Basics: Understand what herbal tinctures are, how to prepare them, and common dosing tips."
      }), "\n", createVNode(_components.li, {
        children: "Hands-On Learning:\nLearn the ins and outs of tincture making, including harvesting and wildcrafting.\nHarvest fresh plants from the farm and create your own tincture to take home."
      }), "\n", createVNode(_components.li, {
        children: "Ethical Sourcing: Discover how to source herbal ingredients ethically and locally."
      }), "\n", createVNode(_components.li, {
        children: "Tincture Types: Explore different methods of herbal tincture preparation."
      }), "\n", createVNode(_components.li, {
        children: "Herbal Teas and Shopping: Enjoy herbal teas and browse the apothecary for additional herbal products."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Join in to simplify herbalism and learn to make your own herbal remedies for friends and family."
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

const url = "src/pages-events/bird-fork-farm/2025/herbal-tinctures-101.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/herbal-tinctures-101.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/herbal-tinctures-101.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
