import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  const decodedPath = decodeURIComponent(urlPath);
  const candidates = [];

  if (decodedPath === '/') {
    candidates.push('/index.html');
  } else if (path.extname(decodedPath)) {
    candidates.push(decodedPath);
  } else {
    candidates.push(decodedPath.endsWith('/') ? decodedPath + 'index.html' : decodedPath + '/index.html');
    candidates.push(decodedPath);
  }

  function tryRead(index) {
    if (index >= candidates.length) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found: ' + urlPath);
      return;
    }

    const candidate = candidates[index];
    const filePath = path.join(__dirname, candidate);

    fs.stat(filePath, (statErr, stats) => {
      if (statErr || !stats.isFile()) {
        tryRead(index + 1);
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME[ext] || 'application/octet-stream';

      fs.readFile(filePath, (readErr, data) => {
        if (readErr) {
          tryRead(index + 1);
          return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      });
    });
  }

  tryRead(0);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
