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
  "title": "Chosen By Fitness: Weighted Support Group",
  "venue": "Chosen By Fitness",
  "iconPath": "/images/icons-new/sport.png",
  "eventDates": ["2024-06-01"],
  "address": "Brainerd Crossroads (BX). 4011 Austin St. Chattanooga, TN 37411",
  "eventLink": "https://www.chosenbyfitness.org/copy-of-how-it-works",
  "tags": ["chosen-by-fitness", "fitness", "free"],
  "entranceCost": "free",
  "time": "11:30am - 12:30pm",
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
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "If you’ve ever felt alone in your fitness or health journey, consider this your invitation to join Chosen By Fitness. Run by Stacy Lane, this group meets on the first Saturday of every month to share experiences and ideas."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "They introduce a new topic monthly and foster a welcoming atmosphere for anyone on a health journey. Whether seeking advice, support, or encouragement, you’ll find a community ready to embrace and celebrate every step with you."
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "It’s not just about facing what’s difficult; it’s also about celebrating every small victory along the way."
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

const url = "src/pages-events/chosen-by-fitness/2024/support-group.mdx";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chosen-by-fitness/2024/support-group.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages-events/chosen-by-fitness/2024/support-group.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
