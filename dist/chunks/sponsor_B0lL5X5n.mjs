import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
import { $ as $$BlogPostLayout } from './BlogPostLayout_Bqj5Bb28.mjs';
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
  "title": "Work With Us",
  "layout": "../layouts/BlogPostLayout.astro",
  "seriesLabel": "",
  "hideSignup": true
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode("div", {
    class: "max-w-3xl",
    children: [createVNode("div", {
      class: "pb-6 pt-2 text-xl",
      children: createVNode(_components.p, {
        children: "1,844 newsletter subscribers at 40% open rates, 9,000+ Facebook followers, and 10,000+ monthly website visitors — all of them actively looking for things to do in Chattanooga."
      })
    }), createVNode("div", {
      class: "pb-10 text-xl",
      children: createVNode(_components.p, {
        children: "Two ways to get in front of that audience:"
      })
    }), createVNode("div", {
      class: "flex flex-col gap-8 pb-12",
      children: [createVNode("div", {
        class: "border border-black rounded-lg p-8",
        children: [createVNode("div", {
          class: "flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6",
          children: [createVNode("div", {
            children: [createVNode("h2", {
              class: "text-3xl mb-1",
              style: "font-family: 'Libre Baskerville', serif;",
              children: ["Event Listing", createVNode("span", {
                class: "color-pink ml-1",
                children: createVNode("b", {
                  children: "."
                })
              })]
            }), createVNode("p", {
              class: "text-lg text-gray-600",
              children: "One event, covered across newsletter, website, and Facebook."
            })]
          }), createVNode("div", {
            class: "text-4xl font-bold",
            style: "color: #1a4d2e;",
            children: "$45"
          })]
        }), createVNode("ul", {
          class: "text-xl space-y-3 mb-8",
          children: [createVNode("li", {
            class: "flex items-start gap-3",
            children: [createVNode("span", {
              style: "color: #1a4d2e;",
              class: "font-bold mt-1",
              children: "✓"
            }), createVNode("span", {
              children: ["Listed in the next newsletter edition, sent to ", createVNode("strong", {
                children: "1,844 subscribers"
              })]
            })]
          }), createVNode("li", {
            class: "flex items-start gap-3",
            children: [createVNode("span", {
              style: "color: #1a4d2e;",
              class: "font-bold mt-1",
              children: "✓"
            }), createVNode("span", {
              children: "Highlighted on the website for the duration of your event"
            })]
          }), createVNode("li", {
            class: "flex items-start gap-3",
            children: [createVNode("span", {
              style: "color: #1a4d2e;",
              class: "font-bold mt-1",
              children: "✓"
            }), createVNode("span", {
              children: ["Shared on Facebook to ", createVNode("strong", {
                children: "9,000+ followers"
              })]
            })]
          }), createVNode("li", {
            class: "flex items-start gap-3",
            children: [createVNode("span", {
              style: "color: #1a4d2e;",
              class: "font-bold mt-1",
              children: "✓"
            }), createVNode("span", {
              children: "Schedule up to 3 months out — lock in the current rate as an early supporter"
            })]
          })]
        }), createVNode("a", {
          href: "https://buy.stripe.com/cNi28rdts6HOdAzg4Ld3i00",
          class: "inline-block px-8 py-3 text-white text-lg font-normal no-underline rounded-full",
          style: "background-color: #1a4d2e;",
          children: "Purchase — $45"
        }), createVNode("p", {
          class: "text-base text-gray-500 mt-3",
          children: ["After purchase, email ", createVNode("a", {
            href: "mailto:jack@thingshappening.com?subject=Event Listing Details",
            children: createVNode(_components.a, {
              href: "mailto:jack@thingshappening.com",
              children: "jack@thingshappening.com"
            })
          }), " with your event details."]
        })]
      }), createVNode("div", {
        class: "border border-black rounded-lg p-8",
        children: [createVNode("div", {
          class: "flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6",
          children: [createVNode("div", {
            children: [createVNode("h2", {
              class: "text-3xl mb-1",
              style: "font-family: 'Libre Baskerville', serif;",
              children: ["Partner Sponsor", createVNode("span", {
                class: "color-pink ml-1",
                children: createVNode("b", {
                  children: "."
                })
              })]
            }), createVNode("p", {
              class: "text-lg text-gray-600",
              children: "Ongoing presence across the site, newsletter, and social."
            })]
          }), createVNode("div", {
            class: "text-2xl font-semibold pt-1",
            style: "color: #1a4d2e;",
            children: "Contact for pricing"
          })]
        }), createVNode("ul", {
          class: "text-xl space-y-3 mb-8",
          children: [createVNode("li", {
            class: "flex items-start gap-3",
            children: [createVNode("span", {
              style: "color: #1a4d2e;",
              class: "font-bold mt-1",
              children: "✓"
            }), createVNode("span", {
              children: "Lead placement in the newsletter, above editorial content. First thing readers see."
            })]
          }), createVNode("li", {
            class: "flex items-start gap-3",
            children: [createVNode("span", {
              style: "color: #1a4d2e;",
              class: "font-bold mt-1",
              children: "✓"
            }), createVNode("span", {
              children: "Full event or business writeup published on the website and in the newsletter"
            })]
          }), createVNode("li", {
            class: "flex items-start gap-3",
            children: [createVNode("span", {
              style: "color: #1a4d2e;",
              class: "font-bold mt-1",
              children: "✓"
            }), createVNode("span", {
              children: "Dedicated Facebook post to 9,000+ followers"
            })]
          }), createVNode("li", {
            class: "flex items-start gap-3",
            children: [createVNode("span", {
              style: "color: #1a4d2e;",
              class: "font-bold mt-1",
              children: "✓"
            }), createVNode("span", {
              children: "Recurring promotion as your schedule evolves — not a one-and-done placement"
            })]
          })]
        }), createVNode("a", {
          href: "mailto:jack@thingshappening.com?subject=Partner Sponsor",
          class: "inline-block px-8 py-3 text-white text-lg font-normal no-underline rounded-full",
          style: "background-color: #1a4d2e;",
          children: "Get in touch"
        })]
      })]
    }), createVNode("div", {
      class: "pb-12 text-xl",
      children: createVNode(_components.p, {
        children: ["Questions? Email ", createVNode("a", {
          href: "mailto:jack@thingshappening.com",
          children: createVNode(_components.a, {
            href: "mailto:jack@thingshappening.com",
            children: "jack@thingshappening.com"
          })
        }), " and I’ll get back to you same day."]
      })
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
const url = "/sponsor";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/sponsor.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/sponsor.mdx";
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
