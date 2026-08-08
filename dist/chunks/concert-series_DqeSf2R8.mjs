import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "title": "TVCU Riverfront Nights",
  "address": "201 Riverfront Pkwy, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/music.png",
  "eventDates": ["2025-05-31", "2025-06-07", "2025-06-14", "2025-06-21", "2025-06-28", "2025-07-05", "2025-07-12", "2025-07-19", "2025-07-26", "2025-08-02", "2025-08-09", "2025-08-16", "2025-08-23", "2025-08-30"],
  "eventLink": "https://www.riverfrontnights.com/",
  "tags": [{
    "type": "genre",
    "tag": "music"
  }, {
    "type": "place",
    "tag": "riverfront-nights"
  }],
  "time": "6pm - 10pm",
  "entranceCost": "Free"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    em: "em",
    meta: "meta",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), createVNode(_components.p, {
      children: ["The summer season at Ross’s Landing continues with ", createVNode(_components.em, {
        children: "Fourteen Saturdays of Summer"
      }), "—a beloved Chattanooga tradition running from Memorial Day weekend through Labor Day. Each Saturday evening features free live music under the stars, spotlighting an exciting mix of tribute bands and original artists across genres."]
    }), "\n", createVNode(_components.p, {
      children: "Bring a blanket or camp chair, grab a bite from local food vendors, and enjoy the riverfront setting with family, friends, or your pup (on a leash). Arrive early to claim your spot—music starts at 7:00 pm, with vendors open from 6:00 to 10:00 pm."
    }), "\n", createVNode(_components.p, {
      children: [createVNode("b", {
        children: createVNode("p", {
          style: {
            fontSize: "20px"
          },
          children: "2025 Lineup:"
        })
      }), "\n", createVNode("b", {
        className: "2025-05-31",
        children: "May 31st:"
      }), " ON THE BORDER: THE ULTIMATE EAGLES TRIBUTE and FRESH MIND", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-06-07",
        children: "June 7th:"
      }), " SHADOWGRASS and RANDY STEELE & THE HIGH COLD WIND", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-06-14",
        children: "June 14th:"
      }), " PAUL THORN BAND and CALL ME SPINSTER", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-06-21",
        children: "June 21st:"
      }), " SOUL SACRIFICE: A SANTANA TRIBUTE and ROCK AND SKATE", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-06-28",
        children: "June 28th:"
      }), " KANIN WREN’S TAYLOR SWIFT EXPERIENCE and THE NEON QUEEN: AN ABBA TRIBUTE", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-07-05",
        children: "July 5th:"
      }), " BOOT SCOOTIN’ BOOGIE NIGHTS: 90s COUNTRY and HARD LUCK", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-07-12",
        children: "July 12th:"
      }), " BACK 2 MAC: A TRIBUTE TO FLEETWOOD MAC and DOCK PARTY", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-07-19",
        children: "July 19th:"
      }), " PANDORA’S BOX: ULTIMATE AEROSMITH TRIBUTE and THE ESSENTIALS", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-07-26",
        children: "July 26th:"
      }), " THE KINGS OF QUEEN: THE TOP QUEEN TRIBUTE and WAYWARD HEARTS", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-08-02",
        children: "August 2nd:"
      }), " PURPLE MADNESS: A TRIBUTE TO PRINCE and LE GATO", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-08-09",
        children: "August 9th:"
      }), " YACHT ROCK SCHOONER and SWAYYVO", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-08-16",
        children: "August 16th:"
      }), " DIZGO and JAWNRA", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-08-23",
        children: "August 23rd:"
      }), " WHO’S BAD: THE ULTIMATE MICHAEL JACKSON EXPERIENCE and PAUL CHILDERS", createVNode(_components.br, {}), "\n", createVNode("b", {
        className: "2025-08-30",
        children: "August 30th:"
      }), " THE BROTHERHOOD: A DOOBIE BROTHERS TRIBUTE and RICK RUSHING & THE BLUES STRANGERS"]
    }), "\n", createVNode(_components.p, {
      children: ["Visit the ", createVNode("a", {
        href: "https://www.riverfrontnights.com/",
        children: "official event site"
      }), " for more info and updates."]
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

const url = "src/pages-events/riverfront-nights/2025/concert-series.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/riverfront-nights/2025/concert-series.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/riverfront-nights/2025/concert-series.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
