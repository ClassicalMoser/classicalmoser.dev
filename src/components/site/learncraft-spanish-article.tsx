import { For, Show } from 'solid-js';
import { learncraftSpanish } from '@content';
import { YoutubeEmbed } from './youtube-embed';
import { Button, Separator } from '@ui';

export function LearnCraftSpanishArticle() {
  const page = learncraftSpanish;

  return (
    <article class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <header class="mb-12 max-w-2xl">
        <p class="font-display text-xs tracking-wide text-muted-foreground">{page.eyebrow}</p>
        <h1 class="mt-2 text-balance font-heading text-3xl tracking-tight sm:text-4xl md:text-5xl">
          {page.title}
        </h1>
        <div class="mt-6 space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          <For each={[...page.lead]}>{(paragraph) => <p>{paragraph}</p>}</For>
        </div>
      </header>

      <div class="space-y-12">
        <For each={[...page.sections]}>
          {(section) => (
            <section class="space-y-4">
              <h2 class="font-heading text-2xl tracking-tight sm:text-3xl">{section.title}</h2>
              <div class="space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                <For each={[...section.body]}>{(paragraph) => <p>{paragraph}</p>}</For>
              </div>
              <Show when={'steps' in section && section.steps}>
                {(steps) => (
                  <ol class="list-decimal space-y-2 border-l border-border pl-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <For each={[...steps()]}>{(step) => <li class="pl-1">{step}</li>}</For>
                  </ol>
                )}
              </Show>
              <Show when={'videos' in section && section.videos}>
                {(videos) => (
                  <div class="space-y-6 pt-2">
                    <For each={[...videos()]}>
                      {(video) => <YoutubeEmbed href={video.href} title={video.title} />}
                    </For>
                  </div>
                )}
              </Show>
              <Show when={'links' in section && section.links}>
                {(links) => (
                  <div class="flex flex-wrap gap-3 pt-1">
                    <For each={[...links()]}>
                      {(link) => (
                        <Button
                          as="a"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          size="sm"
                        >
                          {link.label}
                        </Button>
                      )}
                    </For>
                  </div>
                )}
              </Show>
            </section>
          )}
        </For>
      </div>

      <Separator class="my-12" />

      <p class="text-sm text-muted-foreground">
        <a
          href="/"
          class="underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          ← Back to home
        </a>
      </p>
    </article>
  );
}
