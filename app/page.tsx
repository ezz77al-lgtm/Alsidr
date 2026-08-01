import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowLeft, CheckCircle2, ShieldCheck, Clock, Award,
  Users, MapPin, Star, Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard, CityCard, ProjectCard, TestimonialCard, PartnerCard } from '@/components/cards';
import { CTASection } from '@/components/cta-section';
import { StatsCounter } from '@/components/stats-counter';
import { FaqAccordion } from '@/components/faq-accordion';
import { Icon } from '@/components/icon';
import { Reveal } from '@/components/reveal';
import { AuroraBackground } from '@/components/aurora-background';
import { AnimatedText } from '@/components/animated-text';
import { MagneticButton } from '@/components/magnetic-button';
import { Spotlight } from '@/components/spotlight';
import { Marquee } from '@/components/marquee';
import { GradientBorder } from '@/components/gradient-border';
import { TiltCard } from '@/components/tilt-card';
import { NoiseOverlay } from '@/components/noise-overlay';
import { Parallax } from '@/components/parallax';
import {
  services, serviceCategories,
} from '@/lib/data/services';
import { cities } from '@/lib/data/cities';
import { getFeaturedProjects } from '@/lib/data/projects';
import { getLatestPosts } from '@/lib/data/blog';
import {
  testimonials, certificates, stats, partners, homepageFaq,
} from '@/lib/data/content';
import { company } from '@/lib/data/company';
import {
  localBusinessSchema, faqSchema,
} from '@/lib/seo';

const whyChooseUs = [
  { icon: 'Award', title: 'خبرة 15 عامًا', desc: 'سنوات من الخبرة في servicing المنشآت السكنية والتجارية والصناعية في كل مدن المملكة.' },
  { icon: 'ShieldCheck', title: 'ضمان موثق', desc: 'نقدم ضمانًا موثقًا على جميع خدماتنا يختلف حسب نوع الخدمة ومدتها.' },
  { icon: 'Users', title: 'فريق متخصص', desc: 'أكثر من 240 فنيًا مدرّبًا على أحدث المعدات والبروتوكولات الصحية.' },
  { icon: 'Clock', title: 'خدمة 24/7', desc: 'فريق طوارئ متاح خارج الدوام وفي الإجازات لخدماتك العاجلة.' },
  { icon: 'MapPin', title: 'تغطية واسعة', desc: 'نخدم 18 مدينة رئيسية في المملكة مع تغطية للأحياء والضواحي.' },
  { icon: 'BadgeCheck', title: 'شهادات معتمدة', desc: 'حاصلون على شهادات ISO ومناعة الصحة واعتماد مكافحة الحشرات.' },
];

const workProcess = [
  { num: '01', title: 'التواصل والاستشارة', desc: 'تواصل معنا واشرح احتياجك، وسيقدم فريقنا استشارة مجانية وتوصيات مناسبة.' },
  { num: '02', title: 'المعاينة وعرض السعر', desc: 'نقوم بمعاينة الموقع (مجانية للمنشآت الكبيرة) ونقدم عرض سعر تفصيلي خلال 24 ساعة.' },
  { num: '03', title: 'التنفيذ الاحترافي', desc: 'فريق متخصص ينفذ الخدمة بأحدث المعدات والمواد المعتمدة وفق الجدول المتفق عليه.' },
  { num: '04', title: 'ضمان الجودة والمتابعة', desc: 'نراجع جودة العمل مع العميل ونقدم ضمانًا ومتابعة دورية لضمان رضاه.' },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const latestPosts = getLatestPosts(3);
  const topServices = services.slice(0, 8);
  const topCities = cities.slice(0, 4);

  return (
    <PageShell
      schemas={[
        localBusinessSchema(),
        faqSchema(homepageFaq),
      ]}
    >
      {/* ========== Hero Section ========== */}
<section className="relative overflow-hidden text-white">

  {/* Hero Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/hero/hero1.jpg"
      alt="شركة السدر العربية للمقاولات لتنظيف واجهات المباني الزجاجية في الرياض والسعودية"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-950/80" />


  {/* Animated Background Effects */}
  <div className="absolute inset-0">
    <div
      className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-aurora"
      style={{ animationDuration: '15s' }}
    />

    <div
      className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary-light/15 blur-3xl animate-aurora"
      style={{ animationDuration: '18s', animationDelay: '2s' }}
    />
  </div>


  <div className="absolute inset-0 bg-mesh opacity-20" />
  <div className="absolute inset-0 bg-grid opacity-[0.03]" />


  {/* Content */}
  <div className="container-page relative z-10 py-24 lg:py-32">

    <div className="max-w-4xl space-y-6">


      {/* Badge */}
      <AnimatedText
        as="span"
        text="خبرة 15 عامًا في النظافة والمقاولات بالمملكة"
        variant="fade-up"
        delay={100}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md"
      />


      <span className="flex items-center gap-2 text-accent-light">
        <Sparkles className="h-4 w-4" />
      </span>


      {/* Main heading */}
      <AnimatedText
        as="h1"
        text="شركة السدر العربية للمقاولات"
        variant="word-by-word"
        delay={200}
        className="text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
      />


      <AnimatedText
        as="p"
        text="أفضل شركة تنظيف واجهات وخزانات ومكافحة حشرات في الرياض وجميع أنحاء المملكة"
        variant="fade-up"
        delay={600}
        className="block text-xl font-medium text-accent-light sm:text-2xl lg:text-3xl mt-3"
      />


      <AnimatedText
        as="p"
        text="نقدم خدمات تنظيف واجهات المباني الزجاجية، تنظيف خزانات المياه، مكافحة الحشرات، جلي الرخام، وتعقيم المنشآت باستخدام أحدث المعدات وفريق متخصص. نخدم الرياض وجميع مدن المملكة العربية السعودية مع ضمان جودة وأسعار تنافسية."
        variant="fade-up"
        delay={800}
        className="max-w-2xl text-lg leading-relaxed text-white/90 text-pretty"
      />


      {/* CTA Buttons */}
      <div
        className="flex flex-col gap-3 sm:flex-row pt-4"
        style={{
          animationDelay: '1000ms',
          opacity: 0,
          animation:
            'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1000ms both'
        }}
      >

        <MagneticButton strength={0.2}>
          <Button asChild size="lg" className="group">
            <Link
              href="https://wa.me/966569209216?text=السلام عليكم، إطلعت على موقعكم في جوجل وأرغب في طلب خدمة."
              target="_blank"
              rel="noopener noreferrer"
            >
              طلب الخدمة فوراً
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </Button>
        </MagneticButton>


        <MagneticButton strength={0.2}>
          <Button
            asChild
            size="lg"
            className="group bg-accent text-white hover:bg-accent-light transition-all duration-500 magnetic-btn overflow-hidden shadow-lift"
          >
            <Link href="/services" className="flex items-center gap-2">
              استكشف خدماتنا
              <ArrowLeft className="h-5 w-5 transition-transform duration-500 group-hover:-translate-x-1" />
            </Link>
          </Button>
        </MagneticButton>


        <MagneticButton strength={0.2}>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white transition-all duration-500 magnetic-btn overflow-hidden"
          >
            <a
              href={`tel:${company.phone}`}
              dir="ltr"
              className="flex items-center gap-2"
            >
              <Phone className="h-5 w-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              {company.phone}
            </a>
          </Button>
        </MagneticButton>

      </div>


      {/* Trust indicators */}
      <div
        className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm pt-6"
      >

        <span className="flex items-center gap-2">
          <Star className="h-4 w-4 text-accent-light fill-accent-light" />
          تقييم 4.9/5 من 3,800+ عميل
        </span>

        <span className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-accent-light" />
          شهادات ISO ووزارة الصحة
        </span>

      </div>

    </div>

  </div>


  {/* Bottom Separator */}
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-shimmer" />

</section>

      
      {/* ========== Our Services ========== */}
      <Reveal>
        <section className="section-padding bg-surface relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
            <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
          </div>
          <div className="container-page relative z-10">
            <SectionHeading
              eyebrow="خدماتنا"
              title="باقة متكاملة من خدمات النظافة الاحترافية"
              description="نقدم أكثر من 35 خدمة نظافة متخصصة للمنشآت السكنية والتجارية والصناعية، بفرق محترفة ومعدات حديثة في كل مدن المملكة."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
              {topServices.map((service, i) => (
                <Reveal key={service.slug} delay={i * 80} as="div">
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <MagneticButton strength={0.15}>
                <Button asChild variant="outline" size="lg" className="group magnetic-btn overflow-hidden">
                  <Link href="/services" className="flex items-center gap-2">
                    عرض كل الخدمات
                    <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </section>
      </Reveal>



     {/* ========== Company Introduction ========== */}
<Reveal>
  <section className="section-padding bg-background relative overflow-hidden">
    <NoiseOverlay opacity={0.03} />

    <div className="container-page grid items-center gap-12 lg:grid-cols-2 relative z-10">

      {/* صورة الشركة */}
      <Reveal variant="left">
        <div className="relative flex justify-center items-center group">

          {/* الصورة الدائرية */}
          <TiltCard
            maxTilt={5}
            className="relative h-72 w-72 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px] overflow-hidden rounded-full shadow-[0_0_40px_rgba(22,101,52,0.45)]"
          >
            <Image
              src="/about/about1.jpg"
              alt="فريق شركة السدر العربية للمقاولات أثناء العمل"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain scale-90 transition-transform duration-1000 group-hover:scale-110"
            />
          </TiltCard>

          {/* بطاقة الخبرة */}
          <div
            className="absolute top-0 right-2 block rounded-2xl bg-primary px-6 py-4 text-white shadow-2xl sm:block"
            style={{
              animation: "float 5s ease-in-out infinite",
            }}
          >
            <p className="text-sm center font-bold">15+</p>
            <p className="text-sm opacity-90">سنة خبرة</p>
          </div>

          {/* بطاقة الاعتماد */}
          <div
            className="absolute bottom-0 left-0 block rounded-2xl bg-white px-5 py-4 text-foreground shadow-2xl sm:block"
            style={{
              animation: "float 6s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          >
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-green-700 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
              <div>
                <p className="text-sm font-bold">معتمد دوليًا</p>
                <p className="text-xs text-muted-foreground">ISO 9001</p>
              </div>
            </div>
          </div>

        </div>
      </Reveal>

      {/* النص */}
      <Reveal variant="right">
        <div>
          <SectionHeading
            eyebrow="شركة السدر العربية للمقاولات"
            title="خبرة وجودة في خدمات التنظيف المتخصصة بالمملكة العربية السعودية"
            description={company.description}
            center={false}
          />

          <ul className="mb-8 space-y-3">
            {[
              "فريق محترف مدرّب على أحدث المعدات والبروتوكولات",
              "مواد ومعدات معتمدة وآمنة على الأطفال والبيئة",
              "تغطية لكل مدن المملكة الرئيسية وضواحيها",
              "ضمان موثق وعقود سنوية مرنة لكل احتياج",
              "أسعار تنافسية وعروض أسعار مجانية خلال 24 ساعة",
            ].map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 transition-all duration-500 hover:translate-x-2 hover:scale-[1.02] group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-primary-light">
                  <CheckCircle2 className="h-4 w-4 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                </div>

                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <MagneticButton strength={0.15}>
              <Button asChild className="group magnetic-btn overflow-hidden">
                <Link href="/about" className="flex items-center gap-2">
                  تعرف علينا أكثر
                  <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
                </Link>
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <Button
                asChild
                variant="outline"
                className="magnetic-btn overflow-hidden"
              >
                <Link href="/contact">تواصل معنا</Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
</Reveal>

      {/* ========== Featured Projects ========== */}
      <Reveal>
        <section className="section-padding bg-background">
          <div className="container-page">
            <SectionHeading
              eyebrow="مشاريعنا"
              title="مشاريع نفخر بإنجازها"
              description="نفذنا آلاف المشاريع الناجحة في مختلف مدن المملكة، إليك أبرزها."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.slice(0, 6).map((project, i) => (
                <Reveal key={project.slug} delay={i * 100} as="div">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <MagneticButton strength={0.15}>
                <Button asChild variant="outline" size="lg" className="group magnetic-btn overflow-hidden">
                  <Link href="/projects" className="flex items-center gap-2">
                    عرض كل المشاريع
                    <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </section>
      </Reveal>

{/* ========== Before & After ========== */}
<Reveal>
  <section className="section-padding bg-surface relative overflow-hidden">

    <div className="absolute inset-0 -z-10">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl animate-float-slow" />
    </div>


    <div className="container-page relative z-10">

      <SectionHeading
        eyebrow="قبل وبعد"
        title="شاهد الفرق بأنفسكم"
        description="نتائج حقيقية من مشاريعنا تظهر جودة خدماتنا وأثرها الواضح."
      />


      <div className="grid gap-8 lg:grid-cols-2">

        {featuredProjects.slice(0, 4).map((project, i) => (

          <Reveal key={project.slug} delay={i * 120} as="div">

            <TiltCard
              maxTilt={4}
              className="card-soft card-hover relative h-[420px] overflow-hidden rounded-3xl"
            >


              {/* After Image Background */}
              <Image
                src={project.afterImage}
                alt={project.afterAlt}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />


              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />


              {/* Before Small Image */}
              <div className="absolute right-5 top-5 h-28 w-28 overflow-hidden rounded-2xl border-2 border-white/30 shadow-xl">

                <Image
                  src={project.beforeImage}
                  alt={project.beforeAlt}
                  fill
                  className="object-cover"
                />

                <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-1 text-xs font-bold text-white backdrop-blur-md">
                  قبل
                </span>

              </div>


              {/* After Badge */}
              <span className="absolute left-5 top-5 rounded-lg bg-accent px-3 py-1 text-xs font-bold text-white shadow-lg">
                بعد
              </span>


              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">


                <h3 className="mb-2 text-xl font-bold transition-colors duration-500 hover:text-accent-light">
                  {project.title}
                </h3>


                <p className="line-clamp-2 text-sm leading-relaxed text-white/90">
                  {project.excerpt}
                </p>


              </div>


            </TiltCard>

          </Reveal>

        ))}

      </div>

    </div>

  </section>
</Reveal>
            {/* ========== Service Categories ========== */}
      <Reveal>
        <section className="py-16 bg-background">
          <div className="container-page">
            <SectionHeading
              eyebrow="تصفح حسب الفئة"
              title="فئات خدمات النظافة"
              description="تصفح خدماتنا حسب الفئة للوصول السريع لما تحتاجه."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCategories.map((cat, i) => (
                <Reveal key={cat.slug} delay={i * 100} as="div">
                  <Link
                    href="/services"
                    className="card-soft card-hover group flex items-center gap-4 p-5 transition-all duration-500"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary-light group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lift">
                      <Icon name={cat.icon} className="h-7 w-7" size={28} />
                    </div>
                    <div>
                      <p className="font-bold text-foreground transition-colors duration-500 group-hover:text-primary">{cat.name}</p>
                      <p className="text-xs text-muted-foreground">{cat.serviceSlugs.length} خدمة</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ========== Why Choose Us ========== */}
      <Reveal>
        <section className="section-padding bg-surface relative overflow-hidden">
          <NoiseOverlay opacity={0.03} />
          <div className="container-page relative z-10">
            <SectionHeading
              eyebrow="لماذا نحن"
              title="لماذا تختار شركة السدر العربية للمقاولات؟"
              description="نتميز بمجموعة من المزايا التي تجعلنا الخيار الأول لخدمات النظافة في المملكة."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 100} as="div">
                  <Spotlight className="h-full">
                    <div className="card-soft card-hover group p-6 h-full transition-all duration-500">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-primary-light group-hover:text-primary-foreground group-hover:shadow-lift group-hover:rotate-6">
                        <Icon name={item.icon} className="h-7 w-7" size={28} />
                      </div>
                      <h3 className="mb-2 font-bold text-foreground transition-colors duration-500 group-hover:text-primary">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>



      {/* ========== Work Process ========== */}
      <Reveal>
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-grid opacity-[0.03]" />
          <div className="container-page relative z-10">
            <SectionHeading
              eyebrow="آلية العمل"
              title="كيف نعمل معك؟"
              description="منهجية واضحة من أربع خطوات تضمن لك خدمة احترافية من البداية للنهاية."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {workProcess.map((step, i) => (
                <Reveal key={step.num} delay={i * 120} as="div">
                  <GradientBorder className="relative p-6 h-full">
                    <div className="relative z-10">
                      <span className="mb-3 block text-5xl font-bold bg-gradient-to-br from-primary/30 to-primary/10 bg-clip-text text-transparent transition-all duration-500 group-hover:from-primary/50 group-hover:to-primary/30">
                        {step.num}
                      </span>
                      <h3 className="mb-2 font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </GradientBorder>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ========== Statistics ========== */}
      <section className="section-padding bg-premium-dark text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-aurora"
            style={{ animationDuration: '15s' }}
          />
          <div
            className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-primary-light/10 blur-3xl animate-aurora"
            style={{ animationDuration: '18s', animationDelay: '2s' }}
          />
        </div>
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="container-page relative z-10">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* ========== Customer Reviews ========== */}
      <Reveal>
        <section className="section-padding bg-background">
          <div className="container-page">
            <SectionHeading
              eyebrow="آراء عملائنا"
              title="ماذا يقول عملاؤنا عنا؟"
              description="ثقة عملائنا هي أهم إنجازاتنا. إليك بعض آرائهم الحقيقية."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 6).map((t, i) => (
                <Reveal key={t.name} delay={i * 100} as="div">
                  <TestimonialCard
                    name={t.name}
                    role={t.role}
                    rating={t.rating}
                    text={t.text}
                    initials={t.initials}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ========== Certificates ========== */}
      <Reveal>
        <section className="section-padding bg-surface relative overflow-hidden">
          <NoiseOverlay opacity={0.03} />
          <div className="container-page relative z-10">
            <SectionHeading
              eyebrow="شهاداتنا"
              title="شهادات واعتمادات رسمية"
              description="نلتزم بأعلى معايير الجودة والسلامة، وحاصلون على شهادات واعتمادات رسمية."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 100} as="div">
                  <Spotlight className="h-full">
                    <div className="card-soft card-hover group flex items-start gap-4 p-6 transition-all duration-500">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 text-accent transition-all duration-500 group-hover:scale-110 group-hover:from-accent group-hover:to-accent-light group-hover:text-white group-hover:shadow-lift group-hover:rotate-6">
                        <Icon name={cert.icon} className="h-7 w-7" size={24} />
                      </div>
                      <div>
                        <h3 className="mb-1 font-bold text-foreground transition-colors duration-500 group-hover:text-primary">{cert.name}</h3>
                        <p className="mb-1 text-xs font-medium text-primary">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

{/* ========== Partners (Marquee) ========== */}
<Reveal>
  <section className="py-16 sm:py-20 lg:py-24 bg-muted/40 relative overflow-hidden">
    {/* Decorative Background Blobs */}
    <div className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-float-blob-1 pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent/10 rounded-full blur-3xl animate-float-blob-2 pointer-events-none" />
    <div className="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none" />

    <div className="container-page relative z-10">
      <SectionHeading
        eyebrow="شركاؤنا"
        title="نفتخر بثقة شركائنا"
        description="نعمل مع أفضل الشركات والمؤسسات في المملكة لتقديم خدمات متميزة"
      />

      {/* Marquee Row 1 */}
      <div className="mb-6 sm:mb-8">
        <Marquee speed="normal" pauseOnHover>
          {[
            { id: 'p1', name: 'مجموعة الشائع', logo: '/clients/client4.jpg' },
            { id: 'p2', name: 'شركة الدرع الواقي للحراسات الامنيه', logo: '/clients/client5.jpg' },
            { id: 'p3', name: 'شركة ابيات', logo: '/clients/client6.jpg' },
            { id: 'p4', name: 'شركة العيسائي للسيارات', logo: '/clients/client1.jpg' },
            { id: 'p5', name: 'شركة رمال المحيط للتجارة', logo: '/clients/client2.jpg' },
            { id: 'p6', name: 'شركة الجفالي', logo: '/clients/client3.jpg' },
          ].map((partner) => (
            <div key={partner.id} className="partner-card-premium shrink-0">
              {/* Corner Accents */}
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />

              {/* Content */}
              <div className="relative z-10 p-3 sm:p-4 flex items-center justify-center w-full h-full">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={40}
                    className="partner-logo object-contain max-w-full max-h-full"
                  />
                ) : (
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground text-center leading-tight">
                    {partner.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="mb-6 sm:mb-8">
      <Marquee reverse speed="slow" pauseOnHover>
        {[
          { id: 'p7', name: 'شركة رولكس', logo: '/clients/client7.jpg' },
          { id: 'p8', name: 'د.سليمان الحبيب', logo: '/clients/client8.jpg' },
          { id: 'p9', name: 'شركة باتشي', logo: '/clients/client9.jpg' },
          { id: 'p10', name: 'شركة لكزس', logo: '/clients/client10.jpg' },
          { id: 'p11', name: 'شركة تويوتا', logo: '/clients/client11.jpg' },
          { id: 'p12', name: 'شركة القثمي', logo: '/clients/client12.jpg' },
        ].map((partner) => (
          <div key={partner.id} className="partner-card-premium shrink-0">
            {/* Corner Accents */}
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />

            {/* Content */}
            <div className="relative z-10 p-3 sm:p-4 flex items-center justify-center w-full h-full">
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={40}
                  className="partner-logo object-contain max-w-full max-h-full"
                />
              ) : (
                <span className="text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground text-center leading-tight">
                  {partner.name}
                </span>
              )}
            </div>
          </div>
        ))}
      </Marquee>
      </div>

      <div className="mb-6 sm:mb-8">
        <Marquee speed="normal" pauseOnHover>
          {[
            { id: 'p1', name: 'مجموعة الشائع', logo: '/clients/client4.jpg' },
            { id: 'p2', name: 'شركة الدرع الواقي للحراسات الامنيه', logo: '/clients/client5.jpg' },
            { id: 'p3', name: 'شركة ابيات', logo: '/clients/client6.jpg' },
            { id: 'p4', name: 'شركة العيسائي للسيارات', logo: '/clients/client1.jpg' },
            { id: 'p5', name: 'شركة رمال المحيط للتجارة', logo: '/clients/client2.jpg' },
            { id: 'p6', name: 'شركة الجفالي', logo: '/clients/client3.jpg' },
          ].map((partner) => (
            <div key={partner.id} className="partner-card-premium shrink-0">
              {/* Corner Accents */}
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />

              {/* Content */}
              <div className="relative z-10 p-3 sm:p-4 flex items-center justify-center w-full h-full">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={40}
                    className="partner-logo object-contain max-w-full max-h-full"
                  />
                ) : (
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground text-center leading-tight">
                    {partner.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <Marquee reverse speed="slow" pauseOnHover>
        {[
          { id: 'p7', name: 'شركة رولكس', logo: '/clients/client7.jpg' },
          { id: 'p8', name: 'د.سليمان الحبيب', logo: '/clients/client8.jpg' },
          { id: 'p9', name: 'شركة باتشي', logo: '/clients/client9.jpg' },
          { id: 'p10', name: 'شركة لكزس', logo: '/clients/client10.jpg' },
          { id: 'p11', name: 'شركة تويوتا', logo: '/clients/client11.jpg' },
          { id: 'p12', name: 'شركة القثمي', logo: '/clients/client12.jpg' },

        ].map((partner) => (
          <div key={partner.id} className="partner-card-premium shrink-0">
            {/* Corner Accents */}
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />

            {/* Content */}
            <div className="relative z-10 p-3 sm:p-4 flex items-center justify-center w-full h-full">
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={40}
                  className="partner-logo object-contain max-w-full max-h-full"
                />
              ) : (
                <span className="text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground text-center leading-tight">
                  {partner.name}
                </span>
              )}
            </div>
          </div>
        ))}
      </Marquee>

      
    </div>
    

    
  </section>
</Reveal>
     {/* ========== Service Areas ========== */}
      <Reveal>
        <section className="section-padding bg-surface relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
          </div>
          <div className="container-page relative z-10">
            <SectionHeading
              eyebrow="مناطق التغطية"
              title="نخدمكم في كل مدن المملكة"
              description="فروعنا وفرقنا تغطي 18 مدينة رئيسية في المملكة العربية السعودية."
            />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {topCities.map((city, i) => (
                <Reveal key={city.slug} delay={i * 80} as="div">
                  <CityCard city={city} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <MagneticButton strength={0.15}>
                <Button asChild variant="outline" size="lg" className="group magnetic-btn overflow-hidden">
                  <Link href="/cities" className="flex items-center gap-2">
                    عرض كل المدن
                    <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ========== FAQ ========== */}
      <Reveal>
        <section className="section-padding bg-background relative overflow-hidden">
          <NoiseOverlay opacity={0.03} />
          <div className="container-narrow relative z-10">
            <SectionHeading
              eyebrow="الأسئلة الشائعة"
              title="إجابات على أكثر الأسئلة شيوعًا"
            />
            <FaqAccordion items={homepageFaq} />
          </div>
        </section>
      </Reveal>

      {/* ========== Latest Articles ========== */}
      <Reveal>
        <section className="section-padding bg-surface relative overflow-hidden">
          <div className="container-page relative z-10">
            <SectionHeading
              eyebrow="المدونة"
              title="أحدث المقالات"
              description="مقالات إرشادية ونصائح مفيدة عن النظافة والصيانة."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post, i) => (
  <Reveal key={post.slug} delay={i * 100} as="div">

    <Link
      href={`/blog/${post.slug}`}
      className="card-soft card-hover group relative flex h-[380px] overflow-hidden rounded-3xl"
    >

      {/* Background Image */}
      <Image
        src={post.image}
        alt={post.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-700 group-hover:from-primary-dark/90" />


      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">


        {/* Category */}
        <span className="mb-3 inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
          {post.category}
        </span>


        {/* Title */}
        <h3 className="mb-3 text-xl font-bold line-clamp-2 transition-colors duration-500 group-hover:text-accent-light">
          {post.title}
        </h3>


        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/90">
          {post.excerpt}
        </p>


        {/* Read Time */}
        <span className="flex items-center gap-2 text-xs text-white/80 transition-all duration-500 group-hover:text-accent-light">

          {post.readTimeLabel}

          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1" />

        </span>


      </div>


    </Link>

  </Reveal>
))}
            </div>
            <div className="mt-12 text-center">
              <MagneticButton strength={0.15}>
                <Button asChild variant="outline" size="lg" className="group magnetic-btn overflow-hidden">
                  <Link href="/blog" className="flex items-center gap-2">
                    عرض كل المقالات
                    <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ========== Contact + Map ========== */}
      <Reveal>
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl animate-float-slow" />
          </div>
          <div className="container-page grid gap-10 lg:grid-cols-2 relative z-10">
            <Reveal variant="left">
              <div>
                <SectionHeading
                  eyebrow="تواصل معنا"
                  title="نحن هنا لخدمتك"
                  description="تواصل معنا عبر أي من القنوات التالية، أو تفضل بزيارة مقرنا."
                  center={false}
                />
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: 'الهاتف', value: company.phone, href: `tel:${company.phone}`, ltr: true },
                    { icon: MapPin, label: 'العنوان', value: `${company.address.street}، ${company.address.city}` },
                    { icon: Clock, label: 'ساعات العمل', value: company.hours.map((h) => `${h.days}: ${h.hours}`).join(' | ') },
                  ].map((item) => (
                    <Spotlight key={item.label}>
                      <div className="card-soft card-hover group flex items-center gap-4 p-5 transition-all duration-500">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-primary-light group-hover:text-white group-hover:shadow-lift group-hover:rotate-6">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} dir={item.ltr ? 'ltr' : undefined} className="font-bold text-foreground transition-colors duration-500 hover:text-primary">{item.value}</a>
                          ) : (
                            <p className="font-bold text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </Spotlight>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal variant="right">
              <TiltCard maxTilt={4} className="relative min-h-[400px] overflow-hidden rounded-3xl border border-border shadow-card transition-all duration-500">
                <Image
                    src="/hero/hero1.jpg"
                    alt="مقر الشركة"
                    fill
                    className="object-cover"
                  />

                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDuration: '7s' }} />
                <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white shadow-lift transition-all duration-500 hover:scale-110 hover:shadow-neon hover:rotate-6">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">مقرنا الرئيسي</h3>
                  <p className="mb-1 text-muted-foreground">{company.address.street}</p>
                  <p className="mb-4 text-muted-foreground">{company.address.city}، {company.address.country}</p>
                  <MagneticButton strength={0.15}>
                    <Button asChild className="group magnetic-btn overflow-hidden">
                      <a
                        href={`https://www.google.com/maps?q=${company.geo.lat},${company.geo.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
                        عرض على الخريطة
                        <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
                      </a>
                    </Button>
                  </MagneticButton>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>
      </Reveal>

      <CTASection />
    </PageShell>
  );
}