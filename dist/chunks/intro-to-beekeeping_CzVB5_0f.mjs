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
  "title": "Intro to Beekeeping",
  "venue": "Crabtree Farms",
  "address": "1000 E 30th St.Chattanooga, TN 37407",
  "pubDate": "2024-06-29",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://crabtreefarms.org/event/intro-to-beekeeping-with-randall-kennedy/",
  "tags": ["crabtree-farms", "farm", "outdoors"],
  "entranceCost": "$30",
  "time": "10AM - 12PM",
  "layout": "../../../layouts/BlogPostLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Beekeeping is a hobby that’s gaining popularity for its benefits to the environment and personal wellness, not to mention the sweet bonus of harvesting your own honey! Crabtree Farms offers a workshop where Randall Kennedy, an experienced beekeeper with eight hives, demystifies the art of beekeeping. Participants will learn about bee biology, the necessary equipment, and the honey extraction process, including a live demonstration with an observation hive."
    }), "\n", createVNode(_components.p, {
      children: "Everyone leaves with a sample of fresh honey, enriching their understanding of beekeeping. Children aged 10-16 can explore this fascinating hobby for free if accompanied by a paying adult."
    }), "\n", createVNode(_components.p, {
      children: ["For questions, contact Christiana Key at 423-493-9155 or ", createVNode(_components.a, {
        href: "mailto:ckey@crabtreefarms.org",
        children: "ckey@crabtreefarms.org"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Please verify your email 48 hours before the event for any updates on rescheduling due to insufficient ticket sales."
    }), "\n", createVNode(_components.p, {
      children: "Refund requests can be made up to 7 days before the workshop with a 10% cancellation fee. If you can’t attend, consider gifting your spot to someone else. Contact Christiana for details."
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

const url = "src/pages-events/crabtree-farms/2024/intro-to-beekeeping.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/intro-to-beekeeping.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/intro-to-beekeeping.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
