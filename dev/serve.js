/* Dev-only static server for dist/ — node dev/serve.js [port]. Not shipped. */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "dist");
const PORT = Number(process.argv[2]) || 8811;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain", ".svg": "image/svg+xml" };

http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p.endsWith("/")) p += "index.html";
    const file = path.join(ROOT, p);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      const notFound = path.join(ROOT, "404.html");
      res.writeHead(404, { "Content-Type": TYPES[".html"] });
      return res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : "404");
    }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, () => console.log(`dist/ on http://localhost:${PORT}`));
