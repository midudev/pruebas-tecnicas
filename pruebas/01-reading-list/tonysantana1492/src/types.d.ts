import { type GENRES_ALLOWED } from './constants'

declare global {
  interface Array<T> {
    toSpliced: (start: number, deleteCount: number, item?: T) => T[]
  }
}

export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export interface Author {
  name: string
  otherBooks: string[]
}

export type KeyGenresAllowed = keyof typeof GENRES_ALLOWED
export type GenresAllowed = (typeof GENRES_ALLOWED)[KeyGenresAllowed] | ''

export interface Genres {
  genres: GenresAllowed
}
