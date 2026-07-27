import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { company } from '@/lib/data/company';
import { services } from '@/lib/data/services';
import { cities } from '@/lib/data/cities';
import { Icon } from '@/components/icon';
import { FaSnapchatGhost } from "react-icons/fa";

export function Footer() {
  const SOCIAL = {
    whatsapp: 'https://wa.me/966569209216',
    tiktok: 'https://www.tiktok.com/@alsidrarabian?_r=1&_t=ZS-98MYShyLB8q',
    snapchat: 'https://snapchat.com/t/Y22naXjT',
    instagram: 'https://www.instagram.com/alsidrcom?utm_source=qr',
  };

  const popularServices = services.slice(0, 10);
  const popularCities = cities.slice(0, 10);

  return (
    <footer className="bg-[#0F1924] text-white pt-12 pb-6 mt-16">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* ========== الشركة والشعار ========== */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-xl bg-card  transition-all duration-500  hover:scale-105  shadow-[0_0_40px_rgba(22,101,52,0.45)]">
                <Image
                  src="/about/about1.jpg"
                  alt="شعار شركة السدر العربية"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div>
                <span className="font-bold text-lg text-emerald-400">شركة السدر العربية</span>
                <h3 className="font-bold text-lg">للمقاولات والنظافة</h3>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-5">
              {company.description}
            </p>

            {/* ========== سوشيال ميديا ========== */}
            <div className="mt-5">
              <p className="mb-3 text-white/80">تابعنا:</p>
              <div className="flex items-center justify-start gap-4 flex-wrap">
                
                {/* Snapchat */}
                <a
                  href={SOCIAL.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Snapchat"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] hover:shadow-[0_0_12px_rgba(255,252,0,0.8)]"
                  style={{ backgroundColor: "#FFFC00" }}
                >
                  <FaSnapchatGhost className="w-4 h-4 text-white drop-shadow-[0_0_1px_black]" />
                </a>

                {/* Instagram */}
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] hover:shadow-[0_0_12px_rgba(225,48,108,0.8)]"
                  style={{
                    background:
                      "linear-gradient(45deg,#F58529,#FEDA77,#DD2A7B,#8134AF,#515BD4)",
                  }}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] hover:shadow-[0_0_12px_rgba(37,211,102,0.8)]"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12.04 2.04C6.52 2.04 2 6.56 2 12.09c0 1.78.47 3.53 1.36 5.08L2 22l4.99-1.3a10.03 10.03 0 0 0 5.05 1.34c5.52 0 10.04-4.52 10.04-10.04S17.56 2.04 12.04 2.04zm0 18.3a8.26 8.26 0 0 1-4.2-1.15l-.3-.18-2.95.77.79-2.87-.19-.3A8.27 8.27 0 1 1 12.04 20.34zm4.67-6.22c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.27-.77-.68-1.29-1.51-1.44-1.77-.15-.26-.02-.4.11-.54.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.01-.46-.05-.13-.56-1.34-.77-1.84-.2-.47-.41-.41-.56-.41-.15 0-.32 0-.49 0s-.46.07-.69.32c-.23.25-.91.88-.91 2.14 0 1.25.9 2.47 1.03 2.64.13.17 1.84 2.8 4.47 3.93.63.27 1.12.43 1.51.55.63.2 1.21.18 1.67.11.51-.08 1.52-.61 1.73-1.19.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.49-.3z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href={SOCIAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 bg-black shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] hover:shadow-[0_0_12px_rgba(0,0,0,0.7)]"
                >
                  <svg viewBox="0 0 256 256" className="w-6 h-6">
                    <path fill="#69C9D0" d="M184.1 77.6c-16.4-9.8-22.2-25.3-23.9-36.8V39h-25.3v122.9c0 12.5-10.1 22.6-22.6 22.6s-22.6-10.1-22.6-22.6 10.1-22.6 22.6-22.6c2.8 0 5.4.5 7.9 1.4V114c-2.6-.4-5.2-.7-7.9-.7-26.4 0-47.8 21.4-47.8 47.8S108.9 209 135.3 209s47.8-21.4 47.8-47.8V92.3c6.6 4.8 15.2 8.9 25.3 10.4V77.6h-24.3z"/>
                    <path fill="#EE1D52" d="M184.1 77.6v25.1c-10.1-1.5-18.7-5.6-25.3-10.4v68.9c0 26.4-21.4 47.8-47.8 47.8-20.4 0-37.9-12.7-44.8-30.5 7.9 6.9 18.3 11 29.7 11 26.4 0 47.8-21.4 47.8-47.8V39h25.3v1.8c1.7 11.5 7.5 27 23.9 36.8h24.3v25.1c-10.1-1.5-18.7-5.6-25.3-10.4z"/>
                    <path fill="#FFFFFF" opacity="0.7" d="M160.2 92.3c6.6 4.8 15.2 8.9 25.3 10.4V77.6c-16.4-9.8-22.2-25.3-23.9-36.8V39h-25.3v122.9c0 12.5-10.1 22.6-22.6 22.6s-22.6-10.1-22.6-22.6 10.1-22.6 22.6-22.6c2.8 0 5.4.5 7.9 1.4V114c-2.6-.4-5.2-.7-7.9-.7-26.4 0-47.8 21.4-47.8 47.8S108.9 209 135.3 209s47.8-21.4 47.8-47.8V92.3z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* ========== الخدمات ========== */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-emerald-400">خدماتنا</h3>
            <ul className="space-y-2 text-sm">
              {popularServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    {s.shortName}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/services" className="font-medium text-emerald-400 hover:text-emerald-300 transition-all duration-300">
                  عرض كل الخدمات ←
                </Link>
              </li>
            </ul>
          </div>

          {/* ========== مناطق التغطية ========== */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-emerald-400">مناطق التغطية</h3>
            <ul className="space-y-2 text-sm">
              {popularCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/cities/${c.slug}`}
                    className="text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    {c.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/cities" className="font-medium text-emerald-400 hover:text-emerald-300 transition-all duration-300">
                  عرض كل المدن ←
                </Link>
              </li>
            </ul>
          </div>

          {/* ========== تواصل معنا ========== */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-emerald-400">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span className="text-white/70">
                  {company.address.street}، {company.address.city}، {company.address.country}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`tel:${company.phone}`} dir="ltr" className="text-white/70 hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`mailto:${company.email}`} className="text-white/70 hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span className="text-white/70">
                  {company.hours.map((h) => (
                    <span key={h.days} className="block">{h.days}: {h.hours}</span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ========== الشريط السفلي ========== */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-white/60 sm:flex-row">
            <p>© {new Date().getFullYear()} {company.name}. جميع الحقوق محفوظة.</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
