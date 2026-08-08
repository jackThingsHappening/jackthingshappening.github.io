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
  "title": "Ketner's Mill Country Arts Fair",
  "eventDates": ["2026-10-03", "2026-10-04"],
  "time": "9:00am",
  "entranceCost": "$8 (cash only, under 8 free)",
  "seoDescription": "Ketner's Mill Country Arts Fair returns October 3-4, 2026 in Whitwell, TN. 48th annual fair at the historic 1824 grist mill — 150+ artisans, sorghum demos, bluegrass, wagon rides, and southern fair food in the Sequatchie Valley.",
  "venue": "Ketner's Mill",
  "address": "658 Ketner Mill Lane, Whitwell, TN 37397",
  "iconPath": "/images/icons-new/craftsman.png",
  "eventLink": "https://www.ketnersmill.org",
  "tags": [{
    "type": "genre",
    "tag": "festivals"
  }],
  "layout": "../../../../layouts/BlogPostLayout.astro"
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
      children: "An 1824 water-powered grist mill in the Sequatchie Valley, about 45 minutes from Chattanooga, hosts this every October. Over 150 juried artisans sell paintings, pottery, woodworking, jewelry, and folk art. Sorghum molasses gets made on site with mule-powered equipment. Wagon and canoe rides run on the Sequatchie River, the Marion County 4-H brings a petting zoo, and live bluegrass, country, and gospel plays all weekend."
    }), "\n", createVNode(_components.p, {
      children: "$8 cash at the gate, kids 8 and under free. All admission goes toward preserving the mill. Saturday 9am–6pm, Sunday 10am–5:30pm. Free parking, leashed dogs welcome."
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

const url = "/chattanooga/events/festivals/ketners-mill-fair";
const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/ketners-mill-fair.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/festivals/ketners-mill-fair.mdx";
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
