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
  "title": "Finding a Shoreline at Booker T. Washington State Park",
  "originalDate": "02/08/2026",
  "lastUpdated": "02/11/2026",
  "readTime": "4 minutes",
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "A winter hiking visit to Booker T. Washington State Park near Chattanooga. Rocky shoreline, driftwood, waterfowl, and long views across Chickamauga Lake to the Appalachian hills. Dog friendly trails and kayak launch.",
  "tags": [{
    "type": "guide",
    "tag": "outdoors"
  }],
  "seasonality": "Year-round; winter offers fewer crowds and expanded shoreline",
  "images": [{
    "src": "/editorials/long-water-view-booker-t-washington-park.jpg",
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
        "headline": "Finding a Shoreline at Booker T. Washington State Park",
        "description": "A winter hiking visit to Booker T. Washington State Park near Chattanooga. Rocky shoreline, driftwood, waterfowl, and long views across Chickamauga Lake.",
        "image": "https://thingshappening.com/editorials/long-water-view-booker-t-washington-park.jpg",
        "author": {
          "@type": "Person",
          "name": "Jack Burum"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Things Happening",
          "url": "https://thingshappening.com"
        },
        "datePublished": "2026-02-08",
        "dateModified": "2026-02-28",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://thingshappening.com/chattanooga/editorials/beach-day-booker-t-washington-state-park"
        },
        "about": {
          "@type": "Park",
          "name": "Booker T. Washington State Park",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chattanooga",
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
          children: "I drove out to Booker T. Washington State Park, looking for a spot to get outside and find some open water views while hiking around Chickamauga Lake. My dog, Merlin, came along, happy as always to be invited."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Parking here was easy and free. The turnoff sneaks up on you—right where the park sign stands, that’s the entrance. Obvious once you know, still worth noting."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Boat traffic around the lake runs lighter here than in other parts due to shallow waters, but stay alert anyway."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "We visited in winter. Fewer people and fewer bugs. Less boat traffic too. The beach stretched wider from a rain dry spell. Humidity stayed low. The air felt brisk and clean."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "We strolled the shoreline, it’s maybe 10-20 yards of walkable frontage, though likely less if you visit during a rainy stretch. The ground was more rock than dirt, mostly small stones from marble to baseball in size. Mussel and snail shells cover a surprising amount of the ground as well. This stretch measured about 0.3 to 0.5 miles long that day, I wasn’t tracking so don’t hold me to the estimate."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Merlin and I found fewer skipping stones than we’d hoped. Maybe a bad day for them. Maybe we need to check our eyes checked."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "I regretted leaving the binoculars at home. The hills, birds, and wide water would have been fun to view up close."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Dried driftwood lies scattered along the walk. Beautiful pieces, some almost like sculptures you’d see at Sculpture Fields. A few logs stretch from bank to water. Easy to step over, but small children might need a helping hand. One thick log sits just right as a natural bench if your legs want a break."
        })
      }), createVNode("div", {
        class: "mb-12 mt-8 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/driftwood-booker-t-washington-park.jpg",
          alt: "Driftwood along the shoreline at Booker T Washington State Park"
        }), createVNode("div", {
          class: "text-center mt-4 text-[18px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Driftwood running from the bank to the water"
          })
        })]
      }), createVNode("div", {
        class: "mb-12 mt-8 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/driftwood-bench-booker-t-washington-park.jpg",
          alt: "Driftwood log forming a natural bench at Booker T Washington State Park"
        }), createVNode("div", {
          class: "text-center mt-4 text-[18px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "A natural bench"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "The forest around us was mostly deciduous. A few pines mix in among the leaf shedders. Tall trees provide good shade, except right in the middle of the afternoon."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "The views open up long. Chickamauga Lake spreads wide in the distance. Appalachian hills rise on the horizon."
        })
      }), createVNode("div", {
        class: "mb-12 mt-8 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/long-water-view-booker-t-washington-park.jpg",
          alt: "View across Chickamauga Lake with Appalachian hills in the distance"
        }), createVNode("div", {
          class: "text-center mt-4 text-[18px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Chickamauga Lake opens up, Appalachian hills on the horizon"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Waterfowl joined us mallards and wood ducks. Vultures circle overhead. Birds of prey called from the forest edge. A kingfisher zipped past low and fast. The usual small brush birds and mammals we’re around too."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "The walk from the main recreation area ended up being short and easy. You can extend it into the 1.1-mile nature trail (single-use) or hop on one of the longer multi-use trails for more distance."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "This spot would work well for shoreline fishing. Kayaks or paddleboards launch easily here. A waterside picnic fits—bring fold-out chairs."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Worth noting the area stayed exceptionally clean. And it would be nice to keep it that way, if you could help out."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "I don’t think the park has a name for this strip, so for I call it Merlin’s Cove. It has a little bit of magic going for it and Merlin happens to be my dog’s name. Call it whatever you see fit or just call yourself lucky to be there. That’s the place as it appeared this winter day. Quiet, open, and worth the drive."
        })
      }), createVNode("div", {
        class: "mb-12 mt-8 flex flex-col justify-center items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/merlin-dog-at-booker-t-washington-park.jpg",
          alt: "Merlin the dog at Booker T Washington State Park"
        }), createVNode("div", {
          class: "text-center mt-4 text-[18px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Merlin at Merlin’s Cove"
          })
        })]
      }), createVNode("div", {
        class: "pt-8 border-t border-gray-200 mt-8 pb-12",
        children: createVNode("p", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: [createVNode("strong", {
              children: "Related:"
            }), " For more outdoors ideas at Booker T. Washington State Park, check out the ", createVNode("a", {
              href: "/chattanooga/guides/outdoors?tags=booker-t-washington",
              children: "Chattanooga Outdoors Guide"
            }), ". For a mountain hike from St. Elmo to Lookout Mountain, see ", createVNode("a", {
              href: "/chattanooga/editorials/guild-hardy-trail-lookout-mountain",
              children: "Guild-Hardy Trail: St. Elmo to Lookout"
            }), ". For canyon hiking at Cloudland Canyon State Park, the ", createVNode("a", {
              href: "/chattanooga/guides/cloudland-canyon",
              children: "Cloudland Canyon Guide"
            }), ". For a walkable weekend in town around the Choo Choo and Southside, see ", createVNode("a", {
              href: "/chattanooga/editorials/weekend-hosting-chattanooga-choo-choo-edition",
              rel: "noopener noreferrer",
              children: "Weekend Hosting in Chattanooga: Choo Choo Edition"
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

const url = "/chattanooga/editorials/shoreline-hike-at-booker-t-washington-state-park";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/editorials/shoreline-hike-at-booker-t-washington-state-park.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/editorials/shoreline-hike-at-booker-t-washington-state-park.mdx";
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
