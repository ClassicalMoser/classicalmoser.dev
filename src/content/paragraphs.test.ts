import { expect, test } from 'vite-plus/test';
import { paragraphs } from './paragraphs';

test('splits blank lines into paragraphs and soft-wraps within them', () => {
  expect(paragraphs`
    First paragraph spans
    two soft-wrapped lines.

    Second paragraph stands alone.
  `).toEqual(['First paragraph spans two soft-wrapped lines.', 'Second paragraph stands alone.']);
});

test('collapses internal whitespace and drops empty blocks', () => {
  expect(paragraphs`

    One   with   spaces.


    Two.

  `).toEqual(['One with spaces.', 'Two.']);
});

test('interpolates values before splitting', () => {
  const year = 2026;
  expect(paragraphs`Working through ${year}.`).toEqual(['Working through 2026.']);
});
