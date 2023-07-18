export default function BookItem (props) {
  const { book, clickListener } = props
  function handleClick () {
    clickListener(book)
  }
  return <img src={book.cover} alt={`${book.title} book cover`} onClick={handleClick} />
}
