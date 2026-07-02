import { For } from 'solid-js';
import { hero, person, profileImage } from '@content';
import { Button } from '@ui';

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
      </div>
      <div class="relative flex justify-center md:justify-end">
        <div class="relative aspect-square w-full max-w-[220px] overflow-hidden border border-border bg-card shadow-sm sm:max-w-[260px]">
          <img
            src={profileImage.src}
            srcset={profileImage.srcSet}
            sizes={profileImage.sizes}
            alt={person.name}
            class="size-full object-cover"
            width={profileImage.width}
            height={profileImage.height}
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
}
