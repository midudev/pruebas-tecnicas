import React from 'react'
import { useBookContext } from '../context/context'
import { BOOK_GENRES } from '../App'

interface HeaderProps {
  handleChageCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
const HeaderComponent: React.FC<HeaderProps> = ({ handleChageCategory }) => {
  const { library, readingBooks } = useBookContext()

  console.log(library)
  return (
    <header>
    <h1>Libros disponibles {library?.length}</h1>
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
