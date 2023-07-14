'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import { MouseEventHandler, useEffect, useState } from 'react';
import booksFromJson from '../../json/books.json';
import { ILibrery, Library } from '../../lib/interfaces/interfaces';

export default function Home() {
	const router = useRouter();
	const [books, setBooks] = useState<ILibrery>(booksFromJson);
	const [rbooks, setRbooks] = useState<ILibrery>();

	useEffect(() => {
		console.log('rbooks: ', rbooks);
	}, [rbooks]);

	const moreInfo = (isbn: string) => {
		const result = books.library.find((e) => {
			return e.book.ISBN == isbn;
		});
		console.log(result?.book.author);
	};

	const setToList = (isbn: string) => {
		const result = books.library.find((e) => {
			return e.book.ISBN == isbn;
		});
		if (result) {
			if (rbooks) {
				const newObject = { ...rbooks };
				newObject.library.push(result);
				setRbooks(newObject);
			} else {
				let primerValor = { ...books };
				primerValor.library = primerValor.library.filter((e) => {
					return e.book.ISBN == isbn;
				});
				setRbooks(primerValor);
			}
		}
	};

	return (
		<main className={styles.main}>
			<div className={styles.booksList}>
				{books.library.map((e) => {
					return (
						<Image
							src={e.book.cover}
							alt={e.book.title}
							className={styles.imgBooksList}
							id={e.book.ISBN}
							key={e.book.ISBN}
							layout="fill"
							onClick={(e) => setToList(e.currentTarget.id)}
							onDoubleClick={(e) => moreInfo(e.currentTarget.id)}
							priority
						/>
					);
				})}
			</div>
			<div className={styles.readingList}>
				{rbooks?.library.map((e) => {
					return (
						<Image
							src={e.book.cover}
							alt={e.book.title}
							className={styles.imgReadingList}
							id={e.book.ISBN}
							key={e.book.ISBN}
							layout="fill"
							onClick={(e) => setToList(e.currentTarget.id)}
							onDoubleClick={(e) => moreInfo(e.currentTarget.id)}
							priority
						/>
					);
				})}
			</div>
		</main>
	);
}
