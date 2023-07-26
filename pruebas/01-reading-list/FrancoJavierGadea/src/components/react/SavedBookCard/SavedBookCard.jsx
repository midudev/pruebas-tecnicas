
import { Button } from "react-bootstrap";
import "./SaveBookCard.css";
import { removeBook } from "../../../data/BooksStore.js";


function SavedBookCard({book}) {

    const remove = () => {

        removeBook(book.ISBN)
        .then((result) => {

            console.log(result);
        })
    }

    return (<div className="saved-book-card">

        <img src={book.cover} alt={`Portada de ${book.title}`} />

        <div className="flex-grow-1 d-flex flex-column">

            <h5 className="title">{book.title}</h5>
            
            {
                book.author &&
                <div className="author mt-auto">
                    <span>Autor: </span>
                    <strong>{book.author}</strong>
                </div>
            }
        </div>

        <div className="ms-auto me-1 d-flex flex-column justify-content-center gap-3">

            <Button className="show-btn border-0 p-0 bg-transparent" variant="outline-secondary"  size="lg"
            
                href={`/Libro/${book.ISBN}/${encodeURI(book.title)}`}

                title="Ver mas"
            >
                <i className="bi bi-arrow-up-right-square-fill" />
            </Button>

            <Button className="del-btn border-0 p-0 bg-transparent" variant="outline-danger" size="lg"
            
                title="Quitar de la lista" onClick={remove}
            >
                <i className="bi bi-trash-fill"/>
            </Button>
        </div>

    </div>);
}

export default SavedBookCard;