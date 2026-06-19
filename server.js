import { createServerAdapter } from "@whatwg-node/server";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sirv from "sirv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load SSR handler
let handler;

try {
  ({ default: handler } = await import("./dist/server/server.js"));
  console.log("✅ SSR handler loaded");
} catch (err) {
  console.error("❌ Failed to load SSR:", err);
  throw err;
}

// Static files
const serveStatic = sirv(path.join(__dirname, "dist/client"), {
  etag: true,
  gzip: true,
  brotli: true,
});

// Adapter (this is what Hostinger will call)
const adapter = createServerAdapter(async (request, { req, res }) => {
  const handledByStatic = await new Promise((resolve) => {
    serveStatic(req, res, () => resolve(false));
    res.once("finish", () => resolve(true));
  });

  if (handledByStatic) return;

  return handler.fetch(request, {}, {});
});

export default adapter;
