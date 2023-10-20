import { IBooks } from '../../interfaces/interfaces';
import { useBooksStore } from '../../store/store';
import { Card } from '../Card/Card';
import { FC } from 'react';
import { Filter } from '../Filter/Filter';
import { Sort } from '../Filter/Sort/Sort';
import { ShowFilter } from '../Filter/ShowFilter/ShowFilter';
import { useFilters } from '../../hooks/useFilters';

export const Books: FC = () => {
  const booksStore = useBooksStore();
  const { books, handleShowFilter, showFilter } = booksStore;
  const { filterBooks, searchBooks, sortBooks } = useFilters();

  return (
    <section className='flex pt-8 px-6 gap-x-5'>
      {showFilter && <Filter />}
      <div
        className={
          showFilter
            ? 'flex flex-wrap gap-7 basis-full'
            : 'flex flex-wrap gap-y-7 gap-x-5 basis-full'
        }
      >
        <article className='w-full flex pt-4 justify-between'>
          <ShowFilter active={showFilter} toggleActive={handleShowFilter} />
          <Sort />
        </article>
        {books &&
          books.length > 0 &&
          books
            .filter(filterBooks)
            .filter(searchBooks)
            .sort(sortBooks)
            .map((book: IBooks, index: number) => {
              return (
                <div key={book.book.title + index}>
                  <Card book={book.book} />
                </div>
              );
            })}
      </div>
    </section>
  );
};
