'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { company } from '@/lib/data/company';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={company.social.find((s) => s.platform === 'واتساب')?.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className={`fixed bottom-6 left-6 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lift transition-all duration-400 hover:scale-105 hover:shadow-soft ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-white/40 animate-pulse-ring" />
        <MessageCircle className="relative h-7 w-7" />
      </span>
      <span className="hidden text-sm font-bold sm:inline">تواصل معنا</span>
    </a>
  );
}
