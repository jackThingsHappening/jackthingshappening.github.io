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
  "title": "Sweet Treats in Chattanooga",
  "lastUpdated": "07/28/2026",
  "originalDate": "03/01/2025",
  "readTime": "5 minutes",
  "iconPath": "../../../images/icons-new/coffee-cup.png",
  "tags": [{
    "type": "guide",
    "tag": "around-the-city"
  }, {
    "type": "guide",
    "tag": "longform"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "Chattanooga's best sweet treats including ice cream shops, bakeries, chocolate shops, creperies, and coffee houses for desserts and confections.",
  "images": [{
    "src": "/images/chattanooga_guides/shops/hot_chocolatier.png",
    "position": "upper"
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
        href: "/pdfs/chattanooga/confections.pdf",
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
      class: "text-xl pb-10 pt-10",
      children: createVNode("div", {
        children: [createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "When visiting a new place you take in the sights and sounds, but arguably, more importantly, the smells and tastes."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If you and yours fancy yourselves a sweet treat in the Scenic City we put together a guide for that hopefully matches a style and flavor your looking for. We’ve got your dairies, your bakeries, your cafe’s and your candy shops. Plus some unique establishments we’ll keep as a fun mystery for now, read on for more."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Whether you prefer your sugar rush by way of a cherry on top of an ice cream sundae, or a chocolate drizzle on your warm croissant, we’ve got you and yours accounted for in this guide."
          })
        }), createVNode("div", {
          children: createVNode(_components.p, {
            children: ["Think we missed something? I’ll give you the benefit of the doubt. Let ", createVNode("a", {
              mailto: "jack@thingshappening.com",
              children: "us know"
            }), " and ill take it into consideration."]
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
                href: "#confections",
                children: "Confections"
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                href: "#europe",
                children: "A Touch of Europe"
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                href: "#ice-cream",
                children: "Ice Cream"
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                href: "#baked-goods",
                children: "Baked Goods"
              })
            })]
          })
        })]
      })
    }), createVNode("section", {
      class: "text-xl pb-10",
      id: "confections",
      children: [createVNode("h2", {
        class: "text-5xl",
        style: "font-family: 'Libre Baskerville', serif;",
        children: createVNode(_components.p, {
          children: ["Confections", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["The Hot Chocolatier", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Does a sip of hot chocolate bring up any feelings of nostalgia for you? If it does you might be interested in on a cold winter’s day there’s a business in town you may want to know about, The Hot Chocolatier. They serve an array of various confections, hot drinks, pastries and sandwiches. On their shelves you’ll also find thoughfully wrapped creations that would make for an excellent gift for most occassions. These gifts can also be purchased ", createVNode("a", {
              href: "https://thehotchocolatier.com/collections/all",
              target: "_blank",
              children: "online"
            }), ", if you’re crunched for time."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["With two locations, one in St Elmo and the other on Market Street near the Choo Choo. The Hot Chocolatier is relatively accessible to most residents and vistors to the area. The St Elmo location is perfect for refueling after a ", createVNode("a", {
              href: "/chattanooga/guides/outdoors?tags=lookout-mtn",
              target: "_blank",
              children: "Lookout Mountain hike"
            }), ". The staff is as warm as their hot chocolate, if you’re looking for a place to go to get out of the house for a bit or even to work they have tablespace and wifi, plus note outdoor seating when the weather is cooperating."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The Hot Chocolatier has been beloved by the Chattanooga community since their inception in 2008. They never experienced this more than in 2024. Facing significant hardship due to increased rent and permitting delays during a relocation the owners launched a GoFundMe Campaign and were able to raise more than $19,000 from more than 250 donors. With the backing of the community, resilience from the owners, and dedication from their team, The Hot Chocolatier continues to be able serve Chattanooga the creative confections they crave."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Rocket Fizz", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Take a step through the front door and instantly be drawn in further by the flurry of colors and seemingly endless products with lively packaging. Not to mention the general energy that’s hard to account for in description of a retro style candy shop."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Find yourself reminiscing over a smoke of a candy cigarettes, don’t forget your light. Additional nostalgia awaits for a variety of retro goodies. Fashion yourself a Whatchamacallit, or some Atomic Fireballs? They’ve got your back."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Candy bins line the walls, grab a bag and mix some magic. Custom soda’s created by retro themselves somehow come to life will stationed on shelving. How about flavoring from another country? Some shops will have imported goods from time to time, if you want to travel abroad without needing a plane ticket."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Located downtown on Broad Street, plan a stop while exploring some other Chattanooga points of interest. Rocket Fizz can be found at 411 Broad Street, open seven days a week: 10am-9pm Monday through Thursday, until 10pm Friday and Saturday, and 11am-9pm on Sunday. Visit their ", createVNode("a", {
              href: "https://rocketfizz.com/locations/rocket-fizz-chattanooga-tn/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "website"
            }), " for more details and contact information."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Belle Chocolates", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Belle Chocolates is a boutique chocolatier in Chattanooga."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Handmade bean to bar chocolates. For the curious this means the chocolates are made completely from scratch beginning with the bean through to the final chocolate product. With that attention to detail it’s no wonder they have a loyal local following."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Find Belle Chocolates at farmers markets in Chattanooga, Cleveland and other surrounding towns. They are also available for events and catering. Follow them on ", createVNode("a", {
              href: "https://www.facebook.com/bellechocolates",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Facebook"
            }), " for updates on their market schedule and special offerings."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Rocky Mountain Chocolate Factory", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "One of the few retail chains to make this list, but we wanted to include it for location, location, location."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "This confection manufacturer has one of the best locations in the city, right across the street from the Tennessee River at 100 Chestnut Street."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Stop by after a trip to the aquarium, a Lookouts baseball game, or a Southern Belle River cruise, as it’s located in the middle of all of them."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Continuing on the location, it’s next door to a Cold Stone Creamery, so if someone in your group wants a different kind of treat, there is room for accommodation."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "At a visit to RMCF you might try an assorted box of chocolates, clusters, caramel apples, truffles, toffee, or other confection offering."
          })
        })]
      })]
    }), createVNode("div", {
      class: "pb-2 text-xl",
      children: createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/shops/hot-chocolatier1.jpg",
          alt: "The Hotchocolatier, outside photo. St Elmo, Chattanooga"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "The Hot Chocolatier St Elmo"
          })
        })]
      })
    }), createVNode("section", {
      class: "text-xl pb-10",
      id: "europe",
      children: [createVNode("h2", {
        class: "text-5xl",
        style: "font-family: 'Libre Baskerville', serif;",
        children: createVNode(_components.p, {
          children: ["A touch of Europe", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Adelle’s Crêperie", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Open daily from 8:30AM to 2:30PM, with evening service Thursday through Saturday, this European style crêperie serves a collection of both sweet and savory crepes."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "In European culture sweet crepes are often eaten for dessert often made with chocolate, fruit, whipped cream, or some combination of ingredients. If you’re looking to enjoy a lighter sweet crepe for breakfast try crepes with a jam spread."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Adelle’s sweet crepe menu consists of dishes like “The Royale” which features nutella, stawberries, and chocholate drizzle and “The Bee’s Knees” consisting of nutella, bananas, cinnamon maple sprinkle, and honey drizzle. These we’re two cherry picked dishes, there are other sweet crepes and you can also create your own. ", createVNode("a", {
              href: "https://www.adellescreperie.com/menu",
              target: "_blank",
              children: "Adelle’s full menu"
            })]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If you’re dining with your kids or just want something simple, they also offer a classic butter and sugar crepe. A French staple."
          })
        }), createVNode("div", {
          children: [createVNode("span", {
            class: "font-bold",
            children: "Crepe trivia knowledge:"
          }), createVNode("span", {
            children: "In France, on February 2nd of each year during La Chandeleur, it’s tradition to make a wish while flipping a crêpe in the pan. The challenge is to hold a gold coin in your other hand while flipping the crêpe. If you land it perfectly, the tradition says you’ll have prosperity for the rest of the year."
          })]
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Rembrandt’s Coffee House", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "This coffee house is modeled after a European café with its handmade pastries, cobblestone paths, and hand crafted espresso based coffee drinks."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Rembrandt offers both indoor and outdoor seating. Their outdoor patio seating is particularly enjoyable in the spring when the Arts District comes to life with fresh blooming flowers or in the fall when the foliage adds some charm to the area."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Following the European this coffee house is walkable to many other shops, restaurants and attractions in its disrict like Hunter Museum, Walnut Street Bridge, Tennessee Riverwalk, and Coolidge Park."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Rembrandt’s also offers a selection of locally made chocolates, which might go well will that afternoon or evening cup of coffee."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The shops name, Rembrandt, fits well with the artistic theme of the district. Rembrandt was a famous dutch painter in the 1600’s."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If you’re visiting on a weekend, you might see a live music or a local artist set up close by, which can also add to the European-style atmosphere."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Milk & Honey", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "A Northshore fixture since 2013, Milk & Honey makes its gelato and sorbet in house, with a rotating lineup of seasonal flavors alongside the year-round staples. Italian gelato is what earns it a spot in the Europe section."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["It’s as much a brunch café as a gelato counter, so you can order espresso and a from-scratch breakfast in the morning and come back for a scoop later. They recently renovated and expanded into a larger space at 135 N Market Street, open daily from 6AM to 6PM. See the flavor list on their ", createVNode("a", {
              href: "https://www.milkandhoneychattanooga.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "website"
            }), "."]
          })
        })]
      })]
    }), createVNode("section", {
      class: "text-xl pb-10",
      id: "ice-cream",
      children: [createVNode("h2", {
        class: "text-5xl",
        style: "font-family: 'Libre Baskerville', serif;",
        children: createVNode(_components.p, {
          children: ["Ice cream", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Clumpies Ice Cream", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "A Chattanooga small business that’s considered a regional staple my many. Their handmade ice cream orgin story dates back to 1999 where they were using the finest fresh cream and milk ingredients to self pasteurize their products. The shop was purchased by Rock City Inc in 2013 and has since expanded to 3 total locations plus a food truck."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "They make their ice cream in small batches, roughly 9 gallons per batch. This helps them pay more attention to detail and try out different experimental batches when testing new flavors."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Clumpies has three Chattanooga locations. The flagship store is on the North Shore surrounded by various shops and restaurants. They also have a store near the Chattanooga Choo Choo on Market Street, and one in St. Elmo at the bottom of the Incline, handy for cooling off after a Lookout Mountain outing."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["In any of these locations you can parlay your parlor party with local shopping, dinner, or drinks. You can also do those things in any order you choose, don’t let us tell you how to live your life. For the busy, they’ve also opened an ", createVNode("a", {
              href: "https://clumpies.com/",
              target: "_blank",
              children: "online shop"
            }), " in recent years for local deliveries."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Clumpies offers seasonal and limited edition flavors Raspberry Stracciatella and Chocolate Lava Cake during Valentine’s season, and Chai Latte and Coffee Cake in the fall."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["The Ice Cream Show", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Located near the south end of Chattanooga’s Walnut Street Walking Bridge at 105 Walnut Street, next to the Hunter Museum, The Ice Cream Show offers over 17,000 flavor combinations, making sure there’s something for everyone in the family."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "These combinations are created from over 40 different fresh ingredients including fruits, chocolates, and nuts."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Continuing on their patron accessibility, the shop offers dairy free alternatives like sobert and vanilla oat milk ice cream."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If someone in your group finds doesn’t find the idea of ice cream appealing they also have freshly brewed coffee, hot chocolate, and tea."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The Ice Cream Show is pet friendly, so bring Fido and get them their own treat like the Frosty Paws puppy ice cream."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "This shop is open Monday through Saturday from 9AM to 11PM, and Sunday from noon to 11PM."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("span", {
            class: "font-bold",
            children: "Some arithmatic: "
          }), createVNode("span", {
            children: " To enjoy all 17,000 combinations you’d have to try a new one every day for over 46 years."
          })]
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Crispy Cones", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "This one’s a different take on the cone. Crispy Cones grills pastry dough rotisserie-style until it’s crisp, rolls it in cinnamon sugar, then fills the whole thing with a spread, gourmet ice cream, and toppings. It’s a Prague street-food idea (the chimney cake) that landed here by way of Shark Tank."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["The Chattanooga-area shop had its grand opening in September 2024 at 8898 Old Lee Highway in Ooltewah, an easy stop if you’re out on the east side of town. Hours run afternoons and evenings; check their ", createVNode("a", {
              href: "https://crispycones.com/chattanooga-tn",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "site"
            }), " before you go."]
          })
        })]
      })]
    }), createVNode("section", {
      class: "text-xl pb-10",
      id: "baked-goods",
      children: [createVNode("h2", {
        class: "text-5xl",
        style: "font-family: 'Libre Baskerville', serif;",
        children: createVNode(_components.p, {
          children: ["Baked Goods", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Cupcake Kitchen", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "7 days a week Cupcake Kitchen bakes over 20 cupcake flavors on-site."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Their menu includes classics like vanilla and chocolate but also features more unique options Almond Raspberry and Tiramisu for patrons seeking a novel experience."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The Cupcake Collection offers a ‘rotating selection of seasonal flavors’, one being their King Cake cupcakes available for purchase during the Mardis Gras seaon."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Being considerate of those with dietary restrictions the shop offers gluten-free, dairy-free, and vegan cupcakes for those who need or desire these options."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Outside of their titled dessert option Cupcake Kithen also offers cookies, canolis, and cheescakes if you’ve got a different sweet craving."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Julie Darling Donuts", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Opened in 2009, this donut shop uses a small-batch approach to baking, making sure donuts are made fresh every morning for their handmade treats."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Since their donuts are made fresh each morning it’s best to try and get their early. They make limited batches to avoid waste and may run out if you’re visiting later in the day. The store is open from 7AM to 1PM Monday through Saturday."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Their menu stands out with it’s novel, creative flavors like Samoa, Red Velvet, and Cheescake filled donuts."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Sometimes on the weekend they’ll serve specialty donuts that aren’t on the regular menu, making each weekend visit a chance to try something new."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["The store has an fun 1950’s retro atmosphere and also has a Free Little Library, for those looking to leisure one afternoon. Sometimes they offer free donuts or coffee in exchange for a book, keep an eye out for these occassions on their ", createVNode("a", {
              href: "https://www.facebook.com/JDDnooga/",
              target: "_blank",
              children: "facebook page"
            }), "."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Niedlov’s Bakery & Café", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Niedlov’s is the from-scratch bread bakery of the bunch, working sourdough and European-style loaves the slow way from their Southside bake house. It’s less about frosting and more about the smell of fresh bread, though the pastry case pulls its weight too."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Alongside the loaves you’ll find croissants, scones, and other morning bakes to go with a coffee, plus a full café menu if you’re settling in. Find them at 215 E Main Street, open 7AM to 6PM weekdays and 7AM to 4PM Saturday, closed Sunday. More at their ", createVNode("a", {
              href: "https://www.niedlovs.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "website"
            }), "."]
          })
        })]
      })]
    }), createVNode("section", {
      class: "text-xl pb-10",
      children: [createVNode("h2", {
        class: "text-4xl pb-5",
        style: "font-family: 'Libre Baskerville', serif;",
        children: ["Breakdown and Wrap Up", createVNode("span", {
          class: "color-pink ml-1",
          children: createVNode("b", {
            children: "."
          })
        })]
      }), createVNode("div", {
        children: createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Chattanooga as a number of fun and novel places to adventure out to for that sweet tooth fix. We hope some of the places we spotlighted today have you ready to get out and try something new or visit an old favorite."
          })
        })
      }), createVNode("table", {
        class: "w-full border border-gray-300 shadow-md rounded-lg",
        style: "table-layout: fixed; width: 100%; max-width: 100%;",
        children: [createVNode("thead", {
          class: "bg-gray-100 text-gray-700 uppercase text-sm",
          children: createVNode("tr", {
            children: [createVNode("th", {
              class: "px-4 py-2 text-left border-b",
              style: "width: 30%; word-wrap: break-word;",
              children: "Business Name"
            }), createVNode("th", {
              class: "px-4 py-2 text-left border-b",
              style: "width: 25%; word-wrap: break-word;",
              children: "Type"
            }), createVNode("th", {
              class: "px-4 py-2 text-left border-b",
              style: "width: 45%; word-wrap: break-word;",
              children: "Signature Items"
            })]
          })
        }), createVNode("tbody", {
          class: "text-gray-900",
          children: [createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "The Hot Chocolatier"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Chocolate & Confections"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Hot Chocolate, Handmade Chocolates"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Rocket Fizz"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Candy & Soda Shop"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Retro Candy, Custom Sodas"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Belle Chocolates"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Chocolatier"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Bean-to-Bar Handmade Chocolates"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Rocky Mountain Chocolate Factory"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Chocolate Shop"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Assorted Chocolates, Caramel Apples"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Adelle’s Crêperie"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Crêperie"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Sweet & Savory Crêpes"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Rembrandt’s Coffee House"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Café"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Handcrafted Espresso Drinks, Pastries"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Clumpies Ice Cream"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Ice Cream"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Handmade Small-Batch Ice Cream"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "The Ice Cream Show"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Ice Cream"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "17,000 Ice Cream Flavor Combinations"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Cupcake Kitchen"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Bakery"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Cupcakes, Seasonal Flavors"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Julie Darling Donuts"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Donut Shop"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Creative Donuts, Ice Cream Donut Sandwiches"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Milk & Honey"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Gelato & Café"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "House-Made Gelato & Sorbet"
            })]
          }), createVNode("tr", {
            class: "border-b hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Crispy Cones"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Ice Cream"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Grilled Chimney-Cake Cones"
            })]
          }), createVNode("tr", {
            class: "hover:bg-gray-50",
            children: [createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Niedlov’s Bakery & Café"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Bakery"
            }), createVNode("td", {
              class: "px-4 py-3",
              style: "word-wrap: break-word;",
              children: "Sourdough & Artisan Breads, Pastries"
            })]
          })]
        })]
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
            href: "/chattanooga/guides/tours",
            target: "_blank",
            children: "Guided Tours"
          })
        }), createVNode("li", {
          children: createVNode("a", {
            href: "/chattanooga/guides/live-music",
            target: "_blank",
            children: "Live Music"
          })
        }), createVNode("li", {
          children: createVNode("a", {
            href: "/chattanooga/guides/outdoors",
            target: "_blank",
            children: "Outdoor Adventures"
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
const url = "/chattanooga/guides/confections";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/confections.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/confections.mdx";
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
