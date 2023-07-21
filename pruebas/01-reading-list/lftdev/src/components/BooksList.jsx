import BookItem from './BookItem'

export default function BooksList (props) {
  const { list, onItemClick, removableItems, onRemoveRequest, className } = props
  const removeRequest = index => onRemoveRequest(index)
  return (
    <ul className={className}>
      {list.map((book, index) =>
        <li key={index} className='w-28'>
          <article>
            {removableItems && <button onClick={() => removeRequest(index)}>x</button>}
            <BookItem book={book} onClick={onItemClick} />
          </article>
        </li>
      )}
    </ul>
  )
}
