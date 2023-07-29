import { computed } from 'nanostores'
import { persistentMap, persistentAtom } from '@nanostores/persistent'

import {

  DEFAULT_LISTS,
  MAX_CUSTOM_LISTS,
  ENCODE_DECODE_HANDLERS

} from '../lib/constants'

/** @brief Represents a persistable book list. */
interface BookList {

  displayName: string
  books: BookArray

  metadata: {

    isCustom: boolean
  }
}

/** @brief All the lists of the application. */
export const lists = persistentMap<Record<string, BookList>>('list:', {}, ENCODE_DECODE_HANDLERS)

/** @brief The name of the current list. */
export const currentListName = persistentAtom('currentList', DEFAULT_LISTS.TO_READ)

/** @brief The currently displayed list. */
export const currentList = computed(currentListName,
  (listName) => lists.get()[listName])

/** @brief All the defined lists in the application. */
export const defaultLists = computed(lists,
  (allLists) => {

    return Object.values(allLists)
      .filter(list => !(list.metadata.isCustom))
      .map(list => list.displayName)
  }
)

/** @brief All the defined lists in the application. */
export const customLists = computed(lists,
  (allLists) => {

    return Object.values(allLists)
      .filter(list => list.metadata.isCustom)
      .map(list => list.displayName)
  }
)

/** @brief The number of custom lists. */
export const customListsCount = computed(customLists,
  (customLists) => customLists.length)

/** @brief Whether we can create more custom lists or not. */
export const canCreateMoreCustomLists = computed(customListsCount,
  (count) => count < MAX_CUSTOM_LISTS)
