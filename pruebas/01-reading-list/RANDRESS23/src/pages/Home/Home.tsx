import { type Book } from '../../models'
import { library } from '../../services/books.json'

export const Home: React.FC = () => {
  return (
    <div>
      {/* {
        library.map(({ book }: { book: Book }) => (
          <div key={book.ISBN}>
            <h1>{book.title}</h1>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <img src={book.cover} alt={book.title} width={120} height={160} />
          </div>
        ))
      } */}
    </div>
  )
}
// "book": {
//   "title": "El Señor de los Anillos",
//   "pages": 1200,
//   "genre": "Fantasía",
//   "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
//   "synopsis": "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
//   "year": 1954,
//   "ISBN": "978-0618640157",
//   "author": {
//     "name": "J.R.R. Tolkien",
//     "otherBooks": [
//       "El Hobbit",
//       "El Silmarillion"
//     ]
//   }
// }
