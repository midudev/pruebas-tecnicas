import { map } from 'nanostores'
import type { FilterMap } from '../lib/types'

import {

  filterByGenre,
  shouldBypassGenreFilter,

  filterByPages,
  shouldBypassPagesFilter

} from '../lib/utils'

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
