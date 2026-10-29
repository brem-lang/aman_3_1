/* =============================================================================
   assets/terminal.js — مكوّن «منصة التداول» (Terminal)
   يعيد بناء واجهة التداول الظاهرة في الصورة المرفقة:
   قوائم المراقبة + شموع يابانية + لوحة الأمر + دفتر المراكز + الأرباح
   يُستخدم في الصفحة الرئيسية فقط. يعمل في Node (بناء) بدون DOM.
   ============================================================================= */
'use strict';

const Icons = require('./icons.js');

const I = (n, s, c) => Icons.svg(n, { size: s || 16, class: c });

/* ---------- مولّد عشوائي ثابت (حتى يكون الرسم متطابقاً في اللغتين) ---------- */
function rng(seed) {
  let s = seed >>> 0;
  return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/* ---------- توليد الشموع اليابانية ---------- */
function makeCandles(n, seed) {
  const r = rng(seed);
  const out = [];
  let price = 1.1180;
  for (let i = 0; i < n; i++) {
    const drift = i > 26 && i < 40 ? -0.0016 : i > 46 && i < 56 ? 0.0022 : 0.0004;
    const open = price;
    const change = (r() - 0.48) * 0.0026 + drift;
    const close = open + change;
    const high = Math.max(open, close) + r() * 0.0011;
    const low = Math.min(open, close) - r() * 0.0011;
    out.push({ o: open, h: high, l: low, c: close, v: 40 + Math.round(r() * 160) });
    price = close;
  }
  return out;
}

/* ---------- رسم الشموع + الحجم ---------- */
function chartSVG(candles) {
  const W = 700, H = 395, PAD_T = 12, PAD_B = 30;
  const plotH = H - PAD_T - PAD_B;
  const lo = Math.min(...candles.map(c => c.l));
  const hi = Math.max(...candles.map(c => c.h));
  const span = hi - lo || 1;
  const step = W / candles.length;
  const bodyW = Math.max(2.4, step * 0.58);
  const y = v => PAD_T + plotH - ((v - lo) / span) * plotH;

  const candlesSVG = candles.map((c, i) => {
    const x = i * step + step / 2;
    const up = c.c >= c.o;
    const col = up ? '#26C281' : '#F0415E';
    const top = y(Math.max(c.o, c.c));
    const bot = y(Math.min(c.o, c.c));
    return `<line x1="${x.toFixed(1)}" y1="${y(c.h).toFixed(1)}" x2="${x.toFixed(1)}" y2="${y(c.l).toFixed(1)}" stroke="${col}" stroke-width="1"/>` +
      `<rect x="${(x - bodyW / 2).toFixed(1)}" y="${top.toFixed(1)}" width="${bodyW.toFixed(1)}" height="${Math.max(1.2, bot - top).toFixed(1)}" rx=".6" fill="${col}"/>`;
  }).join('');

  /* شبكة أفقية + محور الأسعار */
  const gridCount = 6;
  let grid = '', axis = '';
  for (let i = 0; i <= gridCount; i++) {
    const v = lo + (span / gridCount) * i;
    const yy = y(v).toFixed(1);
    grid += `<line x1="0" y1="${yy}" x2="${W}" y2="${yy}" stroke="#1E2433" stroke-width="1"/>`;
    axis += `<text x="${W + 8}" y="${(+yy + 4).toFixed(1)}" fill="#8A90A0" font-size="10">${v.toFixed(4)}</text>`;
  }

  /* خط السعر الحالي */
  const last = candles[candles.length - 1];
  const lastY = y(last.c).toFixed(1);
  const dash = `<line x1="0" y1="${lastY}" x2="${W}" y2="${lastY}" stroke="#8A90A0" stroke-width="1" stroke-dasharray="3 3"/>` +
    `<rect x="${W + 2}" y="${(+lastY - 8).toFixed(1)}" width="54" height="16" rx="3" fill="#2BA6E8"/>` +
    `<text x="${W + 6}" y="${(+lastY + 4).toFixed(1)}" fill="#fff" font-size="10" font-weight="700">${last.c.toFixed(5)}</text>`;

  /* أعمدة الحجم */
  const vW = W / candles.length;
  let vol = '';
  candles.forEach((c, i) => {
    const hgt = (c.v / 200) * 34;
    vol += `<rect x="${(i * vW).toFixed(1)}" y="${(H - hgt).toFixed(1)}" width="${(vW * 0.6).toFixed(1)}" height="${hgt.toFixed(1)}" fill="#2A3145"/>`;
  });

  return `<svg viewBox="0 0 ${W + 62} ${H}" class="term__svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    ${grid}${vol}${candlesSVG}${dash}
    ${axis}
  </svg>`;
}

/* ---------- المحتوى ثنائي اللغة ---------- */
const T = {
  ar: {
    watchlists: 'قوائم المراقبة', allSymbols: 'كل الرموز', search: 'ابحث عن الأداة…',
    symbol: 'الرمز', bid: 'شراء', ask: 'بيع',
    newOrder: 'أمر جديد', type: 'النوع', market: 'سوق', volume: 'الحجم',
    stopLoss: 'وقف الخسارة', takeProfit: 'جني الأرباح', autoSLTP: 'وقف/جني تلقائي',
    margin: 'الهامش', leverage: 'الرافعة', spread: 'الفارق', pipValue: 'قيمة النقطة',
    sell: 'بيع', buy: 'شراء',
    positions: 'المراكز', pending: 'الأوامر المعلّقة', history: 'السجل', alerts: 'تنبيهات الأسعار', transactions: 'المعاملات',
    empty: 'لا توجد مراكز مفتوحة. نفّذ أمراً لتبدأ التداول.',
    balance: 'الرصيد', equity: 'صافي الحساب', freeMargin: 'الهامش الحر', marginLevel: 'مستوى الهامش',
    depth: 'دفتر المراكز', indicators: 'المؤشرات',
    timeframes: ['1d', '5d', '1m', '3m', '1y', '5y', 'الكل'],
    fx: 'فوركس', commodities: 'سلع', crypto: 'عملات رقمية', indices: 'مؤشرات'
  },
  en: {
    watchlists: 'Watchlists', allSymbols: 'All Symbols', search: 'Search instruments…',
    symbol: 'Symbol', bid: 'Bid', ask: 'Ask',
    newOrder: 'New Order', type: 'Type', market: 'Market', volume: 'Volume',
    stopLoss: 'Stop Loss', takeProfit: 'Take Profit', autoSLTP: 'Auto SL/TP',
    margin: 'Margin', leverage: 'Leverage', spread: 'Spread', pipValue: 'Pip Value',
    sell: 'Sell', buy: 'Buy',
    positions: 'Positions', pending: 'Pending Orders', history: 'History', alerts: 'Price Alerts', transactions: 'Transactions',
    empty: 'No open positions. Place an order to start trading.',
    balance: 'Balance', equity: 'Equity', freeMargin: 'Free Margin', marginLevel: 'Margin Level',
    depth: 'Depth of Market', indicators: 'Indicators',
    timeframes: ['1d', '5d', '1m', '3m', '1y', '5y', 'All'],
    fx: 'Forex', commodities: 'Commodities', crypto: 'Crypto', indices: 'Indices'
  }
};

const PAIRS = [
  ['AUD/CAD', '0.98349', '0.98399'],
  ['AUD/JPY', '110.490', '110.510'],
  ['AUD/NZD', '1.23205', '1.23267'],
  ['AUD/USD', '0.69864', '0.69884'],
  ['CAD/JPY', '112.316', '112.336'],
  ['EUR/AUD', '1.60599', '1.60679'],
  ['EUR/CAD', '1.57988', '1.58068'],
  ['EUR/CHF', '0.92541', '0.92587'],
  ['EUR/GBP', '0.84147', '0.84189'],
  ['EUR/USD', '1.12236', '1.12256']
];
const DEPTH = [
  ['1.12296', '57'], ['1.12286', '69'],
  ['1.12276', '24'], ['1.12266', '76']
];

/* =============================================================================
   الدالة الرئيسية: ترجع HTML كامل للمنصة
   ============================================================================= */
function terminalHTML(lang, opts) {
  opts = opts || {};
  const t = T[lang === 'en' ? 'en' : 'ar'];
  const candles = makeCandles(58, 20260215);
  const last = candles[candles.length - 1];

  /* شريط الأدوات العلوي */
  const toolbar = `
    <div class="term__toolbar">
      <div class="term__tabs">
        <button class="term__tab is-active" type="button">${t.watchlists}</button>
        <button class="term__tab" type="button">${t.allSymbols}</button>
      </div>
      <div class="term__tool">
        <button class="term__chip is-active" type="button">1h</button>
        <button class="term__icon" type="button" aria-label="Indicators">${I('sliders', 15)}<span class="term__icon-label">${t.indicators}</span></button>
      </div>
      <div class="term__tool term__tool--tf">
        ${t.timeframes.map(x => `<button class="term__chip" type="button">${x}</button>`).join('')}
      </div>
    </div>`;

  /* قائمة المراقبة */
  const watchlist = `
    <aside class="term__watch">
      <div class="term__search">${I('search', 14)}<span>${t.search}</span></div>
      <div class="term__whead"><span>${t.symbol}</span><span>${t.bid}</span><span>${t.ask}</span></div>
      <div class="term__wgroup">${I('globe', 13)}<span>${t.fx}</span><em>20</em></div>
      <ul class="term__wlist">
        ${PAIRS.map(p => `
          <li class="${p[0] === 'EUR/USD' ? 'is-active' : ''}">
            <span class="term__sym">${p[0]}</span>
            <span class="term__bid">${p[1]}</span>
            <span class="term__ask">${p[2]}</span>
          </li>`).join('')}
      </ul>
    </aside>`;

  /* منطقة الرسم */
  const chart = `
    <div class="term__chart">
      <div class="term__ohlc">
        <span class="term__pair">${I('globe', 13)} EUR/USD · 1h · TRADEX</span>
        <span class="term__vals">
          <b>O 1.12176</b><b>H 1.12311</b><b>L 1.12175</b><b>C 1.12246</b>
          <b class="up">+0.00070 (+0.06%)</b>
        </span>
      </div>
      <div class="term__plot">${chartSVG(candles)}</div>
      <div class="term__tfbar">
        <div class="term__tflist">${['1d', '5d', '1m', '3m', '1y', '5y'].map(x => `<button class="term__chip" type="button">${x}</button>`).join('')}</div>
        <div class="term__clock">11:35:30 (UTC) · <span>%</span> log · auto</div>
      </div>
    </div>`;

  /* لوحة الأمر */
  const order = `
    <aside class="term__order">
      <div class="term__opair">EUR/USD ${I('chevron-down', 14)}</div>
      <h4 class="term__otitle">${t.newOrder}</h4>
      <div class="term__quotes">
        <div class="term__quote term__quote--sell"><span>${t.bid}</span><b>1.12236</b></div>
        <div class="term__quote term__quote--buy"><span>${t.ask}</span><b>1.12256</b></div>
      </div>
      <div class="term__field"><span>${t.type}</span><div class="term__select">${t.market} ${I('chevron-down', 12)}</div></div>
      <div class="term__field"><span>${t.volume}</span><div class="term__stepper">${I('minus', 12)}<b>0.10</b>${I('plus', 12)}</div></div>
      <div class="term__lots">${['0.01', '0.1', '0.5', '1', '2'].map(x => `<button class="term__chip ${x === '0.1' ? 'is-active' : ''}" type="button">${x}</button>`).join('')}</div>
      <div class="term__field-row">
        <div class="term__field"><span>${t.stopLoss}</span><div class="term__input">0.00</div></div>
        <div class="term__field"><span>${t.takeProfit}</span><div class="term__input">0.00</div></div>
      </div>
      <div class="term__auto"><span>${t.autoSLTP}</span>
        <div>${['1%', '2%', '3%', '5%'].map(x => `<button class="term__chip" type="button">${x}</button>`).join('')}</div>
      </div>
      <div class="term__meta">
        <span>${t.margin}: <b>$28.06</b></span><span>${t.leverage}: <b>1:400</b></span>
        <span>${t.spread}: <b>0.0 pips</b></span><span>${t.pipValue}: <b>$1.00</b></span>
      </div>
      <div class="term__actions">
        <button class="term__btn term__btn--sell" type="button"><span>${t.sell}</span><b>1.12236</b></button>
        <button class="term__btn term__btn--buy" type="button"><span>${t.buy}</span><b>1.12256</b></button>
      </div>
      <div class="term__depth">
        <div class="term__dhead"><span>${t.depth}</span><b>EUR/USD</b></div>
        <div class="term__drow term__drow--head"><span>${t.bid} Vol</span><span>Price</span><span>${t.ask} Vol</span></div>
        ${DEPTH.map(d => `
          <div class="term__drow">
            <span class="term__dbid">${d[1]}</span><span class="term__dprice">${d[0]}</span>
            <span class="term__dask">${d[1]}</span>
          </div>`).join('')}
      </div>
    </aside>`;

  /* المراكز */
  const positions = `
    <div class="term__bottom">
      <div class="term__btabs">
        <button class="term__tab is-active" type="button">${I('trending-up', 13)} ${t.positions}</button>
        <button class="term__tab" type="button">${t.pending}</button>
        <button class="term__tab" type="button">${t.history}</button>
        <button class="term__tab" type="button">${t.alerts}</button>
        <button class="term__tab" type="button">${t.transactions}</button>
      </div>
      <div class="term__bempty">${t.empty}</div>
      <div class="term__bal">
        <span><i>${t.balance}</i><b>$0.00</b></span>
        <span><i>${t.equity}</i><b>$0.00</b></span>
        <span><i>${t.margin}</i><b>$0.00</b></span>
        <span><i>${t.freeMargin}</i><b>$0.00</b></span>
        <span><i>${t.marginLevel}</i><b>0.00%</b></span>
      </div>
    </div>`;

  return `<div class="terminal" dir="ltr" role="img" aria-label="amana trading terminal">
    ${toolbar}
    <div class="term__main">
      ${watchlist}
      ${chart}
      ${order}
    </div>
    ${positions}
  </div>`;
}

module.exports = { terminalHTML: terminalHTML, makeCandles: makeCandles };