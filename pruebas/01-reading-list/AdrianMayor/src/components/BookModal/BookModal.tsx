import { Book } from "@/models/book.model";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styles from "./BookModal.module.scss";
import CardButton from "../CardButton/CardButton";
import Image from "next/image";
import useHandleCards from "@/hooks/useHandleCards";
import useManageRedux from "@/hooks/useManageRedux";

interface BookModalProps {
	book: Book;
	open: boolean;
	setDisplayModal: Dispatch<SetStateAction<boolean>>;
}

const BookModal = ({ book, setDisplayModal, open }: BookModalProps) => {
	const modalRef = useRef<HTMLDialogElement>(null);
	const { handleAdd, handleRemove, isAvailable } = useHandleCards({ book });
	const { reduxListState } = useManageRedux();
	const bookInRedux = reduxListState.find((item) => item.ISBN === book.ISBN);

	useEffect(() => {
		open ? modalRef?.current?.showModal() : modalRef?.current?.close();
	}, [open]);

	return (
		<dialog ref={modalRef} className={styles.bookModal_container}>
			<div>
				<div className={styles.bookModal_container_image}>
					<Image
						src={book.cover}
						alt={`${book.title} cover image`}
						fill
						sizes='(width:17rem)'
						className={`${isAvailable ? styles.bookModal_image : styles.bookModal_image_unavailable}`}
						priority={false}
					/>
				</div>

				<CardButton availability={isAvailable} handleAdd={handleAdd} handleRemove={handleRemove} />
			</div>
			<div className={styles.bookModal_container_detail}>
				<div>
					<p className='text_smaller'>{book.author.name}</p>
					<h4 className='text_smaller_bold'>{book.title}</h4>
					<p className='text_smaller'> {book.year}</p>
				</div>

				<div>
					<p className='text_small_light'>{book.synopsis}</p>
					<p className='text_smaller'>Genre: {book.genre}</p>
					<p className='text_smaller'>{book.pages} pages</p>
				</div>

				<div>
					<h4>More From This Author</h4>
					{book.author.otherBooks.map((item) => (
						<p key={item} className='text_smaller'>
							{item}
						</p>
					))}
				</div>
			</div>
			<button
				onClick={() => {
					setDisplayModal(false);
				}}
				className={styles.bookModal_container_button}
			></button>
		</dialog>
	);
};

export default BookModal;
