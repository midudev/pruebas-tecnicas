import Book from '../Book'

interface IBookList extends ILibrary {}

export default function BookList (props: IBookList) {
  const { books } = props

  return (
    <ul className='grid grid-cols-3 overflow-hidden'>
      {
         books.map(book => (
           <li
             className='text-sm '
             key={book.ISBN}
           >
             <Book title={book.title} />
           </li>))
}
    </ul>
  )
}
