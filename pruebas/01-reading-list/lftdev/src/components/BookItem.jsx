export default function BookItem (props) {
  const { book, onClick } = props
  function handleClick () {
    onClick(book)
  }
  return <img className='hover:cursor-pointer' src={book.cover} alt={`${book.title} book cover`} onClick={handleClick} />
}
