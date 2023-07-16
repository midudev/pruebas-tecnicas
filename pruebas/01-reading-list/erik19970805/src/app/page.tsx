'use client';
import { BookCard } from '@components/BookCard';
import { Header } from '@components/Header';
import { libraryData } from '@data/library';

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-8">
        {libraryData.map(({ book }) => (
          <BookCard key={book.ISBN} book={book} />
        ))}
      </main>
    </>
  );
}
