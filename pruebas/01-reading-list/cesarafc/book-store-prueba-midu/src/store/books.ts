import books from '../../../../books.json';
import { create } from 'zustand';
import { share } from "shared-zustand";
import { Book, Library } from '../types/bookType';
import { persist, subscribeWithSelector } from 'zustand/middleware'


type BookStore = {
    booksStore: Library[]
    cartStore: Library[]
    addToList: (newBook: Book) => void
    removeFromList: (isbn: string) => void
}

export const useBooksStore = create(
  subscribeWithSelector(
  persist<BookStore>(
    (set) => ({

      booksStore: books.library,

      cartStore: [],

      addToList: (newBook) => {
        set( (state) => {
        
          let isBookInList = state.cartStore.find(
            (book) => book.book.ISBN === newBook.ISBN
          );

        return !isBookInList ? {
          cartStore: [...state.cartStore, { book: newBook }]
        } : {
          cartStore: [...state.cartStore]
        }
        })
      },

      removeFromList: (isbn) => {
        set((state) => (
          {cartStore: state.cartStore.filter(({book}) => book.ISBN !== isbn ) }
        ))
      },

    }),
    { name: "booksAppStore",
  }
  )
)
);

if ("BroadcastChannel" in globalThis /* || isSupported() */) {
  // share the property "count" of the state with other tabs
  share("cartStore", useBooksStore);
}
