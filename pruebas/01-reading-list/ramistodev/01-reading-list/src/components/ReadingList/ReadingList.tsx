import { BookOpt } from "./BookOpt/BookOpt";
import { BookStatus } from "./BookStatus/BookStatus";
import { BookCard } from "./BookCard/BookCard";

export function ReadingList() {
  return (
    <section className="min-h-screen w-full flex flex-col gap-3 items-center justify-start py-12">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        My Reading List
      </h2>
      <BookOpt />
      <BookStatus />
      <BookCard />
    </section>
  );
}
