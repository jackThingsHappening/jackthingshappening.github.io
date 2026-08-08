import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CzqnycT_.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "title": "Woodcraft Classes",
  "venue": "Woodcraft of Chattanooga",
  "address": "5824 Brainerd Road, Chattanooga, TN 37411",
  "iconPath": "/images/icons-new/craftsman.png",
  "eventLink": "https://www.woodcraft.com/pages/store-classes/chattanooga",
  "tags": [{
    "type": "genre",
    "tag": "woodworking"
  }, {
    "type": "genre",
    "tag": "skill-development"
  }, {
    "type": "genre",
    "tag": "craft"
  }],
  "eventDates": ["2025-07-03", "2025-07-10"],
  "eventDatesDetails": [{
    "date": "2025-07-03",
    "eventTitle": "Pen Turning 101: The Basics",
    "entranceCost": "TBD",
    "time": "6 PM - 9 PM",
    "topDetails": {
      "text": "Join Bill LaRoque for a hands-on intro to pen turning using a lathe.\n\nThis beginner-friendly class covers essential lathe parts, safe operating practices, and step-by-step guidance for shaping your first pen. You'll prep your wooden blank, learn turning techniques, apply a smooth finish, and leave with a handcrafted pen to keep or gift.\n"
    }
  }, {
    "date": "2025-07-03",
    "eventTitle": "Woodworking Fundamentals I - Part 1",
    "entranceCost": "$125",
    "time": "6 PM - 9 PM",
    "topDetails": {
      "text": "**Woodworking Fundamentals I** with the Woodcraft Team is a hands-on beginner class covering the core tools of the wood shop.\n\nIn Part 1, students will learn how to properly flatten and size lumber using the table saw, jointer, and planer. The session ends with a lesson on glue-up techniques to begin creating a cutting board.\n"
    }
  }, {
    "date": "2025-07-10",
    "eventTitle": "Woodworking Fundamentals I - Part 2",
    "entranceCost": "$125",
    "time": "6 PM - 9 PM",
    "topDetails": {
      "text": "**Woodworking Fundamentals I - Part 2** continues your journey with the Woodcraft Team.\n\nThis session focuses on using the router and router table to shape your board and apply a decorative edge. Students will complete and take home their own cutting board—a perfect foundation for further woodworking.\n"
    }
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    meta: "meta",
    ...props.components
  };
  return createVNode(_components.meta, {
    charset: "utf-8"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/pages-events/woodcraft-of-chattanooga/2025/june.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodcraft-of-chattanooga/2025/june.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/woodcraft-of-chattanooga/2025/june.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
