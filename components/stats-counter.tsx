'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/icon';
import { Stat } from '@/lib/types';

export function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat, i) => (
        <StatItem key={stat.label} stat={stat} delay={i * 80} />
      ))}
    </div>
  );
}

function StatItem({ stat, delay = 0 }: { stat: Stat; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  const target = parseFloat(stat.value.replace(/[^0-9.]/g, '')) || 0;
  const prefix = stat.value.match(/^[^0-9]*/)?.[0] ?? '';
  const suffix = stat.suffix ?? '';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(target * eased);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const display = target >= 100 ? Math.round(count).toLocaleString('en-US') : count.toFixed(0);

  return (
    <div
      ref={ref}
      className="glass rounded-2xl border border-white/15 p-5 text-center transition-all duration-300 hover:border-accent/40 hover:bg-white/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-light backdrop-blur-sm">
        <Icon name={stat.icon} className="h-6 w-6" size={24} />
      </div>
      <div className="text-3xl font-bold text-white sm:text-4xl" dir="ltr">
        {prefix}
        {display}
        {suffix}
      </div>
      <p className="mt-1.5 text-sm text-white/80">{stat.label}</p>
    </div>
  );
}
