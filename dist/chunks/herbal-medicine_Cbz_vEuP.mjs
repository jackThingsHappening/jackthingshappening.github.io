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
  "title": "Intro to Herbal Medicine Making",
  "venue": "Crabtree Farms",
  "address": "1000 E 30th St.Chattanooga, TN 37407",
  "pubDate": "2024-05-30",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://crabtreefarms.org/event/intro-to-herbal-medicine-making/",
  "tags": ["crabtree-farms", "farm", "outdoors"],
  "entranceCost": "$35",
  "time": "6PM - 8PM",
  "layout": "../../../layouts/BlogPostLayout.astro"
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
      children: "Are you curious about the world of herbal medicine? Dive into this intriguing practice with Melonie Lusk, the dynamic Executive Director of Crabtree Farms and an enthusiastic herbalist in the making!"
    }), "\n", createVNode(_components.p, {
      children: "Spend an evening discovering the art of herbal medicine alongside Melonie. The workshop covers a variety of herbal techniques, both topical and internal. You’ll get to learn about making tinctures, capsules, flower essences, and poultices—each one a different pathway to natural healing."
    }), "\n", createVNode(_components.p, {
      children: "Participants won’t just be watching; they’ll actively engage in creating their own herbal preparations. By the end of the session, everyone gets to take home their very own herbal ally remedy, a crafted concoction that might just become a new favorite in their wellness toolkit."
    }), "\n", createVNode(_components.p, {
      children: "This hands-on class is perfectly suited for aspiring herbalists aged 12 and up. It’s a fun, educational way to spend an evening, and you might discover a new passion or deepen an existing one. Whether you’re a beginner curious about natural health or someone with a bit of experience looking to expand your skills, this event promises a warm, welcoming atmosphere where learning and creativity bloom. Don’t miss out on this unique opportunity to connect with nature and like-minded individuals!"
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

const url = "src/pages-events/crabtree-farms/2024/herbal-medicine.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/herbal-medicine.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/herbal-medicine.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
