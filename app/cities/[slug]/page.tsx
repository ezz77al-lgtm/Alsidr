import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { ProjectCard } from '@/components/cards';
import { CTASection } from '@/components/cta-section';
import { Reveal } from '@/components/reveal';
import { cities, getCity, getNearbyCities } from '@/lib/data/cities';
import { services } from '@/lib/data/services';
import { getProjectsByCity } from '@/lib/data/projects';
import { getTestimonialsByCity } from '@/lib/data/content';
import { company } from '@/lib/data/company';
import { generateCityContent } from '@/lib/content-engine';
import {
  buildMetadata, buildCrumbs, localBusinessSchema, breadcrumbSchema,
} from '@/lib/seo';

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const city = getCity(params.slug);
  if (!city) return {};
  const content = generateCityContent(city);
  return buildMetadata({
    title: content.seoTitle,
    description: content.metaDescription,
    path: `/cities/${city.slug}`,
    image: city.image,
    keywords: [`شركة نظافة ${city.name}`, `تنظيف ${city.name}`, `نظافة ${city.name}`],
  });
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = getCity(params.slug);
  if (!city) notFound();

  const content = generateCityContent(city);
  const nearby = getNearbyCities(params.slug);
  const projects = getProjectsByCity(params.slug).slice(0, 6);
  const reviews = getTestimonialsByCity(params.slug).slice(0, 3);

  const crumbs = buildCrumbs([
    { name: 'مناطق التغطية', url: '/cities' },
    { name: city.name },
  ]);

  return (
    <PageShell
      schemas={[
        localBusinessSchema(city),
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
              <MapPin className="h-4 w-4" size={16} />
              {city.region}
            </span>
            <h1 className="mb-4 text-4xl font-bold text-foreground">{content.h1}</h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{content.intro}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  اطلب عرض سعر مجاني
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
              src={city.image}
              alt={city.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* City context */}
      <Reveal>
      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <SectionHeading
            eyebrow={city.name}
            title={`نخدم كل أحياء ${city.name}`}
            center={false}
          />
          <div className="prose-ar">
            <p>{city.context}</p>
            <p>
              {city.name} تتميز بـ{city.climate} ويبلغ عدد سكانها {city.population}،
              وترتفع عن سطح البحر نحو {city.altitude}. تضم معالم بارزة مثل{' '}
              {city.landmarks.join('، ')}. نغطي كل أحياء {city.name} وضواحيها
              بفرق محترفة جاهزة للوصول إلى موقعك.
            </p>
          </div>
        </div>
      </section>
      </Reveal>

      {/* All services in this city */}
      <Reveal>
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            eyebrow="خدماتنا"
            title={`جميع خدماتنا في ${city.name}`}
            description="اختر الخدمة التي تحتاجها للوصول إلى الصفحة المخصصة لها في مدينتك."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/${city.slug}`}
                className="card-soft card-hover flex items-center gap-3 p-4"
              >
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium text-foreground">
                  {s.name} ب{city.name}
                </span>
                <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Nearby cities */}
      {nearby.length > 0 && (
        <section className="section-padding bg-muted/40">
          <div className="container-page">
            <SectionHeading eyebrow="مدن قريبة" title={`مدن قريبة من ${city.name}`} />
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cities/${c.slug}`}
                  className="card-soft card-hover flex items-center gap-3 p-4"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.region}</p>
                  </div>
                  <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* City projects */}
      {projects.length > 0 && (
        <section className="section-padding">
          <div className="container-page">
            <SectionHeading eyebrow="مشاريعنا" title={`مشاريع منفذة في ${city.name}`} />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* City reviews */}
      {reviews.length > 0 && (
        <Reveal>
        <section className="section-padding bg-muted/40">
          <div className="container-page">
            <SectionHeading eyebrow="آراء العملاء" title={`آراء عملائنا في ${city.name}`} />
            <div className="grid gap-6 sm:grid-cols-3">
              {reviews.map((t) => (
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
        </Reveal>
      )}

      <CTASection
        title={`جاهزون لخدمتك في ${city.name}`}
        description={`تواصل مع ${company.name} اليوم واحصل على عرض سعر مجاني لخدماتك في ${city.name}.`}
      />
    </PageShell>
  );
}
