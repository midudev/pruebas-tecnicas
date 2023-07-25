import kebabCase from 'just-kebab-case'
import { action, computed } from 'nanostores'
import { persistentMap } from '@nanostores/persistent'

import type { BookList } from './types'
import type { Book } from '$types'

/** @brief The methods used to serialize and deserialize the data. */
const defaultSerializer = {

  encode: JSON.stringify,
  decode: JSON.parse
}

/** @brief The 3 lists created by default. */
const DEFAULT_LISTS = {

  READING: 'Reading',
  TO_READ: 'To Read',
  FAVORITES: 'Favorites'
}

/** @brief Gets the key name of the list with the given name. */
function getListKey (name: string) {

  return kebabCase(name.trim())
}

/** @brief The store that contains all the lists. */
export const lists = persistentMap<Record<string, BookList>>('list:', { }, defaultSerializer)

/** @brief The default list which contains the books the user wants to read. */
export const toReadList = computed(lists, (store) => store[getListKey(DEFAULT_LISTS.TO_READ)])

/** @brief The default list which contains the books the user is currently reading. */
export const readingList = computed(lists, (store) => store[getListKey(DEFAULT_LISTS.READING)])

/** @brief The default list which contains the books the user has marked as favorites. */
export const favoriteList = computed(lists, (store) => store[getListKey(DEFAULT_LISTS.FAVORITES)])

/** @brief Checks if there's a list with the given name. */
export function existsList (name: string) {

  const currentLists = lists.get()
  const listName = getListKey(name)

  return currentLists[listName] !== undefined
}

/** @brief Checks if there's a book with the given ISBN in the list with the given name. */
export function hasBook (listName: string, isbn: string) {

  const list = getList(listName)
  const foundBook = list?.books.find(({ ISBN }) => ISBN === isbn)

  return foundBook !== undefined
}

/** @brief Retrieves a list with the given name. */
export function getList (name: string) {

  const currentLists = lists.get()
  const listName = getListKey(name)

  // Repeated names aren't allowed. Case insensitive.
  if (currentLists[name] === undefined) {

    throw new Error(`A list with ${name} doesn't exist.`)
  }

  return currentLists[listName]
}

/** @brief Creates a new list with the given name and initial set of books. */
export const createList = action(lists, 'createList', (store, name: string, initialBooks: Book[]) => {

  if (existsList(name)) {

    throw new Error(`A list with ${name} already exists.`)
  }

  // Create the new list.
  store.setKey(getListKey(name), {

    displayName: name,
    books: initialBooks
  })
})

/** @brief Deletes the list with the given name. */
export const deleteList = action(lists, 'deleteList', (store, name: string) => {

  if (!(existsList(name))) {

    throw new Error(`A list with ${name} doesn't exist.`)
  }

  // We need to cast undefined as any because the persistentMap type doesn't allow undefined values (but they are needed to delete them).
  store.setKey(getListKey(name), undefined as any)
})

/** @brief Renames the list with the given old name to the new given name. */
export const renameList = action(lists, 'renameList', (store, oldName: string, newName: string) => {

  if (!(existsList(oldName))) {

    throw new Error(`A list with ${oldName} doesn't exist.`)
  }

  // Retrieve the current list to keep the books in it.
  const currentList = getList(oldName)

  deleteList(oldName)
  createList(newName, currentList.books)
})

/** @brief Removes the list with the given name. */
export const addBook = action(lists, 'addBook', (store, listName: string, book: Book) => {

  // Add the book to the list.
  const list = getList(listName)

  // Repeated books aren't allowed.
  if (hasBook(listName, book.ISBN)) {

    throw new Error('The given book is already in the list.')
  }

  // Add the book to the list.
  store.setKey(getListKey(listName), {

    ...list,
    books: [...list.books, book]
  })
})

/** @brief Removes the book with the given isbn on the list with the given name. */
export const removeBook = action(lists, 'removeBook', (store, listName: string, isbn: string) => {

  if (!(hasBook(listName, isbn))) {

    throw new Error('The given book is not in the list.')
  }

  // Remove the book from the list.
  const list = store.get()[listName]
  store.setKey(listName, {

    ...list,
    books: list.books.filter(({ ISBN }) => ISBN !== isbn)
  })
})

try {

  // Create the 3 default lists.
  createList(DEFAULT_LISTS.TO_READ, [])
  createList(DEFAULT_LISTS.READING, [])
  createList(DEFAULT_LISTS.FAVORITES, [])

} catch (_) { }
