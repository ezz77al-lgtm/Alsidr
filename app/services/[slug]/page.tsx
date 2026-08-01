import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, MapPin, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/cards';
import { CTASection } from '@/components/cta-section';
import { FaqAccordion } from '@/components/faq-accordion';
import { Icon } from '@/components/icon';
import { JsonLd } from '@/components/json-ld';
import { Reveal } from '@/components/reveal';
import { services, getService, getRelatedServices, getCategory } from '@/lib/data/services';
import { cities } from '@/lib/data/cities';
import { getProjectsByService } from '@/lib/data/projects';
import { getRelatedBlogPosts } from '@/lib/data/blog';
import { getTestimonialsByService } from '@/lib/data/content';
import { company } from '@/lib/data/company';
import { buildMetadata, buildCrumbs, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} | شركة السدر العربية للمقاولات`,
    description: `${service.tagline}. ${service.description.slice(0, 150)}`,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: service.keywords,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(params.slug);
  const category = getCategory(service.categorySlug);
  const projects = getProjectsByService(params.slug).slice(0, 3);
  const posts = getRelatedBlogPosts(params.slug).slice(0, 3);
  const reviews = getTestimonialsByService(params.slug).slice(0, 3);

  const crumbs = buildCrumbs([
    { name: 'خدماتنا', url: '/services' },
    { name: service.name },
  ]);

  return (
    <PageShell
      schemas={[
        serviceSchema(service),
        faqSchema(service.faqs),
        breadcrumbSchema(crumbs),
      ]}
    >
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="container-page relative grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Icon name={service.icon} className="h-4 w-4" size={16} />
              {category?.name ?? 'خدماتنا'} 
            </span>
            <h1 className="mb-4 text-4xl font-bold text-foreground text-balance">
              {service.name}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {service.tagline}
            </p>
            <p className="mb-6 leading-relaxed text-foreground/85">
              {service.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
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
              <Button asChild size="lg" variant="outline" className="group">
                <a href={`tel:${company.phone}`} dir="ltr">
                  <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  {company.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in delay-200 aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

     <Reveal>
<section className="section-padding">
  <div className="container-page max-w-5xl">
    <SectionHeading
      eyebrow="تنظيف واجهات المباني الزجاجية"
      title={`أفضل شركة ${service.name} في المملكة العربية السعودية`}
      description="حلول احترافية لتنظيف واجهات المباني الزجاجية باستخدام أحدث المعدات وأعلى معايير الجودة والسلامة."
    />

    <div className="prose prose-lg max-w-none rtl:prose text-foreground">

      <p>
        تعد خدمة <strong>{service.name}</strong> من أهم الخدمات التي تحتاج إليها
        المباني التجارية والسكنية للحفاظ على مظهرها الخارجي وقيمتها الجمالية.
        فالواجهات الزجاجية هي أول ما يلفت انتباه العملاء والزوار، ومع مرور الوقت
        تتعرض للأتربة والغبار وآثار الأمطار والرطوبة وعوادم السيارات والبقع
        المختلفة التي تؤثر على نقاء الزجاج ولمعانه. لذلك توفر شركة السدر العربية
        للمقاولات حلولاً متكاملة لتنظيف واجهات المباني الزجاجية باستخدام أحدث
        المعدات والمواد الآمنة التي تمنح الزجاج مظهراً لامعاً دون التسبب بأي خدوش
        أو أضرار.
      </p>

      <p>
        نقدم خدمات تنظيف الواجهات الزجاجية للمباني الإدارية، والأبراج التجارية،
        والفنادق، والمستشفيات، والجامعات، والمجمعات التجارية، والشركات،
        والمولات، والفلل، والقصور، والمباني الحكومية، مع الالتزام الكامل بمعايير
        السلامة المهنية واستخدام فرق عمل مدربة على تنفيذ الأعمال في جميع
        الارتفاعات.
      </p>

      <h2>خدمات تنظيف واجهات زجاجية باحترافية عالية</h2>

      <p>
        تعتمد شركتنا على أحدث تقنيات تنظيف الزجاج الخارجي والداخلي لضمان إزالة
        جميع أنواع الأوساخ والرواسب وآثار الأملاح دون التأثير على جودة الزجاج أو
        الإطارات المعدنية. كما نستخدم معدات متطورة تساعد في الوصول إلى الأماكن
        المرتفعة والصعبة مع المحافظة على أعلى مستويات الأمان أثناء التنفيذ.
      </p>

      <h2>أنواع الواجهات التي نقوم بتنظيفها</h2>

      <ul>
        <li>واجهات الأبراج الزجاجية.</li>
        <li>واجهات المولات والمراكز التجارية.</li>
        <li>واجهات الفنادق والمنتجعات.</li>
        <li>واجهات الشركات والمكاتب.</li>
        <li>واجهات المستشفيات والجامعات.</li>
        <li>واجهات المباني الحكومية.</li>
        <li>واجهات الفلل والقصور.</li>
        <li>واجهات الكلادينج والزجاج.</li>
      </ul>

      <h2>المعدات التي نستخدمها</h2>

      <p>
        تستخدم شركة السدر العربية للمقاولات أحدث المعدات العالمية في تنظيف
        الواجهات الزجاجية مثل الرافعات الهيدروليكية، والمنصات الكهربائية،
        وأنظمة العمل بالحبال، وأعمدة التنظيف بالمياه النقية، بالإضافة إلى مواد
        تنظيف مخصصة للزجاج تمنحه لمعاناً يدوم لفترة طويلة دون ترك آثار أو خطوط.
      </p>

      <h2>لماذا تختار شركة السدر العربية للمقاولات؟</h2>

      <ul>
        <li>فريق متخصص يمتلك خبرة كبيرة في تنظيف الواجهات الزجاجية.</li>
        <li>استخدام معدات حديثة وتقنيات متطورة.</li>
        <li>الالتزام بمعايير الأمن والسلامة.</li>
        <li>تنفيذ الأعمال في الوقت المحدد.</li>
        <li>مواد تنظيف آمنة على الزجاج والإطارات.</li>
        <li>جودة عالية وأسعار تنافسية.</li>
        <li>خدمة متوفرة في جميع مدن المملكة العربية السعودية.</li>
      </ul>

      <h2>فوائد تنظيف الواجهات الزجاجية بشكل دوري</h2>

      <p>
        يساعد التنظيف الدوري للواجهات الزجاجية في المحافظة على المظهر الحضاري
        للمبنى، وإطالة العمر الافتراضي للزجاج، وتقليل تراكم الأتربة والرواسب،
        وتحسين دخول الإضاءة الطبيعية، وترك انطباع احترافي لدى العملاء والزوار،
        بالإضافة إلى المحافظة على قيمة العقار وتقليل تكاليف الصيانة المستقبلية.
      </p>

      <p>
        نحن لا نقدم خدمة تنظيف تقليدية فقط، بل نوفر حلولاً متكاملة تناسب جميع
        أنواع المباني والمنشآت، بدءاً من المباني السكنية الصغيرة وحتى الأبراج
        التجارية الضخمة، مع الحرص على استخدام أفضل الممارسات العالمية في تنظيف
        الواجهات الزجاجية لضمان الحصول على أفضل النتائج في كل مشروع نقوم بتنفيذه.
      </p>

      <h2>نغطي جميع مدن المملكة</h2>

      <p>
        تقدم شركة السدر العربية للمقاولات خدمة تنظيف واجهات المباني الزجاجية في
        جميع أنحاء المملكة العربية السعودية، بما في ذلك الرياض، جدة، مكة
        المكرمة، المدينة المنورة، الدمام، الخبر، الطائف، القصيم، تبوك، أبها،
        وخميس مشيط، مع سرعة الاستجابة والالتزام بأعلى معايير الجودة في جميع
        المشاريع.
      </p>

    </div>
  </div>
</section>
</Reveal>
      {/* Benefits & Features */}
      <Reveal>
      <section className="section-padding bg-muted/40">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">الفوائد</h2>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">المميزات</h2>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
<section className="section-padding">
<div className="container-page">

<SectionHeading
title="أنواع الواجهات التي نقوم بتنظيفها"
/>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="card-soft p-6">
<h3>واجهات الأبراج الزجاجية</h3>
<p>تنظيف الأبراج العالية بأحدث تقنيات الوصول.</p>
</div>

<div className="card-soft p-6">
<h3>واجهات المولات</h3>
<p>تنظيف المراكز التجارية والمحلات.</p>
</div>

<div className="card-soft p-6">
<h3>واجهات الفنادق</h3>
<p>تنظيف الفنادق والمنشآت السياحية.</p>
</div>

<div className="card-soft p-6">
<h3>واجهات الشركات</h3>
<p>تنظيف مباني الشركات والمكاتب.</p>
</div>

<div className="card-soft p-6">
<h3>واجهات المستشفيات</h3>
<p>تنظيف المنشآت الطبية.</p>
</div>

<div className="card-soft p-6">
<h3>واجهات الجامعات</h3>
<p>تنظيف المباني التعليمية.</p>
</div>

</div>

</div>
</section>
</Reveal>

      {/* Work Process */}
      <Reveal>
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            eyebrow="آلية العمل"
            title={`كيف ننفذ ${service.name}؟`}
            description="منهجية واضحة تضمن لك جودة واحترافية في كل خطوة."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="card-soft card-hover p-6">
                <span className="mb-3 block text-4xl font-bold text-primary/20 transition-colors duration-300 hover:text-primary/40">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mb-2 font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
<section className="section-padding bg-muted/40">

<div className="container-page">

<SectionHeading
title="المعدات التي نستخدمها"
/>

<ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

<li className="card-soft p-5">
رافعات هيدروليكية
</li>

<li className="card-soft p-5">
منصات كهربائية
</li>

<li className="card-soft p-5">
معدات Rope Access
</li>

<li className="card-soft p-5">
معدات Water Fed Pole
</li>

<li className="card-soft p-5">
مواد تنظيف آمنة
</li>

<li className="card-soft p-5">
أجهزة تجفيف الزجاج
</li>

</ul>

</div>

</section>
</Reveal>

      {/* Service in all cities */}
      <Reveal>
      <section className="section-padding bg-muted/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="مناطق التغطية"
            title={`${service.name} في كل مدن المملكة`}
            description="نقدم هذه الخدمة في جميع المدن الرئيسية. اختر مدينتك للوصول إلى المحتوى المحلي."
          />
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/${service.slug}/${city.slug}`}
                className="card-soft card-hover flex items-center gap-3 p-4"
              >
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">
                    {service.name} ب{city.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{city.region}</p>
                </div>
                <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading eyebrow="الأسئلة الشائعة" title={`أسئلة عن ${service.name}`} />
          <FaqAccordion items={service.faqs} />
        </div>
      </section>
      </Reveal>

      {/* Related Projects */}
      {projects.length > 0 && (
        <section className="section-padding bg-muted/40">
          <div className="container-page">
            <SectionHeading eyebrow="مشاريعنا" title={`مشاريع ${service.name}`} />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="card-soft card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={p.gallery[0]}
                      alt={p.galleryAlts[0]}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 font-bold line-clamp-1 transition-colors group-hover:text-primary">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-page">
            <SectionHeading eyebrow="خدمات ذات صلة" title="قد تهمك أيضًا" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {posts.length > 0 && (
        <section className="section-padding bg-muted/40">
          <div className="container-page">
            <SectionHeading eyebrow="مقالات ذات صلة" title="من المدونة" />
            <div className="grid gap-6 sm:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-soft card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 font-bold line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`هل تحتاج ${service.name}؟`}
        description={`تواصل معنا اليوم واحصل على عرض سعر مجاني لـ${service.name} خلال 24 ساعة.`}
      />
    </PageShell>
  );
}
