import { useMemo } from 'react';
import useBooks from '../hooks/useBooks';
import { BooksRepo } from '../services/books.repo';

export default function Header() {
	const repo = useMemo(() => new BooksRepo(), []);
	const { booksCount } = useBooks(repo);
	return (
		<>
			<h1>Reading list</h1>
			{booksCount.avaibleBooks > 0 ? (
				<p>{booksCount.avaibleBooks} avaible books</p>
			) : (
				<p>There are no avaible books</p>
			)}
			{booksCount.selectedBooks > 0 ? (
				<p>{booksCount.selectedBooks} books in your list</p>
			) : null}
		</>
	);
}
