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
  "title": "Chatt Trivia at Five Wits Brewing",
  "venue": "Five Wits Brewing",
  "address": "1501 Long St, Chattanooga, TN 37408",
  "iconPath": "/images/icons-new/trivia.png",
  "eventDates": ["2024-07-18", "2024-07-25", "2024-08-01", "2024-08-08", "2024-08-15", "2024-08-22", "2024-08-29"],
  "eventDatesDetails": [{
    "date": "2024-07-18",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "Which philosopher wrote The Republic?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Plato"
    }
  }, {
    "date": "2024-07-25",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "What is the most widely spoken native language in the world?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Mandarin Chinese"
    }
  }, {
    "date": "2024-08-01",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "What is the name of the closest star to Earth, other than the Sun?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Proxima Centauri"
    }
  }, {
    "date": "2024-08-08",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "Who was the longest-serving British Prime Minister of the 20th century?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Margaret Thatcher"
    }
  }, {
    "date": "2024-08-15",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "Who is known for the economic theory of comparative advantage?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "David Ricardo"
    }
  }, {
    "date": "2024-08-22",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "What was the first video game console ever released?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Magnavox Odyssey"
    }
  }, {
    "date": "2024-08-29",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "What is the process by which plants convert sunlight into chemical energy?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Photosynthesis"
    }
  }],
  "eventLink": "https://www.chatttrivia.com/",
  "tags": ["five-wits-brewing", "chatt-trivia", "trivia"],
  "time": "7pm",
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
  return createVNode("div", {
    className: "pt-8",
    children: [createVNode(_components.p, {
      children: "Chatt Trivia is running the qualifying rounds for its Summer Tournament, featuring a $1,000 cash prize. Participants also have weekly chances to win bar cash."
    }), createVNode("br", {}), createVNode("br", {}), createVNode(_components.p, {
      children: "The game has four rounds, each with four questions. Points per question increase each round: five points in the first, ten in the second, and so on. In the final question, players can wager any or all of their points on a topic announced by the host, like anatomy. This format offers both a test of trivia knowledge and strategic decision-making. Whether you’re a seasoned trivia player or just looking for a fun evening, Chatt Trivia is a great way to a night out!"
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
const url = "src/pages-events/chatt-trivia/2024/five-wits.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chatt-trivia/2024/five-wits.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chatt-trivia/2024/five-wits.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
