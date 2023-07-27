import { AvailableBookCard } from './BookCard'

export function AvailableBooks ({ available, filter, handleAddClick, crypto }) {
  return (
    <>
      <h1>Available books</h1>
      {available.filter((el) => el.book.genre === filter || filter === '').map((el) =>
        <AvailableBookCard
          key={crypto.randomUUID()}
          el={el}
          handleAddClick={handleAddClick}
          crypto={crypto}
        />
      )}
    </>
  )
}
