import { useState } from 'react';
import { TBook } from './store/books/types';
import Book from './components/Book/Book';
import BookGrid from './components/BookGrid/BookGrid';
import GenreSelector from './components/GenreSelector/GenreSelector';
import useBooks from './store/books/useBooks';
import './App.css';

function App() {
  const { state, filterBooksByGenre, addBookToLectureList, addBookToAvailableBooks } = useBooks();

  return (
    <div className='App'>
      <GenreSelector onChange={(e)=> filterBooksByGenre(e.target.value)} />
      <h2>Genre {state.genre || "Todas"}</h2>
      <h2>Disponibles: {state.filteredBooks?.length}</h2>
      <BookGrid loading={state.loading}>
        {state.filteredBooks?.map((book: TBook) => {
          return <Book book={book} key={book.book.ISBN} handleClick={addBookToLectureList} />;
        })}
      </BookGrid>
      <h2>Lecture List</h2>
        <h2>Disponibles: {state.lectureList?.length}</h2>
      <BookGrid loading={state.loading}>
        {state.lectureList?.map((book: TBook) => {
          return <Book book={book} key={book.book.title} handleClick={addBookToAvailableBooks} />;
        })}
      </BookGrid>
    </div>
  );
}

export default App;
