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
  className="card-soft card-hover group relative flex h-[380px] overflow-hidden rounded-3xl"
>

  {/* Background Image */}
  <Image
    src={post.image}
    alt={post.imageAlt}
    fill
    sizes="(max-width:768px) 100vw, 33vw"
    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
  />


  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />


  {/* Content */}
  <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">


    {/* Category */}
    <span className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
      {post.category}
    </span>


    {/* Title */}
    <h3 className="mb-2 text-xl font-bold line-clamp-2">
      {post.title}
    </h3>


    {/* Description */}
    <p className="mb-3 line-clamp-2 text-sm text-white/90">
      {post.excerpt}
    </p>


    {/* Read Time */}
    <span className="text-xs text-white/80">
      {post.readTimeLabel}
    </span>


  </div>

</Link>            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
