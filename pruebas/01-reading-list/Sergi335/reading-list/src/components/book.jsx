import { useList } from '../hooks/useList'
import { useState } from 'react'

export default function Book ({ item }) {
  const { addToList, removeFromList, list } = useList()

  const chekBookInList = book => {
    return list.some(item => item.book.ISBN === book.book.ISBN)
  }

  const [isMaximized, setIsMaximized] = useState(false)

  const liClass = isMaximized
    ? ' maximized cursor-pointer'
    : ' cursor-pointer'

  const handleClick = () => {
    setIsMaximized(!isMaximized)
  }

  return (
    <li className={chekBookInList(item)
      ? 'opacity-50' + liClass
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
          </div>
          <button className='mx-3' onClick={handleClick}>info</button>
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
    </li>
  )
}
