import { For } from 'solid-js';
import { experienceSection } from '@content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@ui';

export function ExperienceSection() {
  const { role, background } = experienceSection;

  return (
    <section id="experience" class="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="font-heading text-2xl tracking-tight sm:text-3xl">{experienceSection.title}</h2>

      <Card class="mt-8 border-border/80 shadow-none">
        <CardHeader>
          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <CardTitle class="font-heading font-normal">{role.company}</CardTitle>
            <span class="shrink-0 text-xs text-muted-foreground">{role.location}</span>
          </div>
          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <CardDescription class="text-sm italic">{role.title}</CardDescription>
            <span class="shrink-0 text-xs text-muted-foreground">{role.years}</span>
          </div>
        </CardHeader>
        <CardContent class="space-y-6">
          <ul class="space-y-2.5">
            <For each={[...role.highlights]}>
              {(item) => (
                <li class="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <span class="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                  {item}
                </li>
              )}
            </For>
          </ul>
          <p class="text-xs text-muted-foreground/80">{role.stack}</p>
        </CardContent>
      </Card>

      <p class="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{background}</p>
    </section>
  );
}
