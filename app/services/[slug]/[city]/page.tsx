import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, MapPin, Phone, Sparkles, Building2 } from 'lucide-react';
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
import { services, getService, getRelatedServices } from '@/lib/data/services';
import { cities, getCity, getNearbyCities } from '@/lib/data/cities';
import { getProjectsByCity } from '@/lib/data/projects';
import { company } from '@/lib/data/company';
import { generateServiceCityContent } from '@/lib/content-engine';
import {
  buildMetadata, buildCrumbs, serviceSchema, faqSchema,
  breadcrumbSchema, localBusinessSchema,
} from '@/lib/seo';

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ slug: service.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; city: string };
}) {
  const service = getService(params.slug);
  const city = getCity(params.city);
  if (!service || !city) return {};
  const content = generateServiceCityContent(service, city);
  return buildMetadata({
    title: content.seoTitle,
    description: content.metaDescription,
    path: `/services/${service.slug}/${city.slug}`,
    image: service.image,
    keywords: content.keywords,
  });
}

export default function ServiceCityPage({
  params,
}: {
  params: { slug: string; city: string };
}) {
  const service = getService(params.slug);
  const city = getCity(params.city);
  if (!service || !city) notFound();

  const content = generateServiceCityContent(service, city);
  const related = getRelatedServices(params.slug).slice(0, 4);
  const nearby = getNearbyCities(params.city);
  const cityProjects = getProjectsByCity(params.city).slice(0, 3);

  const crumbs = buildCrumbs([
    { name: 'خدماتنا', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` },
    { name: city.name, url: `/cities/${city.slug}` },
    { name: `${service.name} ب${city.name}` },
  ]);

  return (
    <PageShell
      schemas={[
        serviceSchema(service, city),
        faqSchema(content.faqs),
        breadcrumbSchema(crumbs),
        localBusinessSchema(city),
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
              <MapPin className="h-4 w-4" size={16} />
              {city.name} - {city.region}
            </span>
            <h1 className="mb-5 text-4xl font-bold text-foreground text-balance">
              {content.h1}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {content.intro}
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
              alt={content.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* City-specific detailed description */}
      <Reveal>
      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <SectionHeading
            eyebrow={city.name}
            title={`${service.name} في ${city.name}`}
            center={false}
          />
          <div className="prose-ar">
            <p>{content.cityDescription}</p>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Why customers in this city choose the service */}
      <Reveal>
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="لماذا نحن"
            title={`لماذا يختار عملاؤنا في ${city.name} ${service.name} من شركتنا؟`}
            center={false}
          />
          <div className="prose-ar">
            <p>{content.whyCity}</p>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Benefits */}
      <Reveal>
      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <SectionHeading eyebrow="الفوائد" title="الفوائد التي تحصل عليها" center={false} />
          <ul className="space-y-3">
            {content.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </Reveal>

      {/* Work Process */}
      <Reveal>
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            eyebrow="آلية العمل"
            title={`كيف ننفذ ${service.name} في ${city.name}؟`}
            description="منهجية واضحة تضمن لك جودة واحترافية في كل خطوة."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.map((step, i) => (
              <div key={step.title} className="card-soft card-hover p-6">
                <span className="mb-3 block text-4xl font-bold text-primary/20 transition-colors duration-300 hover:text-primary/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-2 font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="الأسئلة الشائعة"
            title={`أسئلة عن ${service.name} في ${city.name}`}
          />
          <FaqAccordion items={content.faqs} />
        </div>
      </section>
      </Reveal>

      {/* Nearby cities for the same service */}
      {nearby.length > 0 && (
        <section className="section-padding">
          <div className="container-page">
            <SectionHeading
              eyebrow="مدن قريبة"
              title={`${service.name} في مدن قريبة من ${city.name}`}
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${service.slug}/${c.slug}`}
                  className="card-soft card-hover flex items-center gap-3 p-4"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium text-foreground">
                    {service.name} ب{c.name}
                  </span>
                  <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* City projects */}
      {cityProjects.length > 0 && (
        <section className="section-padding bg-muted/40">
          <div className="container-page">
            <SectionHeading eyebrow="مشاريعنا" title={`مشاريع في ${city.name}`} />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cityProjects.map((p) => (
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
                    <h3 className="mb-1 font-bold line-clamp-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services + back to city + back to service */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading eyebrow="روابط ذات صلة" title="استكشف المزيد" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href={`/cities/${city.slug}`}
              className="card-soft card-hover flex items-center gap-3 p-5"
            >
              <Building2 className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">جميع خدماتنا في {city.name}</p>
                <p className="text-xs text-muted-foreground">صفحة المدينة</p>
              </div>
              <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href={`/services/${service.slug}`}
              className="card-soft card-hover flex items-center gap-3 p-5"
            >
              <Icon name={service.icon} className="h-5 w-5 shrink-0 text-primary" size={20} />
              <div>
                <p className="font-medium text-foreground">{service.name}</p>
                <p className="text-xs text-muted-foreground">صفحة الخدمة الرئيسية</p>
              </div>
              <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title={content.cta}
        description={`فريق ${company.name} في ${city.name} جاهز لخدمتك بكل احترافية. احصل على عرض سعر مجاني خلال 24 ساعة.`}
      />
    </PageShell>
  );
}
