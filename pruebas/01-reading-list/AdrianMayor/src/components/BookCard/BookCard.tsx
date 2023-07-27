"use client";

import useHandleCards from "@/hooks/useHandleCards";
import useManageRedux from "@/hooks/useManageRedux";
import { Book } from "@/models/book.model";
import Image from "next/image";
import { useEffect, useState } from "react";
import BookModal from "../BookModal/BookModal";
import CardButton from "../CardButton/CardButton";
import styles from "./BookCard.module.scss";

interface BookCardProps {
	book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
	const { reduxListState } = useManageRedux();
	const [lastList, setLasList] = useState(reduxListState);
	const { handleAdd, handleRemove, isAvailable, setIsAvailable } = useHandleCards({ book });
	const [displayModal, setDisplayModal] = useState(false);

	//Set for first time is available
	useEffect(() => {
		setIsAvailable(book.availability);
	}, [book]);

	useEffect(() => {
		// Logic to apply available styles once they are out list
		if (reduxListState.length < lastList.length) {
			const differenceRemoving = lastList.find(
				(item) => !reduxListState.some((lastItem) => item.ISBN === lastItem.ISBN)
			);
			if (book.ISBN === differenceRemoving?.ISBN) {
				setIsAvailable(true);
			}
		}

		if (reduxListState.length > lastList.length) {
			const differenceAdding = reduxListState.find(
				(item) => !lastList.some((newItem) => item.ISBN === newItem.ISBN)
			);
			if (book.ISBN === differenceAdding?.ISBN) {
				setIsAvailable(false);
			}
		}

		setLasList(reduxListState);
	}, [reduxListState]);

	return (
		<article className={styles.bookCard_container}>
			<div className={styles.bookCard_container_image}>
				<Image
					src={book.cover}
					alt={`${book.title} cover image`}
					fill
					sizes='(width:12rem)'
					className={`${isAvailable ? styles.bookCard_image : styles.bookCard_image_unavailable}`}
					priority={false}
					onClick={() => setDisplayModal(!displayModal)}
				/>
			</div>

			<div className={styles.bookCard_text_container}>
				<p className={"text_smaller"}>{book.author.name}</p>
				<h3 className={`text_smaller_bold ${styles.bookCard_text_title}`}>{book.title}</h3>
			</div>

			<CardButton availability={isAvailable} handleAdd={handleAdd} handleRemove={handleRemove} />
			{displayModal && <BookModal open={displayModal} book={book} setDisplayModal={setDisplayModal} />}
		</article>
	);
};

export default BookCard;
