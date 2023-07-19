import Image from "next/image";
import Link from "next/link";

import { Book } from "../types/Book";

export function BookCard(props: any) {
	let book: Book = props.book;

	return (
		<article className="p-2 hover:shadow-2xl" key={book.ISBN}>
			<Link
				className="flex flex-1 flex-col place-items-center"
				href={{
					pathname: "/book",
					query: book.ISBN,
				}}>
				<div className="w-40 h-64 py-3 object-cover relative">
					<Image
						className=""
						src={book.cover}
						alt={book.title}
						fill={true}
					/>
				</div>

				<p className="font-bold my-2 truncate">{book.title}</p>
				<p className="my-1">{book.author.name}</p>
			</Link>
		</article>
	);
}
