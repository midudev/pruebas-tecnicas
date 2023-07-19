import { BsChevronDown } from 'react-icons/bs'
import { useState } from 'react'
import { addDropDownFilter } from '../redux/booksSlice'
import { useDispatch } from 'react-redux'

const DropDownFilter = ({ genres }) => {
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)
  // const [selectedOption, setSelectedOption] = useState('')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleBlur = () => {
    setIsOpen(false)
  }

  return (
    <button className="relative" onBlur={handleBlur}>
      <div
        className={`inline-flex items-center overflow-hidden rounded-md  min-w-[180px] text-center  ${
          genres.length !== 0
            ? 'bg-purple-700 active:bg-purple-800'
            : 'bg-gray-500'
        }`}
        onClick={toggleMenu}
      >
        <div className="inline-flex items-center ">
          <p className="px-4 py-2 text-sm text-white">Filtrar por genero</p>

          {genres.length !== 0 && (
            <div className="h-full p-2 text-white">
              <BsChevronDown />
            </div>
          )}
        </div>
      </div>

      {isOpen && genres.length !== 0 && (
        <div
          className="absolute end-0 z-10 mt-2 min-w-[175px] rounded-md border border-gray-100 bg-white shadow-lg p-2"
          role="menu"
        >
          {genres.map((element) => (
            <div
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              key={element}
              onClick={() => {
                dispatch(addDropDownFilter(element))
              }}
            >
              {element}
            </div>
          ))}
        </div>
      )}
    </button>
  )
}

export default DropDownFilter
