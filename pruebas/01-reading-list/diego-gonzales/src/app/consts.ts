export const GENRES = {
  FANTASY: 'Fantasía',
  SCIENCE_FICTION: 'Ciencia ficción',
  ZOMBIES: 'Zombies',
  TERROR: 'Terror',
} as const;

export type Genre = (typeof GENRES)[keyof typeof GENRES];
