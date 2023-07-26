
import './Books.css'
import { useReadingList } from '../hooks/useReadingList'


//componente que listar los elementos del archivo books.json
 export function Books({books}) {
  const { readingList, addReadingList}=useReadingList()

  // se crea una función local para añadir a lista de lectura.
  const addToReadingList = (book) => {
    addReadingList(book);
  };

  //contador para libros disponibles y lista de lectura.
  const counterBooks = books.filter((book) => !readingList.some((item) => item.book.ISBN === book.book.ISBN));
   
  return (
    <>
    <h3 style={{marginInlineStart:'3rem'}}>{counterBooks.length} libros disponibles</h3>
    <main className='books'>
    <ul>
      {/* antes de renderizar un libro en Books, 
      verificamos si ya está en la readingList 
      utilizando el método some. Si el libro ya 
      está en la lista de lectura, no se renderizará 
      en la vista de Books, evitando así que aparezca duplicado. */ }
          {books.map((book) => (
            !readingList.some((item) => item.book.ISBN === book.book.ISBN) && (
              <li key={book.book.ISBN} onClick={() => addToReadingList(book)}>
                <img src={book.book.cover} alt={`Image of ${book.book.title}`} />
                <p>{book.book.synopsis}</p>
                <h6>Año de publicación: {book.book.year}</h6>
              </li>
            )
          ))}
        </ul>

    </main>
    </>
  )
}

