import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { Service, City, Project } from '@/lib/types';
import { cities } from '@/lib/data/cities';
import { Icon } from '@/components/icon';
import { Spotlight } from '@/components/spotlight';
import { cn } from '@/lib/utils';

export function ServiceCard({ service, href }: { service: Service; href?: string }) {
  const link = href ?? `/services/${service.slug}`;

  return (
    <Spotlight className="h-full">
      <Link
        href={link}
        className="card-soft card-hover group relative flex h-[380px] overflow-hidden rounded-3xl"
      >

        {/* Background Image */}
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />


        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent transition-all duration-700 group-hover:from-primary-dark/95" />


        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute inset-0 animate-shine" />
        </div>


        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">


          {/* Icon */}
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

            <Icon
              name={service.icon}
              className="h-6 w-6 text-white"
              size={24}
            />

          </div>


          {/* Title */}
          <h3 className="mb-3 text-xl font-bold">
            {service.shortName}
          </h3>


          {/* Description */}
          <p className="line-clamp-3 text-sm leading-relaxed text-white/90">
            {service.tagline}
          </p>


          {/* Details */}
          <div className="mt-4 flex items-center justify-between">

            <span className="text-xs font-bold text-accent-light">
              {service.priceFromLabel}
            </span>


            <span className="flex items-center gap-1 text-sm font-semibold transition-all duration-500 group-hover:gap-2">

              التفاصيل

              <ArrowLeft
                className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1"
              />

            </span>

          </div>


        </div>

      </Link>
    </Spotlight>
  );
}

export function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="card-soft card-hover group relative flex h-40 items-center justify-center overflow-hidden"
    >
      <Image
        src={city.image}
        alt={city.imageAlt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-115"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/20 transition-all duration-700 group-hover:from-primary-dark/95" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center text-white transition-all duration-700 group-hover:-translate-y-2">
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-125 group-hover:bg-accent/40">
          <MapPin className="h-5 w-5 text-accent-light" />
        </div>
        <span className="font-bold text-lg drop-shadow-md">{city.name}</span>
        <span className="text-xs opacity-90">{city.region}</span>
      </div>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-soft card-hover group relative flex h-[380px] overflow-hidden rounded-3xl"
    >

      {/* Background Image */}
      <Image
        src={project.gallery[0]}
        alt={project.galleryAlts[0]}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-all duration-700 group-hover:from-primary-dark/95" />


      {/* Hover Effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      </div>


      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">


        {/* Location + Duration */}
        <div className="mb-4 flex flex-wrap gap-2">

          <span className="flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs backdrop-blur-md border border-white/10">

            <MapPin className="h-3.5 w-3.5 text-accent-light" />

            {cityName(project.citySlug)}

          </span>


          <span className="flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs backdrop-blur-md border border-white/10">

            <Calendar className="h-3.5 w-3.5" />

            {project.durationLabel}

          </span>

        </div>



        {/* Title */}
        <h3 className="mb-2 text-xl font-bold line-clamp-1 transition-colors duration-500 group-hover:text-accent-light">
          {project.title}
        </h3>


        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/90">
          {project.excerpt}
        </p>


        {/* Results */}
        <div className="flex flex-wrap gap-2">

          {project.results.slice(0, 2).map((r) => (

            <span
              key={r.label}
              className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md"
            >

              <CheckCircle2 className="h-3 w-3 text-accent-light" />

              {r.value}

            </span>

          ))}

        </div>


      </div>


    </Link>
  );
}

function cityName(slug: string): string {
  return cities.find((c) => c.slug === slug)?.name ?? slug;
}

export function ServiceCategoryCard({
  name,
  shortDescription,
  icon,
  href,
  count,
}: {
  name: string;
  shortDescription: string;
  icon: string;
  href: string;
  count: number;
}) {
  return (
    <Link
      href={href}
      className="card-soft card-hover group relative flex h-full flex-col overflow-hidden p-6"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/10" />
      <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-accent/5 transition-all duration-700 group-hover:scale-150 group-hover:bg-accent/10" />
      
      <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-primary-light group-hover:text-primary-foreground group-hover:shadow-lift group-hover:rotate-6">
        <Icon name={icon} className="h-7 w-7" size={28} />
      </div>
      <h3 className="relative mb-2 font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
        {name}
      </h3>
      <p className="relative mb-3 text-sm text-muted-foreground line-clamp-2">
        {shortDescription}
      </p>
      <span className="relative mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all duration-500 group-hover:gap-2">
        {count} خدمة
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}

export function TestimonialCard({
  name,
  role,
  rating,
  text,
  initials,
  className,
}: {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
  className?: string;
}) {
  return (
    <Spotlight className="h-full">
      <div className={cn('card-soft card-hover relative flex h-full flex-col p-6', className)}>
        <div className="absolute right-6 top-6 font-display text-7xl leading-none text-primary/10 select-none transition-all duration-700 group-hover:text-primary/20">
          "
        </div>
        <div className="relative mb-3 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={cn(
                'h-4 w-4 transition-all duration-500',
                i < rating ? 'text-accent scale-100' : 'text-muted scale-90'
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 1l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L10 16.9 4.2 18.9l1.1-6.5L.6 7.8l6.5-.9L10 1z" />
            </svg>
          ))}
        </div>
        <p className="relative mb-4 flex-1 text-sm leading-relaxed text-foreground/90">
          {text}
        </p>
        <div className="flex items-center gap-3 border-t border-border pt-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary via-primary-light to-accent text-sm font-bold text-primary-foreground shadow-soft transition-all duration-500 hover:scale-110 hover:shadow-lift">
            {initials}
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </Spotlight>
  );
}

export function PartnerCard({
  name,
  logo,
  className,
}: {
  name: string;
  logo?: string;
  className?: string;
}) {
  return (
    <div className={cn('partner-card group', className)}>
      <div className="relative mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 transition-all duration-700 group-hover:scale-110 group-hover:shadow-neon">
        {logo ? (
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain p-2 transition-all duration-700 group-hover:scale-110"
            sizes="80px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-gradient">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <p className="relative text-center text-sm font-semibold text-foreground transition-colors duration-500 group-hover:text-primary">
        {name}
      </p>
    </div>
  );
}