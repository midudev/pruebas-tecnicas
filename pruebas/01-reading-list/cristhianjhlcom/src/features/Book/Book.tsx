import { useContext } from "react";
import { Header } from "../../components";
import { BookContext } from "../../utils/context";
import { Favorite } from "../Favorite";
import styles from "./Book.module.css";
import BookDialog from "./BookDialog";
import BookList from "./BookList";

export default function Book() {
	const { books } = useContext(BookContext);

	return (
		<>
			<Header>({books.length}) Libros Disponibles</Header>
			<div className={styles.wrapper}>
				<div className={styles.grid}>
					<BookList />
					<Favorite />
				</div>
				<BookDialog />
			</div>
		</>
	);
}
