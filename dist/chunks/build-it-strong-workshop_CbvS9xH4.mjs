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
  "title": "Skill Strengthening Workshop: Build it Strong!",
  "venue": "Crabtree Farms",
  "address": "1000 E 30th St.Chattanooga, TN 37407",
  "iconPath": "/images/icons-new/barn.png",
  "pubDate": "2024-07-20",
  "eventLink": "https://crabtreefarms.org/event/skill-strengthening-workshop-build-it-strong/",
  "tags": ["crabtree-farms", "farm", "outdoors"],
  "entranceCost": "$25",
  "time": "2PM - 5PM",
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
      children: "Grab a hot glue gun and a utility knife and dive into a creative challenge where participants collaborate to construct a sturdy, fabulous-looking structure from seemingly fragile cardboard. This unique workshop is designed for those fascinated by the balance between form and function, answering essential questions like “How do you make stuff stand up?” and “How can you balance design with structure?”"
    }), "\n", createVNode(_components.p, {
      children: "Led by Sarah Wagner, a seasoned sculptor and writer with extensive construction and fabrication experience, the workshop delves into fundamental building principles. It highlights the importance of triangulation—an engineering concept critical in transforming weak materials into strong structures—and explores other key architectural elements like posts and lintels, arches, trusses, and the principles of compression and tension."
    }), "\n", createVNode(_components.p, {
      children: "This session is perfect for builders and makers who love to create but sometimes find their structures lacking stability. It’s an opportunity to unlock the secrets of effective building techniques while having fun constructing something that can support a person’s weight."
    }), "\n", createVNode(_components.p, {
      children: "Sarah brings decades of expertise in various construction fields, from wet plaster to carpentry and even plumbing, making her an invaluable guide in the art of making strong, beautiful structures."
    }), "\n", createVNode(_components.p, {
      children: "For anyone interested in learning how basic design principles can lead to functional and aesthetic creations, this workshop is a chance to gain practical skills in a hands-on, collaborative environment."
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

const url = "src/pages-events/crabtree-farms/2024/build-it-strong-workshop.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/build-it-strong-workshop.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/build-it-strong-workshop.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
