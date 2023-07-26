import { action, computed } from 'nanostores'
import { persistentMap, persistentAtom } from '@nanostores/persistent'

import { DEFAULT_LISTS } from './feature'
import {

  tryGetList,
  getListKey,
  getList,

  throwIfExistentList,
  throwIfNonExistentList,
  throwIfListHasBook,
  throwIfListDoesNotHaveBook

} from './utils'

/** @brief Represents a persistable book list. */
interface BookList {

  displayName: string
  books: BookArray
}

/** @brief The methods used to serialize and deserialize the data. */
const defaultSerializer = {

  encode: JSON.stringify,
  decode: JSON.parse
}

// All the stores of this feature.
export const lists = persistentMap<Record<string, BookList>>('list:', {}, defaultSerializer)
export const currentListName = persistentAtom<string>('currentList', DEFAULT_LISTS.TO_READ)
export const currentList = computed([currentListName, lists], (listName) => tryGetList(listName))
export const allListNames = computed(lists, (store) => Object.keys(store).map((key) => store[key].displayName))

/** @brief Sets the current list to the one with the given name. */
export const setCurrentList = action(currentListName, 'setCurrentList', (store, name: string) => {

  throwIfNonExistentList(name)
  store.set(name)
})

/** @brief Clears the list with the given name. */
export const clearList = action(lists, 'clearList', (store, name: string) => {

  const list = tryGetList(name)
  store.setKey(getListKey(name), {

    ...list,
    books: []
  })
})

/** @brief Creates a new list with the given name and initial set of books. */
export const createList = action(lists, 'createList', (store, name: string, initialBooks: Book[]) => {

  throwIfExistentList(name)
  store.setKey(getListKey(name), {

    displayName: name,
    books: initialBooks
  })
})

/** @brief Deletes the list with the given name. */
export const deleteList = action(lists, 'deleteList', (store, name: string) => {

  throwIfNonExistentList(name)
  store.setKey(getListKey(name), undefined as any) // We need to cast undefined as any because some error with the persistentmMap typings.
})

/** @brief Renames the list with the given old name to the new given name. */
export const renameList = action(lists, 'renameList', (store, oldName: string, newName: string) => {

  throwIfNonExistentList(oldName)
  throwIfExistentList(newName)

  // Retrieve the current list to keep the books in it.
  const currentList = getList(oldName)

  deleteList(oldName)
  createList(newName, currentList.books)
})

/** @brief Removes the list with the given name. */
export const addBook = action(lists, 'addBook', (store, listName: string, book: Book) => {

  throwIfNonExistentList(listName)
  throwIfListHasBook(listName, book.ISBN)

  // Add the book to the list.
  const list = getList(listName)
  store.setKey(getListKey(listName), {

    ...list,
    books: [...list.books, book]
  })
})

/** @brief Removes the book with the given isbn on the list with the given name. */
export const removeBook = action(lists, 'removeBook', (store, listName: string, isbn: string) => {

  throwIfNonExistentList(listName)
  throwIfListDoesNotHaveBook(listName, isbn)

  // Remove the book from the list.
  const list = getList(listName)
  store.setKey(listName, {

    ...list,
    books: list.books.filter(({ ISBN }) => ISBN !== isbn)
  })
})
