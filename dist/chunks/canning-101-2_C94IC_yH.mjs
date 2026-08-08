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
  "title": "Caning 101 ",
  "venue": "Bird Fork Farm",
  "iconPath": "/images/icons-new/barn.png",
  "address": "Dunlap, TN (address provided after registration)",
  "pubDate": "2024-07-06",
  "eventLink": "https://birdforkfarm.square.site/events",
  "tags": ["bird-fork-farm", "farm", "outdoors"],
  "entranceCost": "$60",
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
      children: "Join Feather’s & Fruit for a three-hour hands-on canning workshop in a relaxed outdoor environment surrounded by woods, fresh air, and farmland. Learn the art of water bath canning and explore quick pickling and pressure canning."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Small Group Learning: Classes are limited to 18 participants to ensure personalized instruction."
      }), "\n", createVNode(_components.li, {
        children: "Hands-On Experience: Gain confidence to can salsa, jellies, applesauce, and more."
      }), "\n", createVNode(_components.li, {
        children: "Take-Home Treats: For $60/person, leave with a pint of your own canned goods made from locally grown ingredients."
      }), "\n", createVNode(_components.li, {
        children: "Additional Shopping: Purchase more Feather’s & Fruit canned goods and shop the BFF Apothecary."
      }), "\n", createVNode(_components.li, {
        children: "Casual Atmosphere: Bring snacks, lunch, and your favorite drink. BYOB and drink whenever “prep” is mentioned."
      }), "\n", createVNode(_components.li, {
        children: "Materials Provided: Jars, ingredients, printouts, and pens are supplied. Bring a reusable water bottle and snacks."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Time: Begins at 1 p.m. EST (12 p.m. Central)."
    }), "\n", createVNode(_components.p, {
      children: "Wear appropriate outdoor clothing (typically 10°F cooler on the farm)."
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

const url = "src/pages-events/bird-fork-farm/2025/canning-101-2.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/canning-101-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/canning-101-2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
