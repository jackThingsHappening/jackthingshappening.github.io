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
  "title": "Gardening Class",
  "venue": "Crabtree Farms",
  "address": "1000 E 30th St.Chattanooga, TN 37407",
  "pubDate": "2024-06-11",
  "iconPath": "/images/icons-new/barn.png",
  "eventLink": "https://crabtreefarms.org/event/clases-de-jardineria-3/",
  "tags": ["crabtree-farms", "farm", "outdoors", "free"],
  "entranceCost": "free",
  "time": "5:30PM - 7PM",
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
      children: "Join the green-thumbed community at Crabtree Farms for an engaging gardening class led by the seasoned expert, Karen Creel. Having shared her deep knowledge through numerous classes, Karen welcomes gardeners of every stripe, from novices to seasoned pros. The gathering spot is the lush, communal garden at Crabtree Farms, ensuring a perfect backdrop for learning and growth."
    }), "\n", createVNode(_components.p, {
      children: "For those who need it, a Spanish interpreter will be on hand, making sure everyone can dig in without missing a beat."
    }), "\n", createVNode(_components.p, {
      children: "Location: 1000 E 30th St, Chattanooga"
    }), "\n", createVNode(_components.p, {
      children: "Date: Tuesday, June 11th"
    }), "\n", createVNode(_components.p, {
      children: "Time: 5:30 PM to 7:00 PM"
    }), "\n", createVNode(_components.p, {
      children: "Best of all? It’s completely free to attend! Whether you’re looking to pick up a few gardening tips, meet fellow plant lovers, or just enjoy a peaceful evening surrounded by nature, this class is an ideal outing. Don’t miss out on the chance to plant some new skills and maybe even some new friendships at this vibrant community event."
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

const url = "src/pages-events/crabtree-farms/2024/gardening-class.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/gardening-class.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/gardening-class.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
