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

export const bookmarksChannel = new BroadcastChannel('bookmarks')

const localStorageState: Bookmark[] = getLocalStorageValue('bookmarks') || []

const initialBookmarks = localStorageState || ([] as Bookmark[])

export const bookmarks = writable(initialBookmarks)

export const BookmarkStore = {
  add: function (book: Bookmark) {
    const existBook = get(bookmarks).find((bookInBookmark) => bookInBookmark.id === book.id)
    if (!existBook?.id) {
      bookmarks.update((bookmarks) => {
        const newBookmarks = [...bookmarks, book]
        setLocalStorageValue('bookmarks', newBookmarks)
        return newBookmarks
      })
    }
  },
  remove: function (id: string) {
    const existBook = get(bookmarks).find((bookInBookmark) => bookInBookmark.id === id)
    if (existBook) {
      bookmarks.update((bookmarks) => {
        const bookmarkFiltered = bookmarks.filter(
          (bookInBookmark) => bookInBookmark.id !== existBook.id
        )
        setLocalStorageValue('bookmarks', bookmarkFiltered)
  
        return bookmarkFiltered
      })
    }
  },
  toggle: function(book: Bookmark) {
    const existBook = get(bookmarks).find((bookInBookmark) => bookInBookmark.id === book.id)
    if (existBook) {
      this.remove(existBook.id)
      bookmarksChannel.postMessage({
        id: existBook.id
      })
    } else {
      bookmarksChannel.postMessage({
        book
      })
      this.add(book)
    }
  }
}

// export function addRemoveBookmark(book: Bookmark) {
//   const existBook = get(bookmarks).find((bookInBookmark) => bookInBookmark.id === book.id)
//   if (existBook) {
//     bookmarks.update((bookmarks) => {
//       const bookmarkFiltered = bookmarks.filter(
//         (bookInBookmark) => bookInBookmark.id !== existBook.id
//       )
//       setLocalStorageValue('bookmarks', bookmarkFiltered)

//       return bookmarkFiltered
//     })
//     return
//   }
//   bookmarks.update((bookmarks) => {
//     const newBookmarks = [...bookmarks, book]
//     setLocalStorageValue('bookmarks', newBookmarks)
//     return newBookmarks
//   })
// }
