import Book from '../Book'

interface IBookList extends ILibrary, IWithClickable {}

export default function BookList (props: IBookList) {
  const { books, onClick } = props

  return (
    <ul className='grid grid grid-auto-fit-[20rem] gap-9 overflow-hidden'>
      {
         books.map(book => (
           <li key={book.ISBN}>
             <Book {...book} onClick={onClick} />
           </li>))
}
    </ul>
  )
}
