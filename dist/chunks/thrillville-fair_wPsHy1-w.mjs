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
  "title": "Thrillville Fair",
  "venue": "Camp Jordan",
  "address": "323 Camp Jordan Pkwy, East Ridge, TN 37412",
  "eventLabel": "Day",
  "eventLink": "https://www.thethrillville.com/eastridge",
  "eventDates": [],
  "time": "5pm-10pm weekdays. 1pm-11pm weekends.",
  "entranceCost": "$10 - $45",
  "ticketsLink": "https://events.thethrillville.com/event/campjordan",
  "tags": ["camp-jordan", "fair", "kid-friendly"],
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
    children: "The Thrillville Fair team is coming to East Ridge, TN this May. Get tickets to their high quality fun event where you can ride, eat, and game your heart out. There’s also a petting zoo and various performance acts and more fun to be discovered within for the entire family. Come out and be a part of this great community event! 🎈🚂🐴"
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
const url = "src/pages-events/camp-jordan/2024/thrillville-fair.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/thrillville-fair.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/thrillville-fair.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
