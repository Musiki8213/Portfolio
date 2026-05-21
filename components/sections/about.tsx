'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { about } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SectionHeader } from '@/components/section-header';

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="Craft-led engineering with product clarity."
          description="I translate ideas into refined interfaces and dependable fullstack systems—always with accessibility, performance, and visual discipline."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid gap-8 lg:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="space-y-6 rounded-3xl border border-black/8 bg-zinc-50/50 p-8 md:p-10"
          >
            {about.paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-zinc-700">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="rounded-3xl border border-black/8 bg-white p-8 shadow-premium md:p-10"
          >
            <h3 className="font-display text-2xl font-semibold tracking-tight text-black">
              What I do
            </h3>
            <ul className="mt-8 space-y-5">
              {about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-4 text-zinc-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <Check size={14} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
