import { writable, get } from 'svelte/store'
import { getLocalStorageValue, setLocalStorageValue } from '$lib/utils/localstorage'
export interface Bookmark {
  id: string
  cover: string
  title: string
  author: string
  genre: string
  pages: number
}

const localStorageState: Bookmark[] = getLocalStorageValue('bookmarks') || []

export const initialBookmarks = localStorageState || [] as Bookmark[]

export const bookmarks = writable(initialBookmarks)

export function addRemoveBookmark(book: Bookmark) {
  const existBook = get(bookmarks).find((bookInBookmark) => bookInBookmark.id === book.id)
  if (existBook) {
    bookmarks.update((bookmarks) => {
      const bookmarkFiltered = bookmarks.filter(
        (bookInBookmark) => bookInBookmark.id !== existBook.id
      )
        setLocalStorageValue('bookmarks', bookmarkFiltered)

      return bookmarkFiltered
    })
    return
  }
  bookmarks.update((bookmarks) => {
    const newBookmarks = [...bookmarks, book]
    setLocalStorageValue('bookmarks', newBookmarks)
    return newBookmarks
  })
}
