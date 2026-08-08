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
  "title": "Woodcraft of Chattanooga: July Classes",
  "venue": "Woodcraft of Chattanooga",
  "address": "5824 Brainerd Road, Chattanooga, TN 37411",
  "iconPath": "/images/icons-new/craftsman.png",
  "eventDates": ["2024-07-19", "2024-07-20", "2024-07-21", "2024-07-27"],
  "eventDatesDetails": [{
    "date": "2024-07-19",
    "eventTitle": "Kitchen Cabinetmaking 104 - Applying Finishes",
    "topDetails": {
      "title": "Kitchen Cabinetmaking 104: Applying Finishes",
      "text": "In this class, you’ll delve into the art of applying finishes to your woodworking projects, a crucial step that not only enhances the appearance of your work but also protects it from wear and tear. Here’s what you can expect to learn about oil finishes, varnishes and polyurethanes, stains and dyes, among other techniques."
    }
  }, {
    "date": "2024-07-20",
    "eventTitle": "3 Events on July 20th",
    "topDetails": {
      "title": "Editor Note",
      "eventTitle": "3 Events Today",
      "text": "There are three classes at Woodcraft on July 20th.\n\n1. Spindle Turning 103: Taming of the Skew. The skew chisel is considered one of the most versatile tools in woodturning but also one of the most challenging to master. This class will focus on safe and effective techniques for using the skew chisel to create detailed and precise spindle work.\n\n2. Join Thru Joinery: Mortise and Tenons. The mortise and tenon joint is one of the strongest and oldest woodworking joints, used in furniture making for thousands of years. Students will practice creating these joints by hand and machine, ensuring tight fits and structural integrity.\n\n3. Join Thru Joinery: Half-Laps. Half-lap joints are commonly used in framing, cabinetry, and furniture for their simplicity and strength. The class will cover the different types of half-lap joints and their applications in various woodworking projects.\n"
    }
  }, {
    "date": "2024-07-21",
    "eventTitle": "Kitchen Cabinetmaking 105 - Decorative Details and Installation Techniques",
    "topDetails": {
      "title": "Kitchen Cabinetmaking 105: Decorative Details and Installation Techniques",
      "text": "Decorative details like molding and trim can transform the look of kitchen cabinets, adding a touch of elegance and personal style. This session will teach students how to add decorative elements and the best practices for installing cabinets securely."
    }
  }, {
    "date": "2024-07-27",
    "eventTitle": "3 Events on July 27th",
    "topDetails": {
      "eventTitle": "3 Events Today",
      "title": "Editor Note",
      "text": "There are three classes at Woodcraft on July 27th.\n\n1. Journey Thru Joinery: Rabbets and Dados. Rabbets and dados are essential joints in cabinet and bookshelf construction, providing strong, hidden connections. Participants will learn the precise techniques for cutting these joints using both hand tools and power tools.\n\n2. Journey Thru Joinery: Cope and Stick. Cope and stick joints are commonly used in frame and panel construction, especially for cabinet doors. This class will demonstrate the process of creating these joints, which involve intricate cutting and fitting for a seamless finish.\n\n3. Bowl Turning 101: The Basics. Bowl turning is one of the most popular forms of woodturning, allowing for creative expression through shape and wood grain. Beginners will learn the fundamentals of bowl turning, including selecting wood, tool usage, and finishing techniques to create a beautiful, functional bowl.\n"
    }
  }],
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
    children: [createVNode("br", {}), "\n", createVNode("b", {
      children: createVNode("p", {
        style: {
          fontSize: "20px"
        },
        children: "Full Schedule of Woodcraft events for July:"
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-01",
        children: "July 1st:"
      }), " Sawdust Social: Campfire Roasting Fork"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-02 2024-07-09",
        children: "July 2nd and 9th:"
      }), " Woodworking Fundamentals"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-02",
        children: "July 2nd:"
      }), " Pen Turning 101"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-05",
        children: "July 5th:"
      }), " Natural Edge Bowl Building"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-06",
        children: "July 6th:"
      }), " Woodworking Fundamentals"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-06",
        children: "July 6th:"
      }), " Bowl Turning 104: Platters"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-06",
        children: "July 6th:"
      }), " Intro to Turning"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-07",
        children: "July 7th:"
      }), " Bowl Turning 101: The Basics"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-08",
        children: "July 8th:"
      }), " Basic Box Making"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-09",
        children: "July 9th:"
      }), " Pen Turning 102: Using Acrylics"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-11",
        children: "July 11th:"
      }), " Intro to Turning"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-12",
        children: "July 12th:"
      }), " Date Night: Popper and Stopper"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-12 2024-07-13",
        children: "July 12th and 13th:"
      }), " Woodworking Fundamentals II"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-13",
        children: "July 13th:"
      }), " Spindle Turning 101: The Basics"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-13",
        children: "July 13th:"
      }), " Date Night: Plant Stand"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-14",
        children: "July 14th:"
      }), " Wine Bottle Holder"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-16",
        children: "July 16th:"
      }), " Making a Custom Knife"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-16 2024-07-30",
        children: "July 16th and 30th:"
      }), " Pen Turning 103"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-18",
        children: "July 18th:"
      }), " Kitchen Cabinetmaking 103: Shaker Doors and Drawer Fronts"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-18 2024-07-19",
        children: "July 18th and 19th:"
      }), " Spindle Turning 102: Furniture"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-19",
        children: "July 19th:"
      }), " Kitchen Cabinetmaking 104: Applying Finishes"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-20",
        children: "July 20th:"
      }), " Spindle Turning 103: Taming of the Skew"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-20",
        children: "July 20th:"
      }), " Join Thru Joinery: Mortise and Tenons"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-20",
        children: "July 20th:"
      }), " Join Thru Joinery: Half-Laps"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-21",
        children: "July 21st:"
      }), " Kitchen Cabinetmaking 105: Decorative Details and Installation Techniques"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-27",
        children: "July 27th:"
      }), " Journey Thru Joinery: Rabbets and Dados"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-27",
        children: "July 27th:"
      }), " Journey Thru Joinery: Cope and Stick"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        className: "2024-07-27",
        children: "July 27th:"
      }), " Bowl Turning 101: The Basics"]
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "If you like woodcraft and don’t see anything on this list that interests you, I don’t really know what to say. If you do partake, I hope it’s a great time!"
    }), "\n", createVNode("script", {
      "is:inline": true,
      children: [createVNode(_components.p, {
        children: "let pathSplit = window.location.pathname.split(”/”);\nlet elId = pathSplit[pathSplit.length - 2];\nlet els = document.getElementsByClassName(elId);"
      }), createVNode(_components.p, {
        children: "Array.from(els).forEach((el) => el.classList.add(“highlighted-date”));"
      })]
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

const url = "src/pages-events/woodcraft-of-chattanooga/july-classes.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodcraft-of-chattanooga/july-classes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodcraft-of-chattanooga/july-classes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
