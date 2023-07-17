import { useState } from 'react'

const genre = ['Fantasía', 'Ciencia ficción', 'Zombies', 'Terror']

const DropDownFilter = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative">
      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        type="button"
        onClick={toggleDropDown}
      >
        Dropdown button
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
        <div className="absolute z-10 mt-2 py-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {genre.map((element) => {
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
            {/* <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li> */}
          </ul>
        </div>
      )}
    </div>

    //TODO: Display selected filters
  )
}

export default DropDownFilter
