'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
  variant?: 'up' | 'scale' | 'left' | 'right';
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  variant = 'up',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass = {
    up: 'reveal',
    scale: 'reveal-scale',
    left: 'reveal-left',
    right: 'reveal-right',
  }[variant];

  return (
    <Tag
      ref={ref as React.RefObject<any>}
      className={cn(variantClass, visible && 'is-visible', className)}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}