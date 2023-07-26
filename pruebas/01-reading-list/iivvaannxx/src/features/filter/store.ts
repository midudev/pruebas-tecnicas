import { map, action } from 'nanostores'

import type { Filter, FilterMap } from './types'
import {

  filterByGenre, shouldBypassGenreFilter,
  filterByPages, shouldBypassPagesFilter

} from './feature'

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

export const addGenreToFilter = action(filters, 'addGenre',
  (filters, genre: string) => {

    const filter = filters.get().genre
    const genres = filter.data.genres

    // Don't include it if it's already there.
    if (genres.includes(genre)) {

      return
    }

    const newGenres = [...genres, genre]
    filters.setKey('genre', { ...filter, data: { genres: newGenres } })
  }
)

export const removeGenreFromFilter = action(filters, 'addGenre',
  (filters, genre: string) => {

    const filter = filters.get().genre
    const genres = filter.data.genres

    // Can't remove it if it's not there.
    if (!(genres.includes(genre))) {

      return
    }

    const newGenres = genres.filter(current => current !== genre)
    filters.setKey('genre', { ...filter, data: { genres: newGenres } })
  }
)

export const setPagesFilter = action(filters, 'setPages',
  (filters, min: number, max: number) => {

    const pages = filters.get().pages
    filters.setKey('pages', { ...pages, data: { min, max } })
  }
)

export const setFilterEnabled = action(filters, 'setEnabled',
  (filters, name: Filter, enabled: boolean) => {

    const filter = filters.get()[name]
    filters.setKey(name, { ...filter, enabled })
  }
)
