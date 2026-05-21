'use client';

import { SkillsTicker } from '@/components/skills/skills-ticker';

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">Skills</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-black md:text-5xl">
            Tools & technologies
          </h2>
          <p className="mt-4 max-w-xl text-sm text-zinc-500">
            Stack, platforms, and workflows I use across fullstack, mobile, and design.
          </p>
        </div>

        <div className="relative mt-14 -mx-6 overflow-hidden px-6 md:-mx-0 md:px-0">
          <SkillsTicker />
        </div>
      </div>
    </section>
  );
}
