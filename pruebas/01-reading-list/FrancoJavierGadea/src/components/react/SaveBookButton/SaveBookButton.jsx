import {saveBook} from "../../../data/Store.js";
import "./SaveBookButton.css";


function SaveBook({book}) {


    const handleClick = () => {

        const {ISBN, title, cover}  = book;

        saveBook(ISBN, {ISBN, title, cover})
        .then((result) => {

            console.log(result);
        })
    }

    return (<>
    
        <button className="save-button" onClick={handleClick} title="Guardar"
        >
            <i className="bi bi-bookmark-plus-fill" />
        </button>
    </>);
}

export default SaveBook;