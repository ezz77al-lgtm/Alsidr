'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { services, serviceCategories } from '@/lib/data/services';
import { cities } from '@/lib/data/cities';
import { company } from '@/lib/data/company';
import { cn } from '@/lib/utils';

const mainNav = [
  { name: 'الرئيسية', href: '/' },
  { name: 'خدماتنا', href: '/services', hasDropdown: true },
  { name: 'مناطق التغطية', href: '/cities', hasDropdown: true },
  { name: 'مشاريعنا', href: '/projects' },
  { name: 'المدونة', href: '/blog' },
  { name: 'من نحن', href: '/about' },
  { name: 'اتصل بنا', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <div className="scroll-progress-container">
        <ScrollProgressBar />
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-500',
          scrolled
            ? 'glass-strong border-b border-border/60 shadow-card'
            : 'bg-background/60 backdrop-blur-md'
        )}
      >
        <div className="container-page flex h-header items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3 group">
            <Logo />
            <div className="flex-col sm:flex">
              <span className="font-display text-lg font-bold leading-tight text-primary transition-all duration-500 group-hover:text-gradient">
                شركة السدر
              </span>
              <p className="text-sm text-muted-foreground">العربية للمقاولات والنظافة</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-500 relative',
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  )}
                >
                  <span className="relative">
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                    )}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
                  )}
                </Link>
                {item.hasDropdown && (
                  <div className="invisible absolute right-0 top-full z-50 w-[500px] translate-y-3 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-5 opacity-0 shadow-lift transition-all duration-500 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.href === '/services' ? (
                      <div className="grid grid-cols-2 gap-2">
                        {serviceCategories.map((cat) => (
                          <div key={cat.slug} className="space-y-1">
                            <p className="px-2 text-xs font-bold uppercase text-primary">
                              {cat.name}
                            </p>
                            {cat.serviceSlugs.slice(0, 4).map((slug) => {
                              const s = services.find((sv) => sv.slug === slug);
                              if (!s) return null;
                              return (
                                <Link
                                  key={slug}
                                  href={`/services/${slug}`}
                                  className="block rounded-lg px-2 py-1.5 text-sm text-foreground/80 transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:translate-x-1"
                                >
                                  {s.shortName}
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-1">
                        {cities.slice(0, 12).map((c) => (
                          <Link
                            key={c.slug}
                            href={`/cities/${c.slug}`}
                            className="block rounded-lg px-2 py-1.5 text-sm text-foreground/80 transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:translate-x-1"
                          >
                            {c.name}
                          </Link>
                        ))}
                        <Link
                          href="/cities"
                          className="col-span-3 mt-1 block rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 px-2 py-1.5 text-center text-sm font-medium text-primary transition-all duration-300 hover:from-primary/20 hover:to-accent/20"
                        >
                          عرض كل المدن
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:flex group magnetic-btn overflow-hidden">
              <a href={`tel:${company.phone}`} dir="ltr" className="flex items-center gap-2">
                <Phone className="h-4 w-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                {company.phone}
              </a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden transition-transform duration-500 hover:scale-110"
                  aria-label="فتح القائمة"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85%] max-w-sm overflow-y-auto p-0"
              >
                <SheetTitle className="sr-only">القائمة الرئيسية</SheetTitle>
                <div className="flex items-center justify-between border-b border-border p-4">
                  <Link href="/" className="flex items-center gap-2 transition-transform duration-500 hover:scale-105">
                    <Logo />
                    <span className="font-display font-bold text-primary">
                      السدر العربية
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="إغلاق" className="transition-all duration-500 hover:scale-110 hover:rotate-90">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-1 p-4">
                  {mainNav.map((item, i) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'rounded-lg px-4 py-3 text-base font-medium transition-all duration-500',
                          isActive(item.href)
                            ? 'bg-gradient-to-r from-primary/10 to-accent/10 text-primary'
                            : 'text-foreground hover:bg-muted hover:translate-x-1'
                        )}
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="border-t border-border p-4">
                  <p className="mb-2 px-1 text-xs font-bold uppercase text-muted-foreground">
                    أبرز خدماتنا
                  </p>
                  <div className="grid grid-cols-1 gap-1">
                    {services.slice(0, 8).map((s) => (
                      <SheetClose asChild key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="rounded-lg px-4 py-2 text-sm text-foreground/80 transition-all duration-300 hover:bg-muted hover:translate-x-1"
                        >
                          {s.shortName}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border p-4">
                  <p className="mb-2 px-1 text-xs font-bold uppercase text-muted-foreground">
                    مناطق التغطية
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {cities.slice(0, 10).map((c) => (
                      <SheetClose asChild key={c.slug}>
                        <Link
                          href={`/cities/${c.slug}`}
                          className="rounded-lg px-4 py-2 text-sm text-foreground/80 transition-all duration-300 hover:bg-muted hover:translate-x-1"
                        >
                          {c.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border p-4">
                  <Button asChild className="w-full group magnetic-btn overflow-hidden">
                    <a href={`tel:${company.phone}`} dir="ltr" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
                      {company.phone}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary-light z-[60] origin-left transition-transform duration-150"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}

function Logo() {
  return (
    <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-xl bg-card  transition-all duration-500  hover:scale-105  shadow-[0_0_40px_rgba(22,101,52,0.45)]">
      <Image
        src="/about/about1.jpg"
        alt="شعار شركة السدر العربية"
        fill
        className="object-contain p-1"
        priority
      />
    </div>
  );
}
