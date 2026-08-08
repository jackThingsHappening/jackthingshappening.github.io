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
  "title": "Repticon",
  "venue": "Camp Jordan",
  "address": "323 Camp Jordan Pkwy, East Ridge, TN 37412",
  "eventLabel": "Day",
  "iconPath": "/images/icons-new/expo.png",
  "eventLink": "https://repticon.com/",
  "time": "8am - 9pm",
  "entranceCost": "$6 - $15",
  "ticketsLink": "https://repticon.com/repticon-chattanooga/",
  "tags": ["camp-jordan", "kid-friendly", "animals", "expo"],
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
      children: "August 24th and 25th"
    }), "\n🦎 Repticon is a premier organizer of reptile and exotic animal expos across the U.S., featuring a diverse mix of vendors, breeders, and educators. At these family-friendly events, attendees can explore and learn about exotic animals that are not typically available in local pet shops. Knowledgeable breeder-vendors are on hand to educate, and the event includes a series of expert-led seminars on herpetology-related topics.🐍"]
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
const url = "src/pages-events/camp-jordan/2024/repticon.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/repticon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/camp-jordan/2024/repticon.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
