import './App.css'
import useBooks from './hooks/useBooks'
import Aside from './components/Aside'
import Form from './components/Form'


function App() {
  const { books, booksRead, addRead, filterByGenre, filterByText, filterByPages } = useBooks()

  return (
    <>
      <main className='p-4'>
        <section className='my-4'>
          <Form filterByGenre={filterByGenre} filterByText={filterByText} filterByPages={filterByPages} />
        </section>
        <section>
          <h1 className='py-4'>{books.length} Libros Disponibles</h1>
          <div className='flex flex-wrap justify-start gap-4'>
            {books.map(({ book }) => (
              <article key={book.ISBN} className='relative flex flex-col justify-end h-[35rem] w-[25rem] hover:cursor-pointer' onClick={() => addRead(book.ISBN)}>
                <img src={book.cover} className='absolute top-0 left-0 w-full h-5/6 object-cover object-top' />

                <div className='background-graniend h-3/6 z-10 text-gray-300 p-4'>
                  <h2 className='text-xl text-white'>{book.title}</h2>

                  <div className='flex flex-row justify-between'>
                    <span>por {book.author.name}</span> <span className='flex'>{book.pages} <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="48"><path d="M248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z"/></svg></span>
                  </div>
                  <p className='text-white pt-4'>{book.synopsis}</p>

                  <div className='flex flex-row justify-between pt-4'>
                    <span>{book.year} ({book.genre})</span> <span>ISBN: {book.ISBN}</span>
                  </div>


                  {book.author?.otherBooks.length > 0 && (
                    <>
                      <p className='pt-4 pb-1'>+ Sobre el autor</p>
                      <ul className='overflow-x-auto h-8 border-y border-white'>
                        {book.author.otherBooks.map((name) => (
                          <li>{name}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
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
