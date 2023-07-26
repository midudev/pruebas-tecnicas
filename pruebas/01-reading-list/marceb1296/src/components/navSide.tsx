import { useAppSelector, useAppDispatch } from "../store";
import { removeBookList } from "../reducer/bookListSlice"
import { IBooks } from "../interfaces";
import "../css/navSide.scss";


interface INavSideProps {
    books: IBooks[]
}

export const NavSide = ({books}: INavSideProps) => {
    
    const bookList = useAppSelector(store => store.bookListReducer);
    const dispatch = useAppDispatch()
    
    return(
        <aside style={{
            right: bookList.isOpen ? "20px" : "-100%",
            color: "white"
        }} className="books">
            { books.length > 0
                ? books.map(({ book }) =>
                    <div key={`list-${book.ISBN}`} className="book-container">
                        <img src={book.cover} alt={`cover ${book.title}`} loading="lazy" />
                        <div className="book-info">
                            <label className="with-color full dp-block">
                                {book.title}
                            </label>
                            <button onClick={() => dispatch(removeBookList(book.ISBN))}>
                                Eliminar de lista
                            </button>
                        </div>
                    </div>
                )
                : <h1>Sin libros en lista de lectura</h1>
            }
        </aside>
    )
}