"use client";

import BookCard from "@/components/BookCard/BookCard";
import ListCard from "@/components/ListCard/ListCard";
import { Book } from "@/models/book.model";
import styles from "./BooksGridLayout.module.scss";

interface BooksGridLayoutProps {
	books: Book[];
	type: "list" | "books";
}

const BookGridLayout = ({ books, type }: BooksGridLayoutProps) => {
	return (
		<div
			className={`${styles.bookGridLayout_card_container} ${
				type === "list" && styles.bookGridLayout_card_container_list
			}`}
		>
			{type === "books" && books.map((item) => <BookCard key={item.ISBN} book={item} />)}

			{type === "list" && books.map((item) => <ListCard key={item.ISBN} book={item} />)}
		</div>
	);
};

export default BookGridLayout;
