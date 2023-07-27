export type HowManyBooksAre = {
  numberOfAvailableBooks: number
  numberOfBooksInReadingList: number
}

export type Filters = {
  genres: number
  pages: number
}

export type FilterType = keyof Filters
