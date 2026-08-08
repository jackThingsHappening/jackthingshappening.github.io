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
  "title": "Midsummer Feast and Litha Ritual",
  "venue": "Crabtree Farms",
  "address": "1000 E 30th St.Chattanooga, TN 37407",
  "iconPath": "/images/icons-new/barn.png",
  "pubDate": "2024-06-16",
  "eventLink": "https://crabtreefarms.org/event/litha2024/",
  "tags": ["crabtree-farms", "farm", "outdoors"],
  "entranceCost": "$17 - $40",
  "time": "6PM - 8PM",
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
      children: "As the summer solstice brings the golden light of Litha, Crabtree Farms invites you and your family to celebrate the season. This event, set against the backdrop of lush fields and blooming gardens, honors the sun at its zenith, fostering community and connection."
    }), "\n", createVNode(_components.p, {
      children: "Litha prompts a celebration of nature’s abundance and the sun’s power, encouraging attendees to delve into the richness of life beyond the surface. The festivities include a traditional Calling of the Corners, a communal feast with seasonal produce, and crafting sunwheels to bring the sun’s blessings home. There’s also a guided herb walk for collecting herbs to dry and savor during winter."
    }), "\n", createVNode(_components.p, {
      children: "This day of connection and celebration harnesses the season’s energies, focusing on love and community. Ensure your participation by securing a ticket by June 15th and immerse yourself in the radiant spirit of Litha at Crabtree Farms. Join them as they embrace the enchanting summer energy."
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

const url = "src/pages-events/crabtree-farms/2024/feast-and-litha-ritual.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/feast-and-litha-ritual.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/crabtree-farms/2024/feast-and-litha-ritual.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
