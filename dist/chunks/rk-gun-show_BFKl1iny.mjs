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
  "title": "RK Gun Show",
  "venue": "Camp Jordan",
  "address": "323 Camp Jordan Pkwy, East Ridge, TN 37412",
  "iconPath": "/images/icons-new/expo.png",
  "eventDates": [],
  "eventLabel": "Day",
  "time": "7am-9pm",
  "entranceCost": "$7-$15",
  "eventLink": "https://rkshows.com/",
  "ticketsLink": "https://rkshows.com/event/chattanooga-gun-show-052524/",
  "tags": ["camp-jordan", "expo"],
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
      children: "If you’re into gun collecting or hunting, the gun show at Camp Jordan Arena in Chattanooga, TN, hosted by RK Shows Tennessee, is a must-visit. Explore a wide range of guns, hunting gear, military surplus, and outdoor equipment. Expert vendors will be there to assist and answer your questions."
    }), "\n", createVNode(_components.p, {
      children: "Safety is paramount at all RK Shows events, with strict security and check-in points to protect all attendees and vendors."
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

const url = "src/pages-events/camp-jordan/2024/rk-gun-show.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/rk-gun-show.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/rk-gun-show.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
