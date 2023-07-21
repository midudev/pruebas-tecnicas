
import { Button } from "react-bootstrap";
import "./SaveBookCard.css";


function SavedBookCard({book}) {

    return (<div className="saved-book-card">

        <img src={book.cover} alt={`Portada de ${book.title}`} />

        <div className="d-flex flex-column">

            <h5>{book.title}</h5>

            <a className="mt-auto" href={`/Libro/${book.ISBN}/${encodeURI(book.title)}`}>Ver mas</a>
        </div>

        <Button className="ms-auto"  variant="danger">
            <i className="bi bi-trash"/>
        </Button>

    </div>);
}

export default SavedBookCard;