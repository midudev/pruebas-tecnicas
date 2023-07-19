import { fetchBooksData } from './fetch'
import { Mutate, StoreApi } from 'zustand'

export function selectGenre() {
  const books = fetchBooksData()
  const genreAvalaibles = books.map((b) => b.genre)
  const genre: string[] = []
  for (const gen of genreAvalaibles) {
    const isGenre = genre.find((g) => g === gen)
    if (isGenre === undefined) genre.push(gen)
  }
  return genre
}

type StoreWithPersist = Mutate<
  StoreApi<unknown>,
  [['zustand/persist', unknown]]
>

export const withStorageDOMEvents = (store: StoreWithPersist) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && e.newValue) {
      store.persist.rehydrate()
    }
  }

  window.addEventListener('storage', storageEventCallback)

  return () => {
    window.removeEventListener('storage', storageEventCallback)
  }
}
