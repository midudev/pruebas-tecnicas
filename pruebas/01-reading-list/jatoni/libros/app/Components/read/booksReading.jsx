import { ListBooksReading } from "./listBooksReading";

export function BooksReading({ listReading, quitCard }) {
    return (
        <div className="books-reading">
            <div className="title">
                <h1>List Reading</h1>
            </div>
            <div className="list-reading">
                <ListBooksReading
                    listReading={listReading}
                    quitCard={quitCard}
                />
            </div>
        </div>
    );
}