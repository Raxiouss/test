import { createServer } from "node:http";

const port = Number(process.env.PORT) || 3000;
const host = "0.0.0.0";

console.log("hello-world test script starting...");
console.log("PORT env var:", process.env.PORT);
console.log("NODE_ENV env var:", process.env.NODE_ENV);

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Hostinger test\n");
}).listen(port, host, () => {
  console.log(`TEST SERVER listening on http://${host}:${port}`);
});
