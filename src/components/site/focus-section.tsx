import { For } from 'solid-js';
import { focusSection } from '@content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui';

export function FocusSection() {
  return (
    <section id="focus" class="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-12">
        <div>
          <h2 class="font-heading text-2xl tracking-tight sm:text-3xl">{focusSection.title}</h2>
          <div class="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <For each={[...focusSection.body]}>{(p) => <p>{p}</p>}</For>
          </div>
        </div>
        <Card class="h-fit border-border/80 shadow-none">
          <CardHeader>
            <CardTitle class="font-heading text-base font-normal">Stack & tooling</CardTitle>
            <CardDescription>
              A representative slice—not an exhaustive résumé line item.
            </CardDescription>
          </CardHeader>
          <CardContent class="text-sm text-muted-foreground">
            <p class="leading-relaxed">{focusSection.stackHint}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
