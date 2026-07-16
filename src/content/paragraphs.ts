/**
 * Soft-wrap long prose in source. Blank lines become paragraphs;
 * single newlines and indentation collapse to spaces.
 *
 * No Markdown — just a writing surface that stays `string[]`.
 */
export function paragraphs(
  strings: TemplateStringsArray,
  ...values: Array<string | number>
): string[] {
  const raw = String.raw({ raw: strings }, ...values);

  return raw
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim(),
    )
    .filter(Boolean);
}
