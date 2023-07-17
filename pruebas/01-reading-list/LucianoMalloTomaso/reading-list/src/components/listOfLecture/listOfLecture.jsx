import { useId, useState } from 'react'
import { CloseBookIcon, OpenBookIcon, RemoveAllBooks } from '../Icons/Icons.jsx'
import './listOfLecture.css'
import ListItem from './listItem/listItem.jsx'
import { useListOfLecture } from '../../hooks/useListOfLecture.jsx'

export default function ListOfLecture () {
  const { list, clearLectureList, removeFromLectureList } = useListOfLecture()
  const bookListCheckboxId = useId()
  const [isOpen, setIcon] = useState(false)

  function handleChangeIcon () {
    setIcon(!isOpen)
  }

  return (
    <>
      <label htmlFor={bookListCheckboxId} className='list-button-toggle'>
        {
            isOpen ? <CloseBookIcon /> : <OpenBookIcon />
        }
      </label>
      <input id={bookListCheckboxId} type='checkbox' hidden onChange={() => handleChangeIcon()} />

      <aside className='list'>
        <button onClick={clearLectureList} className='removeAllBooksButton'>
          Remove all <RemoveAllBooks />
        </button>
        <ul>
          {list.map(book => (
            <ListItem
              key={book.title}
              removeFromList={() => removeFromLectureList(book)}
              {...book}
            />
          ))}
        </ul>

      </aside>

    </>
  )
}
