'use client';

import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function AuroraBackground({ className, children }: AuroraBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Aurora blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl animate-aurora"
          style={{ animationDuration: '18s' }}
        />
        <div
          className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl animate-aurora"
          style={{ animationDuration: '22s', animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-20 left-1/3 h-[450px] w-[450px] rounded-full bg-primary-light/25 blur-3xl animate-aurora"
          style={{ animationDuration: '25s', animationDelay: '4s' }}
        />
        <div
          className="absolute right-1/4 bottom-0 h-[350px] w-[350px] rounded-full bg-accent-light/15 blur-3xl animate-aurora"
          style={{ animationDuration: '20s', animationDelay: '6s' }}
        />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 -z-10 bg-noise opacity-40" />

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.03]" />

      {children}
    </div>
  );
}