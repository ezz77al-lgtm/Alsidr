
'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { trackEvent } from '@/lib/analytics';

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventParameters?: Record<string, string>;
};

export function TrackedLink({
  eventName,
  eventParameters,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        onClick?.(event);
        trackEvent(eventName, eventParameters);
      }}
    />
  );
}
