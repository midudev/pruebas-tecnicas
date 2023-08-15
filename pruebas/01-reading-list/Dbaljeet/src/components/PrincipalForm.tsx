import { useContext, useEffect } from 'react'

import BookContext, { IContextBook } from '../context/BookContext'

import { Dump } from './ui/Dump'
import { ConstantsOfBooks } from '../utils/BooksConstants'

interface Props {
  genre: string
  setGenre: React.Dispatch<React.SetStateAction<string>>
  GENRES: string[]
  handleInputPages: (ev: string) => () => void
  max: number
  numberOfPages: number
  keyword: string
  setKeyword: React.Dispatch<React.SetStateAction<string>>
}

const PrincipalForm = ({
  genre,
  setGenre,
  GENRES,
  handleInputPages,
  max,
  numberOfPages,
  keyword,
  setKeyword,
}: Props) => {
  const { viewListOfBooks } = useContext(BookContext) as IContextBook

  const disabledInputs =
    viewListOfBooks === ConstantsOfBooks.OPTIONS_VIEW_LIST[2]

  const resetValues = () => {
    setGenre('')
    handleInputPages('')
    setKeyword('')
  }

  useEffect(() => {
    if (disabledInputs) resetValues()
  }, [disabledInputs])

  return (
    <section className="flex flex-wrap justify-center items-center m-auto gap-5 w-full my-10  border-2 border-opacity-30 border-gray-500 rounded-2xl py-5 text-gray-300">
      <form className="flex max-lg:flex-col flex-wrap items-center gap-5 w-full max-w-[1000px] justify-between px-20 max-sm:px-0 ">
        <span className="flex flex-col ">
          <label htmlFor="genre">Selecciona el género literario</label>
          <select
            id="genre"
            value={genre}
            disabled={disabledInputs}
            onChange={(ev) => setGenre(ev.target.value)}
            className="text-gray-200 bg-gray-800 focus:bg-gray-900"
          >
            <option value="">Todos</option>
            {GENRES.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </span>

        <span className="flex flex-col">
          <label htmlFor="numberOfPages">Filtra por el número de páginas</label>
          <input
            id="numberOfPages"
            onChange={(ev) => handleInputPages(ev.target.value)}
            type="range"
            min={0}
            max={max}
            disabled={disabledInputs}
          />
          {numberOfPages === 0 ? '-' : `Menos de: ${numberOfPages} páginas`}
        </span>

        <span className="flex flex-col">
          <label htmlFor="keyword">Busca por título</label>
          <input
            id="keyword"
            className="text-gray-200 bg-gray-800 focus:bg-gray-900"
            type="text"
            disabled={disabledInputs}
            onChange={(ev) => {
              setKeyword(ev.target.value)
            }}
            value={keyword}
          />
        </span>
      </form>

      {/*   delete values   */}

      <button
        onClick={() => resetValues()}
        className="text-gray-400 hover:text-white duration-500 transition-colors mt-5 w-[30px] h-[30px]"
        title="Elimina los filtros"
      >
        <Dump />
      </button>
    </section>
  )
}
export default PrincipalForm
