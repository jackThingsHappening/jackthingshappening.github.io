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
  "title": "Canning 101",
  "venue": "Bird Fork Farm",
  "address": "Bird Fork Farm, Lewis Cross Rd, Dunlap, TN 37327-6807",
  "iconPath": "/images/icons-new/barn.png",
  "pubDate": "2024-05-11",
  "eventLink": "https://birdforkfarm.square.site/events",
  "tags": ["bird-fork-farm", "farm"],
  "entranceCost": "$60",
  "time": "12pm - 3pm CDT",
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
      children: "Learn to Can with Feather’s & Fruit: A Unique Outdoor Canning Class"
    }), "\n", createVNode(_components.p, {
      children: "Get ready for a hands-on canning experience in an outdoor setting surrounded by nature. Join Feather’s & Fruit for a three-hour canning class where you’ll learn the basics of water bath canning, quick pickling, and pressure canning."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Personalized Instruction: Class is limited to 18 participants for a focused learning experience."
      }), "\n", createVNode(_components.li, {
        children: "Hands-On Learning: Practice canning with two batches and gain confidence to preserve salsa, jellies, applesauce, and more."
      }), "\n", createVNode(_components.li, {
        children: "Take-Home Treats: For $60/person, leave with a pint of your own farm-fresh canned goods made from locally grown ingredients."
      }), "\n", createVNode(_components.li, {
        children: "Additional Shopping: Opportunity to purchase Feather’s & Fruit canned goods and shop the BFF Apothecary."
      }), "\n", createVNode(_components.li, {
        children: "Bring snacks or lunch and your favorite beverage for a relaxed class atmosphere. BYOB and drink every time you hear “prep.”"
      }), "\n", createVNode(_components.li, {
        children: "Materials Provided: Jars, ingredients, printouts, and pens are supplied. Participants should bring a reusable water bottle, beverage of choice, and snacks or lunch."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Join this canning class and leave with new skills and delicious canned goods!"
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

const url = "src/pages-events/bird-fork-farm/2025/canning-101.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/canning-101.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/bird-fork-farm/2025/canning-101.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
