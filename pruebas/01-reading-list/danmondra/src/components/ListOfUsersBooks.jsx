import { useBooks } from '../hooks/useBooks'
import { ListBook } from './ListBook'
import styles from '../styles/main.module.css'
import { useUserLists } from '../store/userLists'
import { findListDetails } from '../constants/details-of-lists'
import { shallow } from 'zustand/shallow'
import { DropIcon } from './Icons'

export function ListOfUsersBooks({
  list,
  draggingInfo,
  setDraggingInfo
}) {
  const { books } = useBooks()
  const { addBook } = useUserLists((state) => (
    {
      lists: state.lists,
      addBook: state.addBook
    }
  ), shallow)

  const { Icon, title, color } = findListDetails(list.id)

  const handleDrop = (e) => {
    e.preventDefault()

    const droppedElementInfo = e.dataTransfer.getData('text')
    const { isbn, listid } = JSON.parse(droppedElementInfo)
    const newBook = books.find(({ ISBN }) => ISBN === isbn)

    addBook({
      newBook,
      listIdTarget: list.id,
      listIdOrigin: listid
    })

    setDraggingInfo({
      listDragEnter: '',
      listDragOriign: '',
      bookDraggedISBN: ''
    })
  }

  const handleDragStart = (e) => {
    const { isbn, listid } = e.target.dataset
    e.dataTransfer.setData('text', JSON.stringify({ isbn, listid }))

    setDraggingInfo({
      listDragOrigin: listid,
      bookDraggedISBN: isbn
    })
  }

  const handleDragEnter = (e) => {
    e.preventDefault()

    setDraggingInfo((state) => (
      {
        ...state,
        listDragEnter: list.id
      }
    ))
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    if (e.relatedTarget.classList.contains('dragEndZone')) {
      setDraggingInfo(state => (
        {
          ...state,
          listDragEnter: ''
        }
      ))
    }
  }

  const handleDragEnd = () => setDraggingInfo({
    listDragEnter: '',
    listDragOriign: '',
    bookDraggedISBN: ''
  })

  const handleDragOver = (e) => e.preventDefault()

  return (
    <div
      className={`
      ${styles.listContainer}
      ${(draggingInfo?.listDragEnter === list.id && draggingInfo?.listDragOrigin !== list.id) && styles.listDragging}
      ${styles[color]}
      `}
      onDrop={handleDrop}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <header className={styles.listHeader}>
        <h3>
          {title}
          {list.books.length > 0 && <span>({list.books.length})</span>}
        </h3>
        <Icon />
      </header>
      <div className={`${styles.divisorLine} ${styles.withinList}`} />
      {list.books[0]
        ? (
          <ol className={styles.list}>
            {list.books.map(book => (
              <ListBook
                key={book.ISBN}
                book={book}
                listId={list.id}
              />
            ))}
          </ol>
          )
        : (
          <p className={styles.listPlaceholder}>
            No tienes {title.toLowerCase()} aún
            <span>Arrastra y suelta aquí <DropIcon /></span>
          </p>
          )}
    </div>
  )
}
