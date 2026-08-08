import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
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
  "title": "Weekend Hosting in Chattanooga: Choo Choo Edition",
  "originalDate": "02/22/2026",
  "published": false,
  "lastUpdated": "07/28/2026",
  "readTime": "8 minutes",
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "Tips and ideas for hosting friends and family in Chattanooga, centered around the Choo Choo and downtown. Where to stay, eat, and explore when you're the local guide.",
  "tags": [{
    "type": "guide",
    "tag": "around-the-city"
  }],
  "neighborhoods": ["Southside", "Downtown"],
  "bestFor": ["Weekend visitors", "First-time Chattanooga guests", "Staycation"],
  "seasonality": "Year-round",
  "images": [{
    "src": "/editorials/choo-choo/choo-choo-spring-gardens.jpg",
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
  return createVNode(Fragment, {
    children: [createVNode("script", {
      type: "application/ld+json",
      "set:html": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Weekend Hosting in Chattanooga: Choo Choo Edition",
        "description": "Tips and ideas for hosting friends and family in Chattanooga, centered around the Choo Choo and downtown.",
        "image": "https://thingshappening.com/editorials/choo-choo/chattanooga-choochoo-sign.jpg",
        "author": {
          "@type": "Person",
          "name": "Jack Burum"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Things Happening",
          "url": "https://thingshappening.com"
        },
        "datePublished": "2026-02-22",
        "dateModified": "2026-07-28",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://thingshappening.com/chattanooga/editorials/weekend-hosting-chattanooga-choo-choo-edition"
        }
      })
    }), "\n", createVNode("div", {
      class: "max-w-6xl mx-auto text-xl",
      children: [createVNode("section", {
        class: "pb-6 pt-2",
        children: [createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Family and friends coming to town is exciting, but many of us can relate to the nervousness of trying to plan a weekend they will actually enjoy. On a recent occasion, I planned one of these visits around the Chattanooga Choo Choo as the focal point. It definitely leans touristy, so if that is not your taste, this might not be what you are looking for."
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "This area has a few strengths going for it:"
          })
        }), createVNode("div", {
          class: "py-4 pb-5 space-y-2",
          children: [createVNode("p", {
            children: "Your people get to stay in the city itself."
          }), createVNode("p", {
            children: "You have access to a range of points of interest within walking distance."
          }), createVNode("p", {
            children: "There are plenty of photo opportunities."
          })]
        }), createVNode("div", {
          class: "mb-10 mt-16 flex flex-col justify-center items-center",
          children: [createVNode($$OptimizedImage, {
            src: "/editorials/choo-choo/choo-choo-spring-gardens.jpg",
            alt: "Spring gardens and grounds at the Chattanooga Choo Choo",
            className: "rounded-lg"
          }), createVNode("div", {
            class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
            children: createVNode("em", {
              children: "Spring gardens at the Choo Choo"
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The area can accommodate different tastes, but this post will focus primarily on restaurants and nightlife options. Some places may be referenced more than once since they fit into multiple categories."
          })
        })]
      }), createVNode("section", {
        class: "text-xl pb-8 pt-8",
        children: [createVNode("h2", {
          class: "text-4xl mb-3",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["By Topic", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "text-xl space-y-1",
          children: [createVNode("div", {
            children: createVNode("a", {
              class: "text-3xl gradient-text",
              href: "#where-to-stay",
              children: "Where to Stay"
            })
          }), createVNode("div", {
            children: createVNode("a", {
              class: "text-3xl gradient-text",
              href: "#beginning-your-day",
              children: "Beginning Your Day"
            })
          }), createVNode("div", {
            children: createVNode("a", {
              class: "text-3xl gradient-text",
              href: "#middle-of-the-day",
              children: "Middle of the Day"
            })
          }), createVNode("div", {
            children: createVNode("a", {
              class: "text-3xl gradient-text",
              href: "#evening",
              children: "Evening"
            })
          }), createVNode("div", {
            children: createVNode("a", {
              class: "text-3xl gradient-text",
              href: "#bonus",
              children: "Bonus"
            })
          })]
        })]
      }), createVNode("section", {
        class: "text-xl pt-4 pb-6",
        children: [createVNode("h2", {
          id: "where-to-stay",
          class: "text-4xl mb-3 leading-tight pt-3",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Where to Stay", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Your guests have the unique option of staying in a room at the Choo Choo itself, inside one of the train cars. Availability can be limited, so other strong options nearby include the Moxy Hotel, Kinley Hotel, and The Hotel Chalet."
          })
        }), createVNode("div", {
          class: "mb-10 mt-16 flex flex-col justify-center items-center",
          children: [createVNode($$OptimizedImage, {
            src: "/editorials/choo-choo/choo-choo-traincars.jpg",
            alt: "Historic train cars where guests can stay at the Chattanooga Choo Choo",
            className: "rounded-lg"
          }), createVNode("div", {
            class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
            children: createVNode("em", {
              children: "Train cars you can stay in at the Choo Choo"
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "My guests chose to stay at the Moxy, which is about a three minute walk to the Choo Choo. On the first floor, the Moxy also has a large bar and gathering area for guests to enjoy while making plans for the day or evening. It can also serve as your first stop if your plans are already set."
          })
        }), createVNode("div", {
          class: "mb-10 mt-16 flex flex-col justify-center items-center",
          children: [createVNode($$OptimizedImage, {
            src: "/editorials/choo-choo/choo-choo-hotel-sign.jpg",
            alt: "Chattanooga Choo Choo hotel sign at the historic station",
            className: "rounded-lg"
          }), createVNode("div", {
            class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
            children: createVNode("em", {
              children: "Choo Choo hotel at the historic station"
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Now that you have chosen a place to stay, let’s walk through options for beginning your day, filling the afternoon, and wrapping up the evening."
          })
        })]
      }), createVNode("section", {
        class: "text-xl pt-4 pb-6",
        children: [createVNode("h2", {
          id: "beginning-your-day",
          class: "text-4xl mb-3 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Beginning Your Day", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("h3", {
          class: "text-3xl mt-10 pb-0 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["For the Up Before Breakfast Crowd", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Start your day with a caffeine fix from either ", createVNode("a", {
              href: "/chattanooga/guides/confections",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "The Hot Chocolatier"
            }), " or Mean Mug. Both offer a range of hot drinks and sweet treats to get things going. For a wider map of roasters, brunch cafes, and neighborhood shops across the metro, see the ", createVNode("a", {
              href: "/chattanooga/guides/coffeeshops",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "Chattanooga coffee shops guide"
            }), ". If you are looking specifically for desserts around Chattanooga, check out our ", createVNode("a", {
              href: "/chattanooga/guides/confections",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "dedicated guide"
            }), "."]
          })
        }), createVNode("div", {
          class: "mb-10 mt-16 flex flex-col justify-center items-center",
          children: [createVNode($$OptimizedImage, {
            src: "/editorials/choo-choo/frothy-monkey-restaurant.jpg",
            alt: "Frothy Monkey inside the Choo Choo Plaza, serving coffee and breakfast",
            className: "rounded-lg"
          }), createVNode("div", {
            class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
            children: createVNode("em", {
              children: "Frothy Monkey in the Choo Choo Plaza"
            })
          })]
        }), createVNode("h3", {
          class: "text-3xl mt-10 pb-0 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Breakfast", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Once the rest of your group is awake and ready to break the fast, here are some walkable options:"
          })
        }), createVNode("div", {
          class: "py-4 pb-5 space-y-2",
          children: [createVNode("p", {
            children: [createVNode("strong", {
              children: "Frothy Monkey"
            }), ", located inside the Choo Choo Plaza."]
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "The Exchange"
            }), ", across the street at the Kinley Hotel, open seven days a week from 7am with coffee and baked goods in the morning that give way to cocktails and small plates by night."]
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "Neidlov’s Cafe and Bakery"
            }), ", for a less formal cafe experience with baked goods, sandwiches, and coffee."]
          })]
        }), createVNode("div", {
          class: "mb-10 mt-16 flex flex-col justify-center items-center",
          children: [createVNode($$OptimizedImage, {
            src: "/editorials/choo-choo/the-exchange-coffeeshop.jpg",
            alt: "The Exchange at the Kinley Hotel, a brunch and coffee spot near the Choo Choo",
            className: "rounded-lg"
          }), createVNode("div", {
            class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
            children: createVNode("em", {
              children: "The Exchange at the Kinley Hotel"
            })
          })]
        })]
      }), createVNode("section", {
        class: "text-xl pt-4 pb-6",
        children: [createVNode("h2", {
          id: "middle-of-the-day",
          class: "text-4xl mb-3 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Middle of the Day", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["You likely already have ", createVNode("a", {
              href: "/chattanooga/guides/outdoors",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "daytime plans"
            }), ", but if you need to fill some extra time, here are a few options in the Choo Choo area."]
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "This is one of the more popular photo areas in Chattanooga. You can take photos at the Chattanooga sign, around the train cars, and inside the main hall, which sometimes features seasonal centerpieces such as a Christmas tree or even a pop up roller skating rink."
          })
        }), createVNode("div", {
          class: "mb-10 mt-16 flex flex-col justify-center items-center",
          children: [createVNode($$OptimizedImage, {
            src: "/editorials/choo-choo/chattanooga-choochoo-sign.jpg",
            alt: "The Chattanooga sign at the Choo Choo, a popular photo spot for visitors",
            className: "rounded-lg"
          }), createVNode("div", {
            class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
            children: createVNode("em", {
              children: "The Chattanooga sign at the Choo Choo"
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "For those interested in art, there are two nearby galleries:"
          })
        }), createVNode("div", {
          class: "py-4 pb-5 space-y-2",
          children: [createVNode("p", {
            children: [createVNode("strong", {
              children: "Hart Gallery Tennessee"
            }), ", which sells art and crafts made by local homeless and other nontraditional artists."]
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "Gallery 1401"
            }), ", a nearby modern art gallery."]
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "You can also take a whiskey tour at Chattanooga Whiskey. Tours last about an hour and walk you through their distilling and bottling process while explaining differences between batches. A flight of whiskey is included with your ticket."
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "For something lighthearted, get your caricature drawn at HartsFartsy Caricature Couch. Past visitors describe the artist as engaging and entertaining, and you leave with one of a kind art."
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["If your visit lands during baseball season, the Chattanooga Lookouts now play at ", createVNode("a", {
              href: "https://www.erlangerpark.com/",
              class: "text-logoDarkGreen underline hover:opacity-90",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Erlanger Park"
            }), ", their new ballpark in the South Broad District that opened in April 2026. It is a short drive south of the Choo Choo, or a longer walk down the Tennessee Riverwalk, which runs right through the stadium grounds. Even without a game on the schedule, the walk down and back is an easy way to fill an afternoon."]
          })
        })]
      }), createVNode("section", {
        class: "text-xl pt-4 pb-6",
        children: [createVNode("h2", {
          id: "evening",
          class: "text-4xl mb-3 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Evening", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("h3", {
          class: "text-3xl mt-10 pb-0 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Dinner", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Here are three recommended dinner spots within walking distance, followed by a bonus option I have not personally tried but may be worth checking out."
          })
        }), createVNode("div", {
          class: "py-4 pb-5 space-y-2",
          children: [createVNode("p", {
            children: [createVNode("strong", {
              children: "Nic and Norman’s"
            }), " is a burger and Southern comfort food restaurant with a full bar, run by filmmaker Greg Nicotero and actor Norman Reedus. It is located inside the Choo Choo."]
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "Feed Table and Tavern"
            }), " is a local favorite known for interesting menu options like chili pot roast or grass fed sloppy joes. It has a lively atmosphere and a full bar."]
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "Elsie’s Daughter"
            }), " offers French Belgian cuisine with a bit of Appalachia. Main courses may include paprika roasted half chicken or short rib ragu."]
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Bonus pick: ", createVNode("strong", {
              children: "Bluegrass Grill"
            }), ", a highly rated Southern style restaurant serving both breakfast and dinner, though I have not personally been."]
          })
        }), createVNode("h3", {
          class: "text-3xl mt-10 pb-0 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Dessert", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["If you have left room after dinner, there is ", createVNode("a", {
              href: "/chattanooga/guides/confections#ice-cream",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "Clumpies"
            }), ", a homegrown ice cream shop just across the street from the Choo Choo that is known for its process and rotating flavors."]
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Around the corner from Clumpies is Insomnia Cookies, where you can sample warm cookies from the day’s menu."
          })
        }), createVNode("h3", {
          class: "text-3xl mt-10 pb-0 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["After Dinner Non Alcohol Options", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["The Comedy Catch, located at the Choo Choo, may have a show running. Check their calendar for tickets. We also have guides to ", createVNode("a", {
              href: "/chattanooga/guides/live-music",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "live music"
            }), " and ", createVNode("a", {
              href: "/chattanooga/guides/performance-arts",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "performing arts"
            }), " for more options."]
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: [createVNode("a", {
              href: "/chattanooga/guides/live-music",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "The Signal"
            }), " and Barrelhouse Ballroom are nearby music venues that feature both regional and national acts. Check their calendars for live performances."]
          })
        }), createVNode("h3", {
          class: "text-3xl mt-10 pb-0 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Cocktail and Happy Hour", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "For an evening cocktail, you have several choices. I recommend the back outdoor bar at Gate 11 Distillery when the weather cooperates. They distill their own spirits on site, including a gin that has won awards worldwide, and make excellent handcrafted cocktails. The Gimlet or Mule are both strong choices."
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Elsie’s Daughter is also known for its cocktails, and Stir offers a lively atmosphere."
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["If you are up for a short trip into downtown, ", createVNode("a", {
              href: "https://www.irischattanooga.com/",
              class: "text-logoDarkGreen underline hover:opacity-90",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Iris"
            }), " opened in early 2026 on the 11th floor of the Waymark Hotel, inside a restored 1927 bank building. You get signature cocktails and one of the higher skyline views in the city. Downstairs, the building’s old bank vault is now a hidden speakeasy called The Vault."]
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If you prefer beer, there are three breweries in or near the Choo Choo:"
          })
        }), createVNode("div", {
          class: "py-4 pb-5 space-y-2",
          children: [createVNode("p", {
            children: "TailGate Brewery next door."
          }), createVNode("p", {
            children: "Five Wits across the street."
          }), createVNode("p", {
            children: "Wanderlinger Brewing on Station Street."
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "It is good to have options."
          })
        }), createVNode("h3", {
          class: "text-3xl mt-10 pb-0 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Nightlife", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Many of the places mentioned above become lively as the evening progresses, so do not feel pressured to keep moving if you have found your spot. However, if you are looking for additional nightlife options, Station Street next to the Choo Choo offers the following."
          })
        }), createVNode("div", {
          class: "py-4 pb-5 space-y-2",
          children: [createVNode("p", {
            children: [createVNode("strong", {
              children: "Backstage Bar"
            }), " has a wide whiskey menu, rotating draft beers, live music, and a strong patio scene. It is open until 2am on Fridays and Saturdays."]
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "The Boneyard"
            }), " hosts nontraditional events such as Drag Night and Goth Night in addition to regular music events."]
          }), createVNode("p", {
            children: [createVNode("strong", {
              children: "Reagan’s Retro Bar"
            }), " has more of a club atmosphere. If you are looking for dancing and DJs, this is your spot."]
          })]
        })]
      }), createVNode("section", {
        class: "text-xl pt-4 pb-6",
        children: [createVNode("h2", {
          id: "bonus",
          class: "text-4xl mb-3 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Bonus", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "You have two game stop options during your visit. There is a dedicated arcade where you can pop in and play. At The Boneyard, you can also check out the pinball machines and see if you can set the night’s high score."
          })
        }), createVNode("p", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The goal of this post was to make hosting easier for those welcoming guests from near or far who want to enjoy a variety of Chattanooga establishments in a walkable area. If this helped, share it with a friend or on social media."
          })
        })]
      }), createVNode("section", {
        class: "text-xl pt-6 pb-12",
        children: [createVNode("h2", {
          class: "text-4xl mb-3 leading-tight",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Related", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "text-2xl space-y-1 py-4",
          children: [createVNode("p", {
            children: createVNode("a", {
              href: "/chattanooga/guides",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "All Chattanooga Guides"
            })
          }), createVNode("p", {
            children: createVNode("a", {
              href: "/chattanooga/guides/tours",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "Guided City Tours"
            })
          }), createVNode("p", {
            children: createVNode("a", {
              href: "/chattanooga/guides/outdoors",
              class: "text-logoDarkGreen underline hover:opacity-90",
              rel: "noopener noreferrer",
              children: "Interactive Outdoors Guide"
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

const url = "/chattanooga/guides/weekend-hosting-chattanooga-choo-choo-edition";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/weekend-hosting-chattanooga-choo-choo-edition.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/weekend-hosting-chattanooga-choo-choo-edition.mdx";
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
