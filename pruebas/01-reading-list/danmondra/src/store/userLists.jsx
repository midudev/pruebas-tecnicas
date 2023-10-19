import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { toast } from 'sonner'
import { ACTIONS_MSGS, BookNotification } from '../components/BookNotification.jsx'
import { DETAILS_OF_LISTS } from '../constants/details-of-lists.js'
import { findListDetails } from '../utils/lists.js'
import { DeleteIcon } from '../components/Icons.jsx'

export const useUserLists = create(persist((set, get) => ({
  lists: DETAILS_OF_LISTS?.map(list => ({
    id: list.id,
    title: list.title,
    books: []
  })),

  setLists: (lists) => set({ lists }),
  addBook: ({ newBook, listIdTarget, listIdOrigin }) => {
    const { lists } = get()

    const listToAdd = lists.find(list => list.id === listIdTarget)
    const listOrigin = lists.find(list => list.id === listIdOrigin) ||
      lists.find(list => list.books.some(book => book.ISBN === newBook.ISBN))
    const bookIsInList = listToAdd?.books?.some(book => book.ISBN === newBook.ISBN)

    if (!listToAdd || bookIsInList) return

    // If the book is in other list, remove from it
    const listsUpdated = lists.map(list => {
      if (listOrigin?.id === list.id) {
        return {
          ...list,
          books: list.books.filter(book => (
            book.ISBN !== newBook.ISBN
          ))
        }
      }

      // Take it to the new list
      return list.id === listIdTarget
        ? {
            ...list,
            books: [...list.books, newBook]
          }
        : list
    })

    const { title, Icon } = findListDetails(listToAdd.id)

    set({ lists: listsUpdated })
    toast(
      <BookNotification
        message={ACTIONS_MSGS.ADDED_TO}
        book={newBook}
        listName={title}
        Icon={Icon}
      />
    )
  },
  deleteBook: ({ bookToDelete, listIdOrigin }) => {
    const { lists } = get()

    const newLists = lists.map(list => {
      if (list.id === listIdOrigin) {
        return {
          ...list,
          books: list.books.filter(book => book.ISBN !== bookToDelete.ISBN)
        }
      }

      return list
    })

    const { title } = findListDetails(listIdOrigin)

    set({ lists: newLists })
    toast(
      <BookNotification
        message={ACTIONS_MSGS.DELETED_FROM}
        book={bookToDelete}
        listName={title}
        Icon={DeleteIcon}
      />
    )
  }
}),
{
  name: 'USER_LISTS_BOOKS_SAVED'
}
))
