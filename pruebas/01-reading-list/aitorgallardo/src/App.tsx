import { useEffect } from 'react';
import './App.css';
import {type Book as BookType } from './types';
import { getAllBooks } from './store/slices/books/thunks.ts';
import { useAppDispatch, useAppSelector } from './hooks';
import { RootState } from './store/store.ts';
import { Book } from './components/Book.tsx';
import './index.css'



function App(): JSX.Element  {
  const dispatch = useAppDispatch();

  const { bookList,readingList } = useAppSelector(
    (state:RootState) => state.books
  );



  useEffect(() => {
    dispatch(getAllBooks());
  }, []);


  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Lista de Lectura
      </h1>
      <div className='grid grid-cols-5'>
        {bookList.map((book:BookType) => (
          <Book key={book.ISBN} {...book} />
        ))}

      </div>
    </>
  );
}

export default App;
