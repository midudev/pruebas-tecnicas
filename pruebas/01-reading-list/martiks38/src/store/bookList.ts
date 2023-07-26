'use client'

import { BOOK_LIST_TYPES, nameStorage } from '@/assets/constants'
import { initialListBooks } from '@/assets/values'

import type { Book } from '@/typings/books'

type BookListState = typeof initialListBooks
type BookDataList = Omit<Book, 'author' | 'synopsis' | 'year'>[]

type BookListActions = {
  type: BOOK_LIST_TYPES
  payload: Pick<Book, 'ISBN'> | null
}

export function updateLocalStorage(newList: BookDataList = []) {
  const newListStr = JSON.stringify(newList)

  window.localStorage.setItem(nameStorage.listOfReading, newListStr)

  /* Guarda los tres principales géneros de libros de la lista de lectura del usuario */
  if (newList.length === 0) {
    window.localStorage.removeItem(nameStorage.topGenre)
  } else {
    const amountEachGenreBook = newList.reduce((acc, cur) => {
      const { genre } = cur
      acc[genre] ? (acc[genre] += 1) : (acc[genre] = 1)

      return acc
    }, {} as { [key: string]: number })

    const topGenres = Object.entries(amountEachGenreBook)
      .sort((genreA, genreB) => genreB[1] - genreA[1])
      .slice(0, 3)
      .map((genre) => genre[0])

    window.localStorage.setItem(nameStorage.topGenre, JSON.stringify(topGenres))
  }
}

const BOOKLIST_ACTIONS: {
  [key in BOOK_LIST_TYPES]: (state: BookListState, action: BookListActions) => BookListState
} = {
  [BOOK_LIST_TYPES.ADD_TO_READING_LIST]: (state: BookListState, action: BookListActions) => {
    const { listBooksAvailable, readingList } = state
    const { payload } = action

    if (!payload) return state

    const { ISBN } = payload
    const bookToMove = listBooksAvailable.find((book) => book.ISBN === ISBN)

    if (!bookToMove) return state

    const newListBooksAvailable = listBooksAvailable.filter((book) => book.ISBN !== ISBN)
    const newReadingList = [...readingList, bookToMove]

    const newState = {
      listBooksAvailable: newListBooksAvailable,
      readingList: newReadingList
    }

    updateLocalStorage(newReadingList)

    return newState
  },
  [BOOK_LIST_TYPES.REMOVE_FROM_READING_LIST]: (state: BookListState, action: BookListActions) => {
    const { listBooksAvailable, readingList } = state
    const { payload } = action

    if (!payload) return state

    const { ISBN } = payload

    const bookToMove = readingList.find((book) => book.ISBN === ISBN)

    if (!bookToMove) return state

    const newReadingList = readingList.filter((book) => book.ISBN !== ISBN)
    const newListBooksAvailable = [...listBooksAvailable, bookToMove]

    const newState = {
      listBooksAvailable: newListBooksAvailable,
      readingList: newReadingList
    }

    updateLocalStorage(newReadingList)

    return newState
  },
  [BOOK_LIST_TYPES.RESET_READING_LIST]: () => {
    updateLocalStorage()

    return initialListBooks
  }
}

export function bookListReducer(state: BookListState, action: BookListActions) {
  const { type } = action

  const updateList = BOOKLIST_ACTIONS[type]

  return updateList ? updateList(state, action) : state
}
