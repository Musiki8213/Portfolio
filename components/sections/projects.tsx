'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SectionHeader } from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ProjectsSection() {
  return (
    <section id="projects" className="relative border-y border-black/6 bg-zinc-50/40 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Featured work"
          title="Selected projects with production polish."
          description="Real applications spanning commerce, AI, healthcare, and content systems—each designed for clarity and scale."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="mt-16 space-y-10"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              custom={index}
              className="group overflow-hidden rounded-3xl border border-black/8 bg-white shadow-premium-lg transition-transform duration-500 hover:-translate-y-1"
            >
              <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative h-44 overflow-hidden bg-zinc-100 sm:h-48 lg:h-52">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
                    <div>
                      <p className="text-xs uppercase tracking-widest">Reach</p>
                      <p className="mt-1 font-medium text-black">{project.metrics.users}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest">Uptime</p>
                      <p className="mt-1 font-medium text-black">{project.metrics.uptime}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest">Screens</p>
                      <p className="mt-1 font-medium text-black">{project.metrics.pages}</p>
                    </div>
                  </div>

                  <h3 className="mt-8 font-display text-3xl font-semibold tracking-tight text-black md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-zinc-600">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        Live demo
                        <ArrowUpRight size={16} />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
