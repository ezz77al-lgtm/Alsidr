import { Project } from '../types';

// Realistic cleaning projects across Saudi cities.
export const projects: Project[] = [
  {
    slug: 'riyadh-commercial-tower-facade',
    title: 'تنظيف واجهات برج تجاري بالرياض',
    citySlug: 'riyadh',
    serviceSlug: 'glass-facade-cleaning',
    excerpt:
      'تنظيف واجهة برج تجاري مكون من 24 طابقًا في حي العليا بالرياض باستخدام منصات العمل المعلقة والروافع الهيدروليكية.',
    description:
      'نفذنا تنظيف واجهة برج تجاري مكون من 24 طابقًا في حي العليا بالرياض، حيث كانت الواجهة الزجاجية العاكسة تراكمت عليها الأتربة الصحراوية وبقع الأمطار بشكل أثر على مظهر المبنى. استخدمنا منصات العمل المعلقة المعتمدة وروافع هيدروليكية للوصول إلى الطوابق السفلية، مع منظفات متخصصة للزجاج العاكس خالية من الكشط. اكتمل العمل خلال 6 أيام دون تعطيل عمل المستأجرين بفضل التنسيق الليلي مع إدارة المبنى.',
    challenges: [
      'ارتفاع البرج 24 طابقًا يستدعي منصات عمل معلقة معتمدة',
      'تراكم أتربة صحراوية وبقع أمطار على الزجاج العاكس',
      'وجود مستأجرين يتطلب التنسيق الليلي لتفادي التعطيل',
    ],
    solution: [
      'استخدام منصات العمل المعلقة المعتمدة وروافع هيدروليكية للطوابق السفلية',
      'منظفات متخصصة للزجاج العاكس خالية من الكشط وماء نقي منزوع الأملاح',
      'جدول عمل ليلي بالتنسيق مع إدارة المبنى لتفادي التعطيل',
    ],
    results: [
      { label: 'الطوابق', value: '24 طابقًا' },
      { label: 'المساحة', value: '6,800 م²' },
      { label: 'مدة التنفيذ', value: '6 أيام' },
      { label: 'الرضا', value: '98%' },
    ],
    gallery: [
      '/services/glass-facades.webp',
      '/projects/glass-facades1.jpg',
      '/projects/glass-facades2.jpg',
      '/projects/glass-facades3.jpg',
    ],
    galleryAlts: [
      'برج تجاري بالرياض قبل التنظيف',
      'فريق ينظف الواجهة الزجاجية',
      'الواجهة بعد التنظيف لامعة',
    ],
    beforeImage: '/projects/project1.webp',
    afterImage: '/projects/project2.webp',
    beforeAlt: 'واجهة برج الرياض قبل التنظيف',
    afterAlt: 'واجهة برج الرياض بعد التنظيف',
    date: '2024-03-15',
    durationLabel: '6 أيام',
    clientType: 'شركة عقارات',
    areaLabel: '6,800 م²',
  },
  {
    slug: 'jeddah-hospital-cleaning',
    title: 'تنظيف مستشفى تخصصي بجدة',
    citySlug: 'jeddah',
    serviceSlug: 'hospital-cleaning',
    excerpt:
      'تنظيف وتعقيم مستشفى تخصصي بجدة وفق بروتوكولات مكافحة العدوى وتصنيف المناطق الحرجة وشبه الحرجة وغير الحرجة.',
    description:
      'نفذنا تنظيفًا وتعقيمًا شاملين لمستشفى تخصصي بجدة بسعة 180 سريرًا، حيث صنفنا مناطق المستشفى إلى حرجة وشبه حرجة وغير حرجة وفق بروتوكولات مكافحة العدوى، وخصصنا فرقًا وأدوات ومطهرات منفصلة لكل منطقة. شمل العمل الأقسام الداخلية والطوارئ والعمليات والمعقم والممرات، مع فصل النفايات الطبية وفق الأنظمة وتوثيق كامل لكل دورة تنظيف.',
    challenges: [
      'تصنيف المناطق إلى حرجة وشبه حرجة وغير حرجة',
      'فصل الأدوات والمطهرات بين الأقسام لتفادي انتقال العدوى',
      'فصل النفايات الطبية وفق الأنظمة',
    ],
    solution: [
      'تصنيف المناطق وفق بروتوكولات مكافحة العدوى',
      'فرق وأدوات ومطهرات منفصلة لكل منطقة',
      'فصل النفايات الطبية وتوثيق كامل لكل دورة',
    ],
    results: [
      { label: 'السعة', value: '180 سريرًا' },
      { label: 'المناطق', value: '12 منطقة' },
      { label: 'مدة العقد', value: 'سنوي' },
      { label: 'معدل العدوى', value: 'انخفاض 22%' },
    ],
    gallery: [
      '/projects/project3.webp',
      '/projects/project4.webp',
    ],
    galleryAlts: [
      'ممرات المستشفى بعد التنظيف',
      'تعقيم قسم العمليات',
    ],
    beforeImage: '/projects/project3.webp',
    afterImage: '/projects/project4.webp',
    beforeAlt: 'ممر مستشفى جدة قبل التعقيم',
    afterAlt: 'ممر مستشفى جدة بعد التعقيم',
    date: '2024-01-20',
    durationLabel: 'عقد سنوي',
    clientType: 'مستشفى تخصصي',
    areaLabel: '12,000 م²',
  },
  {
    slug: 'makkah-mall-cleaning',
    title: 'تنظيف مول تجاري بمكة',
    citySlug: 'makkah',
    serviceSlug: 'mall-cleaning',
    excerpt:
      'تنظيف مجمع تجاري بمكة على ثلاثة طوابق مع إدارة كاملة للنظافة في موسم الذروة وتعقيم أسطح اللمس.',
    description:
      'نفذنا تنظيف مجمع تجاري بمكة على ثلاثة طوابق بمساحة 22,000 م²، مع إدارة كاملة للنظافة في موسم الذروة. شمل العمل الممرات والواجهات والحمامات ومناطق الطعام ومواقف السيارات، مع تنظيف وتلميع الأرضيات البورسلينية الكبيرة وتعقيم أسطح اللمس وإدارة النفايات. اعتمدنا فرقًا متعددة وجداول مرنة تناسب أوقات الذروة والإغلاق.',
    challenges: [
      'كثافة زوار مرتفعة في موسم الذروة',
      'مساحة كبيرة على ثلاثة طوابق',
      'إدارة نفايات المجمع التجاري',
    ],
    solution: [
      'فرق متعددة وجداول مرنة تناسب الذروة والإغلاق',
      'تنظيف وتلميع الأرضيات البورسلينية الكبيرة',
      'إدارة نفايات متكاملة وتعقيم أسطح اللمس',
    ],
    results: [
      { label: 'المساحة', value: '22,000 م²' },
      { label: 'الطوابق', value: '3 طوابق' },
      { label: 'الفرق', value: '4 فرق' },
      { label: 'الرضا', value: '96%' },
    ],
    gallery: [
      '/projects/project5.webp',
      '/projects/project6.webp',
    ],
    galleryAlts: ['ممرات المول بعد التنظيف', 'تنظيف الأرضيات الكبيرة'],
    beforeImage: '/projects/project5.webp',
    afterImage: '/projects/project6.webp',
    beforeAlt: 'ممرات المول قبل التنظيف',
    afterAlt: 'ممرات المول بعد التنظيف',
    date: '2024-05-10',
    durationLabel: 'عقد سنوي',
    clientType: 'مجمع تجاري',
    areaLabel: '22,000 م²',
  },
  {
    slug: 'madinah-hotel-cleaning',
    title: 'تنظيف فندق بالمدينة المنورة',
    citySlug: 'madinah',
    serviceSlug: 'hotel-cleaning',
    excerpt:
      'تنظيف فندق 4 نجوم بالمدينة المنورة قرب المسجد النبوي مع تغطية موسم الذروة في رمضان.',
    description:
      'نفذنا تنظيف فندق 4 نجوم بالمدينة المنورة قرب المسجد النبوي بسعة 220 غرفة، مع تغطية موسم الذروة في رمضان. شمل العمل الغرف والأجنحة واللوبي والمطاعم والقاعات والمسابح، مع تغيير المفروشات وتعقيم الحمامات وفق معايير الضيافة. اعتمدنا فرقًا منتظمة مدرّبة على معايير الفنادق وجداول يومية مرنة تناسب نسب الإشغال المرتفعة.',
    challenges: [
      'كثافة إشغال مرتفعة في رمضان',
      'معايير ضيافة 4 نجوم صارمة',
      'قرب الفندق من المسجد النبوي يفرض آدابًا خاصة',
    ],
    solution: [
      'فرق منتظمة مدرّبة على معايير الضيافة',
      'جداول يومية مرنة تناسب نسب الإشغال',
      'تعقيم الحمامات وتغيير المفروشات وفق المعايير',
    ],
    results: [
      { label: 'الغرف', value: '220 غرفة' },
      { label: 'التصنيف', value: '4 نجوم' },
      { label: 'مدة العقد', value: 'سنوي' },
      { label: 'تقييم النزلاء', value: '4.8/5' },
    ],
    gallery: [
      '/projects/project7.webp',
      '/projects/project8.webp',
    ],
    galleryAlts: ['غرفة فندقية بعد التنظيف', 'لوبي الفندق'],
    beforeImage: '/projects/project7.webp',
    afterImage: '/projects/project8.webp',
    beforeAlt: 'غرفة فندق المدينة قبل التنظيف',
    afterAlt: 'غرفة فندق المدينة بعد التنظيف',
    date: '2024-04-02',
    durationLabel: 'عقد سنوي',
    clientType: 'فندق 4 نجوم',
    areaLabel: '220 غرفة',
  },
  {
    slug: 'dammam-school-cleaning',
    title: 'تنظيف مدرسة بالدمام',
    citySlug: 'dammam',
    serviceSlug: 'school-cleaning',
    excerpt:
      'تنظيف مدرسة ابتدائية بالدمام بـ 32 فصلًا مع تعقيم المقصف والملاعب وفق العام الدراسي.',
    description:
      'نفذنا تنظيف مدرسة ابتدائية بالدمام بـ 32 فصلًا ومقصف وملاعب، مع تعقيم أسطح اللمس والاهتمام بالوقاية الصحية للطلاب. اعتمدنا جدولًا مرنًا متوافقًا مع الدوام والإجازات ومنظفات آمنة على الأطفال، مع عقد سنوي يغطي العام الدراسي كاملًا.',
    challenges: [
      'تنظيف 32 فصلًا ضمن جدول الدوام',
      'تعقيم المقصف والملاعب للوقاية الصحية',
      'منظفات آمنة على الأطفال',
    ],
    solution: [
      'جدول مرن متوافق مع الدوام والإجازات',
      'تعقيم أسطح اللمس والمقصف والملاعب',
      'منظفات آمنة وغير سامة',
    ],
    results: [
      { label: 'الفصول', value: '32 فصلًا' },
      { label: 'الطلاب', value: '950 طالبًا' },
      { label: 'مدة العقد', value: 'سنوي' },
      { label: 'الرضا', value: '97%' },
    ],
    gallery: [
      '/services/school.webp',
      '/services/service13.webp',
    ],
    galleryAlts: ['فصل مدرسي بعد التنظيف', 'مقصف المدرسة'],
    beforeImage: '/services/school.webp',
    afterImage: '/services/school.webp',
    beforeAlt: 'فصل مدرسة الدمام قبل التنظيف',
    afterAlt: 'فصل مدرسة الدمام بعد التنظيف',
    date: '2024-08-25',
    durationLabel: 'عقد سنوي',
    clientType: 'مدرسة ابتدائية',
    areaLabel: '6,500 م²',
  },
  {
    slug: 'jubail-water-tank-cleaning',
    title: 'تنظيف خزانات مياه لمجمع صناعي بالجبيل',
    citySlug: 'jubail',
    serviceSlug: 'water-tank-cleaning',
    excerpt:
      'تنظيف وتعقيم خزانات مياه أرضية لمجمع صناعي بالجبيل بسعة 500 متر مكعب لكل خزان.',
    description:
      'نفذنا تنظيف وتعقيم خزانات مياه أرضية لمجمع صناعي بالجبيل بسعة 500 متر مكعب لكل خزان، مع تفريغ الخزانات وإزالة الرواسب والطحالب والصدأ وفق بروتوكولات الأماكن المحصورة. استخدمنا مواد معتمدة آمنة على مياه الشرب وأصدرنا شهادات تعقيم موثقة للجهات الرقابية.',
    challenges: [
      'سعة كبيرة 500 م³ لكل خزان',
      'بروتوكولات الأماكن المحصورة',
      'شهادات تعقيم للجهات الرقابية',
    ],
    solution: [
      'تفريغ وتهوية وفق بروتوكول الأماكن المحصورة',
      'مواد معتمدة آمنة على مياه الشرب',
      'إصدار شهادات تعقيم موثقة',
    ],
    results: [
      { label: 'السعة', value: '500 م³' },
      { label: 'الخزانات', value: '4 خزانات' },
      { label: 'المدة', value: '3 أيام' },
      { label: 'الشهادات', value: 'موثقة' },
    ],
    gallery: [
      '/services/service24.webp',
      '/services/service24.webp',
    ],
    galleryAlts: ['خزان مياه أرضي بعد التنظيف', 'فريق التنظيف'],
    beforeImage: '/services/service24.webp',
    afterImage: '/services/service24.webp',
    beforeAlt: 'خزان الجبيل قبل التنظيف',
    afterAlt: 'خزان الجبيل بعد التنظيف',
    date: '2024-06-18',
    durationLabel: '3 أيام',
    clientType: 'مجمع صناعي',
    areaLabel: '2,000 م³',
  },
  {
    slug: 'khobar-marble-polishing',
    title: 'جلي وتلميع رخام فندق بالخبر',
    citySlug: 'khobar',
    serviceSlug: 'marble-grinding',
    excerpt:
      'جلي وتلميع رخام لوبي فندق بالخبر بمساحة 1,800 م² واستعادة لمعان زجاجي.',
    description:
      'نفذنا جلي وتلميع رخام لوبي فندق بالخبر بمساحة 1,800 م²، حيث كانت الأرضية تعاني من خدوش عميقة وتصبغات بسبب حركة النزلاء. استخدمنا ماكينات الجلي بأحجار الكربورندم المتدرجة لإزالة الخدوش والتصبغات، ثم تلميع تدريجي حتى الوصول إلى لمعان زجاجي، مع حماية بطبقة عازلة تمنع التصبغات المستقبلية.',
    challenges: [
      'خدوش عميقة وتصبغات في الرخام',
      'حركة نزلاء مستمرة تستدعي جدول ليلي',
      'مساحة كبيرة 1,800 م²',
    ],
    solution: [
      'جلي بأحجار الكربورندم المتدرجة',
      'تلميع تدريجي حتى لمعان زجاجي',
      'حماية بطبقة عازلة وجدول ليلي',
    ],
    results: [
      { label: 'المساحة', value: '1,800 م²' },
      { label: 'اللمعان', value: 'زجاجي' },
      { label: 'المدة', value: '4 أيام' },
      { label: 'الرضا', value: '99%' },
    ],
    gallery: [
      '/services/service23.webp',
      '/services/service23.webp',
    ],
    galleryAlts: ['جلي رخام الفندق', 'الرخام بعد التلميع'],
    beforeImage: '/services/service23.webp',
    afterImage: '/services/service23.webp',
    beforeAlt: 'رخام فندق الخبر قبل الجلي',
    afterAlt: 'رخام فندق الخبر بعد الجلي',
    date: '2024-02-11',
    durationLabel: '4 أيام',
    clientType: 'فندق 5 نجوم',
    areaLabel: '1,800 م²',
  },
  {
    slug: 'riyadh-residential-compound-pest-control',
    title: 'مكافحة حشرات لمجمع سكني بالرياض',
    citySlug: 'riyadh',
    serviceSlug: 'pest-control',
    excerpt:
      'برنامج مكافحة حشرات متكامل لمجمع سكني بالرياض بـ 120 وحدة مع ضمان ومتابعة دورية.',
    description:
      'نفذنا برنامج مكافحة حشرات متكامل لمجمع سكني بالرياض بـ 120 وحدة سكنية، حيث شمل العمل الرش الوقائي والعلاجي للحشرات الزاحفة والطائرة ومعالجة مصادر الإصابة. اعتمدنا مبيدات معتمدة من وزارة الصحة آمنة على الأطفال والحيوانات الأليفة، مع ضمان ومتابعة دورية لضمان خلو المجمع من الحشرات.',
    challenges: [
      '120 وحدة سكنية تتطلب تنسيقًا دقيقًا',
      'تنوع الإصابات بين الوحدات',
      'سلامة الأطفال والحيوانات الأليفة',
    ],
    solution: [
      'برنامج متكامل رش وقائي وعلاجي',
      'مبيدات معتمدة آمنة على الأطفال والحيوانات',
      'ضمان ومتابعة دورية',
    ],
    results: [
      { label: 'الوحدات', value: '120 وحدة' },
      { label: 'المدة', value: 'يومان' },
      { label: 'الضمان', value: '6 أشهر' },
      { label: 'خلو الحشرات', value: '100%' },
    ],
    gallery: [
      '/services/service27.webp',
      '/services/service27.webp',
    ],
    galleryAlts: ['فريق مكافحة الحشرات', 'المجمع السكني'],
    beforeImage: '/services/service27.webp',
    afterImage: '/services/service27.webp',
    beforeAlt: 'المجمع السكني قبل المكافحة',
    afterAlt: 'المجمع السكني بعد المكافحة',
    date: '2024-07-05',
    durationLabel: 'يومان',
    clientType: 'مجمع سكني',
    areaLabel: '120 وحدة',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCity(citySlug: string): Project[] {
  return projects.filter((p) => p.citySlug === citySlug);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((p) => p.serviceSlug === serviceSlug);
}

export function getRelatedProjects(project: Project): Project[] {
  return projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        (p.citySlug === project.citySlug || p.serviceSlug === project.serviceSlug)
    )
    .slice(0, 3);
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 6);
}
