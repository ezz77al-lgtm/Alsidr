import './globals.css';
import type { Metadata } from 'next';
import { Tajawal, Amiri } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-arabic',
  display: 'swap',
  preload: true,
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0e4d36' },
    { media: '(prefers-color-scheme: dark)', color: '#0a3325' },
  ],
  width: 'device-width' as const,
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://alsidral.com'),
  title: {
    default: 'شركة السدر العربية للمقاولات | نظافة ومقاولات بالمملكة العربية السعودية',
    template: '%s | شركة السدر العربية للمقاولات',
  },
  description:
    'شركة السدر العربية للمقاولات — خدمات النظافة الاحترافية للمباني والمنشآت في الرياض وجدة ومكة والمدينة المنورة وكل مدن المملكة. تنظيف واجهات، خزانات، مكافحة حشرات، جلي رخام، تعقيم.',
  keywords: [
    'شركة نظافة بالرياض',
    'تنظيف واجهات زجاجية',
    'تنظيف خزانات المياه',
    'مكافحة حشرات',
    'جلي رخام',
    'تنظيف منازل',
    'تنظيف فلل',
    'شركة مقاولات بالسعودية',
    'شركة السدر العربية',
  ],
  applicationName: 'شركة السدر العربية للمقاولات',
  authors: [{ name: 'شركة السدر العربية للمقاولات' }],
  creator: 'شركة السدر العربية للمقاولات',
  publisher: 'شركة السدر العربية للمقاولات',
  alternates: {
    canonical: '/',
    languages: { 'ar-SA': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://alsidral.com',
    siteName: 'شركة السدر العربية للمقاولات',
    title: 'شركة السدر العربية للمقاولات | نظافة ومقاولات بالمملكة العربية السعودية',
    description:
      'خدمات النظافة الاحترافية للمباني والمنشآت في كل مدن المملكة. تنظيف واجهات، خزانات، مكافحة حشرات، جلي رخام، تعقيم.',
    images: [
      {
        url: '/about/about1.jpg',
        width: 1200,
        height: 630,
        alt: 'شركة السدر العربية للمقاولات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة السدر العربية للمقاولات',
    description:
      'خدمات النظافة الاحترافية للمباني والمنشآت في كل مدن المملكة العربية السعودية.',
    images: ['/about/about1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'business',
  formatDetection: { telephone: true, address: true, email: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${amiri.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
