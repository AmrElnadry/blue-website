/* ═══════════════════════════════════════════════
   Blue — سكربت مشترك لكل الصفحات
   العلامة تُكتب «Blue» دائماً. الاسم الرسمي للبيانات
   المنظّمة فقط: Blue Network (blue-network.sa)
   الأرقام لاتينية في اللغتين.
   ═══════════════════════════════════════════════ */

const BRAND = {
  name:'Blue',
  legal:'Blue Network',
  domain:'blue-network.sa',
  email:'contact@blue-network.sa',        // ← يحتاج تأكيدك
  taglineAr:'شبكة إعلامية متكاملة',
  taglineEn:'An integrated media network'
};

const WP = 'https://blue-network.sa/wp-content/uploads/';

/* الأعمال: من بروفايل 2026 وحساب Vimeo. الغلاف في assets/work/<slug>.webp */
const PROJECTS = [
 {slug:'thaqafiya-eid', vid:'1239459147', k:'prog', y:2026, d:89, r:'3840/2160',
  ar:'برنامج «عِد» — قناة الثقافية', en:'‘Id’ — Al Thaqafiya Channel', cl_ar:'قناة الثقافية', cl_en:'Al Thaqafiya Channel',
  sar:'برنامج تلفزيوني لقناة الثقافية يستكشف المساجلات الشعرية التاريخية بين شاعرين، ويتتبّع حياتهما ومسيرتهما الإبداعية وتطوّر الخصومة الأدبية بينهما.',
  sen:'A TV programme for Al Thaqafiya Channel exploring historic poetic rivalries between two poets, tracing their lives, creative journeys and the evolution of their literary conflict.'},
 {slug:'muhaidib', vid:'1239458890', k:'ads', y:2026, d:41, r:'3840/2160',
  ar:'حملة المهيدب لطب الأسنان', en:'Al Muhaidib Dental Campaign', cl_ar:'مجموعة المهيدب', cl_en:'Al Muhaidib Group',
  sar:'حملة ترويجية لمستشفى المهيدب لطب الأسنان تسلّط الضوء على مشكلات الأسنان الشائعة وأهمية العلاج المبكر وتقويم الأسنان.',
  sen:'A promotional campaign for Al Muhaidib Dental Hospital highlighting common dental problems and the importance of early treatment and orthodontic care.'},
 {slug:'alghad-founding-day', gd:'1wBQ6dHOs44WayFw3yTT5T8AOCWVmc44d', k:'ai', y:2026, d:148, r:'1920/1080',
  ar:'يوم التأسيس — كليات الغد الدولية', en:'Founding Day — Alghad International Colleges', cl_ar:'كليات الغد الدولية', cl_en:'Alghad International Colleges',
  sar:'فيديو مُنتج بالذكاء الاصطناعي لكليات الغد الدولية بمناسبة يوم التأسيس، يستعرض منجزات المملكة عبر ملوكها، ويعكس ماضيها وحاضرها ومستقبلها.',
  sen:'An AI-generated video for Alghad International Colleges for Saudi Founding Day, highlighting the Kingdom\'s achievements through its kings and reflecting its past, present and future.'},
 {slug:'wasad', vid:'1239461716', k:'corp', y:2026, d:236, r:'1920/1080',
  ar:'وثائقي وسد الصناعية', en:'Wasad Industrial Documentary', cl_ar:'وسد الصناعية', cl_en:'Wasad Industrial',
  sar:'فيلم ترويجي لشركة وسد الصناعية يستعرض مشاريعها الكبرى في أنحاء المملكة، وقدراتها وخبرتها وأثرها الصناعي.',
  sen:'A promotional film for Wasad Industrial Company showcasing its large-scale projects across Saudi Arabia and its capabilities, expertise and industrial impact.'},
 {slug:'manarat', vid:'1239461032', k:'corp', y:2026, d:162, r:'3840/2160',
  ar:'مدارس منارات القصيم', en:'Al Manarat Schools, Al Qassim', cl_ar:'مدارس منارات القصيم', cl_en:'Al Manarat Schools',
  sar:'فيلم مؤسسي لمدارس منارات القصيم يبرز مسيرة المدرسة وبيئتها التعليمية وقيمها، بسرد بصري حديث.',
  sen:'A corporate film for Al Manarat Schools in Al Qassim, highlighting the school\'s journey, learning environment and core values through modern visual storytelling.'},
 {slug:'asrarco', vid:'1060999186', k:'ads', y:2025, d:56, r:'1920/1080',
  ar:'أسراركو — الجمعة البيضاء', en:'Asrarco — White Friday', cl_ar:'أسراركو', cl_en:'Asrarco',
  sar:'إعلان عروض الجمعة البيضاء من أسراركو على منتجات التجميل والعناية بالبشرة.',
  sen:'Asrarco\'s best-ever White Friday deals on top-tier beauty and skincare products.'},
 {slug:'medical-drama', vid:'1098163515', k:'drama', y:2025, d:73, r:'1920/1080',
  ar:'إشاعات طبية — اسكتش درامي', en:'Medical Rumor — Drama Sketch', cl_ar:'', cl_en:'',
  sar:'اسكتش درامي يتناول خرافات طبية شائعة عن إنقاص الوزن، صُنع مدخلاً لحلقات برنامج الإشاعات الطبية.',
  sen:'A dramatic sketch addressing common medical myths about weight loss, made as the opening of the health-myths programme.'},
 {slug:'alghad-college', vid:'1239459824', k:'corp', y:2026, d:166, r:'3840/2160',
  ar:'كلية الغد — الرياض', en:'Alghad College, Riyadh', cl_ar:'كلية الغد', cl_en:'Alghad College',
  sar:'فيلم مؤسسي لكلية الغد في الرياض يعرض مسيرتها الأكاديمية وبيئتها التعليمية المتقدمة ودورها في تنمية الكفاءات الوطنية.',
  sen:'A corporate film for Alghad College in Riyadh, showcasing its academic journey, advanced learning environment and contribution to developing national talent.'},
 {slug:'hemmtk', vid:'1239462385', k:'corp', y:2026, d:68, r:'1920/1080',
  ar:'همتك — مؤتمر سوق العمل الدولي', en:'Hemmtk — Global Labor Market Conference', cl_ar:'همتك', cl_en:'Hemmtk',
  sar:'تغطية لتطبيق همتك في قاعة الملك عبدالعزيز للمؤتمرات، توثّق أنشطة جناح التطبيق وحفل تكريمه.',
  sen:'Event coverage for Hemmtk at King Abdulaziz Conference Hall, documenting the app\'s booth and its recognition ceremony.'},
 {slug:'maiz', vid:'1239459278', k:'ads', y:2026, d:23, r:'1080/1920',
  ar:'مطعم مايز — الدرعية', en:'MAIZ Restaurant, Diriyah', cl_ar:'مطعم مايز', cl_en:'MAIZ',
  sar:'ريلز ترويجية لمطعم مايز في الدرعية تعرض أجواءه الفاخرة وخدمته ومطبخه وطهاته ضمن حملة تسويقية.',
  sen:'Promotional reels for MAIZ restaurant in Diriyah, showing its ambiance, service, cuisine and chefs as part of a marketing campaign.'},
 {slug:'tasooma', vid:'1105055134', k:'ads', y:2025, d:58, r:'1080/1920',
  ar:'تاسومة — عروض الصيف', en:'Tasooma — Summer Offers', cl_ar:'تاسومة', cl_en:'Tasooma',
  sar:'مجموعة إعلانات لتاسومة تقدّم أحد أقوى عروض الشركة الصيفية.',
  sen:'A set of ads for Tasooma presenting one of the company\'s strongest summer offers.'},
 {slug:'sapac', vid:'1239459070', k:'corp', y:2026, d:55, r:'3840/2160',
  ar:'برنامج المتدربين — سبك', en:'SAPAC Trainee Programme', cl_ar:'سبك', cl_en:'SAPAC',
  sar:'فيلم عن برنامج المتدربين في شركة سبك.',
  sen:'A film about the SAPAC trainee programme.'},
 {slug:'alghad-school', vid:'1239460628', k:'corp', y:2026, d:168, r:'3840/2160',
  ar:'مدارس الغد — القصيم', en:'Alghad Schools, Al Qassim', cl_ar:'مدارس الغد', cl_en:'Alghad Schools',
  sar:'فيلم مؤسسي لمدارس الغد في القصيم.',
  sen:'A corporate film for Alghad Schools in Al Qassim.'},
 {slug:'wasad-buildex', vid:'1239461386', k:'corp', y:2026, d:69, r:'3840/2160',
  ar:'وسد في معرض بيلدكس', en:'Wasad at Buildex', cl_ar:'وسد الصناعية', cl_en:'Wasad Industrial',
  sar:'تغطية جناح شركة وسد في معرض بيلدكس.',
  sen:'Coverage of Wasad\'s stand at the Buildex exhibition.'},
 {slug:'zamalek', vid:'1239457850', k:'ads', y:2026, d:60, r:'3840/2160',
  ar:'أكاديمية الزمالك — الرياض', en:'Zamalek Academy, Riyadh', cl_ar:'أكاديمية الزمالك', cl_en:'Zamalek Academy',
  sar:'فيلم لفرع أكاديمية الزمالك في الرياض.',
  sen:'A film for the Zamalek Academy\'s Riyadh branch.'},
 {slug:'medical-show', vid:'1028011078', k:'prog', y:2024, d:344, r:'1280/720',
  ar:'إشاعات طبية — البرنامج', en:'Medical Rumor — Social Programme', cl_ar:'', cl_en:'',
  sar:'حلقة تفنّد خرافات طبية شائعة، وكل حلقة تتناول إشاعة واحدة وتفصل الحقيقة عن المفاهيم الخاطئة.',
  sen:'An episode debunking common medical myths; each episode takes one rumour and separates the facts from the misconceptions.'},
 {slug:'child-right', vid:'1028010232', k:'ads', y:2024, d:35, r:'1920/1080',
  ar:'حق الطفل', en:'Child’s Right', cl_ar:'', cl_en:'',
  sar:'إعلان يحمل رسالة أن التعليم الجيد حق أساسي لكل طفل، ويؤكد التزام المؤسسة بإتاحته للجميع.',
  sen:'An ad carrying the message that quality education is a fundamental right for every child, and the foundation\'s commitment to making it accessible to all.'},
 {slug:'shokran', vid:'753936642', k:'drama', y:2022, d:65, r:'1920/1080',
  ar:'شكراً — فيلم قصير', en:'Shokran — Short Film', cl_ar:'', cl_en:'',
  sar:'فيلم درامي قصير عن طفل ممزّق بين الكتابة عن إنجازات وطنه في المدرسة وقسوة واقعه في البيت. تولّينا الفكرة والسيناريو والإنتاج كاملاً.',
  sen:'A short drama about a young boy torn between writing about his country\'s achievements at school and the harsh realities of his home life. We handled the concept, script and full production.'},
 {slug:'trump', vid:'1061034231', k:'gfx', y:2025, d:44, r:'1920/1080',
  ar:'عقل ترامب — وثائقي', en:'Trump’s Brain — Documentary', cl_ar:'', cl_en:'',
  sar:'فيلم وثائقي يستكشف تفكير دونالد ترامب واستراتيجياته السياسية وشخصيته، وطريقته في اتخاذ القرار والقيادة.',
  sen:'A documentary exploring Donald Trump\'s thinking, political strategies and personality, and how he makes decisions and leads.'},
 {slug:'se7a', vid:'752294977', k:'prog', y:2022, d:33, r:'1920/1080',
  ar:'صحة بلس', en:'Se7a Plus', cl_ar:'', cl_en:'',
  sar:'',
  sen:''},
 {slug:'mesh', vid:'752997311', k:'clip', y:2022, d:14, r:'1920/1080',
  ar:'مش بالشكل', en:'Mesh Bel Shakl', cl_ar:'', cl_en:'',
  sar:'',
  sen:''},
 {slug:'far7a', vid:'753918482', k:'gfx', y:2022, d:53, r:'1920/1080',
  ar:'قصة فرحة', en:'Far7a Story', cl_ar:'', cl_en:'',
  sar:'',
  sen:''}
];

const CATS = [
 {k:'all', ar:'الكل', en:'All'}, {k:'ads', ar:'إعلانات', en:'Commercials'},
 {k:'drama', ar:'دراما', en:'Drama'}, {k:'gfx', ar:'جرافيك', en:'Graphics'},
 {k:'corp', ar:'أفلام مؤسسية', en:'Corporate'},
 {k:'clip', ar:'كليبات', en:'Clips'}, {k:'prog', ar:'برامج', en:'Programs'},
 {k:'ai', ar:'AI', en:'AI'}
];
PROJECTS.forEach(p=>{
  const c=CATS.find(c=>c.k===p.k); p.car=c.ar; p.cen=c.en;
  p.img=`assets/work/${p.slug}.webp`;
});

/* الخدمات موزّعة على مراحل الإنتاج — بدون ترقيم */
const PHASES = [
 {ar:'ما قبل الإنتاج', en:'Preproduction',
  note_ar:'هنا تُبنى الفكرة ويتحدّد الجدول والميزانية قبل أن تدور الكاميرا.',
  note_en:'Where the idea is built and the schedule and budget are set before the camera rolls.',
  items:[
   {ar:'الأفكار الإبداعية', en:'Creative Ideas',
    dar:'جلسة نفهم فيها هدفك وجمهورك، نخرج منها بموجز إبداعي مكتوب ومعتمد منك.',
    den:'A session to understand your goal and audience, ending with a written brief you approve.'},
   {ar:'كتابة السيناريو', en:'Scriptwriting',
    dar:'قصص مكتوبة للجمهور السعودي، مع لوح تصوير يوضّح كل لقطة قبل التنفيذ.',
    den:'Stories written for the Saudi audience, with a storyboard for every shot.'},
   {ar:'تخطيط الحملات', en:'Campaign Planning',
    dar:'استراتيجية ومراحل وأهداف قابلة للقياس، وتوزيع الميزانية على القنوات.',
    den:'Strategy, stages and measurable goals, with budget split across channels.'}
  ]},
 {ar:'الإنتاج', en:'Production',
  note_ar:'التصوير بفريق وتجهيزات كاملة، في الاستوديو أو في المواقع الخارجية.',
  note_en:'Shooting with a full crew and equipment, in studio or on location.',
  items:[
   {ar:'إنتاج الأفلام', en:'Film Production',
    dar:'أفلام قصيرة ووثائقية ودراما، من أول يوم تصوير حتى النسخة النهائية.',
    den:'Short films, documentaries and drama, from day one to final cut.'},
   {ar:'الإعلانات التجارية', en:'Commercials',
    dar:'إعلانات تلفزيونية ورقمية مبنية على فكرة تبيع، لا على مشاهد جميلة فقط.',
    den:'TV and digital ads built on an idea that sells, not just pretty shots.'},
   {ar:'التصوير الفوتوغرافي', en:'Photography',
    dar:'تصوير منتجات وفعاليات ومقرات شركات، بإضاءة وتجهيزات احترافية.',
    den:'Product, event and corporate photography with professional lighting.'}
  ]},
 {ar:'ما بعد الإنتاج', en:'Post Production',
  note_ar:'المونتاج والمؤثرات والصوت والهوية، حتى التسليم بكل المقاسات.',
  note_en:'Editing, effects, sound and identity, through to delivery in every ratio.',
  items:[
   {ar:'الموشن جرافيك والأنيميشن', en:'Motion & Animation',
    dar:'تحريك ثنائي وثلاثي الأبعاد، وإنفوجرافيك متحرك، ومؤثرات CGI.',
    den:'2D and 3D animation, animated infographics and CGI.'},
   {ar:'المونتاج والمؤثرات البصرية', en:'Editing & VFX',
    dar:'مونتاج وتصحيح ألوان ومؤثرات بصرية وتصميم صوتي متكامل.',
    den:'Editing, colour grading, visual effects and full sound design.'},
   {ar:'الهوية البصرية', en:'Brand Identity',
    dar:'بناء هوية تعكس شخصيتك في كل تفصيل، من الشعار إلى دليل الاستخدام.',
    den:'An identity that reflects who you are, from logo to usage guide.'}
  ]}
];
/* قائمة مسطّحة تُستخدم في الصفحة الرئيسية */
const SERVICES = PHASES.flatMap(p=>p.items);

/* تفاصيل صفحة كل خدمة (service.html?s=slug): مقدّمة، ما يشمله العمل، وأعمال ذات صلة.
   الوصف نطاق عمل فقط — لا أسعار ولا مُدد ولا أرقام بدون تأكيد */
const SVC_DETAIL = {
 ideas:{w:['child-right','asrarco','muhaidib'],
  lar:'قبل أي تصوير نحتاج فكرة واضحة. نجلس معك لنفهم الهدف والجمهور والرسالة، ثم نقترح أفكاراً إبداعية تخدم ذلك، ونخرج بموجز مكتوب تعتمده قبل أن نبدأ.',
  len:'Before any shoot comes a clear idea. We sit with you to understand the goal, audience and message, propose creative directions that serve them, and end with a written brief you approve before we start.',
  inc:[['جلسة اكتشاف لفهم الهدف والجمهور','A discovery session on goal and audience'],
       ['أكثر من اتجاه إبداعي للمقارنة','Several creative directions to compare'],
       ['مراجع بصرية ولوحات مزاج','Visual references and mood boards'],
       ['موجز إبداعي مكتوب ومعتمد منك','A written creative brief you sign off'],
       ['رسالة رئيسية مختصرة لكل جمهور','A short key message for each audience']]},
 script:{w:['medical-drama','shokran','medical-show'],
  lar:'نكتب قصصاً بلغة الجمهور السعودي، سواء كان فيلماً قصيراً أو إعلاناً أو حلقة برنامج، ونرفقها بلوح تصوير يوضّح كل لقطة قبل أن نصل إلى موقع التصوير.',
  len:'We write stories in the language of the Saudi audience — short film, commercial or programme episode — with a storyboard that shows every shot before we reach the set.',
  inc:[['سيناريو كامل بالحوار والوصف','A full script with dialogue and action'],
       ['لوح تصوير يوضّح كل لقطة','A storyboard for every shot'],
       ['نص التعليق الصوتي عند الحاجة','Voiceover copy when needed'],
       ['نسخ مختصرة للمنصات المختلفة','Cut-down versions for each platform'],
       ['جولات مراجعة قبل الاعتماد النهائي','Review rounds before final approval']]},
 campaigns:{w:['tasooma','maiz','muhaidib'],
  lar:'نحوّل الهدف التسويقي إلى حملة مرحلية: ماذا ننتج، ولأي منصة، ومتى ينشر، وكيف نقيس النتيجة. وتتوزّع الميزانية على القنوات حسب ما يخدم الهدف.',
  len:'We turn a marketing goal into a staged campaign: what to make, for which platform, when it goes out and how we measure it, with the budget split across channels to serve the goal.',
  inc:[['استراتيجية الحملة ومراحلها','Campaign strategy and stages'],
       ['أهداف قابلة للقياس لكل مرحلة','Measurable goals for each stage'],
       ['خطة محتوى لكل منصة','A content plan for each platform'],
       ['توزيع الميزانية على القنوات','Budget split across channels'],
       ['جدول نشر وإنتاج متكامل','A combined production and publishing schedule']]},
 film:{w:['shokran','wasad','trump'],
  lar:'ننتج الأفلام القصيرة والوثائقية والدراما والأفلام المؤسسية بفريق وتجهيزات كاملة، من أول يوم تصوير حتى النسخة النهائية، في الاستوديو أو في المواقع الخارجية.',
  len:'We produce short films, documentaries, drama and corporate films with a full crew and kit, from the first shoot day to the final cut, in studio or on location.',
  inc:[['إدارة الإنتاج والمواقع والتصاريح','Production, location and permit management'],
       ['اختيار الممثلين والمواهب','Casting and talent'],
       ['فريق تصوير وإضاءة وصوت كامل','A full camera, lighting and sound crew'],
       ['إخراج وإدارة يوم التصوير','Direction and on-set management'],
       ['مونتاج وتلوين وصوت حتى النسخة النهائية','Edit, grade and sound through to final']]},
 commercials:{w:['muhaidib','zamalek','asrarco'],
  lar:'إعلانات تلفزيونية ورقمية تبدأ من فكرة تبيع، لا من مشاهد جميلة فقط. نكتب ونصوّر ونسلّم بكل المقاسات التي تحتاجها كل منصة.',
  len:'TV and digital commercials that start from an idea that sells, not just pretty shots. We write, shoot and deliver in every size each platform needs.',
  inc:[['فكرة وسيناريو مبنيان على هدف الحملة','Idea and script built on the campaign goal'],
       ['تصوير بالممثلين أو المنتج','Shooting with talent or product'],
       ['نسخ 16:9 و1:1 و9:16 للمنصات','16:9, 1:1 and 9:16 versions'],
       ['نسخ قصيرة للإعلانات الممولة','Short cut-downs for paid ads'],
       ['تعليق صوتي وموسيقى ومؤثرات','Voiceover, music and sound design']]},
 photo:{w:['maiz','hemmtk','wasad-buildex'],
  lar:'تصوير فوتوغرافي للمنتجات والفعاليات ومقرات الشركات، بإضاءة وتجهيزات احترافية، ويمكن تنفيذه في يوم التصوير نفسه مع الفيديو.',
  len:'Product, event and corporate photography with professional lighting and kit — and it can run on the same day as your video shoot.',
  inc:[['تصوير المنتجات في الاستوديو','Studio product photography'],
       ['تغطية الفعاليات والمؤتمرات والمعارض','Events, conferences and exhibitions'],
       ['تصوير المقرات وفرق العمل','Offices, facilities and teams'],
       ['معالجة وتلوين الصور','Retouching and colour'],
       ['تسليم بمقاسات الطباعة والمنصات','Delivery sized for print and social']]},
 motion:{w:['trump','far7a','thaqafiya-eid'],
  lar:'نصمّم ونحرّك فيديوهات تشرح فكرتك بوضوح: إنفوجرافيك متحرك، وأنيميشن ثنائي وثلاثي الأبعاد، ومؤثرات CGI، ومقدّمات وشارات للبرامج.',
  len:'We design and animate videos that explain your idea clearly: animated infographics, 2D and 3D animation, CGI, and openers and idents for shows.',
  inc:[['فيديو تعريفي للشركة أو المنتج','Company or product explainer'],
       ['إنفوجرافيك متحرك للتقارير والبيانات','Animated infographics for reports and data'],
       ['أنيميشن ثلاثي الأبعاد ومؤثرات CGI','3D animation and CGI'],
       ['مقدّمات وشارات للبرامج والقنوات','Openers and idents for shows and channels'],
       ['تعليق صوتي وموسيقى ومؤثرات','Voiceover, music and sound design']]},
 editing:{w:['medical-show','thaqafiya-eid','se7a'],
  lar:'المونتاج هو المكان الذي تتشكّل فيه القصة فعلاً. نركّب المادة، ونصحّح الألوان، ونضيف المؤثرات البصرية، ونصمّم الصوت حتى تخرج النسخة النهائية جاهزة لكل منصة.',
  len:'The edit is where the story really takes shape. We cut the footage, grade the colour, add visual effects and design the sound until the final version is ready for every platform.',
  inc:[['مونتاج القصة والإيقاع','Story and pacing edit'],
       ['تصحيح وتلوين الألوان','Colour correction and grading'],
       ['مؤثرات بصرية وتنظيف اللقطات','Visual effects and shot clean-up'],
       ['تصميم الصوت والمكساج','Sound design and mix'],
       ['ترجمة ونسخ بكل المقاسات','Subtitles and every delivery size']]},
 identity:{w:['mesh','thaqafiya-eid','far7a'],
  lar:'نبني هوية بصرية تعكس شخصيتك في كل تفصيل، من الشعار والألوان والخطوط إلى الحركة على الشاشة، ونجمعها في دليل استخدام واضح لفريقك.',
  len:'We build a visual identity that reflects who you are in every detail — logo, colour and type through to motion on screen — gathered in a clear usage guide for your team.',
  inc:[['شعار ونظام ألوان وخطوط','Logo, colour and type system'],
       ['هوية متحركة وشارات للفيديو','Motion identity and video idents'],
       ['قوالب للسوشيال والعروض','Social and presentation templates'],
       ['دليل استخدام الهوية','A brand usage guide'],
       ['ملفات جاهزة للطباعة والشاشة','Files ready for print and screen']]}
};
['ideas','script','campaigns','film','commercials','photo','motion','editing','identity']
  .forEach((k,i)=>Object.assign(SERVICES[i],{slug:k},SVC_DETAIL[k]));

/* مراحل العمل الأربع — الوعد هو الأهم، والمرحلة تسمية له.
   الوعود الأربعة التزامات مؤكَّدة؛ لا تُضَف وعود أو مُدد زمنية بدون تأكيد. */
const STAGES = [
 {ar:'الاكتشاف', en:'Discovery',
  par:'موجز إبداعي مكتوب', pen:'A written creative brief',
  dar:'جلسة نفهم فيها هدفك وجمهورك وميزانيتك.',
  den:'A session to understand your goal, audience and budget.'},
 {ar:'التصوّر', en:'Concept',
  par:'عرض سعر قبل أي التزام', pen:'A detailed quote before any commitment',
  dar:'سيناريو ولوح تصوير يوضّح كل لقطة.',
  den:'A script and a storyboard for every shot.'},
 {ar:'التنفيذ', en:'Production',
  par:'تقارير يومية من موقع التصوير', pen:'Daily reports from the shoot',
  dar:'التصوير بجدول تعتمده أنت، ومراجعة مستمرة معك.',
  den:'Shooting on a schedule you approve, with continuous review.'},
 {ar:'التسليم', en:'Delivery',
  par:'جولتا تعديل مجانيتان', pen:'Two free revision rounds',
  dar:'وتسليم بكل المقاسات التي تحتاجها كل منصة.',
  den:'Delivered in every size each platform needs.'}
];

/* ── الشريط: مجالات العمل بشفافيات متفاوتة ── */
const FIELDS_AR = ['الإنتاج','الأفلام القصيرة','الجرافيك','الإعلانات التجارية','الدراما',
                   'الموشن جرافيك','المؤثرات البصرية','الهوية البصرية','التصوير','الوثائقيات'];
const FIELDS_EN = ['Production','Short Films','Graphics','Commercials','Drama',
                   'Motion Graphics','VFX','Branding','Photography','Documentaries'];
/* نمط غير منتظم حتى لا تلاحظ العين تكراراً */
const OPACITY  = [1,.5,.75,1,.5,1,.75,.5,1,.75];

/* شعارات العملاء: نسخ بيضاء شفافة في assets/clients.
   s معامل تكبير بصري: الشعارات العريضة أو الكثيفة تُصغَّر والطويلة أو الخفيفة تُكبَّر
   حتى تبدو بالوزن نفسه. عميل جديد بلا شعار لا يُضاف إلى أن يتوفّر ملفه */
const CLIENTS = [
 {f:'moc',s:0.74,ar:'وزارة الثقافة',en:'Ministry of Culture'},
 {f:'thaqafiya',s:0.86,ar:'قناة الثقافية',en:'Al Thaqafiya'},
 {f:'wasad',s:1.0,ar:'وسد',en:'Wasad'},
 {f:'almuhaidib',s:1.12,ar:'مجموعة المهيدب',en:'Al Muhaidib Group'},
 {f:'alghad',s:1.14,ar:'كلية الغد',en:'Alghad College'},
 {f:'hemmtk',s:0.62,ar:'همتك',en:'Hemmtk'},
 {f:'sapac',s:0.62,ar:'سبك',en:'SAPAC'},
 {f:'asrarco',s:0.75,ar:'أسراركو',en:'Asrarco'},
 {f:'tasooma',s:1.12,ar:'تاسومة',en:'Tasooma'},
 {f:'maiz',s:1.14,ar:'مايز',en:'MAIZ'},
 {f:'alkhozama',s:0.78,ar:'الخزامى للاستثمار',en:'Al Khozama Investment'},
 {f:'holiday-inn',s:1.03,ar:'هوليداي إن',en:'Holiday Inn'},
 {f:'arabian-oud',s:1.03,ar:'العربية للعود',en:'Arabian Oud'},
 {f:'makhazen-alenayah',s:0.99,ar:'مخازن العناية',en:'Makhazen Alenayah'},
 {f:'maknoon-alsharq',s:0.95,ar:'مكنون الشرق',en:'Maknoon Alsharq'},
 {f:'alwaqea',s:0.62,ar:'الواقع',en:'Alwaqea'},
 {f:'index',s:1.03,ar:'إندكس',en:'INDEX'},
 {f:'almaha',s:1.12,ar:'المها للإنتاج',en:'Al Maha Production'},
 {f:'dar-sas',s:1.15,ar:'دار ساس الأمنية',en:'Dar SAS Security'}
];
const logoImg = c =>
  `<img src="assets/clients/${c.f}.webp" alt="${c.en}" style="--s:${c.s}" loading="lazy" decoding="async">`;

/* ─────────── الترويسة ─────────── */
const NAV = [
  {href:'index.html',    ar:'الرئيسية', en:'Home'},
  {href:'about.html',    ar:'من نحن',   en:'About'},
  {href:'services.html', ar:'الخدمات',  en:'Services'},
  {href:'portfolio.html',ar:'الأعمال',  en:'Work'},
  {href:'blog.html',     ar:'المدونة',  en:'Blog'},
  {href:'contact.html',  ar:'تواصل معنا',en:'Contact'}
];

function buildHeader(current){
  const links = NAV.map(n=>{
    const on = n.href===current ? ' on' : '';
    const hide = n.href==='blog.html' ? ' hide-md' : '';
    return `<a class="lnk${on}${hide}" href="${n.href}" data-ar="${n.ar}" data-en="${n.en}">${n.ar}</a>`;
  }).join('');
  return `<header class="site" id="hd">
    <a href="index.html" class="mark" aria-label="${BRAND.name}">
      <img src="assets/logo-mark.svg" alt="${BRAND.name}"></a>
    <nav class="mainnav">${links}</nav>
    <div class="hactions">
      <button class="langbtn" id="lang">EN</button>
      <a href="contact.html" class="quote hide-md" data-ar="تواصل معنا" data-en="Get in touch">تواصل معنا</a>
      <button class="burger" id="burger" aria-label="القائمة"><span></span><span></span></button>
    </div>
  </header>
  <div class="mobnav" id="mobnav"><nav>${links}</nav>
    <a href="contact.html" class="btn fill" data-ar="تواصل معنا" data-en="Get in touch">تواصل معنا</a></div>`;
}

const SOCIAL_SVG = {
  ig:'<path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.42.4.68.8.9 1.4.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2a3.9 3.9 0 0 1-.9 1.4c-.4.42-.8.68-1.4.9-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.4-.42.8-.68 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8Zm0 10.55a4.15 4.15 0 1 1 0-8.3 4.15 4.15 0 0 1 0 8.3Zm8.15-10.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>',
  vm:'<path d="M22 7.4c-.1 2.1-1.6 5-4.4 8.7-2.9 3.9-5.4 5.8-7.4 5.8-1.2 0-2.3-1.2-3.1-3.5L5.4 12c-.6-2.3-1.3-3.5-2-3.5-.2 0-.7.3-1.5.9L1 8.2c1-.8 1.9-1.7 2.8-2.6C5.1 4.5 6.1 4 6.7 3.9c1.5-.1 2.5.9 2.8 3.1.4 2.4.7 3.8.8 4.4.4 2 .9 3 1.4 3 .4 0 1-.6 1.8-1.9.8-1.3 1.2-2.2 1.3-2.9.1-1-.3-1.5-1.3-1.5-.5 0-.9.1-1.4.3 1-3.1 2.8-4.6 5.5-4.5 2 .1 2.9 1.4 2.8 3.9Z"/>',
  be:'<path d="M9.3 5.8c.7 0 1.4.06 2 .18.6.12 1.1.32 1.5.6.4.28.75.66.98 1.13.23.47.35 1.06.35 1.75 0 .75-.17 1.37-.5 1.87-.35.5-.85.9-1.5 1.2.9.26 1.58.72 2.03 1.37.45.65.67 1.44.67 2.36 0 .74-.14 1.38-.43 1.92-.29.54-.68.98-1.16 1.32-.49.34-1.05.6-1.68.76-.63.16-1.28.24-1.94.24H2V5.8h7.3Zm-.42 5.6c.6 0 1.1-.14 1.49-.43.39-.29.58-.75.58-1.4 0-.36-.06-.65-.19-.88a1.35 1.35 0 0 0-.51-.53 2.1 2.1 0 0 0-.73-.26 4.9 4.9 0 0 0-.86-.07H5.1v3.57h3.78Zm.2 5.9c.33 0 .65-.03.95-.1.3-.06.57-.17.8-.32.23-.15.41-.36.55-.62.14-.26.2-.6.2-1.01 0-.8-.22-1.37-.67-1.71-.45-.35-1.04-.52-1.78-.52H5.1v4.28h3.98ZM17.3 17.2c.42.4 1.02.61 1.8.61.57 0 1.05-.14 1.46-.42.4-.29.65-.59.75-.9h2.2c-.36 1.1-.9 1.88-1.63 2.35-.73.47-1.62.7-2.66.7-.72 0-1.38-.11-1.96-.35a4.1 4.1 0 0 1-1.48-1 4.4 4.4 0 0 1-.94-1.55 5.9 5.9 0 0 1-.33-2c0-.71.11-1.37.34-1.98a4.6 4.6 0 0 1 .96-1.57c.42-.44.92-.79 1.5-1.04a4.9 4.9 0 0 1 1.93-.38c.8 0 1.5.15 2.1.46.6.31 1.09.73 1.47 1.25.38.52.65 1.12.82 1.79.16.67.22 1.37.17 2.1h-6.79c0 .8.24 1.53.66 1.93Zm3.16-5.24c-.34-.36-.9-.56-1.6-.56-.46 0-.85.08-1.15.24-.3.15-.55.35-.73.58-.19.23-.32.47-.39.73-.07.25-.11.48-.13.68h4.2c-.12-.75-.36-1.31-.7-1.67ZM16.1 6.9h5.24v1.4H16.1V6.9Z"/>',
  li:'<path d="M6.94 5.5a2.06 2.06 0 1 1-4.12 0 2.06 2.06 0 0 1 4.12 0ZM3.1 21.5h3.6V8.9H3.1v12.6ZM14.6 8.6c-1.9 0-2.9 1-3.4 1.8h-.05V8.9H7.7c.05 1 0 12.6 0 12.6h3.5v-7c0-.34.02-.67.12-.91.27-.66.87-1.35 1.9-1.35 1.34 0 1.87 1 1.87 2.5v6.76h3.5v-7.17c0-3.24-1.73-4.73-4.04-4.73Z"/>'
};
const soc=(k,u,l)=>`<a href="${u}" target="_blank" rel="noopener" aria-label="${l}" title="${l}">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${SOCIAL_SVG[k]}</svg></a>`;

function buildFooter(){
  return `<footer class="site">
    <div class="wrap" style="padding-inline:0">
      <div class="flogo"><img src="assets/logo-full.svg" alt="${BRAND.name}"></div>
      <div class="fgrid">
        <div class="fcol">
          <b data-ar="البريد الإلكتروني" data-en="EMAIL">البريد الإلكتروني</b>
          <a href="mailto:${BRAND.email}"><bdi dir="ltr">${BRAND.email}</bdi></a>
        </div>
        <div class="fcol">
          <b data-ar="الرياض — السعودية" data-en="RIYADH — SAUDI ARABIA">الرياض — السعودية</b>
          <a href="tel:+966567561619"><bdi dir="ltr">+966 56 756 1619</bdi></a>
          <a href="tel:+966531473116"><bdi dir="ltr">+966 53 147 3116</bdi></a>
        </div>
        <div class="fcol">
          <b data-ar="إسطنبول — تركيا" data-en="ISTANBUL — TURKEY">إسطنبول — تركيا</b>
          <a href="tel:+905412347978"><bdi dir="ltr">+90 541 234 79 78</bdi></a>
          <a href="tel:+905444888238"><bdi dir="ltr">+90 544 488 82 38</bdi></a>
        </div>
        <div class="fcol">
          <b data-ar="تابعنا" data-en="FOLLOW US">تابعنا</b>
          <div class="socials">
            ${soc('ig','https://www.instagram.com/blue_prohouse/','Instagram')}
            ${soc('vm','https://vimeo.com/user184653941','Vimeo')}
            ${soc('be','https://www.behance.net/blueprohouse','Behance')}
            ${soc('li','https://www.linkedin.com/company/blue-production-house','LinkedIn')}
          </div>
        </div>
      </div>
      <p class="fnote"><bdi dir="ltr">© 2026 ${BRAND.name}</bdi> — <bdi>${BRAND.domain}</bdi></p>
    </div>
  </footer>`;
}

/* ── الشريط المتحرك — الصفحة الرئيسية فقط ── */
function marqLine(words, lang, back){
  const unit = words.map((w,i)=>
    `<span class="w ${lang}" style="opacity:${OPACITY[i%OPACITY.length]}">${w}</span><span class="dash">—</span>`
  ).join('');
  const grp = `<div class="mgroup">${unit}</div>`;
  return `<div class="mline"><div class="mtrack${back?' back':''}">${grp}${grp}</div></div>`;
}
function buildMarquee(){
  return `<section class="marq">
    ${marqLine(FIELDS_AR,'ar',false)}
    ${marqLine(FIELDS_EN,'en',true)}
    <div class="mcta">
      <a href="contact.html" class="btn"><span data-ar="تواصل معنا" data-en="Get in touch">تواصل معنا</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M7 17 17 7M9 7h8v8"/></svg></a>
    </div>
  </section>`;
}

/* ── مراحل العمل: خط واحد يمرّ بالمراحل الأربع ── */
function buildStages(){
  return `<ol class="stages">
    ${STAGES.map((s,i)=>`<li class="stage" style="--i:${i}">
      <span class="stage-k">${String(i+1).padStart(2,'0')}</span>
      <span class="stage-n" data-ar="${s.ar}" data-en="${s.en}">${s.ar}</span>
      <h3 class="stage-p" data-ar="${s.par}" data-en="${s.pen}">${s.par}</h3>
      <p class="stage-d" data-ar="${s.dar}" data-en="${s.den}">${s.dar}</p>
    </li>`).join('')}
  </ol>`;
}

/* ── أيقونة الفكرة: علامة استفهام بثلاث شُرَط متدرّجة ── */
const IDEA_SVG = `<svg class="idea" viewBox="0 0 120 120" fill="none" aria-hidden="true"
  stroke="currentColor" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round">
  <path class="qhook" d="M30 42a20 20 0 1 1 27 18.8V70"/>
  <circle class="qdot" cx="57" cy="87" r="5" fill="currentColor" stroke="none"/>
  <path class="ray r1" d="M88.1 47.0L72.1 40.6" stroke-width="6.5"/>
  <path class="ray r2" d="M84.9 29.1L68.9 36.1" stroke-width="7.5"/>
  <path class="ray r3" d="M76.2 16.4L65.2 29.6" stroke-width="7.5"/>
</svg>`;

/* رسم تجريدي متحرك بجانب الدعوة. خط واحد متصل يرسم اللمبة (الفكرة)، ثم يتفكّك ويسافر
   فيرسم الكاميرا، فيظهر موقع التصوير وREC. وفي الحلقة يعود الخط من الكاميرا ليصير فكرة جديدة */
/* خط واحد بلا رفع للقلم: المتصفح يعيد نمط التقطيع عند كل M، فيجب أن يبقى مساراً واحداً */
const CTA_LINE={
  bulb:'M200 73C198 66 190 62 190 51C190 42 197 36 206 36C215 36 222 43 222 52C222 62 214 66 212 73C208 74 204 74 200 73C201 75 201 77 201 78C204 79 208 79 211 78',
  thread:'C192 88 172 38 132 48C110 54 96 72 92 98',
  /* بكرتان كقوسين فوق الجسم، ثم الجسم والعدسة، وينتهي حيث بدأ — بلا تقاطعات */
  cam:'C91 85 74 84 72 97C71 98 70 98 69 97C68 85 52 85 50 98C49 108 47 118 49 127C64 129 78 127 92 128'+
      'C92 125 92 123 92 121C97 123 102 126 106 128C107 118 105 108 106 98C101 101 96 103 92 106C92 103 93 101 92 98'
};
function runCtaVis(v){
  const line=v.querySelector('.line');
  const len=d=>{ const t=document.createElementNS('http://www.w3.org/2000/svg','path');
    t.setAttribute('d',d); line.parentNode.appendChild(t); const L=t.getTotalLength(); t.remove(); return L; };
  const Lb=len(CTA_LINE.bulb), Lt=len('M211 78'+CTA_LINE.thread), T=Lb+Lt+len('M92 98'+CTA_LINE.cam);
  /* نافذة مرئية [s,e] تنزلق على الخط */
  const win=(s,e)=>{ line.style.visibility=e-s<.5?'hidden':'visible';
    line.style.strokeDasharray=`${Math.max(e-s,.001)} ${T*3}`; line.style.strokeDashoffset=-s; };
  const on=(c,x=true)=>v.classList.toggle(c,x);
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){
    win(Lb+Lt,T); ['fig','set','rec'].forEach(c=>on(c)); return;
  }
  win(0,0);
  const SP=.7;   // معامل السرعة: 0.7 = أسرع بـ30%
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  const tween=(a,b,ms)=>new Promise(r=>{ const t0=performance.now(); ms*=SP;
    const f=now=>{ const k=Math.min((now-t0)/ms,1), q=ease(k);
      win(a[0]+(b[0]-a[0])*q, a[1]+(b[1]-a[1])*q); k<1?requestAnimationFrame(f):r(); };
    requestAnimationFrame(f); });
  const wait=ms=>new Promise(r=>setTimeout(r,ms*SP));
  const play=async()=>{
    on('fig'); await wait(1300);
    await tween([0,0],[0,Lb],1200);                         // الفكرة تُرسم
    for(;;){
      on('lit'); await wait(1700); on('lit',false); await wait(250);
      await tween([0,Lb],[Lb+Lt,T],2400);                   // تتفكّك وترسم الكاميرا
      on('set'); await wait(900); on('rec'); await wait(3200);
      on('rec',false); await wait(450); on('set',false); await wait(800);
      await tween([Lb+Lt,T],[0,Lb],2400);                   // تعود فكرة جديدة
    }
  };
  const io=new IntersectionObserver(es=>{ if(es[0].isIntersecting){ io.disconnect(); play(); } },{threshold:.3});
  io.observe(v);
}

function buildCTA(){
  return `<section class="cta rev"><div class="wrap">
    <div class="cta-in">
      <div class="cta-txt">
        <h2 class="big">
          <span data-ar="لديك فكرة؟" data-en="GOT AN IDEA?">لديك فكرة؟</span>
          <span class="two" data-ar="فلنحوّلها إلى واقع." data-en="LET'S MAKE IT REAL.">فلنحوّلها إلى واقع.</span>
        </h2>
        <p data-ar="تواصل معنا وشاركنا تفاصيل مشروعك، لنقدّم لك العرض الأنسب لفكرتك وأهدافك."
           data-en="Get in touch and share the details of your project, and we'll put together the offer that best fits your idea and goals.">
          تواصل معنا وشاركنا تفاصيل مشروعك، لنقدّم لك العرض الأنسب لفكرتك وأهدافك.</p>
        <div class="cta-acts">
          <a class="btn fill lg" href="contact.html">
            <span data-ar="أرسل رسالة" data-en="Send a message">أرسل رسالة</span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17 17 7M9 7h8v8"/></svg></a>
          <a class="btn lg" href="https://wa.me/966567561619" target="_blank" rel="noopener">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.2 1.3-2 1.4-.5.1-1.2.1-3.6-.8-3-1.3-5-4.4-5.1-4.6-.2-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1-2.5.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.2c.1.2.2.4 0 .7l-.4.5-.3.3c-.1.1-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.3.1.2.1.8-.1 1.5Z"/></svg>
            <span data-ar="واتساب مباشر" data-en="WhatsApp us">واتساب مباشر</span></a>
        </div>
      </div>
      <div class="cta-vis" aria-hidden="true">
        <svg viewBox="0 0 320 200" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <g>
            <path class="d fig" pathLength="1" d="M22 170C80 167 140 172 196 169C240 167 276 171 300 169"/>
            <path class="d fig" pathLength="1" style="transition-delay:0.14s" d="M206 85C211 85 215 89 215 94C215 99 211 103 206 103C200 103 197 99 197 94C197 89 201 85 207 86"/>
            <path class="d fig" pathLength="1" style="transition-delay:0.28s" d="M206 103C204 114 208 126 206 137C203 148 199 158 196 169M206 137C210 147 213 158 217 169"/>
            <path class="d fig" pathLength="1" style="transition-delay:0.39s" d="M193 129C197 123 201 116 206 112C211 108 215 104 219 98"/>
            <path class="glow" d="M200 73C199 66 190 62 190 51C190 42 197 36 206 36C215 36 222 43 222 52C222 62 213 66 212 73Z"/>
            <path class="d ray" pathLength="1" d="M206 27V20M225 33L230 28M187 33L182 28M232 51H239M180 51H173"/>
            <path class="line" d="${CTA_LINE.bulb}${CTA_LINE.thread}${CTA_LINE.cam}"/>
            <path class="d set acc" pathLength="1" d="M70 129C66 144 60 157 54 169M70 129C74 144 80 157 86 169"/>
            <path class="d set" pathLength="1" style="transition-delay:0.14s" d="M266 170C272 168 280 168 287 170M276 169C275 145 278 120 276 97C268 98 263 97 261 96C264 89 266 82 268 76C273 75 279 75 284 76C286 83 288 90 290 96C286 97 281 97 276 97"/>
            <path class="d set dim" pathLength="1" style="transition-delay:0.21s" d="M262 99C254 108 244 118 234 129"/>
            <path class="d set acc" pathLength="1" style="transition-delay:0.32s" d="M168 51C168 47 168 43 169 40C172 40 176 40 180 40M234 40C238 40 242 40 246 41C246 44 246 47 246 51M246 158C246 162 246 166 245 169C242 170 238 170 234 170M180 170C176 170 172 170 169 169C168 166 168 162 168 158"/>
            <path class="d rec acc dim" pathLength="1" d="M107 99C126 82 146 64 166 48M107 127C126 140 146 152 166 164"/>
          </g>
          <circle class="dot" cx="24" cy="22" r="4.5"/>
          <text class="rtx" x="34" y="26.5" direction="ltr" text-anchor="start">REC</text>
        </svg>
      </div>
    </div>
  </div></section>`;
}

/* ── شريط شعارات العملاء ── */
function buildLogos(){
  const row = CLIENTS.map(c=>`<span class="lg">${logoImg(c)}</span>`).join('');
  return `<section class="clients"><div class="cl-track">
    <div class="cl-grp">${row}</div><div class="cl-grp" aria-hidden="true">${row}</div></div></section>`;
}

function buildMockbar(){
  return `<div class="mockbar">
    <span class="mb-fonts">خط القائمة:
      <button data-nf="plex" class="on">1</button>
      <button data-nf="almarai">2</button>
      <button data-nf="tajawal">3</button></span>
    <span class="mb-links"><a href="index.html">الرئيسية</a> · <a href="about.html">من نحن</a> ·
      <a href="services.html">الخدمات</a> · <a href="service.html?s=motion">خدمة</a> ·
      <a href="portfolio.html">الأعمال</a> · <a href="project.html">مشروع</a> ·
      <a href="blog.html">المدونة</a> · <a href="article.html">مقال</a> ·
      <a href="contact.html">تواصل</a> · <a href="404.html">404</a></span>
  </div>`;
}

function tile(p, size=''){
  return `<a href="project.html?w=${p.slug}" class="tile ${size}" data-k="${p.k}">
    <img src="${p.img}" alt="" loading="lazy" decoding="async">
    <span class="play"><svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg></span>
    <span class="ov"><span class="c" data-ar="${p.car}" data-en="${p.cen}">${p.car}</span>
    <span class="t" data-ar="${p.ar}" data-en="${p.en}">${p.ar}</span></span></a>`;
}

/* يوزّع أحجام البلاطات الظاهرة بصفوف مجموعها 6 أعمدة دائماً، فلا تبقى فراغات
   مهما كان العدد أو الفلتر. الصف الأخير الناقص يتمدّد ليملأ العرض */
const ROWS=[[4,2],[3,3],[2,2,2],[2,4],[3,3],[2,2,2]];
const SPAN={2:'s-md',3:'s-wd',4:'s-lg',6:'s-fl'};
function layMosaic(box){
  if(!box) return;
  const ts=[...box.querySelectorAll('.tile:not(.hide)')];
  let i=0,r=0;
  while(i<ts.length){
    const left=ts.length-i;
    let row=ROWS[r++%ROWS.length];
    if(left<row.length) row=left===1?[6]:[3,3];
    row.forEach(n=>{ const t=ts[i++]; t.classList.remove('s-md','s-wd','s-lg','s-fl'); t.classList.add(SPAN[n]); });
  }
}
window.layMosaic=layMosaic;

/* ─────────── التشغيل ─────────── */
document.addEventListener('DOMContentLoaded',()=>{
  const page = document.body.dataset.page || 'index.html';
  const isHome = page === 'index.html';

  const hSlot=document.getElementById('slot-header'); if(hSlot) hSlot.outerHTML=buildHeader(page);
  /* الشريط في الرئيسية فقط */
  document.querySelectorAll('[data-slot="marquee"]').forEach(s=>{
    if(isHome) s.outerHTML=buildMarquee(); else s.remove();
  });
  document.querySelectorAll('[data-slot="logos"]').forEach(s=>s.outerHTML=buildLogos());
  document.querySelectorAll('[data-slot="stages"]').forEach(s=>s.outerHTML=buildStages());
  document.querySelectorAll('[data-slot="cta"]').forEach(s=>s.outerHTML=buildCTA());
  document.querySelectorAll('.cta-vis').forEach(runCtaVis);
  const fSlot=document.getElementById('slot-footer'); if(fSlot) fSlot.outerHTML=buildFooter();
  document.body.insertAdjacentHTML('beforeend',buildMockbar());

  /* المؤشر */
  const cur=document.createElement('div'); cur.className='cur';
  const ring=document.createElement('div'); ring.className='cur-ring';
  document.body.append(cur,ring);
  let mx=0,my=0,rx=0,ry=0;
  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;
    cur.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`});
  (function loop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;
    ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(loop)})();
  document.addEventListener('mouseover',e=>
    document.body.classList.toggle('hot',!!e.target.closest('a,button,summary,input,textarea,select')));

  const g=document.createElement('div'); g.className='grain'; document.body.appendChild(g);

  /* القائمة على الموبايل */
  const burger=document.getElementById('burger'), mob=document.getElementById('mobnav');
  if(burger) burger.onclick=()=>{
    const open=document.body.classList.toggle('navopen');
    document.body.style.overflow=open?'hidden':'';
  };
  if(mob) mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    document.body.classList.remove('navopen'); document.body.style.overflow='';
  }));

  /* تثبيت الترويسة */
  const hd=document.getElementById('hd');
  const hero=document.querySelector('.hero,.about-hero');
  if(hd && !hero) hd.classList.add('solid');
  addEventListener('scroll',()=>{
    if(hd && hero) hd.classList.toggle('stuck',scrollY>innerHeight*.8);
  },{passive:true});

  const io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&x.target.classList.add('on')),
    {threshold:.1});
  /* يراقب أي عنصر .rev — بما فيه ما يُضاف لاحقاً بالجافاسكريبت */
  window.revealScan=()=>document.querySelectorAll('.rev:not([data-obs])').forEach(e=>{
    e.setAttribute('data-obs','1'); io.observe(e);
  });
  window.revealScan();
  /* خط المراحل يُرسم عند الظهور؛ بدون جافاسكريبت يبقى مرسوماً */
  document.querySelectorAll('.stages').forEach(s=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    s.classList.add('armed'); io.observe(s);
  });
  /* بيانات الرؤية والرسالة تظهر صفاً صفاً؛ بدون جافاسكريبت تبقى ظاهرة */
  document.querySelectorAll('.vm-row').forEach(r=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    r.classList.add('armed'); io.observe(r);
  });
  setTimeout(()=>window.revealScan(),0);
  setTimeout(()=>window.revealScan(),250);

  /* الفلاتر */
  document.querySelectorAll('[data-filters]').forEach(box=>{
    const target=document.querySelector(box.dataset.filters);
    box.innerHTML=CATS.map((c,i)=>
      `<button class="${i===0?'on':''}" data-k="${c.k}" data-ar="${c.ar}" data-en="${c.en}">${c.ar}</button>`).join('');
    box.addEventListener('click',e=>{
      const b=e.target.closest('button'); if(!b) return;
      box.querySelectorAll('button').forEach(x=>x.classList.remove('on')); b.classList.add('on');
      target.querySelectorAll('.tile').forEach(t=>
        t.classList.toggle('hide', b.dataset.k!=='all' && t.dataset.k!==b.dataset.k));
      layMosaic(target);
    });
  });

  /* اللغة */
  const apply=ar=>{
    document.documentElement.lang=ar?'ar':'en';
    document.documentElement.dir=ar?'rtl':'ltr';
    const b=document.getElementById('lang'); if(b) b.textContent=ar?'EN':'ع';
    document.querySelectorAll('[data-ar]').forEach(el=>el.textContent=ar?el.dataset.ar:el.dataset.en);
  };
  let isAr=true;
  try{ isAr = localStorage.getItem('bph_lang')!=='en'; }catch(e){}
  apply(isAr);
  const lb=document.getElementById('lang');
  if(lb) lb.onclick=()=>{ isAr=!isAr; try{localStorage.setItem('bph_lang',isAr?'ar':'en')}catch(e){} apply(isAr); };
  window.applyLang=()=>apply(isAr);
  setTimeout(()=>apply(isAr),0);

  /* مبدّل خط القائمة (للتجربة فقط) */
  const nfBox=document.querySelector('.mb-fonts');
  const setNF=v=>{ document.documentElement.dataset.navfont=v;
    try{localStorage.setItem('bph_navfont',v)}catch(e){}
    nfBox && nfBox.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.nf===v)); };
  let nf='plex'; try{ nf=localStorage.getItem('bph_navfont')||'plex'; }catch(e){}
  setNF(nf);
  if(nfBox) nfBox.addEventListener('click',e=>{
    const b=e.target.closest('button'); if(b) setNF(b.dataset.nf);
  });
});
