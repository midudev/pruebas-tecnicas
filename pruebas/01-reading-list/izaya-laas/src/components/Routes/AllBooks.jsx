import { library as books } from '../../database/books.json';
import { myReadingListISBN, myReadingListLength } from '../../states/store';

const AllBooks = () => {
	const addBookToReadingList = (isbn) => {
		const setISBN = new Set(myReadingListISBN.value);

		if (setISBN.size <= myReadingListLength && setISBN.size !== 0) return '';

		myReadingListISBN.value = [...myReadingListISBN.value, isbn];
	};
	return (
		<>
			{books.map(({ book }) => {
				const { title, cover, author, ISBN } = book;
				const { name } = author;

				return (
					<figure
						className="w-40 lg:w-48 border border-[#41403E] p-4 rounded-tl-[255px_15px] rounded-tr-[15px_255px] rounded-br-[255px_15px] rounded-bl-[15px_255px]"
						id={ISBN}
						onClick={() => {
							addBookToReadingList(ISBN);
						}}
					>
						<img
							className="w-full object-cover aspect-[305/400] rounded-t-md grayscale-[60%]"
							src={cover}
							alt={`cover of ${title}`}
						/>
						<p className="mt-2 text-sm text-center text-gray-800">{name}</p>
					</figure>
				);
			})}
		</>
	);
};

export default AllBooks;
