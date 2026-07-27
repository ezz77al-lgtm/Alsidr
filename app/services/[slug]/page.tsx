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
