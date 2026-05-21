'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Phone } from 'lucide-react';
import { site } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { BookCallPicker } from '@/components/contact/book-call-picker';
import { ProjectEnquiryForm } from '@/components/contact/project-enquiry-form';
import { GmailIcon } from '@/components/icons/gmail-icon';

export function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Contact"
          title="Let's build something exceptional."
          description="Share your vision—I'll respond with clarity, timelines, and a thoughtful path to launch."
          align="center"
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
            className="rounded-3xl border border-black/8 bg-white p-6 shadow-premium sm:p-8 md:p-10"
          >
            <h3 className="font-display text-xl font-semibold tracking-tight text-black sm:text-2xl">
              Contact channels
            </h3>
            <p className="mt-2 text-zinc-600">Reach out by phone, book a call, Gmail, or WhatsApp.</p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Phone</p>
                <Button asChild className="mt-3 w-full justify-start">
                  <a href={site.phoneHref}>
                    <Phone size={16} />
                    {site.phone}
                  </a>
                </Button>
              </div>

              <BookCallPicker />

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Gmail</p>
                <Button asChild className="mt-3 w-full justify-start">
                  <a href={site.gmailUrl} target="_blank" rel="noopener noreferrer">
                    <GmailIcon className="h-5 w-5" />
                    {site.email}
                  </a>
                </Button>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">WhatsApp</p>
                <Button asChild className="mt-3 w-full justify-start">
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} />
                    WhatsApp {site.phone}
                  </a>
                </Button>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={site.gmailUrl} target="_blank" rel="noopener noreferrer" aria-label="Gmail">
                    <GmailIcon className="h-[18px] w-[18px]" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="rounded-3xl border border-black/8 bg-zinc-50/50 p-6 sm:p-8 md:p-10"
          >
            <h3 className="font-display text-xl font-semibold tracking-tight text-black sm:text-2xl">
              Project enquiry
            </h3>
            <p className="mt-2 text-zinc-600">
              Leave your details below. No technical jargon required—just tell us what you need.
            </p>
            <div className="mt-8">
              <ProjectEnquiryForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
