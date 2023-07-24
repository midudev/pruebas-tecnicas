import { useBookContext } from './../context/context'
import { type LibraryElement } from '../types'

export function useSetBooks () {
  const { setLibrary, library, readingBooks, setReadingBooks } = useBookContext()
  const addReading = (isbn: string) => {
    const index = library.findIndex((ele: LibraryElement) => ele.book.ISBN === isbn)
    const newLibrary = [...library]

    newLibrary[index].toRead = !newLibrary[index].toRead
    setLibrary(newLibrary)
    window.localStorage.setItem('__library__', JSON.stringify(newLibrary))
    setReadingBooks(newLibrary.filter(ele => ele.toRead))
  }

  return { library, readingBooks, addReading }
}
