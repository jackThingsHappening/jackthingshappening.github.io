import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from './astro/server_CzqnycT_.mjs';
import { $ as $$BlogPostLayout } from './BlogPostLayout_Bqj5Bb28.mjs';
import { $ as $$PageItemsFromFrontmatter } from './PageItemsFromFrontmatter_yF6ShBMT.mjs';
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
  "title": "An Interactive Guide to Chattanooga Coffee: 28 Shops",
  "published": true,
  "lastUpdated": "05/20/2026",
  "originalDate": "03/30/2026",
  "readTime": "16 minutes",
  "tags": [{
    "type": "guide",
    "tag": "coffee"
  }, {
    "type": "guide",
    "tag": "interactive"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "An interactive guide to Chattanooga area coffee shops: roasters, multi-location locals, suburban favorites, and where to work, brunch, or grab beans.",
  "iconPath": "../../../images/icons-new/coffee-cup.png",
  "geoCoverage": "Chattanooga, TN and close-in suburbs (North Georgia line to Ooltewah, Signal & Lookout Mountains)",
  "images": [{
    "src": "/images/chattanooga_guides/social/coffee/goodmans_coffee_st_elmo.png",
    "position": "center"
  }],
  "pageItems": [{
    "title": "Goodman Coffee Roasters — Warehouse Row",
    "description": "Downtown cafe inside Warehouse Row with espresso and manual brew options from their own roasting operation. Good pit stop before riverfront walks or the Hunter Museum. Parking validations may apply at the center, check current signage.",
    "order": 1,
    "tags": ["downtown", "independent", "roaster", "manual-brew", "work-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Goodman+Coffee+Roasters+Warehouse+Row+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.goodmancoffeeroasters.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Rembrandt's Coffee House",
    "description": "Bluff View cafe with its own roasting program, a serious pastry case, garden seating, and a full brunch menu. Steps from the Hunter Museum and the river bluff walks, worth building into a morning on that end of downtown.",
    "order": 2,
    "tags": ["downtown", "independent", "roaster", "full-kitchen", "pastries", "scenic"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Rembrandt's+Coffee+House+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Bluff View Art District",
      "link": "https://bluffviewartdistrictchattanooga.com/rembrandtscoffeehouse",
      "target": "_blank"
    }]
  }, {
    "title": "Sleepyhead Coffee",
    "description": "Broad Street multiroaster bar with pourovers and espresso, a vegan pastry focus, and plant retail on the floor. Locals come for the aesthetic as much as the coffee. Works well before a walk across the Walnut Street Bridge to the North Shore.",
    "order": 3,
    "tags": ["downtown", "independent", "multi-roaster", "veg-friendly", "plant-shop"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Sleepyhead+Coffee+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://sleepyhead.coffee/",
      "target": "_blank"
    }]
  }, {
    "title": "Cadence Coffee Company — East 7th Street",
    "description": "Downtown cafe near UTC with dependable espresso and a bright room that holds up for laptop sessions. Hours fluctuate around finals season, so confirm before making a special trip.",
    "order": 4,
    "tags": ["downtown", "independent", "study-spot", "work-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Cadence+Coffee+11+E+7th+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.cadencecoffeeco.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Milk & Honey",
    "description": "North Market breakfast and brunch institution with craft coffee, in house gelato, and Monen group service. More sit down meal than quick cortado stop, which is the whole point.",
    "order": 5,
    "tags": ["downtown", "regional-brand", "full-kitchen"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Milk+and+Honey+135+N+Market+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.milkandhoneychattanooga.com/",
      "target": "_blank"
    }]
  }, {
    "title": "City Cafe Diner — Downtown",
    "description": "24/7 diner on Broad with hot coffee, big menus, and late night reliability. Specialty coffee purists will want a roaster cafe during daylight hours. For off hours caffeine, this is the option.",
    "order": 6,
    "tags": ["downtown", "independent", "full-kitchen", "late-night", "quick-grab"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=City+Cafe+Diner+Broad+Street+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://citycafediner.com/downtown-chattanooga/cafe/",
      "target": "_blank"
    }]
  }, {
    "title": "Goodman Coffee Roasters — St. Elmo",
    "description": "Cafe attached to Goodman's roasting facility at the base of Lookout Mountain. Works well before or after Guild Hardy laps, Glen Falls, or a pass through St. Elmo sweets on Tennessee Ave.",
    "order": 7,
    "tags": ["st-elmo", "independent", "roaster", "manual-brew"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Goodman+Coffee+St+Elmo+Ave+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.goodmancoffeeroasters.com/",
      "target": "_blank"
    }, {
      "text": "Sweet treats nearby",
      "link": "/chattanooga/guides/confections",
      "target": "_self"
    }]
  }, {
    "title": "Mean Mug Coffeehouse — North Shore",
    "description": "North Shore flagship with full breakfast and lunch, in house baking, and Mean Mug's own roasting program. Walkable to Coolidge Park and Frazier Ave.",
    "order": 8,
    "tags": ["north-shore", "local-multi-location", "roaster", "full-kitchen"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Mean+Mug+Manufacturers+Rd+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://meanmugcoffee.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Stone Cup Cafe",
    "description": "North Shore cafe pouring exclusively Stone Cup Roasting Co. beans, freshness is the selling point. Upstairs lounge seating and a patio when the weather works. They use the space for events regularly, check the calendar.",
    "order": 9,
    "tags": ["north-shore", "independent", "roaster", "scenic", "work-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Stone+Cup+Cafe+Frazier+Ave+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://stonecupcafe.com/",
      "target": "_blank"
    }]
  }, {
    "title": "(be) Caffeinated — North Shore",
    "description": "Kent Street window and counter service from a Chattanooga born drive thru brand. Fast cappuccinos when you are already on the North Shore strip.",
    "order": 10,
    "tags": ["north-shore", "local-multi-location", "quick-grab", "drive-thru"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=be+caffeinated+14+W+Kent+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Locations",
      "link": "https://www.becaffcoffee.com/our-locations",
      "target": "_blank"
    }]
  }, {
    "title": "Mean Mug Coffeehouse — Southside",
    "description": "Southside location with the same scratch kitchen playbook as North Shore: espresso, biscuits, and hearty plates. Walking distance from the Chattanooga Choo Choo plaza and the rest of the Southside strip.",
    "order": 11,
    "tags": ["southside", "local-multi-location", "roaster", "full-kitchen", "work-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Mean+Mug+114+W+Main+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://meanmugcoffee.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Velo Coffee Roasters",
    "description": "Southside roastery cafe with bike shop energy and sustainability as a recurring talking point. Popular laptop stop with outdoor seating when the weather cooperates.",
    "order": 12,
    "tags": ["southside", "independent", "roaster", "work-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Velo+Coffee+509+E+Main+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.velocoffee.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Mad Priest Coffee Roasters — McCallie Ave",
    "description": "Specialty roaster in a new McCallie Ave space that opened October 2025 after nearly a decade on Broad Street. Same ambitious pourover and espresso program, bigger footprint. Check current hours before you go.",
    "order": 13,
    "tags": ["southside", "independent", "roaster", "manual-brew", "new"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Mad+Priest+Coffee+1200+McCallie+Ave+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.madpriestcoffee.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Niedlov's Bakery & Cafe",
    "description": "Artisan bread and pastry forward cafe on East Main with a serious espresso program. Lines form at peak brunch hours and the pastry case sells down early.",
    "order": 14,
    "tags": ["southside", "independent", "pastries", "full-kitchen"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Niedlov's+Bakery+Cafe+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://niedlovs.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Frothy Monkey — Chattanooga Choo Choo",
    "description": "Nashville born cafe in the Choo Choo complex running all day: in house roasting, baked goods, cocktails, and dinner service. Seating across multiple levels, easy for visitors anchoring a Southside weekend.",
    "order": 15,
    "tags": ["southside", "regional-brand", "roaster", "full-kitchen", "hotel-landmark"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Frothy+Monkey+1400+Market+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://frothymonkey.com/locations/southside-chattanooga-tn/",
      "target": "_blank"
    }, {
      "text": "Weekend hosting nearby",
      "link": "/chattanooga/guides/weekend-hosting-chattanooga-choo-choo-edition",
      "target": "_self"
    }]
  }, {
    "title": "The Exchange at Kinley",
    "description": "Hotel anchored brunch and coffee bar near the Southside entertainment cluster. Handy if you are hosting guests at the Kinley or meeting before a Choo Choo walk.",
    "order": 16,
    "tags": ["southside", "regional-brand", "full-kitchen", "hotel-landmark"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=The+Exchange+Kinley+Hotel+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Kinley Chattanooga",
      "link": "https://www.kinleychattanooga.com/",
      "target": "_blank"
    }]
  }, {
    "title": "The Camp House",
    "description": "Innovation District cafe running Goodman coffee, a manual brew bar, a full kitchen, and beer and wine into the evening. Covers the gap between a workday coffee stop and an after work drink.",
    "order": 17,
    "tags": ["downtown", "independent", "manual-brew", "full-kitchen", "wine-beer", "work-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=The+Camp+House+806+E+12th+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.thecamphouse.com/",
      "target": "_blank"
    }]
  }, {
    "title": "The Daily Ration",
    "description": "Normal Park brunch spot with patio seating, creative breakfast plates, and coffee that keeps the neighborhood coming back. Weekend waits run long, worth knowing before you go.",
    "order": 18,
    "tags": ["downtown", "independent", "full-kitchen", "work-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=The+Daily+Ration+1220+Dartmouth+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.thedailyrationchattanooga.com/",
      "target": "_blank"
    }]
  }, {
    "title": "(be) Caffeinated — Highland Park",
    "description": "Dual drive thru location on East 3rd for fast lattes heading downtown or toward the ridge. Same local brand playbook as the Kent and Red Bank locations.",
    "order": 19,
    "tags": ["downtown", "local-multi-location", "drive-thru", "quick-grab"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=be+caffeinated+1263+E+3rd+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Locations",
      "link": "https://www.becaffcoffee.com/our-locations",
      "target": "_blank"
    }]
  }, {
    "title": "(be) Caffeinated — Red Bank",
    "description": "The original dual window drive thru on Dayton Blvd, what locals mean when they say \"grab a Be.\" Faster than downtown, without the national chain playlist.",
    "order": 20,
    "tags": ["red-bank", "local-multi-location", "drive-thru", "quick-grab"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=be+caffeinated+3601+Dayton+Blvd+Red+Bank+TN",
      "target": "_blank"
    }, {
      "text": "Locations",
      "link": "https://www.becaffcoffee.com/our-locations",
      "target": "_blank"
    }]
  }, {
    "title": "Mayfly Coffee — Signal Mountain",
    "description": "Signal Mountain cafe in the Cadence family: tight menu, mountain neighborhood regulars, and pastry cases sized for a quick stop before hikes like Rainbow Lake.",
    "order": 21,
    "tags": ["signal-mountain", "local-multi-location", "roaster", "pastries"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Mayfly+Coffee+708+Mississippi+Ave+Signal+Mountain+TN",
      "target": "_blank"
    }, {
      "text": "Cadence cafes",
      "link": "https://www.cadencecoffeeco.com/our-cafes-0",
      "target": "_blank"
    }]
  }, {
    "title": "Protagonist Coffee at Pruett's Market",
    "description": "Not a full cafe. Worth knowing for Signal residents who want to pick up Chattanooga roasted beans while already shopping at Pruett's. Confirm retail hours before making a separate trip.",
    "order": 22,
    "tags": ["signal-mountain", "independent", "roaster", "quick-grab"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Pruett's+Market+Signal+Mountain+TN",
      "target": "_blank"
    }, {
      "text": "Protagonist Roasters",
      "link": "https://www.protagonistcoffeeroasters.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Canopy Coffee and Wine Bar",
    "description": "Lookout Mountain coffee shop that shifts to wine and beer later in the day. Good stop after the Incline, Reflection Riding, or a Cumberland Trail segment when you want to sit and not rush out.",
    "order": 23,
    "tags": ["lookout-mountain", "independent", "wine-beer", "scenic", "work-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Canopy+Coffee+and+Wine+Bar+Lookout+Mountain+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://canopylkt.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Grindhead Coffee",
    "description": "East Brainerd microroaster with Caribbean forward branding and a direct trade sourcing story. Suburban locals use it as a weekday ritual stop.",
    "order": 24,
    "tags": ["east", "independent", "roaster", "quick-grab"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Grindhead+Coffee+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.grindheadcoffeechattanooga.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Mean Mug Coffeehouse — Hamilton Place",
    "description": "East Hamilton Mean Mug outpost with the same biscuit and latte playbook as the other locations. Convenient stop after big box errands or before heading toward McCutcheon.",
    "order": 25,
    "tags": ["east", "local-multi-location", "roaster", "full-kitchen", "quick-grab"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Mean+Mug+Coffee+Hamilton+Place+Blvd+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://meanmugcoffee.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Wired Coffee Bar — Ooltewah",
    "description": "Lee Hwy shop with dedicated coworking space, multiple seating rooms, and a sweet drink menu families tend to photograph. Good Ooltewah option for a longer sit.",
    "order": 26,
    "tags": ["ooltewah", "independent", "work-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Wired+Coffee+Bar+9515+Lee+Hwy+Ooltewah+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.thewiredcoffeebar.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Morning Brew Co.",
    "description": "Ooltewah breakfast cafe with crepes, bagels, and espresso. More food forward than pure barista minimalism, which is exactly what the 423 east corridor wants on a Saturday morning.",
    "order": 27,
    "tags": ["ooltewah", "independent", "full-kitchen", "pastries", "new"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Morning+Brew+Co+Cambridge+Square+Ooltewah+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.morningbrewco.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Wayward Pastry Co.",
    "description": "St. Elmo bakery counter doing seasonal pastry work alongside coffee. The twice baked almond croissant is what locals talk about. Good seating for a spot this size. Tue–Sat only, closes at 2, plan accordingly.",
    "order": 28,
    "tags": ["st-elmo", "independent", "pastries", "new"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Wayward+Pastry+Co+4501+St+Elmo+Ave+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.waywardpastryco.com/",
      "target": "_blank"
    }]
  }],
  "itemTemplate": {
    "title": "",
    "order": 1,
    "description": "",
    "links": [{
      "text": "More Information",
      "link": ""
    }],
    "tags": []
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode("script", {
      type: "application/ld+json",
      "set:html": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Chattanooga Coffee Shop Guide",
        "description": "Interactive listings of coffee shops, roasters, and cafes in metro Chattanooga.",
        "numberOfItems": 28,
        "url": "https://thingshappening.com/chattanooga/guides/coffeeshops"
      })
    }), "\n", createVNode("div", {
      class: "max-w-6xl mx-auto px-3",
      children: [createVNode("div", {
        class: "pb-5 pt-2",
        children: ["This guide covers ", createVNode("strong", {
          children: "28"
        }), " coffee shops across Chattanooga proper and the surrounding suburbs. Filters let you sort by neighborhood and narrow to what you’re trying to do: work, brunch, grab and go, or buy some beans."]
      }), createVNode("div", {
        class: "pb-5",
        children: ["We leaned toward places that generally trend ", createVNode("strong", {
          children: "~4.0★ or higher"
        }), " on public review platforms when research began. Treat that as a hint, not a guarantee. Hours, menus, and retail programs change. Confirm before you head out."]
      }), createVNode("div", {
        class: "pb-5",
        children: ["Missing your favorite? ", createVNode("a", {
          href: "mailto:jack@thingshappening.com",
          children: "Send an email"
        }), " with the name and a note on why it belongs. Pair it with our writeup on the right ", createVNode("a", {
          href: "/chattanooga/guides/confections",
          children: "sweet treat"
        }), " to go with your coffee."]
      })]
    }), "\n", createVNode("div", {
      class: "mb-8 mt-5 w-full max-w-3xl",
      children: [createVNode("div", {
        class: "relative w-full",
        style: "padding-bottom: 75%;",
        children: createVNode("iframe", {
          src: "https://www.google.com/maps/d/u/0/embed?mid=1G38Cx5e3d39ZvAkSE2HKGFk5TqtX7aI&ehbc=2E312F",
          class: "absolute top-0 left-0 w-full h-full border-0 rounded-lg",
          loading: "async",
          title: "Chattanooga Outdoor Adventures Map"
        })
      }), createVNode("p", {
        class: "text-lg mt-2 italic",
        children: "Map View Of The Coffee Shop Locations Featured Below"
      })]
    }), "\n", createVNode("section", {
      id: "guide-filters",
      class: "text-xl pt-6 pb-2",
      children: [createVNode("div", {
        class: "max-w-6xl mx-auto px-3",
        children: createVNode("div", {
          class: "flex flex-col md:flex-row md:items-center mb-3 pb-3 gap-2 md:gap-6",
          children: [createVNode("h2", {
            class: "text-[2.5rem] mb-0",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Coffee program", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: ":"
              })
            })]
          }), createVNode("div", {
            class: "flex flex-wrap gap-3",
            children: [createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=roaster",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "roaster",
              children: "Roasts here"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=multi-roaster",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "multi-roaster",
              children: "Multi-roaster"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=manual-brew",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "manual-brew",
              children: "Manual brew bar"
            })]
          })]
        })
      }), createVNode("div", {
        class: "max-w-6xl mx-auto px-3",
        children: createVNode("div", {
          class: "flex flex-col md:flex-row md:items-center mb-3 pb-3 gap-2 md:gap-6",
          children: [createVNode("h2", {
            class: "text-[2.5rem] mb-0",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Ownership", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: ":"
              })
            })]
          }), createVNode("div", {
            class: "flex flex-wrap gap-3",
            children: [createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=independent",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "independent",
              children: "Independent"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=local-multi-location",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "local-multi-location",
              children: "Local multi-location"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=regional-brand",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "regional-brand",
              children: "Regional brand"
            })]
          })]
        })
      }), createVNode("div", {
        class: "max-w-6xl mx-auto px-3",
        children: createVNode("div", {
          class: "flex flex-col md:flex-row md:items-center mb-3 pb-3 gap-2 md:gap-6",
          children: [createVNode("h2", {
            class: "text-[2.5rem] mb-0",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Experience", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: ":"
              })
            })]
          }), createVNode("div", {
            class: "flex flex-wrap gap-3",
            children: [createVNode("div", {
              class: "relative",
              children: [createVNode("span", {
                class: "hidden md:block absolute -top-7 left-1/2 -translate-x-1/2 bg-logoLightGreen text-white text-xs px-2 py-1 rounded-full shadow-md whitespace-nowrap border border-gray-200",
                style: "font-size: 11px;",
                children: "Try Me ↓"
              }), createVNode("span", {
                class: "md:hidden absolute top-1/2 -translate-y-1/2 -right-16 bg-logoLightGreen text-white text-xs px-2 py-1 rounded-full shadow-md whitespace-nowrap border border-gray-200 z-10",
                style: "font-size: 11px;",
                children: "← Try Me"
              }), createVNode("a", {
                href: "/chattanooga/guides/coffeeshops?tags=new",
                class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
                style: "background-color: #1a4d2e;",
                "data-tag": "new",
                children: "New (2024–26)"
              })]
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=full-kitchen",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "full-kitchen",
              children: "Full kitchen"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=pastries",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "pastries",
              children: "Pastries"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=work-friendly",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "work-friendly",
              children: "Work friendly"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=drive-thru",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "drive-thru",
              children: "Drive thru"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=wine-beer",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "wine-beer",
              children: "Wine & beer"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=late-night",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "late-night",
              children: "Late night"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=scenic",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "scenic",
              children: "Scenic"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=hotel-landmark",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "hotel-landmark",
              children: "Hotel / landmark"
            })]
          })]
        })
      }), createVNode("div", {
        class: "max-w-6xl mx-auto px-3",
        children: createVNode("div", {
          class: "flex flex-col md:flex-row md:items-start gap-2 md:gap-6",
          children: [createVNode("h2", {
            class: "text-[2.5rem] mb-0",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Neighborhood", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: ":"
              })
            })]
          }), createVNode("div", {
            class: "flex flex-wrap gap-2 pt-2 md:pt-0",
            children: [createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=downtown",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "downtown",
              children: "Downtown"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=north-shore",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "north-shore",
              children: "North Shore"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=southside",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "southside",
              children: "Southside"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=st-elmo",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "st-elmo",
              children: "St. Elmo"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=red-bank",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "red-bank",
              children: "Red Bank"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=signal-mountain",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "signal-mountain",
              children: "Signal Mountain"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=lookout-mountain",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "lookout-mountain",
              children: "Lookout Mountain"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=east",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "east",
              children: "East"
            }), createVNode("a", {
              href: "/chattanooga/guides/coffeeshops?tags=ooltewah",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "ooltewah",
              children: "Ooltewah"
            })]
          })]
        })
      })]
    }), "\n", createVNode("div", {
      id: "place-descriptions-container",
      class: "max-w-6xl mx-auto px-3",
      children: [createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "downtown",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Downtown core & Bluff View", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "Warehouse Row, Broad Street, and the Bluff View Art District cluster museums, hotels, and riverfront walks. Coffee here skews toward roaster bars, hotel hospitality, and a few institutions that double as brunch destinations."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: [createVNode("a", {
            href: "/chattanooga/guides/outdoors?tags=kid-friendly",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Riverwalk & family outdoors"
          }), createVNode("a", {
            href: "/chattanooga/guides/confections",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Sweet treats guide"
          })]
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "north-shore",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["North Shore & Frazier Ave", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "River views, Coolidge Park, and the connector to downtown across the Walnut Street Bridge. Expect a mix of long running local roasters, river side patios, and quick caffeine windows for weekend crowds."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: createVNode("a", {
            href: "/chattanooga/guides/outdoors?tags=stringers-ridge",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Nearby: Stringers Ridge"
          })
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "southside",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Southside & Choo Choo", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "East Main and Market Street corridors pack roaster tasting rooms, bakeries with espresso programs, and landmark hotel cafes around the Chattanooga Choo Choo. Good base for anchoring a weekend in the Southside."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: createVNode("a", {
            href: "/chattanooga/guides/weekend-hosting-chattanooga-choo-choo-edition",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Weekend hosting: Choo Choo edition"
          })
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "st-elmo",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["St. Elmo & Lookout base", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "Historic neighborhood streets feed straight into Lookout Mountain hiking and the Incline. Roaster outposts here reward early starts before trailhead parking fills up."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: [createVNode("a", {
            href: "/chattanooga/guides/outdoors?tags=lookout-mtn",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Lookout Mountain outdoors"
          }), createVNode("a", {
            href: "/chattanooga/guides/confections#ice-cream",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Ice cream nearby"
          })]
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "red-bank",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Red Bank", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "Dayton Boulevard corridor, where dual window drive thru espresso became a Chattanooga ritual for locals heading to work or the ridge."
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "signal-mountain",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Signal Mountain", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "Plateau community with its own cafe culture. Pair a morning cortado with Rainbow Lake loops or Signal trail days."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: createVNode("a", {
            href: "/chattanooga/guides/outdoors?tags=signal-mtn",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Signal Mountain hikes"
          })
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "lookout-mountain",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Lookout Mountain, TN", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "Scenic Highway stops mix coffee with wine bar hours into the evening. Good after Incline rides, Rock City visits, or Cumberland Trail segments."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: createVNode("a", {
            href: "/chattanooga/guides/cloudland-canyon",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Cloudland Canyon guide"
          })
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "east",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["East side & suburbs", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "East Brainerd, Gunbarrel, and Hamilton Place: microroasters, plant forward drink labs, and quick stops between big box errands and ridge commutes."
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "ooltewah",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Ooltewah & Cambridge Square", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "Fast growing 423 corridor with suburban cafes that lean into study rooms, family drinks, and crepe and bagel mornings."
        })]
      })]
    }), "\n", createVNode("section", {
      class: "text-xl",
      children: createVNode("div", {
        children: createVNode($$PageItemsFromFrontmatter, {
          pageItems: frontmatter.pageItems,
          showClearFilters: true
        })
      })
    }), "\n", createVNode("div", {
      class: "pb-12 max-w-6xl mx-auto px-3",
      children: createVNode("div", {
        class: "pb-3",
        children: ["If this guide helped or missed the mark, ", createVNode("a", {
          href: "mailto:jack@thingshappening.com",
          children: "send a note"
        }), ". We will keep adding shops, refining tags, and syncing listings as Chattanooga’s coffee scene evolves."]
      })
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

const url = "/chattanooga/guides/coffeeshops";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/coffeeshops.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/coffeeshops.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
