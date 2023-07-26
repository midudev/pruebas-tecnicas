export type BookAuthor = {
  name: string
  otherBooks: string[]
}

export type Book = {
  id: number | string
  title: string
  synopsis: string
  pages: number
  genre: string
  year: number
  ISBN: string
  cover: string
  author: BookAuthor
  isInReadingList: boolean
  priority: number
}

export interface StoredBook {
  id: number | string
  title: string
  priority: number
  isInReadingList: boolean
  cover: string
}

export type FilesExtensionToDownload = 'txt' | 'json' | 'csv'
