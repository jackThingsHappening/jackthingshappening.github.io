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
  "title": "Chattanooga Market - River Market",
  "venue": "Tennessee Aquarium Plaza",
  "address": "1 Broad Street, Chattanooga, TN 37402",
  "iconPath": "/images/icons-new/market.png",
  "eventDates": ["2024-07-27", "2024-08-03", "2024-08-10", "2024-08-17", "2024-08-24", "2024-08-31"],
  "eventDatesDetails": [{
    "date": "2024-08-17",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "Parking can be busy around midday. For the best spots, try arriving right at the start of the market or closer to the end."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Homemade Pasta: Make fresh pasta from scratch using local eggs and flour."
    }
  }, {
    "date": "2024-08-10",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "If you get there early and don't see a vendor with a coffee offering, there is a Starbucks very close by to help get your morning (or afternoon) going."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Stuffed Vegetables: Prepare stuffed peppers or squash using fresh vegetables and grains."
    }
  }, {
    "date": "2024-08-31",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "Parking can be busy around midday. For the best spots, try arriving right at the start of the market or closer to the end."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Artisan Bread: Bake artisan bread using freshly milled flour and local ingredients."
    }
  }, {
    "date": "2024-08-24",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "Well-behaved pets are welcome at the market, making it a fun outing for the whole family, including furry friends."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Natural Beauty Products: Create natural beauty products like face masks and scrubs using market ingredients."
    }
  }, {
    "date": "2024-07-27",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "Think about your weekly meals before you go. This way, you can plan your purchases and ensure your trip to the market is a success."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "Herbal Tea Blends: Dry fresh herbs to create your own herbal tea blends."
    }
  }, {
    "date": "2024-07-20",
    "bottomDetails": {
      "title": "Visitor Tip",
      "text": "Don't hesitate to ask vendors about their products. They can offer great advice, cooking tips, and sometimes even samples."
    },
    "topDetails": {
      "title": "Market Fresh Idea",
      "text": "DIY Potpourri: Dry flowers, citrus peels, and herbs to create fragrant potpourri for your home."
    }
  }],
  "time": "10:00am - 5:00pm",
  "eventLabel": "Week",
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
      children: "Join the market vendors at the Tennessee Aquarium Plaza every Saturday from 10:30 am to 1:30 pm for a mini Chattanooga Market! Discover fresh produce, local art, and live music."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Browse through farm-fresh fruits and veggies and admire handmade jewelry and artwork by local talents. Enjoy live music while you shop. Whether you’re a market regular or a first-timer, there’s something for everyone."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Support local farmers, entrepreneurs, and artists while enjoying a fun outing with friends and family. Don’t forget to mark your calendar – it’s an event you won’t want to miss!"
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

const url = "src/pages-events/chattanooga-market/2025/river-market.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chattanooga-market/2025/river-market.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chattanooga-market/2025/river-market.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
