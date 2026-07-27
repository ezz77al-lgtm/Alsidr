import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard, ServiceCategoryCard } from '@/components/cards';
import { CTASection } from '@/components/cta-section';
import { services, serviceCategories } from '@/lib/data/services';
import { buildMetadata, buildCrumbs, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'خدماتنا | شركة السدر العربية للمقاولات',
  description:
    'جميع خدمات النظافة الاحترافية التي تقدمها شركة السدر العربية للمقاولات: تنظيف واجهات، مباني، منازل، فلل، مكاتب، خزانات، مكافحة حشرات، جلي رخام، تعقيم، تنظيف ما بعد البناء.',
  path: '/services',
});

export default function ServicesPage() {
  const crumbs = buildCrumbs([{ name: 'خدماتنا' }]);

  return (
    <PageShell schemas={[breadcrumbSchema(crumbs)]}>
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="خدماتنا"
            title="جميع خدمات النظافة الاحترافية"
            description="نقدم أكثر من 35 خدمة نظافة متخصصة للمنشآت السكنية والتجارية والصناعية في كل مدن المملكة العربية السعودية."
          />

          {/* Categories */}
          <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat) => (
              <ServiceCategoryCard
                key={cat.slug}
                name={cat.name}
                shortDescription={cat.shortDescription}
                icon={cat.icon}
                href="#services-list"
                count={cat.serviceSlugs.length}
              />
            ))}
          </div>

          {/* All services by category */}
          <div id="services-list" className="space-y-12">
            {serviceCategories.map((cat) => {
              const catServices = cat.serviceSlugs
                .map((slug) => services.find((s) => s.slug === slug))
                .filter((s): s is NonNullable<typeof s> => Boolean(s));
              if (catServices.length === 0) return null;
              return (
                <div key={cat.slug}>
                  <h2 className="mb-6 text-2xl font-bold text-foreground">{cat.name}</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {catServices.map((s) => (
                      <ServiceCard key={s.slug} service={s} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
