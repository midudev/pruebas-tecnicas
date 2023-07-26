import Book from "./book"

const ListBooks = ({ books, addListReading }) => {
    return (
        <>
            {
                books.map((bookLis, index) => (
                    <Book
                        key={index}
                        bookLis={bookLis}
                        addListReading={addListReading}
                    />
                ))
            }
        </>
    );
}

export default ListBooks