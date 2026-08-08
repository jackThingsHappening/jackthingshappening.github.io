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
  "title": "Try Oil Painting",
  "venue": "Townsend Atelier",
  "address": "The Arts Building. 301 East 11th, Chattanooga, TN",
  "iconPath": "/images/icons-new/art.png",
  "eventDates": ["2024-08-24"],
  "eventLink": "https://townsendatelier.com/product/try-oil-painting-just-bring-yourself/",
  "tags": ["art", "craft", "townsend-atelier"],
  "time": "10am - 5pm",
  "entranceCost": "$225",
  "layout": "../../layouts/BlogPostLayout.astro"
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
    children: [createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "August 24 & 25"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "10 am – 5 pm"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Instructor: Dave Salerno"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "No experience necessary | All materials provided"
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "This two-day workshop is designed for those who would like to try oil painting, but don’t want to buy all the materials needed or don’t know what products are best to buy. The instructor will provide each participant with all the supplies needed for the workshop. These include a palette, medium cups, brush washing jar, a high-quality painting knife, five high-quality brushes, a linen 9×12 oil-primed painting panel, artist-grade oil colors, artist-grade linseed oil, odorless mineral spirits, and paper towels as needed. (Those who prefer to bring their own supplies are welcome to do so.)"
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "No prior art experience is needed. If you have not tried drawing or painting, or if you think that you can’t, this is a perfect opportunity to try. These skills have been proven to be learnable. Participants will work from still-life setups provided by the instructor. The focus will be on how to use the materials and apply paint to create a finished oil painting."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "After discussing the various tools and supplies, the instructor will use the same materials to explain and demonstrate the steps used to make a painting and will guide each participant through these steps. He will provide handouts on the material discussed. The goal is to enjoy the experience of oil painting, with the hope that participants will decide to continue to pursue this rewarding activity."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "All participants will keep their finished painting."
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

const url = "src/pages-events/townsend-atelier/try-oil-painting.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/try-oil-painting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/try-oil-painting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
