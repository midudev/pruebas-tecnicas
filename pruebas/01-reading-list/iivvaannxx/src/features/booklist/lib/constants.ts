import {

  ReadingIcon,
  WantToReadIcon,
  FavoriteIcon

} from '$lib/icons'

/** @brief The 3 lists created by default. */
export const DEFAULT_LISTS = {

  TO_READ: 'Quiero Leer',
  READING: 'Leyendo',
  FAVORITES: 'Favoritos'
}

/** @brief The icons for each list. */
export const LISTS_ICONS = {

  [DEFAULT_LISTS.TO_READ]: WantToReadIcon,
  [DEFAULT_LISTS.READING]: ReadingIcon,
  [DEFAULT_LISTS.FAVORITES]: FavoriteIcon
}

/** @brief The maximum number of custom lists. */
export const MAX_CUSTOM_LISTS = 5

/** @brief The methods used to serialize and deserialize the data. */
export const ENCODE_DECODE_HANDLERS = {

  encode: JSON.stringify,
  decode: JSON.parse
}
