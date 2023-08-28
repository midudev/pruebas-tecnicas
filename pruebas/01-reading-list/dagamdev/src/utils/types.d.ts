import { LOCAL_KEYS } from "./config"

interface Author {
  name: string
  otherBooks: string[]
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

export interface Filters {
  title?: string
  pages?: number
  gender?: string
}

export type Organize = 'pages' | 'priority' | 'alphabetical'

export type LocalKeys = typeof LOCAL_KEYS[keyof typeof LOCAL_KEYS]