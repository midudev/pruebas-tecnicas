'use client'
import { useEffect, useMemo, useState } from "react"
import booksJson from "../data/books.json"
import { Book, LibraryElement } from "./types"
import Image from "next/image"
import BookCard from "./components/Book"
import BookReadList from "./components/BookReadList"

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])
  const [booksToRead, setBooksToRead] = useState<Book[]>([])
  const [selectedPages, setSelectedPages] = useState<number | ''>('')
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [genders, setGender] = useState<string[]>([])
  const [selectedGenre, setSelectedGenre] = useState<string>('')

  useEffect(() => {
    booksJson.library.map(book => {
      setBooks(books => [...books, book.book])
    })
  }, [])

  useEffect(() => {
    books.map(book => {
      if (!genders.includes(book.genre)) {
        setGender([...genders, book.genre])
      }
    })
  }, [books, genders])

  //FUNCIONES PARA AGREGAR Y ELIMINAR LIBROS A LA LISTA DE LECTURA
  const addBookToRead = (book: Book) => {
    const bookAlredyInList = booksToRead.find(data => data.title === book.title)
    const newListOfBooks = books?.filter((data) => data.title !== book.title)
    if (!bookAlredyInList) {
      setBooksToRead((books) => [...books, book])
      setBooks(newListOfBooks)
    }
  }

  const deleteBookFromList = (book: Book) => {
    const newList = booksToRead.filter((data) => data.title !== book.title)
    setBooksToRead(newList)
    setBooks([...books, book])

  }

  //FUNCON PARA EL FILTRO POR PAGINA

  const handlePageFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(e.target.value);
    setSelectedPages(selectedValue);
  }

  //Use MEMO PARA MANEJAR LOS FILTROS
  useMemo(() => {
    let booksFiltered = [...books];

    if (selectedPages !== '') {
      booksFiltered = booksFiltered.filter((book) => book.pages <= selectedPages);
    }

    if (selectedGenre !== '' && selectedGenre !== 'all') {
      booksFiltered = booksFiltered.filter((book) => book.genre === selectedGenre);
    }
    setFilteredBooks(booksFiltered);
  }, [books, selectedPages, selectedGenre])


  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-16">
      <h1 className="text-2xl my-2 font-semibold">Midu Prueba Libreria!</h1>
      <div className="flex items-start flex-col w-full">
        <h2 className="text-xl text-left">{filteredBooks.length} Libros disponibles </h2>
        <h2 className="text-xl text-left">{booksToRead.length} en la lista de lectura</h2>
      </div>
      <div className="flex items-center justify-center gap-2">
        <input type="range" min={10} max={2000} onChange={handlePageFilter} value={selectedPages === '' ? '' : String(selectedPages)} />
        <select onChange={(e) => setSelectedGenre(e.target.value)} defaultValue={'all'} name="select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value='all'>All</option>
          {
            genders.map((gender, i) => (
              <option key={i} value={gender}>{gender}</option>
            ))
          }
        </select>
      </div>
      <section className="flex min-h-screen items-start  my-3 gap-3">
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 ">
          {
            filteredBooks?.map((book) => {
              return (
                <BookCard key={book.title} book={book} addBookToRead={addBookToRead} />
              )
            })
          }
        </div>
        <div className="bg-gray-800 h-full  relative p-4 md:p-6 flex flex-col gap-2 items-center justify-center rounded-lg">
          <h1>Lista de Lectura</h1>
          {
            booksToRead?.map((book) => (
              <BookReadList key={book.title} book={book} deleteBookFromList={deleteBookFromList} />
            ))
          }
        </div>
      </section>
    </main >
  )
}
