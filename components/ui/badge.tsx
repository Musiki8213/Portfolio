import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium tracking-wide text-black/80',
        className
      )}
    >
      {children}
    </span>
  );
}
