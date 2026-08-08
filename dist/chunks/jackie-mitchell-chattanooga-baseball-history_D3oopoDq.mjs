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
  "title": "Jackie Mitchell: A Chattanooga Baseball Legend at Forest Hills Cemetery",
  "originalDate": "03/01/2026",
  "lastUpdated": "03/01/2026",
  "readTime": "4 minutes",
  "layout": "../../../layouts/BlogPostLayout.astro",
  "seoDescription": "The story of Jackie Mitchell, the Chattanooga lefty who struck out Babe Ruth and Lou Gehrig in 1931, and how to pay your respects at her grave in St Elmo's Forest Hills Cemetery.",
  "tags": [{
    "type": "guide",
    "tag": "around-the-city"
  }],
  "petFriendly": false,
  "kidFriendly": true,
  "seasonality": "Year-round",
  "images": [{
    "src": "/editorials/jackie-mitchell/lookouts-field.jpg",
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
        "headline": "Jackie Mitchell: A Chattanooga Legend at Forest Hills Cemetery",
        "description": "The story of Jackie Mitchell, the Chattanooga lefty who struck out Babe Ruth and Lou Gehrig in 1931, and how to visit her grave in St Elmo's Forest Hills Cemetery.",
        "image": "https://thingshappening.com/editorials/jackie-mitchell-forest-hills.jpg",
        "author": {
          "@type": "Person",
          "name": "Jack Burum"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Things Happening",
          "url": "https://thingshappening.com"
        },
        "datePublished": "2026-02-25",
        "dateModified": "2026-02-27",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://thingshappening.com/chattanooga/editorials/jackie-mitchell-chattanooga-baseball"
        },
        "about": {
          "@type": "Person",
          "name": "Jackie Mitchell"
        }
      })
    }), "\n", createVNode("div", {
      class: "text-xl",
      children: [createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "For more than 150 years Major League Baseball has captured the attention of American sports fans. Maybe it’s the nostalgia of a summer evening at a ballpark with a hotdog in one hand and a Coke in the other. It could be the joy of following along with a scorecard as though you were asked to keep the game stats. Or the thrill of a late-game home run after the bats had gone quiet in a pitcher’s duel. Baseball captures our attention differently than the other major sports in America — it’s built for storytelling."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "One lesser-known chapter in Chattanooga baseball history belongs to Jackie Mitchell. She, that’s right she, was a junk-ball wielding left-handed pitcher known for a mean “drop ball” (a curveball derivative)."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: ["Jackie pitched for a Chattanooga women’s baseball team called the Engelettes before getting the attention of ", createVNode("a", {
            href: "/chattanooga/guides/live-sports",
            children: "Chattanooga Lookouts"
          }), " owner Joe Engel. Engel was known for publicity stunts, and it’s widely acknowledged that he signed Jackie to generate attention for the team during the Great Depression."]
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Regardless of the motivation, the young lefty had a knack for getting batters out with her deceptive junk balls, and she showcased it on April 2, 1931 when the Lookouts played an exhibition game against the New York Yankees."
        })
      }), createVNode("figure", {
        class: "my-8 flex flex-col items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/jackie-mitchell/lookouts-field.jpg",
          alt: "Lookouts ballpark field in Chattanooga",
          className: "rounded-lg mx-auto"
        }), createVNode("figcaption", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Lookouts ballpark"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: ["Jackie got an opportunity to pitch that day and, lo and behold, she struck out MLB legends Babe Ruth and Lou Gehrig in consecutive at-bats, cementing her place in baseball lore forever. Jackie’s professional men’s career didn’t continue for long. That same year baseball commissioner Kenesaw Landis ruled that women were “unfit” to play baseball and voided her contract. He may have shut the door on future opportunities for Jackie Mitchell, but that moment lives on in baseball history. She was the second woman to sign a professional baseball contract. Today you can catch the ", createVNode("a", {
            href: "/chattanooga/guides/live-sports#baseball",
            children: "Lookouts at AT&T Field"
          }), "."]
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "Jackie continued to live in Chattanooga for much of her adult life and passed away on January 7, 1987. She was buried in the historic and scenic Forest Hills Cemetery in the St. Elmo neighborhood of her hometown city."
        })
      }), createVNode("figure", {
        class: "my-8 flex flex-col items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/jackie-mitchell/jackie-mitchell-gravesite.jpg",
          alt: "Jackie Mitchell's grave at Forest Hills Cemetery in St Elmo, Chattanooga",
          className: "rounded-lg mx-auto"
        }), createVNode("figcaption", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Jackie Mitchell’s grave at Forest Hills Cemetery"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "For baseball fans visiting Chattanooga or locals interested in the city’s sports history, Forest Hills Cemetery offers the chance to see the resting place of one of the most unusual figures in baseball lore. It’s an odd feeling visiting the gravesite of a once legendary local hero. There’s an inherent respect for the extraordinary life she led and a quiet appreciation that she continues to be remembered in the city where she made headlines in a 1930s news cycle."
        })
      }), createVNode("figure", {
        class: "my-8 flex flex-col items-center",
        children: [createVNode($$OptimizedImage, {
          src: "/editorials/jackie-mitchell/jackie-mitchell-gravesite-mtns.jpg",
          alt: "Forest Hills Cemetery in St Elmo with mountains in the distance",
          className: "rounded-lg mx-auto"
        }), createVNode("figcaption", {
          class: "text-center mt-4 text-[20px] max-w-2xl text-gray-600",
          children: createVNode("em", {
            children: "Forest Hills Cemetery, St Elmo"
          })
        })]
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: "For anyone interested in paying their respects to this local legend, visit Forest Hills Cemetery, Section C59, NE60."
        })
      }), createVNode("p", {
        class: "pb-5",
        children: createVNode(_components.p, {
          children: ["If you enjoy local sports history, you might also like our look back at the ", createVNode("a", {
            href: "/chattanooga/editorials/utc-mocs-2025-nit-champions-where-are-they-now",
            children: "UTC Mocs 2025 NIT championship team"
          }), " and where several key players are today."]
        })
      }), createVNode("div", {
        class: "pt-8 border-t border-gray-200 mt-8 pb-12",
        children: createVNode("p", {
          class: "pb-3",
          children: createVNode(_components.p, {
            children: [createVNode("strong", {
              children: "Related:"
            }), " The ", createVNode("a", {
              href: "/chattanooga/guides/live-sports",
              children: "Chattanooga Live Sports Guide"
            }), " opens with Jackie’s 1931 moment and covers the Lookouts, Engel Stadium, and where to catch games today. For more St Elmo—sweets, coffee, and neighborhood spots—see the ", createVNode("a", {
              href: "/chattanooga/guides/confections",
              children: "Confections Guide"
            }), ". For other ways to explore the city, browse our ", createVNode("a", {
              href: "/chattanooga/guides/tag/around-the-city",
              children: "around-the-city guides"
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

const url = "/chattanooga/editorials/jackie-mitchell-chattanooga-baseball-history";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/editorials/jackie-mitchell-chattanooga-baseball-history.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/editorials/jackie-mitchell-chattanooga-baseball-history.mdx";
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
