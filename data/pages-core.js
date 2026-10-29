/* =============================================================================
   data/pages-core.js — الصفحة الرئيسية + صفحات الأسواق + المنصات
   ============================================================================= */
'use strict';

/* مساعد مختصر: L('عربي', 'English') */
var L = function (ar, en) { return { ar: ar, en: en }; };

var CDN = 'https://amana-web.ams3.cdn.digitaloceanspaces.com/';
var IMG = {
  gold:      CDN + 'cms-media-prod/f6100301bf7db4a6a74b67028c26d90e.webp',
  crypto:    CDN + 'cms-media-prod/b7ac85756aaf9c9c00bceb55fdbaad28.webp',
  invest:    CDN + 'cms-media-prod/79c0e513bf1cb9b3b98c8c73ef0acfb8.webp',
  campaignBg:CDN + 'cms-media/ae3c4b6a605811089ac6cf8804069ca0.webp',
  card1:     CDN + 'cms-media/7fc74947f5fbde2a73917161ef74218d.webp',
  card2:     CDN + 'cms-media/432b36be8d929c28bba1e96d1365b08f.webp',
  card3:     CDN + 'cms-media/9c7e66ba931e2e06f12b30d2fb9cfe6a.webp',
  card4:     CDN + 'cms-media/4b8faccbc4847bb232c25ef131a3d300.webp',
  ic1:       CDN + 'cms-media-prod/29870c1251a48cbc2d1598acec7f7965.svg',
  ic2:       CDN + 'cms-media-prod/c62efbdcd2c5ad4c0c590bd23d97bcd2.svg',
  ic3:       CDN + 'cms-media-prod/13054e3e96b323852a55b48ca8053f75.svg',
  ic4:       CDN + 'cms-media-prod/d80a043165481470184ca4fde2363d66.svg',
  ic5:       CDN + 'cms-media-prod/7cb064144a370fdf8749d0ebe6726899.svg',
  ic6:       CDN + 'cms-media-prod/46c22773e832287c27b94351c9732007.svg',
  g1:        CDN + 'cms-media-prod/657eb0df69eb0500147fc144330ee2df.webp',
  g2:        CDN + 'cms-media-prod/912215d768c4a8e88a8d03cb7e4d7154.webp',
  g3:        CDN + 'cms-media-prod/c40a06bca159cdd4835cf4385517025d.webp'
};

/* =============================================================================
   الصفحة الرئيسية — قالب خاص (type: 'home')
   ============================================================================= */
var HOME = {
  slug: 'index',
  group: 'home',
  type: 'home',
  seo: {
    title: L(
      'تطبيق أمانة: أفضل تطبيق تداول بالأسهم والعملات المشفرة وغيرها بصفر عمولة.',
      'amana app: Trade stocks, crypto and more with zero commissions.'
    ),
    desc: L(
      'شركة التداول مركزها دبي، تتعامل بالفروقات المالية والعمولات وتداول السلع والمعادن الثمينة ومؤشرات الأسهم والعملات المشفرة والفوركس وصناديق الاستثمار وعقود الفروقات والسلع والاسهم في الأسواق العالمية. نحن مرخصين من جهات عالمية حكومية رائدة في 6 دول مختلفة.',
      'Headquartered in Dubai, amana is a regulated trading firm dealing in CFDs, commodities, precious metals, indices, equities, cryptocurrencies, forex, ETFs and exchange-traded markets worldwide. Licensed by leading authorities across 6 countries.'
    )
  },

  /* --- القسم 1: البطل --- */
  hero: {
    title: L('محفظة متنوعة.\nمنصة واحدة.', 'One wallet.\nOne platform.'),
    hl: L('منصة واحدة.', 'One platform.'),
    text: L(
      'استثمر للمستقبل.\nوتداول على المدى القصير.\nبوابتك إلى الأسواق العالمية من تطبيق واحد.\n\nمن أسهم الولايات المتحدة ومنطقة الشرق الأوسط\nوشمال أفريقيا إلى الفوركس، والذهب، والمؤشرات،\nوصناديق الاستثمار المتداولة (ETFs)، وأكثر.',
      'Invest for the long term.\nAnd trade in the short term.\nYour gateway to global markets from a single app.\n\nFrom US and MENA equities to forex, gold, indices,\nexchange-traded funds (ETFs), and much more.'
    ),
    cta: L('ابدأ الآن', 'Get started')
  },

  /* --- القسم 2: كاروسيل العروض --- */
  campaigns: {
    title: L('مزايا أكثر.\nتطبيق واحد.', 'More benefits.\nOne app.'),
    hl: L('تطبيق واحد.', 'One app.'),
    bg: IMG.campaignBg,
    items: [
      { href: 'smart-money-tracker.html', t: L('متتبع المال الذكي', 'Smart Money Tracker') },
      { href: 'sharia-tagging.html',       t: L('وسم الشريعة', 'Sharia Tagging') },
      { href: 'core-plus-max.html',       t: L('كور بلس ماكس', 'Core Plus Max') },
      { href: 'crypto.html',              t: L('العملات الرقمية', 'Cryptocurrencies') }
    ]
  },

  /* --- القسم 3: الذهب --- */
  gold: {
    title: L('الذهب.\nاستثمار عبر العصور.', 'Gold.\nAn investment for the ages.'),
    text: L(
      'الذهب الفوري، العقود المستقبلية، وصناديق المؤشرات المتداولة (ETFs)، تداوله كما تشاء، على مدار 24/7، وبدون أي عمولات.',
      'Trade spot gold, futures and gold ETFs the way you want — around the clock, 24/7, with zero commissions.'
    ),
    cta1: L('تداول الذهب', 'Trade Gold'),
    cta2: L('التسعير', 'View Pricing'),
    bg: IMG.gold
  },

  /* --- القسم 4: العملات الرقمية --- */
  crypto: {
    title: L('أكثر من 325 عملة رقمية.\nرافعة مالية تصل حتى 25 ضعف.\nإيداعات بالعملات الرقمية.',
             '325+ cryptocurrencies.\nLeverage up to 25×.\nCrypto deposits.'),
    text: L(
      'استكشف العملات الرقمية الرائدة، وعملات الميم\n، L1، L2، عملات الألعاب، وأكثر.',
      'Explore leading cryptocurrencies, meme coins,\nL1, L2, gaming tokens, and more.'
    ),
    cta: L('تداول الآن', 'Trade now')
  },

  /* --- القسم 5: الاستثمار --- */
  invest: {
    title: L('تُبنى الثروة مع مرور الوقت.\nابدأ الآن، ونمِّ استركاتك.',
             'Wealth is built over time.\nStart now, and grow your capital.'),
    text: L('خطط مُعدة مسبقًا. استثمار آلي. دون أي رسوم.',
            'Pre-set plans. Automated investing. Zero fees.'),
    cta: L('ابدأ التداول الآن', 'Start investing')
  },

  /* --- القسم 6: الإحصائيات --- */
  stats: {
    title: L('نحن نقدّم لك كل ما تحتاجه، وبأفضل طريقة ممكنة.',
            'We give you everything you need, the best way we can.'),
    sub: L('* متوسط فروق أسعار أقل بنسبة 60-70%',
          '* Average spreads lower by 60-70%'),
    items: [
      { num: '+5200',  label: L('أسهم أمريكية وإقليمية ذات رافعة مالية', 'US & regional stocks with leverage'),    img: IMG.ic1 },
      { num: '+2,100', label: L('أسهم أمريكية مادية (SIPC) مؤمنة', 'Physical US stocks, SIPC insured'),           img: IMG.ic2 },
      { num: '+600',   label: L('أسهم إقليمية مادية', 'Physical regional stocks'),                           img: IMG.ic3 },
      { num: '+325',   label: L('عملات رقمية مشفرة ذات رافعة مالية أو بدون رافعة مالية', 'Crypto with or without leverage'),      img: IMG.ic4 },
      { num: '60-70%', label: L('متوسط فروق أسعار أقل', 'Lower average spreads'),                             img: IMG.ic5 },
      { num: '0%',     label: L('عمولة', 'Commission'),                                                     img: IMG.ic6 }
    ]
  },

  /* --- القسم 7: الدعوة النهائية --- */
  finalCta: {
    title: L('انضم إلى أكثر من 500,000\nعميل اختاروا أمانة',
             'Join more than 500,000\nclients who chose amana'),
    cta: L('ابدأ الآن', 'Get started'),
    disclaimer: L('جميع المنتجات الاستثمارية تنطوي على مخاطر.',
                  'All investment products involve risk.')
  }
};

/* =============================================================================
   صفحات الأسواق
   ============================================================================= */

var MARKETS = {

  /* ---------------------------------------------------------- الذهب */
  'gold': {
    slug: 'gold', group: 'markets', icon: 'coins',
    seo: {
      title: L('الذهب: تداول بدون عمولات | أمانة', 'Gold: Commission-Free Trading | amana'),
      desc: L('تداول الذهب الفوري والعقود المستقبلية وصناديق الذهب على مدار الساعة وبدون أي عمولات مع رافعة مالية حتى 25 ضعف.',
              'Trade spot gold, gold futures and gold ETFs around the clock with zero commissions and leverage up to 25×.')
    },
    hero: {
      variant: 'dark', bg: IMG.gold,
      eyebrow: L('الذهب', 'Gold'),
      title: L('الذهب.\nاستثمار عبر العصور.', 'Gold.\nAn investment for the ages.'),
      text: L('الذهب الفوري، العقود المستقبلية، وصناديق المؤشرات المتداولة (ETFs)، تداوله كما تشاء، على مدار 24/7، وبدون أي عمولات.',
              'Trade spot gold, gold futures and exchange-traded funds the way you want — 24/7, with zero commissions.'),
      ctas: [
        { label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'white' },
        { label: L('التسعير', 'View pricing'),    href: 'pricing.html', style: 'outline' }
      ],
      badges: [
        { icon: 'clock',  text: L('تداول 24/7', '24/7 trading') },
        { icon: 'percent', text: L('0% عمولة', '0% commission') },
        { icon: 'zap',    text: L('رافعة حتى 25×', 'Up to 25× leverage') }
      ]
    },
    blocks: [
      { type: 'features', title: L('لماذا الذهب مع أمانة؟', 'Why gold with amana?'),
        text: L('اكتشف الطرق التي تجعل تداول المعادن الثمينة أسهل وأسرع وأقل تكلفة.',
                'Discover how we make precious-metals trading simpler, faster and cheaper.'),
        cols: 3,
        items: [
          { icon: 'candlestick', title: L('أسعار تنافسية', 'Competitive pricing'),
            text: L('فروق أسعار منخفضة مقارنة بالوسطاء التقليديين، تبدأ من 0.02 نقطة.',
                    'Tight spreads compared with traditional brokers, starting from 0.02 pips.') },
          { icon: 'shield-check', title: L('أصول مادية', 'Physical backing'),
            text: L('سبائك مصغّرة مملوكة وتُحفظ في خزائن مؤمّنة لدى مزوّدين معتمدين.',
                    'Allocated bars held in insured vaults with approved custodians.') },
          { icon: 'globe', title: L('تداول عالمي', 'Global access'),
            text: L('الوصول إلى أسواق الذهب الرئيسية في لندن ونيويورك عبر حساب واحد.',
                    'Access the main London and New York gold markets through one account.') },
          { icon: 'sliders', title: L('رافعة مرنة', 'Flexible leverage'),
            text: L('اختر الرافعة المناسبة من 1× حتى 25× بما يناسب أسلوبك في التداول.',
                    'Choose leverage from 1× up to 25× to suit your trading style.') },
          { icon: 'activity', title: L('أدوات تحليلية', 'Analytical tools'),
            text: L('رسوم بيانية متقدمة ومؤشرات فنية وإشعارات أسعار فورية.',
                    'Advanced charts, technical indicators and real-time price alerts.') },
          { icon: 'wallet', title: L('سحب سريع', 'Fast withdrawals'),
            text: L('مسحوبات إلى البطاقات والمحافظ الإلكترونية خلال دقائق.',
                    'Withdraw to cards and e-wallets within minutes.') }
        ]
      },
      { type: 'split', reverse: true, image: IMG.g1,
        title: L('أنواع منتجات الذهب المتاحة', 'Gold products available'),
        text: L('اختر الأداة التي تناسب استراتيجية الاستثمار لديك، من التداول الفوري على السعر إلى عقود الفروقات المرنة.',
                'Choose the instrument that fits your investment strategy, from direct price exposure to flexible CFDs.'),
        bullets: [
          { icon: 'coins', text: L('الذهب الفوري XAU/USD — تسعير مباشر ضد الدولار الأمريكي.', 'Spot Gold XAU/USD — priced directly against the US dollar.') },
          { icon: 'candlestick', text: L('العقود الآجلة للذهب — استفد من حركة الأسعار مع الرافعة.', 'Gold futures — profit from price moves with leverage.') },
          { icon: 'bar-chart', text: L('صناديق الذهب المتداولة — استثمار طويل الأمد متنوع.', 'Gold ETFs — diversified long-term exposure.') }
        ]
      },
      { type: 'table', title: L('أمثلة على أسعار الذهب', 'Sample gold pricing'),
        text: L('الأسعار إرشادية وقابلة للتغير حسب kondisi السوق.', 'Prices are indicative and subject to market conditions.'),
        head: L(['المنتج', 'الرمز', 'فروق الأسعار التقريبية', 'الرافعة المتاحة'], ['Product', 'Symbol', 'Indicative spread', 'Available leverage']),
        rows: [
          [L('الذهب الفوري','Spot gold'), 'XAU/USD', '0.02–0.05', '1:25'],
          [L('العقود الآجلة','Gold futures'), 'XAU/USD', '0.03–0.08', '1:20'],
          [L('صندوق الذهب','Gold ETF'), 'GLD', 'حسب السوق', '—']
        ]
      },
      { type: 'faq', title: L('أسئلة شائعة عن الذهب', 'Gold FAQ'),
        items: [
          { q: L('هل يمكنني التداول على مدار الساعة؟', 'Can I trade around the clock?'),
            a: L('نعم. تُتاح أصول الذهب للتداول من الأحد إلى الجمعة، مع فرص تمتد خارج ساعات البورصة التقليدية عبر الأدوات خارج البورصة.',
                 'Yes. Gold assets trade from Sunday to Friday, with opportunities beyond traditional exchange hours through OTC instruments.') },
          { q: L('ما هو الحد الأدنى للإيداع؟', 'What is the minimum deposit?'),
            a: L('يبدأ الحد الأدنى للإيداع من 100 دولار أمريكي ويمكن رفعه أو خفضه حسب طريقة الدفع المختارة.',
                 'The minimum deposit starts at US$100 and can be adjusted depending on your chosen payment method.') },
          { q: L('هل الذهب مادي فعلاً؟', 'Is the gold physically backed?'),
            a: L('نعم، سبائك الذهب المصغّرة مملوكة للجهة وتُحفظ في خزائن مؤمّنة لدى مزوّدين معتمدين.',
                 'Yes. Allocated mini bars are owned by the entity and held in insured vaults with approved custodians.') },
      { q: L('ما هي الأدوات المتاحة؟', 'Which instruments are available?'),
            a: L('يمكنك التداول على الذهب الفوري، عقود الذهب الآجلة، وصناديق الذهب المتداولة عبر amana Web أو منصة التداول.',
                 'You can trade spot gold, gold futures and gold ETFs through the amana Web and trading platforms.') }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- العملات الرقمية */
  'crypto': {
    slug: 'crypto', group: 'markets', icon: 'bitcoin',
    seo: {
      title: L('العملات الرقمية: أكثر من 325 أصل | أمانة', 'Crypto: 325+ Assets | amana'),
      desc: L('تداول أكثر من 325 عملة رقمية مع رافعة مالية تصل حتى 25 ضعفاً وإيداعات وسحوبات بالعملات الرقمية.',
              'Trade 325+ cryptocurrencies with leverage up to 25× and crypto deposits and withdrawals.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('العملات الرقمية', 'Cryptocurrencies'),
      title: L('أكثر من 325 عملة رقمية.\nرافعة مالية تصل حتى 25 ضعف.\nإيداعات بالعملات الرقمية.',
               '325+ cryptocurrencies.\nLeverage up to 25×.\nCrypto deposits.'),
      text: L('استكشف العملات الرقمية الرائدة، وعملات الميم، L1، L2، عملات الألعاب، وأكثر.',
              'Explore leading cryptocurrencies, meme coins, L1, L2, gaming tokens and more.'),
      ctas: [
        { label: L('تداول الآن', 'Trade now'), href: 'crypto.html', style: 'primary' },
        { label: L('التسعير', 'View pricing'), href: 'pricing.html', style: 'ghost' }
      ],
      badges: [
        { icon: 'bitcoin', text: L('325+ أصل رقمي', '325+ digital assets') },
        { icon: 'zap',    text: L('رافعة 1×–25×', '1×–25× leverage') },
        { icon: 'refresh-cw', text: L('إيداع وسحب بالرقمي', 'Crypto deposits & withdrawals') }
      ]
    },
    blocks: [
      { type: 'features', title: L('ماذا يمكنك أن تتداول؟', 'What can you trade?'),
        cols: 4,
        items: [
          { icon: 'coins', title: L('العملات الكبرى', 'Major coins'), text: L('Bitcoin و Ethereum وغيرهما من الأصول الرائدة.', 'Bitcoin, Ethereum and other leading assets.') },
          { icon: 'sparkles', title: L('عملات الميم', 'Meme coins'), text: L('أصول متطايرة عالية الفرص وال مخاطر.', 'High-opportunity, high-volatility assets.') },
          { icon: 'layers', title: L('L1 و L2', 'L1 & L2'), text: L('طبقات البنية التحتية لـ blockchain.', 'Blockchain infrastructure layers.') },
          { icon: 'play', title: L('عملات الألعاب', 'Gaming tokens'), text: L('رموز عالم الألعاب والميتافيرس.', 'Metaverse and gaming ecosystem tokens.') }
        ]
      },
      { type: 'stats', items: [
        { num: '325+',  label: L('عملة رقمية', 'Digital assets') },
        { num: '25×',   label: L('أقصى رافعة مالية', 'Maximum leverage') },
        { num: '0%',    label: L('عمولة على التداول', 'Trading commission') },
        { num: '24/7',  label: L('مدة التداول', 'Trading hours') }
      ]},
      { type: 'split', image: IMG.g2,
        title: L('منصة واحدة لكل العملات الرقمية', 'One platform for every coin'),
        text: L('اربط محفظتك الرقمية مرة واحدة، ثم انتقل بين العملات المختلفة دون إعادة إيداع أو تحويل.',
                'Connect your digital wallet once, then move between coins without re-depositing or converting.'),
        bullets: [
          { icon: 'wallet', text: L('محافظ متعددة: USDT و BTC و ETH والمزيد.', 'Multiple wallets: USDT, BTC, ETH and more.') },
          { icon: 'clock', text: L('تسويات فورية تقريباً على مدار الساعة.', 'Near-instant settlement around the clock.') },
          { icon: 'shield-check', text: L('حماية على مستوى الشبكة مع مصادقة ثنائية.', 'Network-level protection with two-factor authentication.') }
        ]
      },
      { type: 'note', title: L('تنبيه المخاطر', 'Risk notice'),
        text: L('الأصول الرقمية شديدة التقلب، وقد تفقد قيمتها بالكامل. التزم فقط بما يمكنك تحمّل خسارته، واقرأ بيان الكشف عن المخاطر قبل التداول.',
                'Digital assets are highly volatile and may lose all their value. Only invest what you can afford to lose and read the risk disclosure before trading.') },
      { type: 'faq', title: L('أسئلة شائعة عن العملات الرقمية', 'Crypto FAQ'),
        items: [
          { q: L('ما هي الرافعة المالية المتاحة؟', 'What leverage is available?'),
            a: L('تتراوح الرافعة المالية بين 1× و25× حسب الأصل والرمز. يتم عرض الحد المتاح لكل زوج عند فتح الصفقة.',
                 'Leverage ranges from 1× to 25× depending on the asset and symbol. The available maximum is shown for each pair when opening a trade.') },
      { q: L('كيف أودع العملات الرقمية؟', 'How do I deposit crypto?'),
            a: L('اختر الشبكة والمحفظة، ثم أرسل المبلغ إلى العنوان المخصص. تظهر الإيداع في محفظتك خلال دقائق بعد تأكيد الشبكة.',
                 'Choose the network and wallet, then send the amount to the generated address. Deposits appear within minutes after network confirmation.') },
          { q: L('هل يمكنني نسخ استراتيجيات الآخرين؟', 'Can I copy other traders?'),
          a: L('نعم، يمكنك نسخ استراتيجيات المتداولين المخضرمين والتداول تلقائياً.', 'Yes. You can follow experienced traders and mirror their positions automatically.') }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- الأسهم الأمريكية */
  'us-stocks': {
    slug: 'us-stocks', group: 'markets', icon: 'bar-chart',
    seo: {
      title: L('الأسهم الأمريكية الفعلية | أمانة', 'Real US Stocks | amana'),
      desc: L('استثمر في أكثر من 5,200 سهم أمريكي حقيقي مع أو بدون رافعة مالية، وأصول مادية مؤمّنة لدى SIPC.',
              'Invest in 5,200+ real US stocks with or without leverage, physically held and SIPC insured.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('الأسهم الأمريكية', 'US Stocks'),
      title: L('5,200+ سهم أمريكي حقيقي.\nمع أو بدون رافعة مالية.',
               '5,200+ real US stocks.\nWith or without leverage.'),
      text: L('تداول العملات الرقمية مع فروق تنافسية وبدون عمولة، أو عبر عقود الفروقات على منصات أمانة.', 'Trade crypto with competitive spreads and zero commission, or via CFDs on the amana platforms.'),
      ctas: [
        { label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'primary' },
        { label: L('اعرف المزيد', 'Learn more'), href: 'pricing.html', style: 'ghost' }
      ],
      badges: [
        { icon: 'bar-chart', text: L('5,200+ أداة', '5,200+ instruments') },
        { icon: 'shield-check', text: L('مؤمّن لدى SIPC', 'SIPC insured') },
        { icon: 'percent', text: L('0% عمولة', '0% commission') }
      ]
    },
    blocks: [
      { type: 'features', title: L('لماذا الأسهم الأمريكية؟', 'Why US equities?'),
        cols: 3,
        items: [
          { icon: 'globe', title: L('أعمق سوق عالمي', 'The deepest global market'), text: L('أمريكا Largest экономика تسبق الطلب، والسيولة يومية لا مثيل لها.', 'The world’s largest economy leads demand with unmatched daily liquidity.') },
          { icon: 'award', title: L('أفضل الشركات عالمياً', 'World-class companies'), text: L('وصول مباشر إلى رواد التكنولوجيا والاستهلاك والطاقة.', 'Direct access to leaders in technology, consumer and energy.') },
          { icon: 'wallet', title: L('أصول مادية فعلية', 'Physically held assets'), text: L('أسهمك مملوكة ومحفوظة لدى وسيط مؤمّن مع تغطية تأمينية من SIPC.', 'Your shares are owned and held with SIPC insurance cover.') },
          { icon: 'calendar', title: L('توزيعات الأرباح', 'Dividends'), text: L('استلم أرباح الأسهم تلقائياً في حسابك.', 'Dividend payments are credited to your account automatically.') },
          { icon: 'sliders', title: L('رافعة اختيارية', 'Optional leverage'), text: L('اختر بين التداول النقدي بالرافعة أو بدون رافعة.', 'Choose between leveraged or unleveraged cash trading.') },
          { icon: 'smartphone', title: L('تداول من الجوال', 'Trade on mobile'), text: L('تطبيق أصلي لنظامي iOS و Android مع أوامر محدودة.', 'Native iOS and Android apps with conditional orders.') }
        ]
      },
      { type: 'table', title: L('كيفية التداول على الأسهم الأمريكية', 'How US stock trading works'),
        head: L(['الطريقة', 'الوصف', 'الحد الأدنى'], ['Method', 'Description', 'Minimum']),
        rows: [
          [L('تداول بدون رافعة','Unleveraged trading'), L('شراء الأسهم بالقيمة الكاملة','Buy stocks at full value'), '100 $'],
          [L('تداول بالرافعة (CFD)','Leveraged CFD trading'), L('مضاعفة رأس المال مع الفارق','Multiply capital with the spread'), '100 $'],
          [L('تداول بالهامش','Margin trading'), L('شراء فعلية ضمن هامش 2:1','Physical purchase within 2:1 margin'), '500 $']
        ]
      },
      { type: 'faq', title: L('أسئلة شائعة عن الأسهم الأمريكية', 'US stocks FAQ'),
        items: [
          { q: L('هل أنا أملك الأسهم فعلياً؟', 'Do I actually own the shares?'),
            a: L('نعم. عند التداول بدون رافعة أو بالهامش، تُحفظ الأسهم باسمك لدى وسيط الأصول مع تغطية تأمينية من SIPC.',
                 'Yes. With unleveraged or margin trading, shares are held in your name by the custodian with SIPC insurance cover.') },
          { q: L('كم تكلف الصفقات؟', 'How much does a trade cost?'),
            a: L('لا نحتسب أي عمولة على الأسهم الأمريكية الفعلية. تُظهر التكلفة الكاملة في صفحة التسعير قبل فتح الصفقة.',
                 'We charge no commission on real US equities. The full cost is shown on the pricing page before you trade.') },
      { q: L('متى يمكنني البيع؟', 'When can I sell?'),
            a: L('الأسهم الأمريكية تُسوّى في T+1 بعد الشراء، ويُسمح بالبيع من T+1 فصاعدًا.', 'US equities settle at T+1, and you can sell from T+1 onwards.') }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- العملات (Forex) */
  'forex': {
    slug: 'forex', group: 'markets', icon: 'globe',
    seo: {
      title: L('تداول العملات الأجنبية (الفوركس) | أمانة', 'Forex Trading | amana'),
      desc: L('تداول أكثر من 60 زوج عملات في سوق الفوركس العالمي مع فروق أسعار تنافسية وبدون عمولات.',
              'Trade 60+ currency pairs in the global forex market with competitive spreads and zero commission.')
    },
    hero: {
      variant: 'dark', bg: IMG.g3,
      eyebrow: L('الأسواق', 'Markets'),
      title: L('تداول العملات.\nسيولة لا تنام.', 'Trade currencies.\nLiquidity that never sleeps.'),
      text: L('أكثر من 60 زوج عملات مع فروق تبدأ من 0.0 نقطة وبدون أي عمولة.', 'More than 60 currency pairs with spreads from 0.0 pips and zero commission.'),
      ctas: [
        { label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'white' },
        { label: L('التسعير', 'View pricing'), href: 'pricing.html', style: 'outline' }
      ],
      badges: [
        { icon: 'globe', text: L('60+ زوج عملات', '60+ currency pairs') },
        { icon: 'percent', text: L('فروق من 0.0 نقطة', 'Spreads from 0.0 pips') },
        { icon: 'clock', text: L('من الأحد إلى الجمعة', 'Sunday to Friday') }
      ]
    },
    blocks: [
      { type: 'features', title: L('مزايا تداول العملات', 'Forex trading benefits'),
        cols: 4,
        items: [
          { icon: 'percent', title: L('فروق تنافسية', 'Tight spreads'), text: L('ابدأ من 0.0 نقطة على الأزواج الرئيسية.', 'From 0.0 pips on major pairs.') },
          { icon: 'wallet', title: L('بدون عمولة', 'Zero commission'), text: L('الدفع يتم عبر فروق الأسعار فقط.', 'You pay the spread, nothing more.') },
          { icon: 'zap', title: L('رافعة حتى 1:500', 'Up to 1:500 leverage'), text: L('على الأزواج الرئيسية للعملات.', 'On major currency pairs.') },
          { icon: 'activity', title: L('أدوات متقدمة', 'Pro tools'), text: L('رسوم بيانية ومؤشرات فنية وتحليلات اقتصادية.', 'Charts, indicators and economic analysis.') }
        ]
      },
      { type: 'table', title: L('أشهر أزواج العملات', 'Popular currency pairs'),
        head: L(['الزوج', 'الوصف', 'العملتان'], ['Pair', 'Description', 'Currencies']),
        rows: [
          ['EUR/USD', L('اليورو / الدولار الأمريكي','Euro / US Dollar'), 'EUR · USD'],
          ['GBP/USD', L('الجنيه الإسترليني / الدولار','Pound / US Dollar'), 'GBP · USD'],
          ['USD/JPY', L('الدولار / الين الياباني','US Dollar / Japanese Yen'), 'USD · JPY'],
          ['USD/CHF', L('الدولار / الفرنك السويسري','US Dollar / Swiss Franc'), 'USD · CHF'],
          ['AUD/USD', L('الدولار الأسترالي / الدولار','Australian / US Dollar'), 'AUD · USD'],
          ['XAU/USD', L('الذهب / الدولار الأمريكي','Gold / US Dollar'), 'XAU · USD']
        ]
      },
      { type: 'note', title: L('كيف تُحسب الفروق؟', 'How spreads are calculated'),
        text: L('الفرق هو الفرق بين سعر الشراء و السعر البيع. كلما كان أصغر، قلّت تكلفة الدخول والخروج من الصفقة. جميع الفروق تُعرض مباشرة على المنصة قبل فتح أي أمر.',
                'The spread is the difference between the bid and the ask price. The smaller it is, the lower your entry and exit cost. All spreads are displayed on the platform before you place an order.') },
      { type: 'faq', title: L('أسئلة شائعة عن الفوركس', 'Forex FAQ'),
        items: [
          { q: L('ما هو الحد الأدنى untuk البدء؟', 'What is the minimum to start?'),
            a: L('يبدأ الحد الأدنى للإيداع من 100 دولار أمريكي، ويمكنك التداول بأحجام أصغر باستخدام الرافعة.',
                 'The minimum deposit starts at US$100, and smaller sizes are possible using leverage.') },
          { q: L('متى تُغلق السوق؟', 'When does the market close?'),
            a: L('تداول العملات متاح من الأحد الساعة 22:00 بتوقيت غرينتش حتى الجمعة 21:00، مع انقطاع قصير يومي.',
                 'Forex trades from Sunday 22:00 GMT to Friday 21:00 GMT, with a short daily break.') },
      { q: L('هل يمكنني تداول العملات غير الشائعة؟', 'Can I trade exotic currencies?'),
            a: L('نعم، نوفر عدة مجموعات من الأزواج تشمل الرئيسية والمتقاطعة والأزواج غير الشائعة.', 'Yes. We offer several groups of pairs including majors, crosses and exotics.') }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- المؤشرات */
  'indices': {
    slug: 'indices', group: 'markets', icon: 'bar-chart',
    seo: {
      title: L('مؤشرات الأسهم العالمية | أمانة', 'Global Stock Indices | amana'),
      desc: L('تداول أهم المؤشرات العالمية مثل S&P 500 و Dow Jones و Nasdaq و FTSE 100 بدون عمولات.',
              'Trade the world’s leading indices — S&P 500, Dow Jones, Nasdaq and FTSE 100 — commission free.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('المؤشرات', 'Indices'),
      title: L('مؤشرات عالمية.\nبحركة واحدة.', 'Global indices.\nOne move.'),
      text: L('تداول على أداء أهم البورصات حول العالم برافعة مالية حتى 1:200 وبدون عمولة.', 'Trade the performance of the world’s biggest exchanges with leverage up to 1:200 and zero commission.'),
      ctas: [{ label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'primary' }],
      badges: [
        { icon: 'globe', text: L('أهم 20+ مؤشراً', '20+ leading indices') },
        { icon: 'zap', text: L('رافعة 1:200', 'Up to 1:200') },
        { icon: 'percent', text: L('0% عمولة', '0% commission') }
      ]
    },
    blocks: [
      { type: 'table', title: L('أبرز المؤشرات المتاحة', 'Featured indices'),
        head: L(['المؤشر', 'السوق', 'الوصف'], ['Index', 'Market', 'Description']),
        rows: [
          ['S&P 500', L('الولايات المتحدة','United States'), L('أوسع مؤشر يقيس أداء 500 شركة كبرى','Measures 500 leading US companies')],
          ['Dow Jones 30', L('الولايات المتحدة','United States'), L('أقدم مؤشر سعرية في نيويورك','The oldest US price index')],
          ['Nasdaq 100', L('الولايات المتحدة','United States'), L('أكبر 100 شركة تقنية','The 100 largest technology companies')],
          ['FTSE 100', L('بريطانيا','United Kingdom'), L('أبرز 100 شركة في لندن','The 100 largest UK companies')],
          ['DAX 40', L('ألمانيا','Germany'), L('شركات Dax البورصة','The DAX exchange companies')],
          ['Nikkei 225', L('اليابان','Japan'), L('متوسط بورصة طوكيو','Tokyo Stock Exchange average')]
        ]
      },
      { type: 'split', reverse: true, image: IMG.g1,
        title: L('مؤشرات كأدوات مشتقة', 'Indices as derivatives'),
        text: L('نتيح لك التداول على المؤشرات كعقود فورية للفروق (CFDs)، مما يعني أنك لا تحتاج إلى امتلاك الأسهم المكونة للمؤشر.',
                'We let you trade indices as Contracts for Difference (CFDs), so you never need to own the underlying constituents.'),
        bullets: [
          { icon: 'wallet', text: L('اهتمام أقل برأس المال المطلوب.', 'Lower capital requirement.') },
          { icon: 'activity', text: L('مرونة في اتجاه التداول: صعوداً أو هبوطاً.', 'Flexibility to trade long or short.') },
          { icon: 'clock', text: L('تداول متزامن مع جلسة البورصة.', 'Trade in session with the underlying exchange.') }
        ]
      },
      { type: 'faq', title: L('أسئلة شائعة عن المؤشرات', 'Indices FAQ'),
        items: [
          { q: L('هل دفع أرباحاً؟', 'Do indices pay dividends?'),
            a: L('قد يتضمن المؤشر المحدد دفعات أرباح موسمية تُضاف إلى قيمة CFD أو تُدفع لك بحسب العقد. تُعرض تفاصيل ذلك لكل أداة.',
                 'Some indices may include seasonal distributions, reflected in the CFD. Details are shown per instrument.') },
          { q: L('ما هي ساعات التداول؟', 'What are the trading hours?'),
            a: L('تُتداول المؤشرات خلال ساعات البورصة الأصلية، مع فترات صيانة قصيرة عند الإغلاق.',
                 'Indices trade during the underlying exchange hours, with short maintenance windows at the close.') }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- المعادن */
  'metals': {
    slug: 'metals', group: 'markets', icon: 'package',
    seo: {
      title: L('المعادن الثمينة | أمانة', 'Precious Metals | amana'),
      desc: L('تداول الفضة والبلاتين وال palladium والنحاس والحديد في سوق المعادن بفروق تنافسية وبدون عمولات.',
              'Trade silver, platinum, palladium, copper and more with competitive spreads and zero commission.')
    },
    hero: {
      variant: 'dark', bg: IMG.gold,
      eyebrow: L('المعادن', 'Metals'),
      title: L('المعادن.\nتنوّع حقيقي.', 'Metals.\nReal diversification.'),
      text: L('الفضة والبلاتين والبلاديوم والنحاس — تداول أسواق المعادن بأدوات مرنة وبدون عمولات.', 'Silver, platinum, palladium and copper — trade metals markets with flexible instruments and zero commission.'),
      ctas: [
        { label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'white' },
        { label: L('التسعير', 'View pricing'), href: 'pricing.html', style: 'outline' }
      ],
      badges: [
        { icon: 'package', text: L('5+ معادن', '5+ metals') },
        { icon: 'percent', text: L('فروق تنافسية', 'Competitive spreads') },
        { icon: 'clock', text: L('جلسات طويلة', 'Long sessions') }
      ]
    },
    blocks: [
      { type: 'features', title: L('المعادن المتاحة', 'Available metals'), cols: 3,
        items: [
          { icon: 'coins', title: L('الفضة XAG/USD', 'Silver XAG/USD'), text: L('الفضة الفورية مع رافعة تصل إلى 1:50.', 'Spot silver with leverage up to 1:50.') },
          { icon: 'coins', title: L('البلاتين XPT/USD', 'Platinum XPT/USD'), text: L('بلاتين فوري للمتداولين الطويلين الأمد.', 'Spot platinum for longer-term traders.') },
          { icon: 'coins', title: L('البلاديوم XPD/USD', 'Palladium XPD/USD'), text: L('معادن صناعية عالية التقلب.', 'Highly volatile industrial metal.') },
          { icon: 'package', title: L('النحاس', 'Copper'), text: L('مؤشر على صحة الاقتصاد العالمي.', 'A barometer of global economic health.') },
          { icon: 'package', title: L('الصلب والنيكل', 'Steel & Nickel'), text: L('سلع معدنية صناعية أساسية.', 'Core industrial commodities.') },
          { icon: 'trending-up', title: L('عقود المعادن', 'Metals futures'), text: L('عقود آجلة مع تاريخ استحقاق محدد.', 'Futures with defined expiry dates.') }
        ]
      },
      { type: 'split', image: IMG.g3,
        title: L('المعادن ومحفظة متوازنة', 'Metals and a balanced portfolio'),
        text: L('تُعتبر المعادن الثمينة-one من Pandora لأدوات التنويع طويلة الأمد، ويُنصح باستخدامها كجزء لا ككل من المحفظة.',
                'Precious metals are among the most effective long-term diversification tools, best used as a portion of a portfolio rather than all of it.'),
        bullets: [
          { icon: 'scale', text: L('حاجز ضد التضخم وتقلبات العملات.', 'A hedge against inflation and currency swings.') },
          { icon: 'shield-check', text: L('أداء متين تاريخياً في فترات عدم اليقين.', 'Historically resilient in uncertain periods.') },
          { icon: 'globe', text: L('مرتبط بدورات الطلب الصناعي.', 'Linked to industrial demand cycles.') }
        ]
      },
      { type: 'note', variant: 'grey', title: L('ملاحظة', 'Note'),
        text: L('أسعار المعادن تتأثر بالعوامل الجيوسياسية وبتحركات أسعار الفائدة، مما قد يزيد التقلب على المدى القصير.', 'Metals prices are sensitive to geopolitical events and interest-rate moves, which can amplify short-term volatility.') }
    ]
  },

  /* ---------------------------------------------------------- السلع */
  'commodities': {
    slug: 'commodities', group: 'markets', icon: 'package',
    seo: {
      title: L('تداول السلع والطاقة | أمانة', 'Commodities & Energy | amana'),
      desc: L('تداول النفط والغاز الطبيعي والمؤشرات التقليدية للسلع والطاقة.', 'Trade crude oil, natural gas and traditional energy and commodity benchmarks.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('السلع', 'Commodities'),
      title: L('سلع عالمية.\nفرص بلا حدود.', 'Global commodities.\nLimitless opportunity.'),
      text: L('الطاقة والفلزات والمواد الغذائية — تداول SheridanCommodities المعقدة بأدوات مبسّطة وبدون عمولات.',
              'Energy, metals and agriculture — trade complex commodity markets with simple, commission-free instruments.'),
      ctas: [{ label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'primary' }],
      badges: [
        { icon: 'package', text: L('طاقة ومواد غذائية', 'Energy & agriculture') },
        { icon: 'zap', text: L('رافعة مرنة', 'Flexible leverage') },
        { icon: 'percent', text: L('0% عمولة', '0% commission') }
      ]
    },
    blocks: [
      { type: 'features', title: L('فئات السلع', 'Commodity categories'), cols: 3,
        items: [
          { icon: 'zap', title: L('الطاقة', 'Energy'), text: L('خام WTI، خام برنت، الغاز الطبيعي، الفحم.', 'WTI crude, Brent crude, natural gas, coal.') },
          { icon: 'coins', title: L('المواد الغذائية', 'Agriculture'), text: L('القمح، الذرة، فول الصويا، البن، السكر.', 'Wheat, corn, soybeans, coffee, sugar.') },
          { icon: 'package', title: L('المعادن الصناعية', 'Industrial metals'), text: L('النحاس، الألومنيوم، الزنك، الحديد.', 'Copper, aluminium, zinc, iron.') },
          { icon: 'bar-chart', title: L('مؤشرات السلعة', 'Commodity indices'), text: L('مؤشرات مركبة تغطي قطاعاً بأكمله.', 'Composite indices tracking a whole sector.') },
          { icon: 'clock', title: L('جلسات ممتدة', 'Extended sessions'), text: L('ساعات تداول تطابق عقود السلعة الأصلية.', 'Sessions aligned with underlying contracts.') },
          { icon: 'shield-check', title: L('مخاطرة مُدارة', 'Managed risk'), text: L('أوامر وقف خسارة جاهزة على كل الصفقات.', 'Stop-loss orders available on every trade.') }
        ]
      },
      { type: 'note', title: L('مخاطر السلع', 'Commodity risks'),
        text: L('سلع الطاقة والمواد الغذائية شديدة التأثر بالأخبار الجيوسياسية والطقس، وقد تتحرك بسرعة خلال دقائق.',
                'Energy and agricultural commodities are highly sensitive to geopolitical news and weather, and can move sharply within minutes.') }
    ]
  },

  /* ---------------------------------------------------------- الأسهم الأوروبية */
  'eu-uk-stocks': {
    slug: 'eu-uk-stocks', group: 'markets', icon: 'landmark',
    seo: {
      title: L('الأسهم الأوروبية والبريطانية | أمانة', 'European & UK Stocks | amana'),
      desc: L('استثمر في أسهم FTSE 100 و DAX و CAC 40 و IBEX 35 وغيرها من أهم البورصات الأوروبية.',
              'Invest in FTSE 100, DAX, CAC 40, IBEX 35 and more of Europe’s leading exchanges.')
    },
    hero: {
      variant: 'dark', bg: IMG.g3,
      eyebrow: L('الأسهم الأوروبية', 'European Stocks'),
      title: L('أوروبا.\nمركزات globals$_EU.', 'Europe.\nA global centre.'),
      text: L('تداول أسهم أكثر من 600 شركة في أوروبا والشرق الأوسط عبر أمانة ويب أو منصة التداول، بدون عمولات.', 'Trade 600+ European and Middle Eastern companies through amana Web or the trading platform, commission free.'),
      ctas: [
        { label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'white' },
        { label: L('التسعير', 'View pricing'), href: 'pricing.html', style: 'outline' }
      ],
      badges: [
        { icon: 'landmark', text: L('600+ شركة', '600+ companies') },
        { icon: 'globe', text: L('20+ بورصة', '20+ exchanges') },
        { icon: 'percent', text: L('0% عمولة', '0% commission') }
      ]
    },
    blocks: [
      { type: 'table', title: L('أبرز البورصات الأوروبية', 'Leading European exchanges'),
        head: L(['البورصة', 'المؤشر', 'العملة'], ['Exchange', 'Index', 'Currency']),
        rows: [
          ['London Stock Exchange', 'FTSE 100', 'GBP'],
          ['Xetra', 'DAX 40', 'EUR'],
          ['Euronext Paris', 'CAC 40', 'EUR'],
          ['Bolsa de Madrid', 'IBEX 35', 'EUR'],
          ['Borsa Italiana', 'FTSE MIB', 'EUR'],
          ['Euronext Amsterdam', 'AEX 25', 'EUR']
        ]
      },
      { type: 'features', title: L('ما الذي تحصل عليه؟', 'What you get'), cols: 3,
        items: [
          { icon: 'wallet', title: L('أسهم مادية', 'Physical shares'), text: L('أصول فعلية مملوكة ومؤمّنة، وليست مجرد عقود.', 'Real owned and insured assets, not just contracts.') },
          { icon: 'calendar', title: L('إيركسنت الأخضر', 'Euronext Green'), text: L('وصول إلى الشركات الأوروبية المستدامة.', 'Access to sustainability-focused European companies.') },
          { icon: 'activity', title: L('تقارير وتحليلات', 'Reports & analysis'), text: L('تقارير أداء المحفظة وتوزيعات الأرباح.', 'Portfolio performance and dividend reporting.') }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- الأسهم الإقليمية */
  'mena-stocks': {
    slug: 'mena-stocks', group: 'markets', icon: 'landmark',
    seo: {
      title: L('الأسهم الإقليمية | أمانة', 'MENA Stocks | amana'),
      desc: L('استثمر في أسهم البورصات العربية: السعودية، الإمارات، قطر، الكويت، مصر والأردن.',
              'Invest in Arab exchanges: Saudi Arabia, UAE, Qatar, Kuwait, Egypt and Jordan.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('الأسهم الإقليمية', 'MENA Stocks'),
      title: L('أسواقك الإقليمية.\nبعمق أكبر.', 'Your regional markets.\nDeeper.'),
      text: L('تداول أسهم البورصات العربية الرئيسية بأدوات مرنة وبدون عمولات، مع تقارير وتقارير_الأرباح.',
              'Trade the major Arab exchanges with flexible, commission-free instruments, plus full reporting.'),
      ctas: [{ label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'primary' }],
      badges: [
        { icon: 'landmark', text: L('6 أسواق', '6 markets') },
        { icon: 'wallet', text: L('أسهم مادية', 'Physical shares') },
        { icon: 'percent', text: L('0% عمولة', '0% commission') }
      ]
    },
    blocks: [
      { type: 'table', title: L('البورصات الإقليمية المتاحة', 'Available regional exchanges'),
        head: L(['الدولة', 'البورصة', 'المؤشر الرئيسي'], ['Country', 'Exchange', 'Main index']),
        rows: [
          [L('السعودية','Saudi Arabia'), L('تداول / Aramco','Tadawul / Aramco'), 'TASI'],
          [L('الإمارات','United Arab Emirates'), L('سوق دبي المالي','DFM'), 'DFMGI'],
          [L('الإمارات','United Arab Emirates'), L('سوق أبوظبي','ADX'), 'ADXGI'],
          [L('قطر','Qatar'), L('قطر للبورصة','QSE'), 'QSI'],
          [L('الكويت','Kuwait'), L('بورصة الكويت','Kuwait Stock Exchange'), 'Boursa Kuwait'],
          [L('مصر','Egypt'), L('البورصة المصرية','Egyptian Exchange'), 'EGX 30']
        ]
      },
      { type: 'features', title: L('مزايا التداول الإقليمي', 'Regional trading benefits'), cols: 3,
        items: [
          { icon: 'wallet', title: L('ملكية حقيقية', 'True ownership'), text: L('أسهمك مملوكة باسمك ومحفوظة لدى وسيط مؤمّن.', 'Shares held in your name with an insured custodian.') },
          { icon: 'calendar', title: L('توزيعات أرباح', 'Dividends'), text: L('تُضاف الأرباح إلى محفظتك في مواعيدها.', 'Payouts credited to your portfolio on schedule.') },
          { icon: 'globe', title: L('عملات متعددة', 'Multiple currencies'), text: L('أسعار بالتوازي مع الريال والدولار.', 'Prices aligned with local and US currencies.') }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- التسعير */
  'pricing': {
    slug: 'pricing', group: 'markets', icon: 'percent',
    seo: {
      title: L('التسعير والرسوم والعمولات | أمانة', 'Pricing, Fees & Commissions | amana'),
      desc: L('تعرّف على فروق أسعارنا ورسوم التداول لكل أداة مالية على أمانة — شفافية كاملة بدون عمولات خفية.',
              'See our spreads and trading fees per instrument at amana — full transparency with no hidden commissions.')
    },
    hero: {
      variant: 'dark',
      eyebrow: L('التسعير', 'Pricing'),
      title: L('شفافية كاملة.\nبدون رسوم خفية.', 'Full transparency.\nNo hidden fees.'),
      text: L('كل ما تدفعه معروض قبل الصفقة. لا رسوم خفية، ولا شروط ملتزمة، ولا مفاجآت في كشف حسابك.',
              'Everything you pay is shown before you trade. No hidden fees, no tie-ins and no surprises on your statement.'),
      ctas: [{ label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'white' }],
      badges: [
        { icon: 'percent', text: L('0% عمولة على الأسهم', '0% commission on equities') },
        { icon: 'file-text', text: L('تقرير شهري واضح', 'Clear monthly statement') }
      ]
    },
    blocks: [
      { type: 'table', title: L('رسوم التداول حسب الأداة', 'Trading costs by instrument'),
        text: L('جميع الفروق تُعرض مباشرة على المنصة وتُحدَّث لحظياً حسب حالة السوق.',
              'All spreads are shown live on the platform and update with market conditions.'),
        head: L(['الفئة', 'الأمثلة', 'العمولة', 'الملاحظات'], ['Category', 'Examples', 'Commission', 'Notes']),
        rows: [
          [L('الأسهم الأمريكية','US stocks'), '0%', L('الفروق تُحسب على قيمة الصفقة','Spread applies to trade value')],
          [L('الأسهم الأوروبية','European stocks'), '0%', L('اسعار مباشرة من البورصة','Direct exchange pricing')],
          [L('العملات الرقمية','Cryptocurrencies'), '0%', L('فروق تنافسية 24/7','Competitive spreads 24/7')],
          [L('الفوركس','Forex'), '0%', L('الدفع عبر فروق الأسعار','Cost expressed in the spread')],
          [L('المؤشرات','Indices'), '0%', L('رافعة حتى 1:200','Leverage up to 1:200')],
          [L('المعادن والسلع','Metals & commodities'), '0%', L('جلسات مطابقة للعقود','Sessions matched to contracts')],
          [L('تحويلات داخلية','Internal transfers'), L('متغير','Variable'), L('يُعرض قبل التأكيد','Shown before confirmation')]
        ]
      },
      { type: 'stats', items: [
        { num: '0%',    label: L('عمولة على التداول', 'Trading commission') },
        { num: '60-70%', label: L('فروق أقل من المتوسط', 'Lower spreads than average') },
        { num: '100%',  label: L('شفافية في الرسوم', 'Cost transparency') },
        { num: '24/5',  label: L('دعم عملاء متعدد اللغات', 'Multilingual support') }
      ]},
      { type: 'faq', title: L('أسئلة شائعة عن الرسوم', 'Fees FAQ'),
        items: [
          { q: L('هل توجد أي رسوم مخفية؟', 'Are there any hidden fees?'),
            a: L('لا. جميع تكاليف التداول تظهر على المنصة قبل تنفيذ الأمر، وتظهر بوضوح في كشف الحساب الشهري.',
                 'No. All trading costs are displayed on the platform before an order executes and appear clearly on your monthly statement.') },
          { q: L('كيف تُحسب الفروق؟', 'How are spreads calculated?'),
            a: L('الفرق بين سعر الشراء وسعر البيع. يُضاف تلقائياً عند الفتح والإغلاق، ويظهر مباشرة في حجم صفقتك.',
                 'The difference between the bid and the ask. It applies automatically on entry and exit and is visible in your order ticket.') },
      { q: L('هل أدفع رسوم تحويل بين العملات؟', 'Is there a conversion fee?'),
            a: L('قد تُطبَّق رسوم تحويل بين حسابك الاستثماري وحساب التداول. تُعرض النسبة قبل التأكيد في صفحة التحويل.', 'A conversion fee may apply between your investment account and trading account. The rate is shown before you confirm the transfer.') }
    ]
      }
    ]
  }
};


/* =============================================================================
   صفحات المنصات
   ============================================================================= */
var PLATFORMS = {

  'web': {
    slug: 'web', group: 'platforms', icon: 'monitor',
    seo: {
      title: L('منصة أمانة ويب | أمانة', 'amana Web Platform | amana'),
      desc: L('منصة تداول على المتصفح لأدوات amana الكاملة — متقدمة للمحترفين وبسيطة للمبتدئين.',
              'A browser-based platform for the full amana toolset — powerful for pros, simple for beginners.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('المنصات', 'Platforms'),
      title: L('تداول من متصفحك.\nبدون تثبيت.', 'Trade from your browser.\nNo installation.'),
      text: L('منصة أمانة ويب تمنحك الوصول إلى أدواتنا المتقدمة من أي جهاز، مع واجهة قابلة للتخصيص بالكامل.',
              'amana Web gives you access to our advanced tools from any device, with a fully customisable workspace.'),
      ctas: [
        { label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'primary' },
      ],
      badges: [
        { icon: 'monitor', text: L('يعمل على كل المتصفحات', 'Works on every browser') },
        { icon: 'sliders', text: L('واجهة قابلة للتخصيص', 'Customisable layout') }
      ]
    },
    blocks: [
      { type: 'features', title: L('أدوات متقدمة', 'Advanced tools'), cols: 3,
        items: [
          { icon: 'bar-chart', title: L('رسوم بيانية احترافية', 'Professional charting'), text: L('أكثر من 80 مؤشراً فنياً وقوالب رسوم جاهزة.', '80+ technical indicators and ready-made templates.') },
          { icon: 'list', title: L('قوائم مراقبة', 'Watchlists'), text: L('نظّم أدواتك المفضلة في قوائم قابلة للمشاركة.', 'Organise your instruments into shareable lists.') },
          { icon: 'activity', title: L('أوامر مشروطة', 'Conditional orders'), text: L(' automating stop و limit orders rules predefined.', 'Automate stop and limit orders with predefined rules.') },
          { icon: 'candlestick', title: L('رسم بياني متعدد الأطر', 'Multi-timeframe charts'), text: L('قارن بين أطر زمنية في نافذة واحدة.', 'Compare timeframes in a single window.') },
          { icon: 'mail', title: L('تقارير يومية', 'Daily reports'), text: L('ملخص يومي لأداء حسابك في بريدك.', 'A daily account summary in your inbox.') },
          { icon: 'download', title: L('تصدير البيانات', 'Data export'), text: L('صدّر سجل صفقاتك بصيغة CSV.', 'Export your trade history as CSV.') }
        ]
      },
      { type: 'split', reverse: true, image: IMG.g2,
        title: L('مصممة لتعمل معك', 'Built to work with you'),
        text: L('سواء كنت ت trader في يومك الأول أم تدير محفظة مؤسسية، تمنحك أمانة ويب المرونة نفسها.',
                'Whether you are trading for the first time or managing an institutional portfolio, amana Web gives you the same flexibility.'),
        bullets: [
          { icon: 'monitor', text: L('تعمل على Windows و Mac و Linux بدون تثبيت.', 'Runs on Windows, Mac and Linux with no installation.') },
          { icon: 'shield-check', text: L('تشفير كامل للاتصال لكل العمليات.', 'Full connection encryption for all operations.') },
          { icon: 'sliders', text: L('تخطيط متعدد النوافذ مع الربط بين الرسوم.', 'Multi-panel layouts with linked charts.') }
        ]
      }
    ]
  },

  'platform': {
    slug: 'platform', group: 'platforms', icon: 'monitor',
    seo: {
      title: L('منصة التداول | أمانة', 'Trading Platform | amana'),
      desc: L('منصة تداول احترافية على المتصفح: أكثر من 5,200 أداة، شموع يابانية، أوامر متقدمة، وتنفيذ فوري.',
              'A professional browser-based trading platform: 5,200+ instruments, candlestick charts, advanced orders and instant execution.')
    },
    hero: {
      variant: 'dark', bg: IMG.g3,
      eyebrow: L('المنصات', 'Platforms'),
      title: L('منصة التداول.\nكل الأدوات في شاشة واحدة.', 'The trading platform.\nEvery instrument on one screen.'),
      text: L('منصة تداول متكاملة تعمل من المتصفح مباشرة: قوائم مراقبة، رسوم شموع، أوامر مشروطة، وتنفيذ بلا انقطاع.',
              'A complete browser-based platform: watchlists, candlestick charts, conditional orders and uninterrupted execution.'),
      ctas: [
        { label: L('ابدأ التداول', 'Start trading'), href: 'https://trading.amanncapital.com/login', style: 'white' },
        { label: L('التسعير', 'View pricing'), href: 'pricing.html', style: 'outline' }
      ],
      badges: [
        { icon: 'candlestick', text: L('رسوم شموع ومؤشرات', 'Candlestick charts & indicators') },
        { icon: 'sliders',   text: L('أوامر مشروطة', 'Conditional orders') },
        { icon: 'zap',       text: L('تنفيذ فوري 24/5', 'Instant execution 24/5') }
      ]
    },
    blocks: [
      { type: 'features', title: L('مزايا المنصة', 'Platform features'), cols: 3,
        items: [
          { icon: 'candlestick', title: L('رسوم شموع احترافية', 'Professional candlestick charts'), text: L('أكثر من 80 مؤشراً فنياً وقوالب رسم جاهزة.', '80+ technical indicators and ready-made chart templates.') },
          { icon: 'list', title: L('قوائم مراقبة', 'Watchlists'), text: L('نظّم أدواتك المفضلة في قوائم قابلة للمشاركة.', 'Organise your instruments into shareable watchlists.') },
          { icon: 'activity', title: L('أوامر مشروطة', 'Conditional orders'), text: L('أوامر وقف وجني تُنفَّذ تلقائياً حسب قواعد تختارها.', 'Stop and limit orders executed automatically by your rules.') },
          { icon: 'bar-chart', title: L('أطر زمنية متعددة', 'Multiple timeframes'), text: L('قارن بين الأطر الزمنية داخل نافذة واحدة.', 'Compare timeframes in a single window.') },
          { icon: 'mail', title: L('تقارير日电', 'Daily reports'), text: L('ملخص يومي لأداء حسابك في بريدك.', 'A daily account summary in your inbox.') },
          { icon: 'download', title: L('تصدير البيانات', 'Data export'), text: L('صدّر سجل صفقاتك بصيغة CSV.', 'Export your trade history as CSV.') }
        ]
      },
      { type: 'steps', title: L('ابدأ في 4 خطوات', 'Start in 4 steps'),
        items: [
          { title: L('افتح المنصة', 'Open the platform'), text: L('سجّل الدخول من المتصفح — بلا تثبيت أي برنامج.', 'Sign in from your browser — no installation needed.') },
          { title: L('اختر السوق', 'Choose your market'), text: L('أسهم، عملات رقمية، فوركس، مؤشرات، معادن وسلع.', 'Stocks, crypto, forex, indices, metals and commodities.') },
          { title: L('اضبط الأمر', 'Set up the order'), text: L('اختر النوع والحجم ووقف الخسارة وجني الأرباح.', 'Pick the type, size, stop-loss and take-profit.') },
          { title: L('نفّذ وتابع', 'Execute and track'), text: L('تابع مراكزك وأرباحك لحظة بلحظة.', 'Track your positions and P&L in real time.') }
        ]
      },
      { type: 'faq', title: L('أسئلة شائعة عن المنصة', 'Platform FAQ'),
        items: [
          { q: L('هل أحتاج إلى تحميل برنامج؟', 'Do I need to download anything?'),
            a: L('لا. المنصة تعمل مباشرة من المتصفح على أي جهاز.', 'No. The platform runs directly in your browser on any device.') },
          { q: L('ما هي الأدوات المتاحة؟', 'Which instruments are available?'),
            a: L('أكثر من 5,200 أداة تشمل الأسهم الأمريكية والأوروبية والإقليمية، العملات الرقمية، الفوركس، المؤشرات، المعادن والسلع.', 'More than 5,200 instruments including US, European and regional stocks, crypto, forex, indices, metals and commodities.') },
          { q: L('هل تعمل على الجوال؟', 'Does it work on mobile?'),
            a: L('نعم، المنصة متجاوبة وتعمل على الجوال والتابلت والحاسوب.', 'Yes. The platform is responsive and works on mobile, tablet and desktop.') }
        ]
      }
    ]
  }
};

module.exports = { L: L, CDN: CDN, IMG: IMG, HOME: HOME, MARKETS: MARKETS, PLATFORMS: PLATFORMS };
