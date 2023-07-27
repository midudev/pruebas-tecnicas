import { usePagination } from 'react-use-pagination';
import { BooksGrid } from './BooksGrid';
import { useGlobalContext } from '@/hooks/useGlobalContext';
import { PageSelector } from './PageSelector';
import { PageNumberSelector } from './PageNumberSelector';
import { AvaibleBookCard } from './AvaibleBookCard';

export const BooksSection = () => {
    const books = useGlobalContext(store => store.avaibleBooks);
    const searchParams = useGlobalContext(store => store.searchParams);
    const filteredBooks = useGlobalContext(store => store.bookService.filterBooks(books, searchParams));
    const { currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled, startIndex, endIndex } = usePagination({
        totalItems: filteredBooks.length,
        initialPageSize: 6
    });

    return (
        <section className='w-full flex flex-col items-center px-14 py-16 min-h-screen'>
            <div className='flex flex-col gap-8 w-full max-w-screen-xl'>
                <div className='flex flex-col w-full justify-between items-center gap-8 lg:flex-row lg:gap-0'>
                    <h2 className='text-4xl font-bold'>
                        Libros:<span className='ml-4 font-normal'>{filteredBooks.length}</span>
                    </h2>
                    <div className='flex flex-col items-center gap-8 md:gap-4 md:flex-row'>
                        <PageNumberSelector maxInitialValue={1200} />
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
                <BooksGrid books={filteredBooks.slice(startIndex, endIndex + 1)} Card={AvaibleBookCard} />
            </div>
        </section>
    );
};
