import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>MediAlert+</title>\n    <meta\n      name="description"\n      content="Professional medical alert systems with 24/7 emergency monitoring."\n    />\n    <meta name="theme-color" content="#0D4C92" />\n    <link rel="manifest" href="/manifest.json" />\n  </head>\n  <body></body>\n</html>\n', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
