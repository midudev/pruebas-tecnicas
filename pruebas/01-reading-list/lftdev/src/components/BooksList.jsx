import BookItem from './BookItem'

export default function BooksList (props) {
  const { list, onItemClick, removableItems, onRemoveRequest, className } = props
  function removeRequest (index) {
    onRemoveRequest(index)
  }
  return (
    <ul className={className}>
      {list.map((book, index) =>
        <li key={index} className='w-28'>
          {removableItems && <button onClick={() => removeRequest(index)}>x</button>}
          <BookItem book={book} onClick={onItemClick} />
        </li>
      )}
    </ul>
  )
}
