'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { site } from '@/lib/data';
import { cn } from '@/lib/utils';

const CalBookingEmbed = dynamic(
  () =>
    import('@/components/contact/cal-booking-embed').then((m) => m.CalBookingEmbed),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[420px] items-center justify-center rounded-xl border border-black/10 bg-zinc-50 text-sm text-zinc-500">
        Loading scheduler…
      </div>
    ),
  }
);

export function BookCallPicker() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={cn(
            'flex w-full items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3',
            'text-left text-sm font-medium text-black transition-colors',
            'hover:border-black/20 hover:bg-zinc-50'
          )}
        >
          <CalendarDays size={16} className="shrink-0" />
          Book a call
        </button>
      )}

      {isOpen && (
        <div className="space-y-3 rounded-2xl border border-black/10 bg-zinc-50/80 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Book a call</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-black"
            >
              Close
            </button>
          </div>

          <p className="text-sm text-zinc-600">
            Pick a date, time, and confirm your booking below.
          </p>

          <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
            <CalBookingEmbed />
          </div>

          <p className="text-center text-xs text-zinc-500">
            Scheduler not loading?{' '}
            <a
              href={site.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-black"
            >
              Open Cal.com
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
