import { Book } from "@/models/book.model";
import { Dispatch, SetStateAction } from "react";
import DisplaySectionLayout from "../DisplaySectionLayout/DisplaySectionLayout";
import FiltersLayout from "../FiltersLayout/FiltersLayout";
import styles from "./BooksPageLayout.module.scss";
import ReadingListLayout from "../ReadingListLayout/ReadingListLayout";
import { genresAvailable } from "@/models/genresAvailable";
import Modal, { ModalWrapperCases } from "@/components/ModalWrapper/ModalWrapper";
import ModalWrapper from "@/components/ModalWrapper/ModalWrapper";

interface BookPageLayoutProps {
	booksToDisplay: Book[];
	genres: genresAvailable[];
	reduxListState: Book[];
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setFilteredBooks: Dispatch<SetStateAction<Book[]>>;
}

const BookPageLayout = ({
	booksToDisplay,
	setFilteredBooks,
	genres,
	reduxListState,
	isLoading,
	setIsLoading,
}: BookPageLayoutProps) => {
	return (
		<main className={styles.main_bookPage_container}>
			<form className={styles.formLayout_container}>
				<ModalWrapper caseOfUse={ModalWrapperCases.FILTERS}>
					<FiltersLayout setFilteredBooks={setFilteredBooks} genres={genres} setIsLoading={setIsLoading} />
				</ModalWrapper>
			</form>
			<section className={styles.sectionLayout_container}>
				<DisplaySectionLayout books={booksToDisplay} isLoading={isLoading} />
			</section>
			<aside className={`${styles.asideLayout_container} ${styles.asideLayout_container_aside}`}>
				<ModalWrapper caseOfUse={ModalWrapperCases.LIST}>
					<ReadingListLayout reduxListState={reduxListState} />
				</ModalWrapper>
			</aside>
		</main>
	);
};

export default BookPageLayout;
