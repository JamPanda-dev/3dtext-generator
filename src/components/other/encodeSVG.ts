import ReactDOMServer from 'react-dom/server';

export function encodeSvg(reactElement: any) {
  return 'data:image/svg+xml,' + window.btoa(reactElement);
}
