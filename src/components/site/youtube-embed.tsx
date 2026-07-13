import { Show } from 'solid-js';
import { youtubeEmbedSrc } from '@utils';

type YoutubeEmbedProps = {
  href: string;
  title: string;
};

export function YoutubeEmbed(props: YoutubeEmbedProps) {
  return (
    <Show when={youtubeEmbedSrc(props.href)}>
      {(src) => (
        <figure class="space-y-2">
          <div class="relative aspect-video overflow-hidden border border-border/80 bg-card">
            <iframe
              src={src()}
              title={props.title}
              class="absolute inset-0 size-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
          <figcaption class="text-sm text-muted-foreground">{props.title}</figcaption>
        </figure>
      )}
    </Show>
  );
}
