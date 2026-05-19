import { For } from 'solid-js';
import { sideProjects } from '@content';
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle, Separator } from '@ui';

export function SideProjectsSection() {
  return (
    <>
      <Separator class="mx-auto max-w-5xl" />
      <section id="projects" class="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div class="mb-10 max-w-2xl">
          <h2 class="font-heading text-2xl tracking-tight sm:text-3xl">In public</h2>
          <p class="mt-2 text-sm text-muted-foreground sm:text-base">
            Tooling and projects I maintain alongside client work—repos carry the full detail.
          </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <For each={[...sideProjects]}>
            {(project) => (
              <Card class="flex flex-col border-border/80 shadow-none">
                <CardHeader>
                  <CardTitle class="font-heading font-normal">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter class="mt-auto pt-0">
                  <Button
                    as="a"
                    href={project.href}
                    variant="outline"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel}
                  </Button>
                </CardFooter>
              </Card>
            )}
          </For>
        </div>
      </section>
    </>
  );
}
