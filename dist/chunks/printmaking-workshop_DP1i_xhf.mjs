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
  "title": "Printmaking Workshop",
  "venue": "Townsend Atelier",
  "address": "The Arts Building. 301 East 11th, Chattanooga, TN",
  "iconPath": "/images/icons-new/art.png",
  "eventDates": ["2024-08-16"],
  "eventLink": "https://townsendatelier.com/product/3-day-printmaking-workshop-pochoir-meets-collagraphy/",
  "tags": ["art", "craft", "townsend-atelier"],
  "time": "10am - 3pm",
  "entranceCost": "$220",
  "layout": "../../layouts/BlogPostLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "2024-08-16 – 2024-08-18"
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["Materials included.", createVNode(_components.br, {}), "\nInstructor: Carrie Pendergrass"]
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "3-day workshop. This class is a unique pairing of two very different, but very versatile printmaking techniques. The focus will be on collagraphy—making creative handmade print plates using found objects—and pochoir, handcrafting reusable stencils for use in a variety of printmaking applications both on and off the press."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Collagraphy"
      }), " is a printmaking process in which materials are glued or sealed to a rigid substrate to create handmade print plates. You will have the opportunity to experiment with a variety of found objects, repurposing numerous materials into infinitely creative designs and motifs. The plates will then be printed on the press via a wet-paper method, which helps highlight the unique textures and values achieved through both low and high relief materials."]
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Pochoir"
      }), " is the French word for stencil. Stencils—pigment-resisting materials—are one of the earliest known forms of printmaking (think: handprints on cave walls with blown pigments). In the pre-digital days of illustration and design, stencils were used to achieve rich colors and patterns, and they are still a viable tool for many art applications today. In this class, we’ll create handmade stencils from a variety of materials and explore how to apply them both in printmaking and across other media."]
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "There will be a lunch break each day."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Materials:"
      }), " All materials are included in the workshop."]
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Optional items to bring:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Pencils, erasers"
      }), "\n", createVNode(_components.li, {
        children: "Favorite utility/X-Acto knives and scissors (instructor provides blades/refills)"
      }), "\n", createVNode(_components.li, {
        children: "Small, flat/round rigid paintbrushes"
      }), "\n", createVNode(_components.li, {
        children: "Flattened botanical items"
      }), "\n", createVNode(_components.li, {
        children: "Flat rubber, plastic, or textured items"
      }), "\n", createVNode(_components.li, {
        children: "Pre-fab stencils"
      }), "\n", createVNode(_components.li, {
        children: "Personal brayers, sponges, shapes, aluminum tape"
      }), "\n"]
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

const url = "src/pages-events/townsend-atelier/printmaking-workshop.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/printmaking-workshop.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/townsend-atelier/printmaking-workshop.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
