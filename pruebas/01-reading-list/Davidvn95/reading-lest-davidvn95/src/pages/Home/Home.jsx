import "./Home.css";
import { useSelector } from "react-redux";
import Lateral from "../../components/LateralBar/LateralBar";
import Card from "../../components/Card/Card";

export default function Home() {
    const books = useSelector((state) => state.books?.show);

    return (
        <section className="home">
            <Lateral />
            <div className="content">
                {books.map((book, index) => {
                    return (
                        <Card
                            cover={book.book.cover}
                            title={book.book.title}
                            isbn={book.book.ISBN}
                            readings={book?.readings}
                            key={index}
                        />
                    );
                })}
                {!books.length && <span>No se encontraron libros</span>}
            </div>
        </section>
    );
}
