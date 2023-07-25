import { useId, useState } from 'react'
import { CloseBookIcon, OpenBookIcon, RemoveAllBooks } from '../icons/icons.jsx'
import './listOfLecture.css'
import ListItem from './listItem/listItem.jsx'
import { useListOfLecture } from '../../hooks/useListOfLecture.jsx'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'

export default function ListOfLecture () {
  const { list, clearLectureList, removeFromLectureList, setNewListSorted } = useListOfLecture()
  const bookListCheckboxId = useId()
  const [isOpen, setIcon] = useState(false)
  function handleChangeIcon () {
    setIcon(!isOpen)
  }
  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over.id) {
      const olderIndex = list.findIndex((book) => book.title === active.id)
      const newIndex = list.findIndex((book) => book.title === over.id)
      const newList = arrayMove(list, olderIndex, newIndex)
      setNewListSorted(newList)
    }
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
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
          <SortableContext
            items={list}
            strategy={verticalListSortingStrategy}
          >
            {list.map(book => (
              <ListItem
                key={book.title}
                removeFromList={() => removeFromLectureList(book)}
                {...book}
              />
            ))}
          </SortableContext>
        </ul>

      </aside>

    </DndContext>
  )
}
