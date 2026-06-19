// Node.js launcher for self-hosted deployments (e.g. Hostinger, a VPS, etc).
//
// `npm run build` (vite build) produces two output folders:
//   - dist/client  — the static JS/CSS bundles + public files (robots.txt, etc)
//   - dist/server  — server.js, exporting a Web-standard
//                     fetch(request, env, ctx) handler for SSR
//
// In Lovable's own sandbox, Nitro normally sits in front and serves
// dist/client itself before falling back to the SSR handler. Outside that
// sandbox (e.g. here), Nitro is skipped entirely — see the
// "No Lovable context detected" build log message — so nothing serves
// dist/client, and the SSR handler alone never calls .listen() on a port.
// That's what was causing the earlier 503.
//
// This script is plain JS, lives outside `src/`, and is NOT part of the
// Vite/TanStack build. At runtime it:
//   1. Serves dist/client as static files (JS/CSS bundles, robots.txt, etc)
//   2. Falls back to the built SSR handler for everything else
//   3. Wraps it all with @whatwg-node/server, which translates Node's
//      http request/response objects into Fetch API Request/Response and
//      back — that's what actually binds to a port.
//
// Hostinger "Entry file" should point to this file (after the build step
// has produced dist/client and dist/server):
//   server.js
import { createServerAdapter } from "@whatwg-node/server";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sirv from "sirv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { default: handler } = await import("./dist/server/server.js");

const serveStatic = sirv(path.join(__dirname, "dist/client"), {
  etag: true,
  gzip: true,
  brotli: true,
});

const adapter = createServerAdapter(async (request, { req, res }) => {
  // sirv expects Node's (req, res) and calls a callback only if it
  // didn't find a matching static file, so SSR runs as the fallback.
  const handledByStatic = await new Promise((resolve) => {
    serveStatic(req, res, () => resolve(false));
    res.once("finish", () => resolve(true));
  });
  if (handledByStatic) return; // response already sent by sirv

  return handler.fetch(request, {}, {});
});

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "0.0.0.0";

createServer(adapter).listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
