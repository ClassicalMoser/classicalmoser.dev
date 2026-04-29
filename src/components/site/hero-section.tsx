import { For } from 'solid-js';
import { person, hero } from '@content';
import { Button } from '@ui';
import solidLogo from '../../assets/solid.svg';
import viteLogo from '../../assets/vite.svg';
import profile512 from '../../assets/images/Josiah_Profile_512.png';
import profile800 from '../../assets/images/Josiah_Profile_800.png';

const stackLinks = [
  { href: 'https://vite.dev/', label: 'Vite', logo: viteLogo },
  { href: 'https://solidjs.com/', label: 'Solid', logo: solidLogo },
] as const;

export function HeroSection() {
  const mailto = `mailto:${person.email}`;

  return (
    <section class="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-20 md:grid-cols-[1fr_minmax(0,280px)] md:items-center md:py-24">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <p class="font-display text-xs tracking-wide text-muted-foreground">{hero.eyebrow}</p>
          <p class="text-sm text-muted-foreground">
            {person.name} · {person.location}
          </p>
        </div>
        <h1 class="text-balance font-heading text-4xl leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
          {hero.headline}
        </h1>
        <div class="max-w-xl space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          <For each={[...hero.lead]}>{(p) => <p>{p}</p>}</For>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <Button as="a" href={mailto} variant="outline" size="default">
            Email me
          </Button>
          <Button as="a" href="#work" variant="ghost" size="default">
            See featured work
          </Button>
        </div>
        <div class="flex flex-wrap items-center gap-4 pt-2">
          <span class="text-xs text-muted-foreground">This site</span>
          <ul class="flex items-center gap-5">
            <For each={[...stackLinks]}>
              {(item) => (
                <li>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-xs text-foreground/85 transition-opacity hover:opacity-80"
                  >
                    <img src={item.logo} alt="" class="size-6 shrink-0" width="24" height="24" />
                    {item.label}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div class="relative flex justify-center md:justify-end">
        <div class="relative aspect-square w-full max-w-[220px] overflow-hidden border border-border bg-card shadow-sm sm:max-w-[260px]">
          <img
            src={profile800}
            srcset={`${profile512} 512w, ${profile800} 800w`}
            sizes="(min-width: 640px) 260px, 220px"
            alt={`${person.name}`}
            class="size-full object-cover"
            width="260"
            height="260"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
}
