import './App.css'
import useBooks from './hooks/useBooks'
import Aside from './components/Aside'
import Form from './components/Form'


function App() {
  const { books, booksRead, addRead, filterByGenre } = useBooks()

  return (
    <>
      <main className='p-4'>
        <section className='my-4'>
          <Form filterByGenre={filterByGenre} />
        </section>
        <section>
          <h1>{books.length} Libros Disponibles</h1>
          <div className='grid grid-flow-col gap-4' style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))" }}>
            {books.map(({ book }) => (
              <article key={book.ISBN}>
                <img src={book.cover} className='w-100 h-auto hover:cursor-pointer' onClick={() => addRead(book.ISBN)} />
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
