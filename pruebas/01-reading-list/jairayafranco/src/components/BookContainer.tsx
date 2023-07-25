import { useBookStore } from '../store/useBookStore';
import BookContainerCard from './BookContainerCard';

export default function BooksContainer() {
    const { books } = useBookStore();

    if (!books.library.length) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 h-[40vh]">
                <h1 className="text-2xl font-bold">No se encontraron resultados</h1>
                <p className="text-sm">Intenta con otros filtros</p>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-4 mt-3 justify-center sm:justify-start">
            {
                books.library.map(({ book }) => {
                    return (
                        <BookContainerCard key={book.id} book={book} />
                    )
                })
            }
        </div >
    );
}
