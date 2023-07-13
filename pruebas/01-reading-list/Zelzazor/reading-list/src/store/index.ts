import { create, type Mutate, type StoreApi } from 'zustand'
import { persist } from 'zustand/middleware'
import JSONLibrary from '../../books.json'
import { type Book } from '../types'

interface AppState {
  library: Book[]
  readingList: Book[]
  filterGenre: string
  addToReadingList: (book: Book) => void
  removeFromReadingList: (book: Book) => void
  modifyGenre: (genre: string) => void

}

const addToReadingList = (state: AppState, item: Book) => ({
  readingList: [...state.readingList, item],
  library: state.library.filter((book) => book.title !== item.title)
})

const removeFromReadingList = (state: AppState, prevBook: Book) => ({
  readingList: state.readingList.filter((book) => book.title !== prevBook.title),
  library: [...state.library, prevBook]
})

const modifyGenre = (_state: AppState, genre: string) => ({
  filterGenre: genre
})

type StoreWithPersist = Mutate<StoreApi<AppState>, [['zustand/persist', AppState]]>

export const withStorageDOMEvents = (store: StoreWithPersist) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && e.newValue != null) {
      void store.persist.rehydrate()
    }
  }

  window.addEventListener('storage', storageEventCallback)

  return () => {
    window.removeEventListener('storage', storageEventCallback)
  }
}

export const useStore = create<AppState>()(
  persist((set) => ({
    library: JSONLibrary.library.map((libraryItem) => libraryItem.book),
    filterGenre: 'all',
    readingList: [],
    addToReadingList: (item: Book) => { set((state) => addToReadingList(state, item)) },
    removeFromReadingList: (book: Book) => { set((state) => removeFromReadingList(state, book)) },
    modifyGenre: (genre: string) => { set((state) => modifyGenre(state, genre)) }
  }), {
    name: 'app-storage'
  })
)

withStorageDOMEvents(useStore)
