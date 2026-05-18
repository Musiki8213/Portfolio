import { useMemo, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useForm, ValidationError } from '@formspree/react';
import { CalendarDays } from 'lucide-react';

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
];

const BOOKING_SOURCE = 'Sithomola Musiki website - booking';
const FORMSPREE_FORM_ID = 'xgvgyqkd';

type Step = 'date' | 'time' | 'details';

export const BookCallPicker = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('date');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>('');
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

  const closePicker = () => {
    setIsOpen(false);
    setStep('date');
    setSelectedDate(undefined);
    setSelectedTime('');
  };

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-ZA', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
    : '';

  return (
    <div className="space-y-4">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full rounded-xl border border-[#d4d4d4] dark:border-[#ffffff]/30 bg-[#ffffff] dark:bg-[#000000] dark:text-[#ffffff] px-4 py-3 text-sm font-medium text-left flex items-center gap-3"
        >
          <CalendarDays size={16} />
          Book a call
        </button>
      )}

      {isOpen && (
        <div className="rounded-xl border border-[#d4d4d4] dark:border-[#ffffff]/30 p-4 space-y-4 bg-[#ffffff] dark:bg-[#000000] dark:text-[#ffffff]">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest text-[#525252] dark:text-[#ffffff]">
              {step === 'date' && 'Step 1: Pick a date'}
              {step === 'time' && 'Step 2: Pick a time'}
              {step === 'details' && 'Submit booking request'}
            </p>
            <button
              type="button"
              onClick={closePicker}
              className="text-xs uppercase tracking-widest text-[#525252] dark:text-[#ffffff] hover:text-[#000000] dark:hover:text-[#ffffff]"
            >
              Close
            </button>
          </div>

          {step === 'date' && (
            <div className="space-y-4">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  if (!date) return;
                  setSelectedDate(date);
                  setStep('time');
                }}
                disabled={{ before: todayStart }}
                className="rdp-monochrome"
              />
            </div>
          )}

          {step === 'time' && (
            <div className="space-y-4 rounded-2xl border border-[#d4d4d4] dark:border-[#ffffff]/30 p-4">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep('date')}
                  className="px-4 py-2 rounded-xl border border-[#d4d4d4] dark:border-[#ffffff]/30 text-sm font-medium hover:bg-[#f5f5f5] dark:hover:bg-[#ffffff]/10 transition-colors"
                >
                  ← Change date
                </button>
                <button
                  type="button"
                  onClick={closePicker}
                  className="px-4 py-2 rounded-xl border border-[#d4d4d4] dark:border-[#ffffff]/30 text-sm font-medium hover:bg-[#f5f5f5] dark:hover:bg-[#ffffff]/10 transition-colors"
                >
                  Close
                </button>
              </div>

              <p className="text-xl font-semibold tracking-tight">
                {formattedDate}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#737373] dark:text-[#ffffff]">
                Choose a time
              </p>

              {availableSlots.length === 0 ? (
                <div className="text-sm border border-[#d4d4d4] dark:border-[#ffffff]/30 p-3">
                  All available slots for today have passed. Please change the date.
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const disabled = isPastTimeForToday(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={disabled}
                        onClick={() => {
                          setSelectedTime(slot);
                          setStep('details');
                        }}
                        className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${
                          disabled
                            ? 'border-[#e5e5e5] dark:border-[#ffffff]/20 text-[#a3a3a3] dark:text-[#ffffff]/40 cursor-not-allowed'
                            : 'border-[#cfcfcf] dark:border-[#ffffff]/30 hover:bg-[#000000] hover:text-[#ffffff] dark:hover:bg-[#ffffff] dark:hover:text-[#000000]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              )}

            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-sm">
                {formattedDate} at {selectedTime}
              </p>
              <input type="hidden" name="preferred_date" value={formattedDate} />
              <input type="hidden" name="preferred_time" value={selectedTime} />
              <input type="hidden" name="submitted_from" value={BOOKING_SOURCE} />

              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border border-[#d4d4d4] dark:border-[#ffffff]/30 bg-transparent px-3 py-2 text-sm"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your phone number"
                  className="w-full border border-[#d4d4d4] dark:border-[#ffffff]/30 bg-transparent px-3 py-2 text-sm"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-red-500 mt-1" />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  disabled={state.submitting || state.succeeded}
                  className="border border-[#000000] dark:border-[#ffffff] px-4 py-2 text-xs uppercase tracking-widest hover:bg-[#000000] hover:text-[#ffffff] dark:hover:bg-[#ffffff] dark:hover:text-[#000000] transition-colors disabled:opacity-60"
                >
                  {state.submitting ? 'Sending...' : state.succeeded ? 'Booked' : 'Submit request'}
                </button>
                <button
                  type="button"
                  onClick={() => setStep('time')}
                  className="text-xs uppercase tracking-widest text-[#525252] dark:text-[#ffffff]"
                >
                  Back
                </button>
              </div>

              {state.succeeded && (
                <p className="text-xs text-green-600 dark:text-green-400">Booking request sent successfully.</p>
              )}
              <ValidationError errors={state.errors} className="text-xs text-red-500" />
            </form>
          )}
        </div>
      )}
    </div>
  );
};
