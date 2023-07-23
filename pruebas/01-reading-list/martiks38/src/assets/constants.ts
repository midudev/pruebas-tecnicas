const allGenre = 'Todos'

const nameStorage = {
  currentGenre: 'current-genre',
  listOfReading: 'list-of-reading',
  topGenre: 'top-genre'
}

const listTypes: { available: 'available'; reading: 'reading' } = {
  available: 'available',
  reading: 'reading'
}

const buttonTitles = { [listTypes.available]: 'Añadir', [listTypes.reading]: 'Remover' }

const enum BOOK_LIST_TYPES {
  ADD_TO_READING_LIST = 'ADD_TO_READING_LIST',
  REMOVE_FROM_READING_LIST = 'REMOVE_FROM_READING_LIST',
  RESET_READING_LIST = 'RESET_READING_LIST'
}

export { allGenre, BOOK_LIST_TYPES, buttonTitles, listTypes, nameStorage }
