import type { Genre } from '~/consts';

export interface Filters {
  search: string;
  genre: Genre;
  pages: number;
}
