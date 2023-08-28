import React, { useMemo, useState } from 'react'
import { BooksList } from '../components'
import { useBooks } from '../hooks/useBooks'
import { useReadListStore } from '../store'

export const Home = () => {
  const [genre, setGenre] = useState('Todas')
  const [pages, setPages] = useState(1200)
  const [search, setSearch] = useState('')
  const { books, allGenres, filterByGenrer, filterByPages, filterByTitle } = useBooks()
  const booksForRead = useReadListStore(state => state.booksForRead)

  const onGenreChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(target.value)
  }

  const onPagesChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPages(Number(target.value))
  }

  const onSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value)
  }

  const filterByGenreBooks = useMemo(() => {
    if (genre !== 'Todas') return filterByGenrer(genre)

    return books
  }, [genre])

  const filterByPagesBooks = useMemo(() => {
    return filterByPages(pages)
  }, [pages])

  const filterBySearchBooks = useMemo(() => {
    return filterByTitle(search)
  }, [search])

  const filteredBooks = filterBySearchBooks.filter(book => {
    return filterByPagesBooks.includes(book) && filterByGenreBooks?.includes(book)
  })

  return (
    <>
      <h1 className="mb-2 text-center text-4xl font-bold">Libros disponibles: {books.length - booksForRead.length}</h1>
      <h1 className="mb-12 text-center text-3xl font-semibold">En lista de lectura: {booksForRead.length}</h1>
      <div className="flex flex-wrap justify-center gap-x-12 mb-12">
        <div>
          <h3 className="mb-4 text-xl">Filtrar por género</h3>
          <select className="cursor-pointer p-2 rounded outline" name="genres" onChange={onGenreChange}>
            <option value="Todas">Todas</option>
            {
              allGenres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))
            }
          </select>
        </div>
        <div className="hidden md:block">
          <h3 className="mb-4 text-xl">Filtrar por paginas</h3>
          <p>Maximo número de páginas: {pages}</p>
          <input
            className="cursor-pointer"
            type="range"
            name="pages-input"
            id="pages-input"
            min={100}
            max={1200}
            step={100}
            defaultValue={pages}
            onChange={onPagesChange}
          />
        </div>
        <div className="hidden md:block">
          <h3 className="mb-4 text-xl">Buscar por nombre</h3>
          <input
            className="p-2 rounded"
            type="text"
            name="book-title"
            id="book-title"
            placeholder="Nombre del libro"
            onChange={onSearchChange}
          />
        </div>
      </div>
      <BooksList books={filteredBooks} />
    </>
  )
}
