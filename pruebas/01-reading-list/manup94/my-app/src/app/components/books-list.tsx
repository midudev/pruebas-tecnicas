import Image from "next/image"

function BooksList({ books, handleWatchList }) {

    return (

        <ul className="grid grid-cols-4 gap-4 p-3   ">
            {
                books ?
                    books.map(book => {

                        return (
                            <li key={book.book.ISBN}>
                                <div
                                    className="cursor-pointer"
                                    onClick={() => handleWatchList(book)}
                                >
                                    <Image
                                        src={book.book.cover}
                                        width={200}
                                        height={100}
                                        className="w-full h-full object-cover"
                                        alt={`${book.book.title}-img`} />

                                </div>
                            </li>

                        )
                    })
                    :
                    <p>no hay libros</p>
            }
        </ul>

    )
}

export default BooksList