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
  "title": "Trivia at Tap House",
  "venue": "The Tap House & Empyreal Brewing Company",
  "address": "3800 St Elmo Ave #114, Chattanooga, TN 37409",
  "iconPath": "/images/icons-new/trivia.png",
  "eventDates": ["2024-07-17", "2024-07-24"],
  "eventDatesDetails": [{
    "date": "2024-07-17",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "Who was the first President of the United States to live in the White House?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "John Adams"
    }
  }, {
    "date": "2024-07-24",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "What is the chemical formula for table salt?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "NaCl (Sodium Chloride)"
    }
  }],
  "eventLink": "https://coppercreekfarm.com/",
  "tags": ["tap-house", "brewery", "trivia"],
  "time": "7pm - 9pm",
  "entranceCost": "Free",
  "layout": "../../../layouts/BlogPostLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "Join Chattanooga Trivia for live trivia! Test your smarts and win gift cards while enjoying our all-day wine, whisky, and wing specials. The trivia kicks off at 7:00pm ET. Call ahead to reserve a table or come early to grab a spot."
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
const url = "src/pages-events/tap-house/2024/trivia.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/tap-house/2024/trivia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/tap-house/2024/trivia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
