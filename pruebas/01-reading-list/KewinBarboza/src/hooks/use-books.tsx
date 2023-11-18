import { useSignal, $, useVisibleTask$ } from "@builder.io/qwik"
import type { Book, Library } from "~/interfaces"
import { filterBooksStorageDB, minMaxPage } from "~/utils"
import books from "./../../../books.json"

const pages = minMaxPage(books.library)

export const useBooks = () => {
  const listBooks = useSignal<Library[]>(books.library)
  const listReadingStorage = useSignal<Book[]>([])
  const countStorage = useSignal<number>(0)
  const countBook = useSignal<number>(0)

  useVisibleTask$(() => {
    const { readingList, booksAvailable }: any = filterBooksStorageDB(books.library)

    if (readingList === null) return

    listReadingStorage.value = readingList
    listBooks.value = booksAvailable
    countBook.value = booksAvailable.length
    countStorage.value = readingList.length

    window.addEventListener('focus', () => {
      listBooks.value = booksAvailable
      countBook.value = booksAvailable.length
      countStorage.value = readingList.length
    })
  })

  const syncDataStorage = $(() => {
    window.addEventListener('storage', (event) => {
      if (event.key === 'readingList') {
        const newValue = event.newValue!.length > 0 ? JSON.parse(event.newValue || '{}') : []

        listReadingStorage.value = newValue
      }
    })

    countBook.value = listBooks.value.length
    countStorage.value = listReadingStorage.value.length
  })

  const saveStorage = $((book: Book) => {
    listBooks.value = listBooks.value.filter(v => v.book.title !== book.title)
    listReadingStorage.value = listReadingStorage.value.concat(book)

    syncDataStorage()

    localStorage.setItem('readingList', JSON.stringify(listReadingStorage.value))
  })

  const deleteStorage = $((book: Book) => {
    listReadingStorage.value = listReadingStorage.value.filter(b => b.title !== book.title)
    listBooks.value = listBooks.value.concat({ book: book })

    syncDataStorage()

    localStorage.setItem('readingList', JSON.stringify(listReadingStorage.value))
  })

  const handlerFilter = $((genre: string) => {
    const { booksAvailable }: any = filterBooksStorageDB(books.library)

    if (genre === 'Todos') {
      listBooks.value = booksAvailable
      return
    }

    listBooks.value = booksAvailable.filter((books: Library) => books.book.genre === genre)
  })

  const handlerFilterPage = $((number: number) => {
    const { booksAvailable }: any = filterBooksStorageDB(books.library)

    if (number === 0) {
      listBooks.value = booksAvailable
      return
    }

    listBooks.value = books.library.filter(book => book.book.pages === number)
  })

  const searchBook = $((name: string) => {
    const { booksAvailable }: any = filterBooksStorageDB(books.library)
    const nameBook = name.toLocaleLowerCase()

    if (name === '') {
      listBooks.value = booksAvailable
      return
    }

    listBooks.value = books.library.filter(book => book.book.title.toLocaleLowerCase().includes(nameBook) === true)
  })

  return {
    listBooks,
    listReadingStorage,
    countBook,
    countStorage,
    saveStorage,
    deleteStorage,
    handlerFilter,
    handlerFilterPage,
    pages,
    allBooks: books.library,
    searchBook
  }
}
