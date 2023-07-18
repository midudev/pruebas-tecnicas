import { useState } from 'react'

const DropDownFilter = ({ booksList }) => {
  const setGenre = new Set(booksList.map((element) => element.book.genre))
  const filterGenre = [...setGenre]

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative">
      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        type="button"
        onClick={toggleDropDown}
      >
        Categoria
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 blur:hidden">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {filterGenre.map((element) => {
              return (
                <li key={element}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {element}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>

    //TODO: Display selected filters
  )
}

export default DropDownFilter
