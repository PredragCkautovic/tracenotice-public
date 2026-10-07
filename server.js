/* eslint-disable @typescript-eslint/no-require-imports */
const http = require("node:http");
const { parse } = require("node:url");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => handle(req, res, parse(req.url, true)));
  server.listen(port, hostname, () => {
    console.log(`TraceNotice Next server ready on ${hostname}:${port}`);
  });
}).catch((error) => {
  console.error("TraceNotice failed to start", error);
  process.exit(1);
});
