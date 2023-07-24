"use client";

import Image from "next/image";
import Link from "next/link";

import { Book } from "../types/Book";
import { useReadingList } from "../hooks/useReadingList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartAlt } from "@fortawesome/free-regular-svg-icons";

export function BookCard(props: any) {
	let book: Book = props.book;
	const { addToReadingList, removeFromReadingList } = useReadingList();

	const buttonReadingList = () => {
		return book.inReadingList ? (
			<button
				className="text-sky-700 px-6 hover:scale-105"
				onClick={() => removeFromReadingList(book)}>
				<FontAwesomeIcon className="pr-1" icon={faHeartAlt} size="sm" />
				Quitar de la lista
			</button>
		) : (
			<button
				className="text-rose-700 px-6 hover:scale-105"
				onClick={() => addToReadingList(book)}>
				<FontAwesomeIcon className="pr-1" icon={faHeart} size="sm" />
				Agregar a lista
			</button>
		);
	};

	return (
		<article
			className="flex flex-1 flex-col place-items-center p-2 shadow-lg shadow-slate-500/50"
			key={book.ISBN}
			id={book.ISBN}>
			<Link
				className=""
				href={{
					pathname: "/book",
					query: book.ISBN,
				}}>
				<div className="w-40 h-64 py-3 object-cover relative">
					<Image src={book.cover} alt={book.title} sizes="" fill={true} />
				</div>
			</Link>

			<p className="font-bold my-2 truncate">{book.title}</p>
			<p className="my-1">{book.author.name}</p>
			<div className="flex w-max">{buttonReadingList()}</div>
		</article>
	);
}
