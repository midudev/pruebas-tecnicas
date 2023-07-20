import { BookCard as BookCardHOC } from "./BookCard";
import { BookCardHOCProps } from "../interfaces/interfaces";

import { BookImage } from "./BookImage";
import { BookTitle } from "./BookTitle";
import { BookButtons } from "./BookButtons";

export { BookImage } from "./BookImage";
export { BookTitle } from "./BookTitle";
export { BookButtons } from "./BookButtons";

export const BookCard: BookCardHOCProps = Object.assign(BookCardHOC, {  
    Image: BookImage,
    Title: BookTitle, 
    Buttons: BookButtons,
});

export default BookCard;