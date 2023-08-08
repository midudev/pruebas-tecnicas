import { useContext } from "react"
import { Link } from "react-router-dom"
import BooksIcon from "../assets/icons/BooksIcon"
import {BookContext} from "../context/BookContext"
import { PropBookContext } from "../types"

function Menu({canViewFilter}: {canViewFilter:boolean}) {

  const bookCont = useContext(BookContext) as PropBookContext
  const {
    listGenre,
    selectGenre,
    search,

    funOnChangeGenre,
    funOnChangeSearch,
  } = bookCont

  const handleOnChangeGenre = (e:React.ChangeEvent<HTMLSelectElement>) => {
    funOnChangeGenre(e.target.value)
  }

  const handleOnChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    funOnChangeSearch(e.target.value)
  }

  return (
    <nav className=" w-full h-16 py-3 px-3 bg-slate-400 flex row gap-6 justify-between items-center bg-primary mt-6 rounded-xl">
      <section>
        <Link to="/" className="flex row items-center gap-3">
          <div className="w-10">
            <BooksIcon />
          </div>
          <h1 className=" text-quaternary text-xl hidden md:block">La Librería</h1>
        </Link>
      </section>
      {canViewFilter && (
        <>
          <section className="flex flex-1">
            <input 
              name="search"
              value={search}
              type="text" 
              placeholder="Busca tu libro aquí..." 
              className=" w-full md:w-[66%] m-auto h-10 px-4 rounded-lg placeholder:text-tertiary text-sm bg-secondary text-quaternary border-2 border-tertiary focus:outline-none focus:border-slate-400 transition duration-300 ease-in-out"
              onChange={handleOnChangeSearch}
            />
          </section>
          <section className="flex row">
            <div>
              <select 
                name="genre" id="genre" 
                className="h-10 rounded-lg px-2 text-sm bg-secondary text-quaternary border-2 border-tertiary"
                value={selectGenre}
                onChange={handleOnChangeGenre}
                role="select-genre"
              >
                <option role="select-genre-item" value="">Todas los Género</option>
                {listGenre.map((genre) => <option role="select-genre-item" key={genre} value={genre}>{genre}</option>)}
              </select>
            </div>
          </section>
        </>
      )}
      
    </nav>
  )
}

export default Menu