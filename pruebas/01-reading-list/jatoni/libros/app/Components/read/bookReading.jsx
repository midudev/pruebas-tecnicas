import { useOutletContext } from "@remix-run/react";
import { RiCloseCircleFill } from "react-icons/ri";

export default function BookReading({ list, quitCard }) {

    const {
        book: {
            title,
            pages,
            genre,
            cover,
            synopsis,
            year,
            ISBN,
            author: {
                name,
                otherBooks
            }
        }
    } = list;
    return (
        <div className="book-reading">
            <div className="cardReading">
                <button onClick={() => quitCard(ISBN)} className="quitCard">
                    <RiCloseCircleFill />
                </button>
                <div className="cards">
                    <img src={cover} alt={title} />
                </div>
            </div>
        </div>
    );

}