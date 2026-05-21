'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SectionHeader } from '@/components/section-header';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative border-y border-black/6 bg-zinc-50/40 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Testimonials"
          title="Trusted for clarity, craft, and follow-through."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.author}
              variants={fadeUp}
              custom={index}
              className="flex flex-col rounded-3xl border border-black/8 bg-white p-8 shadow-premium"
            >
              <Quote className="text-zinc-300" size={28} />
              <p className="mt-6 flex-1 text-lg leading-relaxed text-zinc-700">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-black/6 pt-6">
                <p className="font-medium text-black">{item.author}</p>
                <p className="text-sm text-zinc-500">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
