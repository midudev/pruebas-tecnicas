import './App.css'
import useBooks from './hooks/useBooks'
import Aside from './components/Aside'
import Form from './components/Form'


function App() {
  const { books, booksRead, addRead, filterByGenre, filterByText } = useBooks()

  return (
    <>
      <main className='p-4'>
        <section className='my-4'>
          <Form filterByGenre={filterByGenre} filterByText={filterByText} />
        </section>
        <section>
          <h1>{books.length} Libros Disponibles</h1>
          <div className='grid grid-flow-col gap-4' style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))" }}>
            {books.map(({ book }) => (
              <article key={book.ISBN}>
                <img src={book.cover} className='w-100 h-auto hover:cursor-pointer' onClick={() => addRead(book.ISBN)} />
                <p className='text-center'>{book.title}</p>
                <p className='text-center'>{book.author.name}</p>
                <p className='text-center'>{book.genre}</p>
                <p className='text-center'>{book.pages} paginas - Año {book.year}</p>

              </article>
            ))}
          </div>
        </section>
      </main>
      {booksRead.length > 0 && <Aside />}
    </>
  )
}

export default App
