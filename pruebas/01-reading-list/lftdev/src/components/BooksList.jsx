import BookItem from './BookItem'

export default function BooksList (props) {
  const { list, onItemClick, removableItems, onRemoveRequest } = props
  function removeRequest (index) {
    onRemoveRequest(index)
  }
  return (
    <ul>
      {list.map((book, index) =>
        <li key={index}>
          {removableItems && <button onClick={() => removeRequest(index)}>x</button>}
          <BookItem book={book} onClick={onItemClick} />
        </li>
      )}
    </ul>
  )
}
