import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SectionHeading } from '@/components/section-heading';
import { ContactForm } from '@/components/contact-form';
import { company } from '@/lib/data/company';
import { buildMetadata, buildCrumbs, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'اتصل بنا | شركة السدر العربية للمقاولات',
  description:
    'تواصل مع شركة السدر العربية للمقاولات لطلب خدمات النظافة أو الحصول على عرض سعر مجاني. اتصل بنا أو راسلنا عبر النموذج.',
  path: '/contact',
});

export default function ContactPage() {
  const crumbs = buildCrumbs([{ name: 'اتصل بنا' }]);

  return (
    <PageShell schemas={[breadcrumbSchema(crumbs)]}>
      <div className="container-page pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="py-12">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div>
            <SectionHeading
              eyebrow="اتصل بنا"
              title="نحن هنا لخدمتك"
              description="تواصل معنا عبر أي من القنوات التالية، أو املأ النموذج وسيتواصل معك فريقنا خلال 24 ساعة."
              center={false}
            />

            <div className="space-y-4">
              <div className="card-soft flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">الهاتف</p>
                  <a href={`tel:${company.phone}`} dir="ltr" className="font-bold text-foreground hover:text-primary">
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="card-soft flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-success/10 text-success">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">واتساب</p>
                  <a href={company.social.find((s) => s.platform === 'واتساب')?.url} dir="ltr" className="font-bold text-foreground hover:text-primary">
                    {company.whatsapp}
                  </a>
                </div>
              </div>

              <div className="card-soft flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">البريد الإلكتروني</p>
                  <a href={`mailto:${company.email}`} className="font-bold text-foreground hover:text-primary">
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="card-soft flex items-start gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-info/10 text-info">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">العنوان</p>
                  <p className="font-bold text-foreground">
                    {company.address.street}، {company.address.city}، {company.address.country}
                  </p>
                </div>
              </div>

              <div className="card-soft flex items-start gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">ساعات العمل</p>
                  {company.hours.map((h) => (
                    <p key={h.days} className="font-medium text-foreground">
                      {h.days}: {h.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">طلب عرض سعر مجاني</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="container-page">
          <div className="relative min-h-[400px] overflow-hidden rounded-3xl border border-border shadow-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-muted" />
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lift">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">مقرنا الرئيسي</h3>
              <p className="mb-1 text-muted-foreground">{company.address.street}</p>
              <p className="mb-4 text-muted-foreground">{company.address.city}، {company.address.country}</p>
              <a
                href={`https://www.google.com/maps?q=${company.geo.lat},${company.geo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
              >
                <MapPin className="h-4 w-4" />
                عرض على الخريطة
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
