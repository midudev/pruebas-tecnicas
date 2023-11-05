import { useBookContext } from '../store/useBookContext';

export default function Title() {
    const { booksToRead, totalBooks, books, selectedGenre, loading } = useBookContext();

    return (
        <>
            <h1 className="font-bold text-3xl">Librería MiduNacional</h1>
            {!loading && (
                <>
                    <h3 className="font-light text-xl mb-5">
                        {totalBooks - booksToRead.length} libros disponibles en la librería sin leer
                    </h3>
                    {selectedGenre && (
                        <h3>
                            {books.length} libro{books.length > 1 ? 's' : ''} {selectedGenre && `de ${selectedGenre}`}
                        </h3>
                    )}
                </>
            )}
        </>
    );
}
