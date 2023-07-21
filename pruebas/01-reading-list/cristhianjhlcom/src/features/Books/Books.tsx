import { useContext } from "react";
import { Header } from "../../components/Header";
import { BooksContext } from "../../utils/context/BooksContextProvider";
import { Favorite } from "../Favorite";
import styles from "./Books.module.css";
import BooksDialog from "./BooksDialog";
import BooksList from "./BooksList";

export default function Books() {
	const { books } = useContext(BooksContext);

	return (
		<>
			<Header>({books.length}) Libros Disponibles</Header>
			<div className={styles.wrapper}>
				<div className={styles.grid}>
					<BooksList />
					<Favorite />
				</div>
				<BooksDialog />
			</div>
		</>
	);
}
