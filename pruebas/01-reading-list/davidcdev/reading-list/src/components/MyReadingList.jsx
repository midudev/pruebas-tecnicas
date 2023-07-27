import { MyListBookCard } from './BookCard'

export function MyReadingList ({ myList, handleRemoveClick, crypto }) {
  return (
    <>
      <h1>My list</h1>
      {myList.length === 0 ? <p>There are no books in your list</p> : myList.length + ' books in your list'}
      {myList.map((el) =>
        <MyListBookCard
          key={crypto.randomUUID()}
          el={el}
          handleRemoveClick={handleRemoveClick}
          crypto={crypto}
        />
      )}
    </>
  )
}
