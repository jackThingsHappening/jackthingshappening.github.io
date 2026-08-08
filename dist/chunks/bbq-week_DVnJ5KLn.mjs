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
  "title": "Nooga Nightlife: BBQ Week",
  "eventDates": [],
  "address": "Varies",
  "eventLink": "https://chattanoogabbqweek.com/",
  "iconPath": "/images/icons-new/dish-plate.png",
  "tags": ["nooga-nightlife", "food"],
  "entranceCost": "$7 BBQ at participating restaurants",
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
      children: "Chattanooga BBQ Week is a celebration dedicated to the rich and smoky flavors of barbecue, held annually in Chattanooga, Tennessee. This week-long event offers locals and visitors a chance to indulge in a variety of specially crafted BBQ dishes from some of the city’s top restaurants and chefs. Each participating venue showcases its unique take on barbecue, using secret rubs, slow-cooked techniques, and signature sauces that highlight regional flavors."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "During the week, attendees can enjoy everything from classic pulled pork and beef brisket to more innovative BBQ creations, all at special prices. The event also features competitions, live music, and cooking demonstrations, adding a festive atmosphere to the culinary exploration. It’s an opportunity for BBQ enthusiasts to gather, share their passion, and vote for their favorite dishes, making it a community-centric event that celebrates the art of American barbecue in the heart of Chattanooga."
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

const url = "src/pages-events/nooga-nightlife/2024/bbq-week.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/nooga-nightlife/2024/bbq-week.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/nooga-nightlife/2024/bbq-week.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
