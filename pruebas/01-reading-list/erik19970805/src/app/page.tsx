'use client';
import { BookCard } from '@components/BookCard';
import { FilterByGenre } from '@components/FilterByGenre';
import { FilterByPages } from '@components/FilterByPages';
import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import useBook from '@hooks/useBook';

export default function Home() {
  const { books, loading, maxPages, genres , pages, genre} = useBook();
  return (
    <>
      <Header />
      <main>
        <div className="flex w-full flex-wrap justify-around gap-8 px-8">
          <FilterByPages maxPages={maxPages} pages={pages}/>
          <FilterByGenre genres={genres} genre={genre}/>
        </div>
        <div className="grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-8">
          {!loading && books.map((book) => <BookCard key={book.ISBN} book={book} />)}
          {loading && <Loading />}
        </div>
      </main>
    </>
  );
}
