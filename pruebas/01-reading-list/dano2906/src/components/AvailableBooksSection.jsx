import AvailableBook from "./AvailableBook";

export default function AvailableBooksSection({books}) {
  return (
        <ul className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-center sm:px-2 md:px-3">
            {books && books.map(({book})=>(
              <AvailableBook book={book} key={book.ISBN}/>
            ))
          }
          {!books && <h2>Cargando libros...</h2>}
        </ul>
  )
}
