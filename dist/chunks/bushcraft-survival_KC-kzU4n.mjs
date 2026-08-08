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
  "title": "Bushcraft / Survival 101",
  "venue": "Bird Fork Farm",
  "address": "Dunlap, TN (address provided after registration)",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://birdforkfarm.square.site/events",
  "tags": [{
    "type": "genre",
    "tag": "farm"
  }, {
    "type": "genre",
    "tag": "outdoors"
  }],
  "entranceCost": "$95",
  "time": "9:30 AM - 4:30 PM CDT",
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
      children: "Join Ravenwerkz for a 6-hour outdoor survival workshop where you’ll explore ancient and modern techniques to thrive outdoors. Learn essential skills covering fire, water, shelter, natural resources, tools, mindset, and community."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Explore ancient and modern survival techniques, including fire, water, shelter, and natural resources."
      }), "\n", createVNode(_components.li, {
        children: "Enjoy a farm-fresh lunch and herbal teas, with the apothecary open for shopping."
      }), "\n", createVNode(_components.li, {
        children: "Add a tent/car camping option for an extra $30 (up to 4 people)."
      }), "\n", createVNode(_components.li, {
        children: "Waiver Requirement: All participants must sign a liability waiver before the workshop."
      }), "\n", createVNode(_components.li, {
        children: "Open to ages 12 and up; guardians must accompany minors."
      }), "\n", createVNode(_components.li, {
        children: "Wear appropriate clothing (10°F cooler on the farm than in Chatt)"
      }), "\n", createVNode(_components.li, {
        children: "Bring sunscreen, bug protection, water bottles, snacks, a notebook, and comfortable walking shoes"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Immerse yourself in this outdoor adventure and leave with essential skills to thrive in nature!"
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

const url = "src/pages-events/bird-fork-farm/2025/bushcraft-survival.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/bushcraft-survival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/bushcraft-survival.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
