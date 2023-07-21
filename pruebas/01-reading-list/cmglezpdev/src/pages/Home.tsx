import { useContext, useEffect } from 'react';

import { AppContext } from '../context/AppContext';
import { BookItem, FilterGenresMenu } from '../components';
import { AppLayout } from '../layout';
import '../styles/Home.css';
import { useFilterBooks } from '../hook';


export const Home = () => {
  const { availableBooks: books } = useContext(AppContext);
  const { filterOptions, toggleSelectOption, setOptions, filterBooks } = useFilterBooks([]);

  useEffect(() => {
      const genres: string[] = 
          [...new Set(books.map(book => book.genre))]
          .sort((a, b) => a.localeCompare(b));
        setOptions(genres);
  }, [books]);

  return (
    <AppLayout>
      <FilterGenresMenu books={books} filters={filterOptions} toggleSelect={toggleSelectOption}  />
        <section className='library'>
          {
             filterBooks(books).map(book => (
              <BookItem key={book.ISBN} book={book} addForReadingButton />
            ))
          }
        </section>
    </AppLayout>
  )
}
