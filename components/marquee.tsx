'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  reverse = false,
  speed = 'normal',
  pauseOnHover = true,
}: MarqueeProps) {
  const speedMap = {
    slow: '60s',
    normal: '35s',
    fast: '20s',
  };

  return (
    <div
      className={cn('relative w-full overflow-hidden', className)}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      }}
    >
      <div
        className="marquee-track-inner flex w-max gap-4 sm:gap-6 md:gap-8"
        style={{
          animation: `marquee ${speedMap[speed]} linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
        {...(pauseOnHover && {
          onMouseEnter: (e) =>
            (e.currentTarget.style.animationPlayState = 'paused'),
          onMouseLeave: (e) =>
            (e.currentTarget.style.animationPlayState = 'running'),
        })}
      >
        {children}
        {/* Duplicate for seamless loop */}
        <div className="flex gap-4 sm:gap-6 md:gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
