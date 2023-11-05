'use client';
import useBook from '@hooks/useBook';
import { BookCart } from './BookCart';
import { Navbar } from './Navbar';
import { Toast } from './Toast';

export const Header = () => {
  const { cartBooks, loading, message, error, clearMessage } = useBook();
  const alert = error ? 'warning' : 'info';
  return (
    <header className="sticky top-0 z-10">
      <Navbar totalItems={cartBooks.length}>
        <BookCart books={cartBooks} loading={loading} />
      </Navbar>
      {!!message && (
        <Toast onClick={clearMessage} alert={alert}>
          {message}
        </Toast>
      )}
    </header>
  );
};
