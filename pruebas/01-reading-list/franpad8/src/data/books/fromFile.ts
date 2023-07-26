import { library as imdbBooks } from '../books.json'
import { mapImdbToBook } from '../mappings'

export default imdbBooks.map(imdbBook => mapImdbToBook(imdbBook.book))
