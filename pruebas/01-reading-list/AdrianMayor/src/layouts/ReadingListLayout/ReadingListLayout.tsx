import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { Book } from "@/models/book.model";
import BookGridLayout from "../BookGrid/BookGridLayout";
import styles from "./ReadingListLayout.module.scss";

interface ReadingListLayoutProps {
	reduxListState: Book[];
}

const ReadingListLayout = ({ reduxListState }: ReadingListLayoutProps) => {
	return (
		<>
			<SectionHeader state={reduxListState.length} text={"My List"} />
			{reduxListState.length > 0 ? (
				<BookGridLayout books={reduxListState} type='list' />
			) : (
				<div className={styles.readingListLayout_placeholder}>
					<div className={styles.listCard_container_placeholder_card}></div>
				</div>
			)}
		</>
	);
};

export default ReadingListLayout;
