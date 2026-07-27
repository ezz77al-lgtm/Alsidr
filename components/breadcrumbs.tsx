import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Crumb {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="مسار التنقل"
      className={cn(
        'flex flex-wrap items-center gap-1 text-sm text-muted-foreground',
        className
      )}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {item.url && !isLast ? (
              <Link
                href={item.url}
                className="link-underline hover:text-primary"
              >
                {item.name}
              </Link>
            ) : (
              <span
                className={cn(isLast && 'font-medium text-foreground')}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.name}
              </span>
            )}
            {!isLast && (
              <ChevronLeft className="h-4 w-4 shrink-0 text-muted-foreground/60" />
            )}
          </span>
        );
      })}
    </nav>
  );
}
