export const BOOK_MAPPING = {
  '=0': 'No books',
  '=1': '1 book',
  other: '# books',
};

export const GENRES = {
  ALL: 'Todos',
  FANTASY: 'Fantasía',
  SCIENCE_FICTION: 'Ciencia ficción',
  ZOMBIES: 'Zombies',
  TERROR: 'Terror',
} as const;

export type Genre = (typeof GENRES)[keyof typeof GENRES];
