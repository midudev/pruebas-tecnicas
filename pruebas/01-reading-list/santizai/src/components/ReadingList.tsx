import { useEffect, useState } from "react";
import "./../readingList.css";
import type { Library } from "../types/interfaces";

interface Props {
    visible: boolean;
    handle: (visible: boolean) => void;
    books: Library[];
}

const ReadingList = (props: Props) => {
    const [isVisible, setIsVisible] = useState<boolean>(props.visible);

    useEffect(() => {
        setIsVisible(props.visible);
    }, [props.visible]);

    return (
        <div className={`list ${isVisible ? "vis" : "hid"}`}>
            <div>
                <button
                    onClick={() => {
                        setIsVisible(!isVisible);
                        props.handle(!isVisible);
                    }}
                >
                    x
                </button>
            </div>
            <h2>Reading List</h2>
            <div>
                {
                    props.books.map((book: Library) => {
                        return (
                            <div key={book.book.ISBN}>
                                <h2>{book.book.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ReadingList;
