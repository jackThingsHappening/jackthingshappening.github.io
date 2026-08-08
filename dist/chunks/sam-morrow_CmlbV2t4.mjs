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
  "pubDate": "2024-08-08",
  "eventLink": "https://songbirdsfoundation.org/events/sam-morrow",
  "tags": ["music", "songbirds"],
  "entranceCost": "$19 - 25",
  "ticketsLink": "https://www.seetickets.us/event/sam-morrow/597339",
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
      children: "Doors at 6:00 PM\nShow at 7:00 PM\nStanding Show"
    }), "\n", createVNode(_components.p, {
      children: "Sam Morrow, On The Ride Here"
    }), "\n", createVNode(_components.p, {
      children: "Five albums into an acclaimed career, Sam Morrow has carved out a sound that exists somewhere outside of genre and geography. It’s his own version of modern-day American roots music: a mix of roadhouse rock & roll, bluesy R&B, and country-fried funky-tonk, driven forward by groove, grease, and guitars."
    }), "\n", createVNode(_components.p, {
      children: "It’s also a sound that owes as much to the road — where Morrow spent most of the past decade on tour, supporting albums like Concrete & Mud and Gettin’ By On Gettin’ Down — as the various places he’s called home. This is music for the fast lane. Music for empty highways. Music for people who, like Morrow, always seem to find themselves in transit."
    }), "\n", createVNode(_components.p, {
      children: "“I feel like I’m searching for something,” he says. “I’ve been on some kind of journey. Maybe I don’t know what I’m looking for, exactly, but I’m keeping my eyes open.”"
    }), "\n", createVNode(_components.p, {
      children: "On The Ride Here marks the latest leg of that journey. Morrow takes us along for the ride, singing in a laidback Texas drawl about highway haunts (“Thunderbird Motel”), peyote trips in the Mojave Desert (“Searching For Paradise”), and the glamor and grind of the open road (“Hired Gun”). On The Ride Here offers more than roadside ephemera and travelogue tales, though. Morrow isn’t just focused on the drive these days; he’s interested in the destination, too, and a number of these songs deal with the hard lessons and new perspectives that come with rest, reflection, and time spent at home."
    }), "\n", createVNode(_components.p, {
      children: "Morrow’s first home was in Houston, Texas, where he grew up developing not only an appreciation for punk, hip-hop, and ZZ Top, but also an appetite for the vices that would land him in rehab while still a teenager. He eventually found sobriety in Los Angeles and chose to stay there, trading his Texas roots for the California coast. Living far away from his birthplace gave Morrow a new appreciation for the country music he’d once ignored as a Texan. He began filtering those country sounds into his own music, mashing them together with the southern boogie of Little Feat, the electric blues of Freddie King, the Tex-Mex of Los Lobos, and the desert rock of Queens Of The Stone Age. Separately, those influences might have sounded like strange bedfellows. Together, though, they formed the bedrock of Sam Morrow’s rootsy rock & roll."
    }), "\n", createVNode(_components.p, {
      children: "Championed by outlets like NPR and Rolling Stone, Morrow’s first four albums turned him into one of the West Coast’s biggest Americana exports. The appeal wasn’t just the swaggering, swampy music itself; it was also the sharp storytelling and unfiltered insights of a songwriter who wasn’t afraid to shine a light on the skeletons in his closet. Balancing honesty with self-deprecating humor, Morrow became a working-class hero for those struggling to follow the straight and narrow. On The Ride Here finds him in that same position. He measures the distance between the sins of his youth and the challenges of his present with “Medicine Man,” a stomping, riff-driven rocker with a slide guitar solo worthy of Joe Walsh. “Searching For Paradise” finds him in Hunter S. Thompson mode, recounting a hallucinogenic trip in the California desert over a backdrop of greasy, East L.A. country-funk. The loose, laidback “On My Way” finds him asking a lover for patience, promising her that his best days are ahead. A similar message anchors “Straight and Narrow,” which trades the fiery fretwork of the album’s louder moments — played by Morrow and guest guitarist Eli Wulfmeier— for the cooling calm of Hammond B3 organ. “I was tripped by sin; I walked the line and I fell halfway in,” Morrow sings before laying out his credentials as a changed man, promising that “I’m a new man with a new suit.”"
    }), "\n", createVNode(_components.p, {
      children: "On The Ride Here was produced in Southern California by longtime collaborator Eric Corne, with an all-star roster of West Coast musicians — including bassist Ted Russell Kamp, keyboardist Sasha Smith, and drummers Matt Tecu and Butch Norton — adding primal punch and roughhewn polish to the 11 songs. Morrow rewrote several tunes after the initial tracking sessions were complete, looking to deliver the tightest, tautest album of his career. The result is a forward-thinking record that encapsulates his sound better than any album before it, serving as the final piece of a musical trilogy that began with the country-inspired Concrete & Mud and the rock-influenced Gettin’ By On Gettin’ Down."
    }), "\n", createVNode(_components.p, {
      children: "“When I was first getting sober, somebody told me that I need to wake up early in the morning and tell myself I don’t know shit, because that’s the only way I’m gonna learn something new that day,” Morrow says. “I think it’s a simplified way of just taking your ego out of the situation. I still do that to this day. I try to remain mindful and present. I try to learn something I didn’t know before. And with this album, I think I’ve learned what my sound is. I’ve learned to truly sound like myself.”"
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

const url = "src/pages-events/songbirds-museum/2024/sam-morrow.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/sam-morrow.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/sam-morrow.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
