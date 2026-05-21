'use client';

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { CalendarDays, ExternalLink } from 'lucide-react';
import { site } from '@/lib/data';
import { cn } from '@/lib/utils';

const CalBookingEmbed = dynamic(
  () =>
    import('@/components/contact/cal-booking-embed').then((m) => m.CalBookingEmbed),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[480px] items-center justify-center rounded-xl border border-black/10 bg-white text-sm text-zinc-500">
        Loading Cal.com…
      </div>
    ),
  }
);

const TIME_SLOTS = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
];

type Step = 'date' | 'time' | 'book';

function formatDateYmd(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Opens Cal.com booking page with the chosen day (YYYY-MM-DD). */
export function buildCalBookingUrl(eventUrl: string, date: Date) {
  const base = eventUrl.replace(/\/$/, '');
  const params = new URLSearchParams({ date: formatDateYmd(date) });
  return `${base}?${params.toString()}`;
}

export function BookCallPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('date');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState('');
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const isToday = useMemo(() => {
    if (!selectedDate) return false;
    return selectedDate.toDateString() === today.toDateString();
  }, [selectedDate, today]);

  const isPastTimeForToday = (slot: string) => {
    if (!isToday) return false;
    const [hours, minutes] = slot.split(':').map(Number);
    const slotDate = new Date(today);
    slotDate.setHours(hours, minutes, 0, 0);
    return slotDate <= today;
  };

  const availableSlots = TIME_SLOTS.filter((slot) => !isPastTimeForToday(slot));

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-ZA', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';

  const calFullUrl = selectedDate ? buildCalBookingUrl(site.calUrl, selectedDate) : site.calUrl;

  const closePicker = () => {
    setIsOpen(false);
    setStep('date');
    setSelectedDate(undefined);
    setSelectedTime('');
  };

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
        <div className="space-y-4 rounded-2xl border border-black/10 bg-zinc-50/80 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {step === 'date' && 'Pick a date'}
              {step === 'time' && 'Pick a time'}
              {step === 'book' && 'Confirm on Cal'}
            </p>
            <button
              type="button"
              onClick={closePicker}
              className="text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-black"
            >
              Close
            </button>
          </div>

          {step === 'date' && (
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                if (!date) return;
                setSelectedDate(date);
                setSelectedTime('');
                setStep('time');
              }}
              disabled={{ before: todayStart }}
              className="rdp-monochrome mx-auto"
            />
          )}

          {step === 'time' && selectedDate && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setStep('date')}
                  className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-50"
                >
                  ← Change date
                </button>
              </div>

              <p className="text-xl font-semibold tracking-tight text-black">{formattedDate}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Choose a time</p>

              {availableSlots.length === 0 ? (
                <p className="rounded-xl border border-black/10 bg-white p-3 text-sm text-zinc-600">
                  All slots for today have passed. Please pick another date.
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                  {TIME_SLOTS.map((slot) => {
                    const disabled = isPastTimeForToday(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={disabled}
                        onClick={() => {
                          setSelectedTime(slot);
                          setStep('book');
                        }}
                        className={cn(
                          'rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors',
                          disabled
                            ? 'cursor-not-allowed border-zinc-200 text-zinc-300'
                            : 'border-black/15 bg-white hover:border-black hover:bg-black hover:text-white'
                        )}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {step === 'book' && selectedDate && selectedTime && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-medium text-black">
                  {formattedDate} at {selectedTime}
                </p>
                <button
                  type="button"
                  onClick={() => setStep('time')}
                  className="text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-black"
                >
                  ← Change time
                </button>
              </div>

              <a
                href={calFullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-black px-4 py-3',
                  'text-sm font-medium text-white transition-colors hover:bg-zinc-800'
                )}
              >
                Continue on Cal.com
                <ExternalLink size={14} />
              </a>

              <CalBookingEmbed date={selectedDate} time={selectedTime} />

              <p className="text-center text-xs text-zinc-500">
                If the scheduler above stays blank, use{' '}
                <a
                  href={calFullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline hover:text-black"
                >
                  Open on Cal.com
                </a>
                .
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
