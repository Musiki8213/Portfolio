'use client';

import type { SkillTickerItem } from '@/lib/skill-ticker-data';
import { skillTickerRow1, skillTickerRow2 } from '@/lib/skill-ticker-data';
import { SkillTickerCard } from '@/components/skills/skill-ticker-card';
import { cn } from '@/lib/utils';

type SkillsTickerProps = {
  className?: string;
};

function TickerRow({
  items,
  direction,
}: {
  items: SkillTickerItem[];
  direction: 'left' | 'right';
}) {
  const track = [...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      <div
        className={cn(
          'flex w-max gap-4 [transform:translateZ(0)]',
          direction === 'left' ? 'animate-ticker-left' : 'animate-ticker-right',
          'group-hover:[animation-play-state:paused]'
        )}
      >
        {track.map((item, index) => (
          <SkillTickerCard key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export function SkillsTicker({ className }: SkillsTickerProps) {
  return (
    <div className={cn('relative space-y-4', className)}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24 md:w-32"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24 md:w-32"
        aria-hidden
      />

      <TickerRow items={skillTickerRow1} direction="left" />
      <TickerRow items={skillTickerRow2} direction="right" />
    </div>
  );
}
