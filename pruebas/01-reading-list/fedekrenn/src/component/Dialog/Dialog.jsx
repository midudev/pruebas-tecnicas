// Components
import Card from '../Card/Card'

function Dialog ({ readingList, dialog, closeModal, setReadingList, baseBooks, setBooks, setGenre }) {
  const removeBookFromReadingList = (book) => {
    const newReadingList = readingList.filter(item => item.book.ISBN !== book.book.ISBN)
    setReadingList(newReadingList)

    const filteredBooks = baseBooks.current.filter(book => (
      !newReadingList.some(item => item.book.ISBN === book.book.ISBN)
    ))

    setBooks(filteredBooks)
    setGenre('Todos')

    alert('Libro eliminado de la lista de lectura')
  }

  return (
    <dialog id='readingList' ref={dialog}>
      {readingList.length > 0
        ? (
          <>
            <h2>Lista de lectura</h2>
            <ul>
              {readingList.map((book) => {
                return <Card key={book.book.ISBN} book={book} removeBookFromReadingList={removeBookFromReadingList} />
              })}
            </ul>
          </>
          )
        : (
          <p>No hay libros en la lista de lectura</p>
          )}
      <button onClick={closeModal}>Cerrar</button>
    </dialog>
  )
}

export default Dialog
