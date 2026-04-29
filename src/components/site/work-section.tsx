import { For } from 'solid-js';
import { featuredProjects } from '@content';
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle, Separator } from '@ui';

export function WorkSection() {
  return (
    <>
      <Separator class="mx-auto max-w-5xl" />
      <section id="work" class="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div class="mb-10 max-w-2xl">
          <h2 class="font-heading text-2xl tracking-tight sm:text-3xl">Featured work</h2>
          <p class="mt-2 text-sm text-muted-foreground sm:text-base">
            Things I ship or maintain in public—summarized here; repos and packages carry the full
            detail.
          </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <For each={[...featuredProjects]}>
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
