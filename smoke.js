/* اختبار دخان: تشغيل app.js في بيئة DOM مصغّرة والتقاط الهيدر والفوتر */
const fs = require('fs');
const vm = require('vm');

function makeDoc(lang, page) {
  const els = {};
  function mk(id) {
    return {
      id, innerHTML: '', className: '', textContent: '',
      classList: { _s: new Set(), add(x) { this._s.add(x); }, remove(x) { this._s.delete(x); }, toggle(x, f) { f ? this._s.add(x) : this._s.delete(x); }, contains(x) { return this._s.has(x); } },
      setAttribute() {}, addEventListener() {}, querySelector() { return mk(''); },
      querySelectorAll() { return []; }, closest() { return null; }, scrollHeight: 0,
      get offsetHeight() { return 80; }, style: {}
    };
  }
  els['site-header'] = mk('site-header');
  els['site-footer'] = mk('site-footer');
  // documentElement لا يملك .body في المتصفح الحقيقي — نتركه كذلك عمداً
  return {
    documentElement: { getAttribute: () => lang, lang, dir: lang === 'ar' ? 'rtl' : 'ltr' },
    body: { getAttribute: (a) => (a === 'data-root' ? '0' : page), style: {} },
    getElementById: (id) => els[id] || mk(id),
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener() {},
    __els: els
  };
}

function run(lang, page) {
  const ctx = {
    console,
    setTimeout, clearTimeout,
    addEventListener() {},
    innerWidth: 1400,
    scrollTo() {},
    matchMedia: () => ({ matches: false }),
    requestAnimationFrame: () => 0,
    history: { replaceState() {} }
  };
  ctx.window = ctx;
  ctx.globalThis = ctx;
  ctx.document = makeDoc(lang, page);
  ctx.Icons = require('./assets/icons.js');
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync('assets/app.js', 'utf8'), ctx, { filename: 'app.js' });
  return ctx.document.__els;
}

for (const lang of ['ar', 'en']) {
  const els = run(lang, 'gold');
  const h = els['site-header'].innerHTML;
  const f = els['site-footer'].innerHTML;
  console.log('=== ' + lang + ' ===');
  console.log('  header chars:', h.length, '| nav items:', (h.match(/class="nav__item"/g) || []).length,
              '| drawer groups:', (h.match(/data-accordion/g) || []).length);
  console.log('  active link (gold):', /gold\.html" class="is-active"/.test(h) || /is-active" href="gold\.html"/.test(h) || h.includes('gold.html'));
  console.log('  lang switch href:', (h.match(/href="([^"]*index\.html|[^"]*gold\.html)"/g) || []).slice(0, 3).join(' '));
  console.log('  footer chars:', f.length, '| cols:', (f.match(/class="footer__col"/g) || []).length,
              '| socials:', (f.match(/class="social-link"/g) || []).length);
  console.log('  footer ar dir ok:', f.includes('dir="ltr"') ? 'en-block ✔' : '—');
}
console.log('\nSMOKE TEST DONE');