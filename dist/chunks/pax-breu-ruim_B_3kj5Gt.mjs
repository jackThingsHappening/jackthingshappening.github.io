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
  "title": "Chatt Trivia at Pax Breu Rim",
  "venue": "Pax Breu Ruim",
  "address": " 516 East Main Street, Chattanooga, TN",
  "iconPath": "/images/icons-new/trivia.png",
  "eventDates": ["2024-07-21", "2024-07-28", "2024-08-04", "2024-08-11", "2024-08-18", "2024-08-25"],
  "eventDatesDetails": [{
    "date": "2024-07-21",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "Which is the only country in the world that lies entirely in the Southern Hemisphere and begins with the letter P?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Papua New Guinea"
    }
  }, {
    "date": "2024-07-28",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "Which film won the first Academy Award for Best Picture in 1929?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Wings"
    }
  }, {
    "date": "2024-08-04",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "What is the name of the closest star to Earth, other than the Sun?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Proxima Centauri"
    }
  }, {
    "date": "2024-08-11",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": " Which composer is often referred to as the Father of the Symphony"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Joseph Haydn"
    }
  }, {
    "date": "2024-08-18",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "Which tennis player holds the record for the most Grand Slam singles titles in the Open Era as of 2023?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Serena Williams"
    }
  }, {
    "date": "2024-08-25",
    "topDetails": {
      "title": "Trivia Participation Prerequisite (answer below)",
      "text": "In Greek mythology, who is the god of the underworld?"
    },
    "bottomDetails": {
      "title": "Answer",
      "text": "Hades"
    }
  }],
  "eventLink": "https://www.chatttrivia.com/",
  "tags": ["pax-breu-ruim", "chatt-trivia", "trivia"],
  "time": "2:30pm",
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
    className: "pt-10",
    children: [createVNode(_components.p, {
      children: "Chatt Trivia is running the qualifying rounds for its Summer Tournament, featuring a $1,000 cash prize. Participants also have weekly chances to win bar cash."
    }), createVNode("br", {}), createVNode("br", {}), createVNode(_components.p, {
      children: "The game has four rounds, each with four questions. Points per question increase each round: five points in the first, ten in the second, and so on. In the final question, players can wager any or all of their points on a topic announced by the host, like anatomy."
    }), createVNode("br", {}), createVNode("br", {}), createVNode(_components.p, {
      children: "This format offers both a test of trivia knowledge and strategic decision-making. Whether you’re a seasoned trivia player or just looking for a fun evening, Chatt Trivia is a great way to a night out!"
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
const url = "src/pages-events/chatt-trivia/2024/pax-breu-ruim.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chatt-trivia/2024/pax-breu-ruim.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chatt-trivia/2024/pax-breu-ruim.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
