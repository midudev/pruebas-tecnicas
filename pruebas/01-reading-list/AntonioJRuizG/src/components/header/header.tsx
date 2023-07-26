import { useMemo } from 'react';
import useBooks from '../../hooks/useBooks';
import { BooksRepo } from '../services/books.repo';

import styles from './header.module.scss';
import BooksFilter from '../filter/books.filter';

export default function Header() {
	const repo = useMemo(() => new BooksRepo(), []);
	const { booksCount } = useBooks(repo);
	return (
		<header className={styles.headerContainer}>
			<h1>Reading list</h1>
			{booksCount.avaibleBooks > 0 ? (
				<p className={styles.firstParagraph}>
					<span>{booksCount.avaibleBooks}</span> avaible books
				</p>
			) : (
				<p>There are no avaible books</p>
			)}
			{booksCount.selectedBooks > 0 ? (
				<p className={styles.secondParagraph}>
					<span>{booksCount.selectedBooks}</span> books in your list
				</p>
			) : null}

			<BooksFilter></BooksFilter>
		</header>
	);
}
