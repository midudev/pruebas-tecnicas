import { useMemo } from 'react';
import useBooks from '../hooks/useBooks';
import { BooksRepo } from '../services/books.repo';

export default function Header() {
	const repo = useMemo(() => new BooksRepo(), []);
	const { avaibleBooks, books } = useBooks(repo);
	return (
		<>
			<h1>Reading list</h1>
			<p>Avaible Books {avaibleBooks}</p>
		</>
	);
}
