const allGenre = 'Todos'

const SECTIONS_ID: Record<
  'contentMain' | 'listBookAvailable' | 'readingList',
  { id: `#${string}`; message: string }
> = {
  contentMain: { id: '#contentMain', message: 'Saltar al contenido principal' },
  listBookAvailable: {
    id: '#listBookAvailable',
    message: 'Saltar a la sección de libros disponibles'
  },
  readingList: {
    id: '#readingList',
    message: 'Saltar a la sección de lectura'
  }
}

const nameStorage = {
  currentGenre: 'current-genre',
  listOfReading: 'list-of-reading',
  topGenre: 'top-genre'
}

const listTypes: { available: 'available'; reading: 'reading' } = {
  available: 'available',
  reading: 'reading'
}

const enum BOOK_LIST_TYPES {
  ADD_TO_READING_LIST = 'ADD_TO_READING_LIST',
  REMOVE_FROM_READING_LIST = 'REMOVE_FROM_READING_LIST',
  RESET_READING_LIST = 'RESET_READING_LIST'
}

export { allGenre, BOOK_LIST_TYPES, listTypes, nameStorage, SECTIONS_ID }
