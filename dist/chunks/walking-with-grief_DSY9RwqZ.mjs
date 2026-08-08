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
  "title": "Walking With Grief",
  "venue": "Crabtree Farms",
  "address": "1000 E 30th St.Chattanooga, TN 37407",
  "pubDate": "2024-07-14",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://crabtreefarms.org/event/walking-with-grief-5/",
  "tags": ["crabtree-farms", "farm", "outdoors"],
  "entranceCost": "$40",
  "time": "2PM - 3:30PM",
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
      children: "The journey through grief can often feel overwhelming, but no one needs to navigate it alone. The “Walking with Grief” workshop offers a space to understand and process loss in healing ways."
    }), "\n", createVNode(_components.p, {
      children: "This interactive workshop is open to anyone grappling with any type of loss or grief. Led by Kate Caldwell of Awareness Arts Collective, LLC, it provides an in-depth look at the nature of grief and strategies for managing its emotional toll. Participants will engage in discussions, meditative practices, and creative exercises designed to support their grieving process. Each session is tailored to the participants’ comfort levels, allowing them to choose how deeply to engage with the material."
    }), "\n", createVNode(_components.p, {
      children: "In addition to fostering personal healing, the workshop offers tools for self-care and opportunities to connect with others facing similar challenges, creating a community of support."
    }), "\n", createVNode(_components.p, {
      children: "Kate Caldwell brings a wealth of experience to her role as a facilitator. Having founded Awareness Arts Collective, LLC, she aims to help clients alleviate suffering and enhance joy and fulfillment in their lives by promoting personal growth. Her diverse background equips her to provide spiritual care to people from various backgrounds and with different challenges."
    }), "\n", createVNode(_components.p, {
      children: ["For more information or to ask any questions about the workshop, you can reach out to Kate directly at ", createVNode(_components.a, {
        href: "mailto:kate@awarenessartscollective.com",
        children: "kate@awarenessartscollective.com"
      }), " or call her at 423-939-9585."]
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

const url = "src/pages-events/crabtree-farms/2024/walking-with-grief.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/walking-with-grief.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/walking-with-grief.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
