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
  "title": "Contact",
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
      children: ["No contact form, no chatbot. If you have something genuine to say, email us at ", createVNode("a", {
        href: "mailto:jack@thingshappening.com",
        children: createVNode(_components.a, {
          href: "mailto:jack@thingshappening.com",
          children: "jack@thingshappening.com"
        })
      })]
    }), createVNode("span", {
      class: "block pb-3",
      children: "We read every message and reply when it’s relevant to the site."
    }), createVNode("span", {
      class: "block pb-3",
      children: ["Interested in working with us? See our ", createVNode("a", {
        href: "/sponsor",
        children: "sponsorship page"
      }), "."]
    }), createVNode("h2", {
      class: "font-jakarta font-bold text-3xl mt-4 mb-2",
      children: ["What we’re open to", createVNode("span", {
        class: "text-customGreen1",
        children: "."
      })]
    }), createVNode("ul", {
      class: "list-disc pl-6 pb-5",
      children: [createVNode("li", {
        children: [createVNode("strong", {
          children: "Collaborations:"
        }), " Guest posts, cross-promotion, or working together on content about things to do in and around Chattanooga."]
      }), createVNode("li", {
        children: [createVNode("strong", {
          children: "Corrections and feedback:"
        }), " Spotted a factual error, broken link, or have a genuine suggestion to improve a guide? Let us know."]
      }), createVNode("li", {
        children: [createVNode("strong", {
          children: "Questions:"
        }), " Anything about events, places, or content covered on this site."]
      })]
    }), createVNode("h2", {
      class: "font-jakarta font-bold text-3xl mt-4 mb-2",
      children: ["What we won’t reply to", createVNode("span", {
        class: "text-customGreen1",
        children: "."
      })]
    }), createVNode("ul", {
      class: "list-disc pl-6 pb-10",
      children: [createVNode("li", {
        children: "Marketing pitches, link exchange requests, or partnership spam"
      }), createVNode("li", {
        children: "Requests for personalized travel planning or custom itineraries"
      }), createVNode("li", {
        children: "Promotional content that doesn’t fit the site’s focus on local guides and events"
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
const url = "/contact";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/contact.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/contact.mdx";
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
