import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-14 max-w-2xl',
        center && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <div className="mb-5 flex justify-center">
          <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="relative">{eyebrow}</span>
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h2>
      {center && (
        <div className="mx-auto mt-5 flex items-center justify-center gap-2">
          <span className="h-0.5 w-16 rounded-full bg-gradient-to-l from-primary/60 to-transparent" />
          <span className="relative h-3 w-3">
            <span className="absolute inset-0 rounded-full bg-accent animate-pulse-soft" />
            <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" style={{ animationDuration: '2s' }} />
          </span>
          <span className="h-0.5 w-16 rounded-full bg-gradient-to-r from-primary/60 to-transparent" />
        </div>
      )}
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}