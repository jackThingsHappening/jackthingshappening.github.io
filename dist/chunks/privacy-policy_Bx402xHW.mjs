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
  "title": "Privacy Policy",
  "layout": "../layouts/BlogPostLayout.astro",
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
    class: "content",
    children: [createVNode("p", {
      children: "Last Updated: May 11, 2026"
    }), createVNode("p", {
      children: "Effective Date: July 14, 2024"
    }), createVNode("h2", {
      children: "1. Introduction"
    }), createVNode("p", {
      children: "Welcome to ThingsHappening.com (the “Website”). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our Website."
    }), createVNode("h2", {
      children: "2. Data Controller"
    }), createVNode("p", {
      children: ["The data controller responsible for your personal data is ThingsHappening.com. Questions about this policy can be directed to ", createVNode("a", {
        href: "mailto:jack@thingshappening.com",
        children: createVNode(_components.a, {
          href: "mailto:jack@thingshappening.com",
          children: "jack@thingshappening.com"
        })
      }), "."]
    }), createVNode("h2", {
      children: "3. Data We Collect"
    }), createVNode("p", {
      children: "We may collect and process the following data:"
    }), createVNode("ul", {
      children: [createVNode("li", {
        children: [createVNode("b", {
          children: "Information you provide:"
        }), " If you subscribe to our newsletter or contact us directly, we collect the information you provide — such as your name and email address."]
      }), createVNode("li", {
        children: [createVNode("b", {
          children: "Information collected automatically:"
        }), " When you visit the Website, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, and usage data (e.g., pages viewed, links clicked)."]
      }), createVNode("li", {
        children: [createVNode("b", {
          children: "Cookies and analytics:"
        }), " We use analytics tools (such as Google Analytics) to understand how visitors use the Website. These tools may set cookies or collect data about your browsing behavior. You can disable cookies in your browser settings, though some features of the Website may not function as intended."]
      })]
    }), createVNode("h2", {
      children: "4. How We Use Your Data"
    }), createVNode("p", {
      children: "We use the information we collect to:"
    }), createVNode("ul", {
      children: [createVNode("li", {
        children: "Provide and improve the Website and its content"
      }), createVNode("li", {
        children: "Send newsletters or updates if you have subscribed"
      }), createVNode("li", {
        children: "Respond to inquiries and provide support"
      }), createVNode("li", {
        children: "Analyze Website usage to improve functionality"
      }), createVNode("li", {
        children: "Comply with legal obligations"
      })]
    }), createVNode("h2", {
      children: "5. Sharing Your Data"
    }), createVNode("p", {
      children: "We do not sell or rent your personal data to third parties. We may share your data with:"
    }), createVNode("ul", {
      children: [createVNode("li", {
        children: [createVNode("b", {
          children: "Hosting and infrastructure:"
        }), " The Website is hosted on GitHub Pages. Data transmitted through the Website passes through GitHub’s infrastructure. See ", createVNode("a", {
          href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "GitHub’s Privacy Statement"
        }), " for details."]
      }), createVNode("li", {
        children: [createVNode("b", {
          children: "Analytics providers:"
        }), " We use third-party analytics tools that may collect and process usage data on our behalf."]
      }), createVNode("li", {
        children: [createVNode("b", {
          children: "Legal requirements:"
        }), " We may disclose your data if required by law or valid request from public authorities."]
      })]
    }), createVNode("h2", {
      children: "6. Your Rights"
    }), createVNode("p", {
      children: ["You have the right to request access to, correction of, or deletion of personal data we hold about you. To make a request, contact us at ", createVNode("a", {
        href: "mailto:jack@thingshappening.com",
        children: createVNode(_components.a, {
          href: "mailto:jack@thingshappening.com",
          children: "jack@thingshappening.com"
        })
      }), "."]
    }), createVNode("h2", {
      children: "7. Data Security"
    }), createVNode("p", {
      children: "We implement appropriate technical measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction."
    }), createVNode("h2", {
      children: "8. Data Retention"
    }), createVNode("p", {
      children: "We retain personal data only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, and resolve disputes."
    }), createVNode("h2", {
      children: "9. Changes to This Policy"
    }), createVNode("p", {
      children: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this policy periodically."
    }), createVNode("h2", {
      children: "10. Contact"
    }), createVNode("p", {
      children: ["Questions or concerns about this Privacy Policy: ", createVNode("a", {
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
const url = "/privacy-policy";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/privacy-policy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/privacy-policy.mdx";
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
