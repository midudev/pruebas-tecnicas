import { myReadingListLength } from '../../states/store';

export const Header = () => {
	return (
		<header className="text-black font-mystery px-8 gap-x-20 flex items-baseline border-b pb-2 border-black pt-4 sticky top-0 bg-white z-10">
			<h1 className="text-2xl font-thin ">
				Good<span className="font-normal">reads</span>
			</h1>

			<div className="flex justify-evenly w-full">
				<p>My books {myReadingListLength}</p>
			</div>
		</header>
	);
};
