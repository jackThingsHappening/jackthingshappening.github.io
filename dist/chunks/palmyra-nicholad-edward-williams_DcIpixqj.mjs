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
  "title": "Palmyra with Nicholas Edward Williams",
  "venue": "Songbirds Foundation",
  "address": "206 West Main Street, Chattanooga, TN, 37408",
  "iconPath": "/images/icons-new/music.png",
  "pubDate": "2024-06-14",
  "eventLink": "https://songbirdsfoundation.org/events/palmyra",
  "tags": ["music", "songbirds"],
  "entranceCost": "$24 - $27",
  "ticketsLink": "https://www.seetickets.us/event/palmyra-with-nicholas-edward-williams/596769",
  "time": "6pm - 9pm",
  "layout": "../../../layouts/BlogPostLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    hr: "hr",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Doors at 6:00 PM\nShow at 7:00 PM\nSeated Show"
    }), "\n", createVNode(_components.p, {
      children: "Birthed in Virginia’s Shenandoah Valley, Palmyra explores the fusion of traditional folk string instruments, lush harmony, and earnest songwriting. The trio, now based in Richmond, captures the collective spirit of three Virginia natives: Teddy Chipouras, Mānoa Bell, and Sasha Landon. Often described as a distant cousin to The Avett Brothers and The Wood Brothers, Palmyra nods toward Appalachian and Midwestern Americana, with intricate arrangements that create the illusion of a full, larger-than-three ensemble."
    }), "\n", createVNode(_components.p, {
      children: "The breakout folk trio has worked diligently to cement themselves as an unmistakable force in the Americana music landscape at large. Their forward momentum is propelled by their craftsmanship and dedication to an intimate performance experience; at the heart of the Palmyra is the evident love and regard that the three musicians share for each other and their craft."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "Host of the roots music history podcast American Songcatcher, Nicholas Edward Williams is a multi-instrumentalist and storyteller who is dedicated to “playing it forward” by preserving the songs, stories, artists and styles that have shaped our country: Ragtime, Piedmont Blues, Early Country, Traditional Folk and Old-Time. Williams has spent the last 15 years touring three continents, performing all around the US, as well as the UK, Western Europe and Australia, blending the roots music spectrum in his own style. Under his previous project, Whetherman, Williams independently released eight revered records from 2007-2018. Under his own name, his critically acclaimed sophomore release from late 2021, Folk Songs For Old Times’ Sake has been heralded by well-regarded figures of the roots community such as David Holt, Oliver Wood, Dom Flemons, and JP Harris."
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

const url = "src/pages-events/songbirds-museum/2024/palmyra-nicholad-edward-williams.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/palmyra-nicholad-edward-williams.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/palmyra-nicholad-edward-williams.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
