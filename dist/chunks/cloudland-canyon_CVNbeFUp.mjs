import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from './astro/server_CzqnycT_.mjs';
import { $ as $$BlogPostLayout } from './BlogPostLayout_Bqj5Bb28.mjs';
import { $ as $$OptimizedImage } from './OptimizedImage_DlERzftH.mjs';
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
  "title": "A Comprehensive Guide to Cloudland Canyon State Park",
  "originalDate": "12/24/2024",
  "lastUpdated": "02/18/2026",
  "readTime": "8 minutes",
  "iconPath": "../../../images/icons-new/pine-tree.png",
  "tags": [{
    "type": "guide",
    "tag": "outdoors"
  }, {
    "type": "guide",
    "tag": "longform"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "The big guide to Cloudland Canyon State Park for hiking, waterfalls, caves, mountain biking, camping, disc golf, and nearby restaurants, plus in-depth details on each.",
  "seasonality": "Year-round; best weather March-November, waterfalls peak after rainfall",
  "ogImage": "/images/outdoors-social.png",
  "images": [{
    "src": "/images/chattanooga_guides/outdoors/cloudland/trail-shot.webp",
    "position": "lower"
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode("div", {
    children: [createVNode("div", {
      class: "pb-5",
      children: createVNode("a", {
        href: "/pdfs/chattanooga/cloudland-canyon.pdf",
        target: "_blank",
        class: "inline-flex items-center px-4 py-2 bg-logoDarkGreen text-logoLightGreen rounded-lg hover:opacity-90 transition-colors",
        children: [createVNode("svg", {
          class: "w-5 h-5 mr-2",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: createVNode("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          })
        }), createVNode(_components.p, {
          children: "Download PDF Guide"
        })]
      })
    }), createVNode("div", {
      class: "pb-2 text-xl pt-6",
      children: [createVNode("div", {
        class: "text-xl pb-5",
        children: createVNode(_components.p, {
          children: ["Travel a few miles south of Chattanooga and you likely won’t regret a trip to Cloudland Canyon State Park in Rising Fawn, Georgia. It was recently featured on The Discoverer as the ", createVNode("a", {
            href: "https://www.thediscoverer.com/blog/the-best-state-park-in-each-state/XvHyVpKgiwAG5akA",
            target: "_blank",
            children: "best state park"
          }), " in Georgia. After investigating a little further you’ll quickly find out why. It has over 60 miles of hiking, biking, and horseback riding trails ranging from easy to difficult with some of the best views you could hope for."]
        })
      }), createVNode("div", {
        class: "text-xl pb-5",
        children: createVNode(_components.p, {
          children: "The park offers numerous activities suitable for the whole family, whether for a day trip or a weekend getaway. In this guide let’s take a look at more of what this nearby trail system treasure has to offer."
        })
      }), createVNode("h4", {
        class: "pb-5",
        children: createVNode("a", {
          href: "https://gastateparks.org/sites/default/files/parks/pdf/trailmaps/CloudlandCanyon_TrailMap.pdf",
          target: "_blank",
          children: createVNode(_components.p, {
            children: "Trail Map pdf"
          })
        })
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/outdoors/cloudland/vista.webp",
          alt: "Overlook view of Cloudland Canyon State Park"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Cloudland Canyon Overlook Vista"
          })
        })]
      }), createVNode("section", {
        class: "text-xl pb-12",
        children: createVNode("div", {
          children: [createVNode("h2", {
            class: "text-4xl mb-4",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["By Topic", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          }), createVNode("div", {
            class: "pb-4",
            children: createVNode("div", {
              class: "text-xl",
              children: [createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#easier-hikes",
                  children: "Easier Hikes"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#mtb-easy",
                  children: "Easier MTB Rides"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#advanced-hikes",
                  children: "Intermediate/Advanced Hikes"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#mtb-advanced",
                  children: "Intermediate/Advanced MTB"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#disc-golf",
                  children: "Disc Golf"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#camping",
                  children: "Camping"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#fishing",
                  children: "Fishing"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#eating",
                  children: "Eating Nearby"
                })
              })]
            })
          })]
        })
      }), createVNode("section", {
        class: "pb-3 text-xl",
        id: "easier-hikes",
        children: [createVNode("div", {
          class: "pb-3",
          children: createVNode("h2", {
            class: "text-5xl",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Easier Hikes", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          children: [createVNode("div", {
            class: "pb-3",
            id: "meadowlands-trail",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "1."
                })
              }), "Meadowlands Trail"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 1 mile"]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/Cloudland+Canyon+State+Park+Disc+Golf/@34.8266854,-85.4778982,18z/data=!4m14!1m7!3m6!1s0x8860489de9aa9e81:0xaa78f71a6429baa9!2sAscalon+Trailhead!8m2!3d34.8369616!4d-85.4386864!16s%2Fg%2F11cjhz867p!3m5!1s0x886048fe2437145d:0x70f3de2a12fbbef!8m2!3d34.8264344!4d-85.478418!16s%2Fg%2F11c6tys3_m?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            children: [createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "This is a one mile out and back trail. Off this trail you can fish for catfish. You don’t even need a license, if the Interpretive Center is open they have fishing poles you can use, free of charge. The pond is stocked with catfish, the catch and keep season runs from Labor Day - December. Closest parking for this trail is at the Park Disc Golf course."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "On this hike is an observation deck that offers a breathtaking view of the canyon vistas, be sure to stop and stare for a little while, maybe get a picture or maybe just store it in the old memory bank. In the summer there are blackberry bushes, with thousands of berries ripe for picking."
              })
            })]
          })]
        }), createVNode("br", {}), createVNode("div", {
          children: [createVNode("div", {
            class: "pb-3",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "2."
                })
              }), "Overlook Trail"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 1 mile"]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/W+Rim+Loop+Trail+Head/@34.8348232,-85.4836331,17z/data=!3m1!4b1!4m6!3m5!1s0x8860493ec28bc6b9:0xbbee8ffee63f8ab7!8m2!3d34.8348188!4d-85.4810528!16s%2Fg%2F11sx554rxc?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "The Overlook Trail isn’t frequently noted in the hiking apps but it is a good trail to know about if the lengths of the others are intimidating. This trail is easy to access as it sits right in front of the parking lot linked parking lot. It’s a short out and back trail with spectacular views of the park, especially in the spring and fall. It’s a great way to get a taste for the park or to start venturing back out into nature if it has been a little while since your last hiking adventure."
            })
          })]
        }), createVNode("br", {}), createVNode("div", {
          children: [createVNode("div", {
            class: "pb-3 mr-2",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "3."
                })
              }), "Backcountry Loop Trail"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 2 miles"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Rating:"
              }), " 4.6/5 ", createVNode("a", {
                href: "https://www.alltrails.com/ar/trail/us/georgia/two-mile-backcountry-loop-trail",
                target: "_blank",
                children: "AllTrails"
              })]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/Cloudland+Canyon+State+Park+Disc+Golf/@34.8266854,-85.4778982,18z/data=!4m14!1m7!3m6!1s0x8860489de9aa9e81:0xaa78f71a6429baa9!2sAscalon+Trailhead!8m2!3d34.8369616!4d-85.4386864!16s%2Fg%2F11cjhz867p!3m5!1s0x886048fe2437145d:0x70f3de2a12fbbef!8m2!3d34.8264344!4d-85.478418!16s%2Fg%2F11c6tys3_m?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: ["There’s no direct Google location for this trail. I linked to the closest parking in the directions above. This paired with the ", createVNode("a", {
                href: "https://gastateparks.org/sites/default/files/parks/pdf/trailmaps/CloudlandCanyon_TrailMap.pdf",
                children: "trail"
              }), " map should get you there. This is a trail loop to access primitive campsites and is also a nice 2 mile hike to explore a less frequently traveled, but still fairly easy hike. As with all of the other trails in the park remember to bring appropriate footwear, something that can handle moisture and rocky terrain. Like the Meadowlands Trail the closest parking will be at the disc golf course."]
            })
          })]
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/outdoors/cloudland/trail-shot.webp",
          alt: "West Rim and Overlook trails fork in Cloudland Canyon"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "On the trail in CCSP"
          })
        })]
      }), createVNode("section", {
        class: "pb-3 text-xl",
        id: "mtb-easy",
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Easier MTB Rides", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The easier MTB rides below are from the 5 Points Recreation Area. Make sure you have proper gear and check the weather conditions and trail reports before your excursion."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "pb-3",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "1."
                })
              }), "Bankhead + Cloudland Canyon Connector + Shale Flats loop"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 3-4 miles"]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/5+Points+Mountain+Biking/@34.850985,-85.4274308,17z/data=!3m1!4b1!4m6!3m5!1s0x886046111bb370ab:0x85946697eb99245d!8m2!3d34.8509806!4d-85.4248505!16s%2Fg%2F11bwl0mf99?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            children: [createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "This route makes use of three trails, each short in length. 1. Bankhead (0.4mi), 2. Shale Flats (1.1m) and 3. Cloudland Canyon Connector (CCC) (~1.7mi). All of these trails are bidirectional. It should be a little over a 3-4 mile bike ride in total. Each trail is designated as easy. Shale Flats is a total climb of 53 feet and Bankhead’s climb is 73ft, unknown climb on this section of CCC but expect between 100-200 feet. The ride will take about 20-30 minutes in total depending on your speed and skill level."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "You’ll start out taking Bankhead a short ways before turning left onto CCC. Then you take CCC about another half of a mile before Shale Flats. Continue the entire 1.1 miles of Shale Flats before intersecting with CCC and Caprock, take CCC. Ride CCC back up to Bankhead and take Bankhead back to parking."
              })
            })]
          })]
        }), createVNode("div", {
          children: [createVNode("div", {
            class: "pb-3",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "2."
                })
              }), "Cloudland Canyon Connector (and back)"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 6.8 miles"]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/34%C2%B050'14.6%22N+85%C2%B026'20.3%22W/@34.83738,-85.4415429,831m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d34.83738!4d-85.438968?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "Arguably the most popular trail in the 5 points system, take this trail out and back for close to a seven mile ride. You’ll start by parking at the Ascalon Trailhead linked above and should be able to access CCC. The nice thing about this ride is it’s a green the whole way and your main navigation note is to stay on the trail. CCC connects to many other trails in the 5 points network so you’ll see a lot of forks, but just take CCC every time. The trail ends at Hinkie Road (RT 157). Then turn around and head back to Ascalon Trailhead where you parked."
            })
          })]
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/outdoors/cloudland/mtb-map.webp",
          alt: "5 Points Cloudland Trail Map for Mountain Biking"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "5 Points MTB Trail Map"
          })
        })]
      }), createVNode("section", {
        class: "pb-10 text-xl",
        id: "advanced-hikes",
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Intermediate/Advanced Hikes", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "pb-3",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "1."
                })
              }), "West Rim Loop"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 4.7 miles"]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/W+Rim+Loop+Trail+Head/@34.8348232,-85.4836331,17z/data=!3m1!4b1!4m6!3m5!1s0x8860493ec28bc6b9:0xbbee8ffee63f8ab7!8m2!3d34.8348188!4d-85.4810528!16s%2Fg%2F11sx554rxc?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "Nearly a 5 mile long loop style trail that keeps you on the outskirts of the canyon. As with any of the trails in this list make sure you wear proper footwear, it’s pretty rugged. The trail features some beautiful views of the canyon as you take your lap around the park. This trail has in various years been rated one of the top hikes in the United States."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "pb-3",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "2."
                })
              }), "Waterfalls Trail"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 1.8 miles"]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/W+Rim+Loop+Trail+Head/@34.8348232,-85.4836331,17z/data=!3m1!4b1!4m6!3m5!1s0x8860493ec28bc6b9:0xbbee8ffee63f8ab7!8m2!3d34.8348188!4d-85.4810528!16s%2Fg%2F11sx554rxc?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "This trail is accessed off of the West Rim loop. Although shorter in distance, it’s noted as probably the most strenuous trail in the park. It’s recommended not to take your dog, as there are over 600 grated metal stairs that can be painful on their paws. The difficulty of this hiking trail is rewarded by the waterfalls, along this path is both the Hemlock and Cherokee falls. The waterflow varies, but will be best after a rainstorm."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "pb-3",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "3."
                })
              }), "Sitton’s Gulch Trail"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 6 miles"]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/Sitton's+Gulch+Trailhead/@34.8598776,-85.4847427,15z/data=!4m6!3m5!1s0x8860492ec67befcb:0x9a3068fca515b87b!8m2!3d34.8598776!4d-85.4847427!16s%2Fg%2F11bzsf0zbx?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "This is a 6 mile out and back trail. It will guide you down into the valley of the canyon as it follows along various creeks. In the springtime the wildflowers add for an extraordinary experience. It’s a pretty difficult trail so be adequately prepared mentally and physically. Neaby are Sitton and Case cave’s, accessible by guided tour only, so if you want to make it an even more adventurous day, be sure to book a tour in advance."
            })
          })]
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/outdoors/cloudland/overlook-west-rim.webp",
          alt: "Close up of trail signs in the Cloudland Canyon State Park"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Cloudland Canyon Trail Signs"
          })
        })]
      }), createVNode("section", {
        class: "pb-12 text-xl",
        id: "mtb-advanced",
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Intermediate/Advanced MTB Rides", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          children: [createVNode("div", {
            class: "pb-3",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "1."
                })
              }), "Tailings Run + CCC + North Hogsback"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 4 - 5 miles"]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/5+Points+Mountain+Biking/@34.8509806,-85.4248505,17z/data=!3m1!4b1!4m6!3m5!1s0x886046111bb370ab:0x85946697eb99245d!8m2!3d34.8509806!4d-85.4248505!16s%2Fg%2F11bwl0mf99?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "Park at 5 Points and begin riding north on Tailings Run, this is a 1.5 mile expert trail. Take Tailings to the Clouldland Canyon Connector (CCC) and ride the CCC (an easy trail) a few miles down until you get to the fork where a left turn will lead you onto the North Hogsback route. Note that once you get to 5 points, you’re two thirds of the way through your ride on CCC. North Hogsback is another expert rated trail totaling 1.1 miles in distance. Take North Hogsback all the way to the 5 Points parking lot."
            })
          })]
        }), createVNode("br", {}), createVNode("div", {
          children: [createVNode("div", {
            class: "pb-3",
            children: [createVNode("div", {
              class: "text-3xl",
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "2."
                })
              }), "Bankhead + Kettle Bottom"]
            }), createVNode("div", {
              children: [createVNode("b", {
                children: "Distance:"
              }), " 5 - 6 miles"]
            }), createVNode("div", {
              children: createVNode("b", {
                children: createVNode("a", {
                  href: "https://www.google.com/maps/place/5+Points+Mountain+Biking/@34.8509806,-85.4248505,17z/data=!3m1!4b1!4m6!3m5!1s0x886046111bb370ab:0x85946697eb99245d!8m2!3d34.8509806!4d-85.4248505!16s%2Fg%2F11bwl0mf99?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: createVNode(_components.p, {
                    children: "Directions"
                  })
                })
              })
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "Park at 5 Points and begin by taking Bankhead 0.4 miles to Clouldland Canyon Connector (CCC). Take a right on CCC until you get to the 5 Points intersection. At 5 Points find Kettle Bottom trail. Kettle Bottom is rated as an intermediate trail. You can either take it as a full loop or there is an alternate path that’s slightly shorter (about 1/3 of a mile shorter). Both options take you back to 5 Points intersection where you’ll take a right on CCC back to Bankhead and follow that back to the parking lot."
            })
          })]
        })]
      }), createVNode("section", {
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Hiking Breakdown", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("table", {
          class: "w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden",
          children: [createVNode("thead", {
            children: createVNode("tr", {
              class: "bg-gray-100 text-gray-700 text-left uppercase text-sm",
              children: [createVNode("th", {
                class: "px-4 py-2 border border-gray-300",
                children: "Trail Name"
              }), createVNode("th", {
                class: "px-4 py-2 border border-gray-300",
                children: "Distance"
              }), createVNode("th", {
                class: "px-4 py-2 border border-gray-300",
                children: "Difficulty"
              }), createVNode("th", {
                class: "px-4 py-2 border border-gray-300 hidden sm:table-cell",
                children: "What You’ll See"
              }), createVNode("th", {
                class: "px-4 py-2 border border-gray-300 hidden sm:table-cell",
                children: "Pro Tip"
              })]
            })
          }), createVNode("tbody", {
            children: [createVNode("tr", {
              class: "bg-white hover:bg-gray-50 transition duration-200",
              children: [createVNode("td", {
                class: "px-4 py-3 border border-gray-300 font-semibold",
                children: "Waterfalls Trail"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300",
                children: "2 miles round trip"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 text-red-600 font-semibold",
                children: "Hard (steep stairs)"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Hemlock Falls, Cherokee Falls"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: ["Bring ", createVNode("strong", {
                  children: "waterproof shoes"
                }), "—the rocks near the falls can be slippery!"]
              })]
            }), createVNode("tr", {
              class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
              children: [createVNode("td", {
                class: "px-4 py-3 border border-gray-300 font-semibold",
                children: "West Rim Loop Trail"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300",
                children: "5 miles"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 text-yellow-600 font-semibold",
                children: "Moderate"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Canyon overlooks, rock formations"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: ["Best ", createVNode("strong", {
                  children: "sunset views"
                }), " in the park—head here in the evening for golden hour."]
              })]
            }), createVNode("tr", {
              class: "bg-white hover:bg-gray-50 transition duration-200",
              children: [createVNode("td", {
                class: "px-4 py-3 border border-gray-300 font-semibold",
                children: "Sitton’s Gulch Trail"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300",
                children: "6 miles"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 text-red-600 font-semibold",
                children: "Hard"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Wildflowers, river views, remote scenery"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: [createVNode("strong", {
                  children: "Fewer crowds"
                }), " than other trails—perfect for solitude seekers."]
              })]
            }), createVNode("tr", {
              class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
              children: [createVNode("td", {
                class: "px-4 py-3 border border-gray-300 font-semibold",
                children: "Overlook Trail"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300",
                children: "1 mile"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 text-green-600 font-semibold",
                children: "Easy"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Panoramic canyon views"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: ["Great for ", createVNode("strong", {
                  children: "first-time visitors"
                }), " or those with limited mobility."]
              })]
            })]
          })]
        })]
      }), createVNode("section", {
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["MTB Breakdown", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("table", {
          class: "w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden",
          children: [createVNode("thead", {
            children: createVNode("tr", {
              class: "bg-gray-100 text-gray-700 text-left uppercase text-sm",
              children: [createVNode("th", {
                class: "px-4 py-2 border border-gray-300",
                children: "Trail Name"
              }), createVNode("th", {
                class: "px-4 py-2 border border-gray-300",
                children: "Distance"
              }), createVNode("th", {
                class: "px-4 py-2 border border-gray-300",
                children: "Difficulty"
              }), createVNode("th", {
                class: "px-4 py-2 border border-gray-300 hidden sm:table-cell",
                children: "Terrain Type"
              }), createVNode("th", {
                class: "px-4 py-2 border border-gray-300 hidden sm:table-cell",
                children: "Pro Tip"
              })]
            })
          }), createVNode("tbody", {
            children: [createVNode("tr", {
              class: "bg-white hover:bg-gray-50 transition duration-200",
              children: [createVNode("td", {
                class: "px-4 py-3 border border-gray-300 font-semibold",
                children: "Raccoon Mountain"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300",
                children: "16+ miles"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 text-red-600 font-semibold",
                children: "Hard"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Rocky, technical climbs, flowy descents"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Bring extra water—limited refill spots on the trail."
              })]
            }), createVNode("tr", {
              class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
              children: [createVNode("td", {
                class: "px-4 py-3 border border-gray-300 font-semibold",
                children: "Stringers Ridge"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300",
                children: "5 miles"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 text-green-600 font-semibold",
                children: "Easy"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Smooth singletrack, beginner-friendly"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Great for a quick ride close to downtown."
              })]
            }), createVNode("tr", {
              class: "bg-white hover:bg-gray-50 transition duration-200",
              children: [createVNode("td", {
                class: "px-4 py-3 border border-gray-300 font-semibold",
                children: "Enterprise South"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300",
                children: "10 miles"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 text-yellow-600 font-semibold",
                children: "Moderate"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Smooth & fast, rolling hills"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Ride early to avoid hikers on multi-use trails."
              })]
            }), createVNode("tr", {
              class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
              children: [createVNode("td", {
                class: "px-4 py-3 border border-gray-300 font-semibold",
                children: "White Oak Mountain"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300",
                children: "12 miles"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 text-red-600 font-semibold",
                children: "Hard"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Steep climbs, technical features"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: ["Expect ", createVNode(_components.strong, {
                  children: "tight switchbacks"
                }), " and ", createVNode(_components.strong, {
                  children: "rugged terrain"
                }), "."]
              })]
            }), createVNode("tr", {
              class: "bg-white hover:bg-gray-50 transition duration-200",
              children: [createVNode("td", {
                class: "px-4 py-3 border border-gray-300 font-semibold",
                children: "Five Points"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300",
                children: "20+ miles"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 text-yellow-600 font-semibold",
                children: "Moderate"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Well-maintained singletrack, good flow"
              }), createVNode("td", {
                class: "px-4 py-3 border border-gray-300 hidden sm:table-cell",
                children: "Perfect for an all-day adventure—bring snacks!"
              })]
            })]
          })]
        })]
      }), createVNode("section", {
        class: "pb-3 text-xl",
        id: "disc-golf",
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Disc Golf", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          children: [createVNode("div", {
            children: [createVNode("b", {
              children: "Holes:"
            }), " 18"]
          }), createVNode("div", {
            children: createVNode("b", {
              children: createVNode("a", {
                href: "https://maps.app.goo.gl/EVRWySGiXBkXsZB8A",
                target: "_blank",
                children: "Directions"
              })
            })
          }), createVNode("br", {}), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "Are you a disc golfer who’s a sucker for scenery? The Cloudland Canyon State Park Disc Golf Course might be the course you’re looking for. The course is easy to follow and well marked but some parts have been reported to be a little overgrown. The course has concrete tee’s and though there are rest rooms in the state park, there are not restrooms readily available on the course. You have to pay the $5 entry fee to get into the park, but there’s no additional fee after that. It’s about a 5 minute drive from the park entrance to the course."
            })
          })]
        }), createVNode("br", {})]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Creekside_Disc_Golf_-_1023296199.jpg",
          alt: "disc golf and hole target"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: createVNode(_components.p, {
              children: [createVNode("a", {
                href: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Creekside_Disc_Golf_-_1023296199.jpg",
                target: "_blank",
                children: "Disc and Target"
              }), "\nby formatc1. CC license 2.0."]
            })
          })
        })]
      }), createVNode("section", {
        class: "pb-3 text-xl",
        id: "camping",
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Camping", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          class: "mb-5",
          children: [createVNode("div", {
            children: createVNode("a", {
              href: "https://gastateparks.reserveamerica.com/camping/map_of_cloudland-canyon-state-park/r/campgroundMap.do?page=map&search=site&contractCode=GA&parkId=530148",
              target: "_blank",
              children: "Park Campsite Map"
            })
          }), createVNode("div", {
            children: createVNode("a", {
              href: "https://gastateparks.reserveamerica.com/camping/cloudland-canyon-state-park/r/campsiteCalendar.do?page=calendar&search=site&contractCode=GA&parkId=530148",
              target: "_blank",
              children: "Park Campsite Availability"
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Cloudland Canyon State Park offers pretty much every type of camping experience you have in mind. Want to camp out in a yurt? The have that. Want to bring your uncle Dave’s RV? They have spots for that. Want to rent a cabin with friends? They can make that happen. You get the point. They also have primitive campsites for the folks who prefer the BYO tent lifestyle. There are additional fees depending on what you’re doing, make sure to check their website for rental and campsite availability and registration. In the popular season’s (we’re looking and you spring and fall) you may need to book a few weeks in advance."
          })
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/67/Series_of_Glamping_Yurts_near_Llansantffraed-in-Elwel%2C_Powys.jpg",
          alt: "Yurt campground atop green hills"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: createVNode(_components.p, {
              children: [createVNode("a", {
                href: "https://upload.wikimedia.org/wikipedia/commons/6/67/Series_of_Glamping_Yurts_near_Llansantffraed-in-Elwel%2C_Powys.jpg",
                target: "_blank",
                children: "Yurt Campgound"
              }), "\nby Bill Nicholls. CC license 2.0."]
            })
          })
        })]
      }), createVNode("section", {
        class: "pb-3 text-xl",
        id: "fishing",
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Fishing", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The bad news? There is only one fishing spot in the campground. The good news? It’s a pretty nice fishing spot. Cloudland Canyon has a pond that measures about one acre. It’s stocked with channel catfish which can be harvested from the day after labor day through the end of November. All other times are catch and release. If you don’t have your fishing license, don’t fret it’s not needed for this location."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["The easiest way to access the pond is via the ", createVNode("a", {
              href: "#easier-hikes",
              children: "Meadowlands Trail"
            }), ", referenced above."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Important note: There is no fishing allowed in any of the park creeks."
          })
        })]
      }), createVNode("section", {
        class: "pb-3 text-xl",
        id: "eating",
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Eating Nearby", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Are you visiting Cloudland Canyon for a day hike and want to get a bite to eat at a restaurant or cafe after? Maybe the fire wouldn’t start to cook the frank and beans while you were camping. You have a few options nearby. Here are a few options:"
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.ol, {
            children: ["\n", createVNode(_components.li, {
              children: [createVNode("a", {
                href: "https://www.google.com/maps/place/Hope+House+Caf%C3%A9+via+A+Hand+UP+Ministry/@34.8624676,-85.5052369,16z/data=!3m1!4b1!4m6!3m5!1s0x8860495b22a64865:0xae6b460ec25c91b0!8m2!3d34.8624632!4d-85.5026566!16s%2Fg%2F11rct_1ng3?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Hope House Cafe."
              }), " This cafe is a 10-15 minute drive from the mountain with great breakfast and lunch food options. It has a charming atmosphere that’s inviting after a day’s hike."]
            }), "\n"]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.ol, {
            start: "2",
            children: ["\n", createVNode(_components.li, {
              children: [createVNode("a", {
                target: "_blank",
                href: "https://www.google.com/maps/place/Canyon+Grill/@34.8094493,-85.4776323,17z/data=!3m1!4b1!4m6!3m5!1s0x88604890a875279f:0xf22124328698ea0d!8m2!3d34.8094449!4d-85.475052!16s%2Fg%2F1thxwyt0?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
                children: "Canyon Grill."
              }), " If it’s closer to dinnertime Canyon Grill will be what you’re looking for. It has a great menu with highly rated seafood, steaks, and fried okra. The menu may have given it away but if it’s not clear this is the most expensive option in this list. It’s about 5-10 minutes from the park."]
            }), "\n"]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.ol, {
            start: "3",
            children: ["\n", createVNode(_components.li, {
              children: [createVNode("a", {
                target: "_blank",
                href: "https://www.google.com/maps/place/Thatcher's+Bbq+And+Grille/@34.8719566,-85.5113424,16z/data=!3m1!4b1!4m6!3m5!1s0x88604ead5f4137e1:0xef1ed00dbded4cae!8m2!3d34.8719522!4d-85.5087621!16s%2Fg%2F1tj33w22?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
                children: "Thatcher’s Bbq And Grille."
              }), " A great lunch or dinner bbq option after your outdoor adventures, the menu features your bbq restaurant favorites like brisket and for dessert banana pudding. The menu has some gluten free options."]
            }), "\n"]
          })
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Cloudland_Canyon_State_Park_%288648810088%29.jpg",
          alt: "Cloudland Canyon waterfall"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: createVNode(_components.p, {
              children: [createVNode("a", {
                href: "https://commons.wikimedia.org/wiki/File:Cloudland_Canyon_State_Park_(8648810088).jpg",
                target: "_blank",
                children: "Cloudland Canyon State Park"
              }), "\nby Jeff Gunn. CC license 2.0."]
            })
          })
        })]
      }), createVNode("section", {
        class: "pb-3 text-xl",
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Other Ideas / Notes of Interest", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          children: createVNode("div", {
            children: [createVNode("div", {
              class: "mb-3",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "text-2xl",
                  children: createVNode("b", {
                    children: "Road Bike"
                  })
                }), "\n", createVNode("span", {
                  class: "text-customGreen1 text-4xl font-bold",
                  children: ". "
                }), " The various park areas are mostly interconnected through low-medium trafficked roads depending on when you visit. It can be a great place to ride your bike around nature, get some exercise, and potentially see some wildlife if you’re lucky."]
              })
            }), createVNode("div", {
              class: "mb-3",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "text-2xl",
                  children: createVNode("b", {
                    children: "Horseback Ride"
                  })
                }), "\n", createVNode("span", {
                  class: "text-customGreen1 text-4xl font-bold",
                  children: ". "
                }), " There are some trails in the park that allow for horseback riding. You have to BYO horse, no guided tours are provided by the park. Riding trails are at the 5 Points Recreation Area with parking at ", createVNode("a", {
                  href: "https://www.google.com/maps/place/Ascalon+Trailhead/@34.836966,-85.4412667,17z/data=!3m1!4b1!4m6!3m5!1s0x8860489de9aa9e81:0xaa78f71a6429baa9!8m2!3d34.8369616!4d-85.4386864!16s%2Fg%2F11cjhz867p?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
                  target: "_blank",
                  children: "Ascalon Trailhead"
                }), "."]
              })
            }), createVNode("div", {
              class: "mb-3",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "text-2xl",
                  children: createVNode("b", {
                    children: "Picnic"
                  })
                }), "\n", createVNode("span", {
                  class: "text-customGreen1 text-4xl font-bold",
                  children: ". "
                }), " Some free access picnic tables are scattered throughout the park, but you can also rent a larger picnic table for an event or family function. Find availability ", createVNode("a", {
                  href: "https://gastateparks.reserveamerica.com/campsiteFilterAction.do?sitefilter=Picnic%20Shelter&startIdx=0&contractCode=GA&parkId=530148&_gl=1*178u764*_ga*OTUyMDE4MTMyLjE3MjUyMDUzNzU.*_ga_NY38CG84RB*MTcyNTczMTk2OC44LjAuMTcyNTczMTk2OC4wLjAuMA..",
                  target: "_blank",
                  children: "here"
                }), "."]
              })
            }), createVNode("div", {
              class: "mb-3",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "text-2xl",
                  children: createVNode("b", {
                    children: "Waterfalls"
                  })
                }), "\n", createVNode("span", {
                  class: "text-customGreen1 text-4xl font-bold",
                  children: ". "
                }), "\nWaterfalls. If you read through this guide (thanks if you did, big fan of you) you will have seen multiple mentions of waterfalls in the park. There’s Hemlock Falls and Cherokee Falls, both are most easily accessed via the ", createVNode("a", {
                  href: "#meadowlands-trail",
                  children: "Meadowlands Trail"
                }), ". The water levels can vary significantly depending on rainfall but when they are flowing it’s really a sight to behold."]
              })
            }), createVNode("div", {
              class: "mb-3",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "text-2xl",
                  children: createVNode("b", {
                    children: "Events"
                  })
                }), "\n", createVNode("span", {
                  class: "text-customGreen1 text-4xl font-bold",
                  children: ". "
                }), "\nThroughout the year this state parks hosts a wide variety of outdoor events, usually 5-10 per month. See if there is something you might like at ", createVNode("a", {
                  href: "https://explore.gastateparks.org/events?p=38",
                  target: "_blank",
                  children: "GA State Parks website"
                }), "."]
              })
            }), createVNode("div", {
              class: "mb-3",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "text-2xl",
                  children: createVNode("b", {
                    children: "Volunteer"
                  })
                }), "\n", createVNode("span", {
                  class: "text-customGreen1 text-4xl font-bold",
                  children: ". "
                }), "\nFriends of Cloudland Canyon State Park are almost always seeking volunteers for various maintenance, hospitality, and fundraising roles regularly. If you’re interested in helping maintain this wonderful park you can find more details ", createVNode("a", {
                  href: "https://friendsofcloudlandcanyon.org/volunteering/",
                  target: "_blank",
                  children: "here"
                }), "."]
              })
            })]
          })
        })]
      }), createVNode("section", {
        children: [createVNode("div", {
          children: createVNode("h2", {
            class: "text-5xl w-full break-words",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Closing Time", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["I hope this guide left you feeling inspired for a visit to this magical park. I know I’m ready to go back now after putting it together. If you feel like I left anything out or you have any questions please reach out to ", createVNode("a", {
              href: "mailto:jack@thingshappening.com",
              children: createVNode(_components.a, {
                href: "mailto:jack@thingshappening.com",
                children: "jack@thingshappening.com"
              })
            })]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Looking for more outdoor adventures closer to Chattanooga? Check out our ", createVNode("a", {
              href: "/chattanooga/guides/outdoors",
              target: "_blank",
              children: "Chattanooga Outdoors Guide"
            }), " with 71 hiking, biking, and paddling routes."]
          })
        })]
      }), createVNode("section", {
        class: "text-xl pt-10",
        children: [createVNode("h2", {
          class: "text-4xl mb-4",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Other Guides", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("ul", {
          class: "text-3xl",
          children: [createVNode("li", {
            children: createVNode("a", {
              href: "/chattanooga/guides/outdoors",
              target: "_blank",
              children: "Outdoor Adventures"
            })
          }), createVNode("li", {
            children: createVNode("a", {
              href: "/chattanooga/guides/tours",
              target: "_blank",
              children: "Guided Tours"
            })
          }), createVNode("li", {
            children: createVNode("a", {
              href: "/chattanooga/guides/confections",
              target: "_blank",
              children: "Sweet Treats"
            })
          })]
        })]
      })]
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
const url = "/chattanooga/guides/cloudland-canyon";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/cloudland-canyon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/cloudland-canyon.mdx";
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
