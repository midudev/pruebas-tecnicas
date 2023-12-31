import { action, computed } from 'nanostores'
import { persistentMap, persistentAtom } from '@nanostores/persistent'

import { DEFAULT_LISTS, defaultListNames } from './feature'
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
export const currentListName = persistentAtom('currentList', DEFAULT_LISTS.TO_READ)
export const customListsIndices = persistentAtom<number[]>('customListsIndices', [1, 2, 3, 4, 5], defaultSerializer)

export const currentList = computed([currentListName, lists], (listName) => tryGetList(listName))
export const allListNames = computed(lists, (allLists) => Object.values(allLists).map(list => list.displayName))
export const customListNames = computed(allListNames, (allNames) => allNames.filter(current => !(defaultListNames.includes(current))))

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

/** @brief Creates a custom list with a computed name and an initial set of books. */
export const createCustomList = action(lists, 'createCustomList', (store, initialBooks: BookArray) => {

  const index = customListsIndices.get()[0]
  customListsIndices.set(customListsIndices.get().slice(1))

  const listName = `Mi Lista ${index}`

  throwIfExistentList(listName)
  store.setKey(getListKey(listName), {

    displayName: listName,
    books: initialBooks
  })
})

/** @brief Creates a new list with the given name and initial set of books. */
export const createList = action(lists, 'createList', (store, name: string, initialBooks: BookArray) => {

  throwIfExistentList(name)
  store.setKey(getListKey(name), {

    displayName: name,
    books: initialBooks
  })
})

/** @brief Deletes the list with the given name. */
export const deleteList = action(lists, 'deleteList', (store, name: string) => {

  if (!(Object.values(DEFAULT_LISTS).includes(name))) {

    const currentIndices = customListsIndices.get()
    const index = parseInt(name[name.length - 1])

    const newIndices = [index, ...currentIndices].sort((a, b) => (a - b))
    customListsIndices.set(newIndices)
  }

  throwIfNonExistentList(name)
  store.setKey(getListKey(name), undefined as any) // We need to cast undefined as any because some error with the persistentmMap typings.
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
  store.setKey(getListKey(listName), {

    ...list,
    books: list.books.filter(({ ISBN }) => ISBN !== isbn)
  })
})
