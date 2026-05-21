import Link from 'next/link';
import { site } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight text-black">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-zinc-500">{site.role} · {site.location}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-zinc-600">
          <Link href="#projects" className="hover:text-black">
            Projects
          </Link>
          <Link href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-black">
            GitHub
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-black">
            {site.email}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-zinc-400">
        © {new Date().getFullYear()} {site.name}. Crafted with precision.
      </p>
    </footer>
  );
}
