import { action } from 'nanostores'
import { throwIf, throwIfNot } from '$lib/utils'

import * as errors from '../lib/errors'
import { MAX_CUSTOM_LISTS } from '../lib/constants'
import { getListKey } from '../lib/utils'

import {

  lists,
  currentListName,
  customListsCount

} from './store'

import {

  getList,
  tryGetList,
  existsList,

  hasBook,
  uniqueCustomListName

} from './helpers'

/** @brief Sets the current list to the one with the given name. */
export const setCurrentList = action(currentListName, 'setCurrentList',
  (store, name: string) => {

    throwIfNot(existsList(name), errors.nonExistentList(name))
    store.set(name)
  }
)

/** @brief Clears the list with the given name. */
export const clearList = action(lists, 'clearList',
  (listsStore, name: string) => {

    const list = tryGetList(name)
    listsStore.setKey(getListKey(name), {

      ...list,
      books: []
    })
  }
)

/** @brief Creates a custom list with a computed name and an initial set of books. */
export const createCustomList = action(lists, 'createCustomList',
  (listsStore, initialBooks: BookArray) => {

    // Check if we can create a new custom list.
    const canCreate = customListsCount.get() < MAX_CUSTOM_LISTS
    throwIfNot(canCreate, errors.noMoreCustomLists(MAX_CUSTOM_LISTS))

    // Generate a unique name for the list and create it.
    const name = uniqueCustomListName()
    listsStore.setKey(getListKey(name), {

      displayName: name.trim(),
      books: initialBooks,

      metadata: {

        isCustom: true
      }
    })
  }
)

/** @brief Creates a new list with the given name and initial set of books. */
export const createList = action(lists, 'createList',
  (listsStore, name: string, initialBooks: BookArray) => {

    throwIf(existsList(name), errors.existentList(name))
    listsStore.setKey(getListKey(name), {

      displayName: name.trim(),
      books: initialBooks,

      metadata: {

        isCustom: false
      }
    })
  }
)

/** @brief Renames the list with the given old name to the new given name. */
export const renameList = action(lists, 'renameList',
  (listsStore, oldName: string, newName: string) => {

    // Ensure that the new name is not already taken and that the old name exists.
    throwIf(existsList(newName), errors.existentList(newName))
    throwIfNot(existsList(oldName), errors.nonExistentList(oldName))

    const currentList = getList(oldName)
    currentListName.set(newName)

    listsStore.setKey(getListKey(oldName), undefined as any) // We need to cast undefined as any because some error with the persistentmMap typings.
    listsStore.setKey(getListKey(newName), {

      ...currentList,
      displayName: newName
    })
  }
)

/** @brief Deletes the list with the given name. */
export const deleteList = action(lists, 'deleteList',
  (listsStore, name: string) => {

    const list = tryGetList(name)
    throwIfNot(list.metadata.isCustom, errors.canNotDeleteDefaultList())

    listsStore.setKey(getListKey(name), undefined as any) // We need to cast undefined as any because some error with the persistentmMap typings.
  }
)

/** @brief Removes the list with the given name. */
export const addBook = action(lists, 'addBook',
  (listsStore, listName: string, book: Book) => {

    throwIfNot(existsList(listName), errors.nonExistentList(listName))
    throwIf(hasBook(listName, book.ISBN), errors.alreadyPresentBook(listName, book.ISBN))

    // Add the book to the list.
    const list = getList(listName)
    listsStore.setKey(getListKey(listName), {

      ...list,
      books: [...list.books, book]
    })
  }
)

/** @brief Removes the book with the given isbn on the list with the given name. */
export const removeBook = action(lists, 'removeBook',
  (listsStore, listName: string, isbn: string) => {

    throwIfNot(existsList(listName), errors.nonExistentList(listName))
    throwIfNot(hasBook(listName, isbn), errors.alreadyPresentBook(listName, isbn))

    // Remove the book from the list.
    const list = getList(listName)
    listsStore.setKey(getListKey(listName), {

      ...list,
      books: list.books.filter(({ ISBN }) => ISBN !== isbn)
    })
  }
)
