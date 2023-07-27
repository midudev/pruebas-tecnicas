import type { ReactElement, ReactNode } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { BooksContext } from '@/contexts/books'
import FiltersProvider from '@/contexts/filters'
import ReadingListProvider from '@/contexts/reading-list'
import { type BooksList, getPagesNumberLimit } from '@/utils/books'

export const MOCK_BOOKS = [
  {
    title: 'Apocalipsis Zombie',
    pages: 444,
    genre: 'Zombies',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg',
    synopsis:
      'Un gallego se queda en casa en pleno apocalipsis zombie y acaba casi salvando el mundo',
    year: 2001,
    ISBN: '978-4444532611',
    author: {
      name: 'Manel Loreiro',
      otherBooks: []
    }
  },
  {
    title: '1984',
    pages: 328,
    genre: 'Ciencia ficción',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',
    synopsis: 'Una inquietante visión de un futuro distópico y totalitario.',
    year: 1949,
    ISBN: '978-0451524935',
    author: {
      name: 'George Orwell',
      otherBooks: ['Rebelión en la granja']
    }
  },
  {
    title: 'Juego de Tronos',
    pages: 694,
    genre: 'Fantasía',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg',
    synopsis:
      'En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.',
    year: 1996,
    ISBN: '978-0553103540',
    author: {
      name: 'George R. R. Martin',
      otherBooks: [
        'Choque de Reyes',
        'Tormenta de Espadas',
        'Festín de Cuervos'
      ]
    }
  }
]

export const TEST_STORAGE_READING_LIST_KEY = 'testReadingList'
export const TEST_STORAGE_FILTERS_KEY = 'testFilters'

export const minPages = getPagesNumberLimit(MOCK_BOOKS, 'min')
export const maxPages = getPagesNumberLimit(MOCK_BOOKS, 'max')

export const resetStorage = (key: string) => {
  window.localStorage.removeItem(key)
}

export const getFromReadingListTestStorage = () => {
  const value = window.localStorage.getItem(
    TEST_STORAGE_READING_LIST_KEY
  ) as string
  return JSON.parse(value) as BooksList
}

const AllTheProviders = ({ children }: { children: ReactNode }) => (
  <BooksContext.Provider
    value={{
      books: MOCK_BOOKS,
      maxPages,
      minPages
    }}
  >
    <ReadingListProvider storageKey={TEST_STORAGE_READING_LIST_KEY}>
      <FiltersProvider storageKey={TEST_STORAGE_FILTERS_KEY}>
        {children}
      </FiltersProvider>
    </ReadingListProvider>
  </BooksContext.Provider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export { customRender as render }
