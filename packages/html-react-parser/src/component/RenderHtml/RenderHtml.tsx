import { htmlCode, htmlCodeWithScript, linkStr, linkStrWithAnchor, normalStr } from 'shared';

import { resolve } from './formatter';

function RenderHtml(): JSX.Element {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: "20px", whiteSpace: "pre-line" }}>
      <div>{resolve(normalStr)}</div>
      <div>=================================</div>
      <div>{resolve(htmlCode)}</div>
      <div>=================================</div>
      <div>{resolve(htmlCodeWithScript)}</div>
      <div>=================================</div>
      <div>{resolve(linkStr)}</div>
      <div>=================================</div>
      <div>{resolve(linkStrWithAnchor)}</div>
    </div>
  );
}

export { RenderHtml };
