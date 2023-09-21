'use client';

import Image from 'next/image';
import { ILibrery } from '../../../lib/interfaces';
import styles from '.././page.module.css';
import { ETipoLista } from '../../../lib/enums';

interface IProps {
	booksToShow: ILibrery;
	myListBooks: ILibrery;
	divClassName: string;
	imageClassName: string;
	tipoLista: ETipoLista;
	setToList(librery: ILibrery): void;
	moreInfo(isbn: string): void;
}

export default function BooksList(props: IProps) {
	const checkList = (isbn: string) => {
		const nMyListBooks = { ...props.myListBooks };
		const index = nMyListBooks.library.findIndex((e) => {
			return e.book.ISBN == isbn;
		});
		if (index >= 0) {
			nMyListBooks.library.splice(index, 1);
		} else {
			const result = props.booksToShow.library.find((e) => {
				return e.book.ISBN == isbn;
			});
			if (result) {
				nMyListBooks.library.push(result);
			}
		}
		props.setToList(nMyListBooks);
	};

	return (
		<div className={props.divClassName}>
			{props.booksToShow.library.map((mBook) => {
				const selected =
					mBook.book.inList && props.tipoLista == ETipoLista.libreria
						? styles.selected
						: '';
				return (
					<Image
						src={mBook.book.cover}
						alt={mBook.book.title}
						className={props.imageClassName + ' ' + selected}
						id={mBook.book.ISBN}
						key={mBook.book.ISBN}
						layout="fill"
						onClick={(e) => checkList(e.currentTarget.id)}
						onDoubleClick={(e) => props.moreInfo(e.currentTarget.id)}
						priority
					/>
				);
			})}
		</div>
	);
}
