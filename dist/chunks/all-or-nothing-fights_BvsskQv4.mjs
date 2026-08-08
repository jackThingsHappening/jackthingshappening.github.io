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
  "title": "All or Nothing Fights",
  "venue": "Camp Jordan Arena",
  "address": "323 Camp Jordan Pkwy, East Ridge, TN 37412",
  "iconPath": "/images/icons-new/sport.png",
  "eventDates": [],
  "eventLabel": "Day",
  "eventLink": "https://combatsportsnow.com/events",
  "tags": ["camp-jordan", "sports"],
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
    children: "An amateur MMA event - run by fighters for fighters. If you don’t see tickets for the date you’re interested in, it may not be posted yet, check back at combatsportsnow.com later."
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
const url = "src/pages-events/camp-jordan/2024/all-or-nothing-fights.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/all-or-nothing-fights.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/all-or-nothing-fights.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
