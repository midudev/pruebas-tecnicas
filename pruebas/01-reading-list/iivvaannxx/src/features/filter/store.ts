import { map, action } from 'nanostores'

import type { Filter, FilterMap } from './types'
import {

  filterByGenre, shouldBypassGenreFilter,
  filterByPages, shouldBypassPagesFilter

} from './feature'

/** @brief The filters that can be applied to the book list. */
export const filters = map<FilterMap>({

  genre: {

    enabled: false,
    data: {

      genres: [] as string[]
    },

    filter: filterByGenre,
    shouldBypass: shouldBypassGenreFilter
  },

  pages: {

    enabled: true,
    data: {

      min: -Infinity,
      max: +Infinity
    },

    filter: filterByPages,
    shouldBypass: shouldBypassPagesFilter
  }
})

/** @brief adds the given genre to the the genre filter. */
export const addGenreToFilter = action(filters, 'addGenre', (filters, genre: string) => {

  const filter = filters.get().genre
  const genres = filter.data.genres

  // Don't include it if it's already there.
  if (genres.includes(genre)) {

    return
  }

  const newGenres = [...genres, genre]
  filters.setKey('genre', { ...filter, data: { genres: newGenres } })
})

/** @brief Removes the given genre from the genre filter. */
export const removeGenreFromFilter = action(filters, 'removeGenre', (filters, genre: string) => {

  const filter = filters.get().genre
  const genres = filter.data.genres

  // Can't remove it if it's not there.
  if (!(genres.includes(genre))) {

    return
  }

  const newGenres = genres.filter(current => current !== genre)
  filters.setKey('genre', { ...filter, data: { genres: newGenres } })
})

/** @brief Sets the page range of the page filter. */
export const setPagesFilter = action(filters, 'setPages', (filters, min: number, max: number) => {

  const pages = filters.get().pages
  filters.setKey('pages', { ...pages, data: { min, max } })
})

/** @brief Sets the enabled state of the given filter. */
export const setFilterEnabled = action(filters, 'setEnabled', (filters, name: Filter, enabled: boolean) => {

  const filter = filters.get()[name]
  filters.setKey(name, { ...filter, enabled })
})
