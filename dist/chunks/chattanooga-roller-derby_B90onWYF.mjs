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
  "title": "Chattanooga Roller Derby",
  "venue": "Camp Jordan Arena",
  "address": "323 Camp Jordan Pkwy, East Ridge, TN 37412",
  "iconPath": "/images/icons-new/sport.png",
  "eventLabel": "Game",
  "time": "2pm-9pm",
  "entranceCost": "$6-$14",
  "eventLink": "https://chattanoogarollerderby.com/",
  "ticketsLink": "https://chattanoogarollerderby.com/event/chattanooga-roller-derby-home/",
  "tags": ["camp-jordan", "sports", "kid-friendly"],
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
    children: "Join in the excitement with the Chattanooga Roller Derby All-Stars as they clash against the formidable Team Florida May 4th (6/8 and 8/17 opponents TBA)! Gather your friends and family for a thrilling evening of high-speed chases, strategic plays, and heart-stopping action. Be there to witness these great athletes battle it out on wheels—don’t miss this showdown!"
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
const url = "src/pages-events/camp-jordan/2024/chattanooga-roller-derby.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/chattanooga-roller-derby.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/chattanooga-roller-derby.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
