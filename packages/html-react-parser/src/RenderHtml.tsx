import parse from 'html-react-parser';
import { htmlCode, htmlCodeWithScript, normalStr } from 'shared';

function RenderHtml(): JSX.Element {
  return (
    <>
      <div>{parse(normalStr)}</div>
      <div>=================================</div>
      <div>{parse(htmlCode)}</div>
      <div>=================================</div>
      <div>{parse(htmlCodeWithScript)}</div>
      <div>=================================</div>
    </>
  );
}

export { RenderHtml };
