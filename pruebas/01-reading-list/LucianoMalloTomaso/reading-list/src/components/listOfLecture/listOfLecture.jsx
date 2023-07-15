import { useId, useState } from 'react'
import { CloseBookIcon, OpenBookIcon, RemoveAllBooks } from '../Icons/Icons.jsx'
import './listOfLecture.css'
import ListItem from './listItem/listItem.jsx'

export default function ListOfLecture () {
  const bookListCheckboxId = useId()
  const [isOpen, setIcon] = useState(false)

  function handleChangeIcon () {
    setIcon(!isOpen)
  }

  return (
    <>
      <label htmlFor={bookListCheckboxId} className='list-button'>
        {
            isOpen ? <CloseBookIcon /> : <OpenBookIcon />
        }
      </label>
      <input id={bookListCheckboxId} type='checkbox' hidden onChange={() => handleChangeIcon()} />

      <aside className='list-of-lecture'>
        <button>
          <RemoveAllBooks />
        </button>
        <ul>
          <ListItem
            pages={694}
            title='Juego de Tronos'
            cover='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg'
          />
        </ul>

      </aside>

    </>
  )
}
