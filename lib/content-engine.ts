import { Service, City } from './types';
import { company } from './data/company';

// Content engine: generates unique, human-like Arabic content for every
// service + city combination. Uses the city's climate, context, landmarks,
// and building types to make each page genuinely relevant without
// keyword stuffing or duplicate paragraphs.

function withCitySuffix(serviceName: string, cityName: string): string {
  // Attach city with "بـ" for grammar (بـ + city with leading ال stays as بـ + city)
  if (cityName.startsWith('ال')) {
    return `${serviceName} ب${cityName}`;
  }
  return `${serviceName} ب${cityName}`;
}

export interface ServiceCityContent {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  cityDescription: string;
  whyCity: string;
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  cta: string;
  relatedText: string;
  imageAlt: string;
  keywords: string[];
}

// Sentence-level variety helpers — rotate phrasing deterministically
// by hashing the service+city slugs so the same combination always
// produces the same output but different combinations read differently.

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], seed: string, salt: number = 0): T {
  return arr[(hash(seed) + salt) % arr.length];
}

export function generateServiceCityContent(
  service: Service,
  city: City
): ServiceCityContent {
  const key = `${service.slug}-${city.slug}`;
  const full = withCitySuffix(service.name, city.name);

  const introOpeners = [
    `تقدم شركة السدر العربية للمقاولات خدمة ${service.name} في ${city.name} بخبرة تتجاوز 15 عامًا في servicing المنشآت السكنية والتجارية والصناعية.`,
    `إذا كنت تبحث عن خدمة ${service.name} في ${city.name} تنفذها فرق محترفة ومعدات حديثة، فإن شركة السدر العربية للمقاولات خيارك الموثوق.`,
    `خدمة ${service.name} في ${city.name} من شركة السدر العربية للمقاولات تجمع بين الخبرة والاحتراف لضمان نتائج تفوق توقعاتك.`,
    `في ${city.name}، تبرز شركة السدر العربية للمقاولات كاسم رائد في ${service.name}، بفضل فريقها المتخصص والتزامها بمعايير الجودة العالمية.`,
    `تستهدف خدمة ${service.name} في ${city.name} التي تقدمها شركة السدر العربية للمقاولات تلبية احتياجات سكان ${city.name} ومنشآتها باحترافية تامة.`,
  ];

  const introConnectors = [
    `يتميز ${city.name} بـ${city.context.split('،')[0]}،`,
    `نظرًا لطبيعة ${city.name} التي ${city.context.split('،')[1] ?? 'تتميز بتنوع منشآتها'}،`,
    `ومع خصوصية ${city.name} حيث ${city.context.split('،')[0]}،`,
    `وبما أن ${city.name} ${city.context.split('،')[0]}،`,
  ];

  const introEndings = [
    `فإننا نكيّف أساليبنا لتناسب بيئتها ومنشآتها وتضمن لك أفضل النتائج.`,
    `فإننا نراعي ظروفها البيئية في كل خطوة من خطوات العمل.`,
    `فإن خدماتنا مصممة لتلائم احتياجاتها بدقة وتتفادى تأثير العوامل المحيطة.`,
    `فإننا نقدم حلولاً مخصصة تراعى ظروفها ومناخها واحتياجات مرتاديها.`,
  ];

  const intro = `${pick(introOpeners, key)} ${pick(introConnectors, key, 7)} ${pick(introEndings, key, 13)}`;

  // City-specific detailed description
  const cityDescOpeners = [
    `تتطلب ${service.name} في ${city.name} فهماً عميقاً لطبيعة المدينة ومنشآتها. `,
    `في ${city.name}، يأخذ ${service.name} بعدًا خاصًا يختلف عن غيره من المدن. `,
    `تتميز ${service.name} في ${city.name} بخصوصية تنبع من طبيعة المدينة. `,
    `عند تنفيذ ${service.name} في ${city.name}، نولي اهتمامًا خاصًا لظروف المدينة المحيطة. `,
  ];

  const climateMap: Record<string, string> = {
    'glass-facade-cleaning': `إن ${city.climate.split('،')[0]} في ${city.name} يزيد من تراكم ${pick(['الأتربة', 'الرواسب', 'الأوساخ'], key, 1)} على الواجهات الزجاجية، ما يستدعي تنظيفًا دوريًا بمواد متخصصة لا تضر بالزجاج العاكس أو الإطارات المطاطية.`,
    'water-tank-cleaning': `إن ${city.climate.split('،')[0]} في ${city.name} قد يسرّع تكوّن ${pick(['الطحالب', 'الرواسب', 'الصدأ'], key, 2)} في الخزانات، ما يجعل التنظيف الدوري أكثر إلحاحًا للحفاظ على صحة المياه.`,
    'water-tank-sterilization': `إن ${city.climate.split('،')[0]} في ${city.name} قد يسرّع نمو البكتيريا في الخزانات، ما يجعل التعقيم الدوري ضرورة صحية للحفاظ على سلامة المياه.`,
    'pest-control': `إن ${city.climate.split('،')[0]} في ${city.name} يوفر بيئة مناسبة ${pick(['لانتشار الحشرات', 'لتكاثر الآفات', 'لظهور الإصابات'], key, 3)}، ما يستدعي برامج مكافحة وقائية منتظمة طوال العام.`,
    'termite-control': `إن ${city.climate.split('،')[0]} في ${city.name} قد يهيئ بيئة مناسبة للنمل الأبيض، ما يجعل الكشف الدوري والوقاية أمرًا حاسمًا لحماية المنشآت.`,
    'mosquito-control': `إن ${city.climate.split('،')[0]} في ${city.name} يهيئ بيئة مناسبة لتكاثر البعوض، ما يستدعي رشًا وقائيًا ومعالجة لمواطن التكاثر.`,
    'marble-grinding': `إن ${city.climate.split('،')[0]} في ${city.name} يؤثر على حالة رخام الأرضيات، ما يجعل الجلي الدوري ضروريًا لاستعادة لمعان الرخام وحمايته من التصبغات.`,
    'marble-polishing': `إن ${city.climate.split('،')[0]} في ${city.name} قد يقلل لمعان الرخام مع الوقت، ما يجعل التلميع الدوري ضروريًا لإبراز فخامة الأرضيات.`,
    'sterilization': `إن ${city.climate.split('،')[0]} في ${city.name} وكثافة المرتادين يستدعيان تعقيمًا دوريًا للأسطح ومناطق اللمس للحفاظ على بيئة صحية.`,
    'carpet-cleaning': `إن ${city.climate.split('،')[0]} في ${city.name} يؤثر على تراكم الغبار في السجاد، ما يستدعي تنظيفًا دوريًا وتعقيمًا للألياف.`,
    'sofa-cleaning': `إن ${city.climate.split('،')[0]} في ${city.name} يؤثر على تراكم الغبار في الكنب، ما يستدعي تنظيفًا دوريًا وتعقيمًا للأقمشة.`,
    'post-construction-cleaning': `إن ${city.climate.split('،')[0]} في ${city.name} يزيد من تراكم الأتربة بعد البناء، ما يستدعي تنظيفًا شاملاً ومتخصصًا قبل الاستلام.`,
  };

  const cityDescBody = `${city.context} ${climateMap[service.slug] ?? `إن ${city.climate.split('،')[0]} في ${city.name} يفرض اعتبارات خاصة عند تنفيذ ${service.name}، ما يجعل اختيار فريق يفهم البيئة المحلية أمرًا ضروريًا.`}`;

  const cityDescLandmarks = ` ونحن في شركة السدر العربية للمقاولات نخدم منشآت ${city.name} القريبة من ${city.landmarks.slice(0, 2).join(' و')} والأحياء السكنية والتجارية المحيطة، بفريق يعرف تفاصيل المدينة واحتياجات مرتاديها.`;

  const cityDescription = `${pick(cityDescOpeners, key, 19)}${cityDescBody}${cityDescLandmarks}`;

  // Why customers in this city choose the service
  const whyCityOpeners = [
    `يختار عملاؤنا في ${city.name} خدمة ${service.name} من شركتنا لعدة أسباب جوهرية:`,
    `يهتم عملاؤنا في ${city.name} بطلب ${service.name} من السدر العربية لأننا نقدم:`,
    `في ${city.name}، يثق العملاء بخدمة ${service.name} التي نقدمها بفضل:`,
    `يلجأ عملاؤنا في ${city.name} إلى خدمتنا في ${service.name} بسبب:`,
  ];

  const whyCityReasons = [
    `فهمنا العميق لطبيعة ${city.name} ومناخها ومنشآتها، ما يمكّننا من تقديم حلول مخصصة لا حلول جاهزة.`,
    `فريق محترف مدرّب على التعامل مع ${pick(['الأبراج', 'الفلل', 'المنشآت', 'المجمعات'], key, 5)} المنتشرة في ${city.name}.`,
    `استخدامنا لمواد ومعدات متخصصة تتناسب مع ${city.climate.split('،')[0]} في ${city.name}.`,
    `التزامنا بالمواعيد ومراعاة خصوصية ${city.name} وأحيائها ومرتاديها.`,
    `تغطيتنا لكل أحياء ${city.name} وضواحيها بسرعة استجابة عالية.`,
    `ضماننا الموثق على الخدمة ومتابعتنا الدورية بعد التنفيذ.`,
  ];

  const whyCity = `${pick(whyCityOpeners, key, 23)} ${whyCityReasons.slice(0, 4).join(' ')}`;

  // Benefits — reuse service benefits but prefix city context to one of them
  const benefits = [
    ...service.benefits.slice(0, 3),
    `حلول مخصصة لـ${city.name} تراعى ${city.climate.split('،')[0]} وطبيعة منشآتها.`,
    `فريق يعرف تفاصيل ${city.name} وأحياءها وسرعة وصول إليها.`,
  ];

  // Process — adapt descriptions to city context lightly
  const process = service.process.map((step, i) => ({
    title: step.title,
    description:
      i === 0
        ? `${step.description} في ${city.name} نراعي خصوصية كل موقع وطبيعة المنشأة.`
        : step.description,
  }));

  // FAQs — city-specific
  const faqCityQ1 = [
    `كم تكلفة ${service.name} في ${city.name}؟`,
    `ما سعر ${service.name} في ${city.name}؟`,
    `كيف أحصل على عرض سعر لـ${service.name} في ${city.name}؟`,
  ];
  const faqCityA1 = `يختلف السعر حسب مساحة الموقع ونوع الخدمة وحالة المنشأة. يمكنك الحصول على عرض سعر مجاني عبر الاتصال بنا أو تعبئة نموذج التواصل، وسيقوم فريقنا بمعاينة الموقع في ${city.name} وتقديم عرض تفصيلي خلال 24 ساعة.`;

  const faqCityQ2 = [
    `كم تستغرق ${service.name} في ${city.name}؟`,
    `كم من الوقت يحتاج ${service.name} في ${city.name}؟`,
    `ما مدة تنفيذ ${service.name} في ${city.name}؟`,
  ];
  const faqCityA2 = `تختلف المدة حسب حجم الموقع ودرجة العمل المطلوب. للمواقع المتوسطة في ${city.name} تستغرق الخدمة عادةً من بضع ساعات إلى يوم عمل، بينما المنشآت الكبيرة قد تحتاج أيامًا. نحدد المدة بدقة بعد المعاينة.`;

  const faqCityQ3 = [
    `هل تغطون كل أحياء ${city.name}؟`,
    `هل تقدمون ${service.name} في كل مناطق ${city.name}؟`,
    `ما مناطق تغطيتكم في ${city.name}؟`,
  ];
  const faqCityA3 = `نعم، نقدم ${service.name} في كل أحياء ${city.name} وضواحيها والمناطق المحيطة بها، مع سرعة استجابة عالية وفريق جاهز للوصول إلى موقعك في الوقت المناسب.`;

  const faqs = [
    { question: pick(faqCityQ1, key, 29), answer: faqCityA1 },
    { question: pick(faqCityQ2, key, 31), answer: faqCityA2 },
    { question: pick(faqCityQ3, key, 37), answer: faqCityA3 },
    ...service.faqs.slice(0, 2),
  ];

  const ctaOpeners = [
    `احجز خدمة ${service.name} في ${city.name} اليوم`,
    `اطلب ${service.name} في ${city.name} الآن`,
    `تواصل معنا لـ${service.name} في ${city.name}`,
    `لا تؤجل ${service.name} في ${city.name} أكثر من ذلك`,
  ];

  const cta = `${pick(ctaOpeners, key, 41)} واحصل على عرض سعر مجاني خلال 24 ساعة. فريقنا في ${city.name} جاهز لخدمتك بكل احترافية.`;

  const relatedText = `روابط ذات صلة: ${service.name} في مدن أخرى قريبة من ${city.name}، وخدمات مشابهة قد تهمك.`;

  const imageAlt = `${service.name} في ${city.name} - شركة السدر العربية للمقاولات`;

  const keywords = [
    `${service.name} ${city.name}`,
    `${service.shortName} ب${city.name}`,
    `شركة ${service.shortName} ${city.name}`,
    ...service.keywords.map((k) => `${k} ${city.name}`),
  ];

  const seoTitle = `${service.name} ب${city.name} | شركة السدر العربية للمقاولات`;
  const metaDescription = `${service.name} في ${city.name} بفرق محترفة ومعدات حديثة وضمان موثق. ${company.name} - خبرة 15 عامًا في servicing المنشآت السكنية والتجارية والصناعية. اطلب عرض سعر مجاني.`;
  const h1 = `${service.name} ب${city.name}`;

  return {
    seoTitle,
    metaDescription,
    h1,
    intro,
    cityDescription,
    whyCity,
    benefits,
    process,
    faqs,
    cta,
    relatedText,
    imageAlt,
    keywords,
  };
}

// Generate city-level SEO content (for /cities/[slug] pages)
export function generateCityContent(city: City) {
  const seoTitle = `خدمات النظافة في ${city.name} | شركة السدر العربية للمقاولات`;
  const metaDescription = `شركة السدر العربية للمقاولات تقدم جميع خدمات النظافة في ${city.name}: تنظيف واجهات، خزانات، مكافحة حشرات، جلي رخام، تعقيم. خبرة 15 عامًا وفرق محترفة. اطلب عرض سعر مجاني.`;
  const h1 = `خدمات النظافة في ${city.name}`;
  const intro = `تقدم ${company.name} خدمات النظافة الشاملة في ${city.name} بفرق محترفة ومعدات حديثة وخبرة تتجاوز 15 عامًا. ${city.context}`;
  return { seoTitle, metaDescription, h1, intro };
}
