import { Droppable, Draggable } from 'react-beautiful-dnd'
import DroppableGrid from './DroppableGrid'
import Book from './Book'
import { useStore } from '../state'
import { findBookByISBN } from '../utils/books'
import { IS_EMPTY, PRIORITY_ROWS } from '../constants'

function Library ({ books, originalBooks, isReadingList = false }) {
  const {
    setBooks,
    addBook,
    addToReadingList,
    removeFromReadingList,
    setShowNotification,
    setNotificationMessage,
    setNotificationType
  } = useStore()

  const handleDoubleClick = (target, ISBN) => {
    const { parentNode } = target
    const updatedBooks = books.map(({ book }) => {
      if (book.ISBN === ISBN) {
        return {
          book: {
            ...book,
            like: !book.like,
            priority: 'ALTA'
          }
        }
      }
      return { book }
    })

    const { book } = findBookByISBN(updatedBooks, ISBN)
    if (book) {
      const selector = book.like ? '.bi-heart-fill' : '.bi-heartbreak-fill'
      const heart = parentNode.querySelector(selector)
      heart.classList.add('like')

      setTimeout(() => {
        heart.classList.remove('like')
        if (book.like) {
          const filteredBooks = originalBooks.current.filter(({ book }) => book.ISBN !== ISBN)
          originalBooks.current = filteredBooks
          setBooks(filteredBooks)
          addToReadingList({ book })
          setNotificationType('success')
          setNotificationMessage('Libro agregado a la lista de lectura')
          setShowNotification(true)
        } else {
          originalBooks.current = [...originalBooks.current, { book }]
          addBook({ book })
          removeFromReadingList(ISBN)
          setNotificationType('warning')
          setNotificationMessage('Libro eliminado de la lista de lectura')
          setShowNotification(true)
        }
      }, 500)
    }
  }

  const filteredBooks = (priority) => {
    return books.filter(({ book }) => book?.priority.toLowerCase() === priority.toLowerCase())
  }

  return (
    isReadingList
      ? PRIORITY_ROWS.map((priority) => (
        <div key={priority}>
          <h5 className='text-center mt-2'>
            PRIORIDAD {priority}
          </h5>
          <Droppable droppableId={priority} direction='horizontal'>
            {(droppableProvided, droppableSnapshot) => (
              <DroppableGrid
                id={priority}
                droppableProvided={droppableProvided}
                droppableSnapshot={droppableSnapshot}
              >
                {
                  filteredBooks(priority).length !== IS_EMPTY
                    ? filteredBooks(priority)
                      .map(({ book }, index) => (
                        <Draggable key={book.ISBN} draggableId={book.ISBN} index={index}>
                          {(draggableProvided, _) => (
                            <Book
                              book={book}
                              handleDoubleClick={({ target }) => handleDoubleClick(target, book.ISBN)}
                              draggableProvided={draggableProvided}
                            />
                          )}
                        </Draggable>
                      ))
                    : <div style={{ height: '15rem' }} className={droppableSnapshot.isDraggingOver ? '' : 'border-3 border-black dotted'} />
                }
              </DroppableGrid>
            )}
          </Droppable>
        </div >
      ))
      : <Droppable droppableId='available'>
        {(droppableProvided, droppableSnapshot) => (
          <DroppableGrid
            id='available'
            droppableProvided={droppableProvided}
            droppableSnapshot={droppableSnapshot}
          >
            {
              books.length !== IS_EMPTY
                ? books.map(({ book }, index) => (
                  <Draggable key={book.ISBN} draggableId={book.ISBN} index={index}>
                    {(draggableProvided, _) => (
                      <Book
                        book={book}
                        handleDoubleClick={({ target }) => handleDoubleClick(target, book.ISBN)}
                        draggableProvided={draggableProvided}
                      />
                    )}
                  </Draggable>
                ))
                : <div style={{ height: '100%' }} className={droppableSnapshot.isDraggingOver ? '' : 'border-3 border-black dotted'}>
                  <h5
                    className='text-center mt-2'
                    style={droppableSnapshot.isDraggingOver ? { display: 'none' } : {}}
                  >
                    No hay libros disponibles
                  </h5>
                </div>

            }
          </DroppableGrid>
        )}
      </Droppable>
  )
}

export default Library
