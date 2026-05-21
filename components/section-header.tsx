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
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">{label}</p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-black md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-zinc-600">{description}</p>
      )}
    </motion.div>
  );
}
