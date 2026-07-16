import { notFound } from '@content';

export function NotFoundSection() {
  const page = notFound;

  return (
    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 class="text-balance font-heading text-3xl tracking-tight sm:text-4xl md:text-5xl">
        {page.title}
      </h1>
      <p class="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        {page.lead}
      </p>
      <p class="mt-10 text-sm text-muted-foreground">
        <a
          href={page.homeHref}
          class="underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {page.homeLabel}
        </a>
      </p>
    </section>
  );
}
