import PrismicDOM from 'prismic-dom';
import higlight from 'highlight.js';

const Elements = PrismicDOM.RichText.Elements;

higlight.addPlugin({
  afterHighlightBlock: ({ block, result }) => {
    block.dataset.language = result.language;
  }
});

export default function (type, element, content, children) {
  switch (type) {
    case Elements.preformatted:

      /* eslint-disable */
      const elements = element.text.split('##---##')
      const language = elements[0].substring(0, elements[0].length - 1)
      const code = elements[1].substr(1)

      return '<pre class="hljs"><code>' + higlight.highlight(language, code).value + '</code></pre>'
    case Elements.label:
      return `<span ${element.data.label}>${children.join('')}</span>`
    default:
      return null
  }
}
