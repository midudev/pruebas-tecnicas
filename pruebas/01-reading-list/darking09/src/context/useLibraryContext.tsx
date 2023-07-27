import { useState, useEffect } from 'react'
import { Books, Book, MaxAndMinPages } from '@typesFiles/Books'
import { Genres } from '@typesFiles/Genres'
import { HowManyBooksAre, Filters, FilterType } from '@typesFiles/General'
import * as api from '@api/index'
import * as utils from '@utils/index'
import { toast } from 'react-hot-toast'

export default function useLibraryContext() {
  const [books, setBooks] = useState<Books>([])
  const [readingList, setReadingList] = useState<Books>([])
  const [genres, setGenres] = useState<Genres>([])
  const [currentFilters, setCurrentFilters] = useState<Filters>(utils.DEFAULT_FILTERS)
  const [howManyBooksAre, setHowManyBooksAre] = useState<HowManyBooksAre>(utils.DEFAULT_HOW_MANY_BOOKS_ARE)
  const [maxAndMinPages, setMaxAndMinPages] = useState<MaxAndMinPages>(utils.DEFAULT_MAX_AND_MIN_PAGES)

  useEffect(() => {
    loadAllData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * This function is responsible for loading books data from the API
   * and setting the state of the books variable
   * @returns void
   */
  const loadBooks = async () => {
    const books = await api.getBooks()
    setBooks(books)
  }

  /**
   * This function is responsible for loading reading list data from the API
   * and setting the state of the readingList variable
   * @returns void
   */
  const loadReadingList = async () => {
    const books = await api.getReadingListBooks()
    setReadingList(books)
  }

  /**
   * This function is responsible for loading genres data from the API
   * and setting the state of the genres variable
   * @returns void
   */
  const loadGenres = async () => {
    const genres = await api.getGenres()
    setGenres(genres)
  }

  /**
   * This function is responsible for loading how many books are data from the API
   * and setting the state of the howManyBooksAre variable
   * @returns void
   */
  const loadHowManyBooksAre = async () => {
    const howManyBooksAre = await api.getHowManyBooksAre()
    setHowManyBooksAre(howManyBooksAre)
  }

  /**
   * This function is responsible for loading max and min pages data from the API
   * and setting the state of the maxAndMinPages variable
   * @returns void
   */
  const loadMaxAndMinPages = async () => {
    const maxAndMinPages = await api.getMaxAndMinPages()
    setMaxAndMinPages(maxAndMinPages)
  }

  /**
   * This function is responsible for updating a book in the books state
   * @param book
   * @returns void
   */
  const updateABook =  (book: Book) => {
    const newBooks = [...books]
    const index = newBooks.findIndex(b => b.ISBN === book.ISBN)
    newBooks[index]= { ...book}
    setBooks(newBooks)
  }

  /**
   * This function is responsible for loading all data from the API
   * @returns void
   */
  const loadAllData = async () => {
    await loadBooks()
    await loadReadingList()
    await loadGenres()
    await loadHowManyBooksAre()
    await loadMaxAndMinPages()
  }

  /**
   * This function is responsible for adding a book to the reading list
   * @param book
   * @returns void
   */
  const addBooksToReadingList = async (book: Book) => {
    const {
      numberOfAvailableBooks,
      numberOfBooksInReadingList
    } = howManyBooksAre

    updateABook(book)

    const newReadingList = [...readingList]

    newReadingList.push(book)
    setReadingList(newReadingList)

    setHowManyBooksAre({
      numberOfAvailableBooks: numberOfAvailableBooks - 1,
      numberOfBooksInReadingList: numberOfBooksInReadingList + 1
    })

    await api.addToReadingList(book)
    toast.success(`El libro ${book.title} fue agregado a la lista de lectura`)
  }

  /**
   * This function is responsible for removing a book from the reading list
   * @param book
   * @returns void
   */
  const removeBooksFromReadingList = async (book: Book) => {
    const {
      numberOfAvailableBooks,
      numberOfBooksInReadingList
    } = howManyBooksAre

    updateABook(book)

    setReadingList(readingList.filter(b => b.ISBN !== book.ISBN))

    setHowManyBooksAre({
      numberOfAvailableBooks: numberOfAvailableBooks + 1,
      numberOfBooksInReadingList: numberOfBooksInReadingList - 1
    })

    await api.removeFromReadingList(book)
    toast.success(`El libro: ${book.title} fue eliminado de la lista de lectura`)
  }

  /**
   * This function is responsible for filtering books
   * @param newFilter
   * @param currentBooks
   * @returns Books
   */
  const filter = (newFilter : Filters, currentBooks : Books) => {
    return currentBooks.filter((b : Book) => {
      if (newFilter.genres === 0 && newFilter.pages < 0) {
        return true
      }

      if (newFilter.genres <= 0) {
        return b.pages <= newFilter.pages
      }

      if (newFilter.pages < 0) {
        return b.genre_id === newFilter.genres
      }

      return b.genre_id === newFilter.genres && b.pages <= newFilter.pages
    })
  }

  /**
   * This function is responsible for filtering books
   * @param value
   * @param filterType
   * @returns void
   */
  const filterBooks = async (value: number, filterType: FilterType) => {
    const books = await api.getBooks()
    const newFilter = { ...currentFilters }

    newFilter[utils.FILTER_TYPES?.[filterType]] = value

    setBooks(filter(newFilter, books))

    setCurrentFilters(newFilter)
  }

  return {
    genres,
    books,
    readingList,
    howManyBooksAre,
    maxAndMinPages,
    addBooksToReadingList,
    removeBooksFromReadingList,
    filterBooks
  }
}
