import { Header } from './components/header/Header';
import ExcludeBooks from './components/main/ExcludeBooks';
import Navbar from './components/main/Navbar';
import RangePages from './components/main/RangePages';
import SelectGenre from './components/main/SelectGenre';
import SpecificBook from './components/main/SpecificBook';
import Pages from './components/Routes/Routes.jsx';

// const options = signal({
// 	ExcludeBooks: false,
// 	SpecificBook: '',
// 	genre: 'any',
// 	pages: ['', ''],
// });

export function App() {
	return (
		<>
			<Header />
			<main className="relative font-tilt text-black h-screen grid grid-cols-[200px_1fr] grid-rows-[1fr]">
				<aside className="border-r-2 border-black pt-4 sticky top-8 w-[200px] rounded-tr-[5px_800px] rounded-br-[5px_800px] ">
					<div className="pb-1 bg-grated-pattern w-min mx-auto rounded-b-md">
						<h4 className="text-center text-lg mt-1 h-full bg-white">
							Filters
						</h4>
					</div>
					<form className="w-full text-md flex flex-col items-start px-4 mt-6 gap-y-4 font-handlee ">
						<div>
							<SpecificBook />
						</div>
						<div className="w-full">
							<SelectGenre />
						</div>
						<div>
							<RangePages />
						</div>
						<div className="flex gap-x-2">
							<ExcludeBooks />
						</div>
					</form>
				</aside>
				<article className="w-full p-4 overflow-y-scroll">
					<h2 className="text-3xl border-b border-white">Books</h2>
					<Navbar />
					<section className="flex flex-wrap gap-4 mt-6 pb-20">
						<Pages />
					</section>
				</article>
			</main>
		</>
	);
}
