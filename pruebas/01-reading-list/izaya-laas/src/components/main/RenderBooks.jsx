import { filterBooks } from '../../filters/forBook';
import { currentPath, myReadingListISBN } from '../../signals/store';

const RenderBooks = ({ books, handleAddBookToReadingList }) => {
	const addBookToReadingList = (ISBN) => {
		if (myReadingListISBN.value.includes(ISBN)) {
			myReadingListISBN.value = myReadingListISBN.value.filter(
				(book) => book !== ISBN
			);

			return;
		}

		myReadingListISBN.value = [...myReadingListISBN.value, ISBN];
	};

	return (
		<>
			{filterBooks(books)?.map((book) => {
				const { title, cover, author, ISBN } = book;
				const { name } = author;

				return (
					<figure
						className={`w-44 lg:w-48 border border-[#41403E] p-2 pb-2 rounded-tl-[255px_15px] rounded-tr-[15px_255px] rounded-br-[255px_15px] rounded-bl-[15px_255px] bg-opacity-20  ${
							myReadingListISBN.value.includes(ISBN) &&
							currentPath.value !== '/my-books'
								? 'bg-grated-pattern '
								: 'bg-white'
						}`}
						id={ISBN}
						onClick={() => {
							addBookToReadingList(ISBN);
						}}
					>
						<img
							className="relative w-full object-cover aspect-[305/400] rounded-tl-[255px_15px] rounded-tr-[15px_255px]  grayscale-[60%]"
							src={cover}
							alt={`cover of ${title}`}
						/>

						<div className="bottom-0 left-0 mt-2 w-full h-min px-2 py-0.5 bg-[#ffffffd7] rounded-tl-[255px_15px] rounded-tr-[15px_255px] rounded-br-[255px_15px] rounded-bl-[15px_255px] border border-black">
							<h4 title={title} className="text-center text-base truncate">
								{title}
							</h4>
							<p className="text-xs text-center text-gray-800">{name}</p>
						</div>
					</figure>
				);
			})}
		</>
	);
};

export default RenderBooks;
