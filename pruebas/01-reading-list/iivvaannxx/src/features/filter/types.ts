/** @brief The currently defined filters for the app. */
export type Filter = 'genre' | 'pages'

// The data that each filter uses.
export interface GenreData { genres: string[] }
export interface PagesData { min: number, max: number }

/** @brief Maps each filter to it's own data. */
export interface FilterData {

  'genre': GenreData
  'pages': PagesData
}

/** @brief The handler defined by each filter that filters a book array using it's own data. */
export type FilterHandler<F extends Filter> = (books: BookArray, data: FilterData[F]) => BookArray

/** @brief The handler defined by each filter that determines if the filtering process should be bypassed. */
export type BypassHandler<F extends Filter> = (data: FilterData[F]) => boolean

/** @brief The options that every filter must define. */
export interface FilterOptions <F extends Filter> {

  enabled: boolean
  data: FilterData[F]

  filter: FilterHandler<F>
  shouldBypass?: BypassHandler<F>
}

/** @brief Maps each filter to it's own options. */
export type FilterMap = {

  [F in Filter]: FilterOptions<F>
}
