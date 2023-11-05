export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  id: string;
  author: Author;
}

export type ListOfBooks = Book[];

export interface Author {
  name: string;
  otherBooks: string[];
}

export enum Genre {
  All = 'All',
  Fantasia = 'Fantasía',
  CienciaFiccion = 'Ciencia ficción',
  Zombies = 'Zombies',
  Terror = 'Terror',
  Accion = 'Accion',
  AccionAventura = 'Accion Aventura',
  Aventura = 'Aventura',
}

/* REDUCER  */
export interface ReducerState {
  books: ListOfBooks;
  readingList: ListOfBooks;
}

export type ActionType =
  | { type: 'ADD_TO_READING_LIST'; payload: Book }
  | { type: 'REMOVE_FROM_READING_LIST'; payload: Book };
