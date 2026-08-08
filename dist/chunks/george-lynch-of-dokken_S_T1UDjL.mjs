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
  "title": "An Evening with George Lynch of Dokken",
  "venue": "Songbirds Foundation",
  "address": "206 West Main Street, Chattanooga, TN, 37408",
  "pubDate": "2024-06-26",
  "eventLink": "https://songbirdsfoundation.org/events/george-lynch",
  "tags": ["music", "songbirds"],
  "entranceCost": "$75 - $175",
  "iconPath": "/images/icons-new/music.png",
  "ticketsLink": "https://www.seetickets.us/event/sunny-sweeney/598569",
  "time": "6pm - 10pm",
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
      children: "Doors at 6:00 PM\nShow at 7:00 PM\nMixed Seated/Standing Show"
    }), "\n", createVNode(_components.p, {
      children: "GEORGE LYNCH\nOne of the most popular and influential guitarists to emerge from the 1980s heavy metal scene, George Lynch helped propel Dokken toward the top of the charts and later launched a solo career. With his arsenal of stylish guitars and virtuosic solos, Lynch has been at the forefront of the hard rock scene for over four decades."
    }), "\n", createVNode(_components.p, {
      children: "TERRY ILOUS of XYZ\nA hard rock/glam-pop metal unit with roots in both France and the US, XYZ was founded by vocalist Terry Ilous and honed their chops in and around the Sunset Strip. In 1989 they inked a deal with Enigma Records and released the band’s eponymous debut album featuring hit songs such as “Inside Out” and “What Keeps Me Loving You.”"
    }), "\n", createVNode(_components.p, {
      children: "AON (All or Nothing)\nDrawing inspiration from the legends of classic rock while infusing a modern edge, AON’s music is a dynamic fusion of anthemic choruses, blistering guitar solos, and rhythms that resonate with the heartbeat of rebellion. Their sound is a testament to the belief that rock isn’t just a genre; it’s a way of life"
    }), "\n", createVNode(_components.p, {
      children: "…"
    }), "\n", createVNode(_components.p, {
      children: "In addition to hosting events, the Songbirds Foundation runs a variety of music focused initiatives for kids in Chattanooga. Helping to address a decline in public school music funding, supporting Cognitive Behavioral Music Therapy initiatives. They also bring student groups in to learn about the technical side of music with a focus on the STEAM behind components like guitars, pedals, and amps. In total they’ve donated over 2,500 guitars and have done more than 250,000 hours of free lessons."
    }), "\n", createVNode(_components.p, {
      children: ["Last we want to mention you can visit ", createVNode("a", {
        href: "https://songbirdsfoundation.org/museum/",
        target: "_blank",
        children: "Songbirds Guitar Museum"
      }), " the for free! Make sure to check out their webite for hours of operation as they also host private events (which you can book on their site as well)."]
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

const url = "src/pages-events/songbirds-museum/2024/george-lynch-of-dokken.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/george-lynch-of-dokken.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/george-lynch-of-dokken.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
