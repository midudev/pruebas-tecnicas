import './books.css'

export default function Books ({ books }) {
  const booksToShow = 10
  return (
    <main className='books'>
      <ul>
        {books.slice(0, booksToShow).map(book => {
          console.log(book.author)
          return (
            <li key={book.title}>
              <div>{book.title}</div>
              <img className='book-photo' src={book.cover} alt={book.title} loading='lazy' />
              <div>
                <div>Pages: {book.pages}</div>
                <div>Author: {book.author}</div>
              </div>
              <div>
                <button>
                  <div>Add To List</div>
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
