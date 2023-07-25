import { useAppDispatch, useAppSelector } from "../store";
import { addBookList } from "../reducer/bookListSlice";
import { IBooks } from "../interfaces";
import "../css/books.scss"


interface Books {
    books: IBooks[]
}

export const Books = ({ books }: Books) => {
    
    const dispatch = useAppDispatch();
    const {list: bookList} = useAppSelector(state => state.bookListReducer)

    return (
        <section className="books">
            { books.length > 0
                ? books.map(({ book }) =>
                    <div key={book.ISBN} className={bookList.includes(book.ISBN) ? "book-container added" : "book-container"}>
                        <img src="/33.jpg" alt={`cover ${book.title}`} />
                        <div className="book-info">
                            <label className="with-color full">
                                {book.title}
                            </label>
                            <label>
                                {book.synopsis}
                            </label>
                            <button onClick={() => dispatch(addBookList(book.ISBN))}>
                                Leer mas tarde
                            </button>
                        </div>
                        
                    </div>
                )
                : <h1 style={{
                    color: "orange"
                }}>
                    Sin resultados.
                </h1>
            }
        </section>
    )
}