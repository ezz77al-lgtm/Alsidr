import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { ScrollProgress } from '@/components/scroll-progress';
import { JsonLd } from '@/components/json-ld';
import { organizationSchema } from '@/lib/seo';

interface PageShellProps {
  children: React.ReactNode;
  schemas?: object[];
}

export function PageShell({ children, schemas = [] }: PageShellProps) {
  return (
    <>
      <JsonLd data={[organizationSchema(), ...schemas]} />
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
