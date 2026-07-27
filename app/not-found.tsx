import Link from 'next/link';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company } from '@/lib/data/company';
import { services } from '@/lib/data/services';
import { cities } from '@/lib/data/cities';

export default function NotFound() {
  const topServices = services.slice(0, 6);
  const topCities = cities.slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-background px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-8xl font-bold text-primary/20">404</p>
        <h1 className="mb-4 text-3xl font-bold text-foreground">الصفحة غير موجودة</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة
          للصفحة الرئيسية أو تصفح خدماتنا ومناطق تغطيتنا.
        </p>

        <div className="mb-12 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="h-5 w-5" />
              الصفحة الرئيسية
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              <Search className="h-5 w-5" />
              تصفح الخدمات
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${company.phone}`} dir="ltr">
              <Phone className="h-5 w-5" />
              {company.phone}
            </a>
          </Button>
        </div>

        <div className="grid gap-8 text-right sm:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-bold text-foreground">خدماتنا الأكثر طلبًا</h2>
            <ul className="space-y-2">
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-bold text-foreground">مناطق التغطية</h2>
            <ul className="space-y-2">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/cities/${c.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
