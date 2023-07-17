import Image from "next/image"

function BooksList({ books, handleWatchList }) {

    return (


        <ul className="grid grid-cols-4 gap-4 p-3   ">
            {
                books ?
                    books.map(book => {

                        const imageStyle = book.onWatchlist ? "brightness-50" : "brightness-100";

                        return (
                            <li key={book.book.ISBN}>
                                <div
                                    className={`cursor-pointer  `}
                                    onClick={() => handleWatchList(book)}
                                >
                                    <Image
                                        src={book.book.cover}
                                        width={200}
                                        height={100}
                                        className={`w-full h-full object-cover ${imageStyle}`}
                                        alt={`${book.book.title}-img`} />

                                </div>
                            </li>

                        )
                    })
                    :
                    <p>No hay libros</p>
            }
        </ul>

    )
}

export default BooksList