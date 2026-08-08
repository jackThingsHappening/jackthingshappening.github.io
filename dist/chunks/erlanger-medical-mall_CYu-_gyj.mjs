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
  "title": "Market at Erlanger Medical Mall",
  "venue": "Erlanger Medical Mall",
  "address": "975 East 3rd Street, Chattanooga, TN 37403",
  "eventDates": ["2024-07-24", "2024-07-31", "2024-08-07", "2024-08-14", "2024-08-21", "2024-08-28"],
  "time": "10:30am to 1:30pm",
  "eventLabel": "Week",
  "iconPath": "/images/icons-new/market.png",
  "eventDatesDetails": [{
    "date": "2024-07-24",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "Parking can be busy around midday. For the best spots, try arriving right at the start of the market or closer to the end."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Farm-to-Table Dinners: Host a farm-to-table dinner party featuring all fresh market ingredients."
    }
  }, {
    "date": "2024-07-31",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "If you get there early and don't see a vendor with a coffee offering, there is a Starbucks very close by to help get your morning (or afternoon) going."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Homemade Bread: Use freshly milled flour to bake homemade bread or other baked goods."
    }
  }, {
    "date": "2024-08-07",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "Parking can be busy around midday. For the best spots, try arriving right at the start of the market or closer to the end."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "DIY Candle Making: Use beeswax from the market to make natural, homemade candles."
    }
  }, {
    "date": "2024-08-14",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "Well-behaved pets are welcome at the market, making it a fun outing for the whole family, including furry friends."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Natural Home Cleaners: Create eco-friendly home cleaners using ingredients like vinegar, citrus, and essential oils."
    }
  }, {
    "date": "2024-08-21",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "Don't hesitate to ask vendors about their products. They can offer great advice, cooking tips, and sometimes even samples."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Decorative Gourds: Use decorative gourds and pumpkins from the market for seasonal home decor."
    }
  }, {
    "date": "2024-08-28",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "The market operates rain or shine, so check the weather forecast and dress appropriately. Bring an umbrella or wear sunscreen and a hat, depending on the forecast."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Cooking Classes: Use market ingredients to host cooking classes or demonstrations for friends and family."
    }
  }],
  "eventLink": "https://chattanoogamarket.com/calendar/",
  "tags": ["chattanooga-market", "free", "kid-friendly"],
  "entranceCost": "Free",
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
      children: "Join the market vendors at Erlanger Medical Mall every Wednesday from 10:30 am to 1:30 pm for a mini Chattanooga Market! Located in Lobby A, discover fresh produce, local art, and live music."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Browse through farm-fresh fruits and veggies and admire handmade jewelry and artwork by local talents. Enjoy live music while you shop. Whether you’re a market regular or a first-timer, there’s something for everyone."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Support local farmers and artists while enjoying a fun outing with friends and family. Don’t forget to mark your calendar – it’s an event you won’t want to miss!"
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

const url = "src/pages-events/chattanooga-market/2025/erlanger-medical-mall.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chattanooga-market/2025/erlanger-medical-mall.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chattanooga-market/2025/erlanger-medical-mall.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
