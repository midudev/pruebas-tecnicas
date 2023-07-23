export interface PaginationState {
  init: number
  offset: number
}

export interface BooksFilters {
  genre: string
  title: string
  pages: number
}

export interface OpenModal {
  component: any
  content: any
}
