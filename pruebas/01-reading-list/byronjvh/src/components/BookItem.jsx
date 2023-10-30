import { useContext } from 'react'
import { DeleteFromList } from './Icons'
import { GlobalContext } from '../context/GlobalContext'

export function BookItem ({ img, title, genre, year, ISBN }) {
  const { deleteFromList } = useContext(GlobalContext)

  const handleClick = (e) => {
    e.stopPropagation()
    deleteFromList(ISBN)
  }
  return (
    <li className="list-none flex items-center gap-6 justify-between p-4 rounded border border-gray-300">
      <div className="flex gap-3">
        <img className="w-[50px] object-cover" src={img} alt={title} />
        <div className="">
          <h4 className="max-w-[130px] xs:max-w-max whitespace-nowrap truncate text-gray-950 mb-1">{title}</h4>
          <p className="text-sm text-gray-500">{genre}<br />{year}</p>
        </div>
      </div>
      <button onClick={handleClick} type='button' className='text-red-700 text-3xl hover:brightness-150'>
        <DeleteFromList />
      </button>
    </li>
  )
}
