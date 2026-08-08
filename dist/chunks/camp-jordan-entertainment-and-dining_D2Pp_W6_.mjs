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
  "published": false,
  "title": "Camp Jordan in East Ridge: A Scene for Entertainment and Dining",
  "originalDate": "03/05/2026",
  "lastUpdated": "03/05/2026",
  "readTime": "3 minutes",
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "Camp Jordan and East Ridge have changed significantly since 2020. Topgolf, Twin Peaks, Jonathan's Grille, Craft Axe, Cigars International, and more—a guide to dining, sports, bachelor/bachelorette parties and entertainment options in the plaza.",
  "tags": [{
    "type": "guide",
    "tag": "around-the-city"
  }],
  "neighborhoods": ["East Ridge", "Camp Jordan"],
  "petFriendly": false,
  "kidFriendly": true,
  "seasonality": "Year-round",
  "images": [{
    "src": "/editorials/camp-jordan/top-golf-camp-jordan.jpg"
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
        "headline": "Camp Jordan and East Ridge: Entertainment and Dining in a Changing Area",
        "description": "Camp Jordan and East Ridge have changed significantly since 2020. A guide to dining, sports bars, Topgolf, Craft Axe, Cigars International, and more in the plaza.",
        "image": "https://thingshappening.com/editorials/camp-jordan-east-ridge.jpg",
        "author": {
          "@type": "Person",
          "name": "Jack Burum"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Things Happening",
          "url": "https://thingshappening.com"
        },
        "datePublished": "2026-02-15",
        "dateModified": "2026-02-18",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://thingshappening.com/chattanooga/editorials/camp-jordan-east-ridge"
        },
        "about": {
          "@type": "Place",
          "name": "Camp Jordan",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "East Ridge",
            "addressRegion": "TN",
            "addressCountry": "US"
          }
        }
      })
    }), "\n", createVNode("div", {
      class: "text-xl",
      children: [createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "If we rewind the clock to 2020, this post doesn’t exist. Camp Jordan, and East Ridge more generally, have changed significantly in a short period of time, mostly for the better."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: ["Today you can choose from a variety of activities and venues for entertainment and socializing depending on what you or your group are in the mood for. If you’re planning a bachelor party in Chattanooga and want something easy that doesn’t require driving all over the city, the Camp Jordan area in East Ridge offers several options within walking distance of each other. For a more downtown, walkable weekend—Choo Choo and Southside—see ", createVNode("a", {
            href: "/chattanooga/editorials/weekend-hosting-chattanooga-choo-choo-edition",
            children: "Weekend Hosting in Chattanooga: Choo Choo Edition"
          }), "."]
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: ["You can compete with friends, or just get some practice shots in for your next golf round at Topgolf. Afterwards you might catch your favorite college football game at ", createVNode("a", {
            href: "/chattanooga/guides/live-sports",
            children: "Twin Peaks"
          }), ", a popular sports bar chain nearby."]
        })
      }), createVNode("figure", {
        class: "my-8 flex flex-col items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/camp-jordan/top-golf-camp-jordan.jpg",
          alt: "Topgolf driving range and hitting bays at Camp Jordan in East Ridge",
          className: "rounded-lg mx-auto"
        }), createVNode("figcaption", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Topgolf at Camp Jordan"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Speaking of sports bars with wide food and drink menus, directly across the street from Twin Peaks is Jonathan’s Grille. This restaurant has been a steady presence in the Camp Jordan plaza since 2020."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Note:"
          }), " Twin Peaks accepts reservations, while Jonathan’s is first come, first serve. Both restaurants have indoor and outdoor seating options when the weather cooperates."]
        })
      }), createVNode("figure", {
        class: "my-8 flex flex-col items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/camp-jordan/twin-peaks-camp-jordan.jpg",
          alt: "Twin Peaks sports bar exterior at Camp Jordan in East Ridge",
          className: "rounded-lg mx-auto"
        }), createVNode("figcaption", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Twin Peaks at Camp Jordan"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "One benefit of having both options is that if the wait at one spot is too long, you have an easy backup across the street. And if both waits are extensive, there are several fast casual dining options along the same strip including Chick-fil-A, Dairy Queen, Pizza Bros, Panda Express, and a few others."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Depending on how much time you have, there is also a large cigar lounge a couple doors down called Cigars International. It has an extensive selection of cigars, comfortable seating, and a food and drink menu of its own. The space is larger than you might expect, with recliners and a full cigar shop inside if you want to pick something up to go."
        })
      }), createVNode("figure", {
        class: "my-8 flex flex-col items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/camp-jordan/cigars_international_east_ridge.jpg",
          alt: "Cigars International lounge and cigar shop at Camp Jordan in East Ridge",
          className: "rounded-lg mx-auto"
        }), createVNode("figcaption", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Cigars International at Camp Jordan"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Maybe you’ll end up there after claiming victory at Craft Axe, an axe throwing business also located in the plaza. If you haven’t tried axe throwing before, it’s a surprisingly good time once you land a few throws on the board. It’s also an easy group activity if you’re organizing a bachelor party or birthday outing and want something competitive before heading to dinner or drinks. Craft Axe does have beers on tap, if that helps with the decision making. Just maybe don’t go overboard before your match."
        })
      }), createVNode("figure", {
        class: "my-8 flex flex-col items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/camp-jordan/craft_axe_throwing_east_ridge.jpg",
          alt: "Craft Axe Throwing venue at Camp Jordan in East Ridge",
          className: "rounded-lg mx-auto"
        }), createVNode("figcaption", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Craft Axe Throwing at Camp Jordan"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "This area tends to get pretty crowded for big sports events, so if you’re heading out to watch a major game it’s best to arrive early."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: ["If you need some time to kill for one reason or another, there’s also a Starbucks for coffee, a large Bass Pro Shops for outdoor gear, Cigars International for a casual cigar, several ", createVNode("a", {
            href: "/chattanooga/guides/outdoors",
            children: "fishing spots around the park"
          }), ", and a two-mile paved loop if you just want to take a walk."]
        })
      }), createVNode("figure", {
        class: "my-8 flex flex-col items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/camp-jordan/bass-pro-camp-jordan.jpg",
          alt: "Bass Pro Shops storefront at Camp Jordan plaza in East Ridge",
          className: "rounded-lg mx-auto"
        }), createVNode("figcaption", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Bass Pro Shops at Camp Jordan"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "If you’re organizing a Chattanooga bachelor party, meeting friends for a Saturday outing, or simply getting out of the house for a few hours, Camp Jordan probably has something that fits the bill. It’ll be interesting to see how the area continues to grow over the next few years."
        })
      }), createVNode("div", {
        class: "pt-8 border-t border-gray-200 mt-8 pb-12",
        children: createVNode("p", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: [createVNode("strong", {
              children: "Related:"
            }), " For more ways to explore the city, see our ", createVNode("a", {
              href: "/chattanooga/guides/tag/around-the-city",
              children: "around-the-city guides"
            }), " (tours, confections, weekend hosting). For where to watch games and live sports in the area, check the ", createVNode("a", {
              href: "/chattanooga/guides/live-sports",
              children: "Chattanooga Live Sports Guide"
            }), ". For a walkable downtown weekend, ", createVNode("a", {
              href: "/chattanooga/guides/weekend-hosting-chattanooga-choo-choo-edition",
              children: "Weekend Hosting: Choo Choo Edition"
            }), ". For trails and outdoor options, the ", createVNode("a", {
              href: "/chattanooga/guides/outdoors",
              children: "Outdoors Guide"
            }), "."]
          })
        })
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

const url = "/chattanooga/editorials/camp-jordan-entertainment-and-dining";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/editorials/camp-jordan-entertainment-and-dining.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/editorials/camp-jordan-entertainment-and-dining.mdx";
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
