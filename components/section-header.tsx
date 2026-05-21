'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
}: {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl sm:max-w-3xl lg:max-w-2xl'
      }
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:mb-4">
        {label}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:mt-5 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
