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
  "title": "Terms and Conditions",
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
    class: "content",
    children: [createVNode("p", {
      children: "Last updated: May 11, 2026"
    }), createVNode("p", {
      children: "Welcome to ThingsHappening.com (“Website,” “Service,” “we,” “us,” or “our”). These Terms and Conditions govern your use of the Website and all content, features, and services offered through it."
    }), createVNode("p", {
      children: "By accessing or using ThingsHappening.com, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use this Website."
    }), createVNode("h2", {
      children: "1. Use of the Website"
    }), createVNode("p", {
      children: "ThingsHappening.com provides information about local events, activities, guides, businesses, and related topics across multiple cities."
    }), createVNode("p", {
      children: "You agree to use the Website only for lawful purposes and in a way that does not:"
    }), createVNode("ul", {
      children: [createVNode("li", {
        children: "Violate any applicable laws or regulations"
      }), createVNode("li", {
        children: "Infringe upon the rights of others"
      }), createVNode("li", {
        children: "Interfere with the operation or security of the Website"
      }), createVNode("li", {
        children: "Attempt to gain unauthorized access to any part of the Website"
      })]
    }), createVNode("p", {
      children: "We reserve the right to suspend or terminate access to the Website for users who violate these terms."
    }), createVNode("h2", {
      children: "2. Content Disclaimer"
    }), createVNode("p", {
      children: "The content on ThingsHappening.com is provided for informational and entertainment purposes only."
    }), createVNode("p", {
      children: "While we strive to keep information accurate and up to date, we do not guarantee that:"
    }), createVNode("ul", {
      children: [createVNode("li", {
        children: "Event dates, times, or locations are always correct"
      }), createVNode("li", {
        children: "Businesses listed are open or operating as described"
      }), createVNode("li", {
        children: "Information is complete or error-free"
      })]
    }), createVNode("p", {
      children: "Events and details may change without notice. Users should verify information directly with event organizers or venues before attending."
    }), createVNode("h2", {
      children: "3. AI-Assisted Content"
    }), createVNode("p", {
      children: "We use AI tools to assist with research and drafting. All content is reviewed and edited by a human before publishing. We take responsibility for the accuracy and tone of everything that appears on this site."
    }), createVNode("h2", {
      children: "4. Intellectual Property"
    }), createVNode("p", {
      children: "All original content on ThingsHappening.com, including but not limited to articles, guides, graphics, logos, website design, and written content, is the property of ThingsHappening.com unless otherwise noted."
    }), createVNode("p", {
      children: createVNode("strong", {
        children: "You may:"
      })
    }), createVNode("ul", {
      children: [createVNode("li", {
        children: "Share links to our content"
      }), createVNode("li", {
        children: "Quote small excerpts with attribution"
      })]
    }), createVNode("p", {
      children: createVNode("strong", {
        children: "You may not:"
      })
    }), createVNode("ul", {
      children: [createVNode("li", {
        children: "Copy entire articles"
      }), createVNode("li", {
        children: "Republish content without permission"
      }), createVNode("li", {
        children: "Use our content for commercial purposes without written consent"
      })]
    }), createVNode("h2", {
      children: "5. Third-Party Links"
    }), createVNode("p", {
      children: "ThingsHappening.com may contain links to third-party websites, businesses, or services. These links are provided for convenience and informational purposes."
    }), createVNode("p", {
      children: "We do not control or endorse these external websites and are not responsible for their content, privacy practices, accuracy, or any transactions between you and third parties. Use of third-party services is at your own risk."
    }), createVNode("h2", {
      children: "6. Sponsored Content"
    }), createVNode("p", {
      children: "ThingsHappening.com may feature sponsored content or paid partnerships with local businesses. Sponsored content will be clearly identified where applicable. We only work with partners whose offerings are relevant to our readers."
    }), createVNode("h2", {
      children: "7. Limitation of Liability"
    }), createVNode("p", {
      children: "ThingsHappening.com and its operators shall not be liable for any damages arising from use of the Website, reliance on information presented on the Website, or attendance at events or businesses mentioned on the Website. This includes direct, indirect, incidental, and consequential damages. Use of the Website is at your own risk."
    }), createVNode("h2", {
      children: "8. Changes to These Terms"
    }), createVNode("p", {
      children: "We reserve the right to modify or update these Terms and Conditions at any time. Changes will be posted on this page with the updated date. Continued use of the Website after changes are posted constitutes acceptance of the revised terms."
    }), createVNode("h2", {
      children: "9. Privacy"
    }), createVNode("p", {
      children: ["Your use of the Website is also governed by our ", createVNode("a", {
        href: "/privacy-policy",
        children: "Privacy Policy"
      }), ", which explains how we collect, use, and protect your information."]
    }), createVNode("h2", {
      children: "10. Governing Law"
    }), createVNode("p", {
      children: "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the United States and the State of Tennessee, without regard to conflict of law principles."
    }), createVNode("h2", {
      children: "11. Contact"
    }), createVNode("p", {
      children: ["If you have questions about these Terms and Conditions, contact us at: ", createVNode("a", {
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
const url = "/terms-and-conditions";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/terms-and-conditions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/terms-and-conditions.mdx";
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
