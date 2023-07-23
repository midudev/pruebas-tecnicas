import { useList } from '../hooks/useList'
import { useState } from 'react'

export default function Book ({ item, className }) {
  const { addToList, removeFromList, list } = useList()
  const chekBookInList = book => {
    return list.some(item => item.book.ISBN === book.book.ISBN)
  }
  const [isMaximized, setIsMaximized] = useState(false)

  const liClass = isMaximized
    ? ' maximized w-screen h-screen max-h-none bg-white fixed left-0 top-[111px] pt-[80px] items-start flex justify-center'
    : ' '
  const divClass = isMaximized
    ? ' flex flex-col justify-center items-start gap-5 ml-8'
    : ' '

  const handleClick = () => {
    setIsMaximized(!isMaximized)
    if (!isMaximized) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
  const classList = (className, item) => {
    if (className !== undefined) {
      return className
    } else if (chekBookInList(item)) {
      return 'hidden'
    } else {
      return ''
    }
  }

  return (
    <li className={classList(className, item) + liClass + ' rounded-[21px] overflow-hidden shadow-indigo-500/40 hover:shadow-lg transition-shadow max-h-[685px] dark:text-gray-300 dark:bg-[#331D2C]' } key={item.book.ISBN}>
          <img className="aspect-[317/475] w-[320px] inline"
              src= {item.book.cover}
              alt= {item.book.title}
          />
          <div className={'pb-7' + divClass}>
              <strong className='block mt-7'>{item.book.title}</strong>
              <p>{item.book.author.name}</p>
              <div className='flex justify-center gap-4 mb-7'>
                <p>{item.book.year}</p>
                <p>{item.book.genre}</p>
              </div>
              <p className={isMaximized ? '' : 'hidden'}>{item.book.synopsis}</p>
              <p className={isMaximized ? '' : 'hidden'}>ISBN: {item.book.ISBN}</p>
              <p className={isMaximized ? '' : 'hidden'}>Páginas: {item.book.pages}</p>
              <button className='mx-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700' onClick={handleClick}>
            {
                isMaximized
                  ? 'Volver'
                  : 'Info'
            }
            </button>
            <button className='theButt bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded dark:bg-[#100c18] dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white' onClick={() => {
              chekBookInList(item)
                ? removeFromList(item)
                : addToList(item)
            }}>
                {
                    chekBookInList(item)
                      ? 'Quitar de la lista'
                      : 'Añadir a mi lista'
                }
            </button>
          </div>

    </li>
  )
}
