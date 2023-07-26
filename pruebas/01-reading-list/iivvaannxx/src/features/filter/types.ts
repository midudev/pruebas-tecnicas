export type Filter = 'genre' | 'pages'

export interface GenreData { genres: string[] }
export interface PagesData { min: number, max: number }
export interface FilterData {

  'genre': GenreData
  'pages': PagesData
}

export type FilterHandler<F extends Filter> =
  (books: BookArray, data: FilterData[F]) => BookArray

export type BypassHandler<F extends Filter> =
  (data: FilterData[F]) => boolean

export interface FilterOptions <F extends Filter> {

  enabled: boolean
  data: FilterData[F]

  filter: FilterHandler<F>
  shouldBypass?: BypassHandler<F>
}

export type FilterMap = {

  [F in Filter]: FilterOptions<F>
}
