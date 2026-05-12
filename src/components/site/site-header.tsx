import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  return (
    <header class="sticky top-0 z-10 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" class="font-display text-sm tracking-tight text-foreground/90">
          classicalmoser.dev
        </a>
        <nav class="flex items-center gap-2 text-xs text-muted-foreground sm:gap-4 sm:text-sm">
          <a href="#work" class="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#experience" class="transition-colors hover:text-foreground">
            Experience
          </a>
          <a href="#focus" class="transition-colors hover:text-foreground">
            Focus
          </a>
          <a href="#connect" class="transition-colors hover:text-foreground">
            Connect
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
