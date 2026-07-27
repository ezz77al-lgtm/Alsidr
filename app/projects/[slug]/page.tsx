import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Target, Wrench, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { ProjectCard } from '@/components/cards';
import { CTASection } from '@/components/cta-section';
import { Reveal } from '@/components/reveal';
import { projects, getProject, getRelatedProjects } from '@/lib/data/projects';
import { getService, getRelatedServices } from '@/lib/data/services';
import { getCity } from '@/lib/data/cities';
import { buildMetadata, buildCrumbs, projectSchema, breadcrumbSchema } from '@/lib/seo';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/projects/${project.slug}`,
    image: project.gallery[0],
    type: 'article',
    publishedTime: project.date,
  });
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const service = getService(project.serviceSlug);
  const city = getCity(project.citySlug);
  const related = getRelatedProjects(project);
  const relatedServices = service ? getRelatedServices(service.slug).slice(0, 3) : [];

  const crumbs = buildCrumbs([
    { name: 'مشاريعنا', url: '/projects' },
    { name: project.title },
  ]);

  return (
    <PageShell schemas={[projectSchema(project), breadcrumbSchema(crumbs)]}>
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {/* Hero */}
      <section className="py-10">
        <div className="container-page">
          <div className="relative mb-8 aspect-[21/9] overflow-hidden rounded-3xl shadow-card animate-fade-up">
            <Image
              src={project.gallery[0]}
              alt={project.galleryAlts[0]}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 right-6 left-6">
              <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl text-balance">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                {city && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {city.name}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {project.durationLabel}
                </span>
                <span>{project.clientType}</span>
                <span>{project.areaLabel}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-bold text-foreground">عن المشروع</h2>
              <p className="mb-8 leading-relaxed text-foreground/85">{project.description}</p>

              {/* Challenges */}
              <h2 className="mb-4 text-2xl font-bold text-foreground">التحديات</h2>
              <ul className="mb-8 space-y-3">
                {project.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <Target className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                    <span className="text-foreground/90">{c}</span>
                  </li>
                ))}
              </ul>

              {/* Solution */}
              <h2 className="mb-4 text-2xl font-bold text-foreground">الحلول</h2>
              <ul className="mb-8 space-y-3">
                {project.solution.map((s) => (
                  <li key={s} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground/90">{s}</span>
                  </li>
                ))}
              </ul>

              {/* Results */}
              <h2 className="mb-4 text-2xl font-bold text-foreground">النتائج</h2>
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {project.results.map((r) => (
                  <div key={r.label} className="card-soft p-4 text-center">
                    <TrendingUp className="mx-auto mb-2 h-6 w-6 text-success" />
                    <p className="text-xl font-bold text-primary">{r.value}</p>
                    <p className="text-xs text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="card-soft p-6">
                <h3 className="mb-4 font-bold text-foreground">تفاصيل المشروع</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">المدينة</dt>
                    <dd className="font-medium">{city?.name ?? '-'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">نوع العميل</dt>
                    <dd className="font-medium">{project.clientType}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">المساحة</dt>
                    <dd className="font-medium">{project.areaLabel}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">المدة</dt>
                    <dd className="font-medium">{project.durationLabel}</dd>
                  </div>
                </dl>
                {service && (
                  <Button asChild className="mt-5 w-full" variant="outline">
                    <Link href={`/services/${service.slug}`}>
                      {service.name}
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Reveal>
      <section className="section-padding bg-muted/40">
        <div className="container-page">
          <SectionHeading eyebrow="معرض الصور" title="صور المشروع" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={img}
                  alt={project.galleryAlts[i] ?? project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Before & After */}
      <Reveal>
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading eyebrow="قبل وبعد" title="شاهد الفرق" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <Image src={project.beforeImage} alt={project.beforeAlt} fill sizes="50vw" className="object-cover" />
              <span className="absolute right-4 top-4 rounded-lg bg-black/70 px-4 py-1.5 text-sm font-medium text-white">قبل</span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <Image src={project.afterImage} alt={project.afterAlt} fill sizes="50vw" className="object-cover" />
              <span className="absolute right-4 top-4 rounded-lg bg-success px-4 py-1.5 text-sm font-medium text-white">بعد</span>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Related projects */}
      {related.length > 0 && (
        <Reveal>
        <section className="section-padding bg-muted/40">
          <div className="container-page">
            <SectionHeading eyebrow="مشاريع ذات صلة" title="مشاريع أخرى" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
        </Reveal>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <Reveal>
        <section className="section-padding">
          <div className="container-page">
            <SectionHeading eyebrow="خدمات ذات صلة" title="خدمات نقدمها" />
            <div className="grid gap-3 sm:grid-cols-3">
              {relatedServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card-soft card-hover flex items-center gap-3 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{s.shortName}</span>
                  <ArrowLeft className="mr-auto h-4 w-4 text-muted-foreground" />
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
