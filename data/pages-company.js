/* =============================================================================
   data/pages-company.js — صفحات: تعلّم، الشركة، العروض الترويجية، الوثائق القانونية
   ============================================================================= */
'use strict';

var L = require('./pages-core.js').L;
var IMG = require('./pages-core.js').IMG;

/* =============================================================================
   1) تعلّم
   ============================================================================= */
var LEARN = {

  'real-vision': {
    slug: 'real-vision', group: 'learn', icon: 'video',
    seo: {
      title: L('Real Vision — ندوات ومقابلات مع أمانة', 'Real Vision — amana Webinars & Interviews'),
      desc: L('شاهد ندوات ومقابلات مباشرة مع خبراء التداول والمحللين حول الأسواق العالمية.',
              'Watch live webinars and interviews with trading experts and market analysts.')
    },
    hero: {
      variant: 'dark', bg: IMG.g3,
      eyebrow: L('تعلّم', 'Learn'),
      title: L('Real Vision.\nمن قلب الأسواق.', 'Real Vision.\nFrom inside the markets.'),
      text: L('نلسات مباشرة ومقابلات مع خبراء ومحللين عالميين حول الأسهم والعملات الرقمية والفرص الاستثمارية.',
              'Live sessions and interviews with global experts and analysts on equities, crypto and investment opportunities.'),
      ctas: [{ label: L('شاهد الحلقات', 'Watch episodes'), href: '#episodes', style: 'white' }],
      badges: [
        { icon: 'video', text: L('بث مباشر أسبوعي', 'Weekly live streams') },
        { icon: 'globe', text: L('خبراء دوليون', 'International experts') }
      ]
    },
    blocks: [
      { type: 'features', title: L('لماذا Real Vision؟', 'Why Real Vision?'), cols: 3,
        items: [
          { icon: 'video', title: L('بث مباشر أسبوعي', 'Weekly live streams'), text: L('جلسة مباشرة كل أسبوع مع ضيف مختلف.', 'A live session every week with a different guest.') },
          { icon: 'award', title: L('خبراء معتمدون', 'Credible experts'), text: L('محللون ومدراء استثمارات بسنوات خبرة طويلة.', 'Analysts and fund managers with long track records.') },
          { icon: 'book-open', title: L('محتوى قابل لإعادة المشاهدة', 'On-demand library'), text: L('جميع الحلقات السابقة متاحة متى شئت.', 'Every past episode is available on demand.') }
        ]
      },
      { type: 'videos', title: L('أحدث الحلقات', 'Latest episodes'),
        items: [
          { title: L('قراءة الشموع及市场 الخطوة التالية', 'Reading candles and the next move'), meta: L('٤٥ دقيقة • تحليل فني', '45 min • Technical analysis') },
          { title: L('العملات الرقمية: من الهوس إلى الاستثمار', 'Crypto: from hype to investing'), meta: L('٥٠ دقيقة • نقاش مفتوح', '50 min • Open Q&A') },
          { title: L('أسواق الشرق الأوسط في 2026', 'MENA markets in 2026'), meta: L('٤٠ دقيقة • اقتصاد', '40 min • Economics') }
        ]
      },
      { type: 'cta', title: L('لا تفوّت الحلقة القادمة', 'Don’t miss the next session'),
        text: L('اشترك ليصلك تنبيه قبل كل ندوة مباشرة.', 'Subscribe and get notified before every live session.'),
        cta: L('اشترك الآن', 'Subscribe now'), href: '#subscribe' }
    ]
  },


  'read': {
    slug: 'read', group: 'learn', icon: 'newspaper',
    seo: {
      title: L('اقرأ — مقالات وأدلة Markets على أمانة', 'Read — Insights & Guides from amana'),
      desc: L('مقالات تحليلية وأدلة عملية عن الأسواق والاستثمار وفهم المنتجات المالية.',
              'Analytical articles and practical guides on markets, investing and financial products.')
    },
    hero: {
      variant: 'dark', bg: IMG.g1,
      eyebrow: L('تعلّم', 'Learn'),
      title: L('اقرأ.\nمعرفة قبل القرار.', 'Read.\nKnow before you decide.'),
      text: L('مقالات وأدلة مكتوبة بعناية تشرح مفاهيم الاستثمار وأسواق المال بلغة واضحة.',
              'Carefully written articles explaining investing concepts and financial markets in plain language.'),
      ctas: [{ label: L('تصفّح المقالات', 'Browse articles'), href: '#articles', style: 'white' }],
      badges: [{ icon: 'book-open', text: L('أدلة ومقالات', 'Guides and articles') }]
    },
    blocks: [
      { type: 'media', title: L('أحدث المقالات', 'Latest articles'),
        items: [
          { date: '2026', icon: 'line-chart', title: L('كيف تقرأ سلوك السعر في السوق؟', 'How to read price behaviour in any market'), text: L('دليل عملي لفهم الزخم والسيولة قبل الدخول في أي صفقة.', 'A practical guide to momentum and liquidity before you enter a trade.') },
          { date: '2026', icon: 'shield-check', title: L('مخاطر التحويلاتمالية: ما الذي تحميه فعلياً؟', 'Financial risk: what actually protects you?'), text: L('توضيح مبسّط للتأمين والفصل بين الأصول والرافعة.', 'A clear explanation of insurance, asset segregation and leverage.') },
          { date: '2026', icon: 'coins', title: L('الذهب أم العملات الرقمية؟ مقارنة صريحة', 'Gold or crypto? An honest comparison'), text: L('التقلب والدور والسيولة في كل سوق.', 'Volatility, role and liquidity in each market.') }
        ]
      },
      { type: 'cta', title: L('تبقى أسئلة؟', 'Still have questions?'),
        text: L('فريق الدعم لدينا جاهز للإجابة على استفساراتك.',
                'Our support team is ready to answer your questions.'),
        cta: L('تواصل معنا', 'Contact us'), href: 'contact.html' }
    ]
  }
};

/* =============================================================================
   2) الشركة
   ============================================================================= */
var COMPANY = {

  'about': {
    slug: 'about', group: 'company', icon: 'building-2',
    seo: {
      title: L('عن أمانة | amana', 'About amana | amana'),
      desc: L('تعرّف على أمانة، شركة التداول المرخصة في دبي ولابوان ولبنان وقبرص وموريشيوس.', 'Learn about amana — the trading firm licensed in Dubai, Labuan, Lebanon, Cyprus and Mauritius.')
    },
    hero: {
      variant: 'dark', bg: IMG.g1,
      eyebrow: L('الشركة', 'Company'),
      title: L('نبني الثقة.\nفي كل صفقة.', 'Building trust.\nIn every trade.'),
      text: L('أمانة شركة تداول مرخّصة من جهات رقابية رائدة في ست دول، نضع حماية أموال العملاء في المقام الأول.',
              'amana is a trading firm licensed by leading regulators across six countries, with client asset protection at the core.'),
      ctas: [
        { label: L('تواصل معنا', 'Contact us'), href: 'contact.html', style: 'white' },
        { label: L('وظائف', 'Careers'), href: 'careers.html', style: 'outline' }
      ],
      badges: [
        { icon: 'globe', text: L('مرخّصة في 6 دول', 'Licensed in 6 countries') },
        { icon: 'users', text: L('+500,000 عميل', '500,000+ clients') }
      ]
    },
    blocks: [
      { type: 'stats', items: [
        { num: '6',   label: L('دول ترخيص', 'Licensing jurisdictions') },
        { num: '500K+', label: L('عميل حول العالم', 'Clients worldwide') },
        { num: '5,200+', label: L('أداة مالية', 'Financial instruments') },
        { num: '0%',  label: L('عمولة على التداول', 'Trading commission') }
      ]},
      { type: 'split', image: IMG.g3,
        title: L('من نحن', 'Who we are'),
        text: L('تأسست أمانة لتقديم تجربة تداول عادلة وشفافة، مع تركيز واضح على حماية أصول العملاء والامتثال التنظيمي.',
                'amana was founded to deliver a fair and transparent trading experience, with a clear focus on client asset protection and regulatory compliance.'),
        bullets: [
          { icon: 'shield-check', text: L('فصل أصول العملاء عن أصول الشركة.', 'Client assets are segregated from firm assets.') },
          { icon: 'scale', text: L('التزام كامل بالأنظمة في كل ولاية قضائية نعمل بها.', 'Full regulatory compliance in every jurisdiction we operate in.') },
          { icon: 'users', text: L('فرق دعم وتدريب متعددة اللغات.', 'Multilingual support and training teams.') }
        ]
      },
      { type: 'features', title: L('أين نعمل؟', 'Where we operate?'), cols: 3,
        items: [
          { icon: 'building-2', title: L('دبي', 'Dubai'), text: L('أمانة للخدمات المالية (دبي) المحدودة — ترخيص F003269.', 'Amana Financial Services (DIFC) Ltd — licence F003269.') },
          { icon: 'building-2', title: L('لابوان', 'Labuan'), text: L('AFS Global Ltd — ترخيص MB/18/0025.', 'AFS Global Ltd — licence MB/18/0025.') },
          { icon: 'building-2', title: L('قبرص', 'Cyprus'), text: L('أمانة كابيتال المحدودة — ترخيص 155/11.', 'Amana Capital Ltd — licence 155/11.') },
          { icon: 'building-2', title: L('لبنان', 'Lebanon'), text: L('أمانة كابيتال ش.م.ل. — ترخيص 26.', 'Amana Capital S.A.L. — licence 26.') },
          { icon: 'building-2', title: L('موريشيوس', 'Mauritius'), text: L('ACG International Ltd — ترخيص C118023192.', 'ACG International Ltd — licence C118023192.') },
          { icon: 'building-2', title: L('الإمارات', 'UAE'), text: L('أمانة مينا للخدمات الترويجية — ترخيص 20200000255.', 'Amana Mena Promotional Services — licence 20200000255.') }
        ]
      },
      { type: 'note', title: L('أمانة لا تقدم استشارات استثمارية', 'amana does not provide investment advice'),
        text: L('جميع الاستثمارات تنطوي على مخاطر. لا يوجد ضمان للربح، والأداء السابق لا يضمن عوائد مستقبلية.',
                'All investments involve risk. There is no guarantee of profit and past performance does not ensure future returns.') }
    ]
  },

  'media': {
    slug: 'media', group: 'company', icon: 'megaphone',
    seo: {
      title: L('المركز الإعلامي | أمانة', 'Media Center | amana'),
      desc: L('أخبار صحفية،=datarior بيانات صحفية، وبيانات صحفية للتواصل مع فريق الاتصال في أمانة.',
              'Press releases, media enquiries and contact details for the amana communications team.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('الشركة', 'Company'),
      title: L('المركز الإعلامي.\nكل ما تحتاجه للحديث عنّا.', 'Media Center.\nEverything you need to talk about us.'),
      text: L('أخبار صحفية، وبيانات صحفية، ومعلومات عن الشركة/resources للاستخدام الإعلامي.',
              'Press releases, media resources and company information for editorial use.'),
      ctas: [{ label: L('تواصل إعلامي', 'Media enquiries'), href: '#contact', style: 'primary' }]
    },
    blocks: [
      { type: 'media', title: L('آخر الأخبار', 'Latest news'),
        items: [
          { date: '2026', icon: 'megaphone', title: L('أمانة تعلن عن شراكة جديدة مع منصة تحليلات', 'amana announces a new analytics partnership'), text: L('شراكة استراتيجية لتحسين أدوات التحليل الفني لعملاء المنصة.', 'A strategic partnership to improve technical analysis tooling for clients.') },
          { date: '2026', icon: 'bitcoin', title: L('توسيع عروض العملات الرقمية', 'Expanding crypto offerings'), text: L('إضافة عملات جديدة ورفع الرافعة المتاحة على أدوات محددة.', 'New assets added and leverage increased on selected instruments.') },
          { date: '2026', icon: 'shield-check', title: L('تحديث سياسة حماية أصول العملاء', 'Client asset protection policy update'), text: L('توضيح إضافي حول فصل الأصول وصناديق الاسترداد.', 'Further clarification on asset segregation and recovery funds.') }
        ]
      },
      { type: 'form', title: L('تواصل مع الفريق الإعلامي', 'Contact the communications team'),
        text: L('للاستفسارات الصحفية، يرجى تعبئة النموذج أدناه.', 'For press enquiries, please complete the form below.'),
        fields: [
          { name: 'name', type: 'text', label: L('الاسم', 'Name'), required: true },
          { name: 'email', type: 'email', label: L('البريد الإلكتروني', 'Email'), required: true },
          { name: 'outlet', type: 'text', label: L('المنشور / الجهة', 'Publication / Outlet') },
          { name: 'message', type: 'textarea', label: L('الرسالة', 'Message'), required: true }
        ] }
    ]
  },

  'careers': {
    slug: 'careers', group: 'company', icon: 'briefcase',
    seo: {
      title: L('وظائف في أمانة | Careers at amana', 'Careers at amana'),
      desc: L('انضم إلى فريق أمانة في دبي ولابوان وقبرص. وظائف في التداول، التقنية، الامتثال، والتسويق.',
              'Join the amana team in Dubai, Labuan and Cyprus. Roles in trading, technology, compliance and marketing.')
    },
    hero: {
      variant: 'dark', bg: IMG.g3,
      eyebrow: L('الشركة', 'Company'),
      title: L('الوظائف.\nابنِ معنا.', 'Careers.\nBuild with us.'),
      text: L('نبحث عن أشخاص شغوفين بالأسواق والتكنولوجيا، ويريدون العمل ضمن فريق متعدد الثقافات في 여러 قاعات-oxsbissions.',
              'We look for people passionate about markets and technology, wanting to work in a multicultural team across multiple jurisdictions.'),
      ctas: [{ label: L('الوظائف المتاحة', 'View open roles'), href: '#roles', style: 'white' }],
      badges: [
        { icon: 'globe', text: L('دبي ولابوان وقبرص', 'Dubai, Labuan & Cyprus') },
        { icon: 'users', text: L('فريق متعدد الجنسيات', 'Multicultural team') }
      ]
    },
    blocks: [
      { type: 'features', title: L('لماذا تعمل معنا؟', 'Why work with us?'), cols: 3,
        items: [
          { icon: 'line-chart', title: L('عمل مؤثر', 'Meaningful work'), text: L('نتعامل مع أسواق حقيقية تمسّ حياة المتعاملين.', 'We work on real markets that affect real lives.') },
          { icon: 'line-chart', title: L('نمو مهني', 'Career growth'), text: L('مسارات وظيفية واضحة وميزانية تدريبية سنوية.', 'Clear career paths and an annual training budget.') },
          { icon: 'globe', title: L('بيئة دولية', 'International environment'), text: L('فريق يعمل عبر ست قاعات قضائية.', 'A team operating across six jurisdictions.') },
          { icon: 'wallet', title: L('مزايا تنافسية', 'Competitive benefits'), text: L('تأمين صحي وزياد|style ومكافآت أداء.', 'Health cover, allowances and performance bonuses.') },
          { icon: 'headset', title: L('مرونة العمل', 'Flexible work'), text: L('خيارات عمل مرنة وأنماط هجينة.', 'Flexible options and hybrid patterns.') },
          { icon: 'users', title: L('تنوّع واستدامة', 'Diversity and sustainability'), text: L('برنامج تنوّع أساسي في توظيفنا.', 'A core diversity programme in our hiring.') }
        ]
      },
      { type: 'people', title: L('وظائف مفتوحة حالياً', 'Currently open roles'),
        items: [
          { role: L('محلل أسواق', 'Market Analyst'), location: L('دبي', 'Dubai') },
          { role: L('مهندس منصات تداول', 'Trading Platform Engineer'), location: L('لابوان', 'Labuan') },
          { role: L('أخصائي امتثال', 'Compliance Specialist'), location: L('دبي', 'Dubai') },
          { role: L('مدير علاقات العملاء', 'Client Relations Manager'), location: L('قبرص', 'Cyprus') },
          { role: L('مصمم تجربة مستخدم', 'UX Designer'), location: L('دبي — عن بُعد', 'Dubai — Remote') },
          { role: L('محاسب Winds', 'Financial Accountant'), location: L('لابوان', 'Labuan') }
        ]
      },
      { type: 'cta', title: L('لم تجد ما تبحث عنه؟', 'Don’t see your role?'),
        text: L('أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة.',
                'Send us your CV and we will get in touch when a suitable role opens.'),
        cta: L('أرسل سيرتك', 'Send your CV'), href: 'contact.html' }
    ]
  },

  'contact': {
    slug: 'contact', group: 'company', icon: 'headset',
    seo: {
      title: L('اتصل بنا | أمانة', 'Contact Us | amana'),
      desc: L('تواصل مع فريق دعم أمانة: رقم مجاني، بريد إلكتروني، ومراكز خدمة في دبي ولابوان.',
              'Reach the amana support team: phone, WhatsApp and service centres in Dubai and Labuan.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('الشركة', 'Company'),
      title: L('اتصل بنا.\nنحن هنا للمساعدة.', 'Contact us.\nWe’re here to help.'),
      text: L('فريق دعم متعدد اللغات جاهز للإجابة على استفساراتك حول الحسابات أو التداول أو الحسابات.',
              'A multilingual team ready to answer your questions about accounts, trading or billing.'),
      badges: [{ icon: 'headset', text: L('دعم 24/5', '24/5 support') }]
    },
    blocks: [
      { type: 'features', title: L('طرق التواصل', 'Ways to reach us'), cols: 3,
        items: [
          { icon: 'phone', title: L('الهاتف', 'Phone'), text: '0115009962' },
          { icon: 'message-circle', title: L('واتس اب', 'WhatsApp'), text: '0115009962' },
          { icon: 'map-pin', title: L('المكتب الرئيسي', 'Head office'), text: L('دبي، الإمارات العربية المتحدة', 'Dubai, United Arab Emirates') }
        ]
      },
      { type: 'note', variant: 'grey', title: L('تحذير احتيال', 'Fraud warning'),
        text: L('الموقع الرسمي الوحيد لأمانة هو amana.app. لن يطلب منك أي ممثل unserer أمانة أبداً كلمات مرور أو مدفوعات.',
                'The only official amana website is amana.app. No amana representative will ever ask you for passwords or payments.') }
    ]
  },

  'transparency': {
    slug: 'transparency', group: 'legal', icon: 'scale',
    seo: {
      title: L('بيان الشفافية | أمانة', 'Transparency Statement | amana'),
      desc: L('التزام أمانة بأعلى معايير الشفافية في قواعد الأعمال وإدارة المخاطر وحماية أصول العملاء.', 'amana’s commitment to the highest standards of business conduct, risk management and client asset protection.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('الوثائق القانونية', 'Legal'),
      title: L('بيان الشفافية.', 'Transparency Statement.'),
      text: L('نلتزم بمبادئ الحوكمة الواضحة والإفصاح المنتظم عن سياساتنا وإجراءاتنا.',
              'We are committed to clear governance principles and regular disclosure of our policies and procedures.')
    },
    blocks: [
      { type: 'prose', title: L('التزامنا', 'Our commitment'),
        body: {
          ar: [
            'تلتزم أمانة بمعايير الحوكمة وسلوك الأعمال ومكافحة غسل الأموال، ومعالجة تعارضات المصالح.',
            'نقدّم تقارير دورية عن المخاطر والسياسات، ونخضع لرقابة تنظيمية مستقلة في كل ولاية قضائية نعمل بها.',
            'نفصل أصول العملاء عن أصول الشركة في كل الأحوال، ونحافظ على سياسات واضحة للتعامل مع الشكاوى وتأكيد ما تعرفه بنجاح.'
          ],
          en: [
            'amana is committed to governance, conduct, anti-money-laundering standards and the management of conflicts of interest.',
            'We issue periodic reporting on risk and policies, and we are subject to independent supervision in every jurisdiction where we operate.',
            'Client assets are segregated from firm assets in all circumstances, and we maintain clear policies for complaints handling and “known your customer” procedures.'
          ]
        }
      },
      { type: 'faq', title: L('نقاط سريعة', 'At a glance'),
        items: [
          { q: L('كيف تُدار مخاطر السوق؟', 'How is market risk managed?'),
            a: L('عبر حدود مخاطر محددة يومياً، واختبارات ضغط دورية، ومراقبة مستمرة للتركّزات.', 'Through daily risk limits, regular stress testing and continuous concentration monitoring.') },
          { q: L('هل يوجد تضارب مصالح؟', 'Are there conflicts of interest?'),
            a: L('نوجد سياسة مكتوبة لتحديد تضارب المصالح والإفصاح عنها، وتُراجع دورياً من وحدة الامتثال.', 'A written policy exists for identifying and disclosing conflicts, reviewed periodically by the compliance function.') },
          { q: L('كيف أبلّغ عن مشكلة؟', 'How do I raise an issue?'),
            a: L('عبر صفحة اتصل بنا أو البريد الإلكتروني المخصص للشكاوى.', 'Through the Contact Us page or the dedicated complaints email.') }
        ]
      }
    ]
  }
};

/* =============================================================================
   3) العروض الترويجية
   ============================================================================= */
var PROMOS = {

  '1000for1000': {
    slug: '1000for1000', group: 'promotions', icon: 'gift',
    seo: {
      title: L('عرض 1,000 لربح 1,000 | أمانة', '1,000 For 1,000 Promotion | amana'),
      desc: L('ابدأ التداول واحصل على مكافأة تداول بقيمة 1,000 دولار عند استيفاء شروط العرض.', 'Start trading and earn a $1,000 trading bonus when the promotion terms are met.')
    },
    hero: {
      variant: 'pink',
      eyebrow: L('عرض ترويجي', 'Promotion'),
      title: L('1,000 لربح 1,000.\nمكافأة يمكنك تحقيقها.', '1,000 For 1,000.\nA bonus you can earn.'),
      text: L('مكافأة تداول بقيمة 1,000 دولار للعملاء الجدد الذين يستوفون شروط العرض.',
              'A $1,000 trading bonus for new clients who meet the promotion terms.'),
      ctas: [{ label: L('انضم إلى العرض', 'Join the promotion'), href: '#terms', style: 'white' }]
    },
    blocks: [
      { type: 'steps', title: L('كيف تستفيد من العرض؟', 'How to claim the promotion'),
        items: [
          { title: L('سجّل حساباً جديداً', 'Open a new account'), text: L('سجّل عبر الموقع أو التطبيق باستخدام بريد جديد.', 'Register via the website or app using a new email.') },
          { title: L('أودع الحد المطلوب', 'Deposit the required amount'), text: L('أكّد حسابك ثم أودع المبلغ المطلوب عبر وسيلة مؤهلة.', 'Verify your account, then deposit via an eligible method.') },
          { title: L('نفّذ صفقتك الأولى', 'Place your first trade'), text: L('أي صفقة مؤهلة بعد الإيداع تُحتسب للعرض.', 'Any qualifying trade after the deposit counts.') },
          { title: L('احصل على المكافأة', 'Receive the bonus'), text: L('تُضاف المكافأة إلى حساب التداول خلال أسبوع.', 'The bonus is credited to your trading account within a week.') }
        ]
      },
      { type: 'note', title: L('الشروط والأحكام', 'Terms and conditions'),
        text: L('العرض ساري للعملاء الجدد المسجلين في منصة أمانة، والمكافأة غير قابلة للسحب النقدي وتُستخدم لأغراض التداول فقط.',
                'The offer applies to new amana clients. The bonus is non-withdrawable and may be used for trading purposes only.') }
    ]
  },

  'trading-hours': {
    slug: 'trading-hours', group: 'promotions', icon: 'clock',
    seo: {
      title: L('التداول 24/5 | أمانة', 'Trade 24/5 | amana'),
      desc: L('تداول خمسة أيام في الأسبوع عبر منصات أمانة، مع فرص إضافية خارج ساعات البورصة التقليدية.', 'Trade five days a week across amana platforms, with additional opportunities outside traditional exchange hours.')
    },
    hero: {
      variant: 'dark', bg: IMG.g3,
      eyebrow: L('عروض ترويجية', 'Promotions'),
      title: L('التداول 24/5.\nمفتوح خمسة أيام في الأسبوع.', 'Trade 24/5.\nOpen five days a week.'),
      text: L('من الأحد إلى الجمعة، التداول متاح في سوق العملات والعائد، مع فرص خارج horario البورصة.',
              'From Sunday to Friday, forex and commodities trading is available, with opportunities beyond exchange hours.')
    },
    blocks: [
      { type: 'table', title: L('ساعات التداول الأسبوعية', 'Weekly trading hours'),
        head: L(['اليوم', 'العملات', 'السلع', 'المؤشرات'], ['Day', 'Forex', 'Commodities', 'Indices']),
        rows: [
          [L('الأحد','Sunday'), '22:00 – 21:00', '23:00 – 21:00', L('حسب البورصة','Per exchange')],
          [L('الاثنين – الخميس','Mon – Thu'), 'دائم', 'دائم', L('حسب البورصة','Per exchange')],
          [L('الجمعة','Friday'), '21:00 – 21:00', '21:00 – 20:00', L('حسب البورصة','Per exchange')]
        ]
      },
      { type: 'note', variant: 'grey', title: L('ملاحظة', 'Note'),
        text: L('التوقيت المعروض بتوقيت غرينتش. تتغير ساعات التداول أسبوعياً خلال فترات التوقيت الصيفي.',
                'Times are shown in GMT. Trading hours shift weekly during daylight-saving periods.') }
    ]
  },

  'interest': {
    slug: 'interest', group: 'promotions', icon: 'piggy-bank',
    seo: {
      title: L('amana interest — اربح على أموالك', 'amana interest — Earn on your cash'),
      desc: L('اجعل أموالك غير المستثمرة تعمل لصالحك مع عائد فائدة على الرصيد.', 'Put your idle cash to work with a rate of interest on your uninvested balance.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('عروض ترويجية', 'Promotions'),
      title: L('amana interest.\nأموالك تعمل.', 'amana interest.\nYour money works.'),
      text: L('اربح على رصيدك النقدي غير المستخدم تلقائياً، دون تغيير أي شيء في خطة استثمارك.',
              'Earn on your unused cash balance automatically, without changing your investment plan.')
    },
    blocks: [
      { type: 'features', title: L('كيف يعمل؟', 'How it works'), cols: 3,
        items: [
          { icon: 'wallet', title: L('رصيد تلقائي', 'Automatic balance'), text: L('يُحسب العائد على رصيدك المتاح يومياً.', 'Interest is calculated daily on your available balance.') },
          { icon: 'refresh-cw', title: L('دفع دوري', 'Regular payouts'), text: L('تُضاف الأرباح إلى حسابك بشكل دوري.', 'Earnings are credited to your account periodically.') },
          { icon: 'shield-check', title: L('بلا تعقيد', 'No complexity'), text: L('لا حد أدنى ولا رسوم إعداد.', 'No minimum and no setup fees.') }
        ]
      },
      { type: 'faq', title: L('أسئلة حول amana interest', 'amana interest FAQ'),
        items: [
          { q: L('هل يعمل تلقائياً؟', 'Does it work automatically?'),
            a: L('نعم، يُفعّل على أي رصيد نقدي متاح دون إجراء إضافي.', 'Yes. It is applied to any available cash balance with no extra action.') },
          { q: L('هل يمكنني سحب رصيدي؟', 'Can I still withdraw my balance?'),
            a: L('نعم، السحب متاح في أي وقت دون قيود على هذا الرصيد.', 'Yes. Withdrawals remain available at any time with no restriction on this balance.') }
        ]
      }
    ]
  },

  'cashback': {
    slug: 'cashback', group: 'promotions', icon: 'percent-badge',
    seo: {
      title: L('كاش باك | أمانة', 'Cashback | amana'),
      desc: L('استرداد نقدي على صفقاتك المؤهلة عن طريق amana interest أو عروض تعاونية.', 'Get cashback on eligible trades through amana interest or partner offers.')
    },
    hero: {
      variant: 'pink',
      eyebrow: L('عرض ترويجي', 'Promotion'),
      title: L('كاش باك.\nصفقتك ترجع لك.', 'Cashback.\nYour trade pays back.'),
      text: L('استرداد نقدي على صفقاتك المؤهلة يُضاف مباشرة إلى حساب التداول.',
              'Cashback on eligible trades credited directly to your trading account.')
    },
    blocks: [
      { type: 'features', title: L('كيف تحصل على الكاش باك؟', 'How to earn cashback'), cols: 3,
        items: [
          { icon: 'check-circle', title: L('سجّل في العرض', 'Join the offer'), text: L('فعّل الكاش باك من صفحة العروض في حسابك.', 'Activate cashback from the promotions page in your account.') },
          { icon: 'candlestick', title: L('تداول كالمعتاد', 'Trade as usual'), text: L('نفّذ صفقاتك المؤهلة على أي سوق.', 'Place your eligible trades on any market.') },
          { icon: 'wallet', title: L('استلم الاسترداد', 'Get your cashback'), text: L('يُضاف المبلغ إلى رصيد التداول دورياً.', 'The amount is credited to your trading balance periodically.') }
        ]
      },
      { type: 'note', title: L('الشروط', 'Conditions'),
        text: L('ينطبق الكاش باك على صفقات محدد�� يتم تحديدها، وقد يكون هناك حد أقصى للاسترداد شهرياً.',
                'Cashback applies to designated eligible trades and may be subject to a monthly cap.') }
    ]
  },

  'smart-money-tracker': {
    slug: 'smart-money-tracker', group: 'promotions', icon: 'target',
    seo: {
      title: L('متتبع المال الذكي | أمانة', 'Smart Money Tracker | amana'),
      desc: L('تابع تحركات المؤسسات الكبرى في السوق بدل مطاردة الأسعار بعد تحركاتها.',
              'Follow institutional money flows instead of chasing prices after they have already moved.')
    },
    hero: {
      variant: 'dark', bg: IMG.campaignBg,
      eyebrow: L('أداة حصرية', 'Exclusive tool'),
      title: L('متتبع المال الذكي.\nاتبع من يتحرك المال.', 'Smart Money Tracker.\nFollow where the money moves.'),
      text: L('أداة ترصد تحركات headed}AUM لمؤسسات كبيرة وتعرضها قبل أن تتحول إلى موجة عامة.',
              'A tool that surfaces institutional positioning before it becomes a retail wave.'),
      ctas: [{ label: L('جرّب الأداة', 'Try the tool'), href: 'web.html', style: 'white' }],
      badges: [{ icon: 'target', text: L('بيانات مؤسسية', 'Institutional data') }]
    },
    blocks: [
      { type: 'features', title: L('ماذا يقدّم؟', 'What it offers'), cols: 3,
        items: [
          { icon: 'target', title: L('تتبّع التدفقات', 'Flow tracking'), text: L('أرقام شراء وبيع المؤسسات حسب الأصل.', 'Institutional buy and sell figures per asset.') },
          { icon: 'bar-chart', title: L('قوى شرائية وبيعية', 'Buying vs selling'), text: L('مؤشر يوضح أي جانب هو الغالب الآن.', 'An indicator of which side currently dominates.') },
          { icon: 'bell', title: L('تنبيهات مبكرة', 'Early alerts'), text: L('إشعار عند تجاوز مستويات التدفق المهمة.', 'Alerts when key flow levels are breached.') }
        ]
      }
    ]
  },

  'sharia-tagging': {
    slug: 'sharia-tagging', group: 'promotions', icon: 'check-circle',
    seo: {
      title: L('وسم الشريعة | أمانة', 'Sharia Tagging | amana'),
      desc: L('اعرف موضع كل أصل من حيث التوافق مع الشريعة قبل أن تشتري.',
              'Know where every asset stands in terms of Sharia compliance before you buy.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('أداة حصرية', 'Exclusive tool'),
      title: L('وسم الشريعة.\nقرارات واعية.', 'Sharia Tagging.\nInformed decisions.'),
      text: L('وسم واضح لكل أصل يعطيك صورة واضحة عن موقعه من التوافق مع مبادئ الشريعة.',
              'A clear tag for every asset, giving you an immediate view of its Sharia alignment.')
    },
    blocks: [
      { type: 'features', title: L('كيف يعمل؟', 'How it works'), cols: 3,
        items: [
          { icon: 'check-circle', title: L('وسم واضح', 'Clear tagging'), text: L('كل أداة تحمل تصنيف التوافق الخاص بها.', 'Every instrument carries its own compliance classification.') },
          { icon: 'book-open', title: L('شرح مبسّط', 'Plain explanations'), text: L('تعريف موجز لكل تصنيف.', 'A short explanation for each classification.') },
          { icon: 'refresh-cw', title: L('تحديث دوري', 'Periodic updates'), text: L('مراجعة التصنيفات دورياً مع تغيّر الأصول.', 'Classifications reviewed periodically as assets change.') }
        ]
      }
    ]
  },

  'core-plus-max': {
    slug: 'core-plus-max', group: 'promotions', icon: 'sparkles',
    seo: {
      title: L('كور بلس ماكس | أمانة', 'Core Plus Max | amana'),
      desc: L('حزمة أدوات موسّعة للمتداولين النشطين: رسوم أعمق، موارد أكثر، وأتمتة متقدمة.',
              'An expanded toolkit for active traders: deeper charts, more resources and advanced automation.')
    },
    hero: {
      variant: 'dark', bg: IMG.invest,
      eyebrow: L('أداة حصرية', 'Exclusive tool'),
      title: L('كور بلس ماكس.\nكل ما تحتاجه للتداول النشط.', 'Core Plus Max.\nEverything active trading needs.'),
      text: L('موارد موسّعة للمتداولين الذين يعتمدون على التحليل والقرارات المتكررة.',
              'Expanded resources for traders who rely on analysis and frequent decisions.')
    },
    blocks: [
      { type: 'features', title: L('ما الذي يتضمنه؟', 'What it includes'), cols: 4,
        items: [
          { icon: 'bar-chart', title: L('رسوم متقدمة', 'Advanced charts'), text: L('أطر زمنية متعددة ومؤشرات موسعة.', 'Multiple timeframes and extended indicators.') },
          { icon: 'zap', title: L('تنفيذ أسرع', 'Faster execution'), text: L('مسار تنفيذ مباشر للصفقات.', 'A direct execution path for orders.') },
          { icon: 'book-open', title: L('مكتبة أعمق', 'Deeper library'), text: L('محتوى تعليمي موسّع لمشتركي Plus.', 'Expanded educational content for Plus members.') },
          { icon: 'headset', title: L('أولوية الدعم', 'Priority support'), text: L('وقت استجابة أقصر لفريق الدعم.', 'Shorter response times from the support team.') }
        ]
      }
    ]
  }
};

/* =============================================================================
   4) الوثائق القانونية
   ============================================================================= */
var LEGAL = {

  'legal-documents': {
    slug: 'legal-documents', group: 'legal', icon: 'file-text',
    seo: {
      title: L('الوثائق القانونية | أمانة', 'Legal Documents | amana'),
      desc: L('اتفاقية العميل، سياسة الخصوصية، تنبيه عن المخاطر، بيان الشفافية والشروط والأحكام.',
              'Client agreement, privacy policy, risk disclosure, transparency statement and terms.')
    },
    hero: {
      variant: 'light',
      eyebrow: L('الوثائق القانونية', 'Legal'),
      title: L('الوثائق القانونية.', 'Legal Documents.'),
      text: L('كل الوثائق والح-disclosures التي تحكم علاقتك مع أمانة، متاحة للتحميل والقراءة في أي وقت.',
              'All documents governing your relationship with amana, available to read and download at any time.')
    },
    blocks: [
      { type: 'docs', title: L('قائمة الوثائق', 'Document list'),
        items: [
          { icon: 'file-text', title: L('اتفاقية العميل', 'Client Agreement'), text: L('شروط وأحكام التعامل بين العميل وأمانة.', 'Terms and conditions of the client relationship.') },
          { icon: 'lock', title: L('سياسة الخصوصية', 'Privacy Policy'), text: L('كيف نجمع بياناتك ونستخدمها ونحميها.', 'How we collect, use and protect your data.') },
          { icon: 'alert-triangle', title: L('تنبيه عن المخاطر', 'Risk Disclosure'), text: L('شرح تفصيلي لمخاطر المنتجات المالية.', 'A detailed explanation of financial product risks.') },
          { icon: 'scale', title: L('بيان الشفافية', 'Transparency Statement'), text: L('التزامنا بالحوكمة والإفصاح.', 'Our governance and disclosure commitments.') },
          { icon: 'shield-check', title: L('الشروط والأحكام AFSDL', 'AFSDL Terms and Conditions'), text: L('شروط الكيان الخاضع للرقابة في لابوان.', 'Terms of the Labuan-regulated entity.') }
        ]
      }
    ]
  },

  'risk-disclosure': {
    slug: 'risk-disclosure', group: 'legal', icon: 'alert-triangle',
    seo: {
      title: L('بيان الكشف عن المخاطر | أمانة', 'Risk Disclosure Statement | amana'),
      desc: L('اقرأ بتمعّن بيان الكشف عن المخاطر قبل التداول في أي منتج مالي مع أمانة.',
              'Read the risk disclosure statement carefully before trading any amana financial product.')
    },
    hero: {
      variant: 'black',
      eyebrow: L('وثيقة قانونية', 'Legal document'),
      title: L('بيان الكشف عن المخاطر.', 'Risk Disclosure Statement.'),
      text: L('التداول في الأدوات المالية ينطوي على مخاطر جوهرية. اقرأ هذا البيان بعناية.',
              'Trading in financial instruments involves substantial risk. Please read this statement carefully.')
    },
    blocks: [
      { type: 'prose', title: L('تنبيهات رئيسية', 'Key warnings'),
        body: {
          ar: [
            'أمانة لا تقدم استشارات استثمارية. جميع الاستثمارات في المنتجات المالية تنطوي على مخاطر.',
            'لا يوجد ضمان للربح على أي منتج مالي تقدمه أمانة، كما أن الأداء السابق للأصل المالي لا يضمن أي عوائد مستقبلية.',
            'أي نتائج أداء تاريخية أو افتراضية معروضة في هذا الموقع هي لأغراض التوضيح فقط.',
            'قد تكون قيمة استثماراتك في الأسهم وصناديق الاستثمار المتداولة (ETFs) قابلة للارتفاع والانخفاض، وقد تسترد كامل رأس المال أو تفقد جزءاً منه.',
            'تداول المشتقات خارج البورصة (OTC) بالرافعة المالية وتداول الأصول المشفرة شديد التقلب، وقد يعرّضك لخسائر فادحة وسريعة.',
            'الأصول المشفرة غير خاضعة للتنظيم ولا توفر حماية تنظيمية للمستهلكين.',
            'لا يجب أن تستثمر في أي أداة مالية إلا إذا كنت مستعداً لخسارة كامل المبلغ المستثمر.'
          ],
          en: [
            'amana does not provide investment advice. All investments in financial products involve risk.',
            'There is no guarantee of profit on any financial product offered by amana, and past performance of a financial asset does not guarantee future returns.',
            'Any historical or hypothetical performance figures shown on this website are for illustrative purposes only.',
            'The value of investments in equities and exchange-traded funds (ETFs) may rise or fall, and you may recover only part of your capital.',
            'Trading OTC derivatives with leverage and trading crypto assets is highly volatile and may expose you to rapid and substantial losses.',
            'Crypto assets are unregulated and provide no regulatory consumer protection.',
            'Do not invest in any financial instrument unless you are prepared to lose the entire amount invested.'
          ]
        }
      },
      { type: 'cta', title: L('فهمت، أريد البدء', 'Understood, I want to start'),
        text: L('اقرأ بقية الوثائق القانونية قبل فتح حسابك.',
                'Please review the remaining legal documents before opening an account.'),
        cta: L('ابدأ الآن', 'Get started'), href: 'web.html' }
    ]
  }
};

module.exports = { LEARN: LEARN, COMPANY: COMPANY, PROMOS: PROMOS, LEGAL: LEGAL };
