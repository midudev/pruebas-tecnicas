import { filtersValues } from "@/layouts/FiltersLayout/FiltersLayout";
import { Book } from "@/models/book.model";

const getDataFiltered = async (queryObject: filtersValues) => {
	const { title, author, pages, genre } = queryObject;
	try {
		const response = await fetch(
			`api/bookFiltered?${title !== "" ? `&title=${title}` : ""}${
				author !== "" ? `&author=${author}` : ""
			}&pages=${pages}&genre=${genre}`
		);

		const booksFiltered: Book[] | [] = await response.json();

		return booksFiltered;
	} catch (error) {
		console.error(error);
	}
};

export default getDataFiltered;
