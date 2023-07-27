import getData from "@/api/getData";
import DefaultHeaderLayout from "@/layouts/DefaultHeaderLayout/DefaultLayout";
import BooksInitializer from "./BookPage";

const booksPage = async () => {
	const books = await getData();

	return (
		<DefaultHeaderLayout>
			<BooksInitializer initialBooks={books} />
		</DefaultHeaderLayout>
	);
};

export default booksPage;
