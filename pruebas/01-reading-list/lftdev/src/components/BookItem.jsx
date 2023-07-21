export default function BookItem (props) {
  const { book, onClick } = props
  return <img className='hover:cursor-pointer' src={book.cover} alt={`${book.title} book cover`} onClick={() => onClick(book)} />
}
