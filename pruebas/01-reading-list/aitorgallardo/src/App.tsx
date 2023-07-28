import { ChangeEvent, useEffect } from 'react';
import './App.css';
import { BookISBNType, type Book as BookType } from './types';
import { initBooks } from './store/slices/books/thunks.ts';
import { useAppDispatch, useAppSelector } from './hooks';
import { RootState } from './store/store.ts';
import { Book } from './components/Book.tsx';
import './index.css'
import { addSelectedBooks, filterBooks, removeSelectedBooks } from './store/slices/books/booksSlice.ts';



function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const { availableList, readingList } = useAppSelector(
    (state: RootState) => state.books
  );



  const handleAddBooksToReadingList = (id: BookISBNType) => {
    dispatch(addSelectedBooks(id));
  }
  const handleRemoveBooksFromReadingList = (id: BookISBNType) => {
    dispatch(removeSelectedBooks(id));
  }
  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value;
    dispatch(filterBooks(genre));

  }


  useEffect(() => {
    dispatch(initBooks());

    // This is a listener for the local storage event in order to update the state 
    // for shared tabs
    window.addEventListener('storage', () => {
      dispatch(initBooks());
    });

    return () => {
      window.removeEventListener('storage', () => { });
    }
  }, []);


  return (
    <>


      <div className='flex gap-5 min-h-screen '>

        <div className='flex flex-1 flex-col bg-slate-600 p-8'>
          <div className='flex gap-4 mb-4 items-center'><mark className='font-bold text-center max-w-[80px] min-w-[80px] text-4xl py-2 px-4'>{availableList.length}</mark><h3 className='text-3xl font-bold  text-white'> Available Books</h3></div>
          <div className='flex gap-4 mb-4 items-center'><mark className='font-bold text-4xl text-center max-w-[80px] min-w-[80px] py-2 px-4'>{readingList.length}</mark><h4 className='text-xl font-bold text-white'> in Reading List</h4></div>
          <label htmlFor="genreSelect">Select a genre:</label>
          <select className='w-44 mb-4' id="genreSelect" onChange={handleFilter}>
            <option value="">All Genres</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Zombies">Zombies</option>
            <option value="Terror">Terror</option>
          </select>



          <div className='grid grid-cols-5 '>
            {availableList.map((book: BookType) => (
              <Book key={book.ISBN} {...book} handleOnClick={handleAddBooksToReadingList} isAvailable />
            ))}
          </div>
        </div>
        <div className='flex flex-1 flex-col bg-slate-600 p-8'>
          <h3 className='text-4xl font-bold text-white mb-8'> Reading List</h3>
          <div className='grid grid-cols-5'>
            {readingList.map((book: BookType) => (
              <Book key={book.ISBN} {...book} handleOnClick={handleRemoveBooksFromReadingList} isReading />
            ))}

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
