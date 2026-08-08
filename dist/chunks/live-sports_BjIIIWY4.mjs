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
  "title": "A Playbook for Chattanooga Live Sports",
  "lastUpdated": "03/01/2026",
  "originalDate": "01/24/2025",
  "readTime": "8 minutes",
  "tags": [{
    "type": "guide",
    "tag": "longform"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "Guide to live sports in Chattanooga including the Lookouts, UTC Mocs, Chattanooga FC, basketball, and sports bars for watching games.",
  "iconPath": "../../../images/icons-new/sport.png",
  "images": [{
    "src": "/images/chattanooga_guides/sports/lookouts_game.png",
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
        href: "/pdfs/chattanooga/live-sports.pdf",
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
      class: "pb-2 text-xl",
      children: [createVNode("section", {
        class: "text-xl",
        children: [createVNode("div", {
          class: "pb-3",
          children: createVNode("h2", {
            class: "text-5xl",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Overview", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "It’s the top of the first inning, the Chattanooga Lookouts are taking on the New York Yankees in a 1931 exhibition game at Engel Stadium.\nLeaving the batters box is George Herman “The Babe” Ruth, down on strikes. Strutting to the plate now is Henry Louis Gehrig, Lou for short.\nOur pitcher, takes in the moment but just for a moment, then quickly recalibrates as Lou has taken his position inside the four chalk lines.\nAfter a baseball duel of sorts, Lou also goes down on strikes, and our pitcher, a hero for a captured moment in time. This hero is none other than locally grown Jackie Mitchell.\nShe, yes she, turned 17 years old weeks earlier. A born and raised Chattanoogan."
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Now imagine if you were around in 1931 and missed this momentous occasion? A chilling thought. We don’t want that to happen for you, so we put together this guide to help you navigate the Chattanooga live sports menu."
          })
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/sports/att_field2.webp",
          alt: "View from outside At&t Field baseball stadium"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "AT&T Field"
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
                  href: "#football",
                  children: "Football"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#soccer",
                  children: "Soccer"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#basketball",
                  children: "Basketball"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#baseball",
                  children: "Baseball"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#other-teams",
                  children: "Other Teams"
                })
              }), createVNode("div", {
                class: "pb-4",
                children: createVNode("a", {
                  class: "text-3xl gradient-text",
                  href: "#sports-bars",
                  children: "Sports Bars"
                })
              })]
            })
          })]
        })
      }), createVNode("section", {
        class: "text-xl pb-2",
        children: createVNode("div", {
          children: createVNode("h2", {
            id: "football",
            class: "text-4xl mb-2",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Football", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        })
      }), createVNode("section", {
        class: "text-xl",
        children: createVNode("div", {
          class: "pb-7",
          children: [createVNode("div", {
            children: [createVNode("div", {
              class: "text-3xl pb-5",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "color-pink mr-2",
                  children: createVNode("b", {
                    children: "1."
                  })
                }), "\nUT Chattanooga (UTC) Men’s FCS Football"]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "The UTC Mocs football team plays in the Southeastern Conference (SoCon). Since 1982 the program has competed in the NCAA Division 1-AA or FCS leagues, in its entirety the program has been active since 1904. The most notable alumni to play for the program is former NFL Hall of Fame player Terrell Owens who played at UTC from 1992-1995 and now has a dedicated street, Terrell Owens Way, in town."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "The Mocs football team plays at Finley Stadium in the heart of Chattanooga, the stadium can hold a little over 20,000 people and features an AstroTurf field. The Mocs football season runs from late August through late November."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: ["Finley Stadium also periodically hosts ", createVNode("a", {
                  href: "/chattanooga/guides/live-music",
                  target: "_blank",
                  children: "live music"
                }), " events throughout the year, check out our guide on the Chattanooga live music scene ", createVNode("a", {
                  href: "/chattanooga/guides/live-music",
                  target: "_blank",
                  children: "here"
                }), "."]
              })
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📍"
              }), createVNode("a", {
                href: "https://www.google.com/maps/place/Finley+Stadium/@35.0363792,-85.3184584,16z/data=!3m1!4b1!4m6!3m5!1s0x88605c2a7a055591:0x94280492e596d7bc!8m2!3d35.0363792!4d-85.3158835!16zL20vMDlkNHkz?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Finley Stadium"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "🎟️"
              }), createVNode("a", {
                href: "https://gomocstickets.evenue.net/list/UTCFB",
                target: "_blank",
                children: "Purchase tickets here"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📅"
              }), createVNode("a", {
                href: "https://gomocs.com/sports/football/schedule/2024",
                target: "_blank",
                children: "Updated Schedule."
              })]
            }), createVNode("div", {
              class: "pb-3 pt-5",
              children: [createVNode("span", {
                class: "font-bold",
                children: "Tip for the best seating at Finley Stadium:"
              }), createVNode("div", {
                class: "pb-5",
                children: "Want to join in on more of the action? You should sit on the east side student section where the energy is palpable. If you prefer a slightly calmer, shaded view, try the west-side seats closer to the press box."
              })]
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: [createVNode("div", {
              class: "text-3xl pb-5",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "color-pink mr-2",
                  children: createVNode("b", {
                    children: "2."
                  })
                }), "\nHigh School Football"]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "Friday night lights in the Chattanooga area offers a handful of different options for watching local talent compete for bragging rights and often state championships."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "Some notable programs in the area include the Baylor Red Raiders, McCallie Blue Tornado, Chattanooga Central HS, East Hamilton Hurricanes and the Signal Mountain Eagles. Baylor and McCallie are noted rivals and last competed against one another in the state championship in 2024."
              })
            }), createVNode("div", {
              children: createVNode(_components.p, {
                children: "Finley Stadium, home of the Chattanooga FC and UT Chattanooga Mocs Football regularly hosts important games, offering a unique opportunity for the young athletes to showcase their talent on a professional field amongst their schools passionate fan bases."
              })
            })]
          })]
        })
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/sports/terrell_owens_way.webp",
          alt: "Terrell Owens Way street sign"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Terrell Owens Way in Chattanooga"
          })
        })]
      }), createVNode("section", {
        class: "text-xl pb-2",
        children: createVNode("div", {
          children: createVNode("h2", {
            id: "soccer",
            class: "text-4xl mb-2",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Soccer", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        })
      }), createVNode("section", {
        class: "text-xl",
        children: createVNode("div", {
          class: "pb-3",
          children: [createVNode("div", {
            class: "pb-5",
            children: [createVNode("div", {
              class: "text-3xl pb-5",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "color-pink mr-2",
                  children: createVNode("b", {
                    children: "1."
                  })
                }), "\nChattanooga Football Club (FC)"]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "Of the two professional soccer programs in the area the Chattanooga FC was the first, founded in 2009. The team has participated in various leagues over the years, prior to 2024 the team played in the National Independent Soccer Association, but will now be playing in the MLS Next Pro league."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: ["According to their ", createVNode("a", {
                  href: "https://www.mlsnextpro.com/chattanoogafc/",
                  target: "_blank",
                  children: "online schedule"
                }), " the season runs from March - October.  Chattanooga FC plays at Finley Stadium which holds roughly 20,000 attendees in downtown Chattanooga and has a devoted fan base locally known as the Chattahooligans."]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "In 2019 the club became one of the first American sports teams to offer ownership shares of the club to fans, allowing fans to match their emotional investment with a financial investment in their local team."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: ["An interesting fact about Chattanooga FC, one of its founders, Marshall Brock, is also the original owner of ", createVNode("a", {
                  href: "/chattanooga/guides/confections#ice-cream",
                  target: "_blank",
                  children: "Clumpies Ice Cream"
                }), " before it was later purchased by Rock City Inc."]
              })
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📍"
              }), createVNode("a", {
                href: "https://www.google.com/maps/place/Finley+Stadium/@35.0363792,-85.3184584,16z/data=!3m1!4b1!4m6!3m5!1s0x88605c2a7a055591:0x94280492e596d7bc!8m2!3d35.0363792!4d-85.3158835!16zL20vMDlkNHkz?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Finley Stadium"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "🎟️"
              }), createVNode("a", {
                href: "https://www.mlsnextpro.com/chattanoogafc/tickets/",
                target: "_blank",
                children: "Purchase tickets here"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📅"
              }), createVNode("a", {
                href: "https://www.mlsnextpro.com/chattanoogafc/schedule/matches",
                target: "_blank",
                children: "Updated Schedule."
              })]
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: [createVNode("div", {
              class: "text-3xl pb-5",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "color-pink mr-2",
                  children: createVNode("b", {
                    children: "2."
                  })
                }), "\nChattanooga Red Wolves SC"]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "The more recent pro soccer club was founded in 2018 and was one of the inaugural members of the USL League One, a third-tier US pro soccer league. The team hosts games at CHI Memorial Stadium and their teams schedule runs from March thru October."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: ["The newer stadium can support roughly 5,500 fans and the club offers several family-friendly events throughout the year like Rusty’s Birthday Bash or an Easter Egg hunt. Check their team ", createVNode("a", {
                  href: "https://www.chattanoogaredwolves-sc.com/",
                  target: "_blank",
                  children: "schedule"
                }), " for any upcoming events and details."]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "In addition to being an early member of the USL League One, the SC also was a founding team in the USL W League in 2018. The Lady Red Wolves also host their games at CHI Memorial Stadium, Tennessee’s first professional soccer-specific venue."
              })
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📍"
              }), createVNode("a", {
                href: "https://www.google.com/maps/place/CHI+Memorial+Stadium/@34.997852,-85.2137349,17z/data=!3m1!4b1!4m6!3m5!1s0x88606781344fb64b:0xd59313c12b67db08!8m2!3d34.997852!4d-85.21116!16s%2Fg%2F11j370w_34?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "CHI Memorial Stadium"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "🎟️"
              }), createVNode("a", {
                href: "https://www.chattanoogaredwolves-sc.com/tickets/",
                target: "_blank",
                children: "Purchase tickets here"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📅"
              }), createVNode("a", {
                href: "https://www.chattanoogaredwolves-sc.com/2024-schedule/",
                target: "_blank",
                children: "Updated Schedule."
              })]
            })]
          })]
        })
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/sports/finley_stadium.webp",
          alt: "Finley Stadium club entrance"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Finley Stadium"
          })
        })]
      }), createVNode("section", {
        class: "text-xl pb-2",
        children: createVNode("div", {
          children: createVNode("h2", {
            id: "basketball",
            class: "text-4xl mb-2",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Basketball", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        })
      }), createVNode("section", {
        class: "text-xl",
        children: [createVNode("div", {
          class: "pb-3",
          children: [createVNode("div", {
            class: "pb-5",
            children: [createVNode("div", {
              class: "text-3xl pb-5",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "color-pink mr-2",
                  children: createVNode("b", {
                    children: "1."
                  })
                }), "\nUT Chattanooga Men’s Division 1 Basketball"]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "UTC Men’s hoops has been a member of Division 1 sports since 1977. The team actively competes in the Southeastern Conference (SoCon). They’ve had 12 appearances in the NCAA tournament, the last being in 2022. The furthest they’ve advanced is to the sweet sixteen in 1997 where they defeated Georgia and Illinois before being knocked out by Providence."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: ["One of the more notable professional players to come out of the program is Gerald Wilkings who played 13 NBA seasons from 1985-1998. You can find a list of active pro players ", createVNode("a", {
                  href: "https://gomocs.com/sports/2024/1/31/mocs-in-pro-hoops.aspx",
                  target: "_blank",
                  children: "here"
                }), ". The Mocs’ games are played at McKenzie Arena and the regular season runs from November - February."]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "The Mocs men’s team has won 12 SoCon conference tournament titles beginning in 1981 and the most recent coming in 2022. Their most successful campaign came in the 1996-1997 season where they advanced to the NCAA Division 1 Tournament after entering as a 14 seed. They defeated University of Georgia (3 seed) in the opener and University of Illinois (8 seed) in the round of 32 before losing to Providence in the Sweet Sixteen."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "A fun note to end on, this team has made the National Invitation Tournament (NIT) 4 times their last being in 1987 and their best coming in 1985 where they advanced to the quarterfinals."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "In recent years the men’s basketball team has been contention for conference championships, consider attending a later season game, when the student section and local fans alike bring that extra team spirit that makes a stadium come to life."
              })
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📍"
              }), createVNode("a", {
                href: "https://www.google.com/maps/place/McKenzie+Arena/@35.0503624,-85.3035064,17z/data=!4m14!1m7!3m6!1s0x88605e71c745b73b:0xa4162a9dd1d0d9f0!2sMcKenzie+Arena!8m2!3d35.0503624!4d-85.3009315!16zL20vMDY2NGN6!3m5!1s0x88605e71c745b73b:0xa4162a9dd1d0d9f0!8m2!3d35.0503624!4d-85.3009315!16zL20vMDY2NGN6?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "McKenzie Arena"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "🎟️"
              }), createVNode("a", {
                href: "https://gomocstickets.evenue.net/events/MBSG",
                target: "_blank",
                children: "Purchase tickets here"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📅"
              }), createVNode("a", {
                href: "https://gomocs.com/sports/mens-basketball/schedule/2023-24",
                target: "_blank",
                children: "Updated Schedule."
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("b", {
                children: "Entrance note:"
              }), createVNode("span", {
                children: [" McKenzie Arena has a clear bag policy for entrance, more on that ", createVNode("a", {
                  href: "https://gomocs.com/sports/2019/9/24/clear-bag-policy.aspx",
                  target: "_blank",
                  children: "here"
                }), "."]
              })]
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: [createVNode("div", {
              class: "text-3xl pb-5",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "color-pink mr-2",
                  children: createVNode("b", {
                    children: "2."
                  })
                }), "\nUT Chattanooga Women’s Division 1 Basketball"]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "UTC Women’s basketball has been competing since 1977 and is actively a member of the Southern Conference (SoCon). They’ve had 17 NCAA tournament appearances in that time, with the furthest they’ve advanced being the final 32 in 2004 after defeating Rutgers in the first round before losing to Vanderbilt."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "The Lady Mocs had a fantastic run from 2013-2017, winning five straight SoCon tournaments. The Lady Mocs play home games at McKenzie Arena. The teams regular season runs from November thru February."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "Since the teams being active, the Lady Mocs have won 20 SoCon championships. That’s good for the most in conference history. Their most recent conference tournament victory came in 2024 over UNC Greensboro. With these tournament titles, the team has been in 17 NCAA tournaments with the furthest they’ve advanced being the final 32."
              })
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📍"
              }), createVNode("a", {
                href: "https://www.google.com/maps/place/McKenzie+Arena/@35.0503624,-85.3035064,17z/data=!4m14!1m7!3m6!1s0x88605e71c745b73b:0xa4162a9dd1d0d9f0!2sMcKenzie+Arena!8m2!3d35.0503624!4d-85.3009315!16zL20vMDY2NGN6!3m5!1s0x88605e71c745b73b:0xa4162a9dd1d0d9f0!8m2!3d35.0503624!4d-85.3009315!16zL20vMDY2NGN6?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "McKenzie Arena"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "🎟️"
              }), createVNode("a", {
                href: "https://gomocstickets.evenue.net/list/UTCWB",
                target: "_blank",
                children: "Purchase tickets here"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📅"
              }), createVNode("a", {
                href: "https://gomocs.com/sports/womens-basketball/schedule",
                target: "_blank",
                children: "Updated Schedule."
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("b", {
                children: "Entrance note:"
              }), createVNode("span", {
                children: [" McKenzie Arena has a clear bag policy for entrance, more on that ", createVNode("a", {
                  href: "https://gomocs.com/sports/2019/9/24/clear-bag-policy.aspx",
                  target: "_blank",
                  children: "here"
                }), "."]
              })]
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: [createVNode("div", {
              class: "text-3xl pb-5",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "color-pink mr-2",
                  children: createVNode("b", {
                    children: "3."
                  })
                }), "\nChattanooga Strike Men’s ABA team"]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "Joining the American Basketball Association men’s professional basketball league in 2024 are the Chattanooga Strike."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "The league itself is a relaunch of the original ABA which merged with the NBA in 1976. Their 20 game schedule runs from late October - February, home games being played at Midtown Arena. Some of the other local teams they’ll be matched up against in coming years include the Atlanta Aliens and the Stone Mountain Strong Steppers."
              })
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📍"
              }), createVNode("a", {
                href: "https://www.google.com/maps/place/Midtown+Arena/@35.018558,-85.2378591,17z/data=!4m15!1m8!3m7!1s0x8860672697b78b9f:0xd4b515abe7ece7e0!2s4201+Cherryton+Dr,+Chattanooga,+TN+37411!3b1!8m2!3d35.018558!4d-85.2352842!16s%2Fg%2F11b8vc2f_k!3m5!1s0x886067f812cf2ef1:0x8dcb30482d3d8205!8m2!3d35.0180328!4d-85.2343397!16s%2Fg%2F11hpx584yj?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Midtown Arena"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📅"
              }), createVNode("a", {
                href: "https://strikebasketball.com/schedule-tickets/",
                target: "_blank",
                children: "Schedule and Tickets."
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "font-bold",
                children: "Interesting ABA rule variation:"
              }), createVNode("div", {
                class: "pb-5",
                children: "If a player doesn’t get the ball over half court in seven seconds, it results in a turnover and a 3D light is lit."
              }), createVNode("div", {
                children: "When the 3D light is on is when the real fun start, a two point shot is worth three points, a three point shot is worth four points, and a half court shot is worth five points. I’m pulling hard for some seven second violations"
              })]
            })]
          }), createVNode("div", {
            class: "pb-5",
            children: [createVNode("div", {
              class: "text-3xl pb-5",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "color-pink mr-2",
                  children: createVNode("b", {
                    children: "4."
                  })
                }), "\nCovenant College Men’s and Women’s Division III Basketball"]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "Interested in a game with a view? Watch the Scots of Covenant College play home games on top of Chattanooga’s famous Lookout Mountain. Find a seat closer to the and take a walk around campus afterwards."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "For the hoops junkie this could be a fun change of pace or just something new to do. Still in the NCAA, the Scots compete in the Collegiate Conference of the South (CCS) and their regular season runs from November - February."
              })
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📍"
              }), createVNode("a", {
                href: "https://www.google.com/maps/place/Barnes+Physical+Education+Center/@34.9612098,-85.3781206,18z/data=!4m14!1m7!3m6!1s0x88605b473f4d0235:0xdb2f9acfddd206a2!2sCovenant+College!8m2!3d34.9659852!4d-85.3744531!16zL20vMDMzeXow!3m5!1s0x88605b72721a53ed:0x31608065c8bf66d8!8m2!3d34.9616994!4d-85.3765872!16s%2Fg%2F11jtc5gvc8?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Barnes PE Center"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📅"
              }), createVNode("a", {
                href: "https://athletics.covenant.edu/sports/mens-basketball/schedule",
                target: "_blank",
                children: "Men’s Schedule."
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📅"
              }), createVNode("a", {
                href: "https://athletics.covenant.edu/sports/womens-basketball/schedule",
                target: "_blank",
                children: "Women’s Schedule."
              })]
            })]
          })]
        }), createVNode("div", {
          class: "pb-3",
          children: [createVNode("span", {
            class: "font-bold",
            children: "A Game at Barnes:"
          }), createVNode("span", {
            children: " The small college atmosphere of a Scots basketball game can be a welcomed bit of novelty for those who haven’t been to a Division 3 game before. It’s high level basketball, on top of a mountain, at a great price; free for regular season games. I’m not so sure you’ll be able to top that."
          })]
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/sports/mckenzie_arena.webp",
          alt: "UTC Mocs McKenzie Arena and flags flying"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "McKenzie Arena"
          })
        })]
      }), createVNode("section", {
        class: "text-xl pb-2",
        children: createVNode("div", {
          children: createVNode("h2", {
            id: "baseball",
            class: "text-4xl mb-2",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Baseball", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        })
      }), createVNode("section", {
        class: "text-xl",
        children: createVNode("div", {
          class: "pb-3",
          children: createVNode("div", {
            class: "pb-5",
            children: [createVNode("div", {
              class: "text-3xl",
              children: createVNode(_components.p, {
                children: [createVNode("span", {
                  class: "color-pink mr-2",
                  children: createVNode("b", {
                    children: "1."
                  })
                }), "\nChattanooga Lookouts"]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "A historic and locally beloved AA professional baseball team in Chattanooga. Known by some baseball fans for the stunts ownership used to draw in fans including having a pair of camels behind the right field fence during the 1996 season."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "History also tells us that in 1931 the New York Yankees played an exhibition game against the Lookouts during which a 17 year-old girl, Jackie Mitchell, pitched for the Lookouts and struck out MLB legends Lou Gehrig and Babe Ruth. Store that fact for future trivia games. Games are played at AT&T Field."
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "The AA ballclub has featured a number of MLB stars throughout its history, recent notables include Joey Votto, Chris Sale, and Trevor Hoffman. Hall of Famers that have had stints with the program include Harmon Killebrew, Nolan Ryan, Satchel Paige, and Willie Stargell."
              })
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📍"
              }), createVNode("a", {
                href: "https://www.google.com/maps/place/AT%26T+Field/@35.0544016,-85.3165152,16z/data=!3m1!4b1!4m6!3m5!1s0x88605e8a079c197b:0xd0a02e07b4e90e9d!8m2!3d35.0544016!4d-85.3139403!16zL20vMDZiNnE0?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "AT&T Field"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "🎟️"
              }), createVNode("a", {
                href: "https://www.milb.com/chattanooga/tickets",
                target: "_blank",
                children: "Purchase tickets here"
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "pr-2",
                children: "📅"
              }), createVNode("a", {
                href: "https://www.milb.com/chattanooga/schedule/2025-04",
                target: "_blank",
                children: "Updated Schedule."
              })]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "font-bold"
              }), createVNode("span", {})]
            }), createVNode("div", {
              class: "pb-3",
              children: [createVNode("span", {
                class: "font-bold",
                children: "An Evening at AT&T Field:"
              }), createVNode("div", {
                class: "pb-5",
                children: createVNode(_components.p, {
                  children: "If you’ve been to minor league baseball games before, chances are they weren’t the most well attended and could get a little boring. You’ll probably have a different experience at a Lookouts game."
                })
              }), createVNode("div", {
                children: createVNode(_components.p, {
                  children: "The games are well attended and there’s often a fun promo. Years past promos have been $0.25 hot dog nights, $2 drink specials, and fireworks fridays."
                })
              })]
            })]
          })
        })
      }), createVNode("section", {
        class: "text-xl pb-2",
        children: createVNode("div", {
          children: createVNode("h2", {
            id: "other-teams",
            class: "text-4xl mb-2",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Other teams", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        })
      }), createVNode("section", {
        class: "text-xl",
        children: createVNode("div", {
          class: "pb-3",
          children: createVNode("div", {
            class: "pb-5",
            children: [createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: ["Haven’t found exactly what you’re looking for? Maybe you’d be more interested in Chattanooga’s women’s ", createVNode("a", {
                  href: "https://chattanoogarollerderby.com/",
                  target: "_blank",
                  children: "roller derby"
                }), " or ", createVNode("a", {
                  href: "https://www.noogarugby.com/",
                  target: "_blank",
                  children: "Nooga Ruby"
                }), " (mens and womens clubs) which runs from January - April."]
              })
            }), createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: ["Then there’s also ", createVNode("a", {
                  href: "https://www.cbatournament.com/",
                  target: "",
                  children: "bass fishing tournaments"
                }), " brought to you by the Chattanooga Bass Association for the sportsmen in the area throughout the year."]
              })
            }), createVNode("div", {
              children: createVNode(_components.p, {
                children: "We’d be remiss not to mention Boyd’s Speedway, a dirt race track which closed after being purchased for land in 2023. Boyd’s had been a local racing staple since 1952. Legend has it you can still hear the derby on warm Friday evenings in East Ridge in July, that’s what I’ve heard anyway."
              })
            })]
          })
        })
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/sports/camp_jordan_arena.webp",
          alt: "Camp Jordan Arena exterior view"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Camp Jordan Arena"
          })
        })]
      }), createVNode("section", {
        class: "text-xl pb-2",
        children: createVNode("div", {
          children: createVNode("h2", {
            id: "sports-bars",
            class: "text-4xl mb-2",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["Sports Bars", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          })
        })
      }), createVNode("section", {
        class: "text-xl",
        children: createVNode("div", {
          class: "pb-3",
          children: [createVNode("div", {
            className: "pb-5",
            children: createVNode(_components.p, {
              children: ["Chances are if you’re reading this guide you’d also like to know where you can watch UT on Saturdays or the NFL on Sundays. Some noted places of interest are\n", createVNode("a", {
                href: "https://www.google.com/maps/place/Parkway+Pourhouse/@35.0508679,-85.3237459,17z/data=!3m1!4b1!4m6!3m5!1s0x88605f34f4b67d79:0xe0592c8f0e8765bd!8m2!3d35.0508679!4d-85.321171!16s%2Fg%2F11g2xbxwzj?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Parkway Pourhouse"
              }), ",\n", createVNode("a", {
                href: "https://www.google.com/maps/place/Southside+Social/@35.0355387,-85.3171205,16z/data=!3m1!4b1!4m6!3m5!1s0x88605c2abec1acd9:0x18fd95a953eae443!8m2!3d35.0355387!4d-85.3145456!16s%2Fg%2F11b7d_1cv3?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Southside Social"
              }), ",\n", createVNode("a", {
                href: "https://www.google.com/maps/place/Tremont+Tavern/@35.069562,-85.2920875,16z/data=!3m1!4b1!4m6!3m5!1s0x88605e376ed12489:0x463edc5342ba3d11!8m2!3d35.069562!4d-85.2895126!16s%2Fg%2F1tdcbjrc?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Tremont Tavern"
              }), ", and\n", createVNode("a", {
                href: "https://www.google.com/maps/place/Shady's+Corner/@35.0323977,-85.2980404,17z/data=!3m1!4b1!4m6!3m5!1s0x88605d1473da2a3b:0x13b66195e08ab3a5!8m2!3d35.0323977!4d-85.2954655!16s%2Fg%2F11txjlz7qg?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Shady’s Corner"
              }), "."]
            })
          }), createVNode("div", {
            class: "pb-5",
            children: createVNode(_components.p, {
              children: ["There’s also a ", createVNode("a", {
                href: "https://www.google.com/maps/place/Buffalo+Wild+Wings/@35.0552014,-85.311974,16z/data=!3m1!4b1!4m6!3m5!1s0x88605e6121da181d:0xf106b60501d55deb!8m2!3d35.0552014!4d-85.3093991!16s%2Fg%2F1tgxjsq6?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Buffalo Wild Wings"
              }), " downtown and another popular area is Camp Jordan in East Ridge, TN with sports bars ", createVNode("a", {
                href: "https://www.google.com/maps/place/Jonathan%E2%80%99s+Grille/@34.9922044,-85.2037104,16z/data=!3m1!4b1!4m6!3m5!1s0x886067a39dbe51e3:0x15e9395cc24d6ddb!8m2!3d34.9922044!4d-85.2011355!16s%2Fg%2F11j37xlmpp?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Jonathans Grille"
              }), " and ", createVNode("a", {
                href: "https://www.google.com/maps/place/Twin+Peaks/@34.9956199,-85.2042134,17z/data=!3m1!4b1!4m6!3m5!1s0x8860671d9586023d:0x959a5ae708d58430!8m2!3d34.9956199!4d-85.2016385!16s%2Fg%2F11s7402801?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
                target: "_blank",
                children: "Twin Peaks"
              }), " within walking distance of each other, this area is about a ten minute drive from downtown Chattanooga."]
            })
          })]
        })
      }), createVNode("section", {
        class: "pb-5",
        children: [createVNode("h2", {
          class: "text-4xl pb-5",
          style: "font-family: 'Libre Baskerville', serif;",
          children: "FAQs"
        }), createVNode("div", {
          children: [createVNode("div", {
            class: "font-bold pb-5",
            children: "What are the best family-friendly sports games?"
          }), createVNode("div", {
            class: "pb-5",
            children: "Most of the professional teams in the area have some form of kids events for different games. The Lookouts host a popular “Princess Night” where children are encouraged to dress up as their favorite princess. They also have a Kids Club, which costs $20, and then each member gets free admission to every Sunday home game. The Chattanooga FC hosts a “Star Wars Night” on May 4th and generally are deeply involved in local youth development."
          }), createVNode("div", {
            class: "font-bold pb-5",
            children: "How much do Chattanooga sports tickets cost?"
          }), createVNode("div", {
            class: "pb-5",
            children: "Individual games for MOCs basketball games are between $12-20. Lookouts baseball games can vary but tend to be between $10-15. Chattanooga FC home games average a little over $20 per ticket."
          }), createVNode("div", {
            class: "font-bold pb-5",
            children: "Are there free or cheap sports events?"
          }), createVNode("div", {
            children: "Compared to most major cities Chattanooga sports games are relatively affordable. If you’re looking for a free game, check out a Covenant College regular season home game."
          })]
        })]
      }), createVNode("section", {
        class: "text-xl",
        children: [createVNode("div", {
          class: "pb-5",
          children: createVNode("h2", {
            class: "text-4xl",
            style: "font-family: 'Libre Baskerville', serif;",
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
            children: [createVNode("div", {
              class: "pb-5",
              children: createVNode(_components.p, {
                children: "Chattanooga has a variety of collegiate, professional, and amateur sports all of whom would greatly appreciate local support so when you’re ready, get out and cheer on one of the many programs the city has to offer."
              })
            }), createVNode("div", {
              children: createVNode(_components.p, {
                children: "Did we miss your favorite Chattanooga sports team? Let us know, and we’ll add it to this guide."
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
              href: "/chattanooga/guides/live-music",
              target: "_blank",
              children: "Live Music"
            })
          }), createVNode("li", {
            children: createVNode("a", {
              href: "/chattanooga/guides/performance-arts",
              target: "_blank",
              children: "Performance Arts"
            })
          }), createVNode("li", {
            children: createVNode("a", {
              href: "/chattanooga/guides/outdoors",
              target: "_blank",
              children: "Outdoor Adventures"
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
const url = "/chattanooga/guides/live-sports";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/live-sports.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/live-sports.mdx";
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
