// import { library as books } from '../../database/books.json';
import { filterBooks } from '../../filters/forBook';
import { allBooks, currentPath, myReadingListISBN } from '../../signals/store';

const AllBooks = () => {
	currentPath.value = '/';

	const addBookToReadingList = (ISBN) => {
		if (myReadingListISBN.value.includes(ISBN)) return;
		myReadingListISBN.value = [...myReadingListISBN.value, ISBN];
	};
	return (
		<>
			{filterBooks(allBooks.value).map((book) => {
				const { title, cover, author, ISBN } = book;
				const { name } = author;

				return (
					<figure
						className={`w-40 lg:w-48 border border-[#41403E] p-4 rounded-tl-[255px_15px] rounded-tr-[15px_255px] rounded-br-[255px_15px] rounded-bl-[15px_255px] ${
							myReadingListISBN.value.includes(ISBN)
								? 'bg-grated-pattern'
								: 'bg-white'
						}`}
						id={ISBN}
						onClick={() => {
							addBookToReadingList(ISBN);
						}}
					>
						<img
							className="w-full object-cover aspect-[305/400] rounded-tl-[255px_15px] rounded-tr-[15px_255px] rounded-br-[255px_15px] rounded-bl-[15px_255px] grayscale-[60%]"
							src={cover}
							alt={`cover of ${title}`}
						/>
						<p className="bg-white mt-2 text-sm text-center text-gray-800">
							{name}
						</p>
					</figure>
				);
			})}
		</>
	);
};

export default AllBooks;
