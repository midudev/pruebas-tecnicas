import { useBooks } from '../hooks/useBooks'
import { type Book } from '../types'
import { Checkbox } from './Checkbox'
import { PriorityBadgeActive, PriorityBadgeInactive, UserReadListIcon } from './Icons'
import { SingleBook } from './SingleBook'
import './UserReadList.css'

const sortReadList = (a: Book, b: Book) => {
  if (a.priority === b.priority) {
    return 0
  }
  if (a.priority === true) {
    return -1
  }
  return 1
}

export function UserReadList () {
  const {
    readList,
    removeBook,
    setBookPrio,
    setSortReadListByPriority,
    sortReadListByPriority
  } = useBooks()

  const handleBookClick = (book: Book) => {
    removeBook(book)
  }

  const handleSetPriority = (book: Book) => {
    setBookPrio(book)
  }

  const handleSetSortReadListByPriority = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    console.log(checked)
    setSortReadListByPriority(checked)
  }

  const readListToUse = sortReadListByPriority ? readList.sort(sortReadList) : readList
  console.log(readListToUse, sortReadListByPriority)

  return (
    <aside className='read-list'>
      <section className="title">
        <UserReadListIcon />
        <div className='title-container'>
          <h2>Mi lista de lectura ({readList.length} libros)</h2>
          <div className="separator"></div>
        </div>
      </section>
      <form>
        <Checkbox
          name="priority"
          onChange={handleSetSortReadListByPriority}
          checked={sortReadListByPriority}
          label="Ordenar por prioridad"
        />
      </form>
      <ul className="user-books">
        {
          readListToUse.map((book) => (
            <SingleBook text="Quitar" key={book.ISBN} book={book} onClick={handleBookClick}>
              <div className="priority-badge" onClick={() => { handleSetPriority(book) }}>
                {
                  book.priority === true
                    ? <PriorityBadgeActive />
                    : <PriorityBadgeInactive />
                }
              </div>
            </SingleBook>
          ))
        }
      </ul>
    </aside>
  )
}
