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
  "title": "A Sheet for Chattanooga Live Music",
  "lastUpdated": "07/26/2026",
  "originalDate": "02/04/2025",
  "readTime": "7 minutes",
  "iconPath": "../../../images/icons-new/music.png",
  "tags": [{
    "type": "guide",
    "tag": "longform"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "The live music guide to Chattanooga. Explore local bars, music venues, theaters, festivals, history and more.",
  "ogImage": "/images/music-social.png",
  "images": [{
    "src": "/images/chattanooga_guides/live-music/woodshop.png",
    "position": "center"
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode("div", {
    children: [createVNode("div", {
      class: "pb-5",
      children: createVNode("a", {
        href: "/pdfs/chattanooga/live-music.pdf",
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
    }), createVNode("section", {
      class: "text-xl pt-4",
      children: [createVNode("div", {
        class: "pb-10",
        children: createVNode(_components.p, {
          children: "Music and Chattanooga have a shared history, and the story is continuing into the present. This guide will start things off with a brief notes on the cities music history and then map out where you can find a show that’s right for you around town. You won’t be short on options."
        })
      }), createVNode("div", {
        class: "pb-10",
        children: createVNode(_components.p, {
          children: "Legendary blues singer Bessie Smith, aka the “Empress of the Blues”, called Chattanooga home as she and her six siblings literally raised themselves on street performances. She then went on to be arguably the most popular blues singer of the 1930’s."
        })
      }), createVNode("div", {
        class: "pb-10",
        children: [createVNode(_components.p, {
          children: "In exploring Chattanooga’s musical history I’ve also come to learn of the Glenn Miller Orchestra. They’re the group that popularized the song “Chattanooga Choo Choo” which was written for the musical film “Sun Valley Serenade” in 1941. The song went on to be nominated for an Oscar for best song that year and was such a standout success it was awarded the first ever Gold Record for selling 1.2 million copies."
        }), createVNode("div", {
          class: "pb-10",
          children: createVNode(_components.p, {
            children: [createVNode("span", {
              class: "font-bold",
              children: "Fun fact:"
            }), " The Glenn Miller Orchestra still performs to this day. If you want to check out a live performance view their event schedule ", createVNode("a", {
              href: "https://glennmillerorchestra.com/tour-schedule/",
              target: "_blank",
              children: "here"
            }), "."]
          })
        }), createVNode("div", {
          class: "pb-10",
          children: createVNode(_components.p, {
            children: ["If you’re interested in listening to contemporary artists hailing from the Chattanooga area be sure to check out the music profiles of country star ", createVNode("a", {
              href: "https://open.spotify.com/artist/3oSJ7TBVCWMDMiYjXNiCKE",
              target: "_blank",
              children: "Kane Brown"
            }), ", ", createVNode("a", {
              href: "https://open.spotify.com/artist/1v3tdpIdBSW14rHUfiEVOv",
              target: "_blank",
              children: "Lauren Alaina"
            }), ", or maybe 2000’s R&B and Pop star ", createVNode("a", {
              href: "https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj",
              target: "_blank",
              children: "Usher"
            }), "."]
          })
        }), createVNode("div", {
          class: "pb-10",
          children: createVNode(_components.p, {
            children: "Bluegrass, country and folk music scenes are still prominent in the area’s today, with its close proximity to and influence from the Appalachian mountains."
          })
        })]
      })]
    }), createVNode("div", {
      class: "pb-2 text-xl",
      children: createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/live-music/woodshop1.webp",
          alt: "The Woodshop at the Listening Room in St Elmo, Chattanooga"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "The Woodshop"
          })
        })]
      })
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
                href: "#local-bars",
                children: "Local Bars"
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                href: "#recurring-events",
                children: "Recurring Music Events"
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                href: "#larger-venues",
                children: "Larger Music Venues"
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                href: "#festivals",
                children: "Festivals"
              })
            })]
          })
        })]
      })
    }), createVNode("section", {
      class: "text-xl",
      id: "local-bars",
      children: [createVNode("div", {
        class: "pb-3",
        children: createVNode("h2", {
          children: ["Local Bars", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      }), createVNode("div", {
        class: "pb-10",
        children: createVNode(_components.p, {
          children: ["In exploring the Chattanooga live music scene you’ll probably find a performance going on any night of the week. In saying that, there were a few standout spots worth highlighting below, but there were so many good options we had to add an honorable mentions section to do this list to do it justice and shout out more of the local establishments supporting our cities artists. There are acoustic sets for more intimate shows, or high energy bands for a lively night out, Chattanooga has something for everyone. If you don’t see your favorite spot in the list, please ", createVNode("a", {
            href: "mailto:jack@thingshappening.com",
            target: "_blank",
            children: "reach out"
          }), "."]
        })
      }), createVNode("div", {
        class: "pb-3",
        children: [createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "1."
                })
              }), "\nThe Woodshop Listening Room"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: "A casual and intimate neighborhood bar located off of St Elmo Ave, this venue looks like another house in the historic district upon visiting you’ll quickly see through its humble veneer. It’s essentially a dedicated music venue that regularly draws a crowd from locals and visitors alike. Their emphasis on fostering community and nurturing local live music in Chattanooga makes them worth a visit in any season. The music selection varies but it tends to learn towards the bluegrass roots of Chattanooga."
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "2."
                })
              }), "\nJJ’s Bohemia"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["A dive bar music venue in Chattanooga that’s favored for its many musical performances, inviting staff and fun atmosphere. Self proclaimed ‘Chattanooga’s favorite little venue since 2006’ the bar has had a long run providing entertainment in the area. Check out their calendar on their ", createVNode("a", {
                href: "https://www.facebook.com/jjs.bohemia/",
                target: "_blank",
                children: "facebook page"
              })]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "3."
                })
              }), "\nThe Dragon’s Roast"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["Founded by musicians looking to create the music venue they wished existed. The musician’s origins are in heavy metal but their goal is to be a “crossroads of diverse melodies”. Calling out specifically to blues and bluegrass, but it certainly extends beyond. Check out their website for an updated ", createVNode("a", {
                href: "https://www.thedragonsroast.com/events/",
                target: "_blank",
                children: "live music schedule"
              }), "."]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "4."
                })
              }), "\nBuds Sports Bar"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["Just outside Chattanooga in East Ridge, TN. On weekends they host some of the best live bands in the area. Advanced notice,it can get pretty rockin some nights, so when you’re ready bring out your favorite old band t shirt and have some fun on a Friday or Saturday watching the bands Aunt Betty or Local Slim (sometimes others too). Check ", createVNode("a", {
                href: "https://budssportsbar.com/events-live-music-chattanooga/",
                target: "_blank",
                children: "their calendar"
              }), " for more events and details."]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "5."
                })
              }), "\nSluggo’s North Vegetarian Cafe"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["A vegan diner and full bar on Cherokee Blvd in Northshore that doubles as a longtime home for punk, indie, and underground shows in its downstairs lounge. Grab nachos and a beer upstairs, then head down for a loud one. The 21+ lounge runs Wednesday through Saturday nights; check their ", createVNode("a", {
                href: "https://sluggos.weebly.com/",
                target: "_blank",
                children: "show calendar"
              }), " before you go."]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2 pb-2",
            children: createVNode(_components.p, {
              children: "Honorable mentions"
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["There is no shortage of bars and restaurants offering musical performances on various days. If one of the previously mentioned venues doesn’t have a show for you some other places to check out include ", createVNode("a", {
                href: "https://linktr.ee/Cherrystreettavern",
                target: "_blank",
                children: "Cherry Street Tavern"
              }), ", ", createVNode("a", {
                href: "https://www.puckettsrestaurant.com/music#chattanoogamusic",
                target: "_blank",
                children: "Puckett’s"
              }), ", ", createVNode("a", {
                href: "https://www.hificlydeschattanooga.com/live-music",
                target: "_blank",
                children: "Hi-Fi Clyde’s"
              }), ", ", createVNode("a", {
                href: "https://www.tremonttavern.com/social-calendar-events",
                target: "_blank",
                children: "Tremont Tavern (Tuesday open mic)"
              }), ", ", createVNode("a", {
                href: "https://www.facebook.com/barwatsonchattanoogatn/",
                target: "_blank",
                children: "Bar Watson"
              }), "."]
            })
          })]
        })]
      })]
    }), createVNode("div", {
      style: "overflow-x: auto;",
      children: createVNode("table", {
        border: "1",
        style: "width: 100%; border-collapse: collapse;",
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Venue"
          }), createVNode("th", {
            children: "Description"
          }), createVNode("th", {
            children: "Music Type"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "The Woodshop Listening Room"
          }), createVNode("td", {
            children: "Intimate neighborhood bar with a focus on local live music"
          }), createVNode("td", {
            children: "Bluegrass, Folk"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "JJ’s Bohemia"
          }), createVNode("td", {
            children: "Dive bar with a long-standing reputation for live performances"
          }), createVNode("td", {
            children: "Various"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "The Dragon’s Roast"
          }), createVNode("td", {
            children: "Founded by musicians to create an inclusive music venue"
          }), createVNode("td", {
            children: "Blues, Bluegrass, Heavy Metal"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Bud’s Sports Bar"
          }), createVNode("td", {
            children: "Hosts rock bands on weekends in East Ridge, TN"
          }), createVNode("td", {
            children: "Rock"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Sluggo’s North Vegetarian Cafe"
          }), createVNode("td", {
            children: "Vegan cafe and bar with a downstairs underground music room"
          }), createVNode("td", {
            children: "Punk, Indie, Underground"
          })]
        })]
      })
    }), createVNode("div", {
      class: "mb-12 mt-12 flex flex-col justify-center items-center",
      children: [createVNode($$OptimizedImage, {
        src: "/images/chattanooga_guides/live-music/woodshop2.webp",
        alt: "Exterior photo of The Woodshop"
      }), createVNode("div", {
        class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
        children: createVNode("em", {
          children: "Exterior photo of The Woodshop"
        })
      })]
    }), createVNode("section", {
      class: "text-xl",
      id: "recurring-events",
      children: [createVNode("div", {
        class: "pb-5",
        children: createVNode("h2", {
          children: ["Recurring Music Events", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      }), createVNode("div", {
        class: "pb-10",
        children: createVNode(_components.p, {
          children: "Do you think free weekend outdoor concerts in the summer sound like a good time? If you answered no, I’m not sure this guide is for you, but if you’re still with me, I’ve great news; Chattanooga has a handful of recurring concert series in the warmer months. Friday nights bring Nightfall downtown, and most Saturdays you’ll have your choice between a riverfront live show, one at the popular marketplace of Ooltewah’s Cambridge Square, or the weekend market crowd. No matter which you choose, these concerts are a great way to enjoy live music while enjoying warm evenings in Chattanooga."
        })
      }), createVNode("div", {
        class: "pb-3",
        children: [createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "1."
                })
              }), "\nTVFCU Riverfront Nights"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["To celebrate the summer TVFCU puts on a Saturday evening ", createVNode("a", {
                href: "https://www.riverfrontnights.com/",
                target: "_blank",
                children: "concert series"
              }), " in Chattanooga for FREE. The concerts feature the area’s talented local artists performing from Memorial Day - Labor Day at Ross’s Landing in downtown Chattanooga. Arrive early and stroll the ", createVNode("a", {
                href: "/chattanooga/guides/outdoors?tags=greenway",
                target: "_blank",
                children: "Tennessee Riverwalk"
              }), " before the show. Vendors are onsite with food and drink items for purchase, concessions start at 6PM and opening performance at 7PM. Don’t forget to pack a beach towel and/or your favorite lawn chair. The concert goes on rain or shine so be prepared with an umbrella should it be needed."]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "2."
                })
              }), "\nNightfall"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["Chattanooga’s original free concert series, now in its 39th season. Every Friday night from May through July, touring national and international acts fill Miller Plaza and Miller Park downtown. Food trucks, artisan vendors, and lawn games open at 6PM and music kicks off at 7PM. Bring a chair, grab a bite, and settle in. Check the ", createVNode("a", {
                href: "https://www.nightfallchattanooga.com/",
                target: "_blank",
                children: "lineup"
              }), " before you head out."]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "3."
                })
              }), "\nCambridge Square"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["On Saturday nights from April - October venture up to Ooltewah, Tennessee for local live music on an outdoor stage. Music genres you might find include rock, country, jazz, or bluegrass. The events are weather permitting so be sure to check before heading out. With a rotating lineup of local musicians, each weekend offers a little something different for all types of music lovers. Check their website for an ", createVNode("a", {
                href: "https://www.cambridgesquaretn.com/music-1",
                target: "_blank",
                children: "updated schedule"
              }), " as the warmer months near."]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "4."
                })
              }), "\nChattanooga River Market"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["Saturday’s during the spring, summer, and fall the Chattanooga River Market hosts vendors selling artisan goods and produce. More often than not the event also includes a live musical performance from a local artist. The relaxed atmosphere makes it a great way to spend a weekend morning while supporting local businesses and musicians. Find more about their schedules on their ", createVNode("a", {
                href: "https://chattanoogamarket.com/",
                target: "_blank",
                children: "website"
              }), "."]
            })
          })]
        })]
      })]
    }), createVNode("div", {
      class: "pb-10 text-xl",
      children: ["If you like being outdoors for concerts, there’s a good chance you’d like outdoor activities at the ", createVNode("a", {
        href: "/chattanooga/guides/cloudland-canyon",
        target: "_blank",
        children: "best state park in Georgia"
      }), " just outside of Chattanooga. Or explore our full ", createVNode("a", {
        href: "/chattanooga/guides/outdoors",
        target: "_blank",
        children: "Chattanooga Outdoors Guide"
      }), " with 71 adventures."]
    }), createVNode("div", {
      style: "overflow-x: auto;",
      children: createVNode("table", {
        border: "1",
        style: "width: 100%; border-collapse: collapse;",
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Event"
          }), createVNode("th", {
            children: "Location"
          }), createVNode("th", {
            children: "Music Genre"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "TVFCU Riverfront Nights"
          }), createVNode("td", {
            children: "Ross’s Landing"
          }), createVNode("td", {
            children: "Various Local Artists"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Nightfall"
          }), createVNode("td", {
            children: "Miller Plaza, Downtown"
          }), createVNode("td", {
            children: "Various (National & International)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Cambridge Square"
          }), createVNode("td", {
            children: "Ooltewah, TN"
          }), createVNode("td", {
            children: "Rock, Country, Jazz, Bluegrass"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Chattanooga River Market"
          }), createVNode("td", {
            children: "Downtown Chattanooga"
          }), createVNode("td", {
            children: "Acoustic, Folk, Indie"
          })]
        })]
      })
    }), createVNode("section", {
      class: "text-xl",
      id: "larger-venues",
      children: [createVNode("div", {
        class: "pb-5",
        children: createVNode("h2", {
          children: ["Larger Music Venues", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      }), createVNode("div", {
        class: "pb-10",
        children: createVNode(_components.p, {
          children: "Are you looking for bigger named acts, high quality production, and a seat to yourself? There’s a few options in Chattanooga and a lot of them take place in beautifully architected, historic theatres."
        })
      }), createVNode("div", {
        class: "pb-10",
        children: createVNode(_components.p, {
          children: "Do the acoustics, kinder prices, and diverse lineups of a mid-sized venue sound like it’s more up your alley? Chattanooga’s got your bases covered."
        })
      }), createVNode("div", {
        class: "pb-3",
        children: [createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "1."
                })
              }), "\nTivoli Theatre Foundation"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["This nonprofit umbrella runs three historic downtown venues: the Soldiers & Sailors Memorial Auditorium, the Tivoli Theatre, and the Walker Theatre. Between them they bring household national names to the stage while making room for local talent, all in beautifully restored rooms. Heads up: the 1921 Tivoli is in the middle of a major renovation, so Memorial Auditorium is carrying most of the big shows for now. Check their ", createVNode("a", {
                href: "https://tivolichattanooga.com/",
                target: "_blank",
                children: "calendar"
              }), " for what’s playing where."]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "2."
                })
              }), "\nThe Signal"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["An event space and concert hall in downtown Chattanooga, The Signal is located on the historic grounds of the Chattanooga Choo Choo. This venue draws national music talent for live performances and keeps a regularly updated event calendar on their website, check there for the ", createVNode("a", {
                href: "https://www.thesignaltn.com/tickets",
                target: "_blank",
                children: "latest details"
              }), ". Attendees 14 and under must be accompanied by an adult"]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "3."
                })
              }), "\nBarrelhouse Ballroom"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["Self described as trying to fill the need for a mid-sized music venue in the enthusiastic Chattanooga music community, the Barrelhouse Ballroom hosts regular music events throughout the year. They aim to bring good people, music, food and drink together in one place for a reasonable price. Check their calendar ", createVNode("a", {
                href: "https://www.barrelhouseballroom.com/",
                target: "_blank",
                children: "here"
              }), "."]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "4."
                })
              }), "\nSongbirds"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["This nonprofit music foundation has a few different ongoing projects including Guitars for Kids; which aims to help music funding in public schools, Write to Rock which gives elementary school children a chance to write music with professional songwriters, Project Guitar! which brings school groups into the foundation to participate in STEM based Activities. The foundation is partially funded through live events, many of them music focused, which you can see on their website ", createVNode("a", {
                href: "https://songbirdsfoundation.org/event-calendar",
                target: "_blank",
                children: "here"
              }), "."]
            })
          })]
        }), createVNode("div", {
          class: "pb-10",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "5."
                })
              }), "\nBarking Legs Theater"]
            })
          }), createVNode("div", {
            children: createVNode(_components.p, {
              children: ["An intimate arts venue on Dodds Ave that’s been at it since 1993, seating around 150 in a room where you’re never far from the stage. The lineup leans eclectic; jazz, big band, Irish traditional, and boundary-pushing acts you won’t catch anywhere else in town, with Wednesday jazz nights and a Monday Nite Big Band among the regulars. See what’s on their ", createVNode("a", {
                href: "https://barkinglegs.org/",
                target: "_blank",
                children: "calendar"
              }), "."]
            })
          })]
        })]
      })]
    }), createVNode("div", {
      style: "overflow-x: auto;",
      children: createVNode("table", {
        border: "1",
        style: "width: 100%; border-collapse: collapse;",
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Venue"
          }), createVNode("th", {
            children: "Description"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Tivoli Theatre Foundation"
          }), createVNode("td", {
            children: "Three historic venues for national and local performances"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "The Signal"
          }), createVNode("td", {
            children: "Mid-sized concert hall attracting national talent"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Barrelhouse Ballroom"
          }), createVNode("td", {
            children: "Aims to be Chattanooga’s premier mid-sized venue"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Songbirds"
          }), createVNode("td", {
            children: "A nonprofit supporting music education and events"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Barking Legs Theater"
          }), createVNode("td", {
            children: "Intimate ~150-seat venue for jazz, big band, and eclectic acts"
          })]
        })]
      })
    }), createVNode("section", {
      class: "text-xl",
      id: "festivals",
      children: [createVNode("div", {
        class: "pb-5",
        children: createVNode("h2", {
          children: ["Festivals", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      }), createVNode("div", {
        class: "pb-10",
        children: createVNode(_components.p, {
          children: "If you’re looking for the excitement of a music festival, Chattanooga has a few options for you. Some of the local favorites haven’t been going on recently, but there’s a couple new kids in town that may grab your attention. See your favorite performances, discover new artists, and feel the energy of a multistage festival at one of this year’s  music festivals."
        })
      }), createVNode("div", {
        class: "pb-3",
        children: [createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "1."
                })
              }), "\nIBMA World of Bluegrass"]
            })
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: ["After decades in Raleigh, NC, Chattanooga is now home to the International Bluegrass Music Association’s World of Bluegrass through at least 2027. The 2026 edition runs October 20-24, anchored at the Chattanooga Convention Center, and packs in a business conference, the Bluegrass Ramble showcases across downtown venues, the Bluegrass Music Awards at Soldiers & Sailors Memorial Auditorium, and a two-day Bluegrass Live! festival to close it out. It draws tens of thousands to town, so expect a little extra traffic over the five days. Check the ", createVNode("a", {
                href: "https://worldofbluegrass.org/",
                target: "_blank",
                children: "schedule"
              }), " for lineups."]
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "2."
                })
              }), "\nSmart Music Fest"]
            })
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: ["Smart Music Fest debuted at Ross’s Landing in May 2025, bringing pop-eclectic and electronic music to four stages downtown over a long weekend. The spread goes beyond the music with an Art-Garden of installations and sculptures, roughly 30 food trucks, and a craft beer tent. Dates for the next edition haven’t been locked in, so check their ", createVNode("a", {
                href: "https://smartmusicfest.com/",
                target: "_blank",
                children: "website"
              }), " for the latest."]
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "3."
                })
              }), "\n3 Sisters Festival"]
            })
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "A free bluegrass festival held at Ross’s Landing in the fall, with the stage set right over the Tennessee River. A Chattanooga tradition since 2007, this two-day event mixes local and regional pickers with national headliners; the 2026 lineup (October 2-3) brings Sam Bush, The Travelin’ McCourys, and Rhonda Vincent and the Rage. Vendors are local, so you can support Chattanooga businesses while you grab food and drink."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "text-3xl pb-2",
            children: createVNode(_components.p, {
              children: [createVNode("span", {
                class: "color-pink mr-2",
                children: createVNode("b", {
                  children: "4."
                })
              }), "\nRiverbend and Moon River Festivals"]
            })
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: "The bad news for fans of these two Chattanooga staples: neither is back on the riverfront. Riverbend, the city’s original music festival, remains on hiatus, and its nonprofit organizer Friends of the Festival now points to the free Riverfront Nights series as its flagship summer event. Moon River returns in 2026, but as “Moon River At Sea,” a November cruise out of Miami rather than a stop in town. We’ll update this guide if either comes home."
            })
          })]
        })]
      })]
    }), createVNode("div", {
      style: "overflow-x: auto;",
      children: createVNode("table", {
        border: "1",
        style: "width: 100%; border-collapse: collapse;",
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Festival"
          }), createVNode("th", {
            children: "Dates"
          }), createVNode("th", {
            children: "Music Type"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "IBMA World of Bluegrass"
          }), createVNode("td", {
            children: "Oct 20-24, 2026"
          }), createVNode("td", {
            children: "Bluegrass"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Smart Music Fest"
          }), createVNode("td", {
            children: "TBA"
          }), createVNode("td", {
            children: "Pop-Eclectic"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "3 Sisters Festival"
          }), createVNode("td", {
            children: "Oct 2-3, 2026"
          }), createVNode("td", {
            children: "Bluegrass"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Riverbend & Moon River"
          }), createVNode("td", {
            children: "On hiatus / relocated"
          }), createVNode("td", {
            children: "Various"
          })]
        })]
      })
    }), createVNode("section", {
      class: "text-xl",
      children: [createVNode("div", {
        class: "pb-5",
        children: createVNode("h2", {
          children: ["Outro", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      }), createVNode("div", {
        class: "pb-3",
        children: createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "pb-10",
            children: createVNode(_components.p, {
              children: "There’s plenty of live music to be enjoyed by locals and visitors alike in Chattanooga. Come to town for a festival. Or go see a free concert at the riverfront. If you’re ready for more, check out lineups at Barrelhouse Ballroom. Maybe see a larger show in a historic theatre. Just have a beer and enjoy a casual show, Chattanooga has an option for everyone."
            })
          }), createVNode("div", {
            class: "pb-10",
            children: createVNode(_components.p, {
              children: "Get your tickets (or enjoy the free concerts) we’ve listed. The artists and city would love for you to get out and show your support. If you feel like we’ve missed anything, do not hesitate to reach out; the details provided here are subject to change."
            })
          })]
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
            href: "/chattanooga/guides/performance-arts",
            target: "_blank",
            children: "Performance Arts"
          })
        }), createVNode("li", {
          children: createVNode("a", {
            href: "/chattanooga/guides/live-sports",
            target: "_blank",
            children: "Live Sports"
          })
        }), createVNode("li", {
          children: createVNode("a", {
            href: "/chattanooga/guides/confections",
            target: "_blank",
            children: "Sweet Treats"
          })
        }), createVNode("li", {
          children: createVNode("a", {
            href: "/chattanooga/guides/tours",
            target: "_blank",
            children: "Guided Tours"
          })
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
const url = "/chattanooga/guides/live-music";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/live-music.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/live-music.mdx";
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
