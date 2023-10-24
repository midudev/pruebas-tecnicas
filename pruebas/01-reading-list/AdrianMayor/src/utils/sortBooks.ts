import { Book } from "@/models/book.model";

interface sortBooksProps {
	updatedBooks: Book[];
}

const sortBooks = ({ updatedBooks }: sortBooksProps) => {
	return updatedBooks.sort((a, b) => {
		if (a.availability === b.availability) {
			return 0;
		} else if (a.availability && !b.availability) {
			return -1;
		} else {
			return 1;
		}
	});
};

export default sortBooks;
