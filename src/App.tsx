import { For } from 'solid-js';
import { Moon, Sun } from 'lucide-solid';
import { useColorMode } from '@hooks';
import solidLogo from './assets/solid.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  SocialIconSprite,
} from '@ui';

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={() => toggleColorMode()}
      aria-label={colorMode() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {colorMode() === 'dark' ? <Sun class="size-4" /> : <Moon class="size-4" />}
    </Button>
  );
}

const accentLinks = [
  { href: 'https://vite.dev/', label: 'Vite', logo: viteLogo },
  { href: 'https://solidjs.com/', label: 'Solid', logo: solidLogo },
] as const;

const projects = [
  {
    title: 'Product surfaces',
    description:
      'Composable UI, accessible primitives, and design tokens that stay consistent from prototype to production.',
  },
  {
    title: 'Performance and DX',
    description:
      'Lean bundles, fast feedback loops, and tooling that keeps teams shipping without fighting the stack.',
  },
  {
    title: 'Collaboration',
    description:
      'Clear interfaces between design and engineering so reviews stay focused on outcomes, not noise.',
  },
] as const;

const socialLinks = [
  { href: 'https://github.com/vitejs/vite', label: 'GitHub', iconId: 'github-icon' as const },
  { href: 'https://chat.vite.dev/', label: 'Discord', iconId: 'discord-icon' as const },
  { href: 'https://x.com/vite_js', label: 'X', iconId: 'x-icon' as const },
  { href: 'https://bsky.app/profile/vite.dev', label: 'Bluesky', iconId: 'bluesky-icon' as const },
] as const;

function App() {
  return (
    <div class="min-h-screen bg-background text-foreground" id="top">
      <SocialIconSprite />
      <header class="sticky top-0 z-10 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div class="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" class="text-sm font-medium tracking-tight">
            classicalmoser.dev
          </a>
          <nav class="flex items-center gap-2 text-xs text-muted-foreground sm:gap-4 sm:text-sm">
            <a href="#work" class="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#about" class="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#connect" class="transition-colors hover:text-foreground">
              Connect
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        <section class="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-20 md:grid-cols-[1fr_minmax(0,280px)] md:items-center md:py-24">
          <div class="flex flex-col gap-6">
            <p class="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Portfolio
            </p>
            <h1 class="text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Software that feels considered.
            </h1>
            <p class="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              I build interfaces and systems with an eye for clarity, accessibility, and
              maintainability. Currently shipping web experiences with modern tooling and a focus on
              the details users notice without being told.
            </p>
            <div class="flex flex-wrap items-center gap-3">
              <Button as="a" href="mailto:hello@classicalmoser.dev" size="default">
                Get in touch
              </Button>
              <Button as="a" href="#work" variant="outline" size="default">
                View selected work
              </Button>
            </div>
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <span class="text-xs text-muted-foreground">Built with</span>
              <ul class="flex items-center gap-5">
                <For each={[...accentLinks]}>
                  {(item) => (
                    <li>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 text-xs font-medium text-foreground/90 transition-opacity hover:opacity-80"
                      >
                        <img
                          src={item.logo}
                          alt=""
                          class="size-6 shrink-0"
                          width="24"
                          height="24"
                        />
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
                src={heroImg}
                alt="Abstract hero illustration for the portfolio"
                class="size-full object-cover"
                width="260"
                height="260"
              />
            </div>
          </div>
        </section>

        <Separator class="mx-auto max-w-5xl" />

        <section id="work" class="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
          <div class="mb-10 max-w-2xl">
            <h2 class="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected work
            </h2>
            <p class="mt-2 text-sm text-muted-foreground sm:text-base">
              Representative themes from recent projects. Swap in real case studies when you are
              ready.
            </p>
          </div>
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <For each={[...projects]}>
              {(project) => (
                <Card class="border-border/80 shadow-none">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter class="pt-0">
                    <span class="text-xs font-medium text-muted-foreground">
                      Case study — coming soon
                    </span>
                  </CardFooter>
                </Card>
              )}
            </For>
          </div>
        </section>

        <Separator class="mx-auto max-w-5xl" />

        <section id="about" class="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
          <div class="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-12">
            <div>
              <h2 class="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
              <p class="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                I care about typography, motion, and predictable behavior under load. Most of my
                time goes into front-of-the-stack work—components, routing, and the glue between
                design and engineering—paired with enough backend awareness to ship end-to-end when
                it matters.
              </p>
            </div>
            <Card class="h-fit border-border/80 shadow-none">
              <CardHeader>
                <CardTitle class="text-base">Stack snapshot</CardTitle>
                <CardDescription>Tools in rotation on this site and elsewhere.</CardDescription>
              </CardHeader>
              <CardContent class="grid gap-3 text-sm text-muted-foreground">
                <p>Solid, Vite, TypeScript, Tailwind CSS, Kobalte primitives.</p>
                <p>
                  Design tokens via CSS variables and component registries that stay close to the
                  DOM.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator class="mx-auto max-w-5xl" />

        <section id="connect" class="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
          <div class="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 class="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Connect
              </h2>
              <p class="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
                Prefer email for new collaborations. Social links below reuse the starter sprite;
                point them at your profiles when you wire this page up.
              </p>
            </div>
            <Button as="a" href="mailto:hello@classicalmoser.dev" variant="secondary">
              hello@classicalmoser.dev
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
                    class="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 text-xs font-medium transition-colors hover:bg-muted/60"
                  >
                    <svg
                      class="size-4 shrink-0 text-foreground"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href={`#${item.iconId}`} />
                    </svg>
                    {item.label}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </section>
      </main>

      <footer class="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} classicalmoser.dev</p>
      </footer>
    </div>
  );
}

export default App;
