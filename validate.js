/* تحقق: الأيقونات المستخدمة، الروابط الداخلية، Languages، المخرجات */
const fs = require('fs');
const path = require('path');
const Icons = require('./assets/icons.js');
const core = require('./data/pages-core.js');
const comp = require('./data/pages-company.js');

const PAGES = [core.HOME,
  ...Object.values(core.MARKETS), ...Object.values(core.PLATFORMS),
  ...Object.values(comp.LEARN), ...Object.values(comp.COMPANY),
  ...Object.values(comp.PROMOS), ...Object.values(comp.LEGAL)];

const slugs = new Set(PAGES.map(p => p.slug));
slugs.add('index');

/* 1) أيقونات غير معرّفة */
const used = new Set();
const scanIcons = (o) => {
  if (!o || typeof o !== 'object') return;
  if (Array.isArray(o)) return o.forEach(scanIcons);
  for (const k in o) {
    if (k === 'icon' && typeof o[k] === 'string') used.add(o[k]);
    scanIcons(o[k]);
  }
};
PAGES.forEach(scanIcons);
const missing = [...used].filter(n => !Icons.has(n));
console.log('أيقونات مستخدمة:', used.size, '| ناقصة:', missing.length ? missing.join(', ') : 'لا شيء ✔');

/* 2) روابط داخلية لصفحات غير موجودة */
const badLinks = new Set();
PAGES.forEach(p => {
  const walk = (o) => {
    if (!o || typeof o !== 'object') return;
    if (Array.isArray(o)) return o.forEach(walk);
    for (const k in o) {
      const v = o[k];
      if ((k === 'href') && typeof v === 'string') {
        const m = /^([a-z0-9-]+)\.html$/.exec(v);
        if (m && !slugs.has(m[1])) badLinks.add(p.slug + ' → ' + v);
      }
      if (k === 'slug' && typeof v === 'string' && !slugs.has(v)) badLinks.add('slug: ' + v);
      walk(v);
    }
  };
  walk(p);
});
console.log('روابط مكسورة:', badLinks.size ? [...badLinks].join('\n  ') : 'لا شيء ✔');

/* 3) سلامة الملفات الناتجة */
['ar', 'en'].forEach(dir => {
  const files = fs.readdirSync(dir);
  const bytes = files.reduce((s, f) => s + fs.statSync(path.join(dir, f)).size, 0);
  console.log(dir + '/ → ' + files.length + ' ملف، ' + Math.round(bytes / 1024) + ' KB');
});

/* 4) فحص HTML بسيط: وسوم غير مغلقة */
for (const lang of ['ar', 'en']) {
  let issues = 0;
  fs.readdirSync(lang).forEach(f => {
    const html = fs.readFileSync(path.join(lang, f), 'utf8');
    for (const tag of ['div', 'section', 'ul', 'li', 'table', 'form', 'main', 'header', 'footer']) {
      const o = (html.match(new RegExp('<' + tag + '[\\s>]', 'g')) || []).length;
      const c = (html.match(new RegExp('</' + tag + '>', 'g')) || []).length;
      if (o !== c) { console.log('  ✗ ' + lang + '/' + f + ' <' + tag + '>: ' + o + ' فتح / ' + c + ' إغلاق'); issues++; }
    }
  });
  console.log('فحص وسوم ' + lang + ': ' + (issues ? issues + ' مشكلة' : 'سليم ✔'));
}