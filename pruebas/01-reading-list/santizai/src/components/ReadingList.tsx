import { useEffect, useState } from "react";
import "./../readingList.css";
import type { Library } from "../types/interfaces";

interface Props {
    visible: boolean;
    handleVisible: (visible: boolean) => void;
    books: Library[];
    handleReadingBook: (id: string) => void;
}

const ReadingList = (props: Props) => {
    const [isVisible, setIsVisible] = useState<boolean>(props.visible);

    useEffect(() => {
        setIsVisible(props.visible);
    }, [props.visible]);

    return (
        <div className={`list ${isVisible ? "vis" : "hid"} px-2`}>
            <div>
                <button
                    onClick={() => {
                        setIsVisible(!isVisible);
                        props.handleVisible(!isVisible);
                    }}
                >
                    x
                </button>
            </div>
            <h2>Reading List</h2>
            <div className="flex flex-wrap justify-center gap-3 p-2">
                {
                    props.books.map((book: Library) => {
                        return (
                            <div key={book.book.ISBN} className="w-36" onClick={() => props.handleReadingBook(book.book.ISBN)}>
                                <img src={book.book.cover} className="w-full h-full" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ReadingList;
