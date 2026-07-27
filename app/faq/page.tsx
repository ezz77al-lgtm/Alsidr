import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { FaqAccordion } from '@/components/faq-accordion';
import { CTASection } from '@/components/cta-section';
import { homepageFaq } from '@/lib/data/content';
import {
  buildMetadata, buildCrumbs, breadcrumbSchema, faqSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'الأسئلة الشائعة | شركة السدر العربية للمقاولات',
  description:
    'إجابات على أكثر الأسئلة شيوعًا عن خدمات النظافة ومكافحة الحشرات والتعقيم التي تقدمها شركة السدر العربية للمقاولات.',
  path: '/faq',
});

export default function FaqPage() {
  const crumbs = buildCrumbs([{ name: 'الأسئلة الشائعة' }]);

  return (
    <PageShell schemas={[breadcrumbSchema(crumbs), faqSchema(homepageFaq)]}>
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="py-12">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="الأسئلة الشائعة"
            title="إجابات على أكثر الأسئلة شيوعًا"
            description="كل ما تحتاج معرفته عن خدماتنا وآلية العمل والضمانات."
          />
          <FaqAccordion items={homepageFaq} />
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
