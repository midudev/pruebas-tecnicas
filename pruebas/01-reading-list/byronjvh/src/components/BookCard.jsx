import { useContext } from 'react'
import { AddToList } from './Icons'
import { GlobalContext } from '../context/GlobalContext'

export function BookCard ({ img, title, genre, year, ISBN }) {
  const { addToReadingList } = useContext(GlobalContext)

  return (
    <article
      className="group cursor-pointer w-[130px]"
      onClick={() => addToReadingList(ISBN)}
      >
      <div className="relative">
        <img className="rounded h-[210px] w-full object-cover mb-2 transition-[filter] duration-500 ease-in-out group-hover:brightness-50" src={img} alt={title} />
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-blue-600 rounded-full opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 text-white text-3xl">
          <AddToList />
        </span>
      </div>
      <div>
        <h4 className="whitespace-nowrap truncate mb-1 text-gray-950">{title}</h4>
        <p className="text-sm text-gray-500">{genre} • {year}</p>
      </div>
    </article>
  )
}
