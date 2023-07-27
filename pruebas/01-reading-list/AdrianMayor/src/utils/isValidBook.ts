import { Book } from "@/models/book.model";

const isValidBook = (book: Book): boolean => {
	return (
		book.title !== undefined &&
		book.pages !== undefined &&
		book.genre !== undefined &&
		book.cover !== undefined &&
		book.synopsis !== undefined &&
		book.year !== undefined &&
		book.ISBN !== undefined &&
		book.author !== undefined &&
		book.availability !== undefined
	);
};

export default isValidBook;
