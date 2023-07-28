import { useBooksStore } from '../store/BooksStore'
import BookCard from './BookCard'
import Buttons from './Buttons'
import Filters from './Filters'
import ListOfReadBooks from './ListOfReadBooks'
import SubTitle from './SubTitle'
import Title from './Title'

export default function ListOfBooks (): JSX.Element {
  const { books, updateReadList } = useBooksStore()

  return (<>
      <Title title="LIBROS" />
      <Filters />
      <SubTitle />
      <div className="top" />
      <div className="mid">
        <div className="mid-table" />
        <div className="mid-table-shadow" />
        <section className="content-section">
          <div className="cards-container">
            {books.length !== 0 && <Buttons direction="left" />}
            <div className="carousel-container">
              <div className="carousel">
                {books?.map((book) => (
                  <BookCard
                    key={book.ISBN}
                    book={book}
                    action={updateReadList}
                  />
                ))}
              </div>
            </div>
            {books.length !== 0 && <Buttons direction="right" />}
          </div>
        </section>
      </div>
      <div className="bottom">
        <ListOfReadBooks />
      </div>
  </>)
}
