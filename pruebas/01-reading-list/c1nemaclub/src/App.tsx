import {FaBook} from 'react-icons/fa'
import { TBook } from './store/books/types';
import Book from './components/Book/Book';
import BookGrid from './components/BookGrid/BookGrid';
import GenreSelector from './components/GenreSelector/GenreSelector';
import useBooks from './store/books/useBooks';
import BookCount from './components/BookCount/BookCount';
import style from './App.module.css'
import LectureDeck from './components/LectureDeck/LectureDeck';

function App() {
  const { state, filterBooksByGenre, addBookToLectureList, addBookToAvailableBooks } = useBooks();

  return (
    <div className={style.App}>
      <header>
        <FaBook size={30} color="#fff" />
        <h1>Book Club</h1>
      </header>
      <main>
        <BookCount count={state.filteredBooks?.length} />
        <div className={style['genre-container']}>
          <GenreSelector onChange={(e)=> filterBooksByGenre(e.target.value)} />
          <span className={style.genre}>Genero:  {state.genre || "Todas"}</span>
        </div>
        <div className={style.content}>
          <BookGrid loading={state.loading} bookCount={state.filteredBooks?.length}>
            {state.filteredBooks?.map((book: TBook) => {
              return <Book book={book} key={book.book.ISBN} handleClick={addBookToLectureList} />;
            })}
          </BookGrid>
          <LectureDeck loading={state.loading} bookCount={state.lectureList?.length}>
            {state.lectureList?.map((book: TBook) => {
              return <Book book={book} key={book.book.title} handleClick={addBookToAvailableBooks} />;
            })}
          </LectureDeck>
            </div>
      </main>
    </div>
  );
}

export default App;
