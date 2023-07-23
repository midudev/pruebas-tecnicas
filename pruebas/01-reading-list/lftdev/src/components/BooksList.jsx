import BookItem from './BookItem'

export default function BooksList (props) {
  const { list, filter, onItemClick, removableItems, onRemoveRequest, className } = props
  const removeRequest = index => onRemoveRequest(index)
  const filteredList = (filter === 'Todos') || !filter ? list : list.filter(book => book.genre === filter)
  return (
    <ul className={className}>
      {filteredList.map((book, index) => {
        return (
          <li key={index} className='w-28'>
            <article>
              {removableItems && <button onClick={() => removeRequest(index)}>x</button>}
              <BookItem book={book} onClick={onItemClick} />
            </article>
          </li>
        )
      }
      )}
    </ul>
  )
}
