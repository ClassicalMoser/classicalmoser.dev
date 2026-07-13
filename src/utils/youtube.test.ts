import { expect, test } from 'vite-plus/test';
import { youtubeEmbedSrc, youtubeVideoId } from './youtube';

test('youtubeVideoId extracts watch, short, and embed URLs', () => {
  expect(youtubeVideoId('https://www.youtube.com/watch?v=J_9ASvrqBYw')).toBe('J_9ASvrqBYw');
  expect(youtubeVideoId('https://youtu.be/A1MgjOCPQlQ')).toBe('A1MgjOCPQlQ');
  expect(youtubeVideoId('https://www.youtube.com/embed/J_9ASvrqBYw')).toBe('J_9ASvrqBYw');
  expect(youtubeVideoId('https://www.youtube.com/watch?v=J_9ASvrqBYw&t=30s')).toBe('J_9ASvrqBYw');
});

test('youtubeVideoId returns null for non-YouTube URLs', () => {
  expect(youtubeVideoId('https://app.learncraftspanish.com')).toBeNull();
  expect(youtubeVideoId('https://github.com/LearnCraft-Spanish/learncraft-spanish')).toBeNull();
});

test('youtubeEmbedSrc builds a privacy-friendly embed URL', () => {
  expect(youtubeEmbedSrc('https://www.youtube.com/watch?v=J_9ASvrqBYw')).toBe(
    'https://www.youtube-nocookie.com/embed/J_9ASvrqBYw',
  );
  expect(youtubeEmbedSrc('https://github.com/example')).toBeNull();
});
