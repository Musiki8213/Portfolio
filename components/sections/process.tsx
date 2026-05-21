'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SectionHeader } from '@/components/section-header';

export function ProcessSection() {
  return (
    <section id="process" className="relative px-4 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Process"
          title="A refined workflow from insight to launch."
          description="Structured phases that keep stakeholders aligned and quality consistently high."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              custom={index}
              className="rounded-3xl border border-black/8 bg-white p-6 shadow-premium transition-transform duration-500 hover:-translate-y-1 sm:p-8"
            >
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-zinc-400">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-black sm:mt-4 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
