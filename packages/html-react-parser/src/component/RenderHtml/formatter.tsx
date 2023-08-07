import parse, { HTMLReactParserOptions } from 'html-react-parser';
import linkifyHtml from 'linkify-html';

function resolve(content: string) {
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode?.type === "script") {
        return <script></script>; // remove the script tag
      }
    },
  };
  return parse(linkifyHtml(content, { ignoreTags: ["script"], defaultProtocol: '' }), options);
}
export { resolve };
