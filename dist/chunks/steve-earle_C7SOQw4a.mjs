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
  "title": "Steve Earle: Alone Again, Solo & Acoustic",
  "venue": "Songbirds Foundation",
  "address": "206 West Main Street, Chattanooga, TN, 37408",
  "iconPath": "/images/icons-new/music.png",
  "pubDate": "2024-06-04",
  "eventLink": "https://songbirdsfoundation.org/events/steve-earle-2024",
  "tags": ["music", "songbirds", "fundraiser"],
  "entranceCost": "$300 - 375",
  "ticketsLink": "https://www.seetickets.us/event/steve-earle-alone-again-solo-and-acoustic/599567",
  "time": "5:30pm - 10pm",
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
      children: "Join Us for an Unforgettable Fundraiser: Dinner and a Show with Steve Earle at Songbirds in Chattanooga!"
    }), "\n", createVNode(_components.p, {
      children: "Get ready to immerse yourself in an evening of soul-stirring music, mouthwatering BBQ delights, and unforgettable memories at Songbirds in Chattanooga! We’re thrilled to present an exclusive fundraising dinner-and-a-show event featuring the legendary Steve Earle, renowned for his captivating performances and timeless hits."
    }), "\n", createVNode(_components.p, {
      children: "Date: Tuesday, June 4th\nDinner Ticket Door Time: 5:30 PM\nDinner: 6:30 PM\nShow ONLY Ticket Door Time: 7:30 PM\nShow: 8:00 PM\nSeated (dinner tickets seated at tables, show-only tickets seated at back row stools)"
    }), "\n", createVNode(_components.p, {
      children: "Music:\nExperience the magic of live music as Steve Earle takes the stage, captivating audiences with his iconic blend of Americana, folk, and rock sounds. From heartfelt ballads to foot-stomping anthems, Earle’s music transcends genres and speaks to the core of the human experience."
    }), "\n", createVNode(_components.p, {
      children: "Food:\nBut that’s not all – indulge your taste buds with a delectable BBQ feast crafted by the new and highly acclaimed Chattanooga restaurant, Elsie’s Daughter. Take a seat at your table and dig-in, family style, as you enjoy a curated menu of mouthwatering dishes that perfectly complement the evening’s entertainment. Wine is included! From smokey meats to savory sides and a decadent dessert, each bite is a culinary delight. Vegetarian entree available upon request. Menu below:"
    }), "\n", createVNode(_components.p, {
      children: "Smoked Beef Burnt Ends"
    }), "\n", createVNode(_components.p, {
      children: "12-hour Slow-Roasted Sirloin Flap"
    }), "\n", createVNode(_components.p, {
      children: "Very Southern Cornbread"
    }), "\n", createVNode(_components.p, {
      children: "Buttermilk, bacon drippings, yellow corn meal"
    }), "\n", createVNode(_components.p, {
      children: "Braised Butter Beans"
    }), "\n", createVNode(_components.p, {
      children: "Saucy boi’s. Baked in a house BBQ sauce"
    }), "\n", createVNode(_components.p, {
      children: "Sweet and Spicy Collard Greens"
    }), "\n", createVNode(_components.p, {
      children: "Cooked down in chicken stock, apple cider vinegar, chiles and honey"
    }), "\n", createVNode(_components.p, {
      children: "Shredded Cole Slaw"
    }), "\n", createVNode(_components.p, {
      children: "Just like KFC…"
    }), "\n", createVNode(_components.p, {
      children: "Bread and Butter Pickles"
    }), "\n", createVNode(_components.p, {
      children: "A nice little side of crisp, sweet pickles"
    }), "\n", createVNode(_components.p, {
      children: "House Hot Sauce"
    }), "\n", createVNode(_components.p, {
      children: "Because why not have a Zinger on the table!"
    }), "\n", createVNode(_components.p, {
      children: "Summertime Dessert"
    }), "\n", createVNode(_components.p, {
      children: "Ending the night on a sweet note"
    }), "\n", createVNode(_components.p, {
      children: "Whether you’re a die-hard fan of Steve Earle or simply seeking a night of exceptional music and food, this exclusive event promises to be a highlight of your year. Gather your friends, family, or that special someone for an evening filled with laughter, good eats, and unforgettable moments."
    }), "\n", createVNode(_components.p, {
      children: "Fundraiser:\nWe are so grateful to have Steve Earle back at Songbirds, performing yet another solo acoustic show to raise money for our GUITARS FOR KIDS program. This will be an intimate, once-in-a-lifetime performance paired with delicious locally catered cuisine. For every $100 raised, we’ll be able to buy a kid a guitar and provide them with 10 weeks of free lessons and music therapy. Your contribution allows us to share the joy of music with thousands of kids who would otherwise be without a music education.."
    }), "\n", createVNode(_components.p, {
      children: "Ticket Information:\nTickets for this exclusive event are very limited—only 75 tabled dinner seats. There will also be 25 show ONLY stools available that DO NOT INCLUDE DINNER."
    }), "\n", createVNode(_components.p, {
      children: "All dinner-and-a-show ticket holders will also receive a signed poster from Steve Earle."
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

const url = "src/pages-events/songbirds-museum/2024/steve-earle.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/steve-earle.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/songbirds-museum/2024/steve-earle.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
