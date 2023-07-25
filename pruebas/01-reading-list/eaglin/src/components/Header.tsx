import React from 'react'
import { BOOK_GENRES, useBookContext } from '../context/context'

import { useFilterBooks } from '../hooks/useFilterBooks'

const HeaderComponent: React.FC = () => {
  const { library, readingBooks } = useBookContext()
  const { filterBooks, handleChageCategory } = useFilterBooks(library)
  return (
    <header>
    <h1>Libros disponibles {filterBooks?.length}</h1>
    <h2>Libros en lectura {readingBooks?.length}</h2>
    <div className='genreFilter'>
    <span>Filtrar por género</span>
    <select style={{
      border: '1px solid transparent'
    }} onChange={handleChageCategory} name='category' placeholder='Ciencia ficción,terror...'>
                    <option value={BOOK_GENRES.ALL}>{BOOK_GENRES.ALL}</option>
                    <option value={BOOK_GENRES.CYFY}>{BOOK_GENRES.CYFY}</option>
                    <option value={BOOK_GENRES.FANTASY}>{BOOK_GENRES.FANTASY}</option>
                    <option value={BOOK_GENRES.TERROR}>{BOOK_GENRES.TERROR}</option>

                </select>
                </div>
                </header>
  )
}

export default HeaderComponent
