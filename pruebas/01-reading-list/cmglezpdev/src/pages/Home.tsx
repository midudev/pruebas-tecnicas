import { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { BookItem } from '../components';
import { AppLayout } from '../layout';
import '../styles/Home.css';


export const Home = () => {
  const { availableBooks } = useContext(AppContext);

  return (
    <AppLayout>
          <section className='library'>
          {
            availableBooks.map(book => (
              <BookItem key={book.ISBN} book={book} addForReadingButton />
            ))
          }
        </section>
    </AppLayout>
  )
}
