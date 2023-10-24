import { useGlobalContext } from '@/hooks/useGlobalContext';
import { usePagination } from 'react-use-pagination';
import { BooksGrid } from './BooksGrid';
import { ToReadBookCard } from './ToReadBookCard';
import { PageSelector } from './PageSelector';

export const BooksToReadSection = () => {
    const booksToRead = useGlobalContext(store => store.booksToRead);
    const { currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex } = usePagination({
        totalItems: booksToRead.length,
        initialPageSize: 6
    });

    return (
        <section className='w-full flex flex-col items-center px-14 py-16 min-h-screen'>
            <div className='flex flex-col gap-8 w-full max-w-screen-xl'>
                <div className='flex flex-col gap-8 w-full max-w-screen-xl'>
                    <div className='flex flex-col w-full justify-between items-center gap-8 lg:flex-row lg:gap-0'>
                        <h2 className='text-4xl font-bold'>
                            Libros:<span className='ml-4 font-normal'>{booksToRead.length}</span>
                        </h2>
                        <PageSelector
                            previousEnabled={previousEnabled}
                            setPreviousPage={setPreviousPage}
                            setNextPage={setNextPage}
                            nextEnabled={nextEnabled}
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                    </div>
                </div>
                <BooksGrid books={booksToRead.slice(startIndex, endIndex + 1)} Card={ToReadBookCard} />
            </div>
        </section>
    );
};
