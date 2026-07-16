import { For } from 'solid-js';
import { Menu } from 'lucide-solid';
import { resume } from '@content';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@ui';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: resume.pdfHref, label: 'Résumé', external: true },
  { href: '/#connect', label: 'Connect' },
] as const;

export function SiteHeader() {
  return (
    <header class="sticky top-0 z-10 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" class="font-display text-sm tracking-tight text-foreground/90">
          classicalmoser.dev
        </a>
        <nav class="hidden items-center gap-4 text-sm text-muted-foreground sm:flex">
          <For each={[...navLinks]}>
            {(link) => (
              <a
                href={link.href}
                target={'external' in link && link.external ? '_blank' : undefined}
                class="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )}
          </For>
        </nav>
        <Sheet>
          <SheetTrigger
            class="inline-flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground sm:hidden"
            aria-label="Open navigation"
          >
            <Menu class="size-5" />
          </SheetTrigger>
          <SheetContent side="right" class="w-64">
            <SheetHeader>
              <SheetTitle class="font-display text-sm tracking-tight">
                classicalmoser.dev
              </SheetTitle>
            </SheetHeader>
            <nav class="flex flex-col px-4">
              <For each={[...navLinks]}>
                {(link) => (
                  <SheetClose
                    as="a"
                    href={link.href}
                    target={'external' in link && link.external ? '_blank' : undefined}
                    aria-label={link.label}
                    class="py-2.5 text-left text-base text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </SheetClose>
                )}
              </For>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
