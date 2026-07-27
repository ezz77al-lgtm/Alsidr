'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  size?: number;
  color?: string;
}

export function Spotlight({
  children,
  className,
  size = 300,
  color = 'hsl(var(--primary) / 0.15)',
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative overflow-hidden', className)}
    >
      <div
        className="pointer-events-none absolute -z-0 rounded-full transition-opacity duration-300"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
          opacity,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}