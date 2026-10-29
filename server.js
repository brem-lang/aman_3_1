/* =============================================================================
   server.js — سيرفر ملفات ثابت بسيط للتطوير
   الاستخدام: npm start   ثم افتح http://localhost:8080
   ============================================================================= */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 8080;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // الجذر يعرض الصفحة العربية
  if (urlPath === '/') urlPath = '/index.html';

  // تحويل الدليل إلى index.html
  let filePath = path.join(ROOT, urlPath);
  try {
    if (fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
  } catch (e) { /* غير موجود */ }

  // منع الخروج خارج المجلد
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // صفحة 404 بسيطة
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<!doctype html><meta charset="utf-8"><title>404</title>' +
        '<body style="font-family:system-ui;padding:60px;text-align:center">' +
        '<h1>404</h1><p>الصفحة غير موجودة / Page not found</p>' +
        '<p><a href="/">العودة للرئيسية</a></p></body>');
    }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('\n  ✔ السيرفر يعمل على:  http://localhost:' + PORT + '/');
  console.log('    النسخة العربية:    http://localhost:' + PORT + '/ar/');
  console.log('    النسخة الإنجليزية: http://localhost:' + PORT + '/en/\n');
});