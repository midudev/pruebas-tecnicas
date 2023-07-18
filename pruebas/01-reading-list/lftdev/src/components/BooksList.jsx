import BookItem from './BookItem'

export default function BooksList (props) {
  const { library, onItemClick } = props
  return (
    <ul>
      {library.map((book, index) => <li key={index}><BookItem book={book} clickListener={onItemClick} /></li>)}
    </ul>
  )
}
