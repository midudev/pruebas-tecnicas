import Book from "./book"

const ListBooks = ({ books }) => {
    return (
        <>
            {
                books.map((bookLis, index) => (
                    <Book
                        key={index}
                        bookLis={bookLis}
                    />
                ))
            }
        </>
    );
}

export default ListBooks