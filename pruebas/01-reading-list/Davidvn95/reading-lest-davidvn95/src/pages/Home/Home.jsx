import "./Home.css";
import { useSelector } from "react-redux";
import Lateral from "../../components/LateralBar/LateralBar";
import Card from "../../components/Card/Card";
import { useLayoutEffect, useState } from "react";

export default function Home() {
    const books = useSelector((state) => state.books?.show);
    const [size, setSize] = useState(0)

    useLayoutEffect(() => { 
        function updateSize() { 
            setSize(window.innerWidth)
        }

        window.addEventListener('resize', updateSize)
        updateSize()

        return () => window.removeEventListener('resize', updateSize)
    },[])

    return (
        <section className="home">
            {size > 768 && <Lateral />}
            <div className="content">
                {books.map((book, index) => {
                    return (
                        <Card
                            cover={book.book.cover}
                            title={book.book.title}
                            isbn={book.book.ISBN}
                            synopsis={book.book.synopsis}
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
