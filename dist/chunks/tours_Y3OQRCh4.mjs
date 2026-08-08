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
  "title": "Guided Adventure and Exploration in Chattanooga",
  "lastUpdated": "08/04/2026",
  "originalDate": "06/08/2025",
  "readTime": "8 minutes",
  "tags": [{
    "type": "guide",
    "tag": "around-the-city"
  }, {
    "type": "guide",
    "tag": "longform"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "Guide to guided tours and in Chattanooga including ghost tours, food tours, kayaking, and historical experiences.",
  "iconPath": "../../../images/icons-new/megaphone.png",
  "images": [{
    "src": "/images/chattanooga_guides/trolley.png",
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
        href: "/pdfs/chattanooga/tours.pdf",
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
      class: "text-xl pb-6 pt-6",
      children: createVNode("div", {
        children: [createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "On your last trip you’re at your third tourist trap, lines couldn’t be any longer, you’re sure your tickets are in your back left pocket (where they always are darnnit!) but now your scrambling to filter your gmail for them. Your spouse is agitated, and if they’re agitated then by all means you have ground to be piping hot!"
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Apologies for the projection. If you’ve been there before, let’s you and I not let that happen again."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "But we don’t pass that torch to just anyone, we’re handing it off to a professional Chattanoogan. Someone who made it their mission to deliver a top-shelf customer experience on a topic they naturally feel passion towards."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Should you want to:"
          })
        }), createVNode("ul", {
          class: "text-xl",
          children: [createVNode("li", {
            children: "Explore the famed Chattanooga outdoors without worrying if you’re still on the right trail an hour in."
          }), createVNode("li", {
            children: "Dine at local favorite restaurants without trying to figure out the best times and tables."
          }), createVNode("li", {
            children: "Learn the cities history and take the sights of well known landmarks with the efficiency and enthusiasm of professional guide."
          }), createVNode("li", {
            children: "See a bat cave via kayak, or ghosts via walking"
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Then there’s a guided adventure out there for you. If none of those grabbed you we’ve included a few other options for your consideration."
          })
        }), createVNode("div", {
          class: "pb-5"
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
                href: "#city-history",
                children: "City & History"
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                href: "#outdoor-adventures",
                children: "Outdoor Adventures"
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                href: "#food-entertainment",
                children: "Food & Entertainment"
              })
            })]
          })
        })]
      })
    }), createVNode("section", {
      class: "text-xl pb-2",
      children: createVNode("div", {
        children: createVNode("h2", {
          id: "city-history",
          class: "text-4xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["City & History", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      })
    }), createVNode("section", {
      class: "text-xl pb-10",
      children: [createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Chattanooga Trolley Tours", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Take a journey on city tour in a nostalgic vintage tour bus. The captivating red and green colored trolley and wood lined interior provide an inviting environment to take in the city sights and sounds while you listen to your local guides descriptions of the city of Chattanooga."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Trolley tours can be anywhere from 75 minutes to up to 4 hours in length depending on the tour option you elect. You’ll come away with intimate details on the stories, history, and maybe a few tall tales that have come to make Chattanooga what it is today."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: "For those visiting in the summer months rest assured the vehicle has A/C and is enclosed."
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "pb-5",
            children: "The Trolley is not short on tour options:"
          }), createVNode("div", {
            children: "1. Derailed Adventure (~$49). This is the big ticket item, a trolley tour paired with a ride through history on a historic train."
          }), createVNode("div", {
            children: "2. Legends & Shadows (~$32). Take the trolley on a different kind of Chattanooga tour, one for the true crime and haunted history enthusiasts."
          }), createVNode("div", {
            children: "3. Express Trolley (~$29). A condensed one-hour city overview for those in a time crunch, hitting downtown, the riverfront, and the Chattanooga Choo Choo."
          }), createVNode("div", {
            children: "4. Coker Museum & Trolley Tour (~$42). Enjoy the classic trolley ride with an added visit to the Coker Automotive Museum for vintage cars and bikes."
          }), createVNode("div", {
            class: "pb-5",
            children: "Nobody refers to these as ‘the tour four’ but they could be. If you’re interested in getting to know the city and it’s history in detail hopefully one of those piqued your interest."
          }), createVNode("div", {
            class: "pb-5",
            children: ["Check ", createVNode("a", {
              href: "https://www.sceniccitytours.com/tours",
              target: "_blank",
              children: "their website"
            }), " for booking information as the tour schedules can vary."]
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "You can also do your own private tour with advanced planning."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Boasting a 4.9 Google Review, this guided adventure is a fan favorite for people of all ages."
          })
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/trolley.jpg",
          alt: "Vintage trolley bus for Chattanooga city tours with red and green colors",
          width: 700,
          height: 600,
          className: "rounded-lg"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Chattanooga Trolley Tours vintage bus, perfect for exploring the city’s history and landmarks."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Chattanooga Ghost Tours", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Chattanooga was grounds for prominent civil war battles, with cemeteries of the time still operating. The Trail of Tears, which the city played a large role in, added another tragedy passage to its complex history. Hauntings and paranormal are still rumored to this day from murders and events that occurred generations ago."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Those facts can only mean one thing, epic ghost tours. Okay maybe there’s more than one conclusion to draw but you get the point. With this storied history comes some fun ghost tours etched in fact and folklore and one of the more popular businesses running these adventures is Chattanooga Ghost Tours."
          })
        }), createVNode("div", {
          class: "pb-5"
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Not only can you do a walking ghost tour, but they also offer ghost hunting options for some added excitement for the brave."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "At the time of last update they have a Murder and Mayhem Haunted History walking tour, UTC + Cemetery Ghost Hunt, and a Walking + Hunt Combo tour for those who want the best of both worlds."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "pb-2",
            children: "1. Murder and Mayhem Haunted History walking tour. Take two hours in your evening to explore downtown Chattanooga through haunted history and tall tales of Chattanoga’s past."
          }), createVNode("div", {
            class: "pb-2",
            children: "2. UTC Cemetery Ghost Hunt (hunting equipment included). Are you really going to pass up an opportunity to ghost hunt? I hope you have a good reason. Otherwise take a 1.5 hour hunting tour around the UTC campus with a stop at the Citizens Cemetery (if ghost hunting was scary enough on its own)."
          }), createVNode("div", {
            class: "pb-2",
            children: "3. Walking Ghost Tour/Hunt Combo. A 1.5 hour combined tour for the best of both worlds if you couldn’t choose just one."
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("b", {
            children: "Additional note"
          }), ": They also run extended small-group Deluxe tours that include refreshment stops inside haunted locations. Check their calendar for current dates."]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The tours are designed for all ages. The walking ghost tours are rain or shine so be prepared with an appropriate jacket for any inclement weather conditions."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Tour available can be found on the ", createVNode("a", {
              href: "https://chattanoogaghosttours.com/",
              target: "_blank",
              children: "Chattanooga Ghost Tours"
            }), " website."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Chattanooga Ducks", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Here’s a tour that can’t decide if it’s a bus or a boat, so it’s both. Chattanooga Ducks loads you into a restored WWII amphibious “Duck,” rolls through downtown for a narrated city tour, then drives straight down a ramp and splashes into the Tennessee River."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Once you’re afloat you’ll get views of downtown, the riverfront, and the Maclellan Island wildlife sanctuary. It runs about an hour, works for all ages, and the corny-in-a-good-way narration is half the fun. Tours leave from 151 Riverfront Parkway and start around $36 per person."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Check ", createVNode("a", {
              href: "https://chattanoogaducks.com/",
              target: "_blank",
              children: "their website"
            }), " for the current schedule and to reserve a seat."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Chattanooga Rydables Tours", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If a trolley feels too tame and a walking tour too slow, split the difference on a Rydable. These are plush motorized scooters, and yes, some of them look like unicorns and dragons, so leave your dignity at the hotel and just have fun with it."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "A guide leads your group across the Walnut Street Bridge and through downtown, feeding you history and trivia along the way. The one-hour “Bridge to Fun” ride starts around $55, and the 1.5-hour “From Trains to Bridges” tour (which swings by the Chattanooga Choo Choo) runs about $75. They’re open seven days a week and tours sell out, so book ahead."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Browse routes and reserve on the ", createVNode("a", {
              href: "https://chattanoogasegwaytours.com/",
              target: "_blank",
              children: "Chattanooga Rydables"
            }), " website."]
          })
        })]
      })]
    }), createVNode("section", {
      class: "text-xl pb-2",
      children: createVNode("div", {
        children: createVNode("h2", {
          id: "outdoor-adventures",
          class: "text-4xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Outdoor Adventures", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      })
    }), createVNode("section", {
      class: "text-xl pb-10",
      children: [createVNode("div", {
        children: [createVNode("h2", {
          id: "bat-cave-kayak-tour",
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Bat Cave Sunset Kayak Tour", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Searching for outdoor activities in Chattanooga? How about Kayaking? How about Kayaking to watch up to 100,000 gray bats exit their cave for a nightly insect hunt?"
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If don’t have a deep rooted bat phobia (chiroptophobia), and you are a seeker of outdoor novelty this could be your chance to create some lasting memories."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If you’re in Chattanooga between March - October you can book this one of a kind tour. Their online reviews go on about what a fun experience this is, currently boasting a 5.0 star rating."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Keep your eyes open for other wildlife you might get lucky to see on the paddle such as bald eagles, deer, river otter, and osprey."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "No previous kayaking experience for you or a group member? The 3 mile route is considered easy, and your guides will provide instructions. Anyone having difficulty can ask to be towed."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Still worried about your lack of Kayaking experience? Maybe ", createVNode("a", {
              href: "https://www.google.com/search?q=Chattanooga+Guided+Adventures+Nickajack+Bat+Cave+Sunset+Kayak+Tour&newwindow=1&sca_esv=3df4820f94ed7501&sxsrf=AE3TifNqq7joFJofD9yPCivjitGPDX2Fgg%3A1749647705672&ei=WYFJaMXjKJbIwN4Pn43rAQ&ved=0ahUKEwiF9OnPuemNAxUWJNAFHZ_GOgAQ4dUDCBA&uact=5&oq=Chattanooga+Guided+Adventures+Nickajack+Bat+Cave+Sunset+Kayak+Tour&gs_lp=Egxnd3Mtd2l6LXNlcnAiQkNoYXR0YW5vb2dhIEd1aWRlZCBBZHZlbnR1cmVzIE5pY2thamFjayBCYXQgQ2F2ZSBTdW5zZXQgS2F5YWsgVG91cjIEECMYJzIEECMYJzICECZI9xJQ4AZYoRFwAHgCkAEAmAFsoAG6AaoBAzEuMbgBA8gBAPgBAZgCA6ACyQHCAgQQABhHmAMA4gMFEgExIECIBgGQBgiSBwMyLjGgB7YPsgcDMS4xuAfFAcIHBTAuMS4yyAcL&sclient=gws-wiz-serp&lqi=CkJDaGF0dGFub29nYSBHdWlkZWQgQWR2ZW50dXJlcyBOaWNrYWphY2sgQmF0IENhdmUgU3Vuc2V0IEtheWFrIFRvdXJIh72g0YS1gIAIWmQQARACEAMQBBAFEAYQBxAIGAAYARgCGAQYBRgGGAcYCCJCY2hhdHRhbm9vZ2EgZ3VpZGVkIGFkdmVudHVyZXMgbmlja2FqYWNrIGJhdCBjYXZlIHN1bnNldCBrYXlhayB0b3VykgESdG91cmlzdF9hdHRyYWN0aW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5UVU5CYzNSRVRHdDNSUkFCqgGwAQoIL20vMDRmZHcQASo6IjZndWlkZWQgYWR2ZW50dXJlcyBuaWNrYWphY2sgYmF0IGNhdmUgc3Vuc2V0IGtheWFrIHRvdXIoADIeEAEiGmHWcy7IWL6cjLaGJwVUlLwTCjLayhbNB-QPMkYQAiJCY2hhdHRhbm9vZ2EgZ3VpZGVkIGFkdmVudHVyZXMgbmlja2FqYWNrIGJhdCBjYXZlIHN1bnNldCBrYXlhayB0b3Vy4AEA-gEECCYQLw#lkt=LocalPoiReviews&rlimm=9430491960613679780",
              target: "_blank",
              children: "this review"
            }), " from Mimi Maxwell can offer some relief ”… Katie was our guide and she was wonderful. Our group had 2 who had never been in a kayak before and she was very patient and helpful.”"]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Bring up to 20 people on your tour to share the adventure with your loved ones (or loved ones in the making, for the newly dating)."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode(_components.p, {
            children: "Some additional details:"
          }), createVNode("ul", {
            class: "mt-2 text-xl space-y-2",
            children: [createVNode("li", {
              children: [createVNode("b", {
                children: "Tour season:"
              }), " Ongoing from March to early October"]
            }), createVNode("li", {
              children: [createVNode("b", {
                children: "Tour time:"
              }), " Tours run about 2 hours and start around 7:30pm"]
            }), createVNode("li", {
              children: [createVNode("b", {
                children: "Meeting Location:"
              }), " Maple View Recreation Area, Mapleview Rd, South Pittsburg, TN 37380"]
            }), createVNode("li", {
              children: [createVNode("b", {
                children: "What to bring:"
              }), " Rain jacket weather dependent, a pre-filled up water bottle"]
            }), createVNode("li", {
              children: [createVNode("b", {
                children: "Individual ticket price:"
              }), " ~$77 (but subject to change)"]
            })]
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Learn more about these tours and book yours on the ", createVNode("a", {
              href: "https://www.chattanoogaguidedadventures.com/",
              target: "_blank",
              children: "Chattanooga Guided Adventures"
            }), " website."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "Bonus Idea:"
            }), " If you end up loving the bat cav tour, or you don’t happen to be in town in the right months, this same company runs a Sandhill Crane viewing tour from November through Februrary where you can view thousands of seasonal cranes on Hiwassee Island on the Tennessee River. Learn about the once endangered species comeback and why they make a stop in our area on their migration."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["For more self-guided outdoor adventures, check out our ", createVNode("a", {
              href: "/chattanooga/guides/outdoors",
              target: "_blank",
              children: "Chattanooga Outdoors Guide"
            }), " with 71 hiking, biking, and paddling routes."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          id: "chickamauga-battlefield-tours",
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Chickamauga Battlefield Tour Options", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Learn about this pivotal battle in the Civil War, which might still be an understatement. The battle of Chickamauga was a turning point in the war and the second most deadly battle next to Gettysburg. They have both guided and self guided tour options for you to explore and learn in this US National Park."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Tour times are subject to change depending on guide availability, but typically group tours run on Saturdays and Sundays at 10AM and 2PM and tend to last about 90 minutes."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The National Park Service has put together a guided tour that includes eight different points of interest. Drive or walk it, the grounds are beautiful, well maintained, and home to a lot of wildlife."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "To access the tour download the National Park Service app on your mobile device search for the Chickamauga Battlefield."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Frankly, it’s not the most user friendly app in the store. If you have trouble, the people at the ", createVNode("a", {
              href: "https://g.co/kgs/fPzUQTa",
              target: "_blank",
              children: "visitors center"
            }), " can be very helpful, and they’ll also provide you with a park map."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "Private Tour Option: "
            }), " Robert Carter, an author and historian offers private tours of the park, learn more on ", createVNode("a", {
              href: "https://www.chickchattbattlefieldtours.com/",
              target: "_blank",
              children: "his website"
            }), "."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          id: "rosie-maes-alpaca-farm",
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Hiking Tours by Experience Chattanooga", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Not sure if you’ve heard the news but Chattanooga has a great outdoor scene."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If you’re not exactly sure which trails and parks you want to explore on your visit (or days off work for our local readers), we suggest looking into guided hikes provided by Experience Chattanooga."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Nearing 200 5 star reviews, chances are it will be time well spent. They variety of options for exploration, but a few cherry picked ones include:"
          })
        }), createVNode("ul", {
          class: "text-xl",
          children: [createVNode("li", {
            class: "pb-1",
            children: "Good Morning Mountains. For waking up early and starting your day with panoramic views of the city and Tennessee River Gorge. There’s also a different offering that includes an Alpaca farm."
          }), createVNode("li", {
            class: "pb-1",
            children: "Soul Therapy. For a hike and tour of one of Tennessee’s top waterfall trails."
          }), createVNode("li", {
            class: "pb-1",
            children: "The Best of Tennessee. Their premium, longer outing for folks who want to see the region’s greatest hits in a single guided day."
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "Idea for Families:"
            }), " Their Alpacas, Mountains and Coffee option offers an opportunity to feed alpaca’s and grab a coffee after your morning hike at Rosie Mae’s Alpaca Farm. You’ll be picked up in the morning and all is concluded by lunchtime."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["They have more offerings on ", createVNode("a", {
              href: "https://www.experiencechattanooganow.com/chattanooga-hikes",
              target: "_blank",
              children: "their website"
            }), ", check it out to book your tour and get more information."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "All tours are private and run by two lifelong Chattanoogans. A bonus included in your tour booking is professional photography throughout the trip, and you might like to know they donate a portion of their proceeds to the parks and communities in the area."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          id: "raccoon-mountain-caverns",
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Raccoon Mountain Caverns", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Chattanooga’s most famous cave is Ruby Falls, but about eight miles west of downtown there’s a quieter one worth your time. Raccoon Mountain Caverns runs guided tours through a living cave full of stalactites, flowstone, and formations you won’t find on the paved tourist routes."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The Crystal Palace Walking Tour is the easy option, about 45 to 55 minutes along lit paths with steps and handrails, running roughly $29 for adults and $19 for kids. If you’d rather crawl than stroll, their Wild Cave tours hand you a helmet and light and send you deeper into the mountain, with two-hour, three-hour, and four-hour expeditions priced around $35, $45, and $55."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["It’s open daily, and the wild tours are a genuinely different way to spend an afternoon. See tour times and book on the ", createVNode("a", {
              href: "https://raccoonmountaincaverns.com/",
              target: "_blank",
              children: "Raccoon Mountain Caverns"
            }), " website."]
          })
        })]
      })]
    }), createVNode("section", {
      class: "text-xl pb-2",
      children: createVNode("div", {
        children: createVNode("h2", {
          id: "food-entertainment",
          class: "text-4xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Food & Entertainment", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      })
    }), createVNode("section", {
      class: "text-xl pb-10",
      children: [createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Trolley Pub Chattanooga", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Fresh air, city and mountain views, your favorite beverage or two, and some light exercise make for a heck of an afternoon on the Trolley Pub."
          })
        }), createVNode("div", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: "Bring your own elixir of choice and get out to explore the city in unique fashion."
          })
        }), createVNode("div", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: "While out getting your thirst fixers, make sure you download music in advance, the company operates on the Bring Your Own Playlist model. You can connect to their bluetooth speakers and play your groups favorite songs."
          })
        }), createVNode("div", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: "Your tour guide will point out interesting historic and modern day relevant landmarks as you drink, pedal, listen, and sightsee."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "If you’re worried about pedaling for two hours straight, we can offer some peace of mind. Along the way you’ll take a multiple breaks stopping at some of Chattanooga’s best bars and restaurants."
          })
        }), createVNode("div", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: ["The pub is a popular group activity can fit up to fourteen people if you opt for a private tour, check out ", createVNode("a", {
              href: "https://trolleypub.com/chattanooga/",
              children: "their website"
            }), " for scheduling."]
          })
        }), createVNode("div", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: "Group tour pricing ranges between $300-375 at the time of our last update."
          })
        }), createVNode("div", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: "Another option is to get individual tickets for their Mixer Tour, where you and a group of like minded party bikers will explore the city my pedaling together. At the time of last update these tickets cost in the range of ~$25-30."
          })
        }), createVNode("div", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: "Trolley Pub events are rain or shine so be sure to check the forecast and bring appropriate clothing."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The Mixer Tours are for adults 21+ and for private tours the minimum age for passengers is 15. You may need to call a babysitter for a couple of hours for this one."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Southern Belle", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "One of Chattanooga’s most popular date-night options or a place to bring family for dinner when they’re in town is the Southern Belle."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Forget waterfront restaurant, take the water on the road with you as this historic paddle wheel riverboat leaves port traveling the Tennessee River for a scenic fun-filled evening."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The southern charm of the vessel will transport you in time to the early 19th century. When these vessels weren’t used for transportation, they were luxury cruises only available to the wealthy class. The Southern Belle is a modern sightseeing tribute that moment in time."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "The Southern Belle company offers many touring options that vary in length. One of the more popular is the Sunset Cruise, a 1.5 hour river ride where you can grab a glass of wine from the concession, kick back, and watch the light fade over the water. It starts around $36 per person."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Some of their other cruising options include a narrated Sights Cruise, a romantic two-hour Sip & Sail with dinner and wine pairings, dinner cruises, and Maclellan Island eco tours, amongst many other options for your party."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["Check ", createVNode("a", {
              href: "https://chattanoogariverboat.com/",
              target: "_blank",
              children: "their website"
            }), " for more listings and availability."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Food Tour", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "Finding the right places to eat in any city can be an overwhelming task, why not leave it to a professional through Chatt Taste."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "They provide private tours, events, and at the time of writing three distinct group tours for varied Chattanooga culinary experiences:"
          })
        }), createVNode("div", {
          class: "pb-5",
          children: [createVNode("div", {
            class: "pb-2",
            children: [createVNode("b", {
              children: "Downtown Chattanooga Food Tour."
            }), " Explore downtown Chattanooga’s food scene and learn about our city exploratory adventure."]
          }), createVNode("div", {
            class: "pb-2",
            children: [createVNode("b", {
              children: "Historic Southside Food Tour."
            }), " Explore Historic Southside food offerings in this two hour guided adventure."]
          }), createVNode("div", {
            class: "pb-2",
            children: [createVNode("b", {
              children: "ChattaBrunch Food Tour."
            }), " Can you guess what this ones about? It’s hard to go wrong with a mid morning combination of food, art, history and mimosas."]
          })]
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["More offerings and detailed information on the restaurants and individual tour details are available on ", createVNode("a", {
              href: "https://www.chatttaste.com/",
              target: "_blank",
              children: "their website"
            }), " linked below as they are subject to periodic change."]
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: "This is another tour company with a 5 star review set. Previous foodies rave about their experiences with the various hosts and call out their knowledge and friendliness."
          })
        }), createVNode("div", {
          class: "pb-5",
          children: createVNode(_components.p, {
            children: ["If you’re thinking about signing up for one, you can browse all their current tours ", createVNode("a", {
              href: "https://www.chatttaste.com/",
              target: "_blank",
              children: "here"
            }), "."]
          })
        })]
      })]
    }), createVNode("section", {
      children: [createVNode("div", {
        children: createVNode("h2", {
          class: "text-5xl w-full break-words",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Guided Tours Summary", createVNode("span", {
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
              children: "🚐 Tour"
            }), createVNode("th", {
              class: "px-4 py-2 border border-gray-300",
              children: "📍 Description"
            })]
          })
        }), createVNode("tbody", {
          children: [createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🚌 Chattanooga Trolley Tours"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Vintage bus tours covering Chattanooga history, folklore, or trains—great for families and history buffs."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "👻 Chattanooga Ghost Tours"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Spooky walking tours, ghost hunts with equipment, and extended Deluxe tours with refreshment stops."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🦆 Chattanooga Ducks"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Narrated WWII amphibious duck boat that tours downtown then splashes into the Tennessee River."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🛴 Chattanooga Rydables"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Guided motorized-scooter tours across the Walnut Street Bridge and through downtown."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🚲 Trolley Pub Chattanooga"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Pedal-powered BYOB group tours with music and stops at local bars—great for adult outings."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🚢 Southern Belle Riverboat"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Dinner and scenic cruises on a historic riverboat with options like sunset, sights, and Sip & Sail."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🦇 Bat Cave Sunset Kayak"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Guided kayak trip to watch 100,000 bats emerge at sunset. Beginner-friendly and highly rated."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🪖 Chickamauga Battlefield Tours"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Ranger-led or self-guided tours via the NPS app or with local historians through preserved battlefields."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🥾 Experience Chattanooga Hikes"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Private hiking tours with photography and local guides. Includes alpaca visits, waterfalls, and panoramic overlooks."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🕯️ Raccoon Mountain Caverns"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Guided cave walks past living formations, plus wild spelunking crawls deeper into the mountain."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🍴 Chatt Taste Food Tours"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Curated food tours of downtown and the Southside. Also offers brunch tours with art and mimosas."
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
            href: "/chattanooga/guides/cloudland-canyon",
            target: "_blank",
            children: "Cloudland Canyon State Park"
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
const url = "/chattanooga/guides/tours";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/tours.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/tours.mdx";
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
