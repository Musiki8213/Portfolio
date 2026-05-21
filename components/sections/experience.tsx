'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SectionHeader } from '@/components/section-header';

export function ExperienceSection() {
  return (
    <section id="experience" className="relative border-y border-black/6 bg-zinc-50/40 px-4 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Experience"
          title="A timeline of growth, craft, and delivery."
          description="From academic foundations at TUT to hands-on product work at mLab Codetribe Academy—building interfaces and systems that ship."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="relative mt-16"
        >
          <div className="absolute left-4 top-0 hidden h-full w-px bg-black/10 md:left-8 md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                variants={fadeUp}
                custom={index}
                className="relative md:pl-20"
              >
                <div className="absolute left-2.5 top-8 hidden h-3 w-3 rounded-full border-2 border-white bg-black shadow md:left-6.5 md:block" />

                <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-premium transition-transform duration-500 hover:-translate-y-1 sm:p-8 md:p-10">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                        {exp.period}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-black sm:text-2xl md:text-3xl">
                        {exp.title}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-zinc-600">{exp.company}</p>
                    </div>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {exp.description.map((item) => (
                      <li key={item} className="flex gap-3 text-zinc-600">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-black" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
