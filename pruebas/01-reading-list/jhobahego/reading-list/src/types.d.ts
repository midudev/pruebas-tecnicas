import { Ref } from "vue"

export interface LibraryData {
  "book": Book
}

export interface Book {
  "title": string,
  "pages": number,
  "genre": string,
  "cover": string,
  "synopsis": string,
  "year": number,
  "ISBN": string,
  "author": Author
}

export interface Author {
  "name": string,
  "otherBooks": string[]
}

export type Genre = "Todos" | "Ciencia ficción" | "Fantasía" | "Zombies" | "Terror"

export enum Action {
  ADD_TO_READED = "readed",
  ADD_TO_AVAILABLE = "available"
}
