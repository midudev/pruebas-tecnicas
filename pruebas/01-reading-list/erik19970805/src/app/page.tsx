'use client';
import { BookCard } from '@components/BookCard';
import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import useBook from '@hooks/useBook';

export default function Home() {
  const { books, loading } = useBook();
  return (
    <>
      <Header />
      <main className="grid justify-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-8">
        {!loading && books.map((book) => <BookCard key={book.ISBN} book={book} />)}
        {loading && <Loading />}
      </main>
    </>
  );
}
