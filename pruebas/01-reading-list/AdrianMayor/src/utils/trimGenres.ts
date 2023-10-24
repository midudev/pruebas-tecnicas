import { Book } from "@/models/book.model";
import { genresAvailable } from "@/models/genresAvailable";

interface trimGenresProps {
	updatedBooks: Book[];
}

const trimGenres = ({ updatedBooks }: trimGenresProps) => {
	// Check genres availability
	const uniqueGenres = Array.from(new Set(updatedBooks.map((book) => book.genre)));

	// Per each unique genre we calc how many of them are
	let totalCount: number = 0;
	const availableGenres: genresAvailable[] = uniqueGenres.map((genre) => {
		const total = updatedBooks.reduce((acc, book) => {
			if (genre === book.genre && book.availability) {
				totalCount++;
				return acc + 1;
			} else {
				return acc;
			}
		}, 0);

		return { genre: genre, available: total };
	});

	// Adding All genre with all available sum
	availableGenres.unshift({
		genre: "All",
		available: totalCount,
	});

	return availableGenres;
};

export default trimGenres;
