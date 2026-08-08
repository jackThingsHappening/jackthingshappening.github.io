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
  "title": "Farley Con Expo",
  "venue": "Camp Jordan",
  "address": "323 Camp Jordan Pkwy, East Ridge, TN 37412",
  "eventLabel": "Day",
  "iconPath": "/images/icons-new/expo.png",
  "eventLink": "https://www.farleycon.com/",
  "time": "5am-5pm",
  "entranceCost": "$20",
  "ticketsLink": "https://www.eventbrite.com/e/farleycon-pop-culture-comic-book-expo-tickets-796913137647?aff=oddtdtcreator",
  "tags": ["camp-jordan", "comic-books", "expo"],
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
  return createVNode(_components.p, {
    children: [createVNode("b", {
      children: "August 3rd and 4th"
    }), "\nFarleyCon is back on August 3rd and 4th, 2024, at Camp Jordan Arena! Experience a weekend filled with special guests, panels, vendors, and cosplay. Ideal for comic fans and cosplayers alike, there’s something for everyone. Get your tickets now for the FarleyCon Pop Culture & Comic Book Expo, where pop culture comes alive!"]
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
const url = "src/pages-events/camp-jordan/2024/farley-con.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/farley-con.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/farley-con.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
