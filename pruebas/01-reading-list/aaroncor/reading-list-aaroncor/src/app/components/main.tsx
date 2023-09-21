/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import styles from '.././page.module.css';
import { useEffect, useState } from 'react';
import booksFromJson from '../../../json/books.json';
import { ILibrery } from '../../../lib/interfaces';
import BooksList from './booksList';
import { ETipoLista } from '../../../lib/enums';
import { getDataToLS, setDataToLS } from '../../../lib/localStorageUtils';

export default function Main() {
	const [books, setBooks] = useState<ILibrery>(booksFromJson);
	const [filterBooks, setFilterBooks] = useState<ILibrery>(booksFromJson);
	const [rbooks, setRbooks] = useState<ILibrery>({ library: [] });
	const [loading, setLoading] = useState<boolean>(true);
	const [countRB, setCountRB] = useState<number>(0);
	const [filterOptions, setFilterOptions] = useState<string[]>([]);
	const [selectedGenre, setSelectedGenre] = useState<string>('Todos');

	// Para testeo
	useEffect(() => {
		console.log('books: ', books);
	}, [books]);

	// Carga inicial del storage
	useEffect(() => {
		const booksFromLS = getDataToLS();
		setRbooks(booksFromLS);
		setLoading(false);
	}, []);

	// Setea el número de libros en lista de lectura y activa la propiedad inList en el state que tiene la info de todos los libros.
	useEffect(() => {
		const copyBooks = { ...books };
		copyBooks.library.forEach((value, index) => {
			const bookIndex = rbooks.library.findIndex((e) => {
				return e.book.ISBN == value.book.ISBN;
			});
			if (bookIndex >= 0) {
				value.book.inList = true;
			} else {
				value.book.inList = false;
			}
		});
		setBooks(copyBooks);
		setCountRB(rbooks.library.length);
	}, [rbooks]);

	// Si se modifica la lista de libros, actualiza el combo de géneros y vuelve a filtrar la lista con los nuevos cambios con el filtro seleccionado.
	useEffect(() => {
		const list: string[] = [];
		books.library.forEach((value) => {
			if (!list.includes(value.book.genre)) list.push(value.book.genre);
		});
		setFilterOptions(list);
		filtrarLibros(selectedGenre);
	}, [books]);

	// Si hay un cambio en el combo para filtrar por género, llama a la función para filtrar de nuevo
	useEffect(() => {
		filtrarLibros(selectedGenre);
	}, [selectedGenre]);

	// Añade la escucha del evento onStorageUpdate, para actualizar el state si hay un cambio
	useEffect(() => {
		window.addEventListener('storage', onStorageUpdate);
		return () => {
			window.removeEventListener('storage', onStorageUpdate);
		};
	}, []);

	const onStorageUpdate = (e: StorageEvent) => {
		if (e.key === 'listado') {
			const booksFromLS = getDataToLS();
			setRbooks(booksFromLS);
		}
	};

	const moreInfo = (isbn: string) => {
		const result = books.library.find((e) => {
			return e.book.ISBN == isbn;
		});
		console.log(result?.book.author);
	};

	// Añade al state y al localStorage los cambios en la lista de lectura
	const setToList = (librery: ILibrery) => {
		setRbooks(librery);
		setDataToLS(JSON.stringify(librery));
	};

	// Filra los libros
	const filtrarLibros = (genero: string) => {
		const allBooks = { ...books };
		if (genero === 'Todos') setFilterBooks(allBooks);
		else {
			const result = allBooks.library.filter((v) => v.book.genre === genero);
			const fb = { ...filterBooks };
			fb.library = result;
			setFilterBooks(fb);
		}
	};

	return loading ? (
		<main className={styles.loading}></main>
	) : (
		<main className={styles.main}>
			<div className={styles.leftSection}>
				<div>
					<label style={{ color: 'white' }}>Bucador:</label>
					<select
						style={{ marginLeft: '10px' }}
						value={selectedGenre}
						onChange={(e) => setSelectedGenre(e.target.value)}
					>
						<option defaultValue="Todos">Todos</option>
						{filterOptions.map((e, i) => {
							return (
								<option key={i} value={e}>
									{e}
								</option>
							);
						})}
					</select>
					<label style={{ color: 'white', marginLeft: '10px' }}>
						Libros por leer: ({books.library.length - countRB}):
					</label>
				</div>
				<BooksList
					booksToShow={filterBooks}
					myListBooks={rbooks}
					divClassName={styles.booksList}
					imageClassName={styles.imgBooksList}
					tipoLista={ETipoLista.libreria}
					setToList={setToList}
					moreInfo={moreInfo}
				/>
			</div>

			<div className={styles.rightSection} style={{ color: 'white' }}>
				<div>
					<label>Mi lista ({countRB}):</label>
				</div>
				<BooksList
					booksToShow={rbooks}
					myListBooks={rbooks}
					divClassName={styles.readingList}
					imageClassName={styles.imgReadingList}
					tipoLista={ETipoLista.lista}
					setToList={setToList}
					moreInfo={moreInfo}
				/>
			</div>
		</main>
	);
}
