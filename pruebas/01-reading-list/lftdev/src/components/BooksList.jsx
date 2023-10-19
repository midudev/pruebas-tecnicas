import BookItem from './BookItem'

export default function BooksList (props) {
  const { list, filters, onItemClick, removableItems, onRemoveRequest, className } = props
  const removeRequest = index => onRemoveRequest(index)
  const filteredList = !filters
    ? list
    : list.filter(book =>
      (!filters.genreFilter || (filters.genreFilter === 'Todos'))
        ? book.pages >= filters.pagesFilter
        : (book.pages >= filters.pagesFilter) && (book.genre === filters.genreFilter)
    )
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
