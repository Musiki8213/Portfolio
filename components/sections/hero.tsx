'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { hero, site } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeroPhone } from '@/components/sections/hero-phone';

export function HeroSection() {
  const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(site.cvPath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = site.cvFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(site.cvPath, '_blank');
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-14 sm:min-h-[85vh] sm:pt-28 sm:pb-20 lg:min-h-screen lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10 xl:gap-14">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="min-w-0 space-y-6 sm:space-y-8 lg:pr-6 xl:pr-10"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="gap-2 pl-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                  <Sparkles size={12} />
                </span>
                {hero.eyebrow}
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="max-w-none font-display text-[clamp(2.25rem,9vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-black sm:leading-[0.92] lg:text-[clamp(2.5rem,4.8vw,5.5rem)]"
            >
              {hero.headline.map((line, i) => (
                <span key={line} className="block">
                  {i === hero.headline.length - 1 ? (
                    <span className="text-zinc-400">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="max-w-none text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg md:text-xl"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#contact">
                  Start a project
                  <ArrowUpRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href={site.cvPath} onClick={handleDownloadCV}>
                  <Download size={16} />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex lg:justify-end lg:-mt-4 xl:-mt-6">
            <HeroPhone />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center sm:mt-16 lg:mt-20"
        >
          <Link
            href="#about"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-black"
          >
            Scroll to explore
            <ArrowDown size={14} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
