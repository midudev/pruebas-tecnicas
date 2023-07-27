import { useEffect, useState } from "react";
import { AvailableBooks } from "./components/AvailableBooks/AvailableBooks";
import { ReservedBooks } from "./components/ReservedBooks/ReservedBooks";
import useBooks from "../../store/store";

function BooksPage() {
  const { fetchBooks, books } = useBooks((state) => ({
    fetchBooks: state.fetchBooks,
    books: state.books,
  }));

  const [loading, setLoading] = useState(true);

  const initPage = async () => {
    setLoading(true);
    await fetchBooks();
    setLoading(false);
  };

  useEffect(() => {
    void initPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full flex md:flex-nowrap flex-wrap p-8">
      {loading ? (
        <p>cargando</p>
      ) : (
        <>
          <AvailableBooks></AvailableBooks>

          {books.filter((book) => book.reserved).length > 0 ? (
            <ReservedBooks></ReservedBooks>
          ) : null}
        </>
      )}
    </main>
  );
}

export default BooksPage;
