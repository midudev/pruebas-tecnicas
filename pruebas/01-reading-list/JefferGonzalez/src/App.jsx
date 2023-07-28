import { useRef, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Row, Col, Form } from 'react-bootstrap'
import { useStore } from './state'
import { getBooks, saveToLocalStorage } from './services/books'
import { getMaxPages, getUniqueGenres, filterBooksByType } from './utils/books'
import { deepSearch } from './utils/search'
import { IS_EMPTY, PRIORITY_ROWS } from './constants'

import Library from './components/Library'
import NotificationToast from './components/NotificationToast'
import { tour } from './tour'

function App () {
  const {
    books,
    setBooks,
    addBook,
    readingList,
    setReadingList,
    addToReadingList,
    updateBookFromReadingList,
    removeFromReadingList,
    genres,
    setGenres,
    genre,
    setGenre,
    pages,
    setPages,
    maxPages,
    setMaxPages,
    showNotification,
    setShowNotification,
    notificationMessage,
    setNotificationMessage,
    notificationType,
    setNotificationType
  } = useStore()

  const originalBooks = useRef([])

  useEffect(() => {
    getBooks()
      .then(({ available, readingList }) => handleChangeState(available, readingList))
      .catch((e) => {
        setNotificationType('danger')
        setNotificationMessage(e.message)
        setShowNotification(true)
      })
    checkTour()
  }, [])

  useEffect(() => {
    try {
      if (originalBooks.current.length > IS_EMPTY) {
        if (readingList.length > IS_EMPTY) {
          if (readingList.length >= IS_EMPTY) {
            const available = originalBooks.current
            saveToLocalStorage({ available, readingList })
            handleChangeState(available, readingList)
          }
        }
      }
    } catch (e) {
      setNotificationType('danger')
      setNotificationMessage(e.message)
      setShowNotification(true)
    }
  }, [readingList])

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'books') {
        const { newValue } = e
        if (newValue === null) {
          setNotificationType('danger')
          setNotificationMessage('No se pudo obtener la información de los libros')
          setShowNotification(true)
          handleChangeState([], [])
        } else {
          const { available, readingList } = JSON.parse(newValue)
          handleChangeState(available, readingList)
        }
      }
    }
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const handleChangeState = (available, readingList) => {
    originalBooks.current = available
    setBooks(available)
    setReadingList(readingList)
    updateGenresAndPages(available)
  }

  const updateGenresAndPages = (books) => {
    const genres = getUniqueGenres(books)
    const max = getMaxPages(books)
    setGenre('')
    setGenres(genres)
    setMaxPages(max)
    setPages(max)
  }

  const checkTour = () => {
    const tourCompleted = localStorage.getItem('tour')
    if (!tourCompleted) {
      tour.drive()
    }
  }

  const filterBySearch = (books, value = null) => {
    if (!value) {
      const search = document.getElementById('search')
      value = search?.value
    }
    return value ? books.filter(({ book }) => deepSearch(book, value)) : books
  }

  const handleSearch = ({ target }) => {
    try {
      const { value } = target
      const books = filterBySearch(originalBooks.current, value)
      const booksByPages = filterBooksByType(books, 'pages', pages)
      const filteredBooks = filterBooksByType(booksByPages, 'genre', genre)
      setBooks(filteredBooks)
    } catch (e) {
      setNotificationType('danger')
      setNotificationMessage(e.message)
      setShowNotification(true)
    }
  }

  const handlePagesFilter = ({ target }) => {
    try {
      const { value } = target
      const books = filterBySearch(originalBooks.current)
      const booksByGenre = filterBooksByType(books, 'genre', genre)
      const filteredBooks = filterBooksByType(booksByGenre, 'pages', value)
      setBooks(filteredBooks)
      setPages(value)
    } catch (e) {

    }
  }

  const handleGenreFilter = ({ target }) => {
    try {
      const { value } = target
      const books = filterBySearch(originalBooks.current)
      const booksByPages = filterBooksByType(books, 'pages', pages)
      const filteredBooks = filterBooksByType(booksByPages, 'genre', value)
      setBooks(filteredBooks)
      setGenre(value)
    } catch (e) {
      setNotificationType('danger')
      setNotificationMessage(e.message)
      setShowNotification(true)
    }
  }

  /**
   * Drag and Drop
   */
  const onDragEnd = ({ source, destination, draggableId }) => {
    try {
      if (!destination) return
      const { droppableId: sourceId, index: sourceIndex } = source
      const { droppableId: destinationId, index: destinationIndex } = destination

      if (sourceId === destinationId && sourceIndex === destinationIndex) return

      if (sourceId === 'available' && PRIORITY_ROWS.includes(destinationId)) {
        const { book: item } = books.find(({ book }) => book.ISBN === draggableId)
        if (item) {
          const book = { ...item, like: true, priority: destinationId }
          const filteredBooks = originalBooks.current.filter((original) => original.book.ISBN !== book.ISBN)
          originalBooks.current = filteredBooks
          setBooks(filteredBooks)
          addToReadingList({ book })
          setNotificationType('success')
          setNotificationMessage('Libro agregado a la lista de lectura')
          setShowNotification(true)
        }
      }

      if (PRIORITY_ROWS.includes(sourceId) && destinationId === 'available') {
        const { book: item } = readingList.find(({ book }) => book.ISBN === draggableId)
        if (item) {
          delete item.priority
          const book = { ...item, like: false }
          originalBooks.current = [...originalBooks.current, { book }]
          addBook({ book })
          removeFromReadingList(book.ISBN)
          setNotificationType('warning')
          setNotificationMessage('Libro eliminado de la lista de lectura')
          setShowNotification(true)
        }
      }

      if (PRIORITY_ROWS.includes(sourceId) && PRIORITY_ROWS.includes(destinationId)) {
        const { book: item } = readingList.find(({ book }) => book.ISBN === draggableId)
        if (item) {
          const book = { ...item, priority: destinationId }
          updateBookFromReadingList(book.ISBN, book)
          setNotificationType('info')
          setNotificationMessage('Libro actualizado')
          setShowNotification(true)
        }
      }
    } catch (e) {
      setNotificationType('danger')
      setNotificationMessage(e.message)
      setShowNotification(true)
    }
  }

  return (
    <main
      style={{
        padding: '10px 25px',
        height: '100vh'
      }}
    >
      <NotificationToast show={showNotification} setShow={setShowNotification} message={notificationMessage} type={notificationType} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Row style={{ minHeight: '95vh' }}>
          <Col md={'7'} className='py-2'>
            <header id='controls'>
              <h2>
                Mostrando {books.length} libros
                de {originalBooks.current.length} disponibles
              </h2>
              <Row>
                <Col>
                  <Form.FloatingLabel label='Buscar... 🔎'>
                    <Form.Control
                      id='search'
                      type='text'
                      placeholder='Buscar... 🔎'
                      onChange={handleSearch}
                    />
                  </Form.FloatingLabel>
                </Col>
                <Col>
                  <Form.Label>
                    Filtrar por páginas:
                    <strong> {pages}</strong>
                  </Form.Label>
                  <Form.Range
                    id='pages'
                    data-testid='pages'
                    min={0}
                    value={pages}
                    max={maxPages}
                    onChange={handlePagesFilter}
                  />
                </Col>
                <Col>
                  <Form.Label>Filtrar por género:</Form.Label>
                  <Form.Select id='genre' role='combobox' onChange={handleGenreFilter} value={genre}>
                    <option value=''>Todos</option>
                    {[...genres].map((genre) => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
              <hr />
            </header>
            <Library books={books} originalBooks={originalBooks} />
          </Col>
          <Col md={'5'} className='bg-dark-subtle py-2'>
            <header id='reading-list'>
              <h2 className='text-center'>
                Lista de lectura
                <span
                  id='reading-list-count'
                  role='count'
                  className='badge bg-primary'
                  style={{ marginLeft: '10px' }}
                >
                  {readingList.length}
                </span>
              </h2>
              <hr />
            </header>
            <Library books={readingList} originalBooks={originalBooks} isReadingList />
          </Col>
        </Row>
      </DragDropContext>
    </main >
  )
}

export default App
