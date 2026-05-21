'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-3xl px-5 py-3 transition-all duration-500',
          scrolled ? 'glass shadow-premium' : 'border border-transparent bg-transparent'
        )}
      >
        <Link href="#home" className="font-display text-xl font-semibold tracking-tight text-black">
          MS<span className="text-zinc-400">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-zinc-600 transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="#contact">Start a project</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 md:hidden"
        >
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-zinc-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Start a project
                </Link>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
