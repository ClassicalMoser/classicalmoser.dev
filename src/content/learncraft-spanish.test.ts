import { expect, test } from 'vite-plus/test';
import { learncraftSpanish, learncraftSpanishPath } from './learncraft-spanish';

test('LearnCraft Spanish draft has the expected section outline', () => {
  expect(learncraftSpanishPath).toBe('/work/learncraft-spanish');
  expect(learncraftSpanish.sections.map((section) => section.title)).toEqual([
    'Background',
    'The first version',
    'Where it broke down',
    'The rebuild',
    'Running it as a team',
    'Where it stands',
  ]);
});

test('The rebuild section carries the migration sequence', () => {
  const improvement = learncraftSpanish.sections.find(
    (section) => section.title === 'The rebuild',
  );

  expect(improvement).toBeDefined();
  expect(improvement && 'steps' in improvement ? improvement.steps.length : 0).toBeGreaterThan(0);
});

test('case study embeds the walkthrough videos', () => {
  const videos = learncraftSpanish.sections.flatMap((section) =>
    'videos' in section ? [...section.videos] : [],
  );

  expect(videos.map((video) => video.title)).toEqual([
    'Main App Walkthrough, Feb 2025',
    'Powerful New Features, Oct 2025',
  ]);
});
