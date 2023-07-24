import { useList } from '../hooks/useList'
import { useState } from 'react'

export default function Book ({ item, className }) {
  const { addToList, removeFromList, list } = useList()
  const chekBookInList = book => {
    return list.some(item => item.book.ISBN === book.book.ISBN)
  }
  const [isMaximized, setIsMaximized] = useState(false)

  const liClass = isMaximized
    ? ' maximized w-screen 2xl:h-screen 2xl:max-h-none bg-white fixed left-0 top-[111px] 2xl:pt-[80px] pt-[380px] pb-[60px] 2xl:items-start flex justify-center 2xl:flex-row flex-col items-center max-h-[90vh] overflow-y-scroll 2xl:overflow-y-hidden'
    : ' '
  const divClass = isMaximized
    ? ' flex flex-col justify-center 2xl:justify-start items-start gap-5 2x:ml-8 my-0 mx-[50px]'
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
    <li className={classList(className, item) + liClass + ' rounded-[21px] overflow-hidden shadow-indigo-500/40 hover:shadow-lg transition-shadow max-h-[715px] dark:text-gray-300 dark:bg-[#331D2C]' } key={item.book.ISBN}>
          <img className="aspect-[317/475] w-[275px] inline"
              src= {item.book.cover}
              alt= {item.book.title}
          />
          <div className={divClass}>
              <strong className='block mt-7 w-[100%] 2xl:w-auto'>{item.book.title}</strong>
              <p className='w-[100%] 2xl:w-auto'>{item.book.author.name}</p>
              <div className='flex justify-center gap-4 w-[100%] 2xl:w-auto'>
                <p>{item.book.year}</p>
                <p>{item.book.genre}</p>
              </div>
              <p className={isMaximized ? '' : 'hidden'}>{item.book.synopsis}</p>
              <p className={isMaximized ? 'w-[100%] 2xl:w-auto' : 'hidden'}>ISBN: {item.book.ISBN}</p>
              <p className={isMaximized ? 'w-[100%] 2xl:w-auto' : 'hidden'}>Páginas: {item.book.pages}</p>
              <div className='flex justify-center items-center w-[100%] 2xl:w-auto mt-[25px] 2xl:mt-0 pb-[30px] 2xl:pb-0'>
              <button className='2xl:mx-3 py-[8px] px-4 2xl:mr-2 2xl:my-8 font-medium text-gray-900 focus:outline-none bg-slate-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 mx-2 2xl:ml-0' onClick={handleClick}>
            {
                isMaximized
                  ? 'Volver'
                  : 'Info'
            }
            </button>
            <button className='theButt bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded dark:bg-[#100c18] dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white 2xl:my-8 mx-2 2xl:mx-0' onClick={() => {
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
          </div>

    </li>
  )
}
