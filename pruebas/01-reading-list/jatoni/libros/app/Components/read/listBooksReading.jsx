import BookReading from "./bookReading";

export function ListBooksReading({ listReading, quitCard }) {
    return (
        <div>
            {
                listReading.map((list, index) => (
                    <BookReading
                        key={index}
                        list={list}
                        quitCard={quitCard}
                    />
                ))
            }
        </div>
    )
}