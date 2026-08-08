import { _ as __astro_tag_component__, f as createVNode, F as Fragment } from './astro/server_CzqnycT_.mjs';
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
  "title": "Welcome to Things Happening",
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
    ...props.components
  };
  return createVNode("div", {
    class: "content text-xl",
    children: [createVNode("span", {
      class: "block pb-3",
      children: "Chattanooga has a lot going on and we’re here to help. We cover events, outdoor adventures, coffee shops, restaurants, live music, and history. All in one place."
    }), createVNode("h2", {
      class: "font-jakarta font-bold text-3xl mt-4 mb-2",
      children: ["Simplicity", createVNode("span", {
        class: "text-customGreen1",
        children: "."
      })]
    }), createVNode("span", {
      class: "block pb-3",
      children: "Finding things to do shouldn’t require digging through five different websites. Events, guides, and search are all here, so you spend less time looking and more time going."
    }), createVNode("h2", {
      class: "font-jakarta font-bold text-3xl mt-4 mb-2",
      children: ["Engaging", createVNode("span", {
        class: "text-customGreen1",
        children: "."
      })]
    }), createVNode("span", {
      class: "block pb-3",
      children: "Our guides are interactive and filterable, not walls of text. We include photos, practical details, and links so you can actually plan something, not just read about it. The event calendar surfaces what’s coming up so you’re not finding out after the fact."
    }), createVNode("h2", {
      class: "font-jakarta font-bold text-3xl mt-4 mb-2",
      children: ["Straightforward", createVNode("span", {
        class: "text-customGreen1",
        children: "."
      })]
    }), createVNode("span", {
      class: "block pb-3",
      children: "No fluff nor filler. An event listing tells you what it is, where it is, and what it costs. Guides with quick filtering and content items that don’t waste your time."
    }), createVNode("h2", {
      class: "font-jakarta font-bold text-3xl mt-4 mb-2",
      children: ["Platform Independent", createVNode("span", {
        class: "text-customGreen1",
        children: "."
      })]
    }), createVNode("span", {
      class: "block pb-3",
      children: "You shouldn’t need a Facebook account to find out what’s happening in your city. No login, no algorithm, no feed to scroll. But if you’re on Facebook, we’re there too."
    }), createVNode("h2", {
      class: "font-jakarta font-bold text-3xl mt-4 mb-2",
      children: ["Discoverability", createVNode("span", {
        class: "text-customGreen1",
        children: "."
      })]
    }), createVNode("span", {
      class: "block pb-3",
      children: "Everything is tagged and searchable. Whether you’re looking for a kid friendly hike, live music this weekend, or a coffee shop to work from, tags and search make it easy to find what fits."
    }), createVNode("h2", {
      class: "font-jakarta font-bold text-3xl mt-4 mb-2",
      children: ["AI Usage", createVNode("span", {
        class: "text-customGreen1",
        children: "."
      })]
    }), createVNode("span", {
      class: "block pb-10",
      children: "Guides and event listings are researched and reviewed by a human. Some content is drafted or refined with AI assistance before publishing."
    }), createVNode("span", {
      class: "block pb-3",
      children: "We’re starting in Chattanooga and expanding to more cities over time."
    }), createVNode("span", {
      class: "pb-20 pt-5",
      children: ["Questions, tips, or feedback: ", createVNode("a", {
        href: "mailto:jack@thingshappening.com",
        children: createVNode(_components.a, {
          href: "mailto:jack@thingshappening.com",
          children: "jack@thingshappening.com"
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
const url = "/about";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/about.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/about.mdx";
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
