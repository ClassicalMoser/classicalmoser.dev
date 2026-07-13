const YOUTUBE_HOSTS = new Set(['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be']);

/**
 * Extract a YouTube video id from common watch / short / embed URL shapes.
 * Returns null when the URL is not a recognizable YouTube video link.
 */
export function youtubeVideoId(href: string): string | null {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase();
  if (!YOUTUBE_HOSTS.has(host)) {
    return null;
  }

  if (host === 'youtu.be') {
    const id = url.pathname.split('/').filter(Boolean)[0];
    return id && isVideoId(id) ? id : null;
  }

  if (url.pathname.startsWith('/embed/')) {
    const id = url.pathname.slice('/embed/'.length).split('/')[0];
    return id && isVideoId(id) ? id : null;
  }

  if (url.pathname === '/watch') {
    const id = url.searchParams.get('v');
    return id && isVideoId(id) ? id : null;
  }

  return null;
}

/** Privacy-enhanced embed src, or null when `href` is not a YouTube video. */
export function youtubeEmbedSrc(href: string): string | null {
  const id = youtubeVideoId(href);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}

function isVideoId(value: string): boolean {
  return /^[\w-]{11}$/.test(value);
}
