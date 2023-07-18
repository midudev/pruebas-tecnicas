export default function BookItem (props) {
  const { book } = props
  return <img src={book.cover} alt={`${book.title} book cover`} />
}
