/* =============================================================================
   data/home-extra.js — محتوى إضافي للصفحة الرئيسية (مشترك بين اللغتين)
   ========================================================================== */
'use strict';

var L = require('./pages-core.js').L;

module.exports = {

  /* ---------- 1) شرائح الهيدر ---------- */
  hero: {
    eyebrow: L('مرخّصة في 6 دول', 'Licensed across 6 countries'),
    title1: L('محفظة متنوعة.', 'One wallet.'),
    title2: L('منصة واحدة.', 'One platform.'),
    text: L(
      'استثمر للمستقبل. وتداول على المدى القصير.\nبوابتك إلى الأسواق العالمية من تطبيق واحد.',
      'Invest for the long term. And trade in the short term.\nYour gateway to global markets from a single app.'
    ),
    text2: L(
      'من أسهم الولايات المتحدة ومنطقة الشرق الأوسط وشمال أفريقيا\nإلى الفوركس، والذهب، والمؤشرات، وصناديق الاستثمار المتداولة (ETFs)، وأكثر.',
      'From US and MENA equities to forex, gold, indices,\nexchange-traded funds (ETFs) and much more.'
    ),
    cta1: L('ابدأ الآن', 'Get started'),
    cta2: L('استكشف الأسواق', 'Explore markets'),
    cta2href: 'markets',

    /* نقاط الثقة تحت الأزرار */
    points: [
      { icon: 'percent', t: L('صفر عمولات', 'Zero commissions') },
      { icon: 'shield-check', t: L('أصول مادية مؤمّنة', 'Insured physical assets') },
      { icon: 'clock', t: L('تداول 24/5', 'Trade 24/5') }
    ],

    /* أرقام سريعة */
    quickStats: [
      { num: '5,200+', label: L('أداة مالية', 'Financial instruments') },
      { num: '325+',   label: L('عملة رقمية', 'Cryptocurrencies') },
      { num: '500K+',  label: L('عميل', 'Clients') }
    ],

    /* لوحة التطبيق المصغّرة */
    panel: {
      title: L('محفظتي', 'My portfolio'),
      rows: [
        { icon: 'bar-chart', name: L('الأسهم الأمريكية', 'US Stocks'),   val: '+12.4%', up: true },
        { icon: 'coins',     name: L('الذهب XAU/USD', 'Gold XAU/USD'), val: '+4.8%',  up: true },
        { icon: 'bitcoin',   name: L('العملات الرقمية', 'Crypto'),        val: '−2.1%',  up: false }
      ],
      chart: L('نمو المحفظة', 'Portfolio growth'),
      chartVal: '+18.6%'
    }
  },

  /* ---------- 2) شريط الجهات الرقابية ---------- */
  regulators: L(
    ['هيئة سوق المال', 'لابوان للخدمات المالية', 'دبي للخدمات المالية', 'قبرص الأوراق المالية', 'موريشيوس المالية', 'لبنان سوق المال'],
    ['Capital Markets Authority', 'Labuan FSA', 'Dubai FSA', 'Cyprus SEC', 'FSC Mauritius', 'Lebanon CMA']
  ),

  /* ---------- 3) كروت العروض ---------- */
  campaignCards: [
    { key: 'card1', href: 'smart-money-tracker.html', t: L('متتبع المال الذكي', 'Smart Money Tracker'), tag: L('جديد', 'New') },
    { key: 'card2', href: 'sharia-tagging.html', t: L('وسم الشريعة', 'Sharia Tagging'),       tag: L('compliance', 'Compliance') },
    { key: 'card3', href: 'core-plus-max.html', t: L('كور بلس ماكس', 'Core Plus Max'),       tag: L('للمحترفين', 'Pro') },
    { key: 'card4', href: 'crypto.html', t: L('العملات الرقمية', 'Cryptocurrencies'),   tag: L('325+ أصل', '325+ assets') }
  ],

  /* ---------- 3.5) أنواع الحسابات + مدير المحفظة ---------- */
  accounts: {
    eyebrow: L('أنواع الحسابات', 'Account types'),
    title: L('اختر الحساب الذي يناسب أسلوبك.', 'Choose the account that fits your style.'),
    cards: [
      {
        icon: 'sparkles', href: 'core-plus-max.html', featured: false,
        name: L('كور بلس ماكس', 'Core Plus Max'),
        tag: L('للمحترفين', 'Pro'),
        text: L('حزمة أدوات موسّعة للمتداولين النشطين.', 'An expanded toolkit for active traders.'),
        points: [
          L('رسوم متقدمة ومؤشرات موسعة', 'Advanced charts and indicators'),
          L('تنفيذ أسرع للصفقات', 'Faster order execution'),
          L('أولوية في الدعم', 'Priority support')
        ],
        cta: L('اعرف المزيد', 'Learn more')
      },
      {
        icon: 'award', href: 'contact.html', featured: true,
        name: L('حساب VIP', 'VIP account'),
        tag: L('الأعلى فئة', 'Top tier'),
        text: L('تجربة خاصة للعملاء المميزين مع خدمة شخصية.', 'A premium experience for select clients with personal service.'),
        points: [
          L('مدير محفظة مخصص لحسابك', 'A dedicated portfolio manager'),
          L('دعم أولوية على مدار الساعة', 'Round-the-clock priority support'),
          L('عروض وخدمات حصرية', 'Exclusive offers and services')
        ],
        cta: L('اطلب حساب VIP', 'Request a VIP account')
      }
    ]
  },

  manager: {
    icon: 'briefcase',
    eyebrow: L('مدير المحفظة', 'Portfolio manager'),
    title: L('مسؤول مخصص عن إدارة محفظتك.', 'A dedicated manager for your portfolio.'),
    text: L('يتولى مدير المحفظة متابعة استثماراتك، وتوزيع أصولك، ومراجعة الأداء معك بشكل دوري ليساعدك على تحقيق أهدافك.',
            'Your portfolio manager oversees your investments, allocates your assets and reviews performance with you regularly to help you reach your goals.'),
    points: [
      { icon: 'target',     t: L('توزيع أصول يناسب أهدافك', 'Asset allocation matched to your goals') },
      { icon: 'line-chart', t: L('متابعة ومراجعة دورية للأداء', 'Regular performance reviews') },
      { icon: 'headset',    t: L('تواصل مباشر مع مدير محفظتك', 'Direct access to your manager') }
    ],
    cta: L('تواصل مع مدير المحفظة', 'Talk to a portfolio manager')
  },

  /* ---------- 4) قسم الذهب ---------- */
  gold: {
    bullets: [
      { icon: 'coins',      t: L('الذهب الفوري XAU/USD', 'Spot Gold XAU/USD') },
      { icon: 'candlestick', t: L('العقود المستقبلية', 'Gold futures') },
      { icon: 'bar-chart',  t: L('صناديق الذهب المتداولة', 'Gold ETFs') }
    ],
    note: L('تداول على مدار 24/7 وبدون أي عمولات',
            'Trade around the clock with zero commissions')
  },

  /* ---------- 5) قسم العملات الرقمية ---------- */
  crypto: {
    bullets: [
      { icon: 'coins',    t: L('أكثر من 325 عملة رقمية', '325+ cryptocurrencies') },
      { icon: 'zap',      t: L('رافعة مالية حتى 25 ضعف', 'Leverage up to 25×') },
      { icon: 'wallet',   t: L('إيداعات وسحوبات رقمية', 'Crypto deposits & withdrawals') }
    ],
    note: L('الرائدة، الميم، L1، L2، عملات الألعاب وأكثر',
            'Majors, meme coins, L1, L2, gaming tokens and more')
  },

  /* ---------- 6) قسم الاستثمار ---------- */
  invest: {
    points: [
      { icon: 'target',  t: L('خطط مُعدة مسبقًا', 'Pre-set plans') },
      { icon: 'refresh-cw', t: L('استثمار آلي', 'Automated investing') },
      { icon: 'percent', t: L('دون أي رسوم', 'Zero fees') }
    ]
  },

  /* ---------- 7) الدعوة النهائية ---------- */
  final: {
    cta2: L('تحدّث مع أحد خبرائنا', 'Talk to our experts'),
    points: [
      { icon: 'users', t: L('أكثر من 500,000 عميل', 'More than 500,000 clients') },
      { icon: 'scale', t: L('معايير حوكمة صارمة', 'Strict governance standards') }
    ]
  }
};