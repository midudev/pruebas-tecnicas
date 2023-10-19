import { shallow } from 'zustand/shallow'

import { useUserLists } from '../store/userLists'
import styles from '../styles/main.module.css'
import { findListDetails } from '../utils/lists'
import { ActionListButton } from './ActionListButton'

export function BookContent({ book }) {
  const { lists, addBook, deleteBook } = useUserLists(state => (
    {
      lists: state.lists,
      addBook: state.addBook,
      deleteBook: state.deleteBook
    })
  , shallow)

  const isBookAlreadyInAList = (listId) => lists.find(list => {
    return list.books.some(({ ISBN }) => ISBN === book.ISBN)
  })?.id === listId

  const thereIsSelectedBook = Object.keys(book).length > 0

  const handleClick = (listId) => {
    if (isBookAlreadyInAList(listId)) {
      return deleteBook({
        bookToDelete: book,
        listIdOrigin: listId
      })
    }

    addBook({
      newBook: book,
      listIdTarget: listId
    })
  }

  return (
    <>
      <img
        id='imagePositionTarget'
        src={book?.cover}
        className={styles.imagePositionTarget}
        aria-hidden={thereIsSelectedBook}
      />
      <div
        className={styles.bookContent}
        aria-hidden={thereIsSelectedBook}
      >
        {
        thereIsSelectedBook &&
          <>
            <header className={styles.bookContentHeader}>
              <h3>
                {book?.title}
              </h3>
              <p className={styles.isbn}>ISBN: {book?.ISBN}</p>
              <p className={styles.author}>Autor: <span>{book?.author?.name}</span></p>
            </header>
            <div className={styles.listBtns}>
              {lists.map(list => (
                <ActionListButton
                  key={list.id}
                  action={() => handleClick(list.id)}
                  nameList={list.title.toLowerCase()}
                  Icon={findListDetails(list.id).Icon}
                  variant={isBookAlreadyInAList(list.id) ? 'isAlready' : ''}
                />
              ))}
            </div>
            <div className={styles.divisorLine} />
            <p className={styles.synopsis}>{book?.synopsis}</p>
            <p>Género: <span>{book?.genre}</span></p>
            <p>Páginas: <span>{book?.pages}</span></p>
            <p>Año: <span>{book?.year}</span></p>
          </>
        }
      </div>
    </>

  )
}
