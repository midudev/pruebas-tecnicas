import Card from '../Card/Card'

export default function BooksContainer ({ filteredBooks, addBookToReadingList }) {
  return (
    <ul>
      {filteredBooks?.map((book) => {
        return <Card key={book.book.ISBN} book={book} addBookToReadingList={addBookToReadingList} />
      })}
    </ul>
  )
}
