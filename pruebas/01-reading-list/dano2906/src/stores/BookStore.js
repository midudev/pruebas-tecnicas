import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useReadListStore = create(persist(
  (set, get) => ({
    readList: [],
    add: (book) => {
      if (!get().readList.some(instance => instance.ISBN === book.ISBN)) {
        set((state) => ({
          readList: [...state.readList, book]
        }))
      }
    },
    remove: (isbn) => (
      set((state) => ({
        readList: state.readList.filter(book => book.ISBN !== isbn)
      }))
    ),
    loadStorage: (list) => {
      set(() => ({
        readList: list
      }))
    }
  }), {
    name: 'readList'
  }
))
