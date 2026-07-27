import Link from 'next/link';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MagneticButton } from '@/components/magnetic-button';
import { company } from '@/lib/data/company';
import { cn } from '@/lib/utils';

interface CTAProps {
  title?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'compact';
}

export function CTASection({
  title = 'جاهز لتبدأ مشروعك القادم؟',
  description = 'تواصل مع شركة السدر العربية للمقاولات اليوم واحصل على عرض سعر مجاني خلال 24 ساعة. فريقنا جاهز لخدمتك في جميع مدن المملكة.',
  className,
  variant = 'default',
}: CTAProps) {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl  bg-gradient-to-br from-blue-950 via-blue-950 to-blue-950 text-white px-6 py-16 text-center shadow-lift sm:px-12 sm:py-24">
          {/* Animated aurora background */}
          <div className="absolute inset-0">
            <div
              className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-aurora"
              style={{ animationDuration: '15s' }}
            />
            <div
              className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-white/15 blur-3xl animate-aurora"
              style={{ animationDuration: '18s', animationDelay: '2s' }}
            />
            <div
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light/20 blur-3xl animate-pulse-soft"
            />
          </div>

          <div className="absolute inset-0 bg-mesh opacity-20" />

          {/* Shimmer sweep line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-shimmer" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-shimmer" />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-5 text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
              {title}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/90 text-pretty sm:text-xl">
              {description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton strength={0.2}>
                <Button
                  asChild
                  size="lg"
                  className="group bg-accent text-accent-foreground shadow-lift hover:bg-accent-light hover:shadow-soft transition-all duration-500 hover:scale-105"
                >
                  <a href={`tel:${company.phone}`} dir="ltr" className="flex items-center gap-2">
                    <Phone className="h-5 w-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    <span>اتصل الآن: {company.phone}</span>
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white transition-all duration-500 hover:scale-105"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                    <span>طلب عرض سعر</span>
                    <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}