import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowLeft, Award, Users, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { StatsCounter } from '@/components/stats-counter';
import { CTASection } from '@/components/cta-section';
import { Icon } from '@/components/icon';
import { testimonials, certificates, stats } from '@/lib/data/content';
import { company } from '@/lib/data/company';
import { buildMetadata, buildCrumbs, breadcrumbSchema } from '@/lib/seo';
import { TiltCard } from '@/components/tilt-card';
import { Reveal } from '@/components/reveal';

export const metadata = buildMetadata({
  title: 'من نحن | شركة السدر العربية للمقاولات',
  description:
    'شركة السدر العربية للمقاولات شركة سعودية متخصصة في خدمات النظافة الشاملة منذ 2009. تعرف على رحلتنا وفريقنا وشهاداتنا وقيمها.',
  path: '/about',
});

const values = [
  { icon: 'ShieldCheck', title: 'الجودة', desc: 'نلتزم بأعلى معايير الجودة في كل خدمة نقدمها، باستخدام مواد ومعدات معتمدة.' },
  { icon: 'Users', title: 'الاحترافية', desc: 'فريق مدرّب على أحدث المعدات والبروتوكولات يحترم خصوصية العملاء ومواعيدهم.' },
  { icon: 'Award', title: 'الثقة', desc: 'بنينا ثقة آلاف العملاء بفضل الالتزام والشفافية والضمان الموثق على خدماتنا.' },
  { icon: 'MapPin', title: 'الشمولية', desc: 'نغطي 18 مدينة رئيسية في المملكة مع تغطية كاملة للأحياء والضواحي.' },
];

const milestones = [
  { year: '2009', title: 'تأسيس الشركة', desc: 'انطلاقة شركة السدر العربية للمقاولات في الرياض بخدمات تنظيف المنازل والمكاتب.' },
  { year: '2013', title: 'التوسع في الخدمات', desc: 'إضافة خدمات تنظيف الواجهات الزجاجية والخزانات ومكافحة الحشرات.' },
  { year: '2017', title: 'التوسع الجغرافي', desc: 'فتح فروع في جدة ومكة والمدينة المنورة والدمام والمنطقة الشرقية.' },
  { year: '2021', title: 'الشهادات الدولية', desc: 'الحصول على شهادات ISO 9001 و45001 واعتماد مكافحة الحشرات من وزارة الصحة.' },
  { year: '2024', title: 'الريادة', desc: 'أكثر من 5,200 مشروع منفذ و3,800 عميل سعيد في 18 مدينة بالمملكة.' },
];

export default function AboutPage() {
  const crumbs = buildCrumbs([{ name: 'من نحن' }]);

  return (
    <PageShell schemas={[breadcrumbSchema(crumbs)]}>
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Intro */}
      <section className="py-12">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="من نحن"
              title="شركة السدر العربية للمقاولات"
              description={company.tagline}
              center={false}
            />
            <div className="space-y-4 leading-relaxed text-foreground/85">
              <p>{company.description}</p>
              <p>
                منذ تأسيسها عام {company.foundedYear}، تواصل {company.name}
                تقديم خدمات النظافة الاحترافية للمنشآت السكنية والتجارية والصناعية
                في جميع مدن المملكة العربية السعودية، بفريق يضم أكثر من 240 فنيًا
                مدرّبًا على أحدث المعدات والبروتوكولات الصحية.
              </p>
              <p>
                نؤمن بأن النظافة ليست مجرد خدمة، بل أسلوب حياة وأساس صحي لكل
                منشأة. لذا نلتزم بأعلى معايير الجودة والسلامة، ونستخدم مواد
                ومعدات معتمدة وآمنة على الأطفال والحيوانات الأليفة والبيئة.
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link href="/contact">
                  تواصل معنا
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">خدماتنا</Link>
              </Button>
            </div>
          </div>
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
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-primary to-[hsl(160,50%,12%)] text-white">
        <div className="container-page">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            eyebrow="قيمنا"
            title="ما الذي يقودنا؟"
            description="قيم راسخة نلتزم بها في كل خدمة نقدمها."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card-soft p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={v.icon} className="h-7 w-7" size={28} />
                </div>
                <h3 className="mb-2 font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <SectionHeading eyebrow="رحلتنا" title="مسيرتنا على مر السنين" />
          <div className="relative space-y-8 before:absolute before:right-4 before:top-0 before:h-full before:w-0.5 before:bg-border">
            {milestones.map((m) => (
              <div key={m.year} className="relative flex gap-6 pr-12">
                <div className="absolute right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="card-soft flex-1 p-5">
                  <span className="text-sm font-bold text-accent">{m.year}</span>
                  <h3 className="mt-1 font-bold text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading eyebrow="شهاداتنا" title="شهادات واعتمادات رسمية" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div key={cert.name} className="card-soft flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={cert.icon} className="h-6 w-6" size={24} />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-foreground">{cert.name}</h3>
                  <p className="mb-1 text-xs font-medium text-primary">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/40">
        <div className="container-page">
          <SectionHeading eyebrow="آراء عملائنا" title="ماذا يقول عملاؤنا؟" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <div key={t.name} className="card-soft p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`h-4 w-4 ${i < t.rating ? 'text-accent' : 'text-muted'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 1l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L10 16.9 4.2 18.9l1.1-6.5L.6 7.8l6.5-.9L10 1z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
