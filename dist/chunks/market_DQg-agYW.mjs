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
  "title": "Main Street Farmers Market",
  "address": "Chestnut Street &, W 20th St, Chattanooga, TN",
  "iconPath": "/images/icons-new/market.png",
  "eventDates": ["2024-05-29", "2024-06-05", "2024-06-12", "2024-06-19", "2024-06-26", "2024-07-03", "2024-07-03"],
  "eventLink": "https://www.mainstfarmersmarket.com/",
  "tags": ["farmers-market", "free", "outside"],
  "time": "4pm - 6pm",
  "entranceCost": "Free",
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
  return createVNode(_components.p, {
    children: ["This is a wonderful year round Chattanooga farmers market featuring 20+ ", createVNode(_components.a, {
      href: "https://www.mainstfarmersmarket.com/vendors",
      children: "local vendors"
    }), ". The event occurs every Wednesday year round. It’s a great opportunity to get out of the house, buy health organic produce and support our local farmers and other vendors. Also noteworthy, there’s free parking."]
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
const url = "src/pages-events/main-street-farmers-market/2024/market.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/main-street-farmers-market/2024/market.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/main-street-farmers-market/2024/market.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
