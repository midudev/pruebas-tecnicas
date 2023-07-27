import { Book } from '@/domain/models/Book';
import { AvaibleBookCard } from '@/components/AvaibleBookCard';
import { ToReadBookCard } from '@/components/ToReadBookCard';

interface Props {
    books: Book[];
    Card: typeof AvaibleBookCard | typeof ToReadBookCard;
}
export const BooksGrid = ({ books, Card }: Props) => {
    return books.length === 0 ? (
        <div className='flex justify-center items-center text-3xl w-full h-96'>No se encontraron resultados</div>
    ) : (
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-16 place-items-center'>
            {books.map(book => (
                <Card key={book.ISBN} book={book} />
            ))}
        </div>
    );
};
