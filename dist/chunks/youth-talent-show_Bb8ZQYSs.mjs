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
  "title": "Youth Music Talent Show",
  "venue": "Songbirds Foundation",
  "address": "206 West Main Street, Chattanooga, TN, 37408",
  "iconPath": "/images/icons-new/music.png",
  "pubDate": "2024-05-30",
  "eventLink": "https://songbirdsfoundation.org/events/youth-talent-show",
  "tags": ["music", "songbirds", "kid-friendly"],
  "entranceCost": "$10",
  "ticketsLink": "https://wl.seetickets.us/event/songbirds-youth-talent-show/593335?afflky=SongbirdsFoundation",
  "time": "6pm - 9pm",
  "layout": "../../../layouts/BlogPostLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Doors at 6:00 PM\nShow at 7:00 PM\nHalf Seated/Half Standing Show"
    }), "\n", createVNode(_components.p, {
      children: "Songbirds Foundation is hosting our annual kids talent show on Thursday, May 30 from 7:00–9:00 pm EST at the NEW Songbirds on Main Street."
    }), "\n", createVNode(_components.p, {
      children: "The talent show is open to all kids ages 12 to 18 years old across the greater Chattanooga area. All genres of music are welcome!"
    }), "\n", createVNode(_components.p, {
      children: ["To enter, students must submit a video of themselves or their band playing a song up to three minutes long to ", createVNode(_components.a, {
        href: "mailto:contests@songbirdsfoundation.org",
        children: "contests@songbirdsfoundation.org"
      }), ". Entries must be received no later than 5:00 pm EST, Friday April 19th."]
    }), "\n", createVNode(_components.p, {
      children: "The Songbirds Talent Show will once again be hosted by local musician and season four contestant on The Voice, Amber Carrington. The winning act will be awarded the chance to perform as an opening act for a musical artist at Songbirds, along with $250, and a free, four-hour recording session in a pro studio. The second place winner will get to shoot a professional music video and receive $100. The third place winner will receive $50."
    }), "\n", createVNode(_components.p, {
      children: "“Part of our mission here at Songbirds is to provide concrete resources to emerging talent, and our Songbirds Talent Show is just one way we are doing that,” said Reed Caldwell, Songbirds Executive Director. “We can’t wait to see the diverse range of music and talent these kids will bring to our stage!”"
    }), "\n", createVNode(_components.p, {
      children: "Video submissions will be judged on talent, song choice, stage presence, and overall appearance. Twelve winners will be notified by email on Monday April 22nd by 5:00 pm EST that they will be moving on to compete in the ultimate battle of the bands at the Songbirds Youth Talent Show. Contestants who move on to the Talent Show will be judged by a panel of musicians and other music industry professionals."
    }), "\n", createVNode(_components.p, {
      children: "Tickets to see this show on May 30th are on sale for $10. Students who compete in the May 30th event get two free guest passes."
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

const url = "src/pages-events/songbirds-museum/2024/youth-talent-show.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/youth-talent-show.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/youth-talent-show.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
