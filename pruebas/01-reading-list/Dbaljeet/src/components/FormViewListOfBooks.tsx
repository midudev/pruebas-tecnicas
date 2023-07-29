import { useContext } from 'react'
import { ConstantsOfBooks } from '../utils/BooksConstants'
import BookContext, { IContextBook } from '../context/BookContext'

const FormViewListOfBooks = () => {
  const { viewListOfBooks, setViewListOfBooks } = useContext(
    BookContext
  ) as IContextBook
  return (
    <>
      <form className="flex flex-col w-[250px] m-auto">
        <label htmlFor="optionlist">Filtra por categoria</label>
        <select
          id="optionlist"
          value={viewListOfBooks}
          onChange={(ev) => setViewListOfBooks(ev.target.value)}
          className="text-gray-200 bg-gray-800 focus:bg-gray-900 p-2"
        >
          <option value={ConstantsOfBooks.OPTIONS_VIEW_LIST[0]}>
            Por defecto
          </option>
          <option value={ConstantsOfBooks.OPTIONS_VIEW_LIST[1]}>
            Ver solo libros disponibles
          </option>
          <option value={ConstantsOfBooks.OPTIONS_VIEW_LIST[2]}>
            Ver solo lista de lectura
          </option>
        </select>
      </form>
    </>
  )
}
export default FormViewListOfBooks
