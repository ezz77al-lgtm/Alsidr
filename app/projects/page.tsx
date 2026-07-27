import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { ProjectCard } from '@/components/cards';
import { CTASection } from '@/components/cta-section';
import { projects } from '@/lib/data/projects';
import { buildMetadata, buildCrumbs, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'مشاريعنا | شركة السدر العربية للمقاولات',
  description:
    'مشاريع نفخر بإنجازها في تنظيف الواجهات والمستشفيات والمولات والفنادق والمدارس والخزانات وجلي الرخام ومكافحة الحشرات في مختلف مدن المملكة.',
  path: '/projects',
});

export default function ProjectsPage() {
  const crumbs = buildCrumbs([{ name: 'مشاريعنا' }]);

  return (
    <PageShell schemas={[breadcrumbSchema(crumbs)]}>
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="مشاريعنا"
            title="مشاريع نفخر بإنجازها"
            description="نفذنا آلاف المشاريع الناجحة في مختلف مدن المملكة، إليك أبرزها."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
