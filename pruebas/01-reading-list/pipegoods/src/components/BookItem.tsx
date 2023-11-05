import { useBookContext } from '../store/useBookContext';
import { Book } from '../types/types';

export default function BookItem({ book }: { book: Book }) {
    const { addBookToRead } = useBookContext();

    return (
        <article onClick={() => addBookToRead(book)}>
            <img
                className="aspect-[1/1.5] h-full object-cover w-full max-w-full rounded hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                src={book.cover}
                alt={`Portada del libro ${book.title}`}
            />
        </article>
    );
}
