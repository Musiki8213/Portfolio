'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/motion';

export function StatsSection() {
  return (
    <section id="stats" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={index}
              className="rounded-3xl border border-black/8 bg-white p-8 text-center shadow-premium transition-transform duration-500 hover:-translate-y-1"
            >
              <p className="font-display text-5xl font-semibold tracking-tight text-black md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 font-medium text-black">{stat.label}</p>
              <p className="mt-1 text-sm text-zinc-500">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
