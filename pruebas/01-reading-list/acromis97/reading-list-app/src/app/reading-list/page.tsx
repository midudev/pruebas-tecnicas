import { Book } from "../types/Book";

export default function Page() {
	let readingList: Book[] = [];

	return (
		<>
			<h1 className="text-3xl place-self-start font-bold my-3 mx-6">
				Nuestros libros
			</h1>
			<div>
				{readingList.length == 0 ? <h2>No tienes libros en tu lista</h2> : 
					<h2></h2>
				}
			</div>
		</>
	);
}
