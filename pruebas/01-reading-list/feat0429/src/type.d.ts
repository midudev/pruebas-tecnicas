import { type Genre } from './constants/genres'

export interface Author {
  name: string
  otherBooks: string[]
}

export interface Book {
  title: string
  pages: number
  genre: Genre
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export interface PaginationState {
  currentPage: number
  firstIndex: number
  lastIndex: number
}

export interface PaginationRange {
  startPage: number
  endPage: number
}

export interface PaginationParameters extends Pick<PaginationState, 'currentPage'> {
  siblings?: number
  totalPages: number
}
