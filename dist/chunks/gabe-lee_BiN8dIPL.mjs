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
  "title": "Gabe Lee",
  "venue": "Songbirds Foundation",
  "address": "206 West Main Street, Chattanooga, TN, 37408",
  "iconPath": "/images/icons-new/music.png",
  "pubDate": "2024-08-03",
  "eventLink": "https://songbirdsfoundation.org/events/gabe-lee",
  "tags": ["music", "songbirds"],
  "entranceCost": "$19 - 25",
  "ticketsLink": "https://www.seetickets.us/event/gabe-lee/603315",
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
      children: "Doors at 6:00 PM\nShow at 7:00 PM\nSeated Show"
    }), "\n", createVNode(_components.p, {
      children: "With support from Sophie Gault!"
    }), "\n", createVNode(_components.p, {
      children: "Equal parts classic songwriter and modern-day storyteller, Gabe Lee has built his own bridge between country, folk and rock. Lee has been collecting stories for years, both on stage and off. “I used to bartend,” says the Nashville-based songwriter, “which means I was also a cheap therapist for whomever happened to be sitting on the barstool. Whether they were there to celebrate or drink away their problems, I heard about whatever they were going through. It was my job to have that face-to-face interaction—that connection. Being a full-time musician isn’t much different.”"
    }), "\n", createVNode(_components.p, {
      children: "With critically-acclaimed albums like 2019’s farmland, 2020’s Honky-Tonk Hell, and 2022’s The Hometown Kid, Lee created that connection by delivering his own stories to an ever-growing audience. His fourth record, Drink the River, takes a different approach. This time, Lee isn’t offering listeners a peek into his internal world; he’s holding up a mirror to reflect their own."
    }), "\n", createVNode(_components.p, {
      children: "Storytelling has been an anchor of Lee’s music since the very beginning. Raised by Taiwanese parents in Nashville, TN, he left home during his teenage years and headed to Indiana, where he obtained college degrees in literature and journalism. Lee launched his career as a genre-bending musician after returning to Tennessee, quickly progressing from dive bar gigs to high-profile opening slots (including shows with Jason Isbell, Los Lobos, Molly Tuttle, and other artists who, like him, blurred the lines between roots-rock, country, and other forms of American folk music) to his own headlining shows. Throughout it all, he drew upon the narrative skills he’d sharpened as a student. If albums like Honky-Tonk Hell and The Hometown Kid often unfolded like autobiographical entries from his road journal, then Drink the River shows an even broader range of his storytelling abilities. Lee isn’t just writing songs about himself; he’s writing songs about all of us. And maybe, in doing so, he can bring us a little closer together"
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

const url = "src/pages-events/songbirds-museum/2024/gabe-lee.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/gabe-lee.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/gabe-lee.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
