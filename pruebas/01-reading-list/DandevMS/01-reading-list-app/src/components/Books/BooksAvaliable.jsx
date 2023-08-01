import { useContext } from "react";

import { BooksContext } from "../../context/BooksContextProvider";

function BooksAvaliable() {
	const { avaliableBooks, avaliableBooksReading } = useContext(BooksContext);
	return (
		<div className="flex gap-1">
			<div className="flex border p-2">
				<h1>Libros disponibles</h1>
				<span className="ml-4">{avaliableBooks}</span>
			</div>

			<div className="flex border p-2">
				<h1>Libros en lista de lectura</h1>
				<span className="ml-4">{avaliableBooksReading}</span>
			</div>
		</div>
	);
}

export default BooksAvaliable;
