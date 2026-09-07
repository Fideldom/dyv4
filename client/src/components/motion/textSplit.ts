/**
 * DYLANDE MOTION SYSTEM — utilitários de partição de texto
 * Divide títulos em palavras ou letras para animações tipográficas,
 * mantendo o texto real no DOM (nunca canvas, nunca troca de caracteres).
 */

export function splitWords(text: string): string[] {
  return text.split(" ").filter(Boolean);
}

export function splitLetters(text: string): string[] {
  return text.split("");
}

/** Deslocamento pseudo-aleatório determinístico (sem Math.random) para o Letter Drift. */
export function driftOffset(index: number): { x: number; y: number } {
  const seed = (index * 37) % 12;
  const x = (seed % 2 === 0 ? 1 : -1) * (4 + (seed % 6) * 1.6);
  const y = ((index * 17) % 8) - 4;
  return { x, y };
}
