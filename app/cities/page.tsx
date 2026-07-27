import Link from 'next/link';
import { MapPin, ArrowLeft } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { CityCard } from '@/components/cards';
import { CTASection } from '@/components/cta-section';
import { cities } from '@/lib/data/cities';
import { buildMetadata, buildCrumbs, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'مناطق التغطية | شركة السدر العربية للمقاولات',
  description:
    'نقدم خدمات النظافة في 18 مدينة رئيسية بالمملكة العربية السعودية: الرياض، جدة، مكة، المدينة المنورة، الدمام، الخبر، أبها، تبوك، حائل، القصيم وغيرها.',
  path: '/cities',
});

export default function CitiesPage() {
  const crumbs = buildCrumbs([{ name: 'مناطق التغطية' }]);

  return (
    <PageShell schemas={[breadcrumbSchema(crumbs)]}>
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="مناطق التغطية"
            title="نخدمكم في كل مدن المملكة"
            description="فروعنا وفرقنا تغطي 18 مدينة رئيسية في المملكة العربية السعودية، مع تغطية للأحياء والضواحي."
          />
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>

          {/* List view for SEO */}
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground">جميع المدن</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="card-soft card-hover flex items-center gap-3 p-4"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{city.name}</p>
                    <p className="text-xs text-muted-foreground">{city.region}</p>
                  </div>
                  <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
