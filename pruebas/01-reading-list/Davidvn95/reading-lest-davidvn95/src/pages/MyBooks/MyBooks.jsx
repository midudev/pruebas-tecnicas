import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import "./MyBooks.css";

const MyBooks = () => {
    const reading = useSelector((state) => state.books.reading);
    return (
        <section className="my-books">
            <h2>My Books</h2>
            <div className="my-books-container">
                {reading.map((book, index) => {
                    return (
                        <Card
                            cover={book.book.cover}
                            title={book.book.title}
                            isbn={book.book.ISBN}
                            key={index}
                            isReading={book?.readings}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default MyBooks;
