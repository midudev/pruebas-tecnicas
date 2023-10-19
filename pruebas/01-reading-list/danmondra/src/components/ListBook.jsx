import { shallow } from 'zustand/shallow'
import { useUserLists } from '../store/userLists'
import { DeleteIcon } from './Icons'
import { ActionListButton } from './ActionListButton'
import { findListDetails } from '../utils/lists'
import { LISTS_IDS } from '../constants/details-of-lists'
import styles from '../styles/main.module.css'

// Delete when lists could be created by the user
const LIST_TARGET_ACCORDING_TO_LIST = {
  [LISTS_IDS.BOOKS_TO_BE_READ]: LISTS_IDS.BOOKS_READ,
  [LISTS_IDS.BOOKS_READ]: LISTS_IDS.BOOKS_TO_BE_READ
}

export function ListBook({ book, listId }) {
  const { addBook, deleteBook } = useUserLists((state) => (
    {
      deleteBook: state.deleteBook,
      addBook: state.addBook
    }
  ), shallow)

  const { genre, title, author, cover, ISBN } = book

  const targetList = findListDetails(LIST_TARGET_ACCORDING_TO_LIST[listId])

  const handleDelete = () => {
    deleteBook({ bookToDelete: book, listIdOrigin: listId })
  }

  const handleAddToList = () => {
    addBook({
      newBook: book,
      listIdTarget: targetList.id,
      listIdOrigin: listId
    })
  }

  return (
    <li
      className={styles.listBook}
      draggable='true'
      data-isbn={ISBN}
      data-listid={listId}
    >
      <img src={cover} alt='editorial' draggable='false' />
      <div className={styles.savedBookDetails}>
        <header className={styles.savedBookHeader}>
          <h3 className={styles.savedBookTitle} title={title}>{title}</h3>
          <div className={styles.savedBookActions}>
            <ActionListButton
              size='small'
              variant='delete'
              Icon={DeleteIcon}
              action={handleDelete}
            />
            <ActionListButton
              size='small'
              Icon={targetList.Icon}
              nameList={targetList.title}
              action={handleAddToList}
            />
          </div>
        </header>
        <p>Género: <span>{genre}</span></p>
        <p>Autor: <span>{author.name}</span></p>
      </div>
    </li>
  )
}
