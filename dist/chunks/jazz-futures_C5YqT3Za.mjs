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
  "title": "Jazz Futures",
  "venue": "Songbirds Foundation",
  "address": "206 West Main Street, Chattanooga, TN, 37408",
  "iconPath": "/images/icons-new/music.png",
  "pubDate": "2024-05-23",
  "eventLink": "https://songbirdsfoundation.org/events/jazz-futures",
  "tags": ["free", "music", "songbirds"],
  "entranceCost": "Free (donations accepted)",
  "time": "7pm - 10pm",
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
      children: "Doors at 7:00 PM\nShow at 8:00 PM\nHalf Seated/Half Standing Show\nFREE Admission — Donation-based"
    }), "\n", createVNode(_components.p, {
      children: "Featuring:  Adam Stone (Guitar), Mike Salter (Drums), Given Graber (Bass)\nHosted by Dakari Kelly (Bass)"
    }), "\n", createVNode(_components.p, {
      children: "Step into the rhythm of jazz at Jazz Futures, an innovative event blending performance with immersive education. Jazz Futures invites jazz enthusiasts to the listening room and aspiring musicians to the stage to collaborate with seasoned professionals, shaping a local network to keep jazz alive. All ages and all skill levels welcome!"
    }), "\n", createVNode(_components.p, {
      children: "About The Artists:"
    }), "\n", createVNode(_components.p, {
      children: "The House band is a trio of local Chattanooga jazz players comprised of Adam Stone on guitar, Given Graber on bass, and Mike Salter on drums. These three have been playing together for a few years after meeting at various jazz jams, and playing in combos consistently."
    }), "\n", createVNode(_components.p, {
      children: "Dakari Kelly is a hometown hero of sorts. Being a classically trained bassist, over the last decade he has worked with names like Rick Rushing, Deacon Blues, & Kofi Mawuko of “Ogya World Music band.” He also tours nationally with hip hop artist BbyMutha as her DJ ! During his off season recently he has founded a new series called “Jazz Futures”—a unique approach to reviving the local jazz scene here in Chattanooga."
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

const url = "src/pages-events/songbirds-museum/2024/jazz-futures.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/jazz-futures.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/jazz-futures.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
