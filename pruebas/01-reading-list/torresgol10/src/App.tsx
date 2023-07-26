import './App.css'
import useBooks from './hooks/useBooks'
import Aside from './components/Aside'
import Form from './components/Form'
import Card from './components/Card'


function App() {
  const { books, addRead, filterByGenre, filterByText, filterByPages, nPages } = useBooks()

  return (
    <>
      <main className='col-span-4 xl:col-span-3 bg-gray-200 p-4'>
        <section className='my-4'>
          <Form filterByGenre={filterByGenre} filterByText={filterByText} filterByPages={filterByPages} nPages={nPages}/>
        </section>
        <section>
          <h1 className='py-4'>{books.length} Libros Disponibles</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4'>
            {books.map(({ book }) => (
              <Card key={book.ISBN} book={book} addRead={addRead} />
            ))}
          </div>
        </section>
      </main>
      <Aside />
    </>
  )
}

export default App
