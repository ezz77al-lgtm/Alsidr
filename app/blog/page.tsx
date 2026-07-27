import Link from 'next/link';
import Image from 'next/image';
import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { CTASection } from '@/components/cta-section';
import { blogPosts } from '@/lib/data/blog';
import { buildMetadata, buildCrumbs, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'المدونة | شركة السدر العربية للمقاولات',
  description:
    'مقالات إرشادية ونصائح مفيدة عن تنظيف الواجهات الزجاجية وجلي الرخام وتنظيف خزانات المياه ومكافحة الحشرات والتعقيم وصيانة المباني.',
  path: '/blog',
});

export default function BlogPage() {
  const crumbs = buildCrumbs([{ name: 'المدونة' }]);
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <PageShell schemas={[breadcrumbSchema(crumbs)]}>
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="المدونة"
            title="مقالات ونصائح عن النظافة والصيانة"
            description="مقالات إرشادية متخصصة تساعدك على الحفاظ على منشأتك في أفضل حالة."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-soft card-hover group flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 text-xs font-medium text-primary">{post.category}</span>
                  <h3 className="mb-2 font-bold line-clamp-2">{post.title}</h3>
                  <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-auto text-xs text-muted-foreground">{post.readTimeLabel}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
