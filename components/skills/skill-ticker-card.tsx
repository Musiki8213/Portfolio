import type { SkillTickerItem } from '@/lib/skill-ticker-data';
import { cn } from '@/lib/utils';

function brandIconUrl(slug: string) {
  return `https://cdn.simpleicons.org/${slug}/000000`;
}

type SkillTickerCardProps = SkillTickerItem & {
  className?: string;
};

export function SkillTickerCard({
  name,
  category,
  iconSlug,
  iconUrl,
  Icon,
  className,
}: SkillTickerCardProps) {
  const src = iconUrl ?? (iconSlug ? brandIconUrl(iconSlug) : null);

  return (
    <article
      className={cn(
        'flex shrink-0 items-center gap-4 rounded-2xl border border-neutral-200/90',
        'bg-white px-5 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)]',
        className
      )}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-50">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain grayscale brightness-0 [image-rendering:auto]"
            loading="lazy"
            decoding="async"
          />
        ) : Icon ? (
          <Icon className="h-9 w-9 text-black" strokeWidth={2.25} aria-hidden />
        ) : null}
      </div>
      <div className="min-w-0 text-left">
        <p className="text-sm font-semibold text-neutral-800">{name}</p>
        <p className="text-xs text-neutral-400">{category}</p>
      </div>
    </article>
  );
}
