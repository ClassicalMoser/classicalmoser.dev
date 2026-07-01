import { For } from 'solid-js';
import { featuredWork } from '@content';
import { Button } from '@ui';

export function FeaturedWorkSection() {
  return (
    <section id="work" class="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <div class="mb-10 max-w-2xl">
        <p class="font-display text-xs tracking-wide text-muted-foreground">Featured work</p>
        <h2 class="mt-2 font-heading text-2xl tracking-tight sm:text-3xl">{featuredWork.title}</h2>
        <p class="mt-1 text-sm text-muted-foreground sm:text-base">{featuredWork.role}</p>
      </div>

      <div class="grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:gap-14">
        <div class="space-y-6">
          <p class="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {featuredWork.summary}
          </p>
          <ul class="space-y-3 border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <For each={[...featuredWork.highlights]}>{(item) => <li>{item}</li>}</For>
          </ul>
        </div>
        <aside class="flex h-fit flex-col gap-4 border border-border/80 bg-card p-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p class="text-pretty">{featuredWork.closer}</p>
          <div class="flex flex-wrap gap-3">
            <For each={[...featuredWork.links]}>
              {(link) => (
                <Button
                  as="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={link.variant}
                  size="default"
                >
                  {link.label}
                </Button>
              )}
            </For>
          </div>
        </aside>
      </div>
    </section>
  );
}
