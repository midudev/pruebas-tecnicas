import { TipoGenero } from "./enums";

export interface Author {
  name: string;
  otherBooks?: string[];
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

export interface Library {
  book: Book;
}

export interface EstadoAplicacion {
  disponibles: Book[];
  favoritos: Book[];
  filtro: TipoGenero | string;
  filtrados: Book[];
}
