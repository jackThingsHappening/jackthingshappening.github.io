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
  "title": "Taco Festival",
  "venue": "Camp Jordan Arena",
  "venueDetails": "Kitchen Pavillion",
  "address": "323 Camp Jordan Pkwy, East Ridge, TN 37412",
  "eventDates": [],
  "eventLabel": "Day",
  "time": "7am-12am",
  "entranceCost": "Free",
  "tags": ["camp-jordan", "food"],
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
    children: "🌮 Support small business at the Chattanooga Taco Festival at Camp Jordan for a day filled with fun! There are over 150 vendors, a variety of food trucks, inflatables, a petting zoo, pony rides, and trackless train rides for endless entertainment. It’s a perfect way to enjoy a day out with friends and family. Come and make some great memories! 🌮"
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
const url = "src/pages-events/camp-jordan/2024/taco-festival.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/taco-festival.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/taco-festival.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
