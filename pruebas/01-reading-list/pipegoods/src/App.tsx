import BookItem from './components/BookItem';
import ModalBooksToRead from './components/ModalBooksToRead';
import Select from './components/Select';
import Title from './components/Title';
import { useBookContext } from './store/useBookContext';

function App() {
    const { books, loading, booksToRead } = useBookContext();

    return (
        <>
            <header>
                <Title />

                <Select />
            </header>
            <main>
                {loading && <h2>Loading...</h2>}

                <p className="font-light text-sm mt-10">Dale click al libro para agregarlo a la lista de lectura.</p>

                <ul className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center">
                    {books.map(({ book }) => (
                        <li key={book.ISBN}>
                            <BookItem book={book} />
                        </li>
                    ))}
                </ul>

                {booksToRead.length > 0 && (
                    <div className="fixed bottom-0 right-0 p-5 bg-blue-500 text-white rounded-tl-lg shadow-lg">
                        <p className="text-xl font-bold">Lista de lectura</p>
                        <p className="text-sm">{booksToRead.length} libros</p>
                        <ModalBooksToRead />
                    </div>
                )}
            </main>
            <footer className="text-center text-sm mb-32 md:mb-0">
                Hecho moviendo las manitas por{' '}
                <a className="text-amber-600 font-bold" target="_blank" href="https://andresvizcaino.me">
                    Andrés Vizcaíno
                </a>
            </footer>
        </>
    );
}

export default App;
