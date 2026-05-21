import * as React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      'flex min-h-[140px] w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-zinc-400 focus:border-black/25 focus:ring-2 focus:ring-black/5',
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Textarea };
