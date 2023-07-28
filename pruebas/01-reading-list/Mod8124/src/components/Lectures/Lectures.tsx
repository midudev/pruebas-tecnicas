import { FC } from 'react';
import { useBooksStore } from '../../store/store';
import { IBooks } from '../../interfaces/interfaces';
import { Card } from '../Card/Card';
import { Filter } from '../Filter/Filter';
import { ShowFilter } from '../Filter/ShowFilter/ShowFilter';
import { Sort } from '../Filter/Sort/Sort';
import { useFilters } from '../../hooks/useFilters';

export const Lectures: FC = () => {
  const booksStore = useBooksStore();
  const { lectures, showFilter, handleShowFilter } = booksStore;
  const { filterBooks, searchBooks, sortBooks } = useFilters();

  return (
    <section className='flex pt-8 px-6 gap-x-5'>
      {showFilter && <Filter />}
      <div
        className={
          lectures.length > 0 ? 'flex flex-wrap justify-start gap-7 basis-full' : 'basis-full'
        }
      >
        <article className='w-full flex pt-4 justify-between'>
          <ShowFilter active={showFilter} toggleActive={handleShowFilter} />
          <Sort />
        </article>
        {lectures &&
          lectures.length > 0 &&
          lectures
            .filter(filterBooks)
            .filter(searchBooks)
            .sort(sortBooks)
            .map((book: IBooks, index: number) => {
              return (
                <div key={'Card Lecture' + index}>
                  <Card book={book.book} lecture />
                </div>
              );
            })}
        {lectures.length === 0 && (
          <h2 className='text-gray-600 text-xl w-full pt-2'>No hay lecturas</h2>
        )}
      </div>
    </section>
  );
};
