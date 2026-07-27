import { cn } from '@/lib/utils';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export function GradientBorder({
  children,
  className,
  animated = true,
}: GradientBorderProps) {
  return (
    <div
      className={cn(
        'gradient-border',
        !animated && '[&::before]:!animation-none',
        className
      )}
    >
      {children}
    </div>
  );
}