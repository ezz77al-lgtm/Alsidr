import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CTASection } from '@/components/cta-section';
import { Reveal } from '@/components/reveal';
import { blogPosts, getBlogPost, getRelatedBlogPosts } from '@/lib/data/blog';
import { getService } from '@/lib/data/services';
import { company } from '@/lib/data/company';
import {
  buildMetadata, buildCrumbs, articleSchema, breadcrumbSchema,
} from '@/lib/seo';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    keywords: post.keywords,
    type: 'article',
    publishedTime: post.date,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const service = post.serviceSlug ? getService(post.serviceSlug) : null;
  const related = getRelatedBlogPosts(post.serviceSlug, post.citySlug, post.slug);

  const crumbs = buildCrumbs([
    { name: 'المدونة', url: '/blog' },
    { name: post.title },
  ]);

  const dateLabel = new Date(post.date).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <PageShell schemas={[articleSchema(post), breadcrumbSchema(crumbs)]}>
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Hero */}
      <article className="py-10">
        <div className="container-narrow">
          <span className="mb-4 inline-block animate-fade-up rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {post.category}
          </span>
          <h1 className="mb-5 text-3xl font-bold text-foreground text-balance sm:text-4xl animate-fade-up delay-100">
            {post.title}
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-fade-up delay-200">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {dateLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTimeLabel}
            </span>
          </div>

          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl shadow-card animate-fade-in delay-300">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="prose-ar">
            <p className="text-lg text-foreground/90">{post.excerpt}</p>
            {post.content.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          {service && (
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="mb-3 text-sm text-muted-foreground">خدمة ذات صلة</p>
              <Link
                href={`/services/${service.slug}`}
                className="text-xl font-bold text-primary hover:underline"
              >
                {service.name}
              </Link>
              <p className="mt-2 text-sm text-foreground/80">{service.tagline}</p>
            </div>
          )}
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <Reveal>
        <section className="section-padding bg-muted/40">
          <div className="container-page">
            <h2 className="mb-8 text-2xl font-bold text-foreground">مقالات ذات صلة</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card-soft card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 font-bold line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        </Reveal>
      )}

      <CTASection />
    </PageShell>
  );
}
