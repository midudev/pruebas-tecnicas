import { Link, useOutletContext } from "@remix-run/react";

const Book = ({ bookLis, addListReading }) => {

    const {
        book: {
            title,
            cover,
            author: {
                name,
            }
        }
    } = bookLis;

    const handleListReading = () => {
        addListReading(bookLis);
    }

    return (
        <div onClick={handleListReading} className="book">
            <img src={cover} alt={`${title}`} />
            <h2>{title}</h2>
            <p>{name}</p>
            <a href={`/book/${title}`}>See more</a>
        </div>
    )
}

export default Book