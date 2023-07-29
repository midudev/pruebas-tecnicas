import { createList } from '../state/actions'
import { DEFAULT_LISTS } from './constants'

/** @brief Initializes the booklist feature. */
export default function () {

  try {

    // Create all the default lists.
    Object.values(DEFAULT_LISTS).forEach(listName => {

      createList(listName, [])
    })

  } catch (_) { }
}
