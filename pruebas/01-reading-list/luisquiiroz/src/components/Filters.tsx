import { useBookStore } from '../store/bookStore'
import { Button } from './Button'
import { booksData } from '../functions/booksData'

export function Filters () {
  const { genre, pages, selectGenre, selectPages } = useBookStore()
  const { genreOfBooks, pagesOfBooks } = booksData()

  const onChangeSelectPages = (option: string) => {
    selectPages(option === pages ? '' : option)
  }

  const onChangeSelectGenre = (option: string) => {
    selectGenre(option === genre ? '' : option)
  }

  return (
    <div className='p-4 max-w-lg mx-auto bg-brown-2 rounded'>
      <p className='text-brown-1 font-medium pt-2'>Filtros</p>
      <div>
        <p className='text-brown-1 pt-2'>Por páginas</p>
        <div className='grid grid-cols-3 md:grid-cols-2 gap-2 py-2 px-1 '>
          {
          pagesOfBooks.map(value => (
            <Button value={value} action={() => onChangeSelectPages(value)} selected={pages} key={value} />
          ))
        }
        </div>
      </div>
      <div>
        <p className='text-brown-1 mt-4'>Por género</p>
        <div className='py-2 px-1'>
          {
          genreOfBooks.map(value => (
            <Button value={value} action={() => onChangeSelectGenre(value)} selected={genre} key={value} />
          ))
        }
        </div>
      </div>
    </div>

  )
}
