import './App.css'
import Aside from './components/Aside'
import useBooks from './hooks/useBooks'

function App() {
  const { store, storeRead, genres, addRead, filterByGenre } = useBooks()

  return (
    <>
      <main className='p-4'>
        <section className='my-4'>
          <form>
            <fieldset className='flex justify-between'>
              <legend className='text-lg font-bold'>Filtrar por:</legend>
              <div className='flex gap-2'>
                <label htmlFor='genre'>Genero</label>
                <select name='genre' id='genre' onChange={(e) => filterByGenre(e.target.value)}>
                  <option value=''>Todos</option>
                  {genres.map((genre: string, index: number) => (
                    <option key={index} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
            </fieldset>

            <input type='text' className='border-4' placeholder='Buscar' />
          </form>
        </section> 
        <section>
          <h1>{store.length} Libros Disponibles</h1>
          <div className='grid grid-flow-col gap-4' style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))" }}>
            {store.map(({ book }) => (
              <article key={book.ISBN}>
                <img src={book.cover} className='w-100 h-auto hover:cursor-pointer' onClick={() => addRead(book.ISBN)} />
              </article>
            ))}
          </div>
        </section>
      </main>
      {storeRead.length > 0 && <Aside />}
    </>
  )
}

export default App
