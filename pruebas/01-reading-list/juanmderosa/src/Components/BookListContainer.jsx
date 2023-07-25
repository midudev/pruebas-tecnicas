import { BookList } from "./BookList"

export const BookListContainer = ({filterType, books, filteredByGenre, filteredByPages, handleReadingList}) => {
  return (
    <section className="books-list-container">
    {!filterType || filterType ===  "nofilter" ? books && books.map((book)=>
    <BookList book={book} key={book.book.ISBN}  handleReadingList={handleReadingList}/>
    ):
    filteredByGenre && filterType === "filterbygenre" ? 
    filteredByGenre.map((book)=>
    <BookList book={book} key={book.book.ISBN} handleReadingList={handleReadingList}/>)
    :
    filteredByPages && filteredByPages.map((book)=>
    <BookList book={book} key={book.book.ISBN} handleReadingList={handleReadingList}/>)
    }
    </section>
  )
}
