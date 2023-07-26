import { IFilters } from '../types'
import { BookMapped} from './mapLibrary'

interface FilterBooks {
  listOfBooks: BookMapped[]
  filters: IFilters
}

const filterBooks = ({ listOfBooks, filters }: FilterBooks) => {
  let filteredBooks = [...listOfBooks]

  const { search, genres, pages } = filters

  if (search != null && search.length > 0) {
    filteredBooks = filteredBooks.filter(book => {
      return book.title.toLowerCase().includes(search.toLowerCase())
    })
  }

  if (pages != null && pages >= 0) {
    filteredBooks = filteredBooks.filter(book => {
      return book.numPages <= pages
    })
  }

  if (genres.length > 0) {
    const lowercasedGenre = genres.map(genreItem => genreItem.toLowerCase())

    filteredBooks = filteredBooks.filter(book =>
      lowercasedGenre.includes(book.genre.toLowerCase()),
    )
  }

  return filteredBooks
}

export default filterBooks
