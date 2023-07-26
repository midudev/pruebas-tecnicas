import { lists } from './store'
import kebabCase from 'just-kebab-case'

/** @brief Gets the key name of the list with the given name. */
export function getListKey (name: string) {

  return kebabCase(name.trim())
}

/** @brief Checks if there's a book with the given ISBN in the list with the given name. */
export function hasBook (listName: string, isbn: string) {

  const list = getList(listName)
  const foundBook = list?.books.find(({ ISBN }) => ISBN === isbn)

  return foundBook !== undefined
}

/** @brief Throws an error if there's a book with the given ISBN in the list with the given name. */
export function throwIfListHasBook (listName: string, isbn: string) {

  if (hasBook(listName, isbn)) {

    throw new Error(`The list ${listName} already has a book with ISBN ${isbn}.`)
  }
}

/** @brief Throws an error if there's no book with the given ISBN in the list with the given name. */
export function throwIfListDoesNotHaveBook (listName: string, isbn: string) {

  if (!(hasBook(listName, isbn))) {

    throw new Error(`The list ${listName} doesn't have a book with ISBN ${isbn}.`)
  }
}

/** @brief Retrieves a list with the given name. */
export function getList (name: string) {

  const currentLists = lists.get()
  const listName = getListKey(name)

  return currentLists[listName]
}

/** @brief Retrieves a list with the given name. */
export function tryGetList (name: string) {

  const list = getList(name)

  if (list === undefined) {

    throw new Error(`A list with name ${name} doesn't exist.`)
  }

  return list
}

/** @brief Throws an error if there's no list with the given name. */
export function throwIfNonExistentList (name: string) {

  const list = getList(name)

  if (list === undefined) {

    throw new Error(`A list with name ${name} doesn't exist.`)
  }
}

/** @brief Throws an error if there's a list with the given name. */
export function throwIfExistentList (name: string) {

  const list = getList(name)

  if (list !== undefined) {

    throw new Error(`A list with name ${name} already exists.`)
  }
}
