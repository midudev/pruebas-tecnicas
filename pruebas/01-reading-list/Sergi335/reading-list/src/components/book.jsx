import { useList } from '../hooks/useList'
import { useState } from 'react'

export default function Book ({ item }) {
  const { addToList, removeFromList, list } = useList()

  const chekBookInList = book => {
    return list.some(item => item.book.ISBN === book.book.ISBN)
  }

  const [isMaximized, setIsMaximized] = useState(false)

  const liClass = isMaximized
    ? ' maximized w-screen h-screen bg-white fixed left-0 top-[111px] pt-[80px] items-start flex justify-center'
    : ' '

  const handleClick = () => {
    setIsMaximized(!isMaximized)
    if (!isMaximized) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }

  return (
    <li className={chekBookInList(item)
      ? 'opacity-90' + liClass
      : 'opacity-100' + liClass} key={item.book.ISBN}>
          <img className="aspect-[317/475]"
              src= {item.book.cover}
              alt= {item.book.title}
          />
          <div>
              <strong>{item.book.title}</strong>
              <p>{item.book.author.name}</p>
              <p>{item.book.year}</p>
              <p>{item.book.genre}</p>
              <p className={isMaximized ? '' : 'hidden'}>{item.book.synopsis}</p>
              <p className={isMaximized ? '' : 'hidden'}>ISBN: {item.book.ISBN}</p>
              <p className={isMaximized ? '' : 'hidden'}>Páginas: {item.book.pages}</p>
              <button className='mx-3' onClick={handleClick}>
            {
                isMaximized
                  ? 'Volver'
                  : 'Info'
            }
            </button>
            <button onClick={() => {
              console.log(chekBookInList(item))
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
