import { For } from 'solid-js';
import { connectCopy, person, socialLinks } from '@content';
import { Button } from '@ui';

export function ConnectSection() {
  const mailto = `mailto:${person.email}`;

  return (
    <section id="connect" class="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <div class="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="font-heading text-2xl tracking-tight sm:text-3xl">Connect</h2>
          <p class="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
            {connectCopy.blurb}
          </p>
        </div>
        <Button as="a" href={mailto} variant="secondary">
          {person.email}
        </Button>
      </div>
      <ul class="mt-10 flex flex-wrap gap-3">
        <For each={[...socialLinks]}>
          {(item) => (
            <li>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 text-xs transition-colors hover:bg-muted/60"
              >
                <svg class="size-4 shrink-0 text-foreground" role="presentation" aria-hidden="true">
                  <use href={`#${item.iconId}`} />
                </svg>
                {item.label}
              </a>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}
