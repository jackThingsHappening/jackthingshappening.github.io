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
  "title": "A Playbill for Chattanooga Performing Arts",
  "lastUpdated": "07/29/2026",
  "originalDate": "10/06/2025",
  "readTime": "6 minutes",
  "tags": [{
    "type": "guide",
    "tag": "longform"
  }],
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "Guide to live performance venues and shows in Chattanooga.",
  "ogImage": "/images/social/art.png",
  "iconPath": "../../../images/icons-new/theater.png",
  "images": [{
    "src": "/images/chattanooga_guides/performance-arts/tivoli-theatre.jpg",
    "position": "upper"
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode("div", {
    class: "override-jakarta",
    style: "font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';",
    children: [createVNode("div", {
      class: "pb-5",
      children: createVNode("a", {
        href: "/pdfs/chattanooga/performance-arts.pdf",
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
      class: "text-xl pb-12 pt-10",
      children: createVNode("div", {
        children: [createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "As a mid-sized southern city, Chattanooga’s live performance scene punches above its weight class, find yourself dazzled by productions taking place in modern or historic venues."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "Bring a lawn chair and your evening snack medley for an outdoor show in the summertime. We’re not required by law to recommend an umbrella but we’ll recommend one anyway, Chattanooga can stun even the most confident cloud readers with a 1/4 inch of rainfall without much forewarning."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "You claim an unquenchable thirst for novelty? For today color yourself lucky, Chattanooga’s got broadway style shows, stand-up comedy, an orchestra, and indie bands."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: ["The ", createVNode("a", {
              href: "https://chattanoogasymphony.org/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Chattanooga Symphony & Opera"
            }), " even plays film scores live to picture, they’ve worked their way through Star Wars films in recent seasons. You read that right, a full orchestra playing along to the movie. Pardon the repetition, but there really is something here for everyone."]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "This guide walks you through the city’s notable and overlooked venues, types of acts you’ll find, and tips for making a night out of it. If you’re planning a weekend trip or just looking for something new in a familiar city, Chattanooga has a seat with your name on it."
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
                class: "text-3xl  gradient-text",
                href: "#theatre",
                children: "Theatre"
              })
            }), createVNode("div", {
              class: "pb-4 ",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                href: "#comedy",
                children: "Comedy"
              })
            }), createVNode("div", {
              class: "pb-4 ",
              children: createVNode("a", {
                class: "text-3xl gradient-text",
                target: "_blank",
                href: "/chattanooga/guides/live-music",
                children: "Live Music (full guide)"
              })
            })]
          })
        })]
      })
    }), createVNode("section", {
      class: "text-xl pb-2",
      children: createVNode("div", {
        children: createVNode("h2", {
          id: "theatre",
          class: "text-4xl mb-2",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Theatre", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        })
      })
    }), createVNode("section", {
      class: "text-xl pb-12",
      children: [createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl mb-4",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Tivoli Foundation", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "Composed of three separate venues, this important Chattanooga foundation is the city staple for live performances of various types. The restoration and preservation of these historic buildings has been and remains a priority for the city of Chattanooga, an investment valued by our residents and visitors alike. After a roughly $75 million restoration that kept it dark since 2022, the Tivoli Theatre on Broad Street is set to reopen October 20, 2026, with Billy Strings booked for the first shows back. In the meantime events have run at Memorial Auditorium and the Walker Theatre."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "These venues are known for their ability to charm and captivate audiences with their architecturally styles. Each has its own character and history that immediately adds to the performance experience."
          })
        }), createVNode("div", {
          class: "pb-2",
          children: [createVNode(_components.p, {
            children: "To provide a better idea of what you might find on their event schedules here is a non exhaustive idea of types performances you can attend at one of the foundations theatres."
          }), createVNode("ul", {
            class: "text-xl",
            children: [createVNode("li", {
              class: "pb-1",
              children: "Broadway shows."
            }), createVNode("li", {
              class: "pb-1",
              children: "Comedy by both established and up and coming comedians."
            }), createVNode("li", {
              class: "pb-1",
              children: "Intimate and unique music performances."
            }), createVNode("li", {
              class: "pb-1",
              children: "Film Series."
            })]
          })]
        }), createVNode("div", {
          class: "pb-4",
          children: [createVNode("div", {
            class: "pb-4",
            children: [createVNode("b", {
              class: "text-2xl",
              children: "Tivoli Theatre."
            }), " Opening in 1921 the Tivoli Theatre has served Chattanooga for more than 90 years. A historic Beaux-Arts performance venue on Broad Street, the ‘Jewel of the South’ hosts everything from Broadway tours to concerts. ", createVNode("b", {
              children: "Reopening October 20, 2026 after a multi-year, ~$75 million restoration"
            }), ", alongside a new Tivoli Performing Arts Center (including the Bobby Stone Theatre) in the adjacent Fowler Brothers building."]
          }), createVNode("div", {
            class: "pb-4",
            children: "You’ll notice the building is stylistically similar to the Chicago Theatre, which was also built in 1921. Not a coincidence, Chattanooga hired the same architecture firm for Tivoli, Rapp & Rapp, a famous firm at the time known for the Beaux-Arts style. Reuben H. Hunt, a famous Chattanooga architect was also a partner on this project."
          }), createVNode("div", {
            class: "pb-4",
            children: [createVNode("b", {
              class: "text-2xl",
              children: "Soldiers & Sailors Memorial Auditorium."
            }), " Often abbreviated to ‘Memorial’ this venue was dedicated to Hamilton County’s armed forces in 1922 and serves as living dedication to our past, current and future service members. Host to up to 3,866 attendees Memorial is a great place for concerts, comedy and community events."]
          }), createVNode("div", {
            class: "pb-4",
            children: [createVNode("b", {
              class: "text-2xl",
              children: "Walker Theatre."
            }), " Located in the same building as Memorial Auditorium, the Walker Theatre is the more intimate performance venue hosting 851 people maximum per show. It’s excellent acoustics and seating arrangement make for an ideal performance venue preferred ofr its charm and personality."]
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "The styles of beaux-arts elements of buildings bring an immediate positive energy to the audience and cast alike aiding the performance and leaving attendees asking themselves ‘why aren’t more buildings like this in our time’."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: ["To find the latest event offerings and reserve your spot visit the ", createVNode("a", {
              href: "https://tivolichattanooga.com/upcoming-events",
              target: "_blank",
              children: "Tivoli Chattanooga"
            }), " Website.\nYou can filter by venue or browse the full calendar."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl mb-3 mt-4",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Scenic City Shakespeare", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "As far as reasons to get outside go, Shakespeare in the Park is a great one. Unique engaging performances in an open auditorium on a cool (unlikely) evening."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: ["Come out to watch a group of passionate artists perform Shakespeare in the park at ", createVNode("a", {
              href: "/chattanooga/guides/outdoors?tags=park",
              target: "_blank",
              children: "Greenway Farms"
            }), " in Hixson. The company stages two productions a year, typically in spring and fall on Friday and Saturday evenings, and admission is always free with no reservations required. Their spring 2026 run was Othello. Check for the next production on ", createVNode("a", {
              href: "https://sceniccityshakespeare.org/",
              target: "_blank",
              children: "their website"
            }), "."]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "These performances are perfect for people who appreciate the heart, passion, and hard-work that goes into crafting a live production, enjoy smaller crowds for a less busy viewing experience, or you like different reasons to get outside for an evening."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "It is recommended audience members bring lawn chairs, blankets, and refreshments to make the most of the evening."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: [createVNode(_components.p, {
            children: "Past Shakespeare productions included:"
          }), createVNode("ul", {
            class: "text-xl",
            children: [createVNode("li", {
              class: "pb-1",
              children: "Much Ado about Nothing"
            }), createVNode("li", {
              class: "pb-1",
              children: "A Midsummer Night’s Dream"
            }), createVNode("li", {
              class: "pb-1",
              children: "The Comedy of Errors"
            }), createVNode("li", {
              class: "pb-1",
              children: "Macbeth"
            })]
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "To give you a first hand account a past audience member commented ‘Their Shakespeare in the Park performances bring classic theater to life in such a vibrant and beautiful way. I recently saw Macbeth, and it was nothing short of phenomenal, the acting was powerful, the staging was creative, and the entire production was captivating from start to finish.’."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: ["Tickets, read along scripts and more can be found ", createVNode("a", {
              href: "https://sceniccityshakespeare.org/tickets",
              target: "_blank",
              children: "here"
            }), "."]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "Time saving note:"
            }), " Locating their outdoor stage has given some past attendees difficulty, so Scenic City Shakespeare provided a great ", createVNode("a", {
              href: "https://sceniccityshakespeare.org/directions",
              target: "_blank",
              children: "aerial visual to help"
            }), "."]
          })
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/performance-arts/tivoli-theatre.jpg",
          alt: "Tivoli Theatre exterior showing the historic Beaux-Arts style facade on Broad Street",
          width: 700,
          height: 600,
          className: "rounded-lg"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "The historic Tivoli Theatre on Broad Street."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl mb-4",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Barking Legs Theater", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "A small venue with a big energy brought to you by a variety of diverse performers and their crew members."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "Located just off Dodds Avenue in Highland Park the Barking Legs Theater describes themselves as an eclectic, creative, inclusive environment for a variety of different community artists and performers."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "This theater company is known for their wide range of intimate performances that have included contemporary dance, experimental jazz, poetry slams, singer-songwriters, film nights, and local storytelling. They don’t run short on novelty, making it easy to go back for a seconds or thirds."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "If want to support local art, or you enjoy seeing unique high quality performances in a welcoming environment check out a show someday soon!"
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: ["Events run year round, the calendar gets updated regularly based on performer availability. Most of the performances are on weekend evenings, and tickets are regularly under $20. For the most updated event info, check ", createVNode("a", {
              href: "https://www.barkinglegs.org/",
              target: "_blank",
              children: "their website"
            }), "."]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: [createVNode(_components.p, {
            children: "Past events have included:"
          }), createVNode("ul", {
            class: "text-xl",
            children: [createVNode("li", {
              children: "Jazz Tuesdays with local or touring musicians"
            }), createVNode("li", {
              children: "The Floor is Yours: Open mic poetry and storytelling"
            }), createVNode("li", {
              children: "Dance and movement showcases"
            }), createVNode("li", {
              children: "Independent film screenings"
            }), createVNode("li", {
              children: "Intimate concerts"
            })]
          })]
        })]
      }), createVNode("div", {
        class: "mb-16 mt-16 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/performance-arts/soldiers-and-sailors.jpg",
          alt: "Soldiers and Sailors Memorial Auditorium exterior showing the historic building facade",
          width: 700,
          height: 600,
          className: "rounded-lg"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Soldiers & Sailors Memorial Auditorium, dedicated to Hamilton County’s armed forces and hosting up to 3,866 attendees for concerts and events."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl mb-4",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Chattanooga Theatre Centre", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "100+ years strong as a mainstay of Chattanooga performing arts. The Chattanooga Theatre Centre is one of the oldest and largest community theatres in the US, running year round productions."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "They’re located in North Shore, next to Coolidge Park, hosting a wide range of shows right next to the Tennessee River. At any one time you might find:"
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode("ul", {
            class: "text-xl",
            children: [createVNode("li", {
              children: "Family friendly musicals"
            }), createVNode("li", {
              children: "Classic Drama"
            }), createVNode("li", {
              children: "Youth performances"
            })]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: ["They seem to put on new productions every 6-8 weeks with shows usually Thursday - Sunday, but check their ", createVNode("a", {
              href: "https://ci.ovationtix.com/35678",
              target: "_blank",
              children: "event calendar"
            }), " for more details and to purchase tickets."]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "Past productions have included:"
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode("ul", {
            class: "text-xl",
            children: [createVNode("li", {
              children: "The Curious Incident of the Dog in the Night-Time"
            }), createVNode("li", {
              children: "Fences"
            }), createVNode("li", {
              children: "Matilda the Musical"
            }), createVNode("li", {
              children: "A Raisin in the Sun"
            })]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "Helpful note:"
            }), " There’s free parking onsite, but it can fill up quickly on weekends. Arriving 15–20 minutes early can be a good idea."]
          })
        })]
      }), createVNode("div", {
        class: "mb-12 mt-12 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/images/chattanooga_guides/performance-arts/chattanooga-theatre-center.jpg",
          alt: "Chattanooga Theatre Centre exterior showing the historic building facade and entrance",
          width: 700,
          height: 600,
          className: "rounded-lg"
        }), createVNode("div", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "The historic Chattanooga Theatre Centre, one of the oldest community theatres in the US, located in North Shore next to Coolidge Park."
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl mb-4",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Chattanooga Symphony & Opera", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "Chattanooga’s professional orchestra has anchored the city’s classical scene for decades, pairing a full symphony with opera and pops programming across the season."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "A single season might swing from Rachmaninoff and Tchaikovsky to Handel’s Messiah, a Cirque de la Symphonie pops night, or a film score played live to picture. Performances have been at Soldiers & Sailors Memorial Auditorium during the Tivoli renovation, with a return to the Tivoli on the horizon."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: ["Tickets run through the box office at (423) 267-8583 or online, where a small convenience fee applies. Browse the full season on ", createVNode("a", {
              href: "https://chattanoogasymphony.org/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "their website"
            }), "."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl mb-4",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Chattanooga Ballet", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "For roughly half a century Chattanooga Ballet has been the city’s home for dance, a professional company and a school under one roof, based on North Market Street on the North Shore."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "Their bigger productions land at UTC’s Fine Arts Center, and each December the Nutcracker fills Memorial Auditorium with more than 200 dancers. In 2027 they head back to the restored Tivoli with Curveball, a ballet about Jackie Mitchell, the Chattanooga pitcher who struck out Babe Ruth."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: ["They also run a school for dancers age three and up. Find current productions and tickets on ", createVNode("a", {
              href: "https://www.chaballet.org/tickets",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "their website"
            }), ", or call (423) 265-0617."]
          })
        })]
      }), createVNode("div", {
        children: [createVNode("h2", {
          class: "text-3xl mb-4",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Honorable Mentions", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "If you haven’t found what you came here for, or are looking for something more niche, there are a handful of other passionate production companies performing around the area:"
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "Back Alley Productions (Mars Theatre):"
            }), "  A nonprofit production company in LaFayette, GA since 2012. They perform a full season of plays and musicals at the Historic Mars Theatre, performances typically fall–spring, but their dates shift every year. BAP has been voted the Best Live Performance Venue in North Georgia 2018-2020."]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "Signal Mountain Playhouse:"
            }), " Trek up to Signal Mountain for a summer outdoor musical each July (typically Friday–Saturday evenings on weekends) and a winter indoor show around February at the Mountain Arts Community Center. Find out more on their ", createVNode("a", {
              href: "https://www.facebook.com/SignalMountainPlayhouse/",
              target: "_blank",
              children: "Facebook page"
            }), "."]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "Ensemble Theatre of Chattanooga:"
            }), " Ensemble runs year round new productions every ~6–8 weeks. Past seasons included short play festivals in January–February and musical concerts in summer. More information can be found ", createVNode("a", {
              href: "https://www.ensembletheatreofchattanooga.com/",
              target: "_blank",
              children: "here"
            }), "."]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "East Brainerd Community Theater:"
            }), " Based out of Christ United Methodist Church on East Brainerd Road, EBCT usually stages one play and musical per year. The summer musical tends to be a big production with a large cast. Past shows have been ", createVNode(_components.em, {
              children: "The Music Man"
            }), ", ", createVNode(_components.em, {
              children: "Pirates of Penzance"
            }), ", and ", createVNode(_components.em, {
              children: "Guys and Dolls"
            }), ". More details found at ", createVNode("a", {
              href: "https://ebctchatt.com",
              target: "_blank",
              children: "ebctchatt.com"
            }), "."]
          })
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: [createVNode("b", {
              children: "Bessie Smith Cultural Center:"
            }), " Named for Chattanooga’s own “Empress of the Blues,” this East MLK Boulevard institution pairs an African American history museum with a performance hall that hosts concerts, community events, and its annual legacy gala. Details at ", createVNode("a", {
              href: "https://www.bessiesmithcc.org/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "bessiesmithcc.org"
            }), "."]
          })
        })]
      })]
    }), createVNode("section", {
      class: "text-xl pb-12 pt-4",
      children: createVNode("div", {
        children: [createVNode("h2", {
          id: "comedy",
          class: "text-4xl mb-4",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Comedy", createVNode("span", {
            class: "color-pink ml-1",
            children: createVNode("b", {
              children: "."
            })
          })]
        }), createVNode("div", {
          class: "pb-6",
          children: createVNode(_components.p, {
            children: "We’re curating a list of the best stand-up, improv, and open-mic comedy spots in Chattanooga. Check back soon for venues, recurring shows, and tips on getting tickets and great seats."
          })
        }), createVNode("div", {
          class: "pb-6",
          children: [createVNode("h3", {
            class: "text-3xl mb-4",
            style: "font-family: 'Libre Baskerville', serif;",
            children: ["The Comedy Catch", createVNode("span", {
              class: "color-pink ml-1",
              children: createVNode("b", {
                children: "."
              })
            })]
          }), createVNode("div", {
            class: "pb-4",
            children: [createVNode(_components.p, {
              children: ["The Comedy Catch runs shows every night. Start times vary on night and show type. Check their ", createVNode("a", {
                href: "https://www.thecomedycatch.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "website"
              }), " for the latest details. They’re located on Station Street in the Southside entertainment district."]
            }), createVNode("div", {
              class: "pb-4",
              children: [createVNode(_components.p, {
                children: "They have the big names you’ve seen come to town regularly. In recent years they’ve hosted the likes of:"
              }), createVNode("ul", {
                class: "text-xl",
                children: [createVNode("li", {
                  children: "Kevin Nealon"
                }), createVNode("li", {
                  children: "AJ Wilkerson"
                }), createVNode("li", {
                  children: "Jessica Michelle Singleton"
                }), createVNode("li", {
                  children: "Steve Byrne"
                })]
              })]
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode(_components.p, {
                children: "If you enjoy supporting brand new acts, they have the longest running comedy open mic in Chattanooga every Wednesday. Also note that they charge a $5 minimum food/drink purchase per person."
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode(_components.p, {
                children: "Important note for the parents reading, some of their events are kid friendly, the events list on their website should have an indicator."
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode(_components.p, {
                children: ["If you like a bigger comedy style event they are one of the yearly host’s of Lookout Comedy Festival in the fall. It’s a multi-day event with shows at a few unique Chattanooga venues. Check out their website ", createVNode("a", {
                  href: "https://www.lookoutcomedyfestival.com/",
                  target: "_blank",
                  children: "Lookout Comedy Festival"
                }), " for more information."]
              })
            })]
          }), createVNode("div", {
            class: "pb-6",
            children: [createVNode("h3", {
              class: "text-3xl mb-4",
              style: "font-family: 'Libre Baskerville', serif;",
              children: ["Improv Chattanooga", createVNode("span", {
                class: "color-pink ml-1",
                children: createVNode("b", {
                  children: "."
                })
              })]
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode(_components.p, {
                children: ["Chattanooga has it’s own local improv group. You can see them in a variety venues around the city and surrounding area. They may be performing after hours at the library, or the Barking Legs Theatre, or a coffee shop in Cleveland. Ticket prices vary. You can find details on future performances on ", createVNode("a", {
                  href: "https://improvchattanooga.com/shows/",
                  target: "_blank",
                  children: "their website"
                }), "."]
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode(_components.p, {
                children: "In addition to live performances they also offer free classes regularly and can be hired for events."
              })
            })]
          }), createVNode("div", {
            class: "pb-6",
            children: [createVNode("h3", {
              class: "text-3xl mb-4",
              style: "font-family: 'Libre Baskerville', serif;",
              children: ["Honorable Mentions", createVNode("span", {
                class: "color-pink ml-1",
                children: createVNode("b", {
                  children: "."
                })
              })]
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("div", {
                class: "pb-6",
                children: createVNode(_components.p, {
                  children: [createVNode("b", {
                    children: "JJ’s Bohemia:"
                  }), " Although primarily a well known music venue in the area, JJ’s (as it’s affectionately known) also hosts a variety of comedy shows throughout the year. Check out the events on their ", createVNode("a", {
                    href: "https://www.facebook.com/jjs.bohemia/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Facebook page"
                  }), " for more details."]
                })
              })
            }), createVNode("div", {
              class: "pb-4",
              children: createVNode("div", {
                class: "pb-6",
                children: createVNode(_components.p, {
                  children: [createVNode("b", {
                    children: "Soldiers & Sailors Memorial Auditorium:"
                  }), " The theatre we included for live productions will sometimes host well known or up and coming regional comedians."]
                })
              })
            })]
          })]
        })]
      })
    }), createVNode("section", {
      children: [createVNode("div", {
        children: createVNode("h2", {
          class: "text-5xl w-full break-words mb-8",
          style: "font-family: 'Libre Baskerville', serif;",
          children: ["Live Performance Venues in Chattanooga", createVNode("span", {
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
              children: "🎭 Venue"
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
              children: "🎟️ Tivoli Foundation Theatres"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Historic downtown venues hosting Broadway shows, concerts, comedy, and film series. Includes Tivoli Theatre (reopening October 2026), Memorial Auditorium, and Walker Theatre."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🌳 Scenic City Shakespeare"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Seasonal outdoor Shakespeare productions at Greenway Farms—perfect for a laid-back night with lawn chairs and blankets."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🎶 Barking Legs Theater"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Eclectic performances including jazz, storytelling, dance, poetry, and indie music. Affordable shows in an intimate Highland Park venue."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🏛️ Chattanooga Theatre Centre"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "100-year-old community theatre offering musicals, dramas, and youth performances year-round on the North Shore."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🎬 Back Alley Productions"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "North Georgia troupe performing classics and comedies fall–spring at the historic Mars Theatre in LaFayette."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "⛰️ Signal Mountain Playhouse"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Family-friendly outdoor musicals in July and cozy winter shows in February at the MACC on Signal Mountain."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🧩 Ensemble Theatre of Chattanooga"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Small venue known for socially conscious, contemporary plays and festivals—new shows every 6–8 weeks."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🎭 The Comedy Catch"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Chattanooga’s longest-running comedy club featuring touring headliners, local showcases, and weekly open mics. Located in Southside’s Station Street district."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🎪 Improv Chattanooga"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Local improv troupe performing at various venues around the city. Offers free classes and can be hired for private events."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🎻 Chattanooga Symphony & Opera"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Professional orchestra and opera presenting classics, pops, and live film scores, currently at Memorial Auditorium."
            })]
          }), createVNode("tr", {
            class: "bg-white hover:bg-gray-50 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🩰 Chattanooga Ballet"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "The city’s professional dance company and school, staging the December Nutcracker at Memorial Auditorium plus season shows at UTC’s Fine Arts Center."
            })]
          }), createVNode("tr", {
            class: "bg-gray-50 hover:bg-gray-100 transition duration-200",
            children: [createVNode("td", {
              class: "px-4 py-3 border border-gray-300 font-semibold",
              children: "🎤 Bessie Smith Cultural Center"
            }), createVNode("td", {
              class: "px-4 py-3 border border-gray-300",
              children: "Museum and performance hall on East MLK Boulevard honoring the “Empress of the Blues” with concerts and community events."
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
            href: "/chattanooga/guides/live-music",
            target: "_blank",
            children: "Live Music"
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
const url = "/chattanooga/guides/performance-arts";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/performance-arts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/guides/performance-arts.mdx";
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
