/* =============================================================================
   build.js — مولّد الصفحات الثابتة
   يقرأ بيانات الصفحات من data/*.js ويكتب:
     ar/*.html   (العربية)
     en/*.html   (الإنجليزية)
     index.html  (الصفحة الرئيسية العربية — نسخة الموقع الجذرية)
  ，还会 ينسخ index.html إلى ar/index.html و en/index.html
   ============================================================================= */
'use strict';

const fs = require('fs');
const path = require('path');

const Icons = require('./assets/icons.js');
const core = require('./data/pages-core.js');
const comp = require('./data/pages-company.js');
const HX = require('./data/home-extra.js');
const Terminal = require('./assets/terminal.js');

const ROOT = __dirname;
const LANGS = ['ar', 'en'];

/* ---------- نسخة الملفات (cache busting): بصمة المحتوى تتغير فقط عند تعديل الملف ---------- */
const crypto = require('crypto');
const ASSET_VER = {};
['style.css', 'icons.js', 'app.js'].forEach(f => {
  const buf = fs.readFileSync(path.join(ROOT, 'assets', f));
  ASSET_VER[f] = crypto.createHash('sha256').update(buf).digest('hex').slice(0, 10);
});
const asset = (base, f) => `${base}${f}?v=${ASSET_VER[f]}`;

/* ---------- دمج كل الصفحات في قائمة واحدة ---------- */
const PAGES = [];
PAGES.push(core.HOME);
Object.keys(core.MARKETS).forEach(k => PAGES.push(core.MARKETS[k]));
Object.keys(core.PLATFORMS).forEach(k => PAGES.push(core.PLATFORMS[k]));
Object.keys(comp.LEARN).forEach(k => PAGES.push(comp.LEARN[k]));
Object.keys(comp.COMPANY).forEach(k => PAGES.push(comp.COMPANY[k]));
Object.keys(comp.PROMOS).forEach(k => PAGES.push(comp.PROMOS[k]));
Object.keys(comp.LEGAL).forEach(k => PAGES.push(comp.LEGAL[k]));

/* ------------------------------------------------------------------ */
/*  أدوات مساعدة                                                       */
/* ------------------------------------------------------------------ */
function pick(v, lang) {
  if (v === null || v === undefined) return '';
  if (Array.isArray(v)) return v.map(x => pick(x, lang)).join('</th><th>');
  if (typeof v === 'object') return v[lang] !== undefined ? v[lang] : (v.en || v.ar || '');
  return String(v);
}
/** يحوّل \n إلى <br> ويحافظ على كتل النص */
function nl2br(s) {
  return String(s).split('\n').map(line => line.trim()).filter(Boolean).join('<br>');
}
function icon(name, size, cls) { return Icons.svg(name || 'compass', { size: size || 24, class: cls }); }

/* ------------------------------------------------------------------ */
/*  روابط الصفحات                                                     */
/* ------------------------------------------------------------------ */
function link(slug, lang, depth) {
  if (slug === 'index') return depth === 0 ? '' : 'index.html';
  return depth === 0 ? lang + '/' + slug + '.html' : slug + '.html';
}

/* ================================================================== */
/*  رندر بلوكات المحتوى                                               */
/* ================================================================== */
function renderBlock(b, lang, depth, page) {
  const t = (k) => pick(b[k], lang);
  const H = (key, cls) => {
    const v = t(key);
    if (!v) return '';
    return `<div class="section__head ${cls || ''}" data-reveal><h2 class="h2">${nl2br(v)}</h2>${t('text') ? `<p class="sub">${nl2br(t('text'))}</p>` : ''}</div>`;
  };

  switch (b.type) {

    /* ---- شبكة مزايا ---- */
    case 'features': {
      const cols = b.cols || 3;
      const items = (b.items || []).map(i => `
        <article class="card" data-reveal>
          <div class="card__icon">${icon(i.icon, 26)}</div>
          <h3>${nl2br(pick(i.title, lang))}</h3>
          ${i.text ? `<p>${nl2br(pick(i.text, lang))}</p>` : ''}
        </article>`).join('');
      return `<section class="section section--dark"><div class="container">${H('title')}
        <div class="grid grid--${cols}">${items}</div>
      </div></section>`;
    }

    /* ---- قسم مقسّم ---- */
    case 'split': {
      return `<section class="section section--dark"><div class="container">
        <div class="split ${b.reverse ? 'split--reverse' : ''}" data-reveal>
          <div class="split__media">${b.image ? `<img src="${b.image}" alt="" loading="lazy">` : ''}</div>
          <div class="split__copy">
            <h2 class="h2">${nl2br(t('title'))}</h2>
            ${t('text') ? `<p class="sub">${nl2br(t('text'))}</p>` : ''}
            ${(b.bullets || []).length ? `<ul class="check-list">${b.bullets.map(x =>
              `<li>${icon(x.icon, 20)}<span>${nl2br(pick(x.text, lang))}</span></li>`).join('')}</ul>` : ''}
          </div>
        </div>
      </div></section>`;
    }

    /* ---- شريط إحصائيات ---- */
    case 'stats': {
      return `<section class="section section--black"><div class="container">
        <div class="stats-strip">${(b.items || []).map(s => `
          <div class="stats-strip__item" data-reveal>
            <div class="stats-strip__num">${pick(s.num, lang)}</div>
            <div class="stats-strip__label">${nl2br(pick(s.label, lang))}</div>
          </div>`).join('')}</div>
      </div></section>`;
    }

    /* ---- خطوات ---- */
    case 'steps': {
      return `<section class="section section--dark"><div class="container">${H('title')}
        <div class="steps ${b.items && b.items.length === 4 ? 'steps--4' : ''}">${(b.items || []).map((s, i) => `
          <div class="step" data-reveal>
            <div class="step__num">${i + 1}</div>
            <h3>${nl2br(pick(s.title, lang))}</h3>
            <p>${nl2br(pick(s.text, lang))}</p>
          </div>`).join('')}</div>
      </div></section>`;
    }

    /* ---- جدول ---- */
    case 'table': {
      const head = pick(b.head, lang);
      const headCells = Array.isArray(b.head[lang]) ? b.head[lang] : [];
      return `<section class="section section--dark"><div class="container">${H('title')}
        <div class="table-wrap" data-reveal>
          <table class="table">
            <thead><tr>${headCells.map(h => `<th>${pick(h, lang)}</th>`).join('')}</tr></thead>
            <tbody>${(b.rows || []).map(r => `<tr>${r.map(c => `<td>${pick(c, lang)}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        </div>
      </div></section>`;
    }

    /* ---- أسئلة شائعة ---- */
    case 'faq': {
      return `<section class="section section--dark"><div class="container">${H('title')}
        <div class="accordion" data-faq>${(b.items || []).map(i => `
          <div class="acc-item">
            <button class="acc-head" type="button" aria-expanded="false">
              <span>${nl2br(pick(i.q, lang))}</span>${icon('chevron-down', 18)}
            </button>
            <div class="acc-body"><div>${nl2br(pick(i.a, lang))}</div></div>
          </div>`).join('')}</div>
      </div></section>`;
    }

    /* ---- دعوة للتسجيل ---- */
    case 'cta': {
      return `<section class="section"><div class="container">
        <div class="cta-band" data-reveal>
          <h2>${nl2br(t('title'))}</h2>
          ${t('text') ? `<p class="sub">${nl2br(t('text'))}</p>` : ''}
          <a class="btn btn--white" href="${b.href || '#'}">${nl2br(t('cta'))}${icon('arrow-right', 18)}</a>
        </div>
      </div></section>`;
    }

    /* ---- ملاحظة / تنبيه ---- */
    case 'note': {
      return `<section class="section"><div class="container">
        <div class="note ${b.variant === 'grey' ? 'note--grey' : ''}" data-reveal>
          ${icon(b.variant === 'grey' ? 'info' in Icons.paths ? 'info' : 'alert-triangle' : 'alert-triangle', 24)}
          <div><strong>${nl2br(t('title'))}</strong><br>${nl2br(t('text'))}</div>
        </div>
      </div></section>`;
    }

    /* ---- مقالات ---- */
    case 'media': {
      return `<section class="section section--grey"><div class="container">${H('title')}
        <div class="grid grid--3">${(b.items || []).map(i => `
          <article class="media-card" data-reveal>
            <div class="media-card__date">${icon(i.icon, 16)} ${pick(i.date, lang)}</div>
            <h3>${nl2br(pick(i.title, lang))}</h3>
            <p>${nl2br(pick(i.text, lang))}</p>
            <a class="link-arrow" href="#">${lang === 'en' ? 'Read more' : 'اقرأ المزيد'}${icon('arrow-right', 16)}</a>
          </article>`).join('')}</div>
      </div></section>`;
    }

    /* ---- فيديوهات ---- */
    case 'videos': {
      return `<section class="section section--dark" id="videos"><div class="container">${H('title')}
        <div class="grid grid--3">${(b.items || []).map(i => `
          <a class="video-card" href="#" data-reveal>
            <div class="video-card__play">${icon('play', 22)}</div>
            <div class="video-card__meta">
              <h3>${nl2br(pick(i.title, lang))}</h3>
              <span>${nl2br(pick(i.meta, lang))}</span>
            </div>
          </a>`).join('')}</div>
      </div></section>`;
    }

    /* ---- وظائف ---- */
    case 'people': {
      return `<section class="section section--dark" id="roles"><div class="container">${H('title')}
        <div class="grid grid--3">${(b.items || []).map(i => `
          <article class="person-card" data-reveal>
            <div class="card__icon card__icon--ghost">${icon('briefcase', 24)}</div>
            <h3>${nl2br(pick(i.role, lang))}</h3>
            <span class="person-card__role">${icon('map-pin', 14)} ${nl2br(pick(i.location, lang))}</span>
            <a class="link-arrow" href="https://wa.me/966115009962">${lang === 'en' ? 'Apply' : 'قدّم الآن'}${icon('arrow-right', 16)}</a>
          </article>`).join('')}</div>
      </div></section>`;
    }

    /* ---- وثائق ---- */
    case 'docs': {
      return `<section class="section section--grey"><div class="container">${H('title')}
        <div class="grid grid--3">${(b.items || []).map(i => `
          <a class="card card--link" href="#" data-reveal>
            <div class="card__icon">${icon(i.icon, 24)}</div>
            <h3>${nl2br(pick(i.title, lang))}</h3>
            <p>${nl2br(pick(i.text, lang))}</p>
          </a>`).join('')}</div>
      </div></section>`;
    }

    /* ---- نص طويل ---- */
    case 'prose': {
      const paras = (b.body && b.body[lang]) || [];
      return `<section class="section section--grey"><div class="container container--narrow">
        ${H('title')}
        <div class="prose" data-reveal>${paras.map(p => `<p>${nl2br(p)}</p>`).join('')}</div>
      </div></section>`;
    }

    /* ---- نموذج ---- */
    case 'form': {
      const fields = (b.fields || []).map(f => {
        if (f.type === 'textarea') {
          return `<div class="field"><label for="f_${f.name}">${pick(f.label, lang)}${f.required ? ' *' : ''}</label>
            <textarea id="f_${f.name}" name="${f.name}"${f.required ? ' required' : ''}></textarea></div>`;
        }
        if (f.type === 'select') {
          return `<div class="field"><label for="f_${f.name}">${pick(f.label, lang)}</label>
            <select id="f_${f.name}" name="${f.name}">${(f.options[lang] || []).map(o => `<option>${o}</option>`).join('')}</select></div>`;
        }
        return `<div class="field"><label for="f_${f.name}">${pick(f.label, lang)}${f.required ? ' *' : ''}</label>
          <input id="f_${f.name}" name="${f.name}" type="${f.type || 'text'}"${f.required ? ' required' : ''}></div>`;
      }).join('');
      return `<section class="section section--grey" id="contact"><div class="container container--narrow">
        ${H('title')}
        <form class="form" data-form data-reveal>
          <div class="form__row">${fields}</div>
          <p class="form__note" data-form-msg hidden></p>
          <button class="btn btn--primary" type="submit">${lang === 'en' ? 'Send message' : 'إرسال الرسالة'}</button>
        </form>
      </div></section>`;
    }

    default:
      return '';
  }
}

/* ================================================================== */
/*  قالب الصفحة الرئيسية (7 أقسام)                                    */
/* ================================================================== */
function renderHome(home, lang, depth) {
  const t = (o) => pick(o, lang);
  const A = HX.hero;

  return `
  <!-- ================= 1. HERO ================= -->
  <section class="hero" id="hero">
    <div class="hero__glow" aria-hidden="true"></div>

    <div class="container hero__top">
      <div class="hero__copy" data-reveal>
        <span class="hero__eyebrow">${icon('shield-check', 15)} ${nl2br(t(A.eyebrow))}</span>

        <h1 class="hero__title">
          ${nl2br(t(A.title1))}<br>
          <span class="hl">${nl2br(t(A.title2))}</span>
        </h1>

        <p class="hero__text">${nl2br(t(A.text))}</p>
        <p class="hero__text hero__text--muted">${nl2br(t(A.text2))}</p>

        <div class="hero__actions">
          <a class="btn btn--primary" href="${link('web', lang, depth)}">
            ${nl2br(t(A.cta1))}${icon('arrow-right', 18)}
          </a>
          <a class="btn btn--ghost" href="#markets">${nl2br(t(A.cta2))}</a>
        </div>

        <ul class="hero__points">
          ${A.points.map(p => `<li>${icon(p.icon, 17)}<span>${nl2br(t(p.t))}</span></li>`).join('')}
        </ul>
      </div>

      <!-- بطاقة الأرقام السريعة -->
      <ul class="hero__stats" data-reveal>
        ${A.quickStats.map((s, i) => `
          <li class="hero__stat">
            <span class="hero__stat-ico">${icon(['bar-chart', 'bitcoin', 'users'][i], 18)}</span>
            <b>${nl2br(t(s.num))}</b>
            <span class="hero__stat-label">${nl2br(t(s.label))}</span>
          </li>`).join('')}
      </ul>
    </div>

    <!-- منصة التداول: بعرض كامل -->
    <div class="container hero__stage" data-reveal>
      <div class="hero__stage-badges">
        <span class="stage-badge stage-badge--a">${icon('percent', 16)} ${nl2br(t(A.points[0].t))}</span>
        <span class="stage-badge stage-badge--b">${icon('zap', 16)} ${nl2br(t(A.points[2].t))}</span>
      </div>
      <div class="term-scroll hide-scroll">
        ${Terminal.terminalHTML(lang)}
      </div>
    </div>
  </section>

  <!-- ================= 2. شريط الجهات الرقابية ================= -->
  <section class="reg-strip" aria-label="Regulators">
    <div class="container reg-strip__inner">
      <span class="reg-strip__label">${icon('scale', 16)} ${lang === 'en' ? 'Regulated by' : 'مرخّصون من'}</span>
      <ul class="reg-strip__list">
        ${t(HX.regulators).map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>
  </section>

  <!-- ================= 3. كروت العروض ================= -->
  <section class="campaigns" id="campaigns">
    <img class="campaigns__bg" src="${home.campaigns.bg}" alt="" aria-hidden="true" loading="lazy">
    <div class="container campaigns__inner">
      <h2 class="h2 campaigns__title" data-reveal>
        ${nl2br(t(home.campaigns.title).split('\n')[0])}<br>
        <span class="hl">${nl2br(t(home.campaigns.hl))}</span>
      </h2>

      <div class="rail-mask hide-scroll">
        <div class="rail" data-marquee>
          ${HX.campaignCards.slice().reverse().map(c => `
            <a class="campaign-card" href="${link(c.href.replace('.html', ''), lang, depth)}" data-reveal>
              <img class="campaign-card__img" src="${core.IMG[c.key]}" alt="" loading="lazy">
              <div class="campaign-card__body">
                <span class="campaign-card__tag">${nl2br(t(c.tag))}</span>
                <h3>${nl2br(t(c.t))}</h3>
                <span class="campaign-card__more">${lang === 'en' ? 'Learn more' : 'اعرف المزيد'} ${icon('arrow-right', 14)}</span>
              </div>
            </a>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- ================= 3.5 أنواع الحسابات + مدير المحفظة ================= -->
  <section class="section section--grey accounts" id="accounts">
    <div class="container">
      <div class="accounts__head" data-reveal>
        <span class="section__eyebrow">${icon('layers', 14)} ${nl2br(t(HX.accounts.eyebrow))}</span>
        <h2 class="h2">${nl2br(t(HX.accounts.title))}</h2>
      </div>
      <div class="accounts__grid">
        ${HX.accounts.cards.map(c => `
          <article class="account-card${c.featured ? ' account-card--vip' : ''}" data-reveal>
            <div class="account-card__top">
              <span class="account-card__ico">${icon(c.icon, 22)}</span>
              <span class="account-card__tag">${nl2br(t(c.tag))}</span>
            </div>
            <h3>${nl2br(t(c.name))}</h3>
            <p>${nl2br(t(c.text))}</p>
            <ul class="account-card__points">
              ${c.points.map(p => `<li>${icon('check-circle', 17)}<span>${nl2br(t(p))}</span></li>`).join('')}
            </ul>
            <a class="btn ${c.featured ? 'btn--primary' : 'btn--dark'}" href="${link(c.href.replace('.html', ''), lang, depth)}">${nl2br(t(c.cta))}</a>
          </article>`).join('')}
      </div>

      <div class="manager" data-reveal>
        <div class="manager__copy">
          <span class="section__eyebrow">${icon(HX.manager.icon, 14)} ${nl2br(t(HX.manager.eyebrow))}</span>
          <h3 class="h2">${nl2br(t(HX.manager.title))}</h3>
          <p class="sub">${nl2br(t(HX.manager.text))}</p>
          <a class="btn btn--primary" href="${link('contact', lang, depth)}">${nl2br(t(HX.manager.cta))}</a>
        </div>
        <ul class="manager__points">
          ${HX.manager.points.map(p => `<li>${icon(p.icon, 20)}<span>${nl2br(t(p.t))}</span></li>`).join('')}
        </ul>
      </div>
    </div>
  </section>

  <!-- ================= 4. الذهب ================= -->
  <section class="section section--gold" id="gold">
    <img class="section__bg" src="${home.gold.bg}" alt="" aria-hidden="true" loading="lazy">
    <div class="container">
      <div class="split split--gold" data-reveal>
        <div class="split__media split__media--glow">
          <img src="${home.gold.bg}" alt="" loading="lazy">
        </div>
        <div class="split__copy">
          <span class="section__eyebrow">${icon('coins', 14)} ${lang === 'en' ? 'Gold' : 'الذهب'}</span>
          <h2 class="h2" style="color:#fff">${nl2br(t(home.gold.title))}</h2>
          <p class="sub" style="color:rgba(255,255,255,.78)">${nl2br(t(home.gold.text))}</p>
          <ul class="check-list check-list--gold">
            ${HX.gold.bullets.map(b => `<li>${icon(b.icon, 19)}<span>${nl2br(t(b.t))}</span></li>`).join('')}
          </ul>
          <p class="gold__note">${icon('clock', 16)} ${nl2br(t(HX.gold.note))}</p>
          <div class="section-copy__actions">
            <a class="btn btn--white" href="${link('gold', lang, depth)}">${nl2br(t(home.gold.cta1))}</a>
            <a class="btn btn--outline" href="${link('pricing', lang, depth)}">${nl2br(t(home.gold.cta2))}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= 5. العملات الرقمية ================= -->
  <section class="crypto-section" id="crypto">
    <div class="container">
      <div class="split split--reverse split--light" data-reveal>
        <div class="split__media">
          <div class="crypto-card">
            <div class="crypto-card__row">
              ${[ 'Bitcoin', 'Ethereum', 'Solana' ].map((n, i) => `
                <div class="crypto-card__coin">
                  <span class="crypto-card__dot c${i + 1}"></span>
                  <b>${n}</b>
                  <em class="${i === 1 ? 'down' : 'up'}">${i === 1 ? '−1.8%' : (i === 0 ? '+6.2%' : '+3.4%')}</em>
                </div>`).join('')}
            </div>
            <div class="crypto-card__note">${icon('zap', 16)} ${nl2br(t(HX.crypto.note))}</div>
          </div>
        </div>
        <div class="split__copy">
          <span class="section__eyebrow section__eyebrow--dark">${icon('bitcoin', 14)} ${lang === 'en' ? 'Crypto' : 'العملات الرقمية'}</span>
          <h2 class="h1">${nl2br(t(home.crypto.title))}</h2>
          <p class="sub muted-dark">${nl2br(t(home.crypto.text))}</p>
          <ul class="check-list">
            ${HX.crypto.bullets.map(b => `<li>${icon(b.icon, 19)}<span>${nl2br(t(b.t))}</span></li>`).join('')}
          </ul>
          <div class="section-copy__actions">
            <a class="btn btn--primary" href="${link('crypto', lang, depth)}">${nl2br(t(home.crypto.cta))}</a>
            <a class="btn btn--ghost" href="${link('pricing', lang, depth)}">${lang === 'en' ? 'View pricing' : 'التسعير'}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= 6. الاستثمار ================= -->
  <section class="invest" id="invest">
    <div class="invest__bg" aria-hidden="true"></div>
    <div class="container invest__inner">
      <div class="invest__copy" data-reveal>
        <h2 class="h1" style="color:#fff">${nl2br(t(home.invest.title))}</h2>
        <p class="sub" style="color:rgba(255,255,255,.8)">${nl2br(t(home.invest.text))}</p>
        <ul class="invest__points">
          ${HX.invest.points.map(p => `
            <li>${icon(p.icon, 20)}<span>${nl2br(t(p.t))}</span></li>`).join('')}
        </ul>
        <a class="btn btn--primary" href="${link('web', lang, depth)}">${nl2br(t(home.invest.cta))}</a>
      </div>
    </div>
  </section>

  <!-- ================= 7. الإحصائيات ================= -->
  <section class="section stats-section" id="markets">
    <div class="container">
      <div class="stats__head" data-reveal>
        <h2 class="h2">${nl2br(t(home.stats.title))}</h2>
        <p class="sub">${nl2br(t(home.stats.sub))}</p>
      </div>
      <div class="stats__grid">
        ${home.stats.items.map(s => `
          <article class="stat-card" data-reveal>
            <div class="stat-card__icon"><img src="${s.img}" alt="" loading="lazy"></div>
            <h3>${pick(s.num, lang)}</h3>
            <p>${nl2br(pick(s.label, lang))}</p>
          </article>`).join('')}
      </div>
    </div>
  </section>

  <!-- ================= 8. الدعوة النهائية ================= -->
  <section class="section final-section" id="company">
    <div class="container">
      <div class="final-cta" data-reveal>
        <div class="final-cta__glow" aria-hidden="true"></div>
        <h2 class="h1" style="color:#fff">${nl2br(t(home.finalCta.title))}</h2>
        <ul class="final-cta__points">
          ${HX.final.points.map(p => `<li>${icon(p.icon, 17)}<span>${nl2br(t(p.t))}</span></li>`).join('')}
        </ul>
        <div class="final-cta__actions">
          <a class="btn btn--primary" href="${link('web', lang, depth)}">${nl2br(t(home.finalCta.cta))}</a>
          <a class="btn btn--outline" href="${link('contact', lang, depth)}">${nl2br(t(HX.final.cta2))}</a>
        </div>
        <p class="final-cta__disclaimer">${nl2br(t(home.finalCta.disclaimer))}</p>
      </div>
    </div>
  </section>`;
}

/* ================================================================== */
/*  قالب صفحة داخلية                                                   */
/* ================================================================== */
function renderInner(page, lang, depth) {
  const t = (k) => pick(page[k], lang);
  const hero = page.hero || {};
  const variant = hero.variant === 'dark' ? 'page-hero--dark'
                : hero.variant === 'pink' ? 'page-hero--pink' : 'page-hero--light';

  const heroHTML = `
  <section class="page-hero ${variant}">
    ${hero.bg ? `<img class="section__bg" src="${hero.bg}" alt="" aria-hidden="true" loading="lazy">` : ''}
    <div class="container">
      <div class="page-hero__grid">
        <div class="page-hero__copy" data-reveal>
          ${hero.eyebrow ? `<span class="section__eyebrow">${icon('sparkles', 14)} ${nl2br(pick(hero.eyebrow, lang))}</span>` : ''}
          <h1 class="h1">${nl2br(pick(hero.title, lang))}</h1>
          ${hero.text ? `<p class="sub">${nl2br(pick(hero.text, lang))}</p>` : ''}
          ${(hero.badges || []).length ? `<div style="display:flex;flex-wrap:wrap;gap:.5rem">${hero.badges.map(b =>
            `<span class="page-hero__badge">${icon(b.icon, 15)} ${nl2br(pick(b.text, lang))}</span>`).join('')}</div>` : ''}
          ${(hero.ctas || []).length ? `<div class="page-hero__actions">${hero.ctas.map(c =>
            `<a class="btn btn--${c.style || 'primary'}" href="${c.href || '#'}">${nl2br(pick(c.label, lang))}</a>`).join('')}</div>` : ''}
        </div>
        <div class="page-hero__media" data-reveal>
          ${hero.bg ? `<img src="${hero.bg}" alt="" loading="lazy">` : `<div class="section__bg-ph" style="position:absolute;inset:0"></div>`}
        </div>
      </div>
    </div>
  </section>`;

  return heroHTML + '\n' + (page.blocks || []).map(b => renderBlock(b, lang, depth, page)).join('\n');
}

/* ================================================================== */
/*  بناء صفحة HTML كاملة                                               */
/* ================================================================== */
function buildPage(page, lang, depth) {
  const isRoot = depth === 0;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const assetPath = isRoot ? 'assets/' : '../assets/';
  const title = pick(page.seo && page.seo.title, lang);
  const desc = pick(page.seo && page.seo.desc, lang);
  const other = lang === 'ar' ? 'en' : 'ar';
  const hreflangLink = isRoot
    ? (page.slug === 'index' ? other + '/index.html' : other + '/' + page.slug + '.html')
    : '../' + other + '/' + (page.slug === 'index' ? 'index.html' : page.slug + '.html');

  const body = page.type === 'home' ? renderHome(page, lang, depth) : renderInner(page, lang, depth);

  const nav = PAGES
    .filter(p => p.slug !== 'index')
    .map(p => `<a href="${link(p.slug, lang, depth)}">${pick(p.nav || p.hero && p.hero.eyebrow || p.seo.title, lang).split('|')[0]}</a>`)
    .join('\n  ');

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${String(desc).replace(/"/g, '&quot;')}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="amana">
  <meta property="og:title" content="${String(title).replace(/"/g, '&quot;')}">
  <meta property="og:description" content="${String(desc).replace(/"/g, '&quot;')}">
  <meta property="og:image" content="https://amana-web.ams3.cdn.digitaloceanspaces.com/cms-media-prod/f6100301bf7db4a6a74b67028c26d90e.webp">
  <meta property="og:locale" content="${lang === 'ar' ? 'ar_AR' : 'en_US'}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${String(title).replace(/"/g, '&quot;')}">
  <meta name="twitter:description" content="${String(desc).replace(/"/g, '&quot;')}">
  <meta name="twitter:image" content="https://amana-web.ams3.cdn.digitaloceanspaces.com/cms-media-prod/f6100301bf7db4a6a74b67028c26d90e.webp">
  <link rel="alternate" hreflang="ar" href="${lang === 'ar' ? (isRoot ? './' : '../') + 'index.html' : '../ar/' + page.slug + '.html'}">
  <link rel="alternate" hreflang="en" href="">
<link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${asset(assetPath, 'style.css')}">
</head>
<body data-page="${page.slug}"${isRoot ? ' data-root="1"' : ''}>

<header class="site-header" id="site-header"></header>

<main id="top">
${body}
</main>

<footer class="site-footer" id="site-footer"></footer>

<!-- sitemap لكل الصفحات (يسهل التنقل والإضافة) -->
<nav class="sr-only" aria-label="Sitemap"><ul>
  ${nav}
</ul></nav>

<script src="${asset(assetPath, 'icons.js')}"></script>
<script src="${asset(assetPath, 'app.js')}"></script>
</body>
</html>
`;
}

/* ================================================================== */
/*  التشغيل                                                            */
/* ================================================================== */
function ensure(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

let written = 0;
LANGS.forEach(lang => {
  const dir = path.join(ROOT, lang);
  ensure(dir);
  PAGES.forEach(page => {
    const file = path.join(dir, page.slug + '.html');
    fs.writeFileSync(file, buildPage(page, lang, 1), 'utf8');
    written++;
  });
});

/* الصفحة الرئيسية العربية في جذر المشروع */
fs.writeFileSync(path.join(ROOT, 'index.html'), buildPage(core.HOME, 'ar', 0), 'utf8');
written++;

/* صفحة تحويل سريعة en → ar عند الجذر */
console.log('✔ تم إنشاء ' + written + ' صفحة في ' + PAGES.length + ' صفحة×' + LANGS.length + ' لغة');
console.log('  المجلدات: ar/ (' + PAGES.length + ' ملف) · en/ (' + PAGES.length + ' ملف) · index.html');