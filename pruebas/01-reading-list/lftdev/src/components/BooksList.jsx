import BookItem from './BookItem'

export default function BooksList (props) {
  const { initialList, onItemClick } = props
  return (
    <ul>
      {initialList.map((book, index) =>
        <li key={index}>
          <BookItem book={book} onClick={onItemClick} />
        </li>
      )}
    </ul>
  )
}
