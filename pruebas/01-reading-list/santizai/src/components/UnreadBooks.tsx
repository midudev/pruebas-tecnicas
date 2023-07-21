import type { Library } from "../types/interfaces";

interface Props {
    unread: Library[];
}

const UnreadBooks = (props: Props) => {
    return (
        <div className="w-full">
            <div>Filtros</div>
            <div className="w-full">
                {props.unread.map((book: Library) => {
                    return (
                        <div
                            key={book.book.ISBN}
                            className="w-3/4"
                        >
                            <img
                                src={book.book.cover}
                                className="w-2/3"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UnreadBooks;
