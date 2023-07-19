import { writable } from 'svelte/store'
import type { BooksFilters } from '../components/types'

const INITIAL_FILTERS_STATE = {
  genre: '',
  title: '',
  pages: 1200,
}

export const filters = writable<BooksFilters>(INITIAL_FILTERS_STATE)
