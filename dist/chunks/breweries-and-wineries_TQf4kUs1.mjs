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
  "title": "An Interactive Guide to 20 Breweries & Wineries Near Chattanooga",
  "published": true,
  "lastUpdated": "05/23/2026",
  "originalDate": "05/23/2026",
  "readTime": "6 minutes",
  "tags": [{
    "type": "guide",
    "tag": "breweries"
  }, {
    "type": "guide",
    "tag": "interactive"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "An interactive guide to breweries, wineries, and cideries in and within an hour of Chattanooga: taprooms, wine trails, and day-trip spots in North Georgia.",
  "iconPath": "../../../images/icons-new/beer.png",
  "geoCoverage": "Chattanooga, TN and within ~1 hour (Guild TN, Ringgold GA, Dalton GA, Cleveland TN, Blue Ridge GA, Ellijay GA)",
  "images": [{
    "src": "/images/chattanooga_guides/social/breweries-wineries/fivewits.png",
    "position": "center"
  }],
  "pageItems": [{
    "title": "Chattanooga Brewing Company",
    "description": "One of the oldest craft breweries in the city, located downtown near the Market Street corridor. Year-round and seasonal taps rotate through a range of styles, with a taproom and outdoor space that draws both regulars and visitors. A solid first stop before a riverfront walk.",
    "order": 1,
    "tags": ["downtown", "brewery", "taproom", "outdoor-seating", "dog-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Chattanooga+Brewing+Company+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.chattabrew.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Oddstory Brewing",
    "description": "Craft brewery with a rotating tap list and a taproom focused on the beer itself. Popular with locals for the selection and laid-back environment. Check their socials for seasonal releases and taproom events.",
    "order": 2,
    "tags": ["southside", "brewery", "taproom", "food-menu", "live-music"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Oddstory+Brewing+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.oddstorybrewing.co/",
      "target": "_blank"
    }]
  }, {
    "title": "Chattanooga Whiskey Experimental Distillery",
    "description": "Downtown distillery and tasting experience from one of Chattanooga's most recognized spirits producers. Tours and flights walk you through the production process and the whiskey lineup. The experience center is worth a stop even if whiskey isn't your usual drink.",
    "order": 3,
    "tags": ["downtown", "distillery", "tours-tastings"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Chattanooga+Whiskey+Distillery+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://chattanoogawhiskey.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Hutton & Smith Brewing",
    "description": "Southside brewery with a well-regarded taproom and a loyal local following. The lineup covers a wide range of styles and they keep a consistent rotation going. Food options vary by the day so check before heading over hungry.",
    "order": 4,
    "tags": ["southside", "brewery", "taproom", "outdoor-seating"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Hutton+and+Smith+Brewing+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://huttonandsmithbrewing.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Wanderlinger Brewing",
    "description": "East Main brewery and taproom with an outdoor beer garden that draws a crowd on good weather days. Known for a mix of approachable and more adventurous styles. Live music pops up on weekends.",
    "order": 5,
    "tags": ["southside", "brewery", "taproom", "outdoor-seating", "live-music", "dog-friendly"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Wanderlinger+Brewing+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.wanderlinger.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Mercier Orchards Hard Cider",
    "description": "Blue Ridge institution that's been running since 1943 as an apple orchard. The hard cider operation is the grown-up extension of that history. Tasting room pours a lineup of dry and sweet ciders, and the orchard setting is worth the drive on its own. Kid-friendly grounds, pick-your-own available seasonally.",
    "order": 6,
    "tags": ["blue-ridge-ga", "cidery", "outdoor-seating", "kid-friendly", "scenic", "tours-tastings"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Mercier+Orchards+Blue+Ridge+GA",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.mercier-orchards.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Fannin Brewing Company",
    "description": "Local brewery in the Blue Ridge area with a taproom and a rotating selection of craft beers. Worth pairing with a Mercier Orchards visit on the same trip.",
    "order": 7,
    "tags": ["blue-ridge-ga", "brewery", "taproom"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Fannin+Brewing+Company+Blue+Ridge+GA",
      "target": "_blank"
    }]
  }, {
    "title": "Cartecay Vineyards",
    "description": "Winery in the Cartecay River Valley near Ellijay. The setting — rolling hills, vineyard rows, mountain backdrop — is the main draw. Tastings available, outdoor seating on the grounds. One of the more established stops on the North Georgia wine trail.",
    "order": 8,
    "tags": ["blue-ridge-ga", "winery", "outdoor-seating", "scenic", "tours-tastings"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Cartecay+Vineyards+Ellijay+GA",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.cartecayvineyards.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Engelheim Vineyards",
    "description": "Family-run vineyard and winery in the North Georgia mountains. Tastings, vineyard walks, and a quieter experience than some of the more visitor-heavy spots on the Blue Ridge corridor. Call ahead for hours and availability.",
    "order": 9,
    "tags": ["blue-ridge-ga", "winery", "outdoor-seating", "scenic", "tours-tastings"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Engelheim+Vineyards+North+Georgia",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.engelheim.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Dalton Brewing Company",
    "description": "Craft brewery in downtown Dalton, about 30 minutes south of Chattanooga. Opened 2018 and holds its own for a city that size. Worth adding to a Dalton errand day or a southward drive.",
    "order": 10,
    "tags": ["dalton-ga", "brewery", "taproom", "food-menu"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Dalton+Brewing+Company+Dalton+GA",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.daltonbrewing.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Mash & Hops",
    "description": "Cleveland's craft beer garden with 24 taps rotating through a broad selection of styles. Downtown Cleveland location makes it an easy stop heading north on 75. Outdoor seating and a relaxed setup that fits an afternoon as well as an evening.",
    "order": 11,
    "tags": ["cleveland-tn", "brewery", "taproom", "outdoor-seating"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Mash+and+Hops+168+1st+St+Cleveland+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.mashandhops.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Morris Vineyard",
    "description": "Family-run winery in Charleston, about 25 minutes north of Chattanooga — closer than most of the day-trip spots in this guide. Handcrafted wines, free tastings, and a quiet rural setting that earns a separate trip. Open Tuesday through Sunday.",
    "order": 12,
    "tags": ["cleveland-tn", "winery", "tours-tastings", "scenic"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Morris+Vineyard+346+Union+Grove+Rd+NE+Charleston+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.morrisvineyards.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Lookout Winery & Venue",
    "description": "Winery on US-41 in Guild, just west of Raccoon Mountain with views of the Tennessee River. Sixteen wines on pour, wood-fired pizza, and an outdoor setting that makes it easy to stay longer than planned. Natural pairing after a Raccoon Mountain bike or hike day.",
    "order": 13,
    "tags": ["guild-tn", "winery", "food-menu", "outdoor-seating", "scenic", "tours-tastings"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Lookout+Winery+11848+US-41+Guild+TN",
      "target": "_blank"
    }]
  }, {
    "title": "The Georgia Winery",
    "description": "Muscadine winery six miles south of Chattanooga at I-75 Exit 350 in Ringgold — the closest winery to the city in this guide. Over 20 varieties, complimentary tastings, and Saturday tours at 1:30 and 3:30 pm. Easy add-on to any southbound day.",
    "order": 14,
    "tags": ["ringgold-ga", "winery", "tours-tastings"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=The+Georgia+Winery+Ringgold+GA",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.georgiawines.com/",
      "target": "_blank"
    }]
  }, {
    "title": "The Tap House — Empyreal Brewing",
    "description": "St. Elmo brewpub with house beers from Empyreal Brewing plus 30+ rotating guest taps covering craft beer, cider, and non-alcoholic options. Full food menu and a neighborhood location that pairs well with a Lookout Mountain or Incline afternoon.",
    "order": 15,
    "tags": ["st-elmo", "brewery", "food-menu", "taproom"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=The+Tap+House+3800+St+Elmo+Ave+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://taphousechatt.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Five Wits Brewing",
    "description": "Southside brewery on Long Street with a taproom pouring their own beers. A neighborhood staple in the Choo Choo corridor that keeps a low profile relative to some of the louder spots on the strip.",
    "order": 16,
    "tags": ["southside", "brewery", "taproom"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Five+Wits+Brewing+1501+Long+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.fivewitsbrewing.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Mad Knight Brewing",
    "description": "St. Elmo brewery on Tennessee Ave brewing their own beers with a taproom setup. Shares the neighborhood with The Tap House, so both are worth hitting on the same afternoon if you're already down at the base of Lookout Mountain.",
    "order": 17,
    "tags": ["st-elmo", "brewery", "taproom"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Mad+Knight+Brewing+4015+Tennessee+Ave+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.madknightbrewing.com/",
      "target": "_blank"
    }]
  }, {
    "title": "TailGate Brewery",
    "description": "Nashville-based regional brewery with a 7-barrel brewhouse on-site at the old Terminal Brewhouse space on Market Street. Full food menu and a large footprint that handles groups well. Not an independent, but they're brewing here.",
    "order": 18,
    "tags": ["southside", "brewery", "food-menu", "outdoor-seating"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=TailGate+Brewery+1464+Market+St+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.tailgatebeer.com/chattanooga",
      "target": "_blank"
    }]
  }, {
    "title": "Brewhaus",
    "description": "North Shore craft beer bar on Frazier Ave with a rotating tap selection and a spot to land after Coolidge Park or the Walnut Street Bridge. They don't brew — it's a well-run multi-tap bar — but the selection and location earn it a place on the list.",
    "order": 19,
    "tags": ["north-shore", "taproom", "outdoor-seating"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Brewhaus+224+Frazier+Ave+Chattanooga+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://www.brewhausbar.com/",
      "target": "_blank"
    }]
  }, {
    "title": "Top of the Rock",
    "description": "Brewpub at Jasper Highlands, about 35 minutes northwest of Chattanooga on the plateau above the Tennessee River Gorge. House-brewed beers and a full restaurant with the kind of views that make the drive worth it on its own. More of a destination than a quick stop.",
    "order": 20,
    "tags": ["jasper-tn", "brewery", "food-menu", "scenic"],
    "links": [{
      "text": "Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=Top+of+the+Rock+1584+Jasper+Highlands+Blvd+Jasper+TN",
      "target": "_blank"
    }, {
      "text": "Website",
      "link": "https://topoftherockbrewery.com/",
      "target": "_blank"
    }]
  }],
  "itemTemplate": {
    "title": "",
    "order": 21,
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
        "name": "Breweries & Wineries Near Chattanooga Guide",
        "description": "Interactive listings of breweries, wineries, cideries, and distilleries in Chattanooga and within an hour's drive.",
        "numberOfItems": 20,
        "url": "https://thingshappening.com/chattanooga/guides/breweries-and-wineries"
      })
    }), "\n", createVNode("div", {
      class: "max-w-6xl mx-auto px-3",
      children: [createVNode("div", {
        class: "pb-5 pt-2",
        children: ["This guide covers ", createVNode("strong", {
          children: "20"
        }), " breweries, wineries, cideries, and distilleries in Chattanooga proper and within about an hour’s drive — including the North Georgia mountain wine corridor around Blue Ridge and Ellijay."]
      }), createVNode("div", {
        class: "pb-5",
        children: "Chattanooga’s brewing scene has grown considerably over the last decade and now holds its own for a mid-size city. The North Georgia day-trip angle is a different kind of outing: the Cartecay River valley has a genuine wine trail worth building an afternoon around."
      }), createVNode("div", {
        class: "pb-5",
        children: ["Missing a spot? ", createVNode("a", {
          href: "mailto:jack@thingshappening.com",
          children: "Send an email"
        }), " with the name and a note on why it belongs."]
      })]
    }), "\n", createVNode("div", {
      class: "mb-8 mt-5 w-full max-w-3xl",
      children: [createVNode("div", {
        class: "relative w-full",
        style: "padding-bottom: 75%;",
        children: createVNode("iframe", {
          src: "https://www.google.com/maps/d/u/0/embed?mid=1NbygCKtNzBD4X00FvpLNRUpnJW9mSNE&ehbc=2E312F",
          class: "absolute top-0 left-0 w-full h-full border-0 rounded-lg",
          loading: "async",
          title: "Breweries and Wineries Near Chattanooga Map"
        })
      }), createVNode("p", {
        class: "text-lg mt-2 italic",
        children: "Map View of the Locations Featured Below"
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
            children: ["Type", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: ":"
              })
            })]
          }), createVNode("div", {
            class: "flex flex-wrap gap-3",
            children: [createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=brewery",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "brewery",
              children: "Brewery"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=winery",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "winery",
              children: "Winery"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=cidery",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "cidery",
              children: "Cidery"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=distillery",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "distillery",
              children: "Distillery"
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
                href: "/chattanooga/guides/breweries-and-wineries?tags=outdoor-seating",
                class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
                style: "background-color: #1a4d2e;",
                "data-tag": "outdoor-seating",
                children: "Outdoor seating"
              })]
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=food-menu",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "food-menu",
              children: "Food menu"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=taproom",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "taproom",
              children: "Taproom only"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=live-music",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "live-music",
              children: "Live music"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=dog-friendly",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "dog-friendly",
              children: "Dog friendly"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=tours-tastings",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "tours-tastings",
              children: "Tours & tastings"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=scenic",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "scenic",
              children: "Scenic"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=kid-friendly",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "kid-friendly",
              children: "Kid friendly"
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
            children: ["Location", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: ":"
              })
            })]
          }), createVNode("div", {
            class: "flex flex-wrap gap-2 pt-2 md:pt-0",
            children: [createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=downtown",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "downtown",
              children: "Downtown"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=southside",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "southside",
              children: "Southside"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=north-shore",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "north-shore",
              children: "North Shore"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=blue-ridge-ga",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "blue-ridge-ga",
              children: "Blue Ridge GA"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=dalton-ga",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "dalton-ga",
              children: "Dalton GA"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=cleveland-tn",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "cleveland-tn",
              children: "Cleveland TN"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=st-elmo",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "st-elmo",
              children: "St. Elmo"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=guild-tn",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "guild-tn",
              children: "Guild TN"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=jasper-tn",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "jasper-tn",
              children: "Jasper TN"
            }), createVNode("a", {
              href: "/chattanooga/guides/breweries-and-wineries?tags=ringgold-ga",
              class: "clickable-filter-tag px-5 py-2 text-white rounded-full text-base cursor-pointer transition-colors font-normal no-underline",
              style: "background-color: #1a4d2e;",
              "data-tag": "ringgold-ga",
              children: "Ringgold GA"
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
          children: ["Downtown Chattanooga", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "Market Street, Chestnut Street, and the Innovation District cluster most of Chattanooga’s brewing history. This is where the scene started and where the most established taprooms and brewpubs are. Walkable to the riverfront and most Southside bars."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: createVNode("a", {
            href: "/chattanooga/guides/coffeeshops?tags=downtown",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Downtown coffee"
          })
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
          children: "Brewhaus sits on Frazier Ave a short walk from Coolidge Park and the Walnut Street Bridge. It’s a bar rather than a brewery, but the tap selection and location make it the obvious North Shore stop for a post-walk pint."
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "southside",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Southside & East Main", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "East Main and the Southside corridor hold some of the city’s most active taprooms, with outdoor beer gardens and a live music presence on weekends. Easy to string together with dinner on the same stretch."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: createVNode("a", {
            href: "/chattanooga/guides/live-music",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Live music guide"
          })
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "blue-ridge-ga",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Blue Ridge & Ellijay, GA", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "About 55 minutes south of Chattanooga, the Cartecay River valley runs through some of Georgia’s best wine country. Mercier Orchards anchors the cider side of the trip; Cartecay and Engelheim vineyards cover the wine trail. Blue Ridge’s downtown strip has its own brewery and enough restaurants to make a full day of it. Go early on weekends — the town fills up fast in fall foliage season."
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "cleveland-tn",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Cleveland & Charleston, TN", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "About 25–30 minutes north of Chattanooga on 75. Morris Vineyard in Charleston is the closest winery to the city in this guide. Mash & Hops in downtown Cleveland covers the craft beer side. Pair the two for a low-key Tennessee day trip that doesn’t require crossing into Georgia."
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "st-elmo",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["St. Elmo", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "Historic neighborhood at the base of Lookout Mountain. The Tap House fits naturally into a St. Elmo afternoon — Incline Railway, a walk down Tennessee Ave, then a pint before heading back up the ridge."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: [createVNode("a", {
            href: "/chattanooga/guides/outdoors?tags=lookout-mtn",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Lookout Mountain outdoors"
          }), createVNode("a", {
            href: "/chattanooga/guides/coffeeshops?tags=st-elmo",
            class: "page-item-link text-logoDarkGreen underline",
            children: "St. Elmo coffee"
          })]
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "jasper-tn",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Jasper Highlands, TN", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "About 35 minutes northwest of Chattanooga on the Cumberland Plateau above the Tennessee River Gorge. Top of the Rock is a brewpub with plateau views that make it a destination in its own right — not a quick errand, more of an afternoon commitment that earns it."
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "guild-tn",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Guild, TN", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "A short drive west of downtown on US-41, just past Raccoon Mountain. Lookout Winery sits on a bluff with Tennessee River views — the kind of stop that earns its own afternoon rather than being tacked onto something else."
        }), createVNode("div", {
          class: "flex flex-wrap gap-4 mt-4",
          children: createVNode("a", {
            href: "/chattanooga/guides/outdoors?tags=raccoon-mtn",
            class: "page-item-link text-logoDarkGreen underline",
            children: "Raccoon Mountain outdoors"
          })
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "ringgold-ga",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Ringgold, GA", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "Six miles south of Chattanooga at I-75 Exit 350. The Georgia Winery is the closest winery to the city in this guide — barely a day trip, more of an errand with wine at the end of it."
        })]
      }), createVNode("div", {
        class: "place-description hidden mb-10 mt-10 p-4 border border-black rounded-lg",
        "data-place": "dalton-ga",
        children: [createVNode("h2", {
          class: "text-3xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Dalton, GA", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "text-xl",
          children: "About 30 minutes south on I-75. Not a craft beer destination yet, but Dalton Brewing holds its own for a city that size. Easy add-on if you’re already heading south."
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
        children: ["This guide will grow as Chattanooga’s brewing scene does. If a spot is missing or something’s changed, ", createVNode("a", {
          href: "mailto:jack@thingshappening.com",
          children: "send a note"
        }), " — a name and a quick reason it belongs is all we need."]
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

const url = "/chattanooga/guides/breweries-and-wineries";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/breweries-and-wineries.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/breweries-and-wineries.mdx";
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
