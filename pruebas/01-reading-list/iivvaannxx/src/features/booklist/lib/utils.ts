import kebabCase from 'just-kebab-case'
import { throwIf } from '$lib/utils'

import * as errors from './errors'
import { lists } from '../state/store'

/** @brief Gets the key name of the list with the given name. */
export function getListKey (name: string) {

  return kebabCase(name.trim())
}

/** @brief Checks if there's a book with the given ISBN in the list with the given name. */
export function hasBook (listName: string, isbn: string) {

  const list = tryGetList(listName)
  const foundBook = list?.books.find(({ ISBN }) => ISBN === isbn)

  return foundBook !== undefined
}

/** @brief Checks if there's a list with the given name. */
export function existsList (name: string) {

  const listName = getListKey(name)
  return lists.get()[listName] !== undefined
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
  throwIf(list === undefined, errors.nonExistentList(name))

  return list
}
