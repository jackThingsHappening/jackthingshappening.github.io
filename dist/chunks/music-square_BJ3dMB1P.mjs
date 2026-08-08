import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "title": "Live on Music Square",
  "venue": "Cambridge Square",
  "iconPath": "/images/icons-new/music.png",
  "eventDates": ["2025-06-07", "2025-06-14", "2025-06-21", "2025-07-12", "2025-07-19", "2025-08-16", "2025-08-30", "2025-09-13", "2025-09-20", "2025-09-27"],
  "address": "9440 Bradmore Ln, Ooltewah, TN 37363",
  "eventLink": "https://www.cambridgesquaretn.com/ourtenants-1",
  "tags": [{
    "type": "genre",
    "tag": "music"
  }, {
    "type": "genre",
    "tag": "free"
  }],
  "entranceCost": "free",
  "time": "6:00pm to 9:00pm"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    meta: "meta",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.p, {
      children: "Join in the fun at Cambridge Square every Saturday during the warm months for live music evenings that light up the square with the energy of local and regional bands. Enjoy a diverse lineup of genres, from jazz and rock to pop, in the welcoming atmosphere of our community hub. Gather with friends and family for nights filled with good music and great vibes."
    }), "\n", createVNode("b", {
      children: "Featuring:"
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-06-07",
        children: "June 7th:"
      }), " Joe C. Deville Music"]
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-06-14",
        children: "June 14th:"
      }), " Courtney Daly and The Grind"]
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-06-21",
        children: "June 21st:"
      }), " Forever 13"]
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-07-12",
        children: "July 12th:"
      }), " Zacharia Dallas"]
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-07-19",
        children: "July 19th:"
      }), " Wilson And Cross Bluegrass"]
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-08-16",
        children: "August 16th:"
      }), " Doubleshots/Texissipi SIP"]
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-08-30",
        children: "August 30th:"
      }), " Mother Legacy"]
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-09-13",
        children: "September 13th:"
      }), " Forever 13"]
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-09-20",
        children: "September 20th:"
      }), " Joel Beaver Band"]
    }), "\n", createVNode("div", {
      children: [createVNode("b", {
        className: "2025-09-27",
        children: "September 27th:"
      }), " Ariel Omarzu"]
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
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/pages-events/cambridge-square/2025/music-square.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/cambridge-square/2025/music-square.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/cambridge-square/2025/music-square.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
