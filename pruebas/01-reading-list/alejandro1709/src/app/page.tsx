import Books from '@/components/Books';
import { type Book } from '@/types/book';
import { getBooks } from '@/utils/books';

export default async function Home() {
  const books: Book[] = await getBooks(2000);

  return (
    <section className='grid grid-cols-3 md:grid-cols-4 md:gap-4 lg:gap-5 xl:gap-6 lg:grid-cols-5 xl:grid-cols-7 gap-3'>
      <Books books={books} />
    </section>
  );
}
