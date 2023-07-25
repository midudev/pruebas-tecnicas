import '@/styles/App.css'
import BookList from '@/components/BookList/BookList'
import ReadingList from '@/components/ReadingList/ReadingList'
import booksData from '@/data/books.json'

function App() {
  let booksArray = booksData && booksData.library?.length > 0 ? booksData.library : []
  booksArray = booksArray.map((item) => item.book)
  const readingListArray = [
    {
      title: 'El Señor de los Anillos',
      pages: 1200,
      genre: 'Fantasía',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
      synopsis: 'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
      year: 1954,
      ISBN: '978-0618640157',
      author: {
        name: 'J.R.R. Tolkien',
        otherBooks: ['El Hobbit', 'El Silmarillion'],
      },
    },
    {
      title: 'Juego de Tronos',
      pages: 694,
      genre: 'Fantasía',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg',
      synopsis:
        'En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.',
      year: 1996,
      ISBN: '978-0553103540',
      author: {
        name: 'George R. R. Martin',
        otherBooks: ['Choque de Reyes', 'Tormenta de Espadas', 'Festín de Cuervos'],
      },
    },
    // add more books here
  ]
  return (
    <>
      <main>
        <div className='books'>
          <h1 className='books__title text-3xl font-bold mb-2'>Books</h1>
          <BookList books={booksArray} className='books__list' />
        </div>
        <ReadingList books={readingListArray} />
      </main>
    </>
  )
}

export default App
