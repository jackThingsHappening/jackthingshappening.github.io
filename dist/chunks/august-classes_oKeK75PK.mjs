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
  "title": "Woodcraft of Chattanooga: August Classes",
  "venue": "Woodcraft of Chattanooga",
  "address": "5824 Brainerd Road, Chattanooga, TN 37411",
  "iconPath": "/images/icons-new/craftsman.png",
  "eventDates": ["2024-08-01", "2024-08-02", "2024-08-03", "2024-08-04", "2024-08-06", "2024-08-08", "2024-08-09", "2024-08-10", "2024-08-11", "2024-08-12", "2024-08-13", "2024-08-15", "2024-08-16", "2024-08-17", "2024-08-20", "2024-08-22", "2024-08-23", "2024-08-24", "2024-08-25", "2024-08-27", "2024-08-29", "2024-08-30", "2024-08-31"],
  "eventLink": "https://www.woodcraft.com/pages/store-classes/chattanooga",
  "tags": ["woodworking", "craft", "woodcraft-of-chattanooga"],
  "time": "Varies",
  "entranceCost": "Varies",
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
    children: [createVNode(_components.p, {
      children: "The sheer number of classes and events Woodcraft puts on is impressive! If you’re just starting out in woodwork, want to learn a new technique, or just want to socialize with like-minded people, I think you’ll find what you’re looking for below. Check the event website for more information on each class."
    }), "\n", createVNode("br", {}), "\n", createVNode("b", {
      children: createVNode("p", {
        style: {
          fontSize: "20px"
        },
        children: "Classes:"
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 1st:"
      }), " Journey Thru Joinery: Haunched Tenons"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 1st:"
      }), " Journey Thru Joinery: Pocket Holes"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 1st & 8th:"
      }), " Woodworking Fundamentals I"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 1st:"
      }), " Intro to Turning"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 2nd & 3rd:"
      }), " Woodworking Fundamentals II"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 2nd:"
      }), " DATE NIGHT: Turned Scoops"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 3rd:"
      }), " Intro to Turning"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 3rd:"
      }), " Pen Turning 101: The Basics"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 4th:"
      }), " Spindle Turning 101: The Basics"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 6th:"
      }), " Pen Turning 101: The Basics"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 8th:"
      }), " Journey Thru Joinery: Sliding Dovetails"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 8th:"
      }), " Journey Thru Joinery: Reinforced Butt Joints"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 8th:"
      }), " Journey Thru Joinery: Castle Joint"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 9th & 10th:"
      }), " Woodworking Fundamentals III"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 10th & 11th:"
      }), " Bowl Turning 102: From Log to Bowl"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 12th–14th:"
      }), " Kitchen Cabinetmaking 201: Tall Linen Cabinet"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 12th:"
      }), " Intro to Wood Burning"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 13th:"
      }), " Pen Turning 102: Using Acrylics"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 15th:"
      }), " Kitchen Cabinetmaking 202: Dovetailed Drawers II"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 15th–17th:"
      }), " Spindle Turning 104: Advanced Spindle Projects"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 16th:"
      }), " Kitchen Cabinetmaking 203: Raised Panel Doors"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 17th:"
      }), " Kitchen Cabinetmaking 204: Spraying Finishes"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 17th:"
      }), " Sharpening Turning Tools"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 20th & 27th:"
      }), " Pen Turning 103: Pouring and Turning Resin Pen Blanks"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 22nd:"
      }), " Intro to Turning"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 23rd, 30th & 31st:"
      }), " Fine Furniture 101: Casework Construction"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 23rd:"
      }), " DATE NIGHT: Pair of Turned Pens"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 24th:"
      }), " Bowl Turning 103: Natural Edge Bowls"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 25th:"
      }), " Artistic Turning 201: Three Corner Bowl"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: "August 29th:"
      }), " Sawdust Social: Campfire Roasting Fork"]
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "If you like woodcraft and don’t see anything on this list that interests you, I don’t really know what to say. If you do partake, I hope it’s a great time!"
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

const url = "src/pages-events/woodcraft-of-chattanooga/august-classes.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodcraft-of-chattanooga/august-classes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodcraft-of-chattanooga/august-classes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
