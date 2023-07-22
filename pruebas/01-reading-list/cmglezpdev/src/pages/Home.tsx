import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { BookItem, BreadCrumbs, FilterGenresMenu } from '../components';
import { AppLayout } from '../layout';
import { useFilterBooks } from '../hook';

import '../styles/Home.css';


export const Home = () => {
  const { availableBooks: books } = useContext(AppContext);
  const { filterOptions, toggleSelectOption, setOptions, filterBooks } = useFilterBooks([]);

  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
      const genres: string[] = 
          [...new Set(books.map(book => book.genre))]
          .sort((a, b) => a.localeCompare(b));
        setOptions(genres);
  }, [books]);

  return (
    <AppLayout>
    <BreadCrumbs setOpenFilter={() => setOpenFilter(c => !c)} />

      <div className='app-general-content'>
          <FilterGenresMenu open={openFilter} books={books} filters={filterOptions} toggleSelect={toggleSelectOption} />
          <section className='library'>
            {
              filterBooks(books).map(book => (
                <BookItem key={book.ISBN} book={book} addBook />
              ))
            }
          </section>
      </div>
    </AppLayout>
  )
}
