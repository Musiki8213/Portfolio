'use client';

import { motion } from 'framer-motion';
import { hero, site } from '@/lib/data';
import { cn } from '@/lib/utils';

const lineEase = [0.22, 1, 0.36, 1] as const;
const CHAR_DELAY = 0.042;

function TypewriterText({
  text,
  className,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  startDelay?: number;
}) {
  const tokens = text.split(/(\s+)/).filter((token) => token.length > 0);
  let charIndex = 0;

  return (
    <span className={cn('inline', className)}>
      {tokens.map((token, tokenIndex) => {
        const isSpace = /^\s+$/.test(token);

        if (isSpace) {
          const delay = startDelay + charIndex * CHAR_DELAY;
          charIndex += token.length;
          return (
            <motion.span
              key={`space-${tokenIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01, delay, ease: 'linear' }}
              className="inline-block whitespace-pre"
            >
              {token}
            </motion.span>
          );
        }

        return (
          <span
            key={`word-${tokenIndex}-${token}`}
            className="inline-block max-w-full whitespace-nowrap"
          >
            {Array.from(token).map((char) => {
              const delay = startDelay + charIndex * CHAR_DELAY;
              charIndex += 1;
              return (
                <motion.span
                  key={`${tokenIndex}-${charIndex}-${char}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.01, delay, ease: 'linear' }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

function typewriterDuration(text: string, pause = 0.12) {
  return text.length * CHAR_DELAY + pause;
}

export function HeroPhone() {
  const accentIndex = hero.headline.length - 1;
  const lineBaseDelay = 0.5;
  const greetText = `Hello! I'm ${site.shortName}.`;

  let cursor = lineBaseDelay + typewriterDuration(greetText);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: lineEase }}
      className="relative mx-auto h-[460px] w-[300px] sm:h-[540px] sm:w-[340px] lg:mx-0 lg:ml-auto"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-full w-full"
      >
        <div className="absolute inset-x-3 top-7 bottom-5 rounded-[2.75rem] bg-black shadow-premium-lg" />
        <div className="absolute inset-x-5 top-9 bottom-7 flex flex-col overflow-hidden rounded-[2.35rem] border border-black/10 bg-white">
          <div className="flex shrink-0 items-center justify-between px-4 pb-0.5 pt-3 text-[11px] font-medium tabular-nums text-black">
            <span>9:41</span>
            <div className="h-5 w-20 rounded-full bg-zinc-100" />
            <span className="text-[10px] text-zinc-400">◔</span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-start px-4 pb-8 pt-6 sm:px-5 sm:pb-10 sm:pt-8">
            <div className="space-y-6 sm:space-y-8">
              <p className="block text-[1.45rem] font-semibold leading-[1.08] tracking-[-0.03em] text-black sm:text-[1.65rem]">
                <TypewriterText text={greetText} startDelay={lineBaseDelay} />
              </p>

              <h2 className="font-display font-semibold leading-[0.98] tracking-[-0.045em]">
                {hero.headline.map((line, i) => {
                  const lineDelay = cursor;
                  cursor += typewriterDuration(line);

                  return (
                    <span
                      key={line}
                      className={cn(
                        'block text-[2.35rem] sm:text-[2.9rem]',
                        i === accentIndex ? 'text-zinc-400' : 'text-black'
                      )}
                    >
                      <TypewriterText text={line} startDelay={lineDelay} />
                    </span>
                  );
                })}
              </h2>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-[1.15rem] h-1 w-16 -translate-x-1/2 rounded-full bg-black/80" />
      </motion.div>
    </motion.div>
  );
}
